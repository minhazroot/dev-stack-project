const groups = [
  { title: 'PRODUCT', links: ['Home', 'Technologies', 'Projects'] },
  { title: 'COMPANY', links: ['About', 'Contact', 'Careers'] },
  { title: 'LEGAL', links: ['Privacy Policy', 'Terms of Service'] },
]


export default function Footer() {
  return (
    <footer id="about" className="border-t border-slate-100 bg-white py-14">
      <div className="container-shell">
        <div className="grid gap-10 md:grid-cols-[1.8fr_1fr_1fr_1fr]">
          <div>
            <img src="/assets/logo-text.png" alt="Dev Stack" className="h-9 w-auto" />
            <p className="mt-5 max-w-[330px] text-xs leading-6 text-slate-400">
              Curated tools, technologies, and resources for developers building modern software.
            </p>
            <div className="mt-5 flex gap-5 text-xs font-medium text-slate-600">
              <a href="#">GitHub</a>
              <a href="#">Twitter</a>
              <a href="#">LinkedIn</a>
            </div>
          </div>


          {groups.map((group) => (
            <div key={group.title}>
              <h4 className="text-[11px] font-bold tracking-wide text-slate-800">{group.title}</h4>
              <div className="mt-4 space-y-3">
                {group.links.map((link) => (
                  <a key={link} href="#" className="block text-xs text-slate-400 transition hover:text-pink-500">{link}</a>
                ))}
              </div>
            </div>
          ))}
        </div>


        <div className="mt-14 flex flex-col gap-3 border-t border-slate-100 pt-6 text-[11px] text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Dev Stack. All rights reserved.</p>
          <div className="flex gap-6"><a href="#">Privacy</a><a href="#">Terms</a></div>
        </div>
      </div>
    </footer>
  )
}
