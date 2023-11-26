
export async function generationImage(prompt) {
  const response = await fetch('https://api.openai.com/v1/images', {
    method: 'POST',
    body: JSON.stringify({
      "prompt": "Un perro programando",
      "n": 1,
      "size":"1024x1024"
    }),
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`
    }
  })

  console.log(response)
}