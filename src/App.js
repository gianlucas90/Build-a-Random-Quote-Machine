import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: "",
      author: "",
      randomIndex: Math.floor(Math.random() * 10),
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.setState({
      randomIndex: Math.floor(Math.random() * 10)
    })
  }

  render() {
    const quotes = [
      ["The greatest glory in living lies not in never falling, but in rising every time we fall.", "Nelson Mandela"],
      ["The way to get started is to quit talking and begin doing.", "Walt Disney"],
      ["Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.", "Steve Jobs"],
      ["If life were predictable it would cease to be life, and be without flavor.", "Eleanor Roosevelt"],
      ["If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.", "Oprah Winfrey"],
      ["If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.", "James Cameron"],
      ["Life is what happens when you're busy making other plans.", "John Lennon"],
      ["Spread love everywhere you go. Let no one ever come to you without leaving happier.", "Mother Teresa"],
      ["Always remember that you are absolutely unique. Just like everyone else.", "Margaret Mead"],
      ["Don't judge each day by the harvest you reap but by the seeds that you plant.", "Robert Louis Stevenson"],
    ];

    const quote = quotes[this.state.randomIndex];

    return (
      <div className="App">
        <div id="quote-box">
          <p id="text">{quote[0]}</p>
          <p id="author">{quote[1]}</p>
          <div id="btn-container">
            <a href="twitter.com/intent/tweet" id="tweet-quote" className="btn">
              Twitter
            </a>
            <button id="new-quote" className="btn" onClick={this.handleClick}>
              New Quote
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
