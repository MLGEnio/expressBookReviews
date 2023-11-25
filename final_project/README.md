### 1. Test User Registration
- **URL**: `http://localhost:8080/register`
- **Method**: POST
- **Body**: JSON
- **Example Body**:
  ```json
  {
    "username": "newuser2",
    "password": "password1233"
  }
  ```
- **Action**: Send the request and expect a success message for user registration.

### 2. Test User Login
- **URL**: `http://localhost:8080/customer/login`
- **Method**: POST
- **Body**: JSON
- **Example Body**:
  ```json
  {
    "username": "newuser2",
    "password": "password1233"
  }
  ```
- **Action**: Upon successful login, you should receive a JWT token.

### 3. Test Get All Books
- **URL**: `http://localhost:8080/`
- **Method**: GET
- **Action**: You should receive a list of all books.

### 4. Test Get Book by ISBN
- **URL**: `http://localhost:8080/isbn/1` (assuming '1' is a valid ISBN in your data)
- **Method**: GET
- **Action**: Should return the details of the book with ISBN '1'.

### 5. Test Get Books by Author
- **URL**: `http://localhost:8080/author/Chinua%20Achebe` (replace with a valid author)
- **Method**: GET
- **Action**: Should return books by the specified author.

### 6. Test Get Books by Title
- **URL**: `http://localhost:8080/title/Things%20Fall%20Apart` (replace with a valid title)
- **Method**: GET
- **Action**: Should return books with the specified title.

### 7. Test Add/Update Book Review
- **URL**: `http://localhost:8080/customer/auth/review/1` 
- **Method**: PUT
- **Headers**: Authorization: `Bearer <token>`
- **Body**: JSON
- **Example Body**:
  ```json
  {
    "username": "newuser",
    "review": "Great book!"
  }
  ```
- **Action**: Send the request to add/update a review for the book with ISBN '1'. Ensure you include the JWT token received from the login in the Authorization header.

### 8. Test Get Book Review
- **URL**: `http://localhost:8080/review/1` (assuming '1' is a valid ISBN)
- **Method**: GET
- **Action**: Should return reviews for the book with ISBN '1'.

### Testing Notes:
- Replace URLs and data in the examples with actual values from your application.
- Ensure your server is running before testing.
- Use Postman to easily set up and send HTTP requests to your server.
- Check the responses and status codes to verify if the endpoints are functioning as expected.
- For endpoints requiring authentication, ensure to include the JWT token in the Authorization header as `Bearer <token>`.