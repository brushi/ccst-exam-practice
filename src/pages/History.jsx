import { useState } from 'react'
import { Link } from 'react-router-dom'
import useHistory from '../hooks/useHistory'

export default function History() {
  const { history, clearHistory } = useHistory()
  const [sortField, setSortField] = useState('date')
  const [sortDir, setSortDir] = useState('desc')
  const [filterMode, setFilterMode] = useState('all')

  const filtered = history
    .filter(e => filterMode === 'all' || e.mode === filterMode)
    .sort((a, b) => {
      const dir = sortDir === 'asc' ? 1 : -1
      if (sortField === 'date') return (new Date(a.date) - new Date(b.date)) * dir
      if (sortField === 'score') return (a.percentage - b.percentage) * dir
      if (sortField === 'time') return (a.timeSpent - b.timeSpent) * dir
      return 0
    })

  const toggleSort = (field) => {
    if (sortField === field) setSortDir(d => d === 'asc' ? 'desc' : 'asc')
    else { setSortField(field); setSortDir('desc') }
  }

  const exportCSV = () => {
    const headers = ['Date', 'Mode', 'Score', 'Total', 'Percentage', 'Time (s)', 'Domains']
    const rows = filtered.map(e => [
      new Date(e.date).toLocaleString(), e.mode, e.score, e.totalQuestions, e.percentage + '%',
      e.timeSpent, e.domains.join('; ')
    ])
    const csv = [headers, ...rows].map(r => r.map(c => `"${String(c).replace(/"/g, '""')}"`).join(',')).join('\n')
    const blob = new Blob([csv], { type: 'text/csv' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url; a.download = 'ccst-history.csv'; a.click()
    URL.revokeObjectURL(url)
  }

  const formatTime = (s) => {
    const m = Math.floor(s / 60); const sec = s % 60
    return `${m}:${sec.toString().padStart(2, '0')}`
  }

  return (
    <div>
      <div className="page-header">
        <h1>Session History</h1>
        <p>Review your past practice and exam sessions.</p>
      </div>
      <div className="page-actions">
        <select className="form-select" style={{ width: 'auto' }} value={filterMode} onChange={e => setFilterMode(e.target.value)}>
          <option value="all">All Modes</option>
          <option value="study">Study</option>
          <option value="exam">Exam</option>
          <option value="simulation">Simulation</option>
        </select>
        <button className="btn btn-secondary" onClick={exportCSV} disabled={filtered.length === 0}>Export CSV</button>
        <button className="btn btn-danger" onClick={clearHistory} disabled={history.length === 0}>Clear History</button>
      </div>
      {filtered.length === 0 ? (
        <div className="empty-state"><h3>No sessions yet</h3><p>Complete a practice session to see your history.</p></div>
      ) : (
        <div style={{ overflowX: 'auto' }}>
          <table className="history-table">
            <thead>
              <tr>
                <th style={{ cursor: 'pointer' }} onClick={() => toggleSort('date')}>Date {sortField === 'date' ? (sortDir === 'asc' ? '↑' : '↓') : ''}</th>
                <th>Mode</th>
                <th style={{ cursor: 'pointer' }} onClick={() => toggleSort('score')}>Score {sortField === 'score' ? (sortDir === 'asc' ? '↑' : '↓') : ''}</th>
                <th>%</th>
                <th style={{ cursor: 'pointer' }} onClick={() => toggleSort('time')}>Time {sortField === 'time' ? (sortDir === 'asc' ? '↑' : '↓') : ''}</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map(e => (
                <tr key={e.id}>
                  <td>{new Date(e.date).toLocaleDateString()} {new Date(e.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</td>
                  <td><span className="badge" style={{ background: e.mode === 'simulation' ? 'rgba(220,38,38,0.1)' : e.mode === 'exam' ? 'rgba(37,99,235,0.1)' : 'rgba(22,163,74,0.1)', color: e.mode === 'simulation' ? 'var(--error)' : e.mode === 'exam' ? 'var(--primary)' : 'var(--success)' }}>{e.mode}</span></td>
                  <td>{e.score}/{e.totalQuestions}</td>
                  <td style={{ fontWeight: 600, color: e.percentage >= 75 ? 'var(--success)' : 'var(--error)' }}>{e.percentage}%</td>
                  <td>{formatTime(e.timeSpent)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}
