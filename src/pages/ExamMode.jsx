import { useState, useCallback, useRef, useEffect } from 'react'
import QuestionCard from '../components/QuestionCard'
import TopicFilter from '../components/TopicFilter'
import Timer from '../components/Timer'
import ScoreBoard from '../components/ScoreBoard'
import { calculateScore } from '../components/calculateScore'
import useTimer from '../hooks/useTimer'
import useKeyboard from '../hooks/useKeyboard'
import useHistory from '../hooks/useHistory'
import useStreak from '../hooks/useStreak'
import { allQuestions, domains } from '../data'

export default function ExamMode() {
  const { addEntry } = useHistory()
  const { recordPractice } = useStreak()

  const [configured, setConfigured] = useState(false)
  const [questionCount, setQuestionCount] = useState(30)
  const [timeMinutes, setTimeMinutes] = useState(30)
  const [selectedDomains, setSelectedDomains] = useState(domains.map(d => d.id))

  const [questions, setQuestions] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [userAnswers, setUserAnswers] = useState({})
  const [showScore, setShowScore] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const finishExamRef = useRef(null)

  const handleTimeUp = useCallback(() => {
    finishExamRef.current?.()
  }, [])

  const { timeLeft, isWarning, isDanger, start, pause } = useTimer(timeMinutes * 60, false, handleTimeUp)

  const startExam = () => {
    const filtered = allQuestions.filter(q => selectedDomains.includes(q.domain))
    const shuffled = [...filtered].sort(() => Math.random() - 0.5)
    setQuestions(shuffled.slice(0, Math.min(questionCount, shuffled.length)))
    setCurrentIndex(0)
    setUserAnswers({})
    setShowScore(false)
    setSubmitted(false)
    setConfigured(true)
    start()
  }

  const handleSelect = useCallback((label) => {
    if (submitted) return
    const q = questions[currentIndex]
    setUserAnswers(prev => {
      const current = prev[q.id] || []
      if (q.correctAnswers.length > 1) {
        if (current.includes(label)) {
          return { ...prev, [q.id]: current.filter(l => l !== label) }
        }
        return { ...prev, [q.id]: [...current, label].sort() }
      }
      return { ...prev, [q.id]: [label] }
    })
  }, [questions, currentIndex, submitted])

  const finishExam = useCallback(() => {
    if (submitted) return
    setSubmitted(true)
    setShowScore(true)
    pause()
    const result = calculateScore(questions, userAnswers)
    addEntry({
      date: new Date().toISOString(),
      mode: 'exam',
      score: result.correct,
      totalQuestions: questions.length,
      percentage: result.percentage,
      timeSpent: timeMinutes * 60 - timeLeft,
      correctAnswers: result.correctIds,
      wrongAnswers: result.wrongIds,
      domains: selectedDomains
    })
    recordPractice()
  }, [submitted, pause, questions, userAnswers, addEntry, timeMinutes, timeLeft, selectedDomains, recordPractice])

  useEffect(() => {
    finishExamRef.current = finishExam
  }, [finishExam])

  useKeyboard({
    a: () => handleSelect('A'),
    b: () => handleSelect('B'),
    c: () => handleSelect('C'),
    d: () => handleSelect('D'),
    ArrowLeft: () => setCurrentIndex(i => Math.max(0, i - 1)),
    ArrowRight: () => setCurrentIndex(i => Math.min(questions.length - 1, i + 1)),
  })

  if (!configured) {
    return (
      <div>
        <div className="page-header">
          <h1>Custom Exam</h1>
          <p>Configure your exam settings below.</p>
        </div>
        <div style={{ background: 'var(--surface)', borderRadius: '1rem', padding: '2rem', maxWidth: 500 }}>
          <div className="form-group">
            <label className="form-label">Number of Questions</label>
            <select className="form-select" value={questionCount} onChange={e => setQuestionCount(Number(e.target.value))}>
              <option value={10}>10</option>
              <option value={20}>20</option>
              <option value={30}>30</option>
              <option value={40}>40</option>
              <option value={50}>50</option>
            </select>
          </div>
          <div className="form-group">
            <label className="form-label">Time Limit (minutes)</label>
            <select className="form-select" value={timeMinutes} onChange={e => setTimeMinutes(Number(e.target.value))}>
              <option value={15}>15 minutes</option>
              <option value={20}>20 minutes</option>
              <option value={30}>30 minutes</option>
              <option value={45}>45 minutes</option>
              <option value={60}>60 minutes</option>
              <option value={90}>90 minutes</option>
            </select>
          </div>
          <div className="form-group">
            <label className="form-label">Topics</label>
          </div>
          <TopicFilter
            domains={domains}
            selectedDomains={selectedDomains}
            onToggle={(id) => setSelectedDomains(prev => prev.includes(id) ? prev.filter(d => d !== id) : [...prev, id])}
            selectAll={() => setSelectedDomains(domains.map(d => d.id))}
            clearAll={() => setSelectedDomains([])}
          />
          <button className="btn btn-primary btn-block btn-large" onClick={startExam} disabled={selectedDomains.length === 0}
            style={{ marginTop: '1.5rem' }}>
            Start Exam
          </button>
        </div>
      </div>
    )
  }

  if (showScore) {
    const result = calculateScore(questions, userAnswers)
    const domainBreakdown = selectedDomains.map(dId => {
      const dqs = questions.filter(q => q.domain === dId)
      const correct = dqs.filter(q => {
        const ua = userAnswers[q.id] || []
        const ca = q.correctAnswers.slice().sort()
        return ca.length === ua.length && ca.every((v, i) => v === ua[i])
      }).length
      return { domain: dId, correct, total: dqs.length }
    }).filter(d => d.total > 0)
    return (
      <div>
        <div className="page-header"><h1>Exam Results</h1></div>
        <ScoreBoard
          score={result.correct} total={questions.length} percentage={result.percentage}
          timeSpent={timeMinutes * 60 - timeLeft} mode="exam" domainBreakdown={domainBreakdown}
          onRetry={() => { setConfigured(false); setShowScore(false) }}
        />
      </div>
    )
  }

  const q = questions[currentIndex]
  return (
    <div>
      <div className="page-header">
        <h1>Custom Exam</h1>
      </div>
      <div className="timer-container" style={{ justifyContent: 'space-between' }}>
        <Timer timeLeft={timeLeft} isWarning={isWarning} isDanger={isDanger} />
        <span style={{ fontSize: '0.9rem' }}>Question {currentIndex + 1} of {questions.length}</span>
      </div>
      <QuestionCard
        question={q}
        selectedAnswers={userAnswers[q.id] || []}
        onSelect={handleSelect}
        showResult={false}
        mode="exam"
      />
      <div className="action-buttons" style={{ justifyContent: 'space-between' }}>
        <div>
          <button className="btn btn-secondary" onClick={() => setCurrentIndex(i => Math.max(0, i - 1))} disabled={currentIndex === 0}>← Previous</button>
          <button className="btn btn-secondary" onClick={() => setCurrentIndex(i => Math.min(questions.length - 1, i + 1))} disabled={currentIndex === questions.length - 1} style={{ marginLeft: '0.5rem' }}>Next →</button>
        </div>
        <button className="btn btn-primary" onClick={finishExam}>Submit Exam</button>
      </div>
    </div>
  )
}
