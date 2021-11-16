import Head from "next/head";
import React from "react";
import styled from "styled-components";
import Job from "../components/Job";
import Layout from "../components/Layout";
import ProfileImage from "../components/ProfileImage";
import Skills from "../components/Skills";
import { Frontend } from "../components/skills-frontend";
import { Device, Wrapper } from "../styles/components";

const Profile = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 32px;

  @media ${Device.md} {
    grid-template-columns: 1fr 2fr;
  }
`;

const ProfileColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 32px;

  @media ${Device.sm} {
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  }
`;

const Section = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
`;

export default function CV() {
  return (
    <Layout>
      <Head>
        <title>CV</title>
      </Head>

      <section>
        <h1 className="text-5xl mb-14">About</h1>
        <Section>
          <Profile>
            <ProfileColumn>
              <ProfileImage size={200} />
            </ProfileColumn>
            <ProfileColumn>
              <Skills array={Frontend} />
            </ProfileColumn>
          </Profile>
        </Section>

        <Section>
          <h2 className="mb-8">Experience</h2>

          <Grid>
            <Job
              image="jp.jpeg"
              title="Frontend Developer"
              company="Jyllands-Posten"
              description="Fuldtid"
              firstDate="sep. 2020"
            />

            <Job
              image="bleptek.jpeg"
              title="Owner"
              company="Bleptek"
              description="Selvstændig"
              firstDate="jan. 2021"
            />

            <Job
              image="kruso.jpeg"
              title="Frontend Developer (Lead)"
              company="Kruso"
              description="Fuldtid"
              firstDate="jun. 2020"
              secondDate="sep. 2020"
            />

            <Job
              image="novicell.jpeg"
              title="Frontend Developer"
              company="Novicell"
              description="Fuldtid"

              firstDate="feb. 2020"
              secondDate="feb. 2020"

            />

            <Job
              image="jp.jpeg"
              title="Web Developer"
              company="Jyllands-Posten"
              description="Fuldtid"
              firstDate="sep. 2017"
              secondDate="feb. 2020"

            />

            <Job
              image="skybrud.jpeg"
              title="Frontend Intern"
              company="Skybrud"
              description="Praktik"

              firstDate="jan. 2017"
              secondDate="jul. 2017"

            />

            <Job
              image="happy.jpeg"
              title="Founder"
              company="Happy Bear Prints"
              description="Selvstændig"
              firstDate="2014"
              secondDate="2017"

            />

            <Job
              image="fokus.jpg"
              title="Internship in own company"
              company="Fokusfabrikken I/S"
              description="Praktik"
              firstDate="2015"
              secondDate="2015"

            />
          </Grid>
        </Section>

        <Section>
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
        </Section>
      </section>
    </Layout>
  );
}
