import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import HomeContextProvider from './contextApi/HomeContext.jsx'

createRoot(document.getElementById('root')).render(
    <HomeContextProvider>
        <App />
    </HomeContextProvider>
)
