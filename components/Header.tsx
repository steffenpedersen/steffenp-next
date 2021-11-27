import dynamic from "next/dynamic";
import React from "react";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";
import { Device, MaxSize, Size } from "../styles/components";

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

  // We are not running client side and we
  // therefore need to use dynamic imports
  const DynamicMobileHeader = dynamic(() => import("./MobileHeader"));
  const DynamicDesktopNav = dynamic(() => import("./DesktopNav"));
  const DynamicThemeToggle = dynamic(() => import("./ThemeToggle"));

  return (
    <HeaderContainer>
      {isMaxMedium && <DynamicMobileHeader />}
      {isMinMedium && (
        <>
          <DynamicDesktopNav />
          <DynamicThemeToggle />
        </>
      )}
    </HeaderContainer>
  );
}

export default Header;
