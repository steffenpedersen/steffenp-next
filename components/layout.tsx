import Head from "next/head";
import Image from "next/image";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";

export const siteTitle = "Next.js Sample Website";

const LayoutContainer = styled.div``;

const Border = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;

  border: 10px solid;
  border-image-slice: 1;
  border-width: 5px;
  border-image-source: linear-gradient(to bottom, #f06966, #fad6a6);

  pointer-events: none;
`;

const Header = styled.header`
  display: flex;

  justify-content: space-between;

  padding: 2.5rem;
  padding-left: 3.5rem;
  padding-right: 3.5rem;
`;
const MenuList = styled.ul`
  display: flex;
  font-size: 1.25rem;
  line-height: 1.75rem;
`;

const Item = styled.li`
  margin-right: 1rem;
`;

const SVG = styled.svg`
  height: 1.5rem;
  width: 1.5rem;
`;

const Main = styled.main`
  display: flex;

  max-width: 1024px;

  margin-top: 5rem;
  margin-left: auto;
  margin-right: auto;

  padding: 1.25rem;
`;

export default function Layout({
  children,
  home,
  toggleTheme,
  isDarkTheme,
}: {
  children: React.ReactNode;
  home?: boolean;
  toggleTheme?: () => void;
  isDarkTheme?: boolean;
}) {
  const router = useRouter();

  return (
    <LayoutContainer>
      <Border />
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Header>
        <nav>
          <MenuList>
            <Item>
              <Link href="/">
                <a className={router.pathname == "/" ? "" : "link"}>
                  Steffen Pedersen
                </a>
              </Link>
            </Item>

            <Item>
              <Link href="/posts">
                <a
                  className={router.pathname.startsWith("/posts") ? "" : "link"}
                >
                  Posts
                </a>
              </Link>
            </Item>
          </MenuList>
        </nav>

        <button onClick={toggleTheme}>
          {isDarkTheme ? (
            <span aria-label="Light mode" role="img">
              <>
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
              </>
            </span>
          ) : (
            <span aria-label="Dark mode" role="img">
              <>
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
              </>
            </span>
          )}
        </button>
      </Header>
      <Main>{children}</Main>
    </LayoutContainer>
  );
}
