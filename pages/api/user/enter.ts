import { NextApiRequest, NextApiResponse } from "next";
import withHandler from "../../../lib/server/withHandler";
import { withApiSession } from "../../../lib/server/withSession";
import db from "../../../lib/db";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { email, password } = req.body;
    const findUser = await db.user.findUnique({
      where: {
        email,
      },
    });

    if (!findUser)
      return res.json({ ok: false, error: "가입 되지 않은 회원입니다." });

    if (findUser.password === password) {
      (req.session as any).user = { id: findUser.id };
      await req.session.save();
      return res.json({ ok: true });
    } else {
      return res.json({ ok: false, error: "비밀번호가 틀렸습니다." });
    }
  } catch (e) {
    return res.json({ ok: false, error: "api 문제 발생!" });
  }
};

export default withApiSession(withHandler("POST", handler));
