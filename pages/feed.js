import Layout from "@components/Layout";
import { getSession } from "next-auth/client";

export async function getServerSideProps(ctx) {
  const session = await getSession(ctx);

  if (!session) {
    ctx.res.writeHead(302, { Location: "/auth/signin" });
    ctx.res.end();
  }

  return {
    props: {},
  };
}

function feed() {
  return (
    <Layout>
      <div className="mt-16">
        <h1 className="text-2xl text-gray-800 text-center font-bold">
          You are authorized to see the feed
        </h1>
      </div>
    </Layout>
  );
}

export default feed;
