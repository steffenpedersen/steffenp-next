import React from "react";
import styled from "styled-components";
import Boop from "./Boop";

const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;

  padding: 2.5rem 1.5rem;

  max-width: 1380px;
  margin-top: auto;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
`;

const Icon = styled.img`
  width: 24px;
  height: 24px;
  filter: ${({ theme }) => theme.brightness};
`;

function Footer() {
  return (
    <FooterContainer>
      <a href="https://www.linkedin.com/in/mrsteffenpedersen/">
        <Boop rotation={20} timing={200}>
          <Icon
            src={`https://cdn.svgporn.com/logos/linkedin-icon.svg`}
            height="24"
            alt="linkedin"
          />
        </Boop>
      </a>
    </FooterContainer>
  );
}

export default Footer;