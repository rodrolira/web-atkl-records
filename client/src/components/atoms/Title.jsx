import React from 'react'
import PropTypes from 'prop-types'

function Title ({ children }) {
  return (
    <h2 className='text-4xl font-bold my-12 text-white text-center'>
      {children}
    </h2>
  )
}

Title.propTypes = {
  children: PropTypes.node
}

export default Title
