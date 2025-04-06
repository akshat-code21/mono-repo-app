import express from "express";
const app = express();
app.use(express.json());
import { client } from "@repo/db/client";
app.get("/", (req, res) => {
  res.send("Hi there");
});
app.post("/signup", async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await client.users.create({
      data: {
        username,
        password,
      },
    });
    res.json({
      message: "User created",
      id : user.id
    });
  } catch (e) {
    res.json({
        message : e
    })
  }
});
app.listen(3001);
