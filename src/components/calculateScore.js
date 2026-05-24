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
