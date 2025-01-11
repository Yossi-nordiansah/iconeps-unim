import prismaClient from "../src/prisma-client.js";
import nodemailer from 'nodemailer';

export const sendEmail = async (req, res) => {

    try {
        const { subject, message } = req.body;

        const recipientsData = await prismaClient.mahasiswa.findMany({
            select: {
                email: true
            }
        }
        );
        const recipients = recipientsData.map(recipient => recipient.email);

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: "yossi.nordiansah07@gmail.com",
                pass: 'zgqrsncstfiqbfdq',
            },
        });

        for (const recipient of recipients) {
            await transporter.sendMail({
                from: "yossi.nordiansah07@gmail.com",
                to: recipient,
                subject: subject,
                text: message,
                html: `<p>${message}</p>`,
            });
        };

        res.json({message : "berhasil"});

    } catch (error) {
        console.error('Error mengirim email:', error);
        res.status(500).json({ message: 'Gagal mengirim email.' });
    }
}