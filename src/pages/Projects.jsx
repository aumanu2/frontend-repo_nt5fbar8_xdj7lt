import Navbar from '../components/Navbar'
import { useEffect, useState } from 'react'
import { mockFetch } from '../lib/mockApi'
import { MessageSquare, Flag } from 'lucide-react'

export default function Projects(){
  const [data, setData] = useState(null)
  const [active, setActive] = useState(null)
  const [chat, setChat] = useState('')

  useEffect(()=>{(async()=>{
    const res = await mockFetch('/projects');
    const json = await res.json();
    setData(json); setActive(json.list[0])
  })()},[])

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2 rounded-xl border bg-white p-6">
          <h2 className="text-xl font-semibold">Projects</h2>
          <div className="mt-4 grid gap-3">
            {data?.list?.map(p => (
              <button key={p.id} onClick={()=>setActive(p)} className={`text-left p-4 rounded-lg border ${active?.id===p.id? 'border-blue-600 bg-blue-50' : 'bg-white'}`}>
                <div className="font-medium">{p.title}</div>
                <div className="text-sm text-slate-600 flex items-center gap-2"><Flag size={14}/> {p.milestones.join(' • ')} <span className="ml-auto px-2 py-0.5 rounded-full text-xs border">{p.status}</span></div>
              </button>
            ))}
          </div>
        </div>
        <div className="rounded-xl border bg-white p-6 flex flex-col">
          <div className="font-medium">Chat Panel</div>
          <div className="mt-3 flex-1 rounded-md border p-3 text-sm text-slate-600 space-y-2 overflow-auto">
            <div><span className="font-medium">Kai:</span> Can you review the spec?</div>
            <div><span className="font-medium">You:</span> On it! I\'ll comment inline.</div>
          </div>
          <div className="mt-3 flex gap-2">
            <input value={chat} onChange={e=>setChat(e.target.value)} placeholder="Type a message" className="flex-1 rounded-md border p-2" />
            <button onClick={()=>setChat('')} className="inline-flex items-center gap-2 px-3 rounded-md bg-blue-600 text-white"><MessageSquare size={16}/>Send</button>
          </div>
        </div>
      </div>
    </div>
  )
}
