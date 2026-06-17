import { Client } from "pg";
import { argv } from "node:process";

const now = `${new Date().toDateString()} ${new Date().toLocaleTimeString()}`;

const SQL = `
    CREATE TABLE IF NOT EXISTS messages (
        id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
        user_name VARCHAR(30) NOT NULL,
        text VARCHAR(50) NOT NULL,
        added VARCHAR(50) NOT NULL
    );

    INSERT INTO messages (user_name, text, added) VALUES ('Amando', 'Hi nice to meet you', '${now}');
    INSERT INTO messages (user_name, text, added) VALUES ('Charles', 'Hello Amando!', '${now}');
`;

async function main() {
  console.log("seeding...");
  console.log(`given connection path: ${argv[2]}`);
  // Step 1: connect to postgres to create the database
  const initClient = new Client({
    connectionString: argv[2],
  });
  await initClient.connect();
  try {
    //create the database if it does not exist
    await initClient.query(`CREATE DATABASE messages`);
  } catch (e) {
    console.log(e.message);
  }
  await initClient.end();
  //connect to the new database
  const client = new Client({
    connectionString: argv[3],
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();
