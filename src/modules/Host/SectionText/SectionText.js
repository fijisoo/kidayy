import React from "react";
import cn from "classnames";

import "./section-text.scss";

export const SectionText = ({
  header,
  boxWidth,
  text,
  position = "left",
  lineWidth,
}) => {
  return (
    <div
      className={cn("sectionText", {
        "sectionText--right": position === "right",
      })}
    >
      <h3 className="sectionText-header">{header}</h3>
      <hr
        className="sectionText-separator"
        style={{ width: `${lineWidth}px` }}
      />
      <div
        className={cn("sectionText-desc", {
          "sectionText-desc--right": position === "right",
        })}
        style={{ width: `${boxWidth}` }}
      >
        {text}
      </div>
    </div>
  );
};
