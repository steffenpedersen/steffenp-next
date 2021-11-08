import Head from "next/head";
import React from "react";
import Layout from "../components/Layout";

export default function CV() {
  return (
    <Layout>
      <Head>
        <title>CV</title>
      </Head>

      <section>
        <h2 className="text-3xl mb-14">CV</h2>
      </section>
    </Layout>
  );
}
