function ProductCard({ name, description, price }) {
  return (
    <article>
      <h2>{name}</h2>
      <p>{description}</p>
      <strong>{price}</strong>
    </article>
  )
}

export default ProductCard
