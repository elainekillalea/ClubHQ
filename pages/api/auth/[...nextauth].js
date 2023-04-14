import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      const isAllowedToSignIn = true
      if (isAllowedToSignIn) {
        return true
      } else {
        // Return false to display a default error message
        return false
        // Or you can return a URL to redirect to:
        // return '/unauthorized'
      }
    }
  }

  // async signIn(user, account, profile) {
  //   const { email } = user
  //   console.log("log " + user)
  //   if(account.provider === 'google') {
      //check if user is in your database
      // if(user NOT in DB) {
      //     //add your user in DB here with profile data (profile.email, profile.name)
      // }
      // return true
  // }
    // const client = await MongoClient.connect(process.env.MONGODB_URI, {
    //   useNewUrlParser: true,
    //   useUnifiedTopology: true,
    // })
    // const db = client.db()

    // const existingUser = await db.collection('students').findOne({ email: email })
    // if (existingUser) {
    //   return Promise.resolve(user)
    // } else {
    //   return Promise.reject(new Error('Invalid credentials'))
    // }
  // },
});
