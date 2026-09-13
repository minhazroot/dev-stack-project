import { X } from 'lucide-react'


export default function YourStack({ selected, onRemove, onRemoveAll }) {
  return (
    <aside className="card-shadow rounded-2xl border border-slate-100 bg-white p-5 lg:sticky lg:top-24 lg:self-start">
      <h3 className="text-lg font-bold text-slate-900">Your Stack</h3>
      <p className="mt-1 text-xs text-slate-400">
        {selected.length === 0
          ? 'No technologies selected yet.'
          : `${selected.length} ${selected.length === 1 ? 'Technology' : 'Technologies'} Selected`}
      </p>


      {selected.length === 0 ? (
        <div className="mt-5 flex min-h-[95px] items-center justify-center rounded-xl border border-dashed border-slate-200 px-4 text-center text-xs text-slate-400">
          Your stack is empty.
        </div>
      ) : (
        <>
          <div className="mt-5 space-y-2">
            {selected.map((tech) => (
              <div key={tech.id} className="flex items-center gap-3 rounded-lg border border-slate-200 p-3">
                <img src={tech.icon} alt="" className="h-8 w-8 object-contain" />
                <div className="min-w-0 flex-1">
                  <p className="truncate text-xs font-semibold text-slate-800">{tech.name}</p>
                  <p className="text-[9px] text-slate-400">{tech.category}</p>
                </div>
                <button onClick={() => onRemove(tech.id)} className="text-slate-400 transition hover:text-red-500" aria-label={`Remove ${tech.name}`}>
                  <X size={18} />
                </button>
              </div>
            ))}
          </div>


          <button onClick={onRemoveAll} className="mt-8 w-full rounded-lg border border-red-200 px-4 py-2.5 text-sm font-semibold text-red-500 transition hover:bg-red-50">
            Remove All
          </button>
        </>
      )}
    </aside>
  )
}
