const app = require("express")();
const bp = require("body-parser");

app.get("/public", function(req, res) {
   res.json({ hello: "world" });
});

app.listen(3000, "0.0.0.0", function() { console.log("Listening on port 3000") });