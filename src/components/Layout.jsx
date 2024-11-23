import { Outlet } from 'react-router-dom'
import Navbar from './ui/Navbar'
import Footer from './ui/Footer'

const Layout = () => {
  return (
    <div className=''>
    {/* Contoh Header */}
    <header>
      <Navbar />
      {/* <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/catalog">View All Catalog</Link> |{" "}
        <Link to="/catalog/wisata">View Catalog (Dynamic: Wisata)</Link> |{" "}
        <Link to="/catalog/wisata/taman-raya">View Catalog Item (Dynamic: Taman Raya)</Link>
    </nav> */}
    </header>

    {/* Tempat Halaman akan Ditampilkan */}
    <main>
      <Outlet />
    </main>

    {/* Contoh Footer */}
    <Footer />
  </div>
  )
}

export default Layout
