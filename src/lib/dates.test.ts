import { describe, expect, it } from "vitest";
import { addDays, daysUntil, isConsecutiveIsoDates } from "./dates";

describe("dates", () => {
  it("adds calendar days in UTC", () => {
    expect(addDays("2026-12-31", 1)).toBe("2027-01-01");
  });

  it("detects a consecutive range", () => {
    expect(
      isConsecutiveIsoDates(["2026-12-20", "2026-12-21", "2026-12-22"]),
    ).toBe(true);
    expect(isConsecutiveIsoDates(["2026-12-20", "2026-12-22"])).toBe(false);
  });

  it("counts days until a deadline", () => {
    expect(daysUntil("2026-09-21", "2026-08-13")).toBe(39);
  });
});
