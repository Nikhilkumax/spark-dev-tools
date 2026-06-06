// Lightweight fuzzy matcher. Returns a score (higher is better) or null if no match.
// Supports subsequence matching with bonuses for consecutive chars, word starts, and prefix.
export function fuzzyScore(text: string, query: string): number | null {
  if (!query) return 0;
  const t = text.toLowerCase();
  const q = query.toLowerCase().trim();
  if (!q) return 0;

  // Exact / substring fast path
  const idx = t.indexOf(q);
  if (idx !== -1) {
    let score = 1000 - idx * 2 + q.length * 4;
    if (idx === 0) score += 200;
    else if (t[idx - 1] === " " || t[idx - 1] === "-") score += 80;
    return score;
  }

  // Subsequence
  let ti = 0;
  let score = 0;
  let prevMatched = false;
  let prevIsBoundary = true;
  for (let qi = 0; qi < q.length; qi++) {
    const ch = q[qi];
    let found = -1;
    while (ti < t.length) {
      const c = t[ti];
      if (c === ch) {
        found = ti;
        break;
      }
      ti++;
      prevMatched = false;
      prevIsBoundary = c === " " || c === "-" || c === "/";
    }
    if (found === -1) return null;
    let add = 10;
    if (prevMatched) add += 15;
    if (prevIsBoundary) add += 20;
    score += add;
    ti++;
    prevMatched = true;
    prevIsBoundary = false;
  }
  // Penalize long text
  score -= Math.max(0, t.length - q.length) * 0.2;
  return score;
}
