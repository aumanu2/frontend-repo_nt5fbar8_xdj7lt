import Navbar from '../components/Navbar'
import Hero from '../components/Hero'

export default function Landing() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-sky-50/40 to-white">
      <Navbar />
      <Hero />
      <section className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-3 gap-6">
        {[{
          title: 'Skill Exchange',
          desc: 'Barter sessions with AI matching and similarity scoring.'
        },{
          title: 'Live Projects',
          desc: 'Collaborate with milestones, escrow UI, and chat.'
        },{
          title: 'Certificates',
          desc: 'Upload, track, and verify your achievements.'
        }].map((c, i) => (
          <div key={i} className="rounded-xl border bg-white shadow-sm p-6">
            <h3 className="text-lg font-semibold text-slate-900">{c.title}</h3>
            <p className="text-slate-600 mt-2">{c.desc}</p>
          </div>
        ))}
      </section>
    </div>
  )
}
