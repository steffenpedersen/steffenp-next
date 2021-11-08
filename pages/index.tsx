import Head from "next/head";
import Image from "next/image";
import React from "react";
import styled from "styled-components";
import Boop from "../components/Boop";
import Layout, { siteTitle } from "../components/Layout";
import MetaTags from "../components/MetaTags";
import { Device, LinkGradient } from "../styles/components";

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column-reverse;

  @media ${Device.md} {
    flex-direction: row;
  }
`;

const Content = styled.div`
  font-size: 1.875rem;
  line-height: 2.25rem;

  @media ${Device.md} {
    flex: 3;
    margin-right: 2rem;
  }
`;

const ImageContent = styled.div`
  display: flex;
  justify-content: center;

  @media ${Device.md} {
    flex: 1;
    margin-left: 2rem;
  }
`;

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Grid>
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
          <a href="mailto:steffen.pedersen@live.dk">
            <Boop scale={1.02} timing={200}>
              <Image
                className="rounded-full drop-shadow-md"
                priority
                src="/images/profile.png"
                height={300}
                width={300}
                alt="Steffen Pedersen"
              />
            </Boop>
          </a>
        </ImageContent>
      </Grid>
    </Layout>
  );
}
