import NextAuth from "next-auth"
import type { NextApiRequest, NextApiResponse } from "next"

const handler = NextAuth({
  ...
})
export default async function auth(req: NextApiRequest, res: NextApiResponse) {
  // Do whatever you want here, before the request is passed down to `NextAuth`
  return await NextAuth(req, res, {
    ...
  })
}

export { handler as GET, handler as POST }