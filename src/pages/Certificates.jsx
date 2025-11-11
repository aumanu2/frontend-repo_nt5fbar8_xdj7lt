import Navbar from '../components/Navbar'
import { useEffect, useState } from 'react'
import { mockFetch } from '../lib/mockApi'
import { Upload, ShieldCheck, Clock } from 'lucide-react'

export default function Certificates(){
  const [items, setItems] = useState([])
  const [fileName, setFileName] = useState('')

  useEffect(()=>{(async()=>{
    const res = await mockFetch('/certificates');
    const { items } = await res.json();
    setItems(items)
  })()},[])

  function onUpload(){
    if(!fileName) return
    setItems(prev => [{ id: `c${prev.length+1}`, name: fileName, issuer: 'Manual Upload', status: 'pending' }, ...prev])
    setFileName('')
  }

  const badge = (s) => s==='verified' ? (
    <span className="inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-full bg-green-50 text-green-700 border border-green-200"><ShieldCheck size={14}/>Verified</span>
  ) : (
    <span className="inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-full bg-amber-50 text-amber-700 border border-amber-200"><Clock size={14}/>Pending</span>
  )

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <div className="max-w-5xl mx-auto px-4 py-10">
        <div className="rounded-xl border bg-white p-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">Certificate Vault</h2>
            <div className="flex items-center gap-2">
              <input value={fileName} onChange={e=>setFileName(e.target.value)} placeholder="Certificate name" className="rounded-md border p-2" />
              <button onClick={onUpload} className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-blue-600 text-white"><Upload size={16}/>Upload</button>
            </div>
          </div>
          <div className="mt-6 grid sm:grid-cols-2 gap-4">
            {items.map(it => (
              <div key={it.id} className="p-4 rounded-lg border bg-white">
                <div className="font-medium">{it.name}</div>
                <div className="text-sm text-slate-600">{it.issuer}</div>
                <div className="mt-2">{badge(it.status)}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
