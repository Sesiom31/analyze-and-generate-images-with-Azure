
const endPoint = process.env.REACT_APP_COMPUTER_VISION_ENDPOINT;
const key = process.env.REACT_APP_COMPUTER_VISION_KEY_ONE;


export const analyzeImage = async (url) => {
  const response = await fetch(
    `${endPoint}//computervision/imageanalysis:analyze?features=caption,read&model-version=latest&language=en&api-version=2023-02-01-preview`,
    {
      method: 'POST',
      body: JSON.stringify({ url }),
      headers: {
        'Content-Type': 'application/json',
        'Ocp-Apim-Subscription-Key': key,
      },
    }
  );
  const data = await response.json();
  return data;
};
