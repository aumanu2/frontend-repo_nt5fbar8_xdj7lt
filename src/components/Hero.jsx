import Spline from '@splinetool/react-spline'
import { ArrowRight, ShieldCheck, Stars, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative min-h-[70vh] grid place-items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-white via-white/70 to-transparent pointer-events-none" />
      <div className="relative z-10 max-w-6xl mx-auto px-4 py-20 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/80 backdrop-blur border border-slate-200 text-slate-700 mb-6 shadow-sm">
          <Sparkles className="text-blue-600" size={18} />
          AI-powered skill exchange marketplace
        </div>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900">
          Trade skills, learn faster, get verified.
        </h1>
        <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
          Match with peers, barter skills with AI, and showcase verified certificates. Built for modern learners, creators, and teams.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <Link to="/signup" className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-colors shadow">
            Get started
            <ArrowRight size={18} />
          </Link>
          <Link to="/dashboard" className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-white text-slate-900 border border-slate-200 hover:bg-slate-50 transition-colors">
            Explore dashboard
          </Link>
        </div>
        <div className="mt-6 flex items-center justify-center gap-6 text-sm text-slate-600">
          <div className="flex items-center gap-2"><ShieldCheck className="text-green-600" size={18} />Verified certificates</div>
          <div className="flex items-center gap-2"><Stars className="text-yellow-500" size={18} />AI matches</div>
        </div>
      </div>
    </section>
  )
}
