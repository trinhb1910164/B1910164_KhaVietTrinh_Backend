const express = require("express");
const contactsRouter = require("./app/routes/contact.route");
const cors = require("cors");

const app = express();

app.use(cors());
app.use("/api/contacts", contactsRouter);
app.use(express.json());

module.exports = app;