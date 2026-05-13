const navItems = [
  { id: 'home', label: 'Inicio' },
  { id: 'catalog', label: 'Catálogo' },
  { id: 'contact', label: 'Contacto' },
]

export default function Header({ activePage, onNavigate }) {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <button
          type="button"
          className="site-logo"
          onClick={() => onNavigate('home')}
        >
          Cosmetiquera
        </button>
        <nav className="site-nav" aria-label="Principal">
          <ul>
            {navItems.map(({ id, label }) => (
              <li key={id}>
                <button
                  type="button"
                  className={
                    activePage === id ? 'site-nav__link is-active' : 'site-nav__link'
                  }
                  onClick={() => onNavigate(id)}
                  aria-current={activePage === id ? 'page' : undefined}
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
