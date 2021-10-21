import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Head from "next/head";
import Date from "../../components/date";
import utilStyles from "../../styles/utils.module.css";
import { GetStaticProps, GetStaticPaths } from "next";
import React from "react";
import Link from "next/link";
import styled from "styled-components";
import { GradientBackground } from "../../styles/components";

export const Article = styled.article`
  max-width: 640px;
  margin-left: auto;
  margin-right: auto;
  white-space: pre-wrap;
`;
export const Headline = styled.h1`
  font-size: 2.25rem;
  line-height: 2.5rem;
  margin-bottom: 1rem;
`;

export const LinkGradientBackground = styled.div`
  font-size: 1rem;
  line-height: 1.5rem;
  margin-bottom: 2rem;

  ${GradientBackground}
`;

export const Content = styled.div`
  font-size: 1rem;
  line-height: 1.5rem;
`;

export const Button = styled.button`
  background: linear-gradient(to bottom, #f06966, #fad6a6);
  margin: 1rem 0;
  padding: 0.5rem 1rem;
  font-size: 0.8rem;
  font-weight: 500;
  color: #0e0e0e;
  border-radius: 50px;
`;

export default function Post({
  postData,
  toggleTheme, 
  isDarkTheme
}: {
  postData: {
    title: string;
    date: string;
    contentHtml: string;
  };
  toggleTheme?: () => void;
  isDarkTheme?: boolean;
}) {
  return (
    <Layout toggleTheme={toggleTheme} isDarkTheme={isDarkTheme}>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <Article>
        <Headline>{postData.title}</Headline>
        <LinkGradientBackground>
          <Date dateString={postData.date} />
        </LinkGradientBackground>
        <Content dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />

        <Button>
          <Link href="/posts">Tilbage</Link>
        </Button>
      </Article>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params.id as string);
  return {
    props: {
      postData,
    },
  };
};
