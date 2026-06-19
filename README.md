# Messages App

A simple messaging web app built with **Node.js**, **Express**, and **EJS**. Users can browse a feed of messages, post new ones via a modal dialog, and view individual message details on their own page.

---

## Tech Stack

- **Runtime** — Node.js
- **Framework** — Express
- **Templating** — EJS
- **Styling** — Vanilla CSS.
- **Databse** — PostgreSql.
- **Hosting** — Railway.

---

---

## Getting Started

**1. Install dependencies**

```bash
npm install
```

**2. Insitialize Database**

- **Make sure to initialize a Postgres databse" **

```bash
npm run initdb
```

**3. Start the server**

```bash
node app.js
```

**4. Open in your browser**

```
http://localhost:PORT

-Port Variable can be customized in your .env file, default is 8080
```

---

## Routes

| Method | Path                  | Description                                |
| ------ | --------------------- | ------------------------------------------ |
| `GET`  | `/`                   | Renders the message feed                   |
| `POST` | `/new`                | Submits a new message from the dialog form |
| `POST` | `/message/:messageId` | Opens the detail view for a single message |

---

## Features

- **Message feed** — lists all messages, each with a "Show More" button
- **New message dialog** — native `<dialog>` element with a form to post a username and message
- **Detail page** — shows the full message with username and date

---

**Made with <3 while going through the NodeJs section of The Odin Project**
