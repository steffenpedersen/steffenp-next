import Head from "next/head";
import React from "react";
import styled from "styled-components";
import Job from "../../components/Job";
import Layout from "../../components/Layout";
import ProfileImage from "../../components/ProfileImage";
import Skills from "../../components/Skills";
import { Frontend } from "../../app/json/skills";
import { Education, Jobs } from "../../app/json/jobs";
import { Device, Wrapper } from "../../styles/components";
import ButtonWithText from "../../components/Button/ButtonWithText";

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

const ProfileColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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

    break-inside: avoid;
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
      </Head>

      <section>
        <h1 className="text-5xl text-center">Steffen Pedersen</h1>
        <h2 className="text-3xl mt-4 mb-14 text-center">Frontend Developer</h2>
        <DownloadSection>
          <ButtonWithText text={"Download"} link={"/CV.pdf"} download/>
        </DownloadSection>
        <Section>
          <Wrapper>
            <Profile>
              <ProfileColumn>
                <ProfileImage size={125} />
                <div className="text-sm text-right text-opacity-80 mt-4">
                  <div>
                    <strong>
                      <a href="mailto:steffen@bleptek.dk">steffen@bleptek.dk</a>
                    </strong>
                  </div>
                  <div>
                    <strong>Horsens, Denmark</strong>
                  </div>
                  <div>
                    <strong>June 1990</strong>
                  </div>
                  <div>
                    <strong>Danish: Native</strong>
                  </div>
                  <div>
                    <strong>English: Fluent</strong>
                  </div>
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
