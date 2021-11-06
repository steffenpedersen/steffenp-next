import React from "react";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";
import { Device, MaxSize, Size } from "../styles/components";
import DesktopNav from "./DesktopNav";
import MobileHeader from "./MobileHeader";
import ThemeToggle from "./ThemeToggle";

const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 20px;

  padding: 2.5rem 1.5rem;

  max-width: 1380px;
  margin-left: auto;
  margin-right: auto;
  width: 100%;

  @media ${Device.md} {
    flex-direction: row;
  }
`;

function Header() {
  const isMinMedium = useMediaQuery({ query: `(min-width: ${Size.md})` });
  const isMaxMedium = useMediaQuery({ query: `(max-width: ${MaxSize.md})` });

  return (
    <HeaderContainer>
      {isMaxMedium && <MobileHeader />}
      {isMinMedium && (
        <>
          <DesktopNav />
          <ThemeToggle />
        </>
      )}
    </HeaderContainer>
  );
}

export default Header;
