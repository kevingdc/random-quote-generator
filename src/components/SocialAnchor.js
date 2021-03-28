const SocialAnchor = props => {
  return (
    <a
      id={props.id}
      className="shadow rounded-md bg-gray-600 text-white p-2 hover:bg-black"
      href={props.href}
    >
      {props.children}
    </a>
  );
};

export default SocialAnchor;
