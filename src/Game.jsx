// App.jsx
import React, { useState, useEffect } from 'react';
import Card from './components/Card';
import image from '../src/assets/rock.png';
import phone from '../src/assets/paper.png';
import icon from '../src/assets/scissors.png';
import './components/style.css';
import Winner from './components/Winner';
import Failure from './components/Failure';
// import Home from './components/Home';

function Game() {



  const [playerHand, setPlayerHand] = useState(0);
  const [computerHand, setComputerHand] = useState(0);
  const [timer, setTimer] = useState(3);
  const [runTimer, setRunTimer] = useState(false);
  const [result, setResult] = useState({ winner: '', message: '' });
  const [score, setScore] = useState({ player: 0, computer: 0 });
  const [resultmessage, setResultMessage] = useState("")
  const [viewTotal, setViewTotal] = useState(false)



  const options = [
    { name: 'rock', icon: image },
    { name: 'paper', icon: phone },
    { name: 'scissors', icon: icon },
  ];

  useEffect(() => {
    if (runTimer && timer > 0) {
      const timeoutId = setTimeout(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);

      return () => clearTimeout(timeoutId);
    } else if (runTimer && timer < 1) {
      setRunTimer(false);
      setTimer(3);
      play();
    //   checkResult()
    }
  }, [runTimer, timer]);

  function generateComputerHand() {
    const random = Math.floor(Math.random() * 3);
    setComputerHand(random);
  }

  function start() {
    if(viewTotal == "Play Again"){
      window.location.reload()
    }else{
      setResult({ winner: '', message: '' });
      setRunTimer(true);
      generateComputerHand();
    }
  
  }

  function play() {
    const playerChoice = options[playerHand].name;
    const computerChoice = options[computerHand].name;

    if (playerChoice === computerChoice) {
      setResult({ winner: 'No Body', message: 'We have a Tie' });
    } else if (
      (playerChoice === 'rock' && computerChoice === 'scissors') ||
      (playerChoice === 'paper' && computerChoice === 'rock') ||
      (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
      setResult({ winner: 'player', message: `${playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1)} beats ${computerChoice}` });
      setScore((prevScore) => ({ ...prevScore, player: prevScore.player + 1 }));
    } else {
      setResult({ winner: 'computer', message: `${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)} beats ${playerChoice}` });
      setScore((prevScore) => ({ ...prevScore, computer: prevScore.computer + 1 }));
    }
  }

  useEffect(()=>{
    if(timer < 1 && score.player === 3){
        alert("you win")
        setResultMessage("You Win!!!")
    }else if (timer < 1 && score.computer === 3){
        alert("you lose")
        setResultMessage("You Lose!!!")
        
    } 
  },[score])

  return (
    <div className='app'>
        <Card
          playerHand={playerHand}
          setPlayerHand={setPlayerHand}
          computerHand={computerHand}
          timer={timer}
          runTimer={runTimer}
          result={result}
          score={score}
          start={start}
          options={options} 
          setViewTotal={setViewTotal} 
        />
        {/* <Winner/>
        <Failure/> */}
    </div>
  );
}

export default Game;
