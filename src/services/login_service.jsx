export async function getLogin (datos) {
  const response = await fetch(
    `${import.meta.env.VITE_API_URL_LOCAL}
    web-atkl/src/components/login`,
    {
      method: 'POST',
      body: JSON.stringify(datos),
      headers: {
        'Content-Type': 'application/json'
      }
    }
  )

  var data = await response.json()
  return [response.statu, data]
}
