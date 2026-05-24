# CCST Cybersecurity Exam Simulator

> Study and practice for the Cisco Certified Support Technician (CCST) Cybersecurity certification exam (100-160) with real questions extracted from the official Lammle study guide.

[![React](https://img.shields.io/badge/React-18-61DAFB?logo=react)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite)](https://vitejs.dev)
[![License](https://img.shields.io/badge/license-MIT-blue)](./LICENSE)

![CCST Exam Simulator - Dashboard](public/preview.png)

---

## Features

| Mode | Description |
|---|---|
| **Study Mode** | One question at a time with immediate feedback and detailed explanations. No time limit. |
| **Custom Exam** | Configurable question count, time limit, and topic filter. Random question order. |
| **Real Simulation** | Full exam simulation: **50 minutes**, **45 questions**, scored on Cisco's **300-1000 scale**. Supports flagging and navigating back to review answers. |
| **Flashcards** | 50 key terms across all 5 CCST domains with flip animation. Filter by domain. Track learned cards. |
| **Review Mistakes** | Auto-generates a session from previously missed questions. |
| **Search** | Search the entire 172-question bank by keyword, topic, or concept. |
| **Stats & Charts** | Performance breakdown by domain with bar charts. Score progression timeline. |
| **Session History** | Sortable table with all past sessions. CSV export ready for external analysis. |
| **Cheat Sheet** | Quick-reference tables: CIA triad, Wi-Fi standards, ports, protocols, regulations, IR phases, Cyber Kill Chain. |
| **Dark Mode** | Full light/dark theme with CSS custom properties. Persists to localStorage. |
| **Keyboard Shortcuts** | A/B/C/D to select answers, Enter to confirm, arrow keys to navigate. |
| **Responsive** | Works on desktop, tablet, and mobile. |

## Tech Stack

- **React 18** — UI framework
- **Vite 8** — Build tool with HMR
- **React Router v6** — Client-side routing (10 routes)
- **Recharts** — Declarative charting (bar charts, line charts)
- **CSS Custom Properties** — Theming without a UI library
- **localStorage** — Client-side persistence (history, streak, preferences, failed questions)

## Project Structure

```
src/
├── data/                   # 172 questions, 50 flashcards, cheat sheet data
│   ├── assessmentTest.js   # 26 questions from book's Assessment Test
│   ├── chapter1.js         # Chapter 1-13 review questions (10-21 each)
│   ├── flashcards.js       # Key terms from Exam Essentials
│   ├── cheatsheet.js       # Quick-reference tables by domain
│   └── index.js            # Aggregator + domain config + utility functions
├── hooks/                  # Custom React hooks
│   ├── useTimer.js         # Countdown timer with warning/danger states
│   ├── useHistory.js       # Session history CRUD (localStorage)
│   ├── useKeyboard.js      # Global keyboard shortcut handler
│   ├── useStreak.js        # Daily practice streak tracker
│   └── useTheme.js         # Dark/light theme toggle
├── components/             # Reusable UI components
│   ├── QuestionCard.jsx    # Question display with option buttons
│   ├── Timer.jsx           # MM:SS countdown display
│   ├── ScoreBoard.jsx      # Score ring + domain breakdown
│   ├── TopicFilter.jsx     # Domain/chapter chip filter
│   ├── Navbar.jsx          # Navigation + theme toggle + hamburger menu
│   └── Layout.jsx          # Page wrapper
├── pages/                  # Route-level page components (10 pages)
│   ├── Home.jsx            # Dashboard with streak, stats, quick-access cards
│   ├── StudyMode.jsx       # Feedback-per-question study mode
│   ├── ExamMode.jsx        # Configurable exam with timer
│   ├── SimulationMode.jsx  # 50 min / 45 q / 300-1000 scale simulation
│   ├── Flashcards.jsx      # Flip-card review with domain filter
│   ├── ReviewMode.jsx      # Missed-questions review
│   ├── History.jsx         # Sortable session table + CSV export
│   ├── Stats.jsx           # Recharts bar chart + line chart
│   ├── Search.jsx          # Full-text question search
│   └── CheatSheet.jsx      # Tabbed reference by domain
└── App.css                 # Single-file CSS with light/dark theme + responsive
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 18+ 
- [npm](https://www.npmjs.com/) 9+

### Installation

```bash
git clone https://github.com/brushi/ccst-exam-practice.git
cd ccst-exam-practice
npm install
```

### Development

```bash
npm run dev
```

Opens at `http://localhost:5173`.

### Production Build

```bash
npm run build
```

Outputs to `dist/`. Serves as static files from any hosting provider.

### Deploy (Vercel)

1. Push to GitHub
2. Connect the repo to [Vercel](https://vercel.com)
3. Vite is auto-detected — no configuration needed

## Question Bank

All **172 questions** are extracted directly from the *CCST Cisco Certified Support Technician Study Guide: Cybersecurity* by Todd Lammle (2025 edition). Each question includes:

- **Question** — matching the book's exact wording
- **4 options** (A/B/C/D) — with support for multi-select questions
- **Correct answer(s)** — verified against Appendix A
- **Detailed explanation** — taken from the book's answer key

Questions cover all 5 official CCST exam domains:
1. **Essential Security Principles** — CIA triad, threats, attacks, regulations
2. **Basic Network Security Concepts** — TCP/IP, ACLs, VLANs, VPN, encryption
3. **Endpoint Security Concepts** — OS hardening, permissions, antimalware, MDM
4. **Vulnerability Assessment & Risk Management** — CVSS, CVE, risk analysis, DR/BCP
5. **Incident Handling** — IR lifecycle, SIEM, SOAR, forensics, Kill Chain, ATT&CK

## License

MIT

---

*Built as a portfolio project demonstrating React, React Router, Recharts, custom hooks, localStorage state management, and responsive CSS architecture without a UI framework.*
