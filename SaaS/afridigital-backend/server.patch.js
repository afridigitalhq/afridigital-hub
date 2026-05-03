const path = require("path");

app.use(express.static(path.join(__dirname, "../afridigital-frontend/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../afridigital-frontend/dist/index.html"));
});
