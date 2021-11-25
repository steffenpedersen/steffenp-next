import Head from "next/head";
import Link from "next/link";
import React from "react";
import styled from "styled-components";
import Job from "../components/Job";
import Layout from "../components/Layout";
import ProfileImage from "../components/ProfileImage";
import Skill from "../components/Skill";
import Skills from "../components/Skills";
import { Frontend } from "../components/skills-frontend";
import { Box, DateGradient, Device, Pill, Wrapper } from "../styles/components";

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
            This site is made with Next.js <Pill><Skill url="nextjs-icon" text="Next.js" white small/></Pill> and Notion API as backend hosted in Vercel
            <Pill><Skill url="vercel-icon" text="Vercel" white small/></Pill>. I use Styled Components for CSS and React Spring <Pill><Skill url="react-spring" text="React Spring" small/></Pill> for
            animations. I also use a few utility classes from Tailwind <Pill><Skill url="tailwindcss-icon" text="Tailwind" small/></Pill>.
          </p>
        </Wrapper>

        <CenteredWrapper>
          <Link href="/about/experience">
            <Box>
              <DateGradient className="text-sm">Experience</DateGradient>
              <p>
                This is a comprehensive description of my employments and
                projects.
              </p>
            </Box>
          </Link>
        </CenteredWrapper>
      </section>
    </Layout>
  );
}
