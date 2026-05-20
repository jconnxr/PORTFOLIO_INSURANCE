import { Route, Routes } from 'react-router-dom'
import ChatFab from './components/ChatFab'
import FAQPage from './pages/FAQPage'
import Home from './pages/Home'
import Providers from './pages/Providers'
import PrivacyPolicy from './pages/PrivacyPolicy'
import Terms from './pages/Terms'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/providers" element={<Providers />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>
      <ChatFab />
    </>
  )
}

export default App
