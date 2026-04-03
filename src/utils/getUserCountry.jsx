export async function getUserCountry() {
  const baseUrl = process.env.NEXT_PUBLIC_TESTING_ON === "true"
    ? "https://test-new.teamlab.info"
    : "https://www.onlyoffice.com";

  try {
    const res = await fetch(`${baseUrl}/api/ip-geolocation`);
    if (!res.ok) return null;
    const data = await res.json();
    return data.country ?? null;
  } catch {
    return null;
  }
}