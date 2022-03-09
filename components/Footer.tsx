import Link from "next/link";
import React from "react";
import styled from "styled-components";
import { FilterBrightness } from "../styles/components";
import Boop from "./Boop";

const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  gap: 2rem;

  padding: 2.5rem 1.5rem;

  max-width: 1380px;
  margin-top: auto;
  margin-left: auto;
  margin-right: auto;
  width: 100%;

  @media print {
    display: none;
  }
`;

const Icon = styled.img`
  width: 24px;
  height: 24px;
  ${FilterBrightness}
`;

function Footer() {
  return (
    <FooterContainer>
      <Boop rotation={20} timing={200}>
        <Link href="/about">About</Link>
      </Boop>
      <Boop rotation={20} timing={200}>
        <a href="https://www.linkedin.com/in/mrsteffenpedersen/">
          <Icon
            src={`https://cdn.svgporn.com/logos/linkedin-icon.svg`}
            height="24"
            alt="linkedin"
          />
        </a>
      </Boop>
    </FooterContainer>
  );
}

export default Footer;
