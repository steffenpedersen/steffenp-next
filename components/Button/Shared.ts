import { animated } from "react-spring"
import styled from "styled-components"

export const Background = styled(animated.span)`
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;
  inset: 0px;
  border-radius: 100px;
  transform-origin: center center;

  background: linear-gradient(
    to bottom,
    ${({ theme }) => theme.gradient.red},
    ${({ theme }) => theme.gradient.yellow}
  );
`