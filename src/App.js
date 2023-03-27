import { useEffect, useState } from 'react';
import './App.css';
import SingleImage from './components/SingleImage';

const hpImages = [
  {"src": "/img/dumble.png", matched: true},
  {"src": "/img/granger.png", matched: true},
  {"src": "/img/harry.png", matched: true},
  {"src": "/img/snape.png", matched: true},
  {"src": "/img/sortinghat.png", matched: true},
  {"src": "/img/wolde.png", matched: true}
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
  useEffect(() => {
    if(firstChoice && secondChoice){
      if(firstChoice.src !== secondChoice.src){
        setImages(pastImages => {
          return pastImages.map(imageHP => {
            if (imageHP.src !== secondChoice.src){
              return{...imageHP, matched: false}
            }
            else{
              return imageHP
            }
          })
        })
        resetOption()
      }
      else{
        resetOption()
      }
    }
  }, [firstChoice, secondChoice])


  const resetOption = () => {
    setFirstChoice(null)
    setSecondChoice(null)
    setTurns(pastTurns => pastTurns + 1)
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
