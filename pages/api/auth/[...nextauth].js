import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import { FirebaseAdapter } from "@next-auth/firebase-adapter";
import firebase from "@lib/firebase";
import { getUser } from "@lib/data";

const firestore = firebase.firestore();

export default NextAuth({
  providers: [
    Providers.GitHub({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
  ],

  callbacks: {
    session: async (session, token) => {
      session.user.id = token.id;
      return session;
    },
  },

  pages: {
    signIn: "/auth/signin",
  },

  adapter: FirebaseAdapter(firestore),
});
