// Card.jsx
import React, { useState, useEffect } from 'react';
import './style.css';

function Card({ playerHand, setPlayerHand, computerHand, timer, runTimer, result, score, start, options, setViewTotal }) {
  function selectOption(handIndex) {
    setPlayerHand(handIndex);
  }

  useEffect(()=>{
    if(score.computer == 3 && score.player != 3){
      setViewTotal("Play Again")
    }else if(score.player == 3 && score.computer != 3){
      setViewTotal("Play Again")
    }
  },[score])

  return (
    <div className='Container'>
      <div className="title">
        <h1>ROCK, PAPER, SCISSORS</h1>
        <p>react game</p>
      </div>
      <div className="scoreCtn">
        <div className="score">
          <h3>players</h3>
          <h2>score: {score.player}</h2>
        </div>
        <div className="score">
          <h3>computer</h3>
          <h2>score: {score.computer}</h2>
        </div>
      </div>
      <div className="results">
        <div className="playerhand">
          {runTimer && <img src={options[0].icon} alt="player hand" className='image playershake' />}
          {result?.winner && (
            <>
              <img src={options[playerHand].icon} alt="player hand" className='image' />
              <div>{options[playerHand].name}</div>
            </>
          )}
        </div>
        <div className="midcol">
          {runTimer && <p className='timer'>{timer}</p>}
          {result?.winner && (
            <div className='texthold'>
              <span className='resultwinner'>{score.player == 3 && score.computer != 3 ? "You Win" : score.computer == 3 && score.player != 3 ? "You Lose" : null}</span>
              <span className='resultwinner'>Winner: {result.winner}</span>
              <p className='resultmessage'>{result.message}</p>
            </div>
          )}
        </div>
        <div className="computerhand">
          {runTimer && <img src={options[0].icon} alt="player hand" className='image computershake' />}
          {result?.winner && (
            <>
              <img src={options[computerHand].icon} alt="player hand" className='image' />
              <div>{options[computerHand].name}</div>
            </>
          )}
        </div>
      </div>
      <div className="choicectn">
        <button className={`choicebtn ${playerHand === 0 ? 'activechoice' : ''}`} onClick={() => selectOption(0)}>
          <img src={options[0].icon} alt="rock" className='btn' />
        </button>
        <button className={`choicebtn ${playerHand === 1 ? 'activechoice' : ''}`} onClick={() => selectOption(1)}>
          <img src={options[1].icon} alt="paper" className='btn' />
        </button>
        <button className={`choicebtn ${playerHand === 2 ? 'activechoice' : ''}`} onClick={() => selectOption(2)}>
          <img src={options[2].icon} alt="scissors" className='btn' />
        </button>
      </div>
      <button className='play' onClick={start}>{score.player == 3 && score.computer != 3 ? "Play Again" : score.computer == 3 && score.player != 3 ? "Play Again" : "play"}</button>
    </div>
  );
}

export default Card;
