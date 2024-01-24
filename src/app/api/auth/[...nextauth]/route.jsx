import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
// import GoogleProvider from "next-auth/providers/google";
import bcrypt from "bcryptjs";
import {connect} from "../../../../dbConfig/dbConfig";
import User from '../../../../models/userModel';


connect();


 const authOptions = {
  providers: [
    // GoogleProvider({
    //   clientId: process.env.GOOGLE_ID,
    //   clientSecret: process.env.GOOGLE_SECRET,
    // }),
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: {
          label: "Email",
          type: "text",
          placeholder: "example.email.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // console.log(credentials.email);
        // console.log(credentials.password);

        // check to see if email and password is there
        if (!credentials.email || !credentials.password) {
          throw new Error("Please enter an email and password");
        }

        // check to see if user exists
        const user = await User.findOne({
          email: credentials.email,
        });
        console.log(user);

        // if no user was found
        if (!user || !user?.password) {
          throw new Error("No user found");
        }

        // check to see if password matches
        const passwordMatch = await bcrypt.compare(
          credentials.password,
          user.password
        );

        // if password does not match
        if (!passwordMatch) {
          throw new Error("Incorrect password");
        }

        return user;
      },
    }),
  ],
  secret: process.env.SECRET,
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id=user._id
      }

      return token
    },

    async session({ session, token }) {
      if (token) {
        session.user.id=token.id
      }
      return session
    }
  }
  
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
