import { BrowserRouter, Routes, Route } from 'react-router-dom'
import TopBar from './components/layout/TopBar'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import CookieBanner from './components/layout/CookieBanner'
import Home from './pages/Home'
import Contact from './pages/Contact'
import JournalInformation from './pages/JournalInformation'
import EditorialBoard from './pages/EditorialBoard'
import Policy from './pages/Policy'
import AuthorInstructions from './pages/AuthorInstructions'
// import TrackManuscript from './pages/TrackManuscript'
import CurrentIssue from './pages/CurrentIssue'
import AllIssues from './pages/AllIssues'
import OnlineFirst from './pages/OnlineFirst'
import Advertisement from './pages/Advertisement'
import GenerateOnlineInvoice from './pages/GenerateOnlineInvoice'
import OrderHardCopy from './pages/OrderHardCopy'
import OrderReprint from './pages/OrderReprint'
import RightsPermissions from './pages/RightsPermissions'
import Subscription from './pages/Subscription'
import GrievanceRedressal from './pages/GrievanceRedressal'
import './index.css'

function App() {
  return (
    <BrowserRouter>
      <div className="appShell">
        <header className="siteHeader">
          <TopBar />
          <Navbar />
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
