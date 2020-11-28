import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import "./append-root.scss";

export const AppendRoot = (props) => {
  const el = document.createElement("div");
  el.className = "append-root-el";
  useEffect(() => {
    const templateRoot = document.getElementsByClassName("layerWrapper")[0];
    templateRoot.appendChild(el);
    return () => templateRoot.removeChild(el);
  }, [el]);

  return ReactDOM.createPortal(props.children, el);
};
