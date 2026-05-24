import { Link } from 'react-router-dom'
import useHistory from '../hooks/useHistory'
import useStreak from '../hooks/useStreak'

export default function Home() {
  const { getStats } = useHistory()
  const { streak, hasPracticedToday, lastPracticeDate } = useStreak()
  const stats = getStats()

  return (
    <div>
      <div className="page-header">
        <h1>CCST Cybersecurity Exam Simulator</h1>
        <p>Practice for the Cisco Certified Support Technician (CCST) Cybersecurity exam with questions from the official study guide.</p>
      </div>

      {streak > 0 && (
        <div style={{ marginBottom: '1.5rem' }}>
          <span className="streak-badge">
            🔥 {streak} day streak!
          </span>
        </div>
      )}

      <div className="mini-stats">
        <div className="mini-stat">
          <div className="mini-stat-value">{stats.totalSessions}</div>
          <div className="mini-stat-label">Total Sessions</div>
        </div>
        <div className="mini-stat">
          <div className="mini-stat-value">{stats.averageScore}%</div>
          <div className="mini-stat-label">Average Score</div>
        </div>
        <div className="mini-stat">
          <div className="mini-stat-value">{stats.totalQuestions}</div>
          <div className="mini-stat-label">Questions Answered</div>
        </div>
        <div className="mini-stat">
          <div className="mini-stat-value">{streak}</div>
          <div className="mini-stat-label">Day Streak 🔥</div>
        </div>
      </div>

      <h2 style={{ margin: '2rem 0 1rem' }}>Practice Modes</h2>
      <div className="dashboard-grid">
        <Link to="/study" className="dashboard-card">
          <div className="dashboard-card-icon">📖</div>
          <h3>Study Mode</h3>
          <p>One question at a time with immediate feedback and detailed explanations. No time limit.</p>
        </Link>
        <Link to="/exam" className="dashboard-card">
          <div className="dashboard-card-icon">📝</div>
          <h3>Custom Exam</h3>
          <p>Configure your own exam: choose number of questions, set a timer, and filter by topics.</p>
        </Link>
        <Link to="/simulation" className="dashboard-card">
          <div className="dashboard-card-icon">🎯</div>
          <h3>Real Simulation</h3>
          <p>50-minute exam with 45 questions. Simulates actual CCST exam conditions. Scored 300-1000.</p>
        </Link>
        <Link to="/flashcards" className="dashboard-card">
          <div className="dashboard-card-icon">🃏</div>
          <h3>Flashcards</h3>
          <p>Quick review of key terms and concepts from all exam domains.</p>
        </Link>
        <Link to="/review" className="dashboard-card">
          <div className="dashboard-card-icon">🔄</div>
          <h3>Review Mistakes</h3>
          <p>Revisit questions you got wrong in previous sessions to reinforce learning.</p>
        </Link>
        <Link to="/cheatsheet" className="dashboard-card">
          <div className="dashboard-card-icon">📋</div>
          <h3>Cheat Sheet</h3>
          <p>Quick reference tables: CIA triad, Wi-Fi standards, ports, protocols, regulations, and more.</p>
        </Link>
        <Link to="/stats" className="dashboard-card">
          <div className="dashboard-card-icon">📊</div>
          <h3>Statistics</h3>
          <p>View your progress with charts showing performance by domain over time.</p>
        </Link>
        <Link to="/search" className="dashboard-card">
          <div className="dashboard-card-icon">🔍</div>
          <h3>Search Questions</h3>
          <p>Search the entire question bank by keyword to find specific topics.</p>
        </Link>
      </div>
    </div>
  )
}
