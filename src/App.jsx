import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import StudyMode from './pages/StudyMode'
import ExamMode from './pages/ExamMode'
import SimulationMode from './pages/SimulationMode'
import Flashcards from './pages/Flashcards'
import ReviewMode from './pages/ReviewMode'
import History from './pages/History'
import Stats from './pages/Stats'
import Search from './pages/Search'
import CheatSheet from './pages/CheatSheet'

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/study" element={<StudyMode />} />
        <Route path="/exam" element={<ExamMode />} />
        <Route path="/simulation" element={<SimulationMode />} />
        <Route path="/flashcards" element={<Flashcards />} />
        <Route path="/review" element={<ReviewMode />} />
        <Route path="/history" element={<History />} />
        <Route path="/stats" element={<Stats />} />
        <Route path="/search" element={<Search />} />
        <Route path="/cheatsheet" element={<CheatSheet />} />
      </Routes>
    </Layout>
  )
}
