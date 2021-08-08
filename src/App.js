
import React from 'react';
import ReactDOM from 'react-dom';
import logo from './image-profile.png';
import './App.css';
import Profile from './profile/Profile';


function App() {
    
  function handleName (name){
    return (alert(name)
    );
}
  return (

  
    <div>
    <Profile fullName="john doe" bio="test" profession="dsds" FnHandleName={handleName}>
    <img src={logo} alt="logo" />
    </ Profile>
    </div>
    
  );
}

export default App;
