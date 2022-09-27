import type { NextApiRequest, NextApiResponse } from "next";
import { ProductData, ProductDatas } from "../types";

const database: ProductDatas = {
  tnl25: {
    id: 0,
    title: "tnl25",
    descrizione: "Il nuovo disco di TNL",
    createdBy: ["giac"],
    likes: ["ari"],
    reposts: ["ari"],
    type: "vinyl",
    znft: true,
  },
  gotekDiscography: {
    id: 1,
    title: "gotekDiscography",
    descrizione: "La discografia completa di Gotek",
    createdBy: ["giac"],
    likes: ["ari"],
    reposts: ["ari"],
    type: "albumdao",
    znft: true,
  },
  gotekPost: {
    id: 2,
    title: "gotekPost",
    descrizione: "Nuovo progetto",
    createdBy: ["giac"],
    likes: ["ari"],
    reposts: ["ari"],
    type: "blog-post",
    znft: false,
  },
  gotekProject: {
    id: 3,
    title: `gotekProject`,
    descrizione: "Il triplice disco best of di Gotek",
    createdBy: ["giac"],
    likes: ["ari"],
    reposts: ["ari"],
    type: "project",
    znft: true,
  },
  aritweet1: {
    id: 4,
    title: "aritweet1",
    descrizione: "In pratica è un tweet",
    createdBy: ["ari"],
    reposts: [],
    type: "tweet",
    znft: false,
    likes: ["giac"],
  },
  aritweet2: {
    id: 5,
    title: "aritweet2",
    descrizione: "E quest è un altro tweet",
    createdBy: ["ari"],
    reposts: ["giac"],
    type: "tweet",
    znft: false,
    likes: ["giac"],
  },
  aritweet3: {
    id: 6,
    title: "aritweet3",
    descrizione: "E quest è un altro tweet ancora",
    createdBy: ["ari"],
    reposts: ["giac"],
    type: "tweet",
    znft: false,
    likes: [],
  },
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ProductDatas>
) {
  res.status(200).json(database);
}
