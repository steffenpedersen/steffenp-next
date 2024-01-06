import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";
import { getDatabase } from "../app/services/notion";
import ArticleInformation, { Distance } from "../components/ArticleInformation";
import Layout from "../components/Layout";
import MetaTags from "../components/MetaTags";
import Text from "../components/Text";
import { Box, Device, CursiveText } from "../styles/components";

export const databaseId = process.env.NOTION_BLOG_ID;

const Title = styled.span`
  font-size: 1.2rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 32px;

  @media ${Device.sm} {
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  }
`;

const Notes = styled.span`
  position: absolute;
  bottom: 0;
  right: 0;
  ${CursiveText}
`;

export default function NewBlog({ writings }) {
  const released = writings.filter(
    (writing) => writing.properties.Released.checkbox == true
  );

  return (
    <Layout>
      <Head>
        <title>Writing</title>
        <MetaTags />
      </Head>

      <section>
        <h1 className="text-5xl mb-14">Writings</h1>
        <Grid>
          {released.map((writing) => {
            return (
              <Link key={writing.id} href={`/writings/${writing.id}`}>
                <Box>
                  <ArticleInformation
                    date={writing.properties.Date.date.start}
                    multi_select={writing.properties.Tags.multi_select}
                    distance={Distance.SMALL}
                  />

                  <Title>
                    <Text text={writing.properties.Name.title} />
                  </Title>

                  {writing.properties.Notes.checkbox && <Notes>Notes</Notes>}
                </Box>
              </Link>
            );
          })}
        </Grid>
      </section>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const writings = databaseId ? await getDatabase(databaseId) : [];

  return {
    props: {
      writings,
    },
  };
};
