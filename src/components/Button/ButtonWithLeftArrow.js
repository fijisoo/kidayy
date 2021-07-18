import React from "react";
import { Button } from "./index";
import Doot from "../../img/doot.svg";
import * as cn from "classnames";
import "./buttonWithLeftArrow.scss";

const LeftArrow = ({ handleLeftArrowClick }) => {
  return (
    <div className="buttonLeftArrow" onClick={handleLeftArrowClick}>
      <Doot />
    </div>
  );
};

export const ButtonWithLeftArrow = ({
  handleLeftArrowClick,
  className,
  ...rest
}) => {
  return (
    <div className={cn("buttonWithLeftArrow", className)}>
      <LeftArrow handleLeftArrowClick={handleLeftArrowClick} />
      <Button {...rest} />
    </div>
  );
};
