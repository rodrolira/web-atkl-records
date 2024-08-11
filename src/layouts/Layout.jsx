import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Footer from '../components/organisms/Footer'
import '../App.css'

const Layout = ({ children }) => {
    return (
        <div className='flex'>
            <div className='layout'>
                <BrowserRouter>
                    {children}
<<<<<<< HEAD
                    <Footer />

                </BrowserRouter>
=======
                </BrowserRouter>
                <Footer />
>>>>>>> 8bdbd8a2f72f04acc13eaae10f9f32042ff8ae96

            </div>
        </div>
    )
}

export default Layout
