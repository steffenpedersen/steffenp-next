import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";
import { getDatabase } from "../app/services/notion";
import Date from "../components/Date";
import Layout from "../components/Layout";
import MetaTags from "../components/MetaTags";
import Text from "../components/Text";
import { DateGradient } from "../styles/components";

export const databaseId = process.env.NOTION_NOTES_ID;

const StyledLink = styled(Link)`
  font-size: 1.5em;
`;

export default function NewBlog({ posts }) {
  const released = posts.filter(
    (post) => post.properties.Released.checkbox == true
  );

  return (
    <Layout>
      <Head>
        <title>Notes</title>
        <MetaTags />
      </Head>

      <section>
        <h1 className="text-5xl mb-14">Notes</h1>
        <ol>
          {released.map((post) => {
            return (
              <li key={post.id} className="mb-6">
                <DateGradient className="text-sm">
                  <Date dateString={post.properties.Date.date.start} />
                  {" - "}
                  <span>{post.properties.Tags.select.name}</span>
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
  const posts = databaseId ? await getDatabase(databaseId) : [];

  return {
    props: {
      posts,
    },
  };
};
