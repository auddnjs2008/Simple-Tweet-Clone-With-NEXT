import { NextApiRequest, NextApiResponse } from "next";
import withHandler from "../../../lib/server/withHandler";
import db from "../../../lib/db";
import { withApiSession } from "../../../lib/server/withSession";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { message } = req.body;
    const tweet = await db.tweet.create({
      data: {
        message,
        userId: (req.session as any).user.id,
      },
    });

    return res.json({ ok: true, tweet });
  } catch (e) {
    return res.json({ ok: false, error: e });
  }
};

export default withApiSession(withHandler("POST", handler));
