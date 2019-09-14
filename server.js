"use strict";

const express = require("express");
const redirectToHTTPS = require("express-http-to-https").redirectToHTTPS;

const app = express();

app.use(redirectToHTTPS([/localhost:(\d{4})/], [], 301));

app.use(express.static('public'));

app.listen("8000", () => {
  // eslint-disable-next-line no-console
  console.log("Music Website Server Started on port 8000...");
});