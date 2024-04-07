// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  res.status(200).json({ name: "John Doe" });
}

export const cardsData = [
  { feature: "/Rectangle 24.png", title: "movie", year: "2021" },
  { feature: "/Rectangle 25.png", title: "movie", year: "2021" },
  { feature: "/Rectangle 24.png", title: "movie", year: "2021" },
  { feature: "/Rectangle 23.png", title: "movie", year: "2021" },
  { feature: "/Rectangle 24.png", title: "movie", year: "2021" },
  { feature: "/Rectangle 25.png", title: "movie", year: "2021" },
  { feature: "/Rectangle 24.png", title: "movie", year: "2021" },
  { feature: "/Rectangle 23.png", title: "movie", year: "2021" },
  { feature: "/Rectangle 24.png", title: "movie", year: "2021" },
  { feature: "/Rectangle 25.png", title: "movie", year: "2021" },
  { feature: "/Rectangle 24.png", title: "movie", year: "2021" },
  { feature: "/Rectangle 23.png", title: "movie", year: "2021" },
  { feature: "/Rectangle 24.png", title: "movie", year: "2021" },
  { feature: "/Rectangle 23.png", title: "movie", year: "2021" },
  { feature: "/Rectangle 23.png", title: "movie", year: "2021" },
  { feature: "/Rectangle 23.png", title: "movie", year: "2021" },
];