import React, { useEffect, useState } from "react";
import { DndProvider, useDrag } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import "./under-construction.scss";

import Char_P from "../../img/patience/letter_P.svg";
import Char_A from "../../img/patience/letter_A.svg";
import Char_T from "../../img/patience/letter_T.svg";
import Char_I from "../../img/patience/letter_I.svg";
import Char_E from "../../img/patience/letter_E.svg";
import Char_N from "../../img/patience/letter_N.svg";
import Char_C from "../../img/patience/letter_C.svg";
import pallete from "../Logo/pallete";
import { timeout } from "../../utlis/hooks/hoverHook";
import useDeviceDetect from "../../utlis/hooks/deviceDetectionHook";

export const ItemTypes = (index) => ({
  LETTER: "letter-" + index,
});

const CharComponentWrapper = ({ index, children }) => {
  const [{ isDragging }, drag] = useDrag({
    item: { type: ItemTypes(index).LETTER },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  return (
    <div
      ref={drag}
      style={{
        opacity: isDragging ? 0 : 1,
        fontSize: 25,
        position: 'relative',
        left: "-50px",
        cursor: "move",
      }}
    >
      {children}
    </div>
  );
};

const UnderConstruction = ({ logoHovered }) => {
  const [fill, setFill] = useState("white");
  const { device } = useDeviceDetect();

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
    mobile: 0.6,
  };

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
      { x: -75, y: 30 }, // A
      { x: -55, y: -60 }, // T
      { x: 0, y: 0 }, // I
      { x: 45, y: -30 }, // E
      { x: 85, y: 90 }, // N
      { x: 115, y: -80 }, // C
      { x: 130, y: 10 }, // E
    ],
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="letters-icon__wrapper">
        {lettersList.map(
          (CharComponent, index) =>
            device && (
              <CharComponentWrapper index={index}>
                <CharComponent
                  key={index}
                  fill={fill}
                  className="letters-icon"
                  style={{
                    display: "flex",
                    transition: `fill ${timeout}ms ease-in`,
                    transform: `translate(${positions[device][index].x}px, ${positions[device][index].y}px) scale(${scales[device]})`,
                  }}
                />
              </CharComponentWrapper>
            )
        )}
      </div>
    </DndProvider>
  );
};

export default UnderConstruction;
