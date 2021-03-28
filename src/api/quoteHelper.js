const url = "http://api.quotable.io";

module.exports.fetchQuote = () => {
  return fetch(`${url}/random`).then(res => res.json());
};
