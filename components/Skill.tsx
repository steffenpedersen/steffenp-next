import React from "react";
import styled from "styled-components";
import { FilterBrightness } from "../styles/components";

interface Props {
  url?: string;
  text: string;
  white?: boolean;
}

function Skill({
  url,
  text,
  white,
  small,
}: {
  url?: string;
  text: string;
  white?: boolean;
  small?: boolean;
}) {
  const Img = styled.img`
    ${small ? `height: 16px;` : `height: 24px;`}
    ${white && FilterBrightness}
  `;

  return (
    <>
      {url ? (
        <Img
          src={`https://cdn.svgporn.com/logos/${url}.svg`}
          height="24"
          alt={text}
        />
      ) : (
        <span style={{ height: 24 }}></span>
      )}
    </>
  );
}

export default Skill;
