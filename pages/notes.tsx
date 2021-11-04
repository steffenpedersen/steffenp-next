import Head from "next/head";
import Link from "next/link";
import React from "react";
import styled from "styled-components";
import { getDatabase } from "../app/services/notion";
import Date from "../components/Date";
import Layout, { siteTitle } from "../components/Layout";
import Text from "../components/Text";
import { DateGradient } from "../styles/components";

export const databaseId = process.env.NOTION_NOTES_ID;

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
                <DateGradient className="text-sm">
                  <Date dateString={post.properties.Date.date.start} />
                </DateGradient>

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
