const express = require("express");
const app = express();
const PORT = 3000;
//json形式を明示する
app.use(express.json());
app.listen(PORT, () => {
  console.log("サーバーが起動しました");
});

app.get("/", (req, res) => {
  res.send("Udemy講座");
});

const customers = [
  { title: "tanaka", id: 1 },
  { title: "yamada", id: 2 },
  { title: "nakata", id: 3 },
  { title: "takata", id: 4 },
  { title: "shimoda", id: 5 },
];

app.get("/api/customers", (req, res) => {
  res.send(customers);
});

app.put("/api/customers/:id", (req, res) => {
  const customer = customers.find((c) => c.id === parseInt(req.params.id));
  customer.title = req.body.title;
  res.send(customer);
});

app.delete("/api/customers/:id", (req, res) => {
  const customer = customers.find((c) => c.id === parseInt(req.params.id));

  const index = customers.indexOf(customer);
  customers.splice(index, 1);
  res.send(customer);
});
