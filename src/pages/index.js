import Head from "next/head";
import Landing from "../components/home/Landing";
import Layout from "../components/layout/Layout";

export default function Home() {
  return (
    <>
      <Head>
        <title>Next tailwind setup</title>
        <meta name="description" content="Next tailwind setup for easy work." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Landing />
      </Layout>
    </>
  );
}
