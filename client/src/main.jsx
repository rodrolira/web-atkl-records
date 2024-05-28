import React from 'react'
import * as ReactDOM from 'react-dom/client'

// import App from './App'
// import 'vite/modulepreload-polyfill'
import './index.css'
import Layout from './layouts/Layout'

// const httpLink = createHttpLink({
//     uri: 'http://localhost:4000/',
//     fetch,
// })

// const authLink = setContext((_, { headers }) => {

//     // Leer el storage almacenado
//     const token =   localStorage.getItem('token')
//     return {
//         headers: {
//             ...headers,
//             authorization: token ? `Bearer ${token}`: ''
//         },
//     }
// })

// const client = new ApolloClient({
//     connectToDevTools: true,
//     cache: new InMemoryCache(),
//     link: authLink.concat(httpLink),
// })

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
            <Layout />
    </React.StrictMode>
)
