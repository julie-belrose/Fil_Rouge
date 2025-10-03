export async function fetchData({ url, method = 'GET', body = null, headers = {} }) {
  const config = {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...headers
    }
  };

  if (body) {
    config.body = JSON.stringify(body);
  }

  const res = await fetch(url, config);
  if (!res.ok) throw new Error(`Erreur API: ${res.statusText}`);
  return await res.json();
}
