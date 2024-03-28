import type { NextApiRequest, NextApiResponse } from "next";
import { getPostList } from "src/lib/microcms";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const postResponse = await getPostList({
    q: req.body.q,
    filters: req.body.filters,
    fields: "id,title,caption,target,done",
    offset: 0,
    limit: 100,
  });

  res.status(200).json(postResponse);
};

export default handler;
