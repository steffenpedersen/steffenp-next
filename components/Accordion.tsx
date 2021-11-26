import { useEffect, useRef, useState } from "react";
import { animated, useSpring } from "react-spring";

function Accordion({ children }: { children: React.ReactNode }) {
  const [opened, setOpened] = useState(false);
  const myRef = useRef(null);
  const height = myRef?.current?.clientHeight;

  const style = useSpring({
    overflow: "hidden",
    height: opened ? `${height}px` : `30px`,
    config: { tension: 100, friction: 15 },
  });

  return (
    <div>
      <div onClick={() => setOpened(!opened)}>
        <span className="material-icons">expand_more</span>
      </div>
      <animated.div style={style}>
        <div ref={myRef}>{children}</div>
      </animated.div>
    </div>
  );
}

export default Accordion;
