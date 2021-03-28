const NewQuoteButton = props => {
  return (
    <button
      id="new-quote"
      className="shadow rounded-md bg-gray-600 text-white p-1 md:p-2 hover:bg-black text-xs md:text-base"
      onClick={props.onClick}
    >
      More wisdom
    </button>
  );
};

export default NewQuoteButton;
