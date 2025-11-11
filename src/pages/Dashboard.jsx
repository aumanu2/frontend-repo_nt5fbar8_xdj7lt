import Navbar from '../components/Navbar'
import { useEffect, useState } from 'react'
import { mockFetch } from '../lib/mockApi'
import { Coins, Bolt, PlusCircle } from 'lucide-react'

export default function Dashboard(){
  const [data, setData] = useState(null)
  useEffect(()=>{(async()=>{
    const res = await mockFetch('/dashboard');
    const json = await res.json();
    setData(json)
  })()},[])
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2 rounded-xl border bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold">Welcome, {data?.profile?.name || '—'}</h2>
            <p className="text-slate-600">{data?.profile?.headline}</p>
          </div>
          <div className="rounded-xl border bg-white p-6 shadow-sm">
            <div className="flex items-center gap-2 text-slate-700"><Coins className="text-amber-500"/> Credits</div>
            <div className="text-3xl font-bold mt-2">{data?.credits ?? '—'}</div>
          </div>
        </div>
        <div className="mt-8 grid sm:grid-cols-3 gap-4">
          {data?.actions?.map(a => (
            <button key={a} className="flex items-center gap-2 rounded-lg border bg-white p-4 hover:bg-slate-50"><Bolt className="text-blue-600"/> {a}</button>
          ))}
          <button className="flex items-center gap-2 rounded-lg border bg-white p-4 hover:bg-slate-50"><PlusCircle className="text-slate-700"/> Custom Action</button>
        </div>
      </div>
    </div>
  )
}
