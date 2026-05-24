import useHistory from '../hooks/useHistory'
import { allQuestions, domains } from '../data'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts'

export default function Stats() {
  const { history, getStats } = useHistory()
  const stats = getStats()

  const domainStats = domains.map(d => {
    const dq = allQuestions.filter(q => q.domain === d.id)
    const sessionsWithDomain = history.filter(h => h.domains?.includes(d.id))
    let correct = 0, total = 0
    sessionsWithDomain.forEach(h => {
      correct += h.correctAnswers?.filter(id => dq.some(q => q.id === id)).length || 0
      total += dq.filter(q => h.correctAnswers?.includes(q.id) || h.wrongAnswers?.includes(q.id)).length
    })
    const pct = total > 0 ? Math.round((correct / total) * 100) : 0
    return { name: d.id.split('.')[1]?.trim().split(' ')[0] || d.id, percentage: pct, correct, total }
  })

  const timelineData = [...history]
    .sort((a, b) => new Date(a.date) - new Date(b.date))
    .slice(-20)
    .map(h => ({
      date: new Date(h.date).toLocaleDateString(),
      score: h.percentage,
      mode: h.mode
    }))

  return (
    <div>
      <div className="page-header">
        <h1>Statistics</h1>
        <p>Track your progress across exam domains.</p>
      </div>

      <div className="mini-stats">
        <div className="mini-stat"><div className="mini-stat-value">{stats.totalSessions}</div><div className="mini-stat-label">Sessions</div></div>
        <div className="mini-stat"><div className="mini-stat-value">{stats.averageScore}%</div><div className="mini-stat-label">Avg Score</div></div>
        <div className="mini-stat"><div className="mini-stat-value">{stats.bestScore}%</div><div className="mini-stat-label">Best Score</div></div>
        <div className="mini-stat"><div className="mini-stat-value">{stats.totalQuestions}</div><div className="mini-stat-label">Q Answered</div></div>
      </div>

      <div className="stats-grid">
        <div className="chart-card">
          <h3>Performance by Domain</h3>
          {domainStats.map(d => (
            <div key={d.name} className="domain-bar">
              <div className="domain-bar-label">{d.name}</div>
              <div className="domain-bar-track">
                <div className="domain-bar-fill" style={{ width: `${d.percentage}%`, background: d.percentage >= 75 ? 'var(--success)' : d.percentage >= 50 ? 'var(--warning)' : 'var(--error)' }} />
              </div>
              <div className="domain-bar-value">{d.percentage}%</div>
            </div>
          ))}
        </div>

        <div className="chart-card">
          <h3>Domain Scores (Chart)</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={domainStats}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
              <XAxis dataKey="name" tick={{ fontSize: 12, fill: 'var(--text-secondary)' }} />
              <YAxis domain={[0, 100]} tick={{ fontSize: 12, fill: 'var(--text-secondary)' }} />
              <Tooltip />
              <Bar dataKey="percentage" fill="var(--primary)" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-card" style={{ gridColumn: '1 / -1' }}>
          <h3>Score Progression</h3>
          {timelineData.length > 0 ? (
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={timelineData}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
                <XAxis dataKey="date" tick={{ fontSize: 11, fill: 'var(--text-secondary)' }} />
                <YAxis domain={[0, 100]} tick={{ fontSize: 12, fill: 'var(--text-secondary)' }} />
                <Tooltip />
                <Line type="monotone" dataKey="score" stroke="var(--primary)" strokeWidth={2} dot={{ r: 4 }} />
              </LineChart>
            </ResponsiveContainer>
          ) : (
            <p style={{ color: 'var(--text-secondary)', padding: '2rem', textAlign: 'center' }}>Complete some sessions to see your score progression.</p>
          )}
        </div>
      </div>
    </div>
  )
}
