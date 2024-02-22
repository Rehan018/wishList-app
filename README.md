**Project Overview:**

Project Name: Wishlist Management Backend

**Description:**
The Wishlist Management Backend is a Node.js application that provides RESTful API endpoints for managing user wishlists. It includes functionalities for user authentication (signup and login) and wishlist management (create, read, update, delete wishlist items). The application is built using Express.js for routing, MongoDB with Mongoose for data storage, JWT for user authentication, and bcrypt for password hashing.

**Folder Structure:**
- config/
  - config.js
- controllers/
  - authController.js
  - wishlistController.js
- middleware/
  - authMiddleware.js
- models/
  - User.js
  - WishlistItem.js
- routes/
  - authRoutes.js
  - wishlistRoutes.js
- services/
  - authService.js
  - wishlistService.js
- tests/
  - authController.test.js
  - wishlistController.test.js
- app.js
- package.json

**Setup:**
1. Clone the project repository or create a new Node.js project.
2. Navigate to the project directory in the terminal.
3. Run `npm install` to install dependencies.
4. Set up MongoDB and update the database URL in `config/config.js`.

**Run:**
1. Start the server by running `node app.js` or `npm start`.
2. Ensure the server is running without errors.

**Testing API with Postman:**
1. **Signup:**
   - URL: `POST http://localhost:3000/api/auth/signup`
   - Request Body (JSON):
     ```json
     {
       "username": "example_user",
       "password": "password123"
     }
     ```
2. **Login:**
   - URL: `POST http://localhost:3000/api/auth/login`
   - Request Body (JSON):
     ```json
     {
       "username": "example_user",
       "password": "password123"
     }
     ```
   - After successful login, obtain the JWT token from the response.
3. **Get Wishlist:**
   - URL: `GET http://localhost:3000/api/wishlists`
   - Add Authorization header with the obtained JWT token as a Bearer token.
4. **Create Wishlist Item:**
   - URL: `POST http://localhost:3000/api/wishlists`
   - Request Body (JSON):
     ```json
     {
       "name": "New Product",
       "description": "Description for New Product"
     }
     ```
   - Add Authorization header with the obtained JWT token as a Bearer token.
5. **Delete Wishlist Item:**
   - URL: `DELETE http://localhost:3000/api/wishlists/{id}`
   - Replace `{id}` with the ID of the wishlist item to delete.
   - Add Authorization header with the obtained JWT token as a Bearer token.

**Additional Instructions:**
- Ensure that Node.js and npm are installed on your system before setting up the project.
- Use a tool like Postman for testing API endpoints.
- Make sure MongoDB is installed and running before starting the server.
- Follow the provided folder structure and naming conventions for consistency.
- Add error handling and validation to improve the robustness of the application.

**Assumptions:**
- The application is configured to run on `localhost` port `3000`.
- MongoDB is running locally on the default port (`27017`).
- JWT tokens are used for user authentication.
- Wishlist items are associated with the authenticated user.

**Conclusion:**
The Wishlist Management Backend provides a secure and efficient solution for managing user wishlists. With clear API documentation and instructions, developers can easily set up, run, and test the application to ensure its functionality and reliability.