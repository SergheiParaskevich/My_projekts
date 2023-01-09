import React from 'react';
import './App.css';
import Profile from './components/Content';
import Dialogs from './components/Dialogs';
import Header from "./components/Header";
import Nav from './components/Nav';


function App() {
  return (
    <div className="app-wrapper">
      Hello, samurai! Let's go!
      <Header />
      <Nav />
      <div className="app-wrapper-content">
        <Dialogs />
        {/* <Profile/> */}
      </div>
      
    </div>
  );
}

export default App;
