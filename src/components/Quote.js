const Quote = props => {
  return (
    <div className="flex flex-col space-y-4">
      <div className="text-3xl text-center block m">{props.quote}</div>
      <div className="text-right text-opacity-30">{props.author}</div>
    </div>
  );
};

export default Quote;
