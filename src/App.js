import React, { useState,useEffect } from 'react'
import Sitebar from './home/Navbar';
import Auth from './auth/Auth'
import WorkoutIndex from './workouts/WorkoutIndex'

function App() {
   document.querySelector('title').innerText = 'Workout Log Client'
   const [sessionToken, setSessionToken] = useState("")
   
   useEffect(() => {
     if (localStorage.getItem('token')){
       setSessionToken(localStorage.getItem('token'))
     }
   }, [])

   const updateToken = (newToken) => {
     localStorage.setItem('token',newToken)
     setSessionToken(newToken)
     console.log(sessionToken)
     
   }

   const clearToken = () => {
     localStorage.clear()
     setSessionToken("")
   }

   const protectedView = () => {
     return(sessionToken === localStorage.getItem('token') ? <WorkoutIndex token={sessionToken}/> : <Auth updateToken={updateToken}/>)
   }
  return (
    <div className="App">
      <Sitebar clearToken={clearToken} />
      {protectedView()}
    </div>
  );
}

export default App;
