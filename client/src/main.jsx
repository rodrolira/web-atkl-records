import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App'
import 'vite/modulepreload-polyfill'
import './index.css'

import 'tw-elements-react/dist/css/tw-elements-react.min.css'

const root = createRoot(document.getElementById('root'))
root.render(
  <StrictMode>
      <App />
  </StrictMode>
)
