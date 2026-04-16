import { ProductCard } from './ProductCard.jsx'

export function ProductGrid({ products }) {
  return (
    <section id="products" className="mx-auto max-w-6xl px-4 py-14">
      <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-emerald-700">Shop</p>
          <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">Featured products</h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
            Pantry staples, spices, and cold-pressed oils—crafted for everyday cooking.
          </p>
        </div>
        <div className="rounded-2xl bg-emerald-50 px-4 py-3 ring-1 ring-emerald-200/70">
          <p className="text-sm font-bold text-emerald-800">{products.length} items</p>
          <p className="text-xs text-emerald-800/80">Curated weekly</p>
        </div>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  )
}

