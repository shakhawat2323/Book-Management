# 📚 Minimal Library Management System

A clean and functional client-side application for managing books and borrow records in a library. Built using **React**, **Redux Toolkit Query (RTK Query)**, and **TypeScript**, this system enables basic library operations like viewing books, adding new ones, updating and deleting them, borrowing, and tracking borrowed book summaries — all without requiring authentication.

---

## 🚀 Features

## 🌐 Live Demo

🔗 [Live Site](https://books-mangement.netlify.app)

### 📖 Book Management
- **Books List** with table view showing:
  - Title, Author, Genre, ISBN, Copies, Availability
- **Action Buttons**:
  - ✏️ Edit Book (with prefilled form modal)
  - 🗑️ Delete Book (with confirmation)
  - 📘 Borrow Book (opens borrow form)
- **Add Book**:
  - Modal/form to add a new book with fields like title, author, genre, etc.
- **Business Logic**:
  - When copies = 0, availability is set to false.
  - Copies and availability are updated accordingly after borrow.

### 📦 Borrow Management
- Borrow from book list with quantity and due date.
- Quantity cannot exceed available copies.
- Borrowed book count is tracked.
- Redirection to borrow summary after success.

### 📊 Borrow Summary
- Aggregated summary of all borrowed books.
- Columns: Book Title, ISBN, Total Quantity Borrowed.
- Retrieved via aggregation pipeline from backend.

---

## 🧩 Tech Stack

| Tech               | Description                      |
|--------------------|----------------------------------|
| React              | Frontend framework               |
| TypeScript         | Type safety                      |
| Tailwind CSS       | Styling                          |
| Redux Toolkit      | State management                 |
| RTK Query          | API calls and caching            |
| MongoDB            | Backend database (via Mongoose)  |
| Express + Node.js  | Backend API (Modular MVC pattern)|

---

## 🖼️ UI Components

- **Navbar** – Navigation links to all core pages
- **Book Table** – Core list of books with action icons
- **Modals** – For editing and borrowing books
- **Forms** – For create and borrow actions
- **Footer** – Clean and simple credits

---



## 💡 Bonus Features (Implemented)

- ✅ Optimistic UI Updates
- ✅ Toast Notifications (`sonner`)
- ✅ Fully Responsive Layout (Tailwind)
- ✅ Type-Safe Forms with Material UI + TS

---

## 🗃️ Backend Overview

### 📚 Book Model
- title: string
- author: string
- genre: enum
- isbn: number
- description: string
- copies: number
- available: boolean

### 🔁 Borrow Model
- book:string
- quantity: number
- dueDate: date





---

## 🔌 API Integration

- Fully integrated using RTK Query
- Auto-caching, re-fetching, and cache invalidation
- Typed endpoints and responses with TypeScript

---

## 🧪 Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/shakhawat2323/Book-Management.git
   cd library-management


## 2. Install dependencies

```bash
npm  i
```

## Run the server:

```bash
 npm  run dev
```

# Submission:


🔗 [GitHub Repository Frontend Link](https://github.com/shakhawat2323/Book-Management.git)

🔗 [GitHub Repository Backend Link](https://github.com/shakhawat2323/Book-Management-Server.git )

🔗 [Live Site](https://books-mangement.netlify.app)
