import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";
import { GetStaticProps } from "next";
import Image from "next/image";
import styled from "styled-components";

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.text};
`;

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <Title>Test</Title>
      <div className="md:mr-8 max-w-2xl text-3xl">
        <p className="mb-8">
          Hello, my name is{" "}
          <a href="mailto:steffen.pedersen@live.dk" className="link">
            Steffen Pedersen
          </a>
          .
        </p>
        <p className="mb-8">
          I work as a Frontend Developer at Jyllands-Posten and on my side
          project Bleptek.
        </p>
        <p>I also sometimes write an article or write some music.</p>
      </div>
      <div className="md:ml-8 flex justify-center flex-1">
        <div>
          <Image
            className="rounded-full drop-shadow-md"
            priority
            src="/images/profile.png"
            height={300}
            width={300}
            alt="Steffen Pedersen"
          />
        </div>
      </div>
    </Layout>
  );
}
