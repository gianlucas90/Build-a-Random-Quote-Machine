import React, { useState } from "react";
import "./App.css";
import { useSpring, animated } from "react-spring";

function App() {
  //Arrays containing the data
  const quotes = [
    [
      "The greatest glory in living lies not in never falling, but in rising every time we fall.",
      "Nelson Mandela",
    ],
    [
      "The way to get started is to quit talking and begin doing.",
      "Walt Disney",
    ],
    [
      "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.",
      "Steve Jobs",
    ],
    [
      "If life were predictable it would cease to be life, and be without flavor.",
      "Eleanor Roosevelt",
    ],
    [
      "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
      "Oprah Winfrey",
    ],
    [
      "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
      "James Cameron",
    ],
    [
      "Life is what happens when you're busy making other plans.",
      "John Lennon",
    ],
    [
      "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
      "Mother Teresa",
    ],
    [
      "Always remember that you are absolutely unique. Just like everyone else.",
      "Margaret Mead",
    ],
    [
      "Don't judge each day by the harvest you reap but by the seeds that you plant.",
      "Robert Louis Stevenson",
    ],
  ];

  const colors = [
    "#E74C3C",
    "#9B59B6",
    "#9B59B6",
    "#9B59B6",
    "#9B59B6",
    "#2ECC71",
    "#F4D03F",
    "#AAB7B8",
    "#F0B27A",
  ];

  // Set the initial states with useState function
  const [quoteIndex, updQuoteIndex] = useState(() =>
    Math.floor(Math.random() * quotes.length)
  );
  const [colorIndex, updColorIndex] = useState(() =>
    Math.floor(Math.random() * colors.length)
  );

  const quote = quotes[quoteIndex];
  const color = colors[colorIndex];

  // function to be exhecuted when button is clicked
  function handleClick() {
    // Udpate the states in here
    updQuoteIndex(Math.floor(Math.random() * quotes.length));
    updColorIndex(Math.floor(Math.random() * colors.length));
  }

  // Style
  const stylesBg = {
    backgroundColor: color,
  };
  const stylesBox = {
    color: color,
  };

  return (
    <div className="App" style={stylesBg}>
      <div id="quote-box" style={stylesBox}>
        <div className="div" id="quote">
          <p id="text" style={stylesBox}>
            <i class="fas fa-quote-left"></i>
            {" " + quote[0]}
          </p>
          <p id="author">{quote[1]}</p>
        </div>
        <div id="btn-container">
          <a
            href="twitter.com/intent/tweet"
            id="tweet-quote"
            className="btn"
            style={stylesBg}
          >
            <i class="fab fa-twitter"></i>
          </a>
          <button
            id="new-quote"
            className="btn"
            style={stylesBg}
            onClick={handleClick}
          >
            New Quote
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
