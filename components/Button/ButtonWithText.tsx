import React from "react";
import styled from "styled-components";
import useBoop from "../../app/hooks/useBoop";
import { Background } from "./Shared";

interface Props {
  link?: string;
  onClick?: any;
  download?: boolean;
  text: string;
}

const Container = styled.a`
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 15px;
  padding: 1rem 1.5rem;
  cursor: pointer;
  justify-content: center;
  font-size: 1rem;
  line-height: 1;

  color: #0e0e0e;

  z-index: 100;

  &:hover {
    text-decoration: none;
  }
`;

function ButtonWithText(props: Props) {
  const [style, trigger] = useBoop({ scale: 1.02 });

  return (
    <Container
      // @ts-ignore
      onMouseEnter={trigger}
      href={props.link}
      onClick={props.onClick}
      download={props.download}
    >
      {/* @ts-ignore */}
      <Background style={style} />
      {props.text}
    </Container>
  );
}

export default ButtonWithText;
