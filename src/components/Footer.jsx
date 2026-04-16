export function Footer() {
  return (
    <footer id="contact" className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-base font-extrabold tracking-tight text-slate-900">Sati-Agrow</p>
            <p className="mt-1 text-sm text-slate-600">Organic products for everyday cooking.</p>
          </div>
          <div className="flex flex-wrap gap-3 text-sm">
            <a className="font-semibold text-slate-700 hover:text-slate-900" href="#products">
              Products
            </a>
            <a className="font-semibold text-slate-700 hover:text-slate-900" href="#why">
              Why us
            </a>
            <a className="font-semibold text-slate-700 hover:text-slate-900" href="#contact">
              Contact
            </a>
          </div>
        </div>
        <div className="mt-8 rounded-2xl bg-slate-50 p-5 ring-1 ring-slate-200/70">
          <p className="text-sm font-semibold text-slate-900">Want wholesale or custom bundles?</p>
          <p className="mt-1 text-sm text-slate-600">
            Email us at <span className="font-semibold">hello@sati-agrow.example</span> (replace with your real email).
          </p>
        </div>
        <p className="mt-8 text-xs text-slate-500">© {new Date().getFullYear()} Sati-Agrow. All rights reserved.</p>
      </div>
    </footer>
  )
}

