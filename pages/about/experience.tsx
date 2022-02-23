import Head from "next/head";
import React from "react";
import styled from "styled-components";
import Job from "../../components/Job";
import Layout from "../../components/Layout";
import ProfileImage from "../../components/ProfileImage";
import Skills from "../../components/Skills";
import { Frontend } from "../../app/json/skills";
import { Jobs } from "../../app/json/jobs";
import { Device, Wrapper } from "../../styles/components";

const Profile = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 32px;

  @media ${Device.md} {
    grid-template-columns: 1fr 4fr;
  }
`;

const ProfileColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
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
`;

export default function Experience() {
  return (
    <Layout>
      <Head>
        <title>Experience</title>
      </Head>

      <section>
        <h1 className="text-5xl mb-14 text-center">Experience</h1>
        <Section>
          <Wrapper>
            <Profile>
              <ProfileColumn>
                <ProfileImage size={125} />
              </ProfileColumn>
              <ProfileColumn>
                <Skills array={Frontend} />
              </ProfileColumn>
            </Profile>
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
              <Job
                image="baaa.jpeg"
                title="Business Academy Aarhus"
                company="Web Development"
                description="Bachelor"
                firstDate="2016"
                secondDate="2017"
              />

              <Job
                image="baaa.jpeg"
                title="Business Academy Aarhus"
                company="Multimedia Design and Communication"
                description="AP degree"
                firstDate="2014"
                secondDate="2016"
              />
            </Grid>
          </Wrapper>
        </Section>
      </section>
    </Layout>
  );
}
