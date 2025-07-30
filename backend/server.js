// server.js
const path = require('path');
require('dotenv').config();
const jsonServer = require("json-server");

const server = jsonServer.create();
const middlewares = jsonServer.defaults();

// بارگذاری محتویات db.json
// توجه کنید که db.json در پوشه‌ی data قرار دارد
const dbFile = path.join(__dirname, 'data', 'db.json');
const { products, articles } = require(dbFile);

// اگر نیاز دارید به lowdb (برای عملیات پیچیده‌تر) دسترسی پیدا کنید:
const router = jsonServer.router(dbFile);
const db = router.db;  // این همون lowdb instance است

server.use(middlewares);
server.get("/search", (req, res) => {
  const { q } = req.query || "";

  // فیلتر در آرایه‌ی products و articles
  const productResults = products.filter(p =>
    p.title.toLowerCase().includes(q.toLowerCase()) ||
    p.body.toLowerCase().includes(q.toLowerCase())
  );
  const articleResults = articles.filter(a =>
    a.title.toLowerCase().includes(q.toLowerCase()) ||
    a.body.toLowerCase().includes(q.toLowerCase())
  );

  const results = [...productResults, ...articleResults];

  // در lowdb می‌توانید چنین چیزی بنویسید:
  db.set('search', results).write();

  res.json(results);
});
// در انتها، بعد از تعریف همه‌ی middlewareها و روت‌های دلخواه
server.use(router);

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`JSON Server is running on http://localhost:${PORT}`);
});
