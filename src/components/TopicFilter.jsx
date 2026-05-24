export default function TopicFilter({
  domains = [],
  selectedDomains = [],
  onToggle,
  selectAll,
  clearAll,
}) {
  return (
    <div className="topic-filter">
      <button
        className="btn btn-secondary"
        style={{ fontSize: '0.8rem', padding: '0.25rem 0.75rem' }}
        onClick={selectAll}
        type="button"
      >
        Select All
      </button>
      <button
        className="btn btn-secondary"
        style={{ fontSize: '0.8rem', padding: '0.25rem 0.75rem' }}
        onClick={clearAll}
        type="button"
      >
        Clear All
      </button>

      {domains.map((domain) => (
        <button
          key={domain.id}
          className={`topic-chip${selectedDomains.includes(domain.id) ? ' active' : ''}`}
          onClick={() => onToggle(domain.id)}
          type="button"
        >
          {domain.label}
        </button>
      ))}
    </div>
  );
}
