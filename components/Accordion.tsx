import { useEffect, useRef, useState } from "react";
import { animated, useSpring } from "react-spring";
import styled from "styled-components";

function Accordion({ children }: { children: React.ReactNode }) {
  const [opened, setOpened] = useState(false);
  const myRef = useRef(null);
  const height = myRef?.current?.clientHeight;

  const wrapper = useSpring({
    position: "relative",
    overflow: "hidden",
    height: opened ? `${height}px` : `40px`,
    config: { tension: 100, friction: 15 },
  });

  //   const overlay = useSpring({
  //     opacity: opened ? "0" : "1",
  //   });

  //   const Overlay = styled.div`
  //     position: absolute;
  //     height: 100%;
  //     width: 100%;
  //     background: linear-gradient(0deg, ${({ theme }) => theme.opacity.normal}, transparent);
  // `;

  const chevron = useSpring({
    margin: "20px",
    transform: opened ? "rotate(180deg)" : "rotate(0deg)",
    config: { tension: 300, friction: 10 },
  });

  const Click = styled.div`
    cursor: pointer;
    color: ${({ theme }) => theme.text};
    transition: color 350ms ease 0s;
    display: flex;
    justify-content: center;

    &:hover {
      color: ${({ theme }) => theme.gradient.red};
    }
  `;

  return (
    <div>
      <animated.div style={wrapper}>
        {/* <Overlay as={animated.div} style={overlay}></Overlay> */}
        <div ref={myRef}>{children}</div>
      </animated.div>
      <Click onClick={() => setOpened(!opened)}>
        <animated.span style={chevron} className="material-icons">
          expand_more
        </animated.span>
      </Click>
    </div>
  );
}

export default Accordion;
