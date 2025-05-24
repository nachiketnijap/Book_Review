##  Setup Instructions

# Note :
If you want to test without setup, you can test — I have hosted this app on Render.
you can find all apis in postman collection provided below in this readme file

1. **Clone the repository:**

git clone https://github.com/nachiketnijap/Book_Review.git

cd Book_Review

npm install 

I have kept env file for you reference in source code

npm run dev 

# Test Endpoints

If you want to test without setup, you can test — I have hosted this app on Render.

---

## Postman Collection (Remote + Local)

 [Open Postman Collection](https://upload-drive.postman.co/workspace/Book-Review~02a8a198-dee8-4a5c-acf1-0b968a5e61b5/collection/43081572-9daf12a8-69f6-4103-b1e2-500474927c48?action=share&creator=43081572)

---

## 1. Register

**Method:** `POST`  
**Local URL:** `http://localhost:3000/api/auth/register`  
**Remote URL:** `https://book-review-zspi.onrender.com/api/auth/register`  
**Payload:**
```json
{
  "username": "xyz",
  "email": "xyz@gmail.com",
  "password": "xyz"
}
```

---

## 2. Login

**Method:** `POST`  
**Local URL:** `http://localhost:3000/api/auth/login`  
**Remote URL:** `https://book-review-zspi.onrender.com/api/auth/login`  
**Payload:**
```json
{
  "username": "xyz",
  "password": "xyz"
}
```

**Response:** You will get an access token.

---

##  3. Add Book

**Method:** `POST`  
**Local URL:** `http://localhost:3000/api/book/books`  
**Remote URL:** `https://book-review-zspi.onrender.com/api/book/books`  
**Authorization:** Add Bearer token (received after login)  
**Payload:**
```json
{
  "title": "Space",
  "author": "Jack",
  "genre": "Thriller",
  "description": "This is book based on thriller"
}
```

---

##  4. Get All Books

**Method:** `GET`  
**Local URL:** `http://localhost:3000/api/book/books?limit=1&page=2`  
**Remote URL:** `https://book-review-zspi.onrender.com/api/book/books?limit=1&page=2`

---

##  5. Get Book Detail by Book ID

**Method:** `GET`  
**Local URL:** `http://localhost:3000/api/book/books/68313fec3fefeff1ec672d26?limit=1&page=2`  
**Remote URL:** `https://book-review-zspi.onrender.com/api/book/books/68313fec3fefeff1ec672d26?limit=1&page=2`

**Note:**  ID provided is the book ID  that you will get from get book endpoint
---

##  6. Submit a Review

**Method:** `POST`  
**Local URL:** `http://localhost:3000/api/review/books/68313fec3fefeff1ec672d26/reviews`  
**Remote URL:** `https://book-review-zspi.onrender.com/api/review/books/68313fec3fefeff1ec672d26/reviews`  
**Note:** ID provided is the book ID  that you will get from get book endpoint
**Authorization:** Add Bearer token (received after login)
**Payload:**
```json
{
  "comment": "modified",
  "rating": 5
}
```

---

##  7. Update Your Own Review

**Method:** `PUT`  
**Local URL:** `http://localhost:3000/api/review/reviews/6831488bc5b8d06714eac700`  
**Remote URL:** `https://book-review-zspi.onrender.com/api/review/reviews/6831488bc5b8d06714eac700`  
**Authorization:** Add Bearer token (received after login)  
**Note:** Provide access token of the user who added this review.  
The ID provided in URL is received in the response when you submit a review.  
**Payload:**
```json
{
  "comment": "modified",
  "rating": 5
}
```

---

##  8. Delete Your Own Review

**Method:** `DELETE`  
**Local URL:** `http://localhost:3000/api/review/reviews/6831488bc5b8d06714eac700`  
**Remote URL:** `https://book-review-zspi.onrender.com/api/review/reviews/6831488bc5b8d06714eac700`  
**Authorization:** Add Bearer token (received after login)  
**Note:** Provide access token of the user who added this review.  
The ID provided in the URL is received in the response when you submit a review.

---

## 🔍 9. Get Book Name by Author or Title

**Method:** `GET`  
**Local URL:** `http://localhost:3000/api/book/search?author=j&title=s`  
**Remote URL:** `https://book-review-zspi.onrender.com/api/book/search?author=j&title=s`






