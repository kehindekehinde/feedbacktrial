// import React from "react";
import PropTypes from "prop-types";

const Header = ({ text, bgColor, textColor }) => {
  const headerStyles = { 
    backgroundColor: bgColor, 
    color: textColor };

  return (
    <header style={headerStyles}>
      <div className="container">
        <p>{text}</p>
      </div>
    </header>
  );
};

Header.defaultProps = {
  text: "FEEDBACK UI",
  bgColor: "rgba(0,0,0,0.4)",
  textColor: "red",
};

Header.propTypes ={
  text: PropTypes.string,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
}

export default Header;
