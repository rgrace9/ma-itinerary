const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");

const app = express();

app.use(
  "/api",
  createProxyMiddleware({
    target: "https://api.yelp.com/v3/",
    changeOrigin: true,
  })
);
app.listen(3001);
