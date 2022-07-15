import { NextApiRequest, NextApiResponse } from "next";
import withHandler from "../../../lib/server/withHandler";
import db from "../../../lib/db";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { name, email, password } = req.body;
  try {
    const user = await db.user.findUnique({
      where: {
        email,
      },
    });

    if (user) return res.json({ ok: false, error: "이미 있는 아이디 입니다." });

    await db.user.create({
      data: {
        name,
        email,
        password,
      },
    });

    return res.json({ ok: true });
  } catch (error) {
    return res.json({ ok: false, error });
  }
};

export default withHandler("POST", handler);
