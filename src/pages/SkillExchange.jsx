import Navbar from '../components/Navbar'
import { useEffect, useState } from 'react'
import { mockFetch } from '../lib/mockApi'
import { Sparkles, Handshake, Percent, Search } from 'lucide-react'

function SimilarityBar({ score }){
  const pct = Math.round(score * 100)
  return (
    <div className="mt-2">
      <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden">
        <div className="h-full bg-gradient-to-r from-blue-500 via-cyan-400 to-violet-500" style={{ width: `${pct}%` }} />
      </div>
      <div className="text-xs text-slate-600 mt-1 flex items-center gap-1"><Percent size={14}/> {pct}% match</div>
    </div>
  )
}

export default function SkillExchange(){
  const [data, setData] = useState(null)
  const [query, setQuery] = useState('')
  const [selected, setSelected] = useState(null)

  useEffect(()=>{(async()=>{
    const res = await mockFetch('/skills');
    setData(await res.json())
  })()},[])

  const filtered = data?.matches?.filter(m => m.name.toLowerCase().includes(query.toLowerCase()) || m.skill.toLowerCase().includes(query.toLowerCase()))

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="rounded-xl border bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold flex items-center gap-2"><Sparkles className="text-blue-600"/> AI Skill Exchange</h2>
            <div className="relative">
              <Search className="absolute left-3 top-2.5 text-slate-400" size={18}/>
              <input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search people or skills" className="pl-9 pr-3 py-2 rounded-md border" />
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mt-6">
            <div className="md:col-span-1 p-4 rounded-lg border bg-slate-50">
              <div className="text-sm text-slate-600">Your profile</div>
              <div className="font-medium">{data?.me?.name}</div>
              <div className="mt-2 text-sm"><span className="font-medium">Skills:</span> {data?.me?.skills?.join(', ')}</div>
              <div className="mt-1 text-sm"><span className="font-medium">Offer:</span> {data?.me?.offer}</div>
              <div className="mt-1 text-sm"><span className="font-medium">Need:</span> {data?.me?.need}</div>
            </div>
            <div className="md:col-span-2 grid sm:grid-cols-2 gap-4">
              {filtered?.map(m => (
                <div key={m.id} className="p-4 rounded-lg border bg-white hover:shadow-sm">
                  <div className="font-medium">{m.name}</div>
                  <div className="text-sm text-slate-600">{m.skill}</div>
                  <SimilarityBar score={m.similarity} />
                  <button onClick={()=>setSelected(m)} className="mt-3 inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-blue-600 text-white"><Handshake size={16}/>Request help</button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {selected && (
          <div className="fixed inset-0 bg-black/40 grid place-items-center p-4" onClick={()=>setSelected(null)}>
            <div className="max-w-md w-full rounded-xl bg-white p-6" onClick={e=>e.stopPropagation()}>
              <h3 className="text-lg font-semibold">Request help from {selected.name}</h3>
              <p className="text-slate-600 mt-1">Describe what you need. This is a mock modal.</p>
              <textarea className="mt-4 w-full rounded-md border p-2" rows={4} placeholder="Tell them about your project..." />
              <div className="mt-4 flex justify-end gap-2">
                <button className="px-3 py-1.5 rounded-md border" onClick={()=>setSelected(null)}>Cancel</button>
                <button className="px-3 py-1.5 rounded-md bg-blue-600 text-white" onClick={()=>setSelected(null)}>Send request</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
