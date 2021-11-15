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
              <p>
                It is important to keep up to date with the latest knowledge. I
                think this is best achieved through group dynamics and passion.
                That is why web development appeals to me. There is always
                something new to learn. In addition, you are rewarded with
                visual results. This is a great motivation for me.
              </p>
            </ProfileColumn>
          </Profile>
        </Section>

        <Section>
          <Wrapper>
            <Skills array={Frontend} />
          </Wrapper>
        </Section>

        <Section>
          <h2 className="mb-8">Experience</h2>

          <Grid>
            <Job
              image="jp.jpeg"
              title="Frontend Developer"
              company="Jyllands-Posten"
              date="sep. 2020 – present"
              description="Fuldtid"
            />

            <Job
              image="bleptek.jpeg"
              title="Owner"
              company="Bleptek"
              date="jan. 2021 - present"
              description="Selvstændig"
            />

            <Job
              image="kruso.jpeg"
              title="Frontend Developer (Lead)"
              company="Kruso"
              date="jun. 2020 – sep. 2020"
              description="Fuldtid"
            />

            <Job
              image="novicell.jpeg"
              title="Frontend Developer"
              company="Novicell"
              date="feb. 2020"
              description="Fuldtid"
            />

            <Job
              image="jp.jpeg"
              title="Web Developer"
              company="Jyllands-Posten"
              date="sep. 2017 – feb. 2020"
              description="Fuldtid"
            />

            <Job
              image="skybrud.jpeg"
              title="Frontend Intern"
              company="Skybrud"
              date="jan. 2017 – jul. 2017"
              description="Praktik"
            />

            <Job
              image="happy.jpeg"
              title="Founder"
              company="Happy Bear Prints"
              date="2014 – 2017"
              description="Selvstændig"
            />

            <Job
              image="fokus.jpg"
              title="Internship in own company"
              company="Fokusfabrikken I/S"
              date="2015"
              description="Praktik"
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
              date="2016 – 2017"
              description="Bachelor"
            />

            <Job
              image="baaa.jpeg"
              title="Business Academy Aarhus"
              company="Multimedia Design and Communication"
              date="2014 – 2016"
              description="AP degree"
            />
          </Grid>
        </Section>
      </section>
    </Layout>
  );
}
