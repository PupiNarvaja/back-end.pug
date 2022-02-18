const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 8080;

const products = require('./database/products.json');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/static", express.static(path.join(__dirname, "public")));
app.use("/docs", express.static(path.join(__dirname, "docs")));

//ENGINES
app.set("views", "./views");
app.set("view engine", "pug");

// ROUTES
const homeRouter = require('./routes/home');
// const categoriesRouter = require('./routes/categories')
const productsRouter = require('./routes/products');

// pugEngine(app);
// app.use("/pug", pugRouter);

app.use("/", homeRouter);
app.use("/products", productsRouter);

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));