import { useState } from 'react'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Catalog from './pages/Catalog.jsx'
import Contact from './pages/Contact.jsx'

const pages = {
  home: Home,
  catalog: Catalog,
  contact: Contact,
}

export default function App() {
  const [activePage, setActivePage] = useState('home')
  const Page = pages[activePage] ?? Home

  return (
    <>
      <Header activePage={activePage} onNavigate={setActivePage} />
      <main className="app-main">
        <Page />
      </main>
      <Footer />
    </>
  )
}
