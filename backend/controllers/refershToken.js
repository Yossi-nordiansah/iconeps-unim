import prismaClient from "../src/prisma-client.js";
import jwt from "jsonwebtoken";

export const refreshToken =  async (req, res) => {
    try {
        const refreshToken = req.cookies.refreshToken;
        if(!refreshToken) return res.sendStatus(401);
        const user = await prismaClient.users.findMany({
            where : {
                refresh_token : refreshToken
            },
            include : {
                mahasiswa: true
            }
        });
        if(!user[0]) return res.sendStatus(403);
        jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, decoded) => {
            if(err) return res.sendStatus(403);
            const userId = user[0].id;
            const name = user[0].mahasiswa[0].nama;
            const email = user[0].mahasiswa[0].email;
            const accessToken = jwt.sign({userId, name, email}, process.env.ACCESS_TOKEN_SECRET, {expiresIn : '20s'})
            res.json({accessToken})
        })
    } catch (error) {
        console.log(error)
    }
}