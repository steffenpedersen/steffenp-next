import Head from "next/head";
import Link from "next/link";
import React, { Fragment } from "react";
import { getBlocks, getDatabase, getPage } from "../../app/lib/notion";
import Boop from "../../components/Boop";
import Date from "../../components/Date";
import Layout, { siteTitle } from "../../components/Layout";
import RenderBlock from "../../components/RenderBlock";
import Text from "../../components/Text";
import { DateGradient, Wrapper } from "../../styles/components";
import { databaseId } from "../posts";
import { Article, Button, Content, Headline } from "./posts";

export default function Post({ page, blocks }) {
  console.log(blocks);
  if (!page || !blocks) {
    return <div />;
  }
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <Wrapper>
        <Article>
          <Headline>
            <Text text={page.properties.Name.title} />
          </Headline>

          <DateGradient className="text-sm mb-12">
            <Date dateString={page.properties.Date.date.start} />
          </DateGradient>

          <Content>
            {blocks.map((block) => (
              <Fragment key={block.id}>{RenderBlock(block)}</Fragment>
            ))}
          </Content>
        </Article>

        <Boop scale={1.02} timing={200}>
          <Button>
            <Link href="/posts">Tilbage</Link>
          </Button>
        </Boop>
      </Wrapper>
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
