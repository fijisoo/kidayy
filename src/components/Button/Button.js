import React from "react";
import ArrowLongSVG from "../../img/arrow-long.svg";
import ArrowSVG from "../../img/arrow.svg";
import { navigate } from "gatsby";
import * as cn from "classnames";

import "./button.scss";

// IF YOU USE LINK PREFERED IS LINK ELEMENT NOT BUTTON -> SEO REASON
export const Button = ({ className, text, withArrow = true, link }) => {
  const handleClick = () => {
    if (link) navigate(link);
  };

  return (
    <button className={cn("buttonWrapper", className)} onClick={handleClick}>
      <span className="buttonWrapper-card">
        <span className="buttonWrapper-content buttonWrapper-content--front">
          {withArrow && <ArrowLongSVG />}
        </span>
        <span className="buttonWrapper-content buttonWrapper-content--back">
          <p className="buttonWrapper-text">{text}</p>
          {withArrow && <ArrowSVG />}
        </span>
        <span className="buttonWrapper-content-placehoder">
          <p className="buttonWrapper-text">{text}</p>
          {withArrow && <ArrowSVG />}
        </span>
      </span>
    </button>
  );
};
