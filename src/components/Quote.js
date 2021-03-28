const Quote = props => {
  return (
    <div className="flex flex-col space-y-4">
      <div id="text" className="text-lg md:text-3xl text-center block m">
        {props.quote}
      </div>
      <div
        id="author"
        className="text-right text-opacity-30 text-xs md:text-base"
      >
        {props.author}
      </div>
    </div>
  );
};

export default Quote;
