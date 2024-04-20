import React, { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

const ContactForm = () => {
  const { language } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    description: ''
  });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5050/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error('Error al enviar el formulario');
      }

      setFormData({
        name: '',
        email: '',
        description: ''
      });
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
    }
  };


  return (
    <div>
      <div className='max-w-md mx-auto text-white rounded px-8 pt-6 pb-8 mb-4 '>
        <h2 className='text-2xl font-bold mb-4 text-center'>
          {language === 'en' ? 'Subscribe' : 'Suscribirse'}
        </h2>
        <p className='text-center mb-4'>
          {language === 'en'
            ? 'Subscribe to receive the latest releases for free by email'
            : 'Suscríbete para recibir los últimos lanzamientos de forma gratuita por correo electrónico'}
        </p>
        <form onSubmit={handleSubmit} className='text-white'>
          <div className='mb-4'>
            <label className='block text-sm font-bold mb-2' htmlFor='name'>
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
            <label className='block text-sm font-bold mb-2' htmlFor='email'>
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
              className='block text-sm font-bold mb-2'
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
