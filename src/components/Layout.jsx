import Nav from './Nav'
import Footer from './Footer'

function Layout({ children }) {
  return (
    <>
      <Nav />
      <main className="pt-20">
        {children}
      </main>
      <Footer />
    </>
  )
}

export default Layout
