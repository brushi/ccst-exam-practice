import { useState, useMemo } from 'react'
import TopicFilter from '../components/TopicFilter'
import { domains } from '../data'
import allFlashcards from '../data/flashcards'

export default function Flashcards() {
  const [selectedDomains, setSelectedDomains] = useState(domains.map(d => d.id))
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isFlipped, setIsFlipped] = useState(false)
  const [learned, setLearned] = useState(new Set())
  const [showLearned, setShowLearned] = useState(false)

  const filteredCards = useMemo(() => {
    let cards = allFlashcards.filter(c => selectedDomains.includes(c.domain))
    if (showLearned) cards = cards.filter(c => learned.has(c.id))
    return cards
  }, [selectedDomains, learned, showLearned])

  const currentCard = filteredCards[currentIndex]

  const nextCard = () => {
    setIsFlipped(false)
    if (currentIndex < filteredCards.length - 1) {
      setCurrentIndex(prev => prev + 1)
    } else {
      setCurrentIndex(0)
    }
  }

  const prevCard = () => {
    setIsFlipped(false)
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1)
    } else {
      setCurrentIndex(filteredCards.length - 1)
    }
  }

  const toggleLearned = () => {
    if (!currentCard) return
    setLearned(prev => {
      const next = new Set(prev)
      if (next.has(currentCard.id)) next.delete(currentCard.id)
      else next.add(currentCard.id)
      return next
    })
  }

  if (filteredCards.length === 0) {
    return (
      <div>
        <div className="page-header"><h1>Flashcards</h1></div>
        <TopicFilter domains={domains} selectedDomains={selectedDomains}
          onToggle={(id) => setSelectedDomains(prev => prev.includes(id) ? prev.filter(d => d !== id) : [...prev, id])}
          selectAll={() => setSelectedDomains(domains.map(d => d.id))} clearAll={() => setSelectedDomains([])} />
        <div className="empty-state"><h3>No flashcards</h3><p>Select a domain or check your filters.</p></div>
      </div>
    )
  }

  return (
    <div>
      <div className="page-header">
        <h1>Flashcards</h1>
        <p>Click card to flip. Review key CCST Cybersecurity terms.</p>
      </div>
      <TopicFilter domains={domains} selectedDomains={selectedDomains}
        onToggle={(id) => setSelectedDomains(prev => prev.includes(id) ? prev.filter(d => d !== id) : [...prev, id])}
        selectAll={() => setSelectedDomains(domains.map(d => d.id))} clearAll={() => setSelectedDomains([])} />
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
        <span className="flashcard-progress">{currentIndex + 1} / {filteredCards.length}</span>
        <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', cursor: 'pointer' }}>
          <input type="checkbox" checked={showLearned} onChange={(e) => setShowLearned(e.target.checked)} />
          Only learned
        </label>
      </div>
      <div className="flashcard-container">
        <div className="flashcard" onClick={() => setIsFlipped(!isFlipped)}>
          <div className={`flashcard-inner ${isFlipped ? 'flipped' : ''}`}>
            <div className="flashcard-front">
              <h3>{currentCard.domain}</h3>
              <p>{currentCard.term}</p>
            </div>
            <div className="flashcard-back">
              <p>{currentCard.definition}</p>
            </div>
          </div>
        </div>
        <div className="flashcard-controls">
          <button className="btn btn-secondary" onClick={prevCard}>← Previous</button>
          <button className={`btn ${learned.has(currentCard?.id) ? 'btn-secondary' : 'btn-success'}`} onClick={toggleLearned}>
            {learned.has(currentCard?.id) ? 'Mark for Review' : 'Mark Learned'}
          </button>
          <button className="btn btn-secondary" onClick={nextCard}>Next →</button>
        </div>
      </div>
    </div>
  )
}
