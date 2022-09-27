import type { NextApiRequest, NextApiResponse } from "next";
import { UserDatas } from "../types";

const database: UserDatas = {
  ari: {
    nome: "arianna",
    cognome: "minucci",
    follower: [],
    address: "0x00sda0f8a0",
    likes: [],
    reposts: [],
  },
  giac: {
    nome: "giacomo",
    cognome: "gagliano",
    follower: [],
    address: "0x00sda0f8a0",
    likes: [],
    reposts: [],
  },
  pol: {
    nome: "giacomo",
    cognome: "gagliano",
    follower: [],
    address: "",
    likes: [],
    reposts: [],
  },
  newuser: {
    nome: "new",
    cognome: "user",
    follower: [],
    address: "",
    likes: [],
    reposts: [],
  },
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<UserDatas>
) {
  res.status(200).json(database);
}
