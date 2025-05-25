##  Setup Instructions

1. **Clone the repository:**

git clone https://github.com/nachiketnijap/Book_Review.git

cd Book_Review

npm install 

I have kept env file for you reference in source code

npm run dev 

# Test Endpoints

## 1. Register

**Method:** `POST`  
**Local URL:** `http://localhost:3000/api/auth/register`  
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
**Authorization:** under authorization tab in postman in Auth Type select Bearer Token and paste access token that you get after login
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

---

##  5. Get Book Detail by Book ID

**Method:** `GET`  
**Local URL:** `http://localhost:3000/api/book/books/68313fec3fefeff1ec672d26?limit=1&page=2`  
**Note:**  ID provided is the book ID  that you will get from get book endpoint 

---

##  6. Submit a Review

**Method:** `POST`  
**Local URL:** `http://localhost:3000/api/review/books/68313fec3fefeff1ec672d26/reviews`    
**Note:** ID provided is the book ID  that you will get from get book endpoint
**Authorization:** under authorization tab in postman in Auth Type select Bearer Token and paste access token that you get after login
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
**Authorization:** under authorization tab in postman in Auth Type select Bearer Token and paste access token that you get after login  
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
**Authorization:** under authorization tab in postman in Auth Type select Bearer Token and paste access token that you get after login 
**Note:** Provide access token of the user who added this review.  
The ID provided in the URL is received in the response when you submit a review.

---

##  9. Get Book Name by Author or Title

**Method:** `GET`  
**Local URL:** `http://localhost:3000/api/book/search?author=j&title=s`  







