import env from "dotenv";

console.log("HEY! --> ", process.env.REACT_APP_DEV_URL);

export const BASE_URL =
  process.env.REACT_APP_BASE_URL ||
  `http://${process.env.REACT_APP_DEV_URL}:5000`;
