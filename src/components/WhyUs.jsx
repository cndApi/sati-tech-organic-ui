export function WhyUs() {
  const items = [
    { title: 'Clean ingredients', text: 'No artificial colors or preservatives—just honest food.' },
    { title: 'Traceable sourcing', text: 'Batch-level transparency so you know what you’re buying.' },
    { title: 'Packed with care', text: 'Freshness-first packing with eco-conscious materials.' },
    { title: 'Taste you’ll notice', text: 'Better aroma, better texture, better everyday meals.' },
  ]

  return (
    <section id="why" className="mx-auto max-w-6xl px-4 pb-14">
      <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <p className="text-xs font-semibold uppercase tracking-wider text-emerald-700">Why Sati-Agrow</p>
        <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
          Organic essentials, with a premium experience.
        </h2>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
          We focus on sourcing, freshness, and consistency—so you can shop confidently and cook better meals.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it, idx) => (
            <div key={it.title} className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
              <div className="flex items-center gap-3">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-600 text-white">
                  <span className="text-sm font-extrabold">{idx + 1}</span>
                </div>
                <h3 className="text-sm font-bold text-slate-900">{it.title}</h3>
              </div>
              <p className="mt-3 text-sm text-slate-600">{it.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

