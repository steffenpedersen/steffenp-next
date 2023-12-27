import React, { useRef } from "react";
import { animated, useSpring } from "react-spring";
import useOnScreen from "../app/hooks/useOnScreen";

function Reveal({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(ref);
  const style = useSpring({
    transform: isVisible ? `translate(10px, 0px)` : `translate(0px, 0px)`,
    config: {
      tension: 300,
      friction: 10,
    },
    delay: 200,
  });

  return (
    <animated.div ref={ref} style={style}>
      {isVisible && children}
    </animated.div>
  );
}

export default Reveal;
