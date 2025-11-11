import { Link, NavLink } from 'react-router-dom'
import { Menu, X, Sparkles, User2, MessageSquare, Briefcase, Calendar, ShieldCheck, LayoutDashboard, GraduationCap } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItem = (to, label, Icon) => (
    <NavLink
      to={to}
      onClick={() => setOpen(false)}
      className={({ isActive }) => `flex items-center gap-2 px-3 py-2 rounded-md transition-colors ${isActive ? 'text-white bg-blue-600' : 'text-slate-700 hover:text-blue-600 hover:bg-blue-50'}`}
    >
      {Icon && <Icon size={18} />}
      <span>{label}</span>
    </NavLink>
  )

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 font-semibold text-slate-900">
            <div className="h-8 w-8 grid place-items-center rounded-md bg-gradient-to-br from-blue-500 via-cyan-400 to-purple-500 text-white shadow-sm">
              <Sparkles size={18} />
            </div>
            <span>SkillSwap Edu</span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navItem('/dashboard', 'Dashboard', LayoutDashboard)}
            {navItem('/skill-exchange', 'AI Skill Exchange', GraduationCap)}
            {navItem('/projects', 'Live Projects', Briefcase)}
            {navItem('/certificates', 'Certificate Vault', ShieldCheck)}
            {navItem('/hiring', 'Hiring', Briefcase)}
            {navItem('/messages', 'Messages', MessageSquare)}
            {navItem('/booking', 'Booking', Calendar)}
            {navItem('/admin', 'Admin', ShieldCheck)}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <Link to="/login" className="text-slate-700 hover:text-blue-600">Login</Link>
            <Link to="/signup" className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-colors">
              <User2 size={18} />
              Sign up
            </Link>
          </div>

          <button className="md:hidden p-2 rounded-md hover:bg-slate-100" onClick={() => setOpen(v => !v)}>
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 grid gap-2">
            {navItem('/dashboard', 'Dashboard', LayoutDashboard)}
            {navItem('/skill-exchange', 'AI Skill Exchange', GraduationCap)}
            {navItem('/projects', 'Live Projects', Briefcase)}
            {navItem('/certificates', 'Certificate Vault', ShieldCheck)}
            {navItem('/hiring', 'Hiring', Briefcase)}
            {navItem('/messages', 'Messages', MessageSquare)}
            {navItem('/booking', 'Booking', Calendar)}
            {navItem('/admin', 'Admin', ShieldCheck)}
            <div className="flex items-center gap-3 pt-2">
              <Link to="/login" className="text-slate-700 hover:text-blue-600">Login</Link>
              <Link to="/signup" className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-colors">
                <User2 size={18} />
                Sign up
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
