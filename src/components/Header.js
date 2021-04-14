import React from "react";
import Button from "./Button";
import { useLocation } from "react-router-dom";

const Header = ({ title, onAdd, showAdd }) => {
  const location = useLocation();
  return (
    <header className="header">
      <h1>{title}</h1>
      {location.pathname === "/" && (
        <Button
          color={showAdd ? "red" : "green"}
          text={showAdd ? "取消" : "新建"}
          onClick={onAdd}
        />
      )}
    </header>
  );
};

const headingStyle = {
  color: "red",
  backgroundColor: "black",
};

Header.defaultProps = {
  title: "Todo",
};

export default Header;
