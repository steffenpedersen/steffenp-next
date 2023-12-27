import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";
import { getDatabase } from "../app/services/notion";
import ArticleInformation, { Distance } from "../components/ArticleInformation";
import Layout from "../components/Layout";
import MetaTags from "../components/MetaTags";
import Text from "../components/Text";
import { Box, Device, NotesText } from "../styles/components";

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
  ${NotesText}
`;

export default function NewBlog({ posts }) {
  const released = posts.filter(
    (post) => post.properties.Released.checkbox == true
  );

  return (
    <Layout>
      <Head>
        <title>Writing</title>
        <MetaTags />
      </Head>

      <section>
        <h1 className="text-5xl mb-14">Writing</h1>
        <Grid>
          {released.map((post) => {
            return (
              <Link key={post.id} href={`/posts/${post.id}`}>
                <Box>
                  <ArticleInformation
                    date={post.properties.Date.date.start}
                    multi_select={post.properties.Tags.multi_select}
                    distance={Distance.SMALL}
                  />

                  <Title>
                    <Text text={post.properties.Name.title} />
                  </Title>

                  {post.properties.Notes.checkbox && <Notes>Notes</Notes>}
                </Box>
              </Link>
            );
          })}
        </Grid>
      </section>
    </Layout>
  );
}

export const getServerSideProps = async () => {
  const posts = databaseId ? await getDatabase(databaseId) : [];

  return {
    props: {
      posts,
    },
  };
};
