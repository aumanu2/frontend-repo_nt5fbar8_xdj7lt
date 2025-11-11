import Navbar from '../components/Navbar'
import { useEffect, useState } from 'react'
import { mockFetch } from '../lib/mockApi'

export default function Messages(){
  const [threads, setThreads] = useState([])
  const [messages, setMessages] = useState({})
  const [active, setActive] = useState(null)
  const [text, setText] = useState('')

  useEffect(()=>{(async()=>{
    const res = await mockFetch('/messages');
    const json = await res.json();
    setThreads(json.threads); setMessages(json.messages); setActive(json.threads[0].id)
  })()},[])

  const view = messages[active] || []

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-6">
        <div className="rounded-xl border bg-white p-4">
          <div className="font-medium mb-2">Chats</div>
          <div className="grid gap-2">
            {threads.map(t => (
              <button key={t.id} onClick={()=>setActive(t.id)} className={`text-left p-3 rounded-lg border ${active===t.id? 'border-blue-600 bg-blue-50' : 'bg-white'}`}>
                <div className="font-medium">{t.name}</div>
                <div className="text-sm text-slate-600 truncate">{t.last}</div>
              </button>
            ))}
          </div>
        </div>
        <div className="md:col-span-2 rounded-xl border bg-white p-6 flex flex-col">
          <div className="font-medium">Conversation</div>
          <div className="mt-3 flex-1 rounded-md border p-3 text-sm text-slate-700 space-y-2 overflow-auto bg-slate-50">
            {view.map((m,i)=>(
              <div key={i}><span className="font-semibold">{m.from}:</span> {m.text}</div>
            ))}
          </div>
          <div className="mt-3 flex gap-2">
            <input value={text} onChange={e=>setText(e.target.value)} placeholder="Type a message" className="flex-1 rounded-md border p-2" />
            <button onClick={()=>setText('')} className="px-3 rounded-md bg-blue-600 text-white">Send</button>
          </div>
        </div>
      </div>
    </div>
  )
}
