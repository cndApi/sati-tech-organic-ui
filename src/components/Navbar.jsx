export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/70 bg-white/70 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <a href="#" className="flex items-center gap-3">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-600 text-white shadow-sm">
            <span className="text-sm font-extrabold">SA</span>
          </span>
          <div className="leading-tight">
            <p className="text-sm font-extrabold tracking-tight text-slate-900">Sati-Agrow</p>
            <p className="text-xs font-medium text-slate-500">Organic Products</p>
          </div>
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          <a className="text-sm font-semibold text-slate-700 hover:text-slate-900" href="#products">
            Products
          </a>
          <a className="text-sm font-semibold text-slate-700 hover:text-slate-900" href="#why">
            Why us
          </a>
          <a className="text-sm font-semibold text-slate-700 hover:text-slate-900" href="#contact">
            Contact
          </a>
        </nav>

        <a
          href="#products"
          className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-slate-800 active:bg-slate-950"
        >
          Shop now
        </a>
      </div>
    </header>
  )
}

