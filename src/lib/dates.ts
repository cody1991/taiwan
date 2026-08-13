export function addDays(iso: string, days: number): string {
  const date = new Date(`${iso}T00:00:00Z`);
  date.setUTCDate(date.getUTCDate() + days);
  return date.toISOString().slice(0, 10);
}

export function isConsecutiveIsoDates(dates: string[]): boolean {
  if (dates.length < 2) return true;
  return dates.every((date, index) => {
    if (index === 0) return true;
    const prev = dates[index - 1];
    return prev !== undefined && addDays(prev, 1) === date;
  });
}

export function daysUntil(targetIso: string, fromIso: string): number {
  const target = Date.parse(`${targetIso}T00:00:00Z`);
  const from = Date.parse(`${fromIso}T00:00:00Z`);
  return Math.round((target - from) / 86_400_000);
}
