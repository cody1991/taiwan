import { describe, expect, it } from "vitest";
import { bookings, checklist, nextMilestone, taiwanDays, trip } from "./data";
import { isConsecutiveIsoDates } from "./lib/dates";

describe("itinerary data", () => {
  it("covers 8 consecutive Taiwan days", () => {
    expect(taiwanDays).toHaveLength(8);
    expect(taiwanDays[0]?.date).toBe(trip.taiwanStart);
    expect(taiwanDays.at(-1)?.date).toBe(trip.taiwanEnd);
    expect(isConsecutiveIsoDates(taiwanDays.map((day) => day.date))).toBe(true);
  });

  it("points at the next open milestone", () => {
    expect(nextMilestone("2026-08-13")?.date).toBe("2026-09-26");
    expect(nextMilestone("2027-02-20")?.date).toBe("2027-02-14");
  });

  it("uses unique checklist ids", () => {
    const ids = checklist.flatMap((group) => group.items.map((item) => item.id));
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("has food pictures on the eating days", () => {
    const pictured = taiwanDays.filter((day) => day.image);
    expect(pictured).toHaveLength(4);
  });

  it("has live booking links", () => {
    expect(bookings.length).toBeGreaterThan(3);
    for (const item of bookings) {
      expect(item.href.startsWith("https://")).toBe(true);
    }
  });
});
