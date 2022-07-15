import { NextApiRequest, NextApiResponse } from "next";
import withHandler from "../../../lib/server/withHandler";
import db from "../../../lib/db";
import { withApiSession } from "../../../lib/server/withSession";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const findUser = await db.user.findUnique({
      where: {
        id: (req.session as any).user.id,
      },
    });

    return findUser
      ? res.json({ ok: true, findUser })
      : res.json({ ok: false, error: "유저 없습니다." });
  } catch (error) {
    return res.json({ ok: false, error: "api 오류" });
  }
};

export default withApiSession(withHandler("GET", handler));
