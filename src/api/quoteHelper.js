const url = "https://api.quotable.io";

module.exports.fetchQuote = () => {
  return fetch(`${url}/random`).then(res => res.json());
};
