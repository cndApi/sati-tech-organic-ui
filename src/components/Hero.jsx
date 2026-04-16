export function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-4 pt-12 sm:pt-16">
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <div>
          <div className="flex flex-wrap gap-2">
            <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700 ring-1 ring-emerald-200/70">
              Farm-to-home
            </span>
            <span className="rounded-full bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-700 ring-1 ring-slate-200/70">
              No preservatives
            </span>
            <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-700 ring-1 ring-amber-200/70">
              Traceable batches
            </span>
          </div>

          <h1 className="mt-4 text-balance text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            Premium <span className="text-emerald-700">organic</span> products for a healthier kitchen.
          </h1>
          <p className="mt-4 max-w-xl text-pretty text-base leading-relaxed text-slate-600 sm:text-lg">
            Sati-Agrow brings you clean staples, spices, and cold-pressed oils—sourced responsibly and packed with care.
            Shop confidently with transparent quality and consistent taste.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a
              href="#products"
              className="inline-flex items-center justify-center rounded-2xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-emerald-700 active:bg-emerald-800"
            >
              Explore products
            </a>
            <a
              href="#why"
              className="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50"
            >
              What makes us different
            </a>
          </div>

          <dl className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
              <dt className="text-xs font-semibold text-slate-500">Delivery</dt>
              <dd className="mt-1 text-sm font-extrabold text-slate-900">24–48 hrs*</dd>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
              <dt className="text-xs font-semibold text-slate-500">Quality</dt>
              <dd className="mt-1 text-sm font-extrabold text-slate-900">Batch-wise</dd>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
              <dt className="text-xs font-semibold text-slate-500">Packaging</dt>
              <dd className="mt-1 text-sm font-extrabold text-slate-900">Eco-conscious</dd>
            </div>
          </dl>
          <p className="mt-3 text-xs text-slate-500">*Delivery timelines vary by location.</p>
        </div>

        <div className="relative">
          <div className="absolute -inset-2 -z-10 rounded-[28px] bg-gradient-to-br from-emerald-200 via-emerald-50 to-sky-100 blur-2xl" />
          <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  title: 'Clean ingredients',
                  text: 'No artificial colors or preservatives—just honest food.',
                },
                {
                  title: 'Traceable sourcing',
                  text: 'Know what you’re buying with batch-level transparency.',
                },
                { title: 'Freshness-first', text: 'Packed with care to preserve aroma and taste.' },
                { title: 'Everyday value', text: 'Quality essentials for daily cooking.' },
              ].map((f) => (
                <div key={f.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-bold text-slate-900">{f.title}</p>
                  <p className="mt-1 text-sm text-slate-600">{f.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

