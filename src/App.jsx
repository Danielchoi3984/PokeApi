import { useState } from 'react'
import './App.css'
import LoginSignup from './LoginSignup.jsx';
import HomePage from './HomePage.jsx'
// import Container from "react-bootstrap/Container";
// import Navbar from 'react-bootstrap/Navbar';
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [loginMessage, setLoginMessage] = useState('')
  const handlelogin = async (email, password) => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users/');
      const users = await response.json();
      const usuario = users.find((user) => user.email === email && user.username === password);
      if (usuario != undefined){
        setIsLoggedIn(true);
          setLoginMessage('Logeasteee')
      }
      }
        catch(error){
          console.error(error)
        }
     
  }
  return (
    <div className='app'>
          {isLoggedIn ? (
            <div>
            <HomePage/>
        
            </div>
          ):
            <LoginSignup onLogin={handlelogin}messaage={loginMessage}/>
          }
      </div>
  );
}

export default App;
