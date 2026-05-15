# 📺 TV Store — MERN E-Commerce App

A full-stack e-commerce web app for selling TVs, built with the MERN stack.

## Features

- Browse and view TV products
- Shopping cart with quantity controls and discount code input
- Admin dashboard — Add, Edit, Delete products (CRUD via MongoDB)
- Password-protected admin panel

## Tech Stack

| Layer    | Tech                   |
|----------|------------------------|
| Frontend | React.js, React Router |
| Backend  | Node.js, Express.js    |
| Database | MongoDB, Mongoose      |

## Project Structure

```
src/
├── components/
│   ├── admin/         # AdminDashboard, AddProduct, AdminLogin, Product, Sidebar
│   ├── Home.jsx
│   ├── AllProducts.jsx
│   ├── CartPage.jsx
│   ├── Header / Footer
│   ├── About / Contact
└── App.jsx
```

## Getting Started

```bash
# Install dependencies
npm install

# Run frontend
npm run dev

# Run backend (from server folder)
node index.js
```

Add a `.env` file:
```
MONGO_URI=your_mongodb_connection_string
```

## Admin

Access admin panel at `/admin` — credentials required to manage products.