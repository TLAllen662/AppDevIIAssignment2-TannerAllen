function Footer({ storeName, email, phone, address }) {
  return (
    <footer id="contact">
      <div>
        <h2>{storeName}</h2>
        <p>{address}</p>
      </div>
      <address>
        <p>
          <a href={`mailto:${email}`}>{email}</a>
        </p>
        <p>
          <a href={`tel:${phone}`}>{phone}</a>
        </p>
      </address>
      <p>&copy; {new Date().getFullYear()} {storeName}</p>
    </footer>
  )
}

export default Footer
