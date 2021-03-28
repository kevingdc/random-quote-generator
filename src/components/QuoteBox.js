import React from "react";
import quoteHelper from "../api/quoteHelper.js";
import Quote from "./Quote.js";
import NewQuoteButton from "./NewQuoteButton.js";
import SocialAnchor from "./SocialAnchor.js";
import LoadingSpinner from "./LoadingSpinner.js";

import twitterLogo from "../assets/twitter-logo.svg";
class QuoteBox extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      quote: "",
      author: "",
      fetching: false,
    };

    this.fetchQuote = this.fetchQuote.bind(this);
  }

  componentDidMount() {
    const { quote, author } = this.state;

    if (quote && author) return;

    this.fetchQuote();
  }

  fetchQuote() {
    this.setState({ fetching: true });
    quoteHelper.fetchQuote().then(res => {
      this.setState({
        quote: res.content,
        author: res.author,
        fetching: false,
      });
    });
  }

  render() {
    const { quote, author, fetching } = this.state;
    const tweetURL = `https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${encodeURIComponent(
      quote
    )}${encodeURIComponent(author)}`;
    return (
      <div
        id="quote-box"
        className="w-1/2 flex-shrink flex flex-col items-center space-y-10 shadow-md rounded-md bg-white border-white border-2 p-6"
      >
        {fetching ? (
          <LoadingSpinner />
        ) : (
          <Quote quote={quote} author={author} />
        )}
        <div className="w-full flex justify-between">
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
