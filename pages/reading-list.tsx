import Layout, { siteTitle } from "../components/layout";
import { Client } from "@notionhq/client";
import { useEffect } from "react";
import { GradientBackground } from "../styles/components";
import styled from "styled-components";

const LinkGradientDiv = styled.div`
  ${GradientBackground}
`;

export default function Recommendations({ results }) {
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
    <Layout>
      <section>
        <h2 className="text-3xl mb-14">Reading List</h2>
        {getDatabaseDisplay()}
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const notion = new Client({ auth: process.env.NOTION_API_KEY });
  
  const databaseId = "46a002f0b78645889d0e73c140e06ad4";
  const response = await notion.databases.query({
    database_id: databaseId,
  });

  return {
    props: {
      results: response.results,
    },
  };
}
