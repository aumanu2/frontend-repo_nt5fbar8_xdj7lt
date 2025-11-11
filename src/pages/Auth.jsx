import Navbar from '../components/Navbar'
import { useState } from 'react'
import { mockFetch } from '../lib/mockApi'

export function Login() {
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [msg, setMsg] = useState(null)

  async function onSubmit(e){
    e.preventDefault()
    setLoading(true)
    const res = await mockFetch('/auth/login', { method: 'POST', body: { email, password } })
    const data = await res.json()
    setMsg(`Welcome ${data.user.name}!`)
    setLoading(false)
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded-xl border shadow-sm">
        <h2 className="text-2xl font-semibold text-slate-900">Log in</h2>
        <form className="mt-6 grid gap-4" onSubmit={onSubmit}>
          <input value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email" className="w-full rounded-md border p-2" />
          <input value={password} type="password" onChange={e=>setPassword(e.target.value)} placeholder="Password" className="w-full rounded-md border p-2" />
          <button disabled={loading} className="w-full rounded-md bg-blue-600 text-white py-2 hover:bg-blue-700">{loading? 'Signing in...' : 'Sign in'}</button>
        </form>
        {msg && <p className="mt-4 text-green-700">{msg}</p>}
      </div>
    </div>
  )
}

export function Signup() {
  const [role, setRole] = useState('student')
  const [msg, setMsg] = useState(null)

  async function onSubmit(e){
    e.preventDefault()
    const res = await mockFetch('/auth/signup', { method: 'POST' })
    const data = await res.json()
    setMsg(`Account created for ${data.user.name} as ${role}`)
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded-xl border shadow-sm">
        <h2 className="text-2xl font-semibold text-slate-900">Create account</h2>
        <form className="mt-6 grid gap-4" onSubmit={onSubmit}>
          <select value={role} onChange={e=>setRole(e.target.value)} className="w-full rounded-md border p-2">
            <option value="student">Student</option>
            <option value="mentor">Mentor</option>
            <option value="recruiter">Recruiter</option>
          </select>
          <button className="w-full rounded-md bg-blue-600 text-white py-2 hover:bg-blue-700">Sign up</button>
        </form>
        {msg && <p className="mt-4 text-green-700">{msg}</p>}
      </div>
    </div>
  )
}

export function RoleSelect(){
  const [value, setValue] = useState('student')
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <div className="max-w-lg mx-auto mt-10 bg-white p-6 rounded-xl border shadow-sm">
        <h2 className="text-2xl font-semibold text-slate-900">Choose your role</h2>
        <div className="mt-6 grid grid-cols-3 gap-4">
          {['student','mentor','recruiter'].map(r => (
            <button key={r} onClick={()=>setValue(r)} className={`p-4 rounded-lg border ${value===r? 'border-blue-600 bg-blue-50' : 'border-slate-200 bg-white'}`}>{r}</button>
          ))}
        </div>
        <button className="mt-6 w-full rounded-md bg-blue-600 text-white py-2">Continue</button>
      </div>
    </div>
  )
}
