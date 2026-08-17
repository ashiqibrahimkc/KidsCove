/**
 * Calculates the dynamic admission academic year based on the current date.
 *
 * Rules:
 * - If current month is August (month index 7) or later:
 *   Admission year is current year through following year (e.g., Aug 2026 -> "2026–27").
 * - If current month is January through July (month index 0–6):
 *   Admission year is previous year through current year (e.g., May 2027 -> "2026–27").
 * - Automatically rolls over every year on 1st August.
 */
export function getAdmissionAcademicYear(date: Date = new Date()): string {
  const currentYear = date.getFullYear();
  const currentMonth = date.getMonth(); // 0 = Jan, 7 = Aug, 11 = Dec
  const startYear = currentMonth >= 7 ? currentYear + 1 : currentYear;
  const endYearShort = String(startYear + 1).slice(-2);
  return `${startYear}–${endYearShort}`;
}

/**
 * Returns the full 4-digit academic year format (e.g., "2026–2027").
 */
export function getAdmissionFullAcademicYear(date: Date = new Date()): string {
  const currentYear = date.getFullYear();
  const currentMonth = date.getMonth();
  const startYear = currentMonth >= 7 ? currentYear : currentYear - 1;
  return `${startYear}–${startYear + 1}`;
}
