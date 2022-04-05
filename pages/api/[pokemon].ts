import type { NextApiRequest, NextApiResponse } from "next";
import NextCors from "nextjs-cors";
import { createDataScript } from "../../db/scripts/createDataScript";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await NextCors(req, res, {
    // Options
    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
    origin: "*",
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  });

  const pokemon = req.query.pokemon as string;

  let result = await createDataScript(pokemon);

  res.status(200).json({ result });
}
