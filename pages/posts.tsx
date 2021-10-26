import Head from "next/head";
import Link from "next/link";
import React from "react";
import styled from "styled-components";
import Layout, { siteTitle } from "../components/layout";
import { getDatabase } from "../lib/notion";
import { device, GradientBackground } from "../styles/components";
import { Text } from "../lib/posts";

export const databaseId = process.env.NOTION_BLOG_ID;

const LinkGradientDiv = styled.div`
  ${GradientBackground}
`;

const Title = styled.span`
  font-size: 1.2rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 32px;

  @media ${device.sm} {
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  }
`;

const Item = styled.div`
  background: #ffffff10;
  padding: 35px;
  border-radius: 10px;
  transition: background 350ms ease 0s;

  cursor: pointer;

  &:hover {
    background: #ffffff09;
  }
`;

export default function NewBlog({ posts, toggleTheme, isDarkTheme }) {
  return (
    <Layout toggleTheme={toggleTheme} isDarkTheme={isDarkTheme}>
      <Head>
        <title>{siteTitle} - Writing</title>
      </Head>

      <section>
        <h2 className="text-3xl mb-14">Writing</h2>
        <Grid>
          {posts.map((post) => {
            console.log(post);
            const date = new Date(
              post.properties.Date.date.start
            ).toLocaleString("en-US", {
              month: "short",
              day: "2-digit",
              year: "numeric",
            });

            return (
              <Link href={`/posts/${post.id}`}>
                <Item key={post.id}>
                  <LinkGradientDiv className="text-sm link">
                    <time>{date}</time>
                  </LinkGradientDiv>

                  <Title>
                    <Text text={post.properties.Name.title} />
                  </Title>
                </Item>
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
