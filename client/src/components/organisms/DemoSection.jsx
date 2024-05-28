// DemosSection.jsx
import React from 'react'
import Title from '../atoms/Title'

function DemosSection () {
  return (
    <section id='demos' className='lg:mx-64 lg:block sm:hidden py-16'>
      <div className='container mx-auto'>
        <Title children={'Demos'} />
        <div className='iframe-container h-full sm:h-[20%]'>
          <iframe
            className='mx-auto '
            width='600'
            height='650'
            src='https://atklrecords.label-engine.com/demos?embed=1&bg_color=020617&text_color=ffffff&feature_color=c51616'
          ></iframe>
        </div>
      </div>
    </section>
  )
}

export default DemosSection
