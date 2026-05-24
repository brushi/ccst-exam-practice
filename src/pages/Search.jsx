import { useState, useMemo } from 'react'
import QuestionCard from '../components/QuestionCard'
import { allQuestions } from '../data'

export default function Search() {
  const [query, setQuery] = useState('')
  const [selectedQuestion, setSelectedQuestion] = useState(null)
  const [showAnswer, setShowAnswer] = useState(false)

  const results = useMemo(() => {
    if (!query.trim()) return []
    const q = query.toLowerCase()
    return allQuestions.filter(qs =>
      qs.question.toLowerCase().includes(q) ||
      qs.options.some(o => o.text.toLowerCase().includes(q)) ||
      qs.explanation.toLowerCase().includes(q) ||
      qs.domain.toLowerCase().includes(q) ||
      qs.chapter.toLowerCase().includes(q)
    ).slice(0, 50)
  }, [query])

  if (selectedQuestion) {
    return (
      <div>
        <div className="page-header">
          <button className="btn btn-secondary" onClick={() => { setSelectedQuestion(null); setShowAnswer(false) }}>← Back to Search</button>
        </div>
        <QuestionCard
          question={selectedQuestion}
          selectedAnswers={showAnswer ? selectedQuestion.correctAnswers : []}
          onSelect={() => {}}
          showResult={showAnswer}
          isCorrect={true}
          mode="study"
        />
        {!showAnswer && (
          <button className="btn btn-primary" onClick={() => setShowAnswer(true)}>Show Answer</button>
        )}
      </div>
    )
  }

  return (
    <div>
      <div className="page-header">
        <h1>Search Questions</h1>
        <p>Search by keyword, topic, or concept across all {allQuestions.length} questions.</p>
      </div>
      <div className="search-bar">
        <input className="search-input" type="text" placeholder="Search questions..." value={query}
          onChange={e => setQuery(e.target.value)} autoFocus />
      </div>
      <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '1rem' }}>
        {query.trim() ? `${results.length} results` : 'Start typing to search...'}
      </p>
      <div className="search-results">
        {results.map(q => (
          <div key={q.id} className="search-result" onClick={() => setSelectedQuestion(q)}>
            <div className="search-result-chapter">{q.domain}</div>
            <p style={{ fontSize: '0.95rem' }}>{q.question}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
