import Head from "next/head";
import Link from "next/link";
import React from "react";
import styled from "styled-components";
import { getDatabase } from "../app/lib/notion";
import Date from "../components/Date";
import Layout, { siteTitle } from "../components/Layout";
import Text from "../components/Text";
import { DateGradient, Device } from "../styles/components";

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

const Item = styled.div`
  background: ${({ theme }) => theme.opacity.normal};
  padding: 35px;
  border-radius: 10px;
  transition: background 350ms ease 0s;

  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.opacity.hover};
  }
`;

export default function NewBlog({ posts }) {
  return (
    <Layout>
      <Head>
        <title>{siteTitle} - Writing</title>
      </Head>

      <section>
        <h2 className="text-3xl mb-14">Writing</h2>
        <Grid>
          {posts.map((post) => {
            return (
              <Link href={`/posts/${post.id}`}>
                <Item key={post.id}>
                  <DateGradient className="text-sm">
                    <Date dateString={post.properties.Date.date.start} />
                  </DateGradient>

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
