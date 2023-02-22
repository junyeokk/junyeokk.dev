import Head from "next/head";
import Layout from "../components/layout";
import Hero from "../components/Home/hero";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>junyeokk.dev</title>
        <meta name="description" content="junyeokk's dev blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="flex min-h-screen flex-column items-center justify-center text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <Hero />
        </div>
      </section>
    </Layout>
  );
}
