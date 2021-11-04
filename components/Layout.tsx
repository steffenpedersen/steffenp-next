import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { getThemeState, toggleTheme } from "../app/redux/themeSlice";
import { Device, LinkGradient } from "../styles/components";
import Boop from "./Boop";
import Footer from "./Footer";

export const siteTitle = "Steffen Pedersen";

const LayoutContainer = styled.div`
  position: relative;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
`;

const Border = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;

  border: 10px solid;
  border-image-slice: 1;
  border-width: 5px;
  border-image-source: linear-gradient(
    to bottom,
    ${({ theme }) => theme.gradient.red},
    ${({ theme }) => theme.gradient.yellow}
  );

  pointer-events: none;
`;

const Header = styled.header`
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

const MenuList = styled.ul`
  display: flex;
  gap: 1rem;

  font-size: 1.25rem;
  line-height: 1.75rem;
`;

const Item = styled.li`
  flex: 1;

  @media ${Device.md} {
    flex: content;
  }
`;

const SVG = styled.svg`
  height: 1.5rem;
  width: 1.5rem;
`;

const Main = styled.main`
  max-width: 1020px;
  width: 100%;

  padding-top: 1rem;
  padding-bottom: 1rem;
  margin-left: auto;
  margin-right: auto;

  padding-left: 1.5rem;
  padding-right: 1.5rem;

  @media ${Device.md} {
    padding-top: 5rem;
    padding-bottom: 5rem;
  }
`;

export default function Layout({
  children,
  home,
}: {
  children: React.ReactNode;
  home?: boolean;
}) {
  const router = useRouter();
  const dispatch = useDispatch();
  const isDark = useSelector(getThemeState);

  const onButtonClick = () => {
    dispatch(toggleTheme({ isDarkTheme: !isDark }));
  };

  return (
    <LayoutContainer>
      <Border />
      <Head>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🥳</text></svg>"
        />
      </Head>
      <Header>
        <nav>
          <MenuList>
            <Item>
              {router.pathname == "/" ? (
                <a href="/">Steffen Pedersen</a>
              ) : (
                <LinkGradient href="/">Steffen Pedersen</LinkGradient>
              )}
            </Item>

            <Item>
              {router.pathname.startsWith("/posts") ? (
                <a href="/posts">Writing</a>
              ) : (
                <LinkGradient href="/posts">Writing</LinkGradient>
              )}
            </Item>

            <Item>
              {router.pathname.startsWith("/notes") ? (
                <a href="/notes">Notes</a>
              ) : (
                <LinkGradient href="/notes">Notes</LinkGradient>
              )}
            </Item>
          </MenuList>
        </nav>

        <button onClick={onButtonClick}>
          {isDark ? (
            <span aria-label="Light mode" role="img">
              <Boop rotation={20} timing={200}>
                <SVG
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </SVG>
              </Boop>
            </span>
          ) : (
            <span aria-label="Dark mode" role="img">
              <Boop rotation={20} timing={200}>
                <SVG
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </SVG>
              </Boop>
            </span>
          )}
        </button>
      </Header>
      <Main>{children}</Main>
      <Footer />
    </LayoutContainer>
  );
}
