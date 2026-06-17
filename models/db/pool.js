import { Pool } from "pg";
import { argv } from "node:process";
export const pool = new Pool({
  connectionString: argv[2],
});
