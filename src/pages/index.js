import Head from "next/head";
import Blog from "../components/home/Blog";
import Landing from "../components/home/Landing";
import Projects from "../components/home/Projects";
import Videos from "../components/home/Videos";
import Layout from "../components/layout/Layout";

import video from "../videos";

export default function Home() {
  return (
    <>
      <Head>
        <title>Welcome to Normalized nerd</title>
        <meta name="description" content="Welcome to Normalized nerd." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Landing />
        <Videos data={video} />
        <Blog />
        <Projects />
      </Layout>
    </>
  );
}
