export default function QuestionCard({
  question,
  selectedAnswers = [],
  onSelect,
  showResult,
  isCorrect,
  mode,
}) {
  const isDisabled = showResult && mode !== 'simulation' && mode !== 'exam';
  const isMultiple = question.correctAnswers && question.correctAnswers.length > 1;
  const showExplanation = showResult && mode !== 'simulation' && mode !== 'exam';

  function handleClick(label) {
    if (isDisabled) return;
    onSelect(label);
  }

  function getOptionClass(label) {
    const classes = ['option-btn'];
    const isSelected = selectedAnswers.includes(label);
    const isCorrectAnswer = question.correctAnswers && question.correctAnswers.includes(label);

    if (isSelected) classes.push('selected');
    if (showResult) {
      if (isCorrectAnswer) classes.push('correct');
      else if (isSelected && !isCorrectAnswer) classes.push('incorrect');
    }
    if (isDisabled && isSelected) classes.push('disabled');

    return classes.join(' ');
  }

  return (
    <div className="question-card">
      {question.domain && (
        <div className="question-domain">{question.domain}</div>
      )}

      {(question.id || question.chapter) && (
        <div className="question-number">
          {question.id && <span>Question {question.id}</span>}
          {question.chapter && <span> &mdash; {question.chapter}</span>}
        </div>
      )}

      <div className="question-text">
        {question.question}
        {isMultiple && <small> (Select all that apply)</small>}
      </div>

      {showResult && !isDisabled && (
        <div style={{ marginBottom: '1rem' }}>
          <span className={`result-badge ${isCorrect ? 'correct' : 'incorrect'}`}>
            {isCorrect ? 'Correct' : 'Incorrect'}
          </span>
        </div>
      )}

      <div className="options-list">
        {question.options && question.options.map(({ label, text }) => (
          <button
            key={label}
            className={getOptionClass(label)}
            onClick={() => handleClick(label)}
            disabled={isDisabled}
          >
            <span className="option-label">{label}</span>
            <span>{text}</span>
          </button>
        ))}
      </div>

      {showExplanation && question.explanation && (
        <div className="explanation-box">
          <h4>Explanation</h4>
          <p>{question.explanation}</p>
        </div>
      )}
    </div>
  );
}
