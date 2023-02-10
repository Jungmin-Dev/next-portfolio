import Head from "next/head";
import Layout from "../../components/layout";
import Hero from "../../components/Home/hero";

export default function Home() {
  return (
    <>
      <Head>
        <title>식빵이의 포트폴리오</title>
        <meta name="description" content="오늘도 !!!!!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
      <section className="flex min-h-screen flex-col text-gray-600 body-font items-center justify-center">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <Hero/>
        </div>
      </section>
      </Layout>
    </>
);
}
