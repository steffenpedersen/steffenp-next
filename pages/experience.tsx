import Head from "next/head";
import { HiOutlineCode, HiOutlineMail } from "react-icons/hi";
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
import Image from "next/image";

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
    margin-top: 20px;
    margin-bottom: 20px;

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
          Tech Lead / Senior Frontend
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
                      <a href="https://www.linkedin.com/in/mrsteffenpedersen/">LinkedIn</a>
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
                  For about 10 years, I have been involved in web development.
                  My starting point was to become a graphic designer, but I
                  quickly shifted my focus to frontend development. I have
                  occasionally worked with backend development, which has given
                  me a broad understanding of web development.
                </p>
                <p>
                  When I need to not sit in front of a screen, I spend time with
                  my wife, family and friends.
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
                  <li>Development Oversight</li>
                  <li>Project and Team Management</li>
                  <li>Tech Discovery and Delivery</li>
                </Unordered>
              </div>
              <div>
                <h2>Primary Technologies</h2>
                <Unordered>
                  <li>Elixir</li>
                  <li>Phoenix</li>
                  <li>TypeScript</li>
                  <li>React/Next.js</li>
                  <li>Angular</li>
                  <li>Rest API</li>
                </Unordered>
              </div>
            </Information>
            <Information>
              <div>
                <h2>Favorite Concepts</h2>
                <Unordered>
                  <li>Functional Programming</li>
                  <li>Component-Based Development</li>
                  <li>Test-Driven Development</li>
                  <li>Monitoring and Logging</li>
                  <li>Headless Development</li>
                  <li>Code Review</li>
                </Unordered>
              </div>
              <div>
                <h2>Interested In</h2>
                <Unordered>
                  <li>Rendering and Performance</li>
                  <li>Team Dynamics</li>
                  <li>Management</li>
                  <li>Behavioural Design</li>
                </Unordered>
              </div>
            </Information>
          </Wrapper>
        </Section>

        <Section>
          <Wrapper>
            <h2 className="mb-8">Experience</h2>
            <Grid>
              {Jobs.map((job, index) => {
                return (
                  <Job
                    key={index}
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
              {Education.map((experience, index) => {
                return (
                  <Job
                    key={index}
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
