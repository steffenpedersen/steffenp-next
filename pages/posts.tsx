import Head from "next/head";
import styled from "styled-components";
import { getDatabase } from "../app/services/notion";
import ArticleInformation, { Distance } from "../components/ArticleInformation";
import Layout from "../components/Layout";
import MetaTags from "../components/MetaTags";
import Text from "../components/Text";
import { CursiveText, Wrapper } from "../styles/components";

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

                  {post.properties["Title"] &&
                    post.properties["Title"].title[0] && (
                      <p
                        dangerouslySetInnerHTML={{
                          __html: post.properties["Title"].title[0].plain_text,
                        }}
                      ></p>
                    )}

                  {post.properties["Text 1"] &&
                    post.properties["Text 1"].rich_text && (
                      <p>
                        <Text text={post.properties["Text 1"].rich_text} />
                      </p>
                    )}

                  {post.properties["Text 2"] &&
                    post.properties["Text 2"].rich_text && (
                      <p>
                        <Text text={post.properties["Text 2"].rich_text} />
                      </p>
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
