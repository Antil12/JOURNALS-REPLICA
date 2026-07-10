import { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CookieBanner from './components/layout/CookieBanner'
import Footer from './components/layout/Footer'
import Navbar from './components/layout/Navbar'
import TopBar from './components/layout/TopBar'
import AuthorInstructions from './pages/AuthorInstructions'
import Contact from './pages/Contact'
import EditorialBoard from './pages/EditorialBoard'
import Home from './pages/Home'
import JournalInformation from './pages/JournalInformation'
import Policy from './pages/Policy'
// import TrackManuscript from './pages/TrackManuscript'
import siteConfig from './config/siteConfig'
import './index.css'
import Advertisement from './pages/Advertisement'
import AllIssues from './pages/AllIssues'
import CurrentIssue from './pages/CurrentIssue'
import GenerateOnlineInvoice from './pages/GenerateOnlineInvoice'
import GrievanceRedressal from './pages/GrievanceRedressal'
import OnlineFirst from './pages/OnlineFirst'
import OrderHardCopy from './pages/OrderHardCopy'
import OrderReprint from './pages/OrderReprint'
import RightsPermissions from './pages/RightsPermissions'
import Subscription from './pages/Subscription'

function App() {
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    document.title = siteConfig.metadata?.title || siteConfig.siteName || 'AACSJ Replica'
  }, [])

  return (
    <BrowserRouter>
      <div className="appShell">
        <header className="siteHeader">
          <TopBar mobileOpen={mobileOpen} onToggle={() => setMobileOpen(o => !o)} />
          <Navbar mobileOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/journal-information" element={<JournalInformation />} />
            <Route path="/editorial-board" element={<EditorialBoard />} />
            <Route path="/policy" element={<Policy />} />
            <Route path="/author-instructions" element={<AuthorInstructions />} />
            {/* <Route path="/track-manuscript" element={<TrackManuscript />} /> */}
            <Route path="/current-issue" element={<CurrentIssue />} />
            <Route path="/all-issues" element={<AllIssues />} />
            <Route path="/online-first" element={<OnlineFirst />} />
            <Route path="/advertisement" element={<Advertisement />} />
            <Route path="/generate-online-invoice" element={<GenerateOnlineInvoice />} />
            <Route path="/order-hard-copy" element={<OrderHardCopy />} />
            <Route path="/order-reprint" element={<OrderReprint />} />
            <Route path="/rights-permissions" element={<RightsPermissions />} />
            <Route path="/subscription" element={<Subscription />} />
            <Route path="/contact-us" element={<Contact />} />
            <Route path="/grievance-redressal" element={<GrievanceRedressal />} />
          </Routes>
        </main>
        <Footer />
        <CookieBanner />
      </div>
    </BrowserRouter>
  )
}

export default App
