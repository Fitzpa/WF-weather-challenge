import React from "react";
import { Link } from "react-router-dom";
const Button = ({ className = "", name, buttonType, url }) => {
  if (url) {
    return (
      <Link className={className} to={url}>
        {name}
      </Link>
    );
  }
  return (
    <button className={className} type={buttonType}>
      {name}
    </button>
  );
};

export default Button;
