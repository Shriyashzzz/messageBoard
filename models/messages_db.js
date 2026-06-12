const messages = [
  {
    text: "Hi! Nice to meet you!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello Amando!",
    user: "Charles",
    added: `${new Date().toDateString()} || ${new Date().toLocaleTimeString()}`,
  },
];

export default messages;
