import React, { useState } from "react";
import TrunCatSVG from "../../img/truncat.svg";
import FiguresSVG from "../../img/figures.svg";
import { SectionText } from "./SectionText/SectionText";
import cn from "classnames";

import "./host.scss";
import { BoxSticky } from "./BoxSticky/BoxSticky";

export const Host = () => {
  const [getMouseOver, setMouseOver] = useState(-1);

  const handleMouseEnter = (index) => () => {
      console.log('eeee', index);
      setMouseOver(index)
  };

  return (
    <div className="host-wrapper">
      <secion className="host-section">
        <div className="truncat-wrapper">
          {/*{[0.5, 0.4, 0.3, 0.2, 0.1].map((el) => {*/}
          {[0.3, 0.2, 0.1, 0.1, 0.05].map((el, index) => {
            return (
              <TrunCatSVG
                key={`el-${el}-${index}`}
                className={cn("svg-test", {"svg-test--hovered": index === getMouseOver})}
                onMouseOver={handleMouseEnter(index)}
                onMouseLeave={() => setMouseOver(-1)}
                style={{ transform: `scale(${el})`}}
              />
            );
          })}
        </div>
        <SectionText
          boxWidth={"433px"}
          lineWidth={74}
          text={
            "THIS IS ZERO profit App. There are still a lot of {ART} WAITING TO BE DEVELOPED. IN CASE OF ANY COOP - RELEASE [SCROLL DOWN]"
          }
          header={"DEV / ART / WORK"}
        />
      </secion>
      <secion className="host-section">
        <SectionText
          lineWidth={120}
          boxWidth={"480px"}
          position={"right"}
          text={
            "JUST A REMINDER THAT LIFE IS SOMETHING MORE THAN JUST A REALITY. THERE ARE SOME VALUES WHICH LET BELIEVE ON BEAUTY, SACRIFICE AND GOODNESS. OUR DESTINY."
          }
          header={"FAITH / PHILOSOPHY / CONSIOUSSNES"}
        />
        <div className="figures-wrapper">
          <FiguresSVG className="svg-test" />
        </div>
      </secion>
      <secion className="host-section host-section-empty">
        <SectionText
          lineWidth={27}
          boxWidth={"433px"}
          position={"left"}
          text={"CREATIVITY, DARK CHOCOLATE, RADIOHEAD, SUBURBS, APRIL"}
          header={"ME"}
        />
        <BoxSticky />
      </secion>
    </div>
  );
};
