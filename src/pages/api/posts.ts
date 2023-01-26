import type { NextApiRequest, NextApiResponse } from "next";
import { postsFixture } from "./fixtures/posts.fixture";

export default function postsHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { query, method } = req;

  switch (method) {
    case "GET":
      // Get data from the posts fixture
      res.status(200).json({ posts: postsFixture.items });
      break;
    default:
      res.setHeader("Allow", "GET");
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
