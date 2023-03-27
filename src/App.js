import { useState } from 'react';
import './App.css';
import SingleImage from './components/SingleImage';

const hpImages = [
  {"src": "/img/dumble.png"},
  {"src": "/img/granger.png"},
  {"src": "/img/harry.png"},
  {"src": "/img/snape.png"},
  {"src": "/img/sortinghat.png"},
  {"src": "/img/wolde.png"}
]

function App() {
  const [imagesHP, setImages] = useState([])
  const [turns, setTurns] = useState(0)
  const [firstChoice, setFirstChoice] = useState(null)
  const [secondChoice, setSecondChoice] = useState(null)

  const shuffleImages = () => {
    const shuffledImages = [...hpImages, ...hpImages]
      .sort(() => Math.random() - 0.5)
      .map((imageHP) => ({...imageHP, id: Math.random()}))
    setImages(shuffledImages)
    setTurns(0)
  }
  const choiceHandle = (imageHP) => {
    firstChoice ? setSecondChoice(imageHP) : setFirstChoice(imageHP)
  }
  return (
    <div className="App">
      <h1>Harry Potter Memory Game</h1>
      <button onClick={shuffleImages}>New Game</button>
      
      <div className="image-grid">
        {imagesHP.map(imageHP => (
          <SingleImage key={imageHP.id} imageHP={imageHP} choiceHandle={choiceHandle}/>
        ))}
      </div>
    </div>
  );
}
export default App;
