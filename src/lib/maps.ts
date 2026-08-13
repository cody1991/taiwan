export function googlePlaceUrl(query: string): string {
  const params = new URLSearchParams({ api: "1", query });
  return `https://www.google.com/maps/search/?${params.toString()}`;
}

export function googleDirUrl(places: string[], travelmode = "transit"): string {
  if (places.length < 2) {
    throw new Error("need origin and destination");
  }
  const origin = places[0];
  const destination = places[places.length - 1];
  const waypoints = places.slice(1, -1);
  const params = new URLSearchParams({
    api: "1",
    origin: origin ?? "",
    destination: destination ?? "",
    travelmode,
  });
  if (waypoints.length > 0) {
    params.set("waypoints", waypoints.join("|"));
  }
  return `https://www.google.com/maps/dir/?${params.toString()}`;
}
