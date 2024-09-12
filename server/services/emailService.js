import nodemailer from 'nodemailer';

const sendEmail = async (email, name, description) => {
    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'atkl.records@gmail.com',
                pass: 'xhrr yzqg ibfk pqfo'
            }
        });

        const mailOptions = {
            from: 'atkl.records@gmail.com',
            to: email,
            subject: 'Nuevo formulario de contacto',
            text: `Nombre: ${name}\nCorreo electrónico: ${email}\nDescripción: ${description}`
        };

        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent:', info.response);
        return 'Email sent successfully';
    } catch (error) {
        console.error('Error sending email:', error);
        throw new Error('Error sending email');
    }
};

export default sendEmail;
