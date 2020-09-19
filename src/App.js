import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div id="quote-box">
        <h4 id="text">This is the quote text</h4>
        <p id="author">Author</p>
        <a href="twitter.com/intent/tweet" id="tweet-quote">
          Twitter
        </a>
        <button id="new-quote">New Quote</button>
      </div>
    </div>
  );
}

export default App;
