import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";
import { getDatabase } from "../app/services/notion";
import Layout from "../components/Layout";
import MetaTags from "../components/MetaTags";
import { CursiveText, Wrapper } from "../styles/components";
import ArticleInformation, { Distance } from "../components/ArticleInformation";

export const databaseId = process.env.NOTION_POSTS_ID;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 50px;
`;

const PostContainer = styled.div`
  position: relative;
  background-color: ${({ theme }) => theme.opacity.normal};
  padding: 35px;
  border-radius: 10px;
`;

const NotReleased = styled.span`
  position: absolute;
  bottom: 0;
  right: 0;
  ${CursiveText}
`;

export default function NewBlog({ posts }) {
  const notHidden = posts.filter(
    (post) => post.properties.Hide.checkbox == false
  );

  return (
    <Layout>
      <Head>
        <title>Posts</title>
        <MetaTags />
      </Head>

      <section>
        <h1 className="text-5xl mb-14 text-center">Posts</h1>

        <Wrapper>
          <Grid>
            {notHidden.map((post) => {
              return (
                <PostContainer key={post.id}>
                  <ArticleInformation
                    date={
                      post.properties.Date.date &&
                      post.properties.Date.date.start
                    }
                    multi_select={post.properties.Tags.multi_select}
                    distance={Distance.SMALL}
                  />

                  {post.properties.Title.title[0] && (
                    <p
                      dangerouslySetInnerHTML={{
                        __html: post.properties.Title.title[0].plain_text,
                      }}
                    ></p>
                  )}

                  {!post.properties.Released.checkbox && (
                    <NotReleased>Not Released</NotReleased>
                  )}
                </PostContainer>
              );
            })}
          </Grid>
        </Wrapper>
      </section>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const posts = databaseId ? await getDatabase(databaseId) : [];

  return {
    props: {
      posts,
    },
  };
};
