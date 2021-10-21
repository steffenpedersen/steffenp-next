import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";
import { GetStaticProps } from "next";
import React from "react";
import { GradientBackground, LinkGradient } from "../styles/components";
import styled from "styled-components";

const LinkGradientDiv = styled.div`
  ${GradientBackground}
`;

export default function Posts({
  allPostsData,
  toggleTheme,
  isDarkTheme,
}: {
  allPostsData: {
    date: string;
    title: string;
    id: string;
  }[];
  toggleTheme?: () => void;
  isDarkTheme?: boolean;
}) {
  return (
    <Layout toggleTheme={toggleTheme} isDarkTheme={isDarkTheme}>
      <Head>
        <title>{siteTitle} - Blog</title>
      </Head>
      <section>
        <h2 className="text-3xl mb-14">Blog</h2>
        <ul>
          {allPostsData.map(({ id, date, title }) => (
            <li key={id} className="mb-6">
              <LinkGradientDiv className="text-sm link">
                <Date dateString={date} />
              </LinkGradientDiv>

              <Link href={`/posts/${id}`}>
                <a className="text-lg">{title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};
