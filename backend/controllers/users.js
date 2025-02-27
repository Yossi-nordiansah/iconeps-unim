import prismaClient from "../src/prisma-client.js";
import dotenv from 'dotenv'
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

dotenv.config();

export const getUsers = async (req, res) => {
    try {
        const users = await prismaClient.users.findMany({
            select: {
                id: true,   
                name: true, 
                email: true
            }
        });
        res.json(users);
    } catch (error) {
        console.log(error)
    }
};

export const Register = async (req, res) => {
    const { password, confPassword, nama, nim, email, prodi, semester, nomorTelepon } = req.body;
    if (password !== confPassword) return res.status(400).json({ message: "password dan confirm password tidak cocok" });
    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(password, salt);

    try {
        const users = await prismaClient.users.create({
            data: {
                username: nama,
                password: hashPassword,
                role: "mahasiswa"
            }
        });

        await prismaClient.mahasiswa.create({
            data: {
                user_id: users.id,
                nama: nama,
                nim: nim,
                email: email,
                prodi: prodi,
                semester: semester,
                nomor_telepon: nomorTelepon
            }
        })
        res.status(201).send({ message: "Registrasi Berhasil" });
    } catch (error) {
        res.status(500).send({ message: 'Registrasi Gagal' })
        console.log(error)
    }
}

export const Login = async (req, res) => {
    try {
        const user = await prismaClient.users.findFirst({
            where: {
                mahasiswa: {
                    some: {
                        email: req.body.email
                    }
                }
            },
            include: {
                mahasiswa: true
            }
        });


        if (!user) {
            console.log("Kondisi !user terpenuhi");
            return res.status(404).json({ message: "email tidak ditemukan" });
        }

        const match = await bcrypt.compare(req.body.password, user.password);
        if (!match) return res.status(400).json({ message: "password salah" });
        const userId = user.id;
        const name = user.mahasiswa[0].nama;
        const email = user.mahasiswa[0].email;

        const accessToken = jwt.sign({ userId, name, email }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '20s' });
        const refreshToken = jwt.sign({ userId, name, email }, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '1d' });

        await prismaClient.users.update({
            data: {
                refresh_token: refreshToken
            },
            where: {
                id: userId
            }
        });

        res.cookie('refreshToken', refreshToken, {
            httpOnly: true,
            maxAge: 24 * 60 * 60 * 1000
        });
        res.json({ accessToken, message : "login berhasil" })
    } catch (error) {
        res.status(404).json({ message: "Terjadi kesalahan pada server" })
    }
};

export const Logout = async (req, res) => {
    const refreshToken = req.cookies.refreshToken;
    if(!refreshToken) return res.sendStatus(204);
    const user = await prismaClient.users.findMany({
        where : {
            refresh_token : refreshToken
        },
        include : {
            mahasiswa: true
        }
    });
    if(!user[0]) return res.sendStatus(204);
    const userId = user[0].id;
    await prismaClient.users.update({
        where : {
            id : userId
        },
        data : {
            refresh_token : null
        }
    });
    res.clearCookie('refreshToken');
    return res.sendStatus(200);
}