import { StrictMode } from 'react'
import * as ReactDOM from 'react-dom/client'
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
import App from './App'
import 'vite/modulepreload-polyfill'
import './index.css'

import 'tw-elements-react/dist/css/tw-elements-react.min.css'

const client = new ApolloClient({
  uri: 'https://flyby-router-demo.herokuapp.com/',
  cache: new InMemoryCache(),
});

client.query({
  query: gql`
    query GetArtists {
      artists {
        id
        name
        image
      }
    }
  `
}).then(result => console.log(result));

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <StrictMode>
        <ApolloProvider client={client}>
            <App />
        </ApolloProvider>
    </StrictMode>
)
