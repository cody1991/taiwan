import { describe, expect, it } from "vitest";
import { mapStops, taiwanDays } from "../data";
import { googleDirUrl, googlePlaceUrl } from "./maps";

describe("maps", () => {
  it("builds a Google Maps place link", () => {
    expect(googlePlaceUrl("台北101")).toBe(
      "https://www.google.com/maps/search/?api=1&query=%E5%8F%B0%E5%8C%97101",
    );
  });

  it("builds a Google Maps route with waypoints", () => {
    const url = googleDirUrl(["桃园机场", "台北", "台南", "桃园机场"]);
    expect(url).toContain("https://www.google.com/maps/dir/?");
    expect(url).toContain("waypoints=");
    expect(url).toContain("travelmode=transit");
  });

  it("keeps map stops on the island", () => {
    for (const stop of mapStops) {
      expect(stop.lat).toBeGreaterThan(21.8);
      expect(stop.lat).toBeLessThan(25.4);
      expect(stop.lng).toBeGreaterThan(120);
      expect(stop.lng).toBeLessThan(122.1);
    }
    expect(taiwanDays.every((day) => day.mapsQuery.length > 0)).toBe(true);
  });
});
