import Navbar from '../components/Navbar'
import { useEffect, useState } from 'react'
import { mockFetch } from '../lib/mockApi'
import { Briefcase, DollarSign, Shield } from 'lucide-react'

export default function Hiring(){
  const [gigs, setGigs] = useState([])
  const [title, setTitle] = useState('')
  const [payout, setPayout] = useState('')

  useEffect(()=>{(async()=>{
    const res = await mockFetch('/hiring');
    const { gigs } = await res.json();
    setGigs(gigs)
  })()},[])

  function addGig(){
    if(!title) return
    setGigs(prev => [{ id: `g${prev.length+1}`, title, payout: Number(payout||0), escrow: 'awaiting' }, ...prev])
    setTitle(''); setPayout('')
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2 rounded-xl border bg-white p-6">
          <h2 className="text-xl font-semibold">Company Hiring</h2>
          <div className="mt-4 flex gap-2">
            <input value={title} onChange={e=>setTitle(e.target.value)} placeholder="Post a gig (title)" className="flex-1 rounded-md border p-2" />
            <input value={payout} onChange={e=>setPayout(e.target.value)} placeholder="Payout" className="w-32 rounded-md border p-2" />
            <button onClick={addGig} className="px-3 rounded-md bg-blue-600 text-white">Post</button>
          </div>
          <div className="mt-6 grid gap-3">
            {gigs.map(g => (
              <div key={g.id} className="p-4 rounded-lg border bg-white">
                <div className="font-medium flex items-center gap-2"><Briefcase size={16}/>{g.title}</div>
                <div className="text-sm text-slate-600 flex items-center gap-3 mt-1"><DollarSign size={14}/> {g.payout} <span className={`ml-auto px-2 py-0.5 rounded-full text-xs border ${g.escrow==='funded' ? 'bg-green-50 text-green-700 border-green-200' : 'bg-amber-50 text-amber-700 border-amber-200'}`}><Shield size={14}/> {g.escrow}</span></div>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-xl border bg-white p-6">
          <div className="font-medium">Gig Details</div>
          <p className="text-sm text-slate-600 mt-2">Select a gig to view details. This is a static panel for the mock.</p>
        </div>
      </div>
    </div>
  )
}
