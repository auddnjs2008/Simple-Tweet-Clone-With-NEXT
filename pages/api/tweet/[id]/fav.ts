import { NextApiRequest, NextApiResponse } from "next";
import withHandler from "../../../../lib/server/withHandler";
import { withApiSession } from "../../../../lib/server/withSession";
import db from "../../../../lib/db";

// 하트 아이콘이 이미 등록되어 있으면 삭제,  하트 아이콘이 등록되 있지않으면 등록
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query;
  const existFav = await db.fav.findFirst({
    where: {
      tweetId: +id,
      userId: +(req.session as any).user.id,
    },
  });
  try {
    if (existFav) {
      await db.fav.delete({
        where: {
          id: existFav.id,
        },
      });
    } else {
      await db.fav.create({
        data: {
          user: {
            connect: {
              id: +(req.session as any).user.id,
            },
          },
          tweet: {
            connect: {
              id: +id,
            },
          },
        },
      });
    }

    return res.json({ ok: true });
  } catch (e) {
    return res.json({ ok: false, error: e });
  }
};

export default withApiSession(withHandler("POST", handler));
