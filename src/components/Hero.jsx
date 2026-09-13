export default function Hero() {
  return (
    <section id="home" className="container-shell grid min-h-[540px] items-center gap-8 py-16 md:grid-cols-2 md:py-20 lg:min-h-[590px]">
      <div className="max-w-[620px]">
        <h1 className="text-[42px] font-extrabold leading-[1.04] tracking-[-0.04em] text-slate-950 sm:text-5xl lg:text-[58px]">
          Build Your Ideal
          <br />
          <span className="gradient-text">Development Stack</span>
        </h1>
        <p className="mt-6 max-w-[610px] text-[15px] leading-7 text-slate-500 sm:text-base">
          Explore frontend, backend, database, and tooling options,
          compare them side by side, and put together the stack that fits your next project.
        </p>


        <div className="mt-9 flex flex-wrap gap-3">
          <a href="#technologies" className="gradient-bg rounded-md px-5 py-3 text-sm font-semibold text-white shadow-sm">
            Explore Technologies
          </a>
          <a href="#about" className="rounded-md border border-slate-200 px-7 py-3 text-sm font-medium text-slate-600 transition hover:bg-slate-50">
            Learn More
          </a>
        </div>
      </div>


      <div className="flex justify-center md:justify-end">
        <img
          src="/assets/banner-stack.png"
          alt="Development stack illustration"
          className="w-full max-w-[430px] object-contain sm:max-w-[480px]"
        />
      </div>
    </section>
  )
}
