import React from "react";
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import Game from "./Game";
import Home from "./components/Home";



const router = createBrowserRouter([
  {
    path:'/',
    element:(<Home/>)
  },
  {
    path:'/game',
    element:(<Game/>)
  },
 


]);


const App = ()=>{


  return (

    <>
    
      <RouterProvider router={router} />
 
    </>
  )
}

export default App