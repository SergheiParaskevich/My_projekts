import React from 'react';

import './App.css';
import Profile from './components/Content';
import Dialogs from './components/Dialogs';
import Header from "./components/Header";
import Nav from './components/Nav';
import News from './components/Content/News';
import Music from './components/Content/Music';
import Settings from './components/Settings';
import { BrowserRouter, Route , Routes} from 'react-router-dom';


function App() {
  return (
    
    <div className="app-wrapper">
      Hello, samurai! Let's go!
      <Header />
      <Nav />
      <div className="app-wrapper-content">
      <Routes>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/messages' element={<Dialogs/>}/>
        <Route path='/news' element={<News/>}/>
        <Route path='/music' element={<Music/>}/>
        <Route path='/settings' element={<Settings/>}/>
      </Routes>
        
      </div>
      
    </div>
   
    
  );
}

export default App;
