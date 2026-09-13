import TechnologyCard from './TechnologyCard'
import YourStack from './YourStack'


export default function Technologies({ technologies, selected, loading, onAdd, onRemove, onRemoveAll }) {
  return (
    <section id="technologies" className="container-shell scroll-mt-24 pb-24 pt-8 md:pb-32">
      <div>
        <h2 className="text-3xl font-extrabold tracking-[-0.03em] text-slate-950 sm:text-4xl">
          Explore the <span className="gradient-text">Technologies</span>
        </h2>
        <p className="mt-2 text-sm text-slate-500">Pick one technology per category to build your ideal stack.</p>
      </div>


      <div className="mt-8 grid gap-7 lg:grid-cols-[minmax(0,1fr)_280px]">
        <div>
          {loading ? (
            <div className="grid min-h-[360px] place-items-center rounded-2xl border border-slate-100 bg-slate-50/50">
              <div className="text-center">
                <div className="mx-auto h-9 w-9 animate-spin rounded-full border-4 border-slate-200 border-t-pink-500" />
                <p className="mt-3 text-sm text-slate-500">Loading technologies...</p>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
              {technologies.map((tech) => (
                <TechnologyCard
                  key={tech.id}
                  tech={tech}
                  isAdded={selected.some((item) => item.id === tech.id)}
                  onAdd={onAdd}
                />
              ))}
            </div>
          )}
        </div>


        <YourStack selected={selected} onRemove={onRemove} onRemoveAll={onRemoveAll} />
      </div>
    </section>
  )
}


