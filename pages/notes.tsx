import Head from "next/head";
import Link from "next/link";
import React from "react";
import styled from "styled-components";
import { getDatabase } from "../app/lib/notion";
import { Text } from "../app/lib/posts";
import Date from "../components/date";
import Layout, { siteTitle } from "../components/layout";
import { GradientBackground } from "../styles/components";

export const databaseId = process.env.NOTION_NOTES_ID;

const LinkGradientDiv = styled.div`
  ${GradientBackground}
`;

const StyledLink = styled(Link)`
  font-size: 1.5em;
`;

export default function NewBlog({ posts }) {
  return (
    <Layout>
      <Head>
        <title>{siteTitle} - Notes</title>
      </Head>

      <section>
        <h2 className="text-3xl mb-14">Notes</h2>
        <ol>
          {posts.map((post) => {
            return (
              <li key={post.id} className="mb-6">
                <LinkGradientDiv className="text-sm">
                  <Date dateString={post.properties.Date.date.start} />
                </LinkGradientDiv>

                <StyledLink href={`/notes/${post.id}`}>
                  <a>
                    <Text text={post.properties.Name.title} />
                  </a>
                </StyledLink>
              </li>
            );
          })}
        </ol>
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
