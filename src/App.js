import React from 'react';
import './App.css';
import DownloadApp from './components/DownloadApp'
import Form from './components/Form'
import Logo from './components/Logo'


//TODO: 
/*
  replace class components with functional components in like form.js
  FLEXBOX FROGGY
  redesign using flexbox
  - hint: flexboxes can be nested and are very easy to debug with dev tools
*/
function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <label>Ski Din Calculator</label>
        <Logo />
      </header>
      <Form />
      <DownloadApp />
    </div>
  );
}

export default App;
