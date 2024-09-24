"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app = require("express")();
app.listen(3000, () => {
    console.log("Server running on port 3k");
});
app.get("/", (req, res) => {
    res.send("Chal rha hai");
});
