import Head from "next/head";
import { Fragment } from "react";
import { getFirstParagraph, getImageUrl } from "../../app/helpers/postsHelper";
import { getBlocks, getDatabase, getPage } from "../../app/services/notion";
import ArticleInformation, { Distance } from "../../components/ArticleInformation";
import ButtonWithText from "../../components/Button/ButtonWithText";
import Layout from "../../components/Layout";
import MetaTags from "../../components/MetaTags";
import RenderBlock from "../../components/RenderBlock";
import Text from "../../components/Text";
import { Wrapper } from "../../styles/components";
import { Article, Content, Headline } from "../../styles/posts";
import { databaseId } from "../writings";

export default function Writing({ page, blocks }) {
  if (!page || !blocks) {
    return <div />;
  }
  return (
    <Layout>
      <Head>
        <title>{page.properties.Name.title[0].text.content}</title>
        <MetaTags
          description={getFirstParagraph(blocks).slice(0, 155)}
          ogImage={getImageUrl(blocks)}
        />
      </Head>

      <Wrapper>
        <Article>
          <Headline>
            <Text text={page.properties.Name.title} />
          </Headline>

          <ArticleInformation
            date={page.properties.Date.date.start}
            multi_select={page.properties.Tags.multi_select}
            distance={Distance.LARGE}
            notes={page.properties.Notes.checkbox}
          />

          <Content>
            {blocks.map((block) => (
              <Fragment key={block.id}>{RenderBlock(block)}</Fragment>
            ))}
          </Content>
        </Article>

        <ButtonWithText text={"Back"} link={"/writings"} />
      </Wrapper>
    </Layout>
  );
}

export const getStaticPaths = async () => {
  const database = databaseId ? await getDatabase(databaseId) : [];
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
        (childBlock) => childBlock.id === block.id
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
