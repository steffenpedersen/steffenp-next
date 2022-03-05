import Head from "next/head";
import Link from "next/link";
import React from "react";
import styled from "styled-components";
import { getDatabase } from "../app/services/notion";
import Date from "../components/Date";
import Layout from "../components/Layout";
import MetaTags from "../components/MetaTags";
import Text from "../components/Text";
import { Box, DateGradient, Device } from "../styles/components";

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
                  <DateGradient className="text-sm">
                    <Date dateString={post.properties.Date.date.start} />
                  </DateGradient>

                  <Title>
                    <Text text={post.properties.Name.title} />
                  </Title>
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
  const database = await getDatabase(databaseId);

  return {
    props: {
      posts: database,
    },
    revalidate: 1,
  };
};
