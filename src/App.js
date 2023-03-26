import { useState } from 'react';
import './App.css';

const hpImages = [
  {"src": "/public/dumble.png"},
  {"src": "/public/granger.png"},
  {"src": "/public/harry.png"},
  {"src": "/public/snape.png"},
  {"src": "/public/sortings.png"},
  {"src": "/public/wolde.png"}
]

function App() {
  const [images, setImages] = useState([])
  const [turns, setTurns] = useState(0)
  const shuffleImages = () => {
    const shuffledImages = [...hpImages,...hpImages]
      .sort(() => Math.random() - 0.5)
      .map((image) => ({...image, id: Math.random()}))
    setImages(shuffledImages)
    setTurns(0)
  }
  return (
    <div className="App">
      <h1>Harry Potter Memory Game</h1>
      <button onClick={shuffleImages}>New Game</button>
      <div className="image-grid">
        {images.map(image => (
          <div className="image" key={image.id}>
            <div>
              <img className="front"src={image.src} alt="image front" />
              <img className="back"src="/public/front.png" alt="image back" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
