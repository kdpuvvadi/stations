import data from "./stations.json";

export default function handler(req, res) {
  res.status(200).json(data);
}
