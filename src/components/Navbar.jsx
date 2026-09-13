import { Menu } from 'lucide-react'


const navItems = [
  ['Home', '#home'],
  ['Technologies', '#technologies'],
  ['Projects', '#projects'],
  ['About', '#about'],
  ['Contact', '#contact'],
]


export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur">
      <div className="container-shell flex h-[72px] items-center justify-between">
        <div className="hidden items-center md:flex">
          <img src="/assets/logo-text.png" alt="Dev Stack" className="h-9 w-auto" />
        </div>


        <button className="inline-flex h-9 w-9 items-center justify-center md:hidden" aria-label="Open menu">
          <Menu size={24} strokeWidth={2} />
        </button>


        <a href="#home" className="md:hidden">
          <img src="/assets/logo-text.png" alt="Dev Stack" className="h-8 w-auto" />
        </a>


        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map(([label, href], index) => (
            <a
              key={label}
              href={href}
              className={`text-sm font-medium transition hover:text-pink-600 ${index === 0 ? 'text-pink-600' : 'text-slate-500'}`}
            >
              {label}
            </a>
          ))}
        </nav>


        <div className="flex items-center gap-2 sm:gap-3">
          <button className="px-2 py-2 text-xs font-medium text-slate-700 sm:px-3 sm:text-sm">Sign In</button>
          <button className="gradient-bg rounded-full px-4 py-2 text-xs font-semibold text-white shadow-sm sm:px-5 sm:text-sm">Sign Up</button>
        </div>
      </div>
    </header>
  )
}


