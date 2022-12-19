import Head from "next/head";
import React from "react";
import styled from "styled-components";
import { Education } from "../app/json/education";
import { Jobs } from "../app/json/jobs";
import { Frontend } from "../app/json/skills";
import ButtonWithText from "../components/Button/ButtonWithText";
import Job from "../components/Job";
import Layout from "../components/Layout";
import MetaTags from "../components/MetaTags";
import ProfileImage from "../components/ProfileImage";
import Skills from "../components/Skills/Skills";
import { Device, Wrapper } from "../styles/components";
import { HiOutlineCode, HiOutlineMail } from "react-icons/hi";

const Subtitle = styled.h2`
  font-family: "Ubuntu Mono", monospace;
  text-transform: uppercase;
  letter-spacing: 2px;
`;

const Profile = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 75px;
  margin-bottom: 50px;

  @media ${Device.md} {
    grid-template-columns: 1fr 4fr;
  }

  @media print {
    grid-template-columns: 1fr 4fr;
  }
`;

const Information = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 75px;
  margin-bottom: 50px;

  @media ${Device.md} {
    grid-template-columns: 1fr 1fr;
  }

  @media print {
    grid-template-columns: 1fr 1fr;
    break-inside: avoid;
    margin-top: 50px;
  }
`;

const Unordered = styled.ul`
  list-style: disc;
  list-style-position: inside;

  li {
    ::marker {
      color: ${({ theme }) => theme.gradient.one};
    }
  }
`;

const ProfileColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const ProfileRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 10px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 50px;

  @media print {
    display: block;
  }
`;

const Section = styled.div`
  margin-top: 75px;
  margin-bottom: 75px;

  @media print {
    margin-top: 0px;
    margin-bottom: 0px;

    /* break-inside: avoid; */
  }
`;

const DownloadSection = styled.div`
  text-align: center;

  @media print {
    display: none;
  }
`;

export default function Experience() {
  return (
    <Layout>
      <Head>
        <title>Experience</title>
        <MetaTags />
      </Head>

      <section>
        <h1 className="text-5xl text-center">Steffen Pedersen</h1>
        <Subtitle className="text-2xl mt-4 mb-14 text-center">
          Frontend Developer
        </Subtitle>
        <DownloadSection>
          <ButtonWithText text={"Download"} link={"/CV.pdf"} download />
        </DownloadSection>
        <Section>
          <Wrapper>
            <Profile>
              <ProfileColumn>
                <ProfileImage size={125} />
                <div className="text-sm text-right text-opacity-80 mt-4">
                  <ProfileRow>
                    <HiOutlineMail />
                    <strong>
                      <a href="mailto:steffen@bleptek.dk">steffen@bleptek.dk</a>
                    </strong>
                  </ProfileRow>
                  <ProfileRow>
                    <HiOutlineCode />
                    <strong>
                      <a href="https://steffenp.dk/">steffenp.dk</a>
                    </strong>
                  </ProfileRow>
                  <div>Horsens, Denmark</div>
                  <div>June 1990</div>
                  <div>Danish: Native</div>
                  <div>English: Fluent</div>
                </div>
              </ProfileColumn>
              <ProfileColumn>
                <p>
                  It is important to keep up to date with the latest knowledge.
                  I think this is best achieved through group dynamics and
                  passion. That is why web development appeals to me. There is
                  always something new to learn. In addition, you are rewarded
                  with visual results. This is a great motivation for me.
                </p>
                <p>
                  I often meet up with two of my good friends, who also works
                  with software development. Here we nerd out on different
                  projects. We have previously studied Vue.js, React and
                  Firebase.
                </p>
                <p>
                  When I need to not sit in front of a screen, I spend time with
                  my girlfriend, family and friends. I try to work out several
                  times a week after work.
                </p>
              </ProfileColumn>
            </Profile>
            <div className="text-center">
              <Skills array={Frontend} />
            </div>
          </Wrapper>
        </Section>

        <Section>
          <Wrapper>
            <Information>
              <div>
                <h2>Mainly Focus</h2>
                <Unordered>
                  <li>Implementing layouts</li>
                  <li>API integration</li>
                  <li>Frontend architecture</li>
                </Unordered>
              </div>
              <div>
                <h2>Primary Technologies</h2>
                <Unordered>
                  <li>TypeScript</li>
                  <li>Sass (CSS pre-processor)</li>
                  <li>Styled Components (CSS-in-JS)</li>
                  <li>React/Next.js</li>
                  <li>Stimulus</li>
                  <li>ESLint</li>
                  <li>REST API</li>
                </Unordered>
              </div>
            </Information>
            <Information>
              <div>
                <h2>Favorite Concepts</h2>
                <Unordered>
                  <li>CSS architecture (BEM, ITCSS)</li>
                  <li>Component-based development</li>
                  <li>Browser compatibility</li>
                  <li>Mobile first development</li>
                  <li>Headless development</li>
                  <li>MVC concepts</li>
                  <li>Code review</li>
                  <li>Semantic HTML </li>
                </Unordered>
              </div>
              <div>
                <h2>Interested In</h2>
                <Unordered>
                  <li>Rendering Patterns</li>
                  <li>Performance Patterns</li>
                  <li>Design Patterns </li>
                </Unordered>
              </div>
            </Information>
          </Wrapper>
        </Section>

        <Section>
          <Wrapper>
            <h2 className="mb-8">Experience</h2>
            <Grid>
              {Jobs.map((job, i) => {
                return (
                  <Job
                    image={job.image}
                    title={job.title}
                    company={job.company}
                    description={job.description}
                    firstDate={job.firstDate}
                    secondDate={job.secondDate}
                    durationMonths={job.durationMonths}
                    durationYears={job.durationYears}
                    skills={job.skills}
                  />
                );
              })}
            </Grid>
          </Wrapper>
        </Section>

        <Section>
          <Wrapper>
            <h2 className="mb-8">Education</h2>

            <Grid>
              {Education.map((experience, i) => {
                return (
                  <Job
                    image={experience.image}
                    title={experience.title}
                    company={experience.company}
                    description={experience.description}
                    firstDate={experience.firstDate}
                    secondDate={experience.secondDate}
                  />
                );
              })}
            </Grid>
          </Wrapper>
        </Section>
      </section>
    </Layout>
  );
}
