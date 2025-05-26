// index.js
const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db');
const app = express();
const PORT = 3000;

app.use(bodyParser.json());

// Root route
app.get('/', (req, res) => {
  res.send('📚 Book Store API is running');
});

// Get all books
app.get('/books', (req, res) => {
  db.query('SELECT * FROM books', (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
});

// Add a new book
app.post('/books', (req, res) => {
  const { title, author, price, publishedDate } = req.body;
  const sql = 'INSERT INTO books (title, author, price, publishedDate) VALUES (?, ?, ?, ?)';
  db.query(sql, [title, author, price, publishedDate], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({
      message: '✅ Book added successfully',
      book: { id: result.insertId, title, author, price, publishedDate }
    });
  });
});

// Update a book by ID
app.put('/books/:id', (req, res) => {
  const { id } = req.params;
  const { title, author, price, publishedDate } = req.body;
  const sql = 'UPDATE books SET title = ?, author = ?, price = ?, publishedDate = ? WHERE id = ?';
  db.query(sql, [title, author, price, publishedDate, id], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: '✅ Book updated successfully' });
  });
});

// Delete a book by ID
app.delete('/books/:id', (req, res) => {
  const { id } = req.params;
  const sql = 'DELETE FROM books WHERE id = ?';
  db.query(sql, [id], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: '🗑️ Book deleted successfully' });
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
