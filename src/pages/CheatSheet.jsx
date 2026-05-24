import { useState } from 'react'
import cheatsheet from '../data/cheatsheet'

function renderSection(section) {
  if (section.type === 'table') {
    return (
      <div key={section.title}>
        <h3>{section.title}</h3>
        <table>
          <thead><tr>{section.headers.map(h => <th key={h}>{h}</th>)}</tr></thead>
          <tbody>
            {section.rows.map((row, i) => (
              <tr key={i}>{row.map((cell, j) => <td key={j}>{cell}</td>)}</tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }
  if (section.type === 'list') {
    return (
      <div key={section.title}>
        <h3>{section.title}</h3>
        <ul style={{ paddingLeft: '1.5rem', lineHeight: '1.8' }}>
          {section.items.map((item, i) => <li key={i}>{item}</li>)}
        </ul>
      </div>
    )
  }
  return null
}

export default function CheatSheet() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <div>
      <div className="page-header">
        <h1>Cheat Sheet</h1>
        <p>Quick reference for all CCST Cybersecurity exam domains.</p>
      </div>
      <div className="cheatsheet-tabs">
        {cheatsheet.map((domain, i) => (
          <button key={domain.domainId} className={`cheatsheet-tab ${activeTab === i ? 'active' : ''}`}
            onClick={() => setActiveTab(i)}>
            {domain.domainName}
          </button>
        ))}
      </div>
      <div className="cheatsheet-content">
        {cheatsheet[activeTab].sections.map(section => renderSection(section))}
      </div>
    </div>
  )
}
