import Head from "next/head";
import Image from "next/image";
import React from "react";
import styled from "styled-components";
import Layout, { siteTitle } from "../components/layout";
import { device, LinkGradient } from "../styles/components";

const Content = styled.div`
  font-size: 1.875rem;
  line-height: 2.25rem;
  max-width: 42rem;

  @media ${device.md} {
    margin-right: 2rem;
  }
`;

const ImageContent = styled.div`
    display: flex;
    justify-content: center;
    flex: 1 1 0%;

  @media ${device.md} {
    margin-left: 2rem;
  }
`;


export default function Home({ toggleTheme, isDarkTheme }) {
  return (
    <Layout home toggleTheme={toggleTheme} isDarkTheme={isDarkTheme}>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <Content>
        <p>
          Hello, my name is{" "}
          <LinkGradient href="mailto:steffen.pedersen@live.dk">
            Steffen Pedersen
          </LinkGradient>
          .
        </p>
        <p>
          I work as a Frontend Developer at Jyllands-Posten and on my side
          project Bleptek.
        </p>
        <p>I also sometimes write an article.</p>
      </Content>
      <ImageContent>
        <div>
          <Image
            className="rounded-full drop-shadow-md"
            priority
            src="/images/profile.png"
            height={300}
            width={300}
            alt="Steffen Pedersen"
          />
        </div>
      </ImageContent>
    </Layout>
  );
}
