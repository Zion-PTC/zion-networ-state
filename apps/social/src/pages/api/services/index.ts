import type { NextApiRequest, NextApiResponse } from "next";
import { ServiceDatas } from "../types";

const database: ServiceDatas = {
  mixdowngotek: {
    id: 0,
    title: "mixdowngotek",
    descrizione: "Mixdown multitraccia",
    createdBy: ["giac"],
    likes: ["ari"],
    reposts: [],
    type: "audio-recording",
    znft: true,
  },
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ServiceDatas>
) {
  res.status(200).json(database);
}
