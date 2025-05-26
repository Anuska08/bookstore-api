# 📚 Bookstore API

A simple REST API built with Node.js, Express, and MySQL to manage books.

## Features
- Add, view, update, and delete books
- Data stored in MySQL

## API Endpoints
| Method | Endpoint      | Description         |
|--------|---------------|---------------------|
| GET    | /books        | Get all books       |
| POST   | /books        | Add a new book      |
| PUT    | /books/:id    | Update a book by ID |
| DELETE | /books/:id    | Delete a book by ID |

## Setup
1. Clone repo:  
   `git clone https://github.com/Anuska08/bookstore-api.git`  
   `cd bookstore-api`

2. Install dependencies:  
   `npm install`

3. Create MySQL database and table:

```sql
CREATE DATABASE bookstore_db;
USE bookstore_db;
CREATE TABLE books (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255),
  author VARCHAR(255),
  price DECIMAL(10,2),
  publishedDate DATE
);
