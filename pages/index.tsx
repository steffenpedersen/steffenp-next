import Head from "next/head";
import styled from "styled-components";
import Layout, { siteTitle } from "../components/Layout";
import MetaTags from "../components/MetaTags";
import ProfileImage from "../components/ProfileImage";
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
        <MetaTags />
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
            I work as a Senior Frontend Engineer at IMPACT and on my side
            project Bleptek.
          </p>
          <p>I also sometimes write an article.</p>
        </Content>
        <ImageContent>
          <ProfileImage size={300} />
        </ImageContent>
      </Grid>
    </Layout>
  );
}
