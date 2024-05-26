import React from 'react'
import * as ReactDOM from 'react-dom/client'

import App from './App'
import 'vite/modulepreload-polyfill'
import './index.css'
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    HttpLink,
} from '@apollo/client'
import { LanguageProvider } from './contexts/LanguageContext'
import { AdminAuthProvider, AuthProvider } from './contexts/AuthContext'

const client = new ApolloClient({
    connectToDevTools: true,
    cache: new InMemoryCache(),
    link: new HttpLink({
        uri: 'http://localhost:4000/',
        fetch,
    }),
})

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <ApolloProvider client={client}>
            <AuthProvider>
                <AdminAuthProvider>
                    <LanguageProvider>
                        <App />
                    </LanguageProvider>
                </AdminAuthProvider>
            </AuthProvider>
        </ApolloProvider>
    </React.StrictMode>
)
