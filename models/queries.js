import { pool } from "./db/pool.js";

export async function getMessages() {
  const messages = await pool.query("SELECT * FROM messages");
  return messages.rows;
}

export async function addMessagetoDb(givenMessage) {
  pool.query(
    `INSERT INTO messages (user_name, text, date) VALUES ($1,$2, $3)`,
    givenMessage,
  );
}

export async function queryMessageFormId(givenId) {
  const message = await pool.query(
    `SELECT * FROM messages WHERE  messages.id = $1`,
    givenId,
  );
  return message.rows[0];
}
