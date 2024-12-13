import prismaClient from "../src/prisma-client.js";
import bycript from "bcrypt";

export const getUsers = async (req, res) => {
    try {
        const users = await prismaClient.users.findMany({});
        res.json(users)
    } catch (error) {
        console.log(error)
    }
};

export const Register = async (req, res) => {
    const { username, password, confPassword, nama, nim, email, prodi, semester, nomor_telepon } = req.body;
    if(password !== confPassword) return res.status(400).json({message : "password dan confirm password tidak cocok"});
    const salt = await bycript.genSalt();
    const hashPassword = await bycript.hash(password, salt);

    try {
        const users = await prismaClient.users.create({
            data : {
                username : username,
                password : hashPassword,
                role : "mahasiswa"
            }
        });

        await prismaClient.mahasiswa.create({
            data: {
                user_id : users.id,
                nama : nama,
                nim : nim,
                email : email,
                prodi : prodi,
                semester : semester,
                nomor_telepon : nomor_telepon
            }
        })

        res.status(201).send({message : "Registrasi Berhasil"});
    } catch (error) {
        res.status(500).send({message : 'Registrasi Gagal'})
        console.log(error)
    }
}