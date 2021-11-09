const { readFile, readFileSync } = require("fs").promises;
const express = require("express");

// const txt = readFile("./hello.txt", "utf8", (err, txt) => {
//   console.log(txt);
// });

async function hello() {
  const file = await readFile("./hello.txt", "utf8");
  console.log(file);
}

console.log("hello world");

app.get("/", (request, response) => {
  readFile("./home.html", "utf8", (err, html) => {
    if (err) {
      response.staus(500).send("sorry, out of order!");
    }

    response.send(html);
  });
});

app.listen(process.env.PORT || 3000, () => console.log("App available on http://localhost:3000"));
