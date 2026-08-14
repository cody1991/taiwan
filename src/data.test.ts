import { describe, expect, it } from "vitest";
import { bookings, checklist, foodGroups, nextMilestone, permitHague, taiwanDays, trip } from "./data";
import { isConsecutiveIsoDates } from "./lib/dates";

describe("itinerary data", () => {
  it("covers 8 consecutive Taiwan days", () => {
    expect(taiwanDays).toHaveLength(8);
    expect(taiwanDays[0]?.date).toBe(trip.taiwanStart);
    expect(taiwanDays.at(-1)?.date).toBe(trip.taiwanEnd);
    expect(isConsecutiveIsoDates(taiwanDays.map((day) => day.date))).toBe(true);
  });

  it("points at the next open milestone", () => {
    expect(nextMilestone("2026-08-13")?.date).toBe("2026-09-17");
    expect(nextMilestone("2027-02-20")?.date).toBe("2027-02-06");
  });

  it("uses unique checklist ids", () => {
    const ids = checklist.flatMap((group) => group.items.map((item) => item.id));
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("lists pictured foods on the food page", () => {
    const pictured = foodGroups.flatMap((group) => group.items).filter((item) => item.image);
    expect(pictured).toHaveLength(4);
  });

  it("writes a walkable plan for every day", () => {
    for (const day of taiwanDays) {
      expect(day.beats.length).toBeGreaterThanOrEqual(3);
    }
  });

  it("has food pictures on the eating days", () => {
    const pictured = taiwanDays.filter((day) => day.image);
    expect(pictured).toHaveLength(4);
  });

  it("puts Jiufen on Friday and the Palace on Saturday", () => {
    expect(taiwanDays.find((day) => day.date === "2026-12-18")?.title).toMatch(/九份/);
    expect(taiwanDays.find((day) => day.date === "2026-12-19")?.title).toMatch(/故宫/);
  });

  it("gives Tainan three nights and one last Taipei night", () => {
    expect(taiwanDays.filter((day) => day.city === "台南")).toHaveLength(3);
    expect(taiwanDays.find((day) => day.date === "2026-12-22")?.city).toBe("台南");
    expect(taiwanDays.find((day) => day.date === "2026-12-23")?.city).toBe("台北");
  });

  it("has live booking links", () => {
    expect(bookings.length).toBeGreaterThanOrEqual(3);
    for (const item of bookings) {
      expect(item.href.startsWith("https://")).toBe(true);
    }
  });

  it("covers Hague day logistics", () => {
    expect(permitHague.map((item) => item.title)).toEqual(["怎么去", "带什么", "面談说什么"]);
  });
});
