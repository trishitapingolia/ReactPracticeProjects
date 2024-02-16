import { useState } from 'react';
import DiceGame from './components/DiceGame';
import StartGame from './components/StartGame';

function App() {

  const [isGameStarted, setisGameStarted] = useState(false);

  const toggleGame =() => {
    setisGameStarted(!isGameStarted);
  }
  return (
    <div className="App">
      {isGameStarted ? <StartGame /> : <DiceGame toggle={toggleGame} />}
    </div>
  );
}

export default App;
