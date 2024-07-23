import express from "express";
const port = process.env.PORT || "3000";
const app = express();

app.get("/", (_req, res) => {
    res.send("Hello World");
});

app.listen(port, () => {
    console.log("Server is listening at port ", port);
});
