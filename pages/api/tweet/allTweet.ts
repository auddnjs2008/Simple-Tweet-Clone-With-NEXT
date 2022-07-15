import { NextApiRequest, NextApiResponse } from "next";
import withHandler from "../../../lib/server/withHandler";
import db from "../../../lib/db";
import { withApiSession } from "../../../lib/server/withSession";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const tweets = await db.tweet.findMany({
      include: {
        writer: {
          select: {
            name: true,
            email: true,
          },
        },
      },
    });
    return res.json({ ok: true, tweets });
  } catch (error) {
    return res.json({ ok: false, error });
  }
};

export default withApiSession(withHandler("GET", handler));
