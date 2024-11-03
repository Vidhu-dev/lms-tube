import Footer from '../../layouts/Footer'
import Header from './Header'
import LandingPage from './LandingPage'

function LandingPageLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <LandingPage />
      <Footer />
    </div>
  )
}

export default LandingPageLayout
