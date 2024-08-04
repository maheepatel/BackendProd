require("dotenv").config();
const express = require("express");
const app = express();
const port = 4000;

const githubData = {
  login: "maheepatel",
  id: 94748738,
  node_id: "U_kgDOBaXAQg",
  avatar_url: "https://avatars.githubusercontent.com/u/94748738?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/maheepatel",
  html_url: "https://github.com/maheepatel",
  followers_url: "https://api.github.com/users/maheepatel/followers",
  following_url:
    "https://api.github.com/users/maheepatel/following{/other_user}",
  gists_url: "https://api.github.com/users/maheepatel/gists{/gist_id}",
  starred_url: "https://api.github.com/users/maheepatel/starred{/owner}{/repo}",
  subscriptions_url: "https://api.github.com/users/maheepatel/subscriptions",
  organizations_url: "https://api.github.com/users/maheepatel/orgs",
  repos_url: "https://api.github.com/users/maheepatel/repos",
  events_url: "https://api.github.com/users/maheepatel/events{/privacy}",
  received_events_url:
    "https://api.github.com/users/maheepatel/received_events",
  type: "User",
  site_admin: false,
  name: "Mahendar Patel",
  company: null,
  blog: "",
  location: null,
  email: null,
  hireable: null,
  bio: "React Developer | Learning Solidity ",
  twitter_username: null,
  public_repos: 35,
  public_gists: 0,
  followers: 10,
  following: 32,
  created_at: "2021-11-20T13:46:37Z",
  updated_at: "2024-07-24T15:40:56Z",
};

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/twitter", (req, res) => {
  res.send("Twitter API");
});

app.get("/login", (req, res) => {
  res.send("<h1>Login Page</h1>");
});

app.get("/youtube", (req, res) => {
  res.send("<h2>Chai or code</h2>");
});
app.get("/github", (req, res) => {
  res.json(githubData);
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
