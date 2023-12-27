import { animated } from "react-spring";
import useBoop from "../app/hooks/useBoop";

export default function Boop({ children, ...boopConfig }) {
  const [style, trigger] = useBoop(boopConfig);
  return (
    // @ts-ignore
    <animated.span onMouseEnter={trigger} style={style}>
      {children}
    </animated.span>
  );
}
