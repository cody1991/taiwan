const KEY = "taiwan-trip-checklist";

export function loadChecked(): string[] {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return [];
    const parsed: unknown = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed.filter((id) => typeof id === "string") : [];
  } catch {
    return [];
  }
}

export function saveChecked(ids: string[]) {
  localStorage.setItem(KEY, JSON.stringify(ids));
}
