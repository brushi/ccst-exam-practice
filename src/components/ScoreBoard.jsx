import { Link } from 'react-router-dom';

export function calculateScore(questions, userAnswers) {
  let correct = 0;
  const correctIds = [];
  const wrongIds = [];

  for (const q of questions) {
    const userSet = new Set(userAnswers[q.id] || []);
    const correctSet = new Set(q.correctAnswers || []);

    const isCorrect =
      userSet.size === correctSet.size &&
      [...userSet].every((a) => correctSet.has(a));

    if (isCorrect) {
      correct++;
      correctIds.push(q.id);
    } else {
      wrongIds.push(q.id);
    }
  }

  const total = questions.length;
  const percentage = total > 0 ? (correct / total) * 100 : 0;

  return { correct, total, percentage, correctIds, wrongIds };
}

function formatTime(seconds) {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}

export default function ScoreBoard({
  score,
  total,
  percentage,
  timeSpent,
  mode,
  domainBreakdown,
  onReview,
  onRetry,
  passed,
}) {
  const isSimulation = mode === 'simulation';

  return (
    <div className="scoreboard">
      <h2>Results</h2>

      <div className={`score-circle${passed ? ' pass' : ' fail'}`}>
        <span className="score-number">{Math.round(percentage)}%</span>
        <span className="score-label">
          {isSimulation
            ? `Scaled: ${Math.round((percentage / 100) * 700 + 300)}`
            : passed
              ? 'PASS'
              : 'FAIL'}
        </span>
      </div>

      {isSimulation && (
        <span className={`result-badge ${passed ? 'correct' : 'incorrect'}`}>
          {passed ? 'PASS' : 'FAIL'}
        </span>
      )}

      <div className="score-details">
        <div className="score-detail">
          <div className="score-detail-value">
            {score}/{total}
          </div>
          <div className="score-detail-label">Score</div>
        </div>
        <div className="score-detail">
          <div className="score-detail-value">{formatTime(timeSpent)}</div>
          <div className="score-detail-label">Time</div>
        </div>
        <div className="score-detail">
          <div className="score-detail-value">{Math.round(percentage)}%</div>
          <div className="score-detail-label">Percentage</div>
        </div>
      </div>

      {domainBreakdown && domainBreakdown.length > 0 && (
        <div style={{ marginTop: '1.5rem', textAlign: 'left' }}>
          <h3 style={{ marginBottom: '1rem' }}>Domain Breakdown</h3>
          {domainBreakdown.map((d) => (
            <div className="domain-bar" key={d.domain}>
              <span className="domain-bar-label">{d.domain}</span>
              <div className="domain-bar-track">
                <div
                  className="domain-bar-fill"
                  style={{
                    width: `${d.total > 0 ? (d.correct / d.total) * 100 : 0}%`,
                  }}
                />
              </div>
              <span className="domain-bar-value">
                {d.correct}/{d.total}
              </span>
            </div>
          ))}
        </div>
      )}

      <div className="action-buttons" style={{ justifyContent: 'center' }}>
        {onReview && (
          <button className="btn btn-primary" onClick={onReview}>
            Review Answers
          </button>
        )}
        {onRetry && (
          <button className="btn btn-secondary" onClick={onRetry}>
            Try Again
          </button>
        )}
        <Link to="/" className="btn btn-secondary">
          Back to Home
        </Link>
      </div>
    </div>
  );
}
