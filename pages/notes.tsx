import Head from "next/head";
import Link from "next/link";
import React from "react";
import styled from "styled-components";
import Layout, { siteTitle } from "../components/layout";
import { getDatabase } from "../lib/notion";
import { GradientBackground } from "../styles/components";
import { Text } from "./notes/[id]";

export const databaseId = process.env.NOTION_NOTES_ID;

const LinkGradientDiv = styled.div`
  ${GradientBackground}
`;

export default function NewBlog({ posts, toggleTheme, isDarkTheme }) {
  return (
    <Layout toggleTheme={toggleTheme} isDarkTheme={isDarkTheme}>
      <Head>
        <title>{siteTitle} - Notes</title>
      </Head>

      <section>
        <h2 className="text-3xl mb-14">Notes</h2>
        <ol>
          {posts.map((post) => {
            console.log(post)
            const date = new Date(post.properties.Date.date.start).toLocaleString(
              "en-US",
              {
                month: "short",
                day: "2-digit",
                year: "numeric",
              }
            );

            return (
              <li key={post.id} className="mb-6">
                <LinkGradientDiv className="text-sm link">
                  <time>{date}</time>
                </LinkGradientDiv>

                <Link href={`/notes/${post.id}`} className="text-lg">
                  <a>
                    <Text text={post.properties.Name.title} />
                  </a>
                </Link>
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
