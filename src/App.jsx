import { Footer } from './components/Footer.jsx'
import { Hero } from './components/Hero.jsx'
import { Navbar } from './components/Navbar.jsx'
import { ProductGrid } from './components/ProductGrid.jsx'
import { WhyUs } from './components/WhyUs.jsx'
import { products } from './data/products.js'

function App() {
  return (
    <div className="min-h-screen">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[520px] bg-gradient-to-b from-emerald-50 via-slate-50 to-slate-50" />
      <Navbar />
      <main>
        <Hero />
        <ProductGrid products={products} />
        <WhyUs />
      </main>
      <Footer />
    </div>
  )
}

export default App
