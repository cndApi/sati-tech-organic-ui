function formatINR(value) {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(value)
}

export function ProductCard({ product }) {
  return (
    <article className="group rounded-3xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <div
        className={`h-40 w-full rounded-2xl bg-gradient-to-br ${product.gradient} ring-1 ring-slate-200`}
        aria-hidden="true"
      >
        <div className="flex h-full items-end justify-between p-4">
          <span className="rounded-full bg-white/80 px-2 py-1 text-xs font-semibold text-slate-700 backdrop-blur">
            {product.unit}
          </span>
          <span className="rounded-full bg-white/80 px-2 py-1 text-xs font-semibold text-slate-700 backdrop-blur">
            ★ {product.rating.toFixed(1)}
          </span>
        </div>
      </div>

      <h3 className="mt-4 text-base font-extrabold tracking-tight text-slate-900 group-hover:text-emerald-800">
        {product.name}
      </h3>
      <p className="mt-1 line-clamp-2 text-sm text-slate-600">{product.description}</p>

      <div className="mt-4 flex items-center justify-between gap-3">
        <div>
          <p className="text-sm font-extrabold text-slate-900">{formatINR(product.price)}</p>
          <p className="text-xs text-slate-500">Inclusive of taxes</p>
        </div>
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-2xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800 active:bg-slate-950"
        >
          Add
        </button>
      </div>

      <div className="mt-3 flex flex-wrap gap-2">
        {product.highlights.slice(0, 2).map((h) => (
          <span
            key={h}
            className="rounded-full bg-emerald-50 px-2 py-1 text-xs font-semibold text-emerald-700 ring-1 ring-emerald-200/70"
          >
            {h}
          </span>
        ))}
      </div>
    </article>
  )
}

