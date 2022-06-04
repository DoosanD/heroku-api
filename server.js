const express = require("express")();
const app = express;
const PORT = 8000;

const rappers = {
  "21 savage": { age: 29, name: "bin", location: "london" },
  " chance the dog": { age: 29, name: "chancelor", location: "usa" },
  "unknown ": { age: 0, name: "unknown", location: "unknown" },
};

app.get("/", (request, response) => {
  response.sendFile(__dirname + "/index.html");
});

app.get("/api", (request, response) => {
  //   const rapperName = request.params.name.toLowerCase();
  //   if (rappers[rapperName]) {
  response.json(rappers);
  //   } else {
  //     response.json(rappers["unknown"]);
  //   }
});

app.listen(process.env.PORT || PORT, () => {
  console.log("its alive");
});
