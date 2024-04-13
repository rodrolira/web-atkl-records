import React, { useState } from 'react'
import { useLanguage } from '../../contexts/LanguageContext'

const ContactForm = () => {
  const { language } = useLanguage() // Obtiene el estado del idioma desde el contexto

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    description: ''
  })

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()

    // Enviar los datos del formulario al backend
    fetch('http://localhost:9000/auth/submit-form', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to submit form')
        }
        return response.json()
      })
      .then(data => {
        console.log('Form submitted successfully:', data)
        // Llamar a la función para enviar el correo con los nuevos lanzamientos
        sendEmailWithNewReleases(formData.email)
      })
      .catch(error => {
        console.error('Error submitting form:', error)
      })
  }

  const sendEmailWithNewReleases = recipientEmail => {
    // Aquí puedes agregar la lógica para enviar el correo electrónico utilizando Nodemailer u otro servicio de correo electrónico
    // Ejemplo de uso de Nodemailer:
    const nodemailer = require('nodemailer')

    // Configurar transporte SMTP
    const transporter = nodemailer.createTransport({
      host: 'smtp.example.com',
      port: 587,
      secure: false, // true para el puerto 465, false para otros puertos
      auth: {
        user: 'tu-correo@example.com',
        pass: 'tu-contraseña'
      }
    })

    // Configurar opciones del correo electrónico
    const mailOptions = {
      from: 'atkl.records@gmail.com',
      to: recipientEmail, // Utiliza la dirección de correo electrónico del destinatario del formulario
      subject:
        language === 'en' ? 'New Contact Form' : 'Nuevo formulario de contacto',
      text: `${language === 'en' ? 'Name' : 'Nombre'}: ${formData.name}\n${
        language === 'en' ? 'Email' : 'Correo electrónico'
      }: ${formData.email}\n${
        language === 'en' ? 'Description' : 'Descripción'
      }: ${formData.description}`
    }

    // Enviar correo electrónico
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error sending email:', error)
      } else {
        console.log('Email sent:', info.response)
      }
    })
  }

  return (
    <div>
      <div className='max-w-md mx-auto bg-white rounded px-8 pt-6 pb-8 mb-4 '>
        <h2 className='text-2xl font-bold mb-4 text-center'>
          {language === 'en' ? 'Subscribe' : 'Suscribirse'}
        </h2>
        <p className='text-center mb-4'>
          {language === 'en'
            ? 'Subscribe to receive the latest releases for free by email'
            : 'Suscríbete para recibir los últimos lanzamientos de forma gratuita por correo electrónico'}
        </p>
        <form onSubmit={handleSubmit}>
          <div className='mb-4'>
            <label
              className='block text-gray-700 text-sm font-bold mb-2'
              htmlFor='name'
            >
              {language === 'en' ? 'Name:' : 'Nombre:'}
            </label>
            <input
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              id='name'
              type='text'
              name='name'
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className='mb-4'>
            <label
              className='block text-gray-700 text-sm font-bold mb-2'
              htmlFor='email'
            >
              {language === 'en' ? 'Email:' : 'Correo electrónico:'}
            </label>
            <input
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              id='email'
              type='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className='mb-4'>
            <label
              className='block text-gray-700 text-sm font-bold mb-2'
              htmlFor='description'
            >
              {language === 'en'
                ? 'Description (Optional):'
                : 'Descripción (Opcional):'}
            </label>
            <textarea
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              id='description'
              name='description'
              value={formData.description}
              onChange={handleChange}
            />
          </div>
          <div className='flex items-center justify-between mx-auto'>
            <button
              className='bg-blue-500 hover:bg-blue-700 text-white mx-auto font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
              type='submit'
            >
              {language === 'en' ? 'Submit' : 'Enviar'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ContactForm
