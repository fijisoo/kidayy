import React, { useState } from "react";
import cn from "classnames";
import "./tag-circle.scss";

export const TagCircle = ({ color, tag, handleClick, handleHover, handleLeave }) => {
  const [toggled, setToggle] = useState(false);

  const handleButtonClick = (e) => {
    setToggle((prevState) => !prevState);
    handleClick(e);
  };

  const handleButtonHover = (e) => {
    handleHover(tag, e);
  };

  const handleButtonleave = (e) => {
    handleLeave(e);
  }

  return (
    <button
      className={cn("tag-circle", { "tag-circle--active": toggled })}
      onClick={(e) => handleButtonClick(e)}
      onMouseOver={(e) => handleButtonHover(e)}
      onMouseLeave={(e) => handleButtonleave(e)}
      style={{ background: color }}
    />
  );
};
