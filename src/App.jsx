import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Problem from './pages/Problem'
import Platform from './pages/Platform'
import Standards from './pages/Standards'
import Services from './pages/Services'
import Roadmap from './pages/Roadmap'
import LabNotes from './pages/LabNotes'
import LabNotePost from './pages/LabNotePost'
import About from './pages/About'
import Contact from './pages/Contact'
import Team from './pages/Team'
import Pricing from './pages/Pricing'
import Shelob from './pages/Shelob'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/problem" element={<Problem />} />
        <Route path="/platform" element={<Platform />} />
        <Route path="/standards" element={<Standards />} />
        <Route path="/services" element={<Services />} />
        <Route path="/roadmap" element={<Roadmap />} />
        <Route path="/lab-notes" element={<LabNotes />} />
        <Route path="/lab-notes/:slug" element={<LabNotePost />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/team" element={<Team />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/shelob" element={<Shelob />} />
      </Routes>
    </Layout>
  )
}

export default App
