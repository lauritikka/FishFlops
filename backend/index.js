const express = require("express");
const app = express();
const port = 3000;
const path = require("path");

const staticPath = path.join(__dirname, '../UI');
app.use(express.static(staticPath));

app.get('/home', (req, res) => {
    res.sendFile(path.join(staticPath, 'html/home.html'));
});

app.get('/contact', (req, res) => {
    res.sendFile(path.join(staticPath, 'html/contact.html'));
});

app.get('/products', (req, res) => {
    res.sendFile(path.join(staticPath, 'html/products.html'));
});

app.get('/product1', (req, res) => {
    res.sendFile(path.join(staticPath, 'html/product1.html'));
});

app.get('/product2', (req, res) => {
    res.sendFile(path.join(staticPath, 'html/product2.html'));
});

app.get('/product3', (req, res) => {
    res.sendFile(path.join(staticPath, 'html/product3.html'));
});

app.get('/product4', (req, res) => {
    res.sendFile(path.join(staticPath, 'html/product4.html'));
});

app.get('/about', (req, res) => {
    res.sendFile(path.join(staticPath, 'html/about.html'));
});

app.listen(port,() => {
    console.log(`Server running on port ${port}...`);
});

