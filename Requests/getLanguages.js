export async function getLanguages(target) {
  const baseUrl =
    "https://translation.googleapis.com/language/translate/v2/languages";

  const API_KEY = "AIzaSyCkN4oK4kgk-sxQVpmQ0xzfcEm4MMc9zxg";
  const url = new URL(baseUrl);
  const params = {
    target,
    key: API_KEY,
  };

  Object.entries(params).forEach(([key, value]) =>
    url.searchParams.append(key, value)
  );

  const res = await fetch(url.href, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const result = await res.json();
  console.log(result.data.languages)
  return result.data.languages;
}
