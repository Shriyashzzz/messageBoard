import { Client } from "pg";
import process from "node:process";
const now = `${new Date().toDateString()} ${new Date().toLocaleTimeString()}`;

const SQL = `
    CREATE TABLE IF NOT EXISTS messages (
        id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
        user_name VARCHAR(30) NOT NULL,
        text VARCHAR(180) NOT NULL,
        added VARCHAR(50) NOT NULL
    );

    INSERT INTO messages (user_name, text, added) VALUES ('Amando', 'Hi nice to meet you', '${now}');
    INSERT INTO messages (user_name, text, added) VALUES ('Charles', 'Hello Amando!', '${now}');
`;

async function main() {
  console.log("seeding...");
  //connect to the new database
  const client = new Client({
    connectionString: process.env.DATABASE_URL,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}
main();
