// main.jsx
import React from 'react'
import * as ReactDOM from 'react-dom/client'

// import App from './App'
// import 'vite/modulepreload-polyfill'
import './index.css'
import Layout from './layouts/Layout'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
            {/* <App /> */}
            <Layout />
    </React.StrictMode>
)
