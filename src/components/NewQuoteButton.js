const NewQuoteButton = props => {
  return (
    <button
      id="new-quote"
      className="shadow rounded-md bg-gray-600 text-white p-2 hover:bg-black justify-self-end"
      onClick={props.onClick}
    >
      More wisdom
    </button>
  );
};

export default NewQuoteButton;
