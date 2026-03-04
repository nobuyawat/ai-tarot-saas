const AUTH_KEY = "aiTarotAuth";
const PAID_KEY = "aiTarotPaid";

export function isAuthed(): boolean {
  if (typeof window === "undefined") return false;
  return localStorage.getItem(AUTH_KEY) === "1";
}

export function isPaid(): boolean {
  if (typeof window === "undefined") return false;
  return localStorage.getItem(PAID_KEY) === "1";
}

export function setAuthed(): void {
  localStorage.setItem(AUTH_KEY, "1");
}

export function setPaid(): void {
  localStorage.setItem(PAID_KEY, "1");
}

export function clearDemo(): void {
  localStorage.removeItem(AUTH_KEY);
  localStorage.removeItem(PAID_KEY);
}
