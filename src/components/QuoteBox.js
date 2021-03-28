import React from "react";
import quoteHelper from "../api/quoteHelper.js";
import Quote from "./Quote.js";
class QuoteBox extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      quote: "",
      author: "",
    };
  }

  componentDidMount() {
    const { quote, author } = this.state;

    if (quote && author) return;

    quoteHelper.fetchQuote().then(res => {
      this.setState({ quote: res.content, author: res.author });
    });
  }

  render() {
    const { quote, author } = this.state;
    return (
      <div
        id="quote-box"
        className="w-1/3 h-1/3 flex shadow-md rounded-md bg-white border-white border-2 p-6"
      >
        <Quote quote={quote} author={author} />
      </div>
    );
  }
}

export default QuoteBox;
