import Layout from "@components/Layout";
import { getSession, signOut } from "next-auth/client";

export default function Home({ session }) {
  return (
    <Layout>
      {!session && (
        <div className="mt-8 text-center">
          <h1 className="text-gray-700 text-2xl font-bold">
            Sign in to get started.
          </h1>
        </div>
      )}
      {session && (
        <div className="mt-8 flex  flex-col justify-center items-center">
          <h1 className="text-gray-700 text-4xl font-bold">
            Welcome back {session?.user?.name}
          </h1>
          <div className="mt-6">
            <button
              className="px-3 py-1 bg-white border border-gray-800 text-gray-800 font-medium rounded-md hover:text-gray-600"
              onClick={signOut}
            >
              Sign out
            </button>
          </div>
        </div>
      )}
    </Layout>
  );
}

export async function getServerSideProps(ctx) {
  const session = await getSession(ctx);

  return {
    props: {
      session,
    },
  };
}
