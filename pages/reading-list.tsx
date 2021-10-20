import Layout, { siteTitle } from "../components/layout";
import { Client } from "@notionhq/client";
import { useEffect } from "react";
import { GradientBackground } from "../styles/components";
import styled from "styled-components";
import { getDatabase } from "../lib/notion";

const LinkGradientDiv = styled.div`
  ${GradientBackground}
`;

const databaseId = process.env.NOTION_READING_LIST_ID;

export default function Recommendations({ results, toggleTheme, isDarkTheme }) {
  const getDatabaseDisplay = () => {
    let listOfArticles = [];
    results.forEach((article) => {
      listOfArticles.push(
        <div className="mb-6">
          <LinkGradientDiv className="text-sm link">
            <p>{article.properties.Tags.select.name}</p>
          </LinkGradientDiv>

          <a href={article.properties.URL.url}>
            {article.properties.Name.title[0].plain_text}
          </a>
        </div>
      );
    });
    return listOfArticles;
  };

  return (
    <Layout toggleTheme={toggleTheme} isDarkTheme={isDarkTheme}>
      <section>
        <h2 className="text-3xl mb-14">Reading List</h2>
        {getDatabaseDisplay()}
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const database = await getDatabase(databaseId);

  return {
    props: {
      results: database,
    },
    revalidate: 1,
  };
}
