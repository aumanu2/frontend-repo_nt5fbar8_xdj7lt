import Navbar from '../components/Navbar'
import { useEffect, useState } from 'react'
import { mockFetch } from '../lib/mockApi'

export default function Admin(){
  const [queue, setQueue] = useState([])
  const [disputes, setDisputes] = useState([])
  const [overview, setOverview] = useState(null)

  useEffect(()=>{(async()=>{
    const res = await mockFetch('/admin');
    const json = await res.json();
    setQueue(json.verificationQueue); setDisputes(json.disputes); setOverview(json.overview)
  })()},[])

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-6">
        <div className="rounded-xl border bg-white p-6">
          <div className="font-medium">Overview</div>
          <div className="mt-2 text-sm text-slate-700">Users: {overview?.users} • Gigs: {overview?.gigs} • Verified: {overview?.verified}</div>
        </div>
        <div className="rounded-xl border bg-white p-6 md:col-span-2">
          <div className="font-medium">Certificate Verification Queue</div>
          <div className="mt-3 grid gap-2">
            {queue.map(v => (
              <div key={v.id} className="p-4 rounded-lg border bg-white flex items-center">
                <div className="font-medium">{v.user}</div>
                <div className="text-sm text-slate-600 ml-2">{v.cert}</div>
                <span className="ml-auto text-xs px-2 py-0.5 rounded-full border bg-amber-50 text-amber-700">{v.status}</span>
              </div>
            ))}
          </div>
          <div className="mt-6 font-medium">Disputes</div>
          <div className="mt-2 grid gap-2">
            {disputes.map(d => (
              <div key={d.id} className="p-4 rounded-lg border bg-white flex items-center">
                <div className="font-medium">{d.title}</div>
                <span className="ml-auto text-xs px-2 py-0.5 rounded-full border bg-rose-50 text-rose-700">{d.status}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
