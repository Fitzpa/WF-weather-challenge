const Button = ({ name, buttonType, onClickFunc }) => {
  if (onClickFunc) {
    return (
      <button onClick={onClickFunc} type={buttonType}>
        {name}
      </button>
    );
  }
  return <button type={buttonType}>{name}</button>;
};

export default Button;
