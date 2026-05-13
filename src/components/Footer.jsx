export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="site-footer">
      <p>© {year} Cosmetiquera. Todos los derechos reservados.</p>
    </footer>
  )
}
