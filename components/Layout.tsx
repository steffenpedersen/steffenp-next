import Head from "next/head";
import React from "react";
import styled from "styled-components";
import { Device } from "../styles/components";
import Footer from "./Footer";
import Header from "./Header";

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
  return (
    <LayoutContainer>
      <Border />
      <Head>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>👋</text></svg>"
        />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-NHLK68QYXF"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
            
              gtag('config', 'G-NHLK68QYXF');
                      `,
          }}
        />
      </Head>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </LayoutContainer>
  );
}
