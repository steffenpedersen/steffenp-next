import React from "react";
import { animated } from "react-spring";
import useBoop from "../app/hooks/use-boop";

export default function Boop({ children, ...boopConfig }) {
  const [style, trigger] = useBoop(boopConfig);
  return (
    // @ts-ignore
    <animated.span onMouseEnter={trigger} style={style}>
      {children}
    </animated.span>
  );
}
