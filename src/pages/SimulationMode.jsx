import { useState, useMemo, useCallback } from 'react'
import { Link } from 'react-router-dom'
import QuestionCard from '../components/QuestionCard'
import Timer from '../components/Timer'
import useTimer from '../hooks/useTimer'
import useKeyboard from '../hooks/useKeyboard'
import useHistory from '../hooks/useHistory'
import useStreak from '../hooks/useStreak'
import { allQuestions } from '../data'

export default function SimulationMode() {
  const { addEntry } = useHistory()
  const { recordPractice } = useStreak()

  const SIM_TIME = 50 * 60 // 50 minutes
  const SIM_COUNT = 45

  const [questions, setQuestions] = useState(() => {
    const shuffled = [...allQuestions].sort(() => Math.random() - 0.5)
    return shuffled.slice(0, Math.min(SIM_COUNT, shuffled.length))
  })
  const [currentIndex, setCurrentIndex] = useState(0)
  const [userAnswers, setUserAnswers] = useState({})
  const [started, setStarted] = useState(false)
  const [finished, setFinished] = useState(false)
  const [flagged, setFlagged] = useState(new Set())
  const [showReview, setShowReview] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleTimeUp = () => { if (!submitted) submitExam() }

  const { timeLeft, isWarning, isDanger, start, formatTime } = useTimer(SIM_TIME, false, handleTimeUp)

  const handleStart = () => { setStarted(true); start() }

  const handleSelect = useCallback((label) => {
    if (submitted) return
    const q = questions[currentIndex]
    setUserAnswers(prev => {
      const current = prev[q.id] || []
      if (q.correctAnswers.length > 1) {
        return current.includes(label)
          ? { ...prev, [q.id]: current.filter(l => l !== label) }
          : { ...prev, [q.id]: [...current, label].sort() }
      }
      return { ...prev, [q.id]: [label] }
    })
  }, [questions, currentIndex, submitted])

  const toggleFlag = () => {
    setFlagged(prev => {
      const next = new Set(prev)
      if (next.has(currentIndex)) next.delete(currentIndex)
      else next.add(currentIndex)
      return next
    })
  }

  const submitExam = () => {
    setSubmitted(true)
    setFinished(true)
    const correctCount = questions.filter(q => {
      const ua = (userAnswers[q.id] || []).slice().sort()
      const ca = q.correctAnswers.slice().sort()
      return ca.length === ua.length && ca.every((v, i) => v === ua[i])
    }).length
    const pct = Math.round((correctCount / questions.length) * 100)
    const scaled = Math.round(300 + (pct / 100) * 700)
    const correctIds = questions.filter(q => {
      const ua = (userAnswers[q.id] || []).slice().sort()
      const ca = q.correctAnswers.slice().sort()
      return ca.length === ua.length && ca.every((v, i) => v === ua[i])
    }).map(q => q.id)
    const wrongIds = questions.filter(q => !correctIds.includes(q.id)).map(q => q.id)

    addEntry({
      date: new Date().toISOString(),
      mode: 'simulation',
      score: correctCount,
      totalQuestions: questions.length,
      percentage: pct,
      timeSpent: SIM_TIME - timeLeft,
      correctAnswers: correctIds,
      wrongAnswers: wrongIds,
      domains: [...new Set(questions.map(q => q.domain))]
    })
    recordPractice()
  }

  const restart = () => {
    const shuffled = [...allQuestions].sort(() => Math.random() - 0.5)
    setQuestions(shuffled.slice(0, Math.min(SIM_COUNT, shuffled.length)))
    setCurrentIndex(0)
    setUserAnswers({})
    setStarted(false)
    setFinished(false)
    setShowReview(false)
    setSubmitted(false)
    setFlagged(new Set())
  }

  useKeyboard({
    a: () => handleSelect('A'),
    b: () => handleSelect('B'),
    c: () => handleSelect('C'),
    d: () => handleSelect('D'),
    ArrowLeft: () => setCurrentIndex(i => Math.max(0, i - 1)),
    ArrowRight: () => setCurrentIndex(i => Math.min(questions.length - 1, i + 1)),
    f: () => { if (started && !submitted) toggleFlag() },
    F: () => { if (started && !submitted) toggleFlag() },
  })

  if (!started) {
    return (
      <div>
        <div className="page-header"><h1>Exam Simulation</h1></div>
        <div className="scoreboard">
          <h3>CCST Cybersecurity (100-160) - Official Simulation</h3>
          <div className="score-details" style={{ marginTop: '1.5rem' }}>
            <div className="score-detail">
              <div className="score-detail-value">50 min</div>
              <div className="score-detail-label">Time Limit</div>
            </div>
            <div className="score-detail">
              <div className="score-detail-value">45</div>
              <div className="score-detail-label">Questions</div>
            </div>
            <div className="score-detail">
              <div className="score-detail-value">300-1000</div>
              <div className="score-detail-label">Score Range</div>
            </div>
            <div className="score-detail">
              <div className="score-detail-value">~75%</div>
              <div className="score-detail-label">Pass Threshold</div>
            </div>
          </div>
          <p style={{ color: 'var(--text-secondary)', margin: '1rem 0' }}>
            This simulation mirrors the real CCST Cybersecurity exam. You can navigate between questions to review your answers before submitting.
          </p>
          <button className="btn btn-primary btn-large" onClick={handleStart}>Start Simulation</button>
        </div>
      </div>
    )
  }

  if (finished) {
    const correctCount = questions.filter(q => {
      const ua = (userAnswers[q.id] || []).slice().sort()
      const ca = q.correctAnswers.slice().sort()
      return ca.length === ua.length && ca.every((v, i) => v === ua[i])
    }).length
    const pct = Math.round((correctCount / questions.length) * 100)
    const scaled = Math.round(300 + (pct / 100) * 700)
    const passed = pct >= 75

    const domainBreakdown = [...new Set(questions.map(q => q.domain))].map(dId => {
      const dqs = questions.filter(q => q.domain === dId)
      const correct = dqs.filter(q => {
        const ua = (userAnswers[q.id] || []).slice().sort()
        const ca = q.correctAnswers.slice().sort()
        return ca.length === ua.length && ca.every((v, i) => v === ua[i])
      }).length
      return { domain: dId, correct, total: dqs.length }
    }).filter(d => d.total > 0)

    return (
      <div>
        <div className="page-header"><h1>Simulation Results</h1></div>
        <div className="scoreboard">
          {showReview ? (
            <div style={{ textAlign: 'left' }}>
              <h3 style={{ textAlign: 'center', marginBottom: '1.5rem' }}>Answer Review</h3>
              {questions.map((q, idx) => {
                const ua = (userAnswers[q.id] || []).slice().sort()
                const ca = q.correctAnswers.slice().sort()
                const isCorrect = ca.length === ua.length && ca.every((v, i) => v === ua[i])
                return (
                  <div key={q.id} style={{ marginBottom: '1.5rem', padding: '1rem', background: 'var(--bg)', borderRadius: '0.75rem', borderLeft: `4px solid ${isCorrect ? 'var(--success)' : 'var(--error)'}` }}>
                    <p style={{ fontWeight: 600, marginBottom: '0.5rem' }}>{idx + 1}. {q.question}</p>
                    <p style={{ fontSize: '0.85rem', color: 'var(--success)' }}>Correct: {ca.join(', ')}</p>
                    {!isCorrect && <p style={{ fontSize: '0.85rem', color: 'var(--error)' }}>Your answer: {ua.length ? ua.join(', ') : '(none)'}</p>}
                    <p style={{ fontSize: '0.85rem', marginTop: '0.25rem', color: 'var(--text-secondary)' }}>{q.explanation}</p>
                  </div>
                )
              })}
              <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', marginTop: '1rem' }}>
                <button className="btn btn-secondary" onClick={() => setShowReview(false)}>Back to Summary</button>
              </div>
            </div>
          ) : (
            <>
              <div className={`score-circle ${passed ? 'pass' : 'fail'}`}>
                <div className="score-number">{scaled}</div>
                <div className="score-label">/ 1000</div>
              </div>
              <div className={`result-badge ${passed ? 'correct' : 'incorrect'}`} style={{ margin: '0.5rem auto' }}>
                {passed ? 'PASSED' : 'FAILED'} ({pct}%)
              </div>
              <div className="score-details">
                <div className="score-detail">
                  <div className="score-detail-value">{correctCount}/{questions.length}</div>
                  <div className="score-detail-label">Correct</div>
                </div>
                <div className="score-detail">
                  <div className="score-detail-value">{pct}%</div>
                  <div className="score-detail-label">Percentage</div>
                </div>
                <div className="score-detail">
                  <div className="score-detail-value">{formatTime(timeLeft === 0 ? SIM_TIME : SIM_TIME - (timeLeft || 0))}</div>
                  <div className="score-detail-label">Time Used</div>
                </div>
              </div>
              <h4 style={{ marginTop: '1.5rem', marginBottom: '0.5rem' }}>Domain Breakdown</h4>
              {domainBreakdown.map(d => (
                <div key={d.domain} className="domain-bar">
                  <div className="domain-bar-label">{d.domain.split(' ').slice(0, 2).join(' ')}</div>
                  <div className="domain-bar-track">
                    <div className="domain-bar-fill" style={{ width: `${d.total > 0 ? Math.round((d.correct / d.total) * 100) : 0}%` }} />
                  </div>
                  <div className="domain-bar-value">{d.correct}/{d.total}</div>
                </div>
              ))}
              <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', marginTop: '1.5rem' }}>
                <button className="btn btn-secondary" onClick={() => setShowReview(true)}>Review Answers</button>
                <button className="btn btn-outline" onClick={restart}>New Simulation</button>
                <Link to="/" className="btn btn-primary">Home</Link>
              </div>
            </>
          )}
        </div>
      </div>
    )
  }

  const q = questions[currentIndex]
  const isAnswered = (userAnswers[q.id]?.length || 0) > 0

  return (
    <div className="sim-sidebar">
      <div className="question-nav">
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
          <button className="btn btn-secondary btn-icon" onClick={toggleFlag} title="Flag question">
            {flagged.has(currentIndex) ? '🏴' : '🏳'}
          </button>
          <button className="btn btn-primary" onClick={submitExam} style={{ fontSize: '0.8rem', padding: '0.4rem 0.75rem' }}>
            Submit
          </button>
        </div>
        <div className="question-nav-grid">
          {questions.map((q, idx) => (
            <button
              key={q.id}
              className={`question-nav-item ${(userAnswers[q.id]?.length || 0) > 0 ? 'answered' : ''} ${idx === currentIndex ? 'current' : ''} ${flagged.has(idx) ? 'flagged' : ''}`}
              onClick={() => setCurrentIndex(idx)}
            >
              {idx + 1}
            </button>
          ))}
        </div>
      </div>
      <div>
        <div className="timer-container" style={{ justifyContent: 'space-between' }}>
          <Timer timeLeft={timeLeft} isWarning={isWarning} isDanger={isDanger} />
          <span style={{ fontSize: '0.9rem' }}>Q {currentIndex + 1}/{questions.length}</span>
        </div>
        <QuestionCard
          question={q}
          selectedAnswers={userAnswers[q.id] || []}
          onSelect={handleSelect}
          showResult={false}
          mode="simulation"
        />
        <div className="action-buttons" style={{ justifyContent: 'space-between' }}>
          <button className="btn btn-secondary" onClick={() => setCurrentIndex(i => Math.max(0, i - 1))} disabled={currentIndex === 0}>← Previous</button>
          <button className="btn btn-secondary" onClick={() => setCurrentIndex(i => Math.min(questions.length - 1, i + 1))} disabled={currentIndex === questions.length - 1}>Next →</button>
        </div>
      </div>
    </div>
  )
}
