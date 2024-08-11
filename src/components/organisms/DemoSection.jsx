// DemosSection.jsx
import React from 'react'
import Title from '../atoms/Title'

function DemosSection () {
  return (
    <section id='demos' className='lg:mx-64 lg:block sm:hidden py-16'>
      <div className='container mx-auto'>
<<<<<<< HEAD
        <Title>Demos</Title>
=======
        <Title children={'Demos'} />
>>>>>>> 8bdbd8a2f72f04acc13eaae10f9f32042ff8ae96
        <div className='iframe-container h-full sm:h-[20%]'>
          <iframe
            className='mx-auto'
            width='600'
            height='650'
<<<<<<< HEAD
            style={{ border: '0' }} // Usar estilo en su lugar
            marginWidth='0'
            marginHeight='0'
=======
            frameborder='0'
            marginwidth='0'
            marginheight='0'
>>>>>>> 8bdbd8a2f72f04acc13eaae10f9f32042ff8ae96
            scrolling='true'
            src='https://atklrecords.label-engine.com/demos?embed=1&bg_color=020617&text_color=ffffff&feature_color=c51616'
          ></iframe>
        </div>
      </div>
    </section>
  )
}

export default DemosSection
