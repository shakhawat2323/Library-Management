
# Library Management API

A RESTful API built using TypeScript, Express.js, and MongoDB for managing books and borrowing activities in a library system.

## 🚀 Features

- ✅ Add, update, get, and delete books.
- ✅ Borrow books with validation and availability logic.
- ✅ Aggregation pipeline for borrow summary.
- ✅ Error handling & filtering.



## 🛠️ Tech Stack

-  ### Node.js
- ### Express.js
- ### TypeScript
- ### MongoDB with Mongoose
-  ### Dotenv for environment variables


 ## 🛠️ Setup Instructions

 
## Running Tests

 ###	1. Clone the repository:

```bash
  git clone  https://github.com/shakhawat2323/Library-Management
  cd Library-Management
```

## 2. Install dependencies

```bash
npm  i
```

## Run the server:

```bash
 npm  run dev
```


The server will start on ` http://localhost:5000`. 


# 📚Book Management

## 1. Create a Book

### POST `/api/books`

* ### Request Body:

```bash
{
  "title": "The Theory of Everything",
  "author": "Stephen Hawking",
  "genre": "SCIENCE",
  "isbn": "9780553380163",
  "description": "An overview of cosmology and black holes.",
  "copies": 5,
  "available": true
}

```

- ##  Response:

```bash
{
  "success": true,
  "message": "Book created successfully",
  "data": { ... }
}

```

## 2. Get All Books

### GET `/api/books?filter=FANTASY&sortBy=createdAt&sort=desc&limit=5`

## Query Parameters:

- ### filter: Filter by genre (e.g., FICTION, FANTASY)

- ### sort: Sorting order (asc or desc)

- ### limit: Number of results (default: 10)


- ## Response:

```bash
{
  "success": true,
  "message": "Books retrieved successfully",
  "data": [ ... ]
}
```

##  3. Get a Book by ID


### GET  `/api/books/:bookId`

- ## Response:

```bash
{
  "success": true,
  "message": "Books retrieved successfully",
  "data": [ ... ]
}
```

## 4. Update a Book

### PUT `/api/books/:bookId`

- ## Request Body:

```bash
{
  "success": true,
  "message": "Book updated successfully",
  "data": { ... }
}

```

- ## Response:

```bash
{
  "copies": 10
}

```

## 5. Delete a Book
### Delete  `/api/books/:bookId`

- ## Response:

```bash
{
  "success": true,
  "message": "Book deleted successfully",
  "data": null
}
```

# 🔄 Borrow Management

## 1. Borrow a Book

### POST `/api/borrow`


- ## Request Body:

```bash
{
  "bookId": "65a7b29f4c01d0123a8e8a10",
  "quantity": 1,
  "dueDate": "2025-06-30"
}
```


- ## Response:

```bash
{
  "success": true,
  "message": "Book borrowed successfully",
  "data": { ... }
}
 ```



## 2. Get Borrow Summary,

### GET `/api/borrow`

```bash
{
  "success": true,
  "message": "Borrowed books summary retrieved successfully",
  "data": [
    {
      "book": {
        "title": "The Theory of Everything",
        "isbn": "9780553380163"
      },
      "totalQuantity": 5
    },
    {
      "book": {
        "title": "1984",
        "isbn": "9780451524935"
      },
      "totalQuantity": 3
    }
  ]
}

```

## Live Deployment Link  :  ` https://library-management-rouge-nine.vercel.app`

## GitHub Repository Link : ` https://github.com/shakhawat2323/Library-Management.git `
