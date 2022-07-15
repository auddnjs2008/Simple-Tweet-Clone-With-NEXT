import { withIronSessionApiRoute } from "iron-session/next";
import { NextApiRequest, NextApiResponse } from "next";

const cookieOptions = {
  cookieName: "pangWeet",
  password: process.env.COOKIE_PASSWORD!,
};

export const withApiSession = (
  handler: (req: NextApiRequest, res: NextApiResponse) => void
) => withIronSessionApiRoute(handler, cookieOptions);
