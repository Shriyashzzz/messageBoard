# Messages App

A simple messaging web app built with **Node.js**, **Express**, and **EJS**. Users can browse a feed of messages, post new ones via a modal dialog, and view individual message details on their own page.

---

## Tech Stack

- **Runtime** — Node.js
- **Framework** — Express
- **Templating** — EJS
- **Styling** — Vanilla CSS.

---

## Project Structure

```
├── public/
│   ├── index.css           # Main feed page styles
│   ├── message.css         # Message partial styles
│   └── message-detail.css  # Message detail page styles
├── routes/
│   ├── homeRoute.js        # GET / — message feed
│   ├── newMessageRouter.js # POST /new — create message
│   └── detailsRoute.js     # POST /message/:messageId — detail view
├── views/
│   ├── index.ejs           # Feed page
│   ├── message.ejs         # Message partial (included in feed)
│   └── message-detail.ejs  # Full message detail page
└── app.js                  # Express entry point
```

---

## Getting Started

**1. Install dependencies**

```bash
npm install
```

**2. Start the server**

```bash
node app.js
```

**3. Open in your browser**

```
http://localhost:8080
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

## Stylesheets

All CSS files live in `public/` and are served statically by Express. Each page links to its own stylesheet:

| File                 | Used by                       |
| -------------------- | ----------------------------- |
| `index.css`          | `views/index.ejs`             |
| `message.css`        | `views/message.ejs` (partial) |
| `message-detail.css` | `views/message-detail.ejs`    |

**Made with <3 while going through the NodeJs section of The Odin Project**
