import React, { Component } from "react";
import androidDude from "./android-download.png";

class DownloadApp extends Component {
  render() {
    return (
      <div className="App-download">
        <a
          href="https://play.google.com/store/apps/details?id=com.ski.dincalc"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={androidDude} height="40vmin" alt="Android App" />
        </a>
      </div>
    );
  }
}

export default DownloadApp;
