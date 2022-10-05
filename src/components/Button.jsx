import { Link } from "react-router-dom";
const Button = ({ name, buttonType, url }) => {
  if (url) {
    return <Link to={url}>{name}</Link>;
  }
  return <button type={buttonType}>{name}</button>;
};

export default Button;
