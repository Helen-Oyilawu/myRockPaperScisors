import { useState} from 'react'
import "./home.css"
import { useNavigate } from 'react-router-dom'
import logo from '../assets/Logo.png'


const Home = () => {
 
  const nav = useNavigate()

  return (
    <div className='Home'>
      <img src={logo}alt="" className='logo' />
       <button onClick={()=> nav('/game')}>play</button>
         
    </div>
  )
}

export default Home