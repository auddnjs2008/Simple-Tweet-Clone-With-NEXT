import { NextApiRequest, NextApiResponse } from "next";
import withHandler from "../../../../lib/server/withHandler";
import db from "../../../../lib/db";
import { withApiSession } from "../../../../lib/server/withSession";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { id } = req.query;
    const tweetInfo = await db.tweet.findUnique({
      where: {
        id: +id,
      },
      include: {
        writer: {
          select: {
            name: true,
            email: true,
          },
        },
      },
    });

    const isLiked = Boolean(
      await db.fav.findFirst({
        where: {
          tweetId: +id,
          userId: (req.session as any).user.id,
        },
        select: {
          id: true,
        },
      })
    );
    return res.json({ ok: true, tweetInfo, isLiked });
  } catch (error) {
    return res.json({ ok: false, error });
  }
};

export default withApiSession(withHandler("GET", handler));
