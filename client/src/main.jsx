// main.jsx
import React from 'react'
import * as ReactDOM from 'react-dom/client'

// import App from './App'
// import 'vite/modulepreload-polyfill'
import './index.css'
import Layout from './layouts/Layout'
import { AuthProvider } from './contexts/AuthContext'
import { AdminAuthProvider } from './contexts/AdminAuthContext'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <AuthProvider>
            <AdminAuthProvider>
            {/* <App /> */}
                <Layout />
            </AdminAuthProvider>
        </AuthProvider>
    </React.StrictMode>
)
