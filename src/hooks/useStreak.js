import { useState, useCallback, useMemo } from 'react';

const STORAGE_KEY = 'ccst-streak';

function loadStreakData() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : { streak: 0, lastPracticeDate: null };
  } catch {
    return { streak: 0, lastPracticeDate: null };
  }
}

function saveStreakData(data) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch {
    // localStorage unavailable
  }
}

function getToday() {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

function getYesterday() {
  const d = new Date();
  d.setDate(d.getDate() - 1);
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

export default function useStreak() {
  const [data, setData] = useState(loadStreakData);

  const recordPractice = useCallback(() => {
    setData((prev) => {
      const today = getToday();
      const yesterday = getYesterday();

      let next;
      if (prev.lastPracticeDate === today) {
        return prev;
      } else if (prev.lastPracticeDate === yesterday) {
        next = { streak: prev.streak + 1, lastPracticeDate: today };
      } else {
        next = { streak: 1, lastPracticeDate: today };
      }

      saveStreakData(next);
      return next;
    });
  }, []);

  const hasPracticedToday = useMemo(() => {
    return data.lastPracticeDate === getToday();
  }, [data.lastPracticeDate]);

  return {
    streak: data.streak,
    lastPracticeDate: data.lastPracticeDate,
    recordPractice,
    hasPracticedToday,
  };
}
