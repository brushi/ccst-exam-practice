import { useState, useMemo, useCallback } from 'react'
import { Link } from 'react-router-dom'
import QuestionCard from '../components/QuestionCard'
import useHistory from '../hooks/useHistory'
import useKeyboard from '../hooks/useKeyboard'
import useStreak from '../hooks/useStreak'
import { allQuestions } from '../data'

export default function ReviewMode() {
  const { getFailedQuestions } = useHistory()
  const { recordPractice } = useStreak()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState([])
  const [showResult, setShowResult] = useState(false)
  const [sessions, setSessions] = useState(0)

  const failedIds = useMemo(() => getFailedQuestions(), [sessions])
  const questions = useMemo(() => allQuestions.filter(q => failedIds.includes(q.id)), [failedIds])
  const currentQuestion = questions[currentIndex]

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
    setShowResult(true)
    recordPractice()
  }

  const nextQuestion = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(prev => prev + 1)
      setSelectedAnswers([])
      setShowResult(false)
    } else {
      setSessions(s => s + 1)
      setCurrentIndex(0)
      setSelectedAnswers([])
      setShowResult(false)
    }
  }

  useKeyboard({
    a: () => handleSelect('A'), b: () => handleSelect('B'),
    c: () => handleSelect('C'), d: () => handleSelect('D'),
    Enter: () => showResult ? nextQuestion() : checkAnswer(),
  })

  if (questions.length === 0) {
    return (
      <div>
        <div className="page-header"><h1>Review Mistakes</h1></div>
        <div className="empty-state">
          <h3>No questions to review</h3>
          <p>Complete some practice sessions first to generate review questions.</p>
          <Link to="/study" className="btn btn-primary" style={{ marginTop: '1rem' }}>Start Studying</Link>
        </div>
      </div>
    )
  }

  const isCorrect = showResult ? (() => {
    const ua = [...selectedAnswers].sort()
    const ca = currentQuestion.correctAnswers.slice().sort()
    return ca.length === ua.length && ca.every((v, i) => v === ua[i])
  })() : null

  return (
    <div>
      <div className="page-header">
        <h1>Review Mistakes</h1>
        <p>Question {currentIndex + 1} of {questions.length} · {questions.length} questions need review</p>
      </div>
      <QuestionCard question={currentQuestion} selectedAnswers={selectedAnswers}
        onSelect={handleSelect} showResult={showResult} isCorrect={isCorrect} mode="review" />
      <div className="action-buttons">
        {!showResult ? (
          <button className="btn btn-primary" onClick={checkAnswer} disabled={selectedAnswers.length === 0}>Check Answer</button>
        ) : (
          <button className="btn btn-primary" onClick={nextQuestion}>
            {currentIndex < questions.length - 1 ? 'Next Question →' : 'Restart Review'}
          </button>
        )}
      </div>
    </div>
  )
}
