import Head from "next/head";
import React, { Fragment } from "react";
import { getFirstParagraph } from "../../app/helpers/postsHelper";
import { getBlocks, getDatabase, getPage } from "../../app/services/notion";
import ButtonWithText from "../../components/Button/ButtonWithText";
import Date from "../../components/Date";
import Layout from "../../components/Layout";
import MetaTags from "../../components/MetaTags";
import RenderBlock from "../../components/RenderBlock";
import Text from "../../components/Text";
import { DateGradient, Wrapper } from "../../styles/components";
import { Article, Content, Headline } from "../../styles/posts";
import { databaseId } from "../notes";
import {
  BlockObjectResponse,
  PageObjectResponse,
} from "@notionhq/client/build/src/api-endpoints";

export default function Note({ page, blocks }: { page: PageObjectResponse; blocks: BlockObjectResponse[] }) {
  if (!page || !blocks) {
    return <div />;
  }

  return (
    <Layout>
      <Head>
        <title>{page.properties.Name.title[0].text.content}</title>
        <MetaTags description={getFirstParagraph(blocks).slice(0, 155)} />
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

        <ButtonWithText text={"Back"} link={"/notes"} />
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
      // @ts-ignore
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
    // @ts-ignore
    if (block.has_children && !block[block.type].children) {
      // @ts-ignore
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
