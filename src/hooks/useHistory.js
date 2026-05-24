import { useState, useCallback } from 'react';

const STORAGE_KEY = 'ccst-history';
const MAX_ENTRIES = 100;

function loadHistory() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function saveHistory(history) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(history));
  } catch {
    // localStorage unavailable
  }
}

export default function useHistory() {
  const [history, setHistory] = useState(loadHistory);

  const addEntry = useCallback((entry) => {
    const newEntry = {
      id: Date.now().toString(),
      date: entry.date || new Date().toISOString(),
      mode: entry.mode,
      score: entry.score,
      totalQuestions: entry.totalQuestions,
      percentage: entry.percentage,
      timeSpent: entry.timeSpent,
      correctAnswers: entry.correctAnswers || [],
      wrongAnswers: entry.wrongAnswers || [],
      domains: entry.domains || [],
    };

    setHistory((prev) => {
      const next = [newEntry, ...prev].slice(0, MAX_ENTRIES);
      saveHistory(next);
      return next;
    });
  }, []);

  const clearHistory = useCallback(() => {
    setHistory([]);
    saveHistory([]);
  }, []);

  const getStats = useCallback(() => {
    if (history.length === 0) {
      return { totalSessions: 0, averageScore: 0, bestScore: 0, totalQuestions: 0, totalTime: 0 };
    }

    const totalSessions = history.length;
    const scores = history.map((e) => e.percentage);
    const averageScore = scores.reduce((a, b) => a + b, 0) / totalSessions;
    const bestScore = Math.max(...scores);
    const totalQuestions = history.reduce((a, e) => a + e.totalQuestions, 0);
    const totalTime = history.reduce((a, e) => a + e.timeSpent, 0);

    return { totalSessions, averageScore, bestScore, totalQuestions, totalTime };
  }, [history]);

  const getFailedQuestions = useCallback(() => {
    const failedIds = new Set();
    const seen = new Set();

    for (const entry of history) {
      for (const id of entry.wrongAnswers) {
        if (!seen.has(id)) {
          seen.add(id);
          failedIds.add(id);
        }
      }
    }

    return [...failedIds];
  }, [history]);

  return { history, addEntry, clearHistory, getStats, getFailedQuestions };
}
