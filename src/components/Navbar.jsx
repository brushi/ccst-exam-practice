import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import useTheme from '../hooks/useTheme';

const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/study', label: 'Study' },
  { to: '/exam', label: 'Exam' },
  { to: '/simulation', label: 'Sim' },
  { to: '/flashcards', label: 'Cards' },
  { to: '/review', label: 'Review' },
  { to: '/history', label: 'History' },
  { to: '/stats', label: 'Stats' },
  { to: '/search', label: 'Search' },
  { to: '/cheatsheet', label: 'Cheatsheet' },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <NavLink to="/" className="navbar-brand">
        CCST Cybersecurity
      </NavLink>

      <div className={`navbar-links${menuOpen ? ' open' : ''}`}>
        {NAV_LINKS.map(({ to, label }) => (
          <NavLink
            key={to}
            to={to}
            end={to === '/'}
            onClick={() => setMenuOpen(false)}
          >
            {label}
          </NavLink>
        ))}
      </div>

      <div className="navbar-actions">
        <button
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label="Toggle theme"
        >
          {theme === 'light' ? '🌙' : '☀️'}
        </button>
        <button
          className="hamburger"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>
    </nav>
  );
}
