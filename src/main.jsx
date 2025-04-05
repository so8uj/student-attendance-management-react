import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import App from './App.jsx'
import StudentProvider from './contexts/StudentContext.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <StudentProvider>
      <App></App>
    </StudentProvider>
  </StrictMode>,
)
