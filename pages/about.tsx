import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";
import Layout from "../components/Layout";
import Skill from "../components/Skills/Skill";
import { Box, DateGradient, Pill, Wrapper } from "../styles/components";

const CenteredWrapper = styled.div`
  max-width: 350px;
  margin-top: 50px;
  margin-right: auto;
  margin-left: auto;
`;

export default function About() {
  return (
    <Layout>
      <Head>
        <title>About</title>
      </Head>

      <section>
        <h1 className="text-5xl mb-14 text-center">About</h1>

        <Wrapper>
          <p>
            This site is made with Next.js{" "}
            <Pill>
              <Skill url="nextjs-icon" text="Next.js" white small />
            </Pill>{" "}
            and Notion API as backend hosted in Vercel
            <Pill>
              <Skill url="vercel-icon" text="Vercel" white small />
            </Pill>
            . I use Styled Components for CSS and React Spring{" "}
            <Pill>
              <Skill url="react-spring" text="React Spring" small />
            </Pill>{" "}
            for animations. I also use a few utility classes from Tailwind{" "}
            <Pill>
              <Skill url="tailwindcss-icon" text="Tailwind" small />
            </Pill>
            .
          </p>
        </Wrapper>

        <CenteredWrapper>
          <Link href="/experience">
            <Box>
              <DateGradient className="text-sm">Experience</DateGradient>
              <p>This is a description of my employments and projects.</p>
            </Box>
          </Link>
        </CenteredWrapper>
      </section>
    </Layout>
  );
}
