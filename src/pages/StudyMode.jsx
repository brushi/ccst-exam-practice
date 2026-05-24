import { useState, useMemo, useCallback } from 'react'
import { Link } from 'react-router-dom'
import QuestionCard from '../components/QuestionCard'
import TopicFilter from '../components/TopicFilter'
import useKeyboard from '../hooks/useKeyboard'
import useHistory from '../hooks/useHistory'
import useStreak from '../hooks/useStreak'
import { allQuestions, domains } from '../data'

export default function StudyMode() {
  const [selectedDomains, setSelectedDomains] = useState(domains.map(d => d.id))
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState([])
  const [showResult, setShowResult] = useState(false)
  const [completed, setCompleted] = useState(false)
  const [results, setResults] = useState([])

  const { addEntry } = useHistory()
  const { recordPractice } = useStreak()

  const filteredQuestions = useMemo(() => {
    return allQuestions.filter(q => selectedDomains.includes(q.domain))
  }, [selectedDomains])

  const currentQuestion = filteredQuestions[currentIndex]

  const handleSelect = useCallback((label) => {
    if (showResult) return
    setSelectedAnswers(prev => {
      if (currentQuestion.correctAnswers.length > 1) {
        return prev.includes(label) ? prev.filter(l => l !== label) : [...prev, label].sort()
      }
      return [label]
    })
  }, [showResult, currentQuestion])

  const checkAnswer = () => {
    if (selectedAnswers.length === 0) return
    const correct = currentQuestion.correctAnswers.slice().sort()
    const user = [...selectedAnswers].sort()
    const isCorrect = correct.length === user.length && correct.every((v, i) => v === user[i])
    setShowResult(true)
    setResults(prev => [...prev, {
      questionId: currentQuestion.id,
      isCorrect,
      selectedAnswers: [...selectedAnswers],
      correctAnswers: currentQuestion.correctAnswers
    }])
    recordPractice()
  }

  const nextQuestion = () => {
    if (currentIndex < filteredQuestions.length - 1) {
      setCurrentIndex(prev => prev + 1)
      setSelectedAnswers([])
      setShowResult(false)
    } else {
      setCompleted(true)
      const correctCount = results.filter(r => r.isCorrect).length
      const wrongIds = results.filter(r => !r.isCorrect).map(r => r.questionId)
      const correctIds = results.filter(r => r.isCorrect).map(r => r.questionId)
      addEntry({
        date: new Date().toISOString(),
        mode: 'study',
        score: correctCount,
        totalQuestions: results.length,
        percentage: Math.round((correctCount / results.length) * 100),
        timeSpent: 0,
        correctAnswers: correctIds,
        wrongAnswers: wrongIds,
        domains: selectedDomains
      })
    }
  }

  useKeyboard({
    a: () => handleSelect('A'),
    b: () => handleSelect('B'),
    c: () => handleSelect('C'),
    d: () => handleSelect('D'),
    Enter: () => showResult ? nextQuestion() : checkAnswer(),
  })

  if (completed) {
    const correct = results.filter(r => r.isCorrect).length
    const pct = Math.round((correct / results.length) * 100)
    return (
      <div>
        <div className="page-header">
          <h1>Study Session Complete</h1>
        </div>
        <div className="scoreboard">
          <div className={`score-circle ${pct >= 75 ? 'pass' : 'fail'}`}>
            <div className="score-number">{pct}%</div>
            <div className="score-label">Score</div>
          </div>
          <div className="score-details">
            <div className="score-detail">
              <div className="score-detail-value">{correct}/{results.length}</div>
              <div className="score-detail-label">Correct</div>
            </div>
            <div className="score-detail">
              <div className="score-detail-value">{filteredQuestions.length}</div>
              <div className="score-detail-label">Questions</div>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center' }}>
            <button className="btn btn-outline" onClick={() => { setCurrentIndex(0); setSelectedAnswers([]); setShowResult(false); setResults([]); setCompleted(false) }}>Study Again</button>
            <Link to="/" className="btn btn-primary">Back to Home</Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div>
      <div className="page-header">
        <h1>Study Mode</h1>
        <p>Question {currentIndex + 1} of {filteredQuestions.length}</p>
      </div>
      <TopicFilter
        domains={domains}
        selectedDomains={selectedDomains}
        onToggle={(id) => setSelectedDomains(prev => prev.includes(id) ? prev.filter(d => d !== id) : [...prev, id])}
        selectAll={() => setSelectedDomains(domains.map(d => d.id))}
        clearAll={() => setSelectedDomains([])}
      />
      {filteredQuestions.length === 0 ? (
        <div className="empty-state">
          <h3>No questions available</h3>
          <p>Select at least one domain to practice.</p>
        </div>
      ) : currentQuestion ? (
        <>
          <QuestionCard
            question={currentQuestion}
            selectedAnswers={selectedAnswers}
            onSelect={handleSelect}
            showResult={showResult}
            isCorrect={showResult ? results[results.length - 1]?.isCorrect : null}
            mode="study"
          />
          <div className="action-buttons">
            {!showResult ? (
              <button className="btn btn-primary" onClick={checkAnswer} disabled={selectedAnswers.length === 0}>
                Check Answer
              </button>
            ) : (
              <button className="btn btn-primary" onClick={nextQuestion}>
                {currentIndex < filteredQuestions.length - 1 ? 'Next Question →' : 'Finish Session'}
              </button>
            )}
            <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', alignSelf: 'center' }}>
              Tip: Press A, B, C, D to select, Enter to confirm
            </span>
          </div>
        </>
      ) : null}
    </div>
  )
}
