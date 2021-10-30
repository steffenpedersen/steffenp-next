import Head from "next/head";
import Link from "next/link";
import React, { Fragment } from "react";
import styled from "styled-components";
import { getBlocks, getDatabase, getPage } from "../../app/lib/notion";
import { renderBlock, Text } from "../../app/lib/posts";
import Boop from "../../components/boop";
import Date from "../../components/date";
import Layout, { siteTitle } from "../../components/layout";
import { GradientBackground } from "../../styles/components";
import { databaseId } from "../posts";

const LinkGradientDiv = styled.div`
  ${GradientBackground}
`;

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

export default function Post({ page, blocks }) {
  if (!page || !blocks) {
    return <div />;
  }
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <Article>
        <Headline>
          <Text text={page.properties.Name.title} />
        </Headline>

        <LinkGradientDiv className="text-sm">
          <Date dateString={page.properties.Date.date.start} />
        </LinkGradientDiv>

        <Content>
          {blocks.map((block) => (
            <Fragment key={block.id}>{renderBlock(block)}</Fragment>
          ))}
        </Content>

        <Boop scale={1.02} timing={200}>
          <Button>
            <Link href="/posts">Tilbage</Link>
          </Button>
        </Boop>
      </Article>
    </Layout>
  );
}

export const getStaticPaths = async () => {
  const database = await getDatabase(databaseId);
  return {
    paths: database.map((page) => ({ params: { id: page.id } })),
    fallback: true,
  };
};

export const getStaticProps = async (context) => {
  const { id } = context.params;
  const page = await getPage(id);
  const blocks = await getBlocks(id);

  // Retrieve block children for nested blocks (one level deep), for example toggle blocks
  // https://developers.notion.com/docs/working-with-page-content#reading-nested-blocks
  const childBlocks = await Promise.all(
    blocks
      .filter((block) => block.has_children)
      .map(async (block) => {
        return {
          id: block.id,
          children: await getBlocks(block.id),
        };
      })
  );
  const blocksWithChildren = blocks.map((block) => {
    // Add child blocks if the block should contain children but none exists
    if (block.has_children && !block[block.type].children) {
      block[block.type]["children"] = childBlocks.find(
        (x) => x.id === block.id
      )?.children;
    }
    return block;
  });

  return {
    props: {
      page,
      blocks: blocksWithChildren,
    },
    revalidate: 1,
  };
};
