import { Pool } from "pg";
import { argv } from "node:process";
import { env } from "node:process";

export const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});
