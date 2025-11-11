import Navbar from '../components/Navbar'
import { useEffect, useState } from 'react'
import { mockFetch } from '../lib/mockApi'

export default function Booking(){
  const [days, setDays] = useState([])
  const [slots, setSlots] = useState([])
  const [sel, setSel] = useState(null)

  useEffect(()=>{(async()=>{
    const res = await mockFetch('/availability');
    const json = await res.json();
    setDays(json.days); setSlots(json.slots)
  })()},[])

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <div className="max-w-3xl mx-auto px-4 py-10">
        <div className="rounded-xl border bg-white p-6">
          <h2 className="text-xl font-semibold">Availability & Booking</h2>
          <div className="grid grid-cols-5 gap-2 mt-4">
            {days.map(d => (
              <div key={d} className="text-center p-2 rounded-md bg-slate-50 border">{d}</div>
            ))}
          </div>
          <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-2">
            {slots.map(s => (
              <button key={s} onClick={()=>setSel(s)} className={`p-2 rounded-md border ${sel===s? 'border-blue-600 bg-blue-50' : 'bg-white'}`}>{s}</button>
            ))}
          </div>
          <button disabled={!sel} className="mt-6 w-full rounded-md bg-blue-600 text-white py-2 disabled:opacity-50">Confirm {sel ? `for ${sel}` : ''}</button>
        </div>
      </div>
    </div>
  )
}
