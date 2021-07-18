import { useEffect, useState } from "react";

export function useResizeObserver(ref) {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  useEffect(() => {
    if(ref.current){
        const observeTarget = ref.current;
        const resizeObserver = new ResizeObserver((entries) => {
          setWidth(entries[0].contentRect.width);
          setHeight(entries[0].contentRect.height);
          console.log('entries[0].contentRect.height', entries[0].contentRect.height, entries[0].contentRect)
        });

        resizeObserver.observe(observeTarget);
      }
  }, [ref]);


  return [width, height];
}
