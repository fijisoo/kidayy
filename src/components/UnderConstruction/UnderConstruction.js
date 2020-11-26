import React, { useEffect, useState } from "react";
import { isMobile, isTablet } from "react-device-detect";
import "./under-construction.scss";

import Char_P from "../../img/patience/letter_P.svg";
import Char_A from "../../img/patience/letter_A.svg";
import Char_T from "../../img/patience/letter_T.svg";
import Char_I from "../../img/patience/letter_I.svg";
import Char_E from "../../img/patience/letter_E.svg";
import Char_N from "../../img/patience/letter_N.svg";
import Char_C from "../../img/patience/letter_C.svg";
import pallete from "../Logo/pallete";
import { timeout } from "../Logo/helpers";

const UnderConstruction = ({ logoHovered }) => {
  const [fill, setFill] = useState("white");

  useEffect(() => {
    let counter = 0;
    const intervalRef = logoHovered
      ? setInterval(() => {
          if (counter >= pallete.length) {
            counter = 0;
          }
          setFill(pallete[counter]);
          counter = counter + 1;
        }, timeout)
      : null;

    return () => {
      clearInterval(intervalRef);
      setFill("white");
    };
  }, [logoHovered]);

  const lettersList = [
    Char_P,
    Char_A,
    Char_T,
    Char_I,
    Char_E,
    Char_N,
    Char_C,
    Char_E,
  ];

  const scales = {
    desktop: 1,
    tablet: 1,
    mobile: 0.6
  }

  const positions = {
    desktop: [
      { x: -475, y: -85 },
      { x: -305, y: 75 },
      { x: -160, y: -125 },
      { x: -40, y: 5 },
      { x: 100, y: -55 },
      { x: 260, y: -105 },
      { x: 380, y: -125 },
      { x: 500, y: -35 },
    ],
    tablet: [
      { x: -325, y: -85 },
      { x: -255, y: 75 },
      { x: -155, y: -125 },
      { x: 130, y: 5 },
      { x: 50, y: 5 },
      { x: -80, y: 5 },
      { x: 160, y: -55 },
      { x: 335, y: -105 },
    ],
    mobile: [
      { x: -100, y: -140 }, // P
      { x: -75, y: 30 },// A
      { x: -55, y: -60 },// T
      { x: 0, y: 0 },// I
      { x: 45, y: -30 },// E
      { x: 85, y: 90 },// N
      { x: 115, y: -80 },// C
      { x: 130, y: 10 },// E
    ],
  };

  const handlePosition = (data) => {
    if (isMobile) {
      return data.mobile;
    }
    if (isTablet) {
      return data.tablet;
    }
    return data.desktop;
  };

  return (
    <div className="letters-icon__wrapper">
      {lettersList.map((CharComponent, index) => (
        <CharComponent
          key={index}
          className="letters-icon"
          fill={fill}
          style={{
            display: "flex",
            transition: `fill ${timeout}ms ease-in`,
            transform: `translate(${handlePosition(positions)[index].x}px, ${
              handlePosition(positions)[index].y
            }px) scale(${handlePosition(scales)})`,
          }}
        />
      ))}
    </div>
  );
};

export default UnderConstruction;
