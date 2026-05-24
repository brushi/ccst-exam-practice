export default function Timer({ timeLeft, isWarning, isDanger }) {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const formatted = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

  const displayClass = `timer-display${isDanger ? ' danger' : ''}${isWarning && !isDanger ? ' warning' : ''}`;

  return (
    <div className="timer-container">
      <span role="img" aria-label="timer">&#9200;</span>
      <span className={displayClass}>{formatted}</span>
    </div>
  );
}
