import React, { useState } from 'react';
import { analyzeImage } from './mod/azure-image-analysis';

function App() {
  const [url, setUrl] = useState('');
  const [description, setDescription] = useState('');
  const [isAnalisys, setIsAnalisys] = useState(false);

  // generationImage()

  

  const displayResults = async (url) => {
    try {
      const result = await analyzeImage(url);
      const text = result.captionResult.text;
      setDescription(text);
    } catch (err) {
      console.log(err);
    }
  };

  if (isAnalisys) {
    displayResults(url);
  }


  
  return (
    <>
      <section>
        <h1>App para probar la IA Generativa de Azure</h1>
        <div>
          <h3>Ingrese el url o la descripción</h3>
          <input
            value={url}
            type="text"
            placeholder="Ingrese el url para analizar o la descripcion de la imagen"
            onChange={(e) => {
              setUrl(e.target.value);
              setIsAnalisys(false);
              setDescription('');
            }}
          />
        </div>
        <div>
          <button
            onClick={() => {
              displayResults(url);
              setIsAnalisys(true);
            }}
            disabled={url === ''}
          >
            Analizar
          </button>
          <button
            onClick={() => console.log('generar')}>Generar</button>
        </div>
      </section>
      <hr />
      <section>
        <h2>Computer Vision Analysis</h2>

        <div style={{ display: 'flex' }}>
          <img src={url ?? ''} alt="" />
          <p>{description}</p>
        </div>
      </section>
    </>
  );
}

export default App;
