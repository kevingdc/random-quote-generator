import React from "react";
import quoteHelper from "../api/quoteHelper.js";
import Quote from "./Quote.js";
import NewQuoteButton from "./NewQuoteButton.js";
import SocialAnchor from "./SocialAnchor.js";

import twitterLogo from "../assets/twitter-logo.svg";
class QuoteBox extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      quote: "",
      author: "",
    };

    this.fetchQuote = this.fetchQuote.bind(this);
  }

  componentDidMount() {
    const { quote, author } = this.state;

    if (quote && author) return;

    this.fetchQuote();
  }

  fetchQuote() {
    quoteHelper.fetchQuote().then(res => {
      this.setState({ quote: res.content, author: res.author });
    });
  }

  render() {
    const { quote, author } = this.state;
    const tweetURL = `https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${encodeURIComponent(
      quote
    )}${encodeURIComponent(author)}`;
    return (
      <div
        id="quote-box"
        className="w-1/2 flex-shrink flex flex-col space-y-10 shadow-md rounded-md bg-white border-white border-2 p-6"
      >
        <Quote quote={quote} author={author} />
        <div className="flex justify-between">
          <SocialAnchor id="tweet-quote" href={tweetURL}>
            <img src={twitterLogo} alt="Twitter" className="w-5 h-5" />
          </SocialAnchor>
          <NewQuoteButton onClick={this.fetchQuote} />
        </div>
      </div>
    );
  }
}

export default QuoteBox;
