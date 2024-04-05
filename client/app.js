import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import nodemailer from 'nodemailer';

import dotenv from 'dotenv';
dotenv.config(); // Load environment variables from .env file


const app = express();
app.use(cors());
// Configura el middleware para analizar el cuerpo de las solicitudes
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Hello from our server!')
})


app.post('/api/submit-form', (req, res) => {
    // Extrae los datos del formulario de la solicitud
    const { name, email, description } = req.body;

    // Configura el transporte SMTP para enviar correos electrónicos
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'atkl.records@gmail.com', // Tu dirección de correo electrónico de Gmail
            pass: 'xhrr yzqg ibfk pqfo' // Tu contraseña de Gmail
        }
    });

    // Configura las opciones del correo electrónico
    const mailOptions = {
        from: 'atkl.records@gmail.com',
        to: email,
        subject: 'Nuevo formulario de contacto',
        text: `Nombre: ${name}\nCorreo electrónico: ${email}\nDescripción: ${description}`
    };

    // Envía el correo electrónico
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error);
            res.status(500).send('Error sending email');
        } else {
            console.log('Email sent:', info.response);
            res.status(200).send('Form submitted successfully');
        }
    });
});

// Inicia el servidor en el puerto especificado
const PORT = process.env.PORT || 9000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});



