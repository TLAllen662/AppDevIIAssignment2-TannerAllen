import './App.css'
import ProductCard from './components/ProductCard'

function App() {
  return (
    <main>
      <h1>ComponentCorner Products</h1>
      <section className="product-grid" aria-label="Featured products">
        <ProductCard
          name="Component Starter Kit"
          price="$24.99"
          image="https://placehold.co/600x400?text=Starter+Kit"
          description="A practical collection of reusable UI building blocks."
        />
        <ProductCard
          name="Design Tokens Handbook"
          price="$18.50"
          image="https://placehold.co/600x400?text=Handbook"
          description="A concise guide to creating a consistent visual system."
        />
        <ProductCard
          name="Accessibility Audit Pack"
          price="$32.00"
          image="https://placehold.co/600x400?text=Audit+Pack"
          description="Helpful checklists for building inclusive interfaces."
        />
      </section>
    </main>
  )
}

export default App
