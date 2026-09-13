import { Star } from 'lucide-react'
const badgeStyles = {
  Popular: 'bg-sky-50 text-sky-500 border-sky-100',
  Versatile: 'bg-emerald-50 text-emerald-500 border-emerald-100',
  Fast: 'bg-orange-50 text-orange-500 border-orange-100',
  'Full Stack': 'bg-slate-50 text-slate-600 border-slate-100',
  Standard: 'bg-emerald-50 text-emerald-500 border-emerald-100',
  'Top SQL': 'bg-blue-50 text-blue-500 border-blue-100',
  Cache: 'bg-red-50 text-red-500 border-red-100',
  Ubiquitous: 'bg-amber-50 text-amber-600 border-amber-100',
  Essential: 'bg-sky-50 text-sky-500 border-sky-100',
  Robust: 'bg-sky-50 text-sky-500 border-sky-100',
  Modern: 'bg-cyan-50 text-cyan-600 border-cyan-100',
  Containers: 'bg-sky-50 text-sky-500 border-sky-100',
}
export default function TechnologyCard({ tech, isAdded, onAdd }) {
  return (
    <article className="card-shadow flex min-h-[292px] flex-col rounded-2xl border border-slate-100 bg-white p-5">
      <div className="flex items-start justify-between gap-4">
        <img src={tech.icon} alt={`${tech.name} icon`} className="h-9 w-9 object-contain" />
        <span className={`rounded-full border px-3 py-1 text-[10px] font-semibold ${badgeStyles[tech.badge] || 'bg-slate-50 text-slate-600 border-slate-100'}`}>
          {tech.badge}
        </span>
      </div>
      <h3 className="mt-5 text-[18px] font-bold text-slate-900">{tech.name}</h3>
      <p className="mt-2 min-h-[58px] text-[12px] leading-5 text-slate-500">{tech.description}</p>

      <div className="mt-auto pt-4">
        <div className="mb-4 flex items-center justify-between gap-2 border-t border-slate-100 pt-4 text-[10px] text-slate-500">
          <span className="rounded bg-slate-50 px-2 py-1">{tech.category}</span>
          <span className="truncate">{tech.difficulty}</span>
          <span className="flex items-center gap-1 font-medium text-slate-600">
            <Star size={12} className="fill-amber-400 text-amber-400" /> {tech.rating}
          </span>
        </div>
        <button
          onClick={() => onAdd(tech)}
          disabled={isAdded}
          className={`w-full rounded-md px-4 py-3 text-xs font-medium transition ${
            isAdded
              ? 'cursor-not-allowed bg-slate-200 text-slate-500'
              : 'bg-slate-950 text-white hover:bg-slate-800'
          }`}
        >
          {isAdded ? '✓ Added to Stack' : 'Add to Stack'}
        </button>
      </div>
    </article>
  )
}
