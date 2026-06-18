import { Pool } from "pg";
import process from "node:process";
export const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});
