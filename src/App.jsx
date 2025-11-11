import { Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import Dashboard from './pages/Dashboard'
import SkillExchange from './pages/SkillExchange'
import Projects from './pages/Projects'
import Certificates from './pages/Certificates'
import Hiring from './pages/Hiring'
import Messages from './pages/Messages'
import Booking from './pages/Booking'
import Admin from './pages/Admin'
import { Login, Signup, RoleSelect } from './pages/Auth'

function App() {
  return (
    <Routes>
      <Route index element={<Landing />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/skill-exchange" element={<SkillExchange />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/certificates" element={<Certificates />} />
      <Route path="/hiring" element={<Hiring />} />
      <Route path="/messages" element={<Messages />} />
      <Route path="/booking" element={<Booking />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/role" element={<RoleSelect />} />
    </Routes>
  )
}

export default App
