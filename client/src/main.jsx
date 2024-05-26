import React from 'react'
import * as ReactDOM from 'react-dom/client'

import App from './App'
import 'vite/modulepreload-polyfill'
import './index.css'
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    gql,
} from '@apollo/client'

const client = new ApolloClient({
    uri: 'http://localhost:4000/',
    cache: new InMemoryCache(),
})

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
          <ApolloProvider client={client}>
            <App />
          </ApolloProvider>
    </React.StrictMode>
)
