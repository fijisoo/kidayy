import React, { useRef, useEffect, useState, useMemo } from "react";
import "./box-sticky.scss";

export const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState({});

  const handleScroll = (e) => {
    setScrollPosition(e && e.currentTarget ? e.currentTarget.scrollY : {});
  };

  useEffect(() => {
    if (window) window.addEventListener("scroll", handleScroll);
  });

  return [scrollPosition];
};

export const useBoxPosition = () => {
  const ref = useRef();
  const [boxPosition, setBoxPosition] = useState(null);

  const set = () => {
    ref.current.scrollTop = 500;
    console.log("scrolltop", ref);
    setBoxPosition(ref && ref.current ? ref.current.offsetTop : null);
  };

  useEffect(() => {
    set();
    if (window) window.addEventListener("resize", set);
    return () => {
      if (window) return window.removeEventListener("resize", set);
    };
  }, []);

  return [boxPosition, ref];
};

export const BoxSticky = () => {
  const [boxOffsetTop, ref] = useBoxPosition();
  const [currentScrollPosition] = useScrollPosition();
  const [isCentered, setIfCentered] = useState(false);

  useEffect(() => {
    if (window) {
      const windowCenter_px = window.innerHeight / 2;
      console.log("boxPosition", boxOffsetTop);
      console.log("windowCenter_px", windowCenter_px);
      console.log("currentScrollPosition", currentScrollPosition);
      const boxPositionWhenShouldBeHandled_px = boxOffsetTop - windowCenter_px + 270; // >>>>>???
      if (boxPositionWhenShouldBeHandled_px < currentScrollPosition) {
        setIfCentered(true);
      } else {
        setIfCentered(false);
      }
    }
  }, [boxOffsetTop, currentScrollPosition]);

  return (
    <div
      ref={ref}
      className="boxSticky"
      style={
        isCentered
          ? {
              position: "fixed",
              top: "50%",
            }
          : {}
      }
    >
      BOX
    </div>
  );
};
