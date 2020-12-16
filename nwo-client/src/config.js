import env from "dotenv";

// Note use of "process.env" for build environment.
// imported env used in dev environment.
export const BASE_URL = process.env.REACT_APP_BASE_URL || env.REACT_APP_DEV_URL;
