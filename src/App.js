import React from "react";
import "./App.css";
import Form from "./components/Form/Form";
import Logo from "./components/Logo/Logo";
import DownloadApp from "./components/AppDownloadButton/DownloadApp";
import Disclaimer from "./components/Disclaimer/Disclaimer";
import { useState, useEffect } from "react";
import Adsense from "./components/Adsense/Adsense";

//TODO:
/*
  replace class components with functional components in like form.js
  FLEXBOX FROGGY
  redesign using flexbox
  - hint: flexboxes can be nested and are very easy to debug with dev tools
*/
function App() {
  //Displays Disclaimer after 3 second delay
  const [buttonDisclaimer, setButtonDisclaimer] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setButtonDisclaimer(true);
    }, 1500);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <label>Ski Din Calculator</label>
        <Logo />
      </header>
      <Disclaimer
        trigger={buttonDisclaimer}
        setTrigger={setButtonDisclaimer}
      ></Disclaimer>
      <Form />
      <DownloadApp />
      <Adsense />
    </div>
  );
}

export default App;
