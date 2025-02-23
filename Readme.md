# MERN Stack E-commerce Website

## Overview
This is a fully functional **MERN stack** E-commerce website built for a fictional fashion brand. It includes user authentication, image storage, and scalable backend architecture. The project follows best practices for both frontend and backend development to ensure maintainability and scalability.

## Features
### User Features
- View all products
- View details of a particular product
- Add products to cart
- Checkout and purchase products using **Stripe** payment gateway
- Google OAuth 2.0 authentication for login and signup

### Admin Features (Coming Soon)
- APIs for admin functionalities are already created, the frontend implementation will be added in the future.

## Tech Stack
### Backend:
- **Node.js** with **Express.js** for server-side logic
- **MongoDB** with **Mongoose** for database management
- **Google OAuth 2.0** for authentication
- **JSON Web Tokens (JWT)** for authorization
- **Cookies** for storing authentication tokens
- **Cloudinary** for storing and managing images
- **Multer** for handling file uploads
- **Bcrypt** for secure password hashing
- **Stripe** for payment processing
- **Postman** for API testing

### Frontend:
- **React.js** for building the user interface
- **Redux Toolkit** for state management
- **RTK Query** for data fetching and caching
- **React Hook Form** for form handling
- **Lazy Load Image** for optimized image loading
- **Tailwind CSS** for styling (without UI libraries, using customized pre-built components)

## Folder Structure
The backend follows a modular architecture with well-structured folders to ensure scalability and maintainability. Key directories include:
- `controllers/` - Handles request logic
- `models/` - Defines database schemas
- `routes/` - Manages API endpoints
- `middlewares/` - Includes authentication and error-handling middleware
- `utils/` - Contains helper functions

## Installation and Setup
### Prerequisites:
- **Node.js** and **npm** installed
- **MongoDB** (local or cloud instance)
- **Cloudinary** account for image storage
- **Stripe** account for payment integration

### Steps:
1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/mern-ecommerce.git
   cd mern-ecommerce
   ```
2. Install dependencies:
   ```sh
   npm install
   cd client && npm install
   ```
3. Run the backend:
   ```sh
   cd backend
   npm run dev
   ```
4. Run the frontend:
   ```sh
   cd frontend
   npm run dev
   ```

## API Testing
A **Postman collection** is included in the project to test API endpoints easily.

## Future Enhancements
- **Admin Dashboard** for managing products, orders, and users
- **Order history** and **profile management** for users
- **Wishlist** 
- **Improved UI/UX** with additional features

## Contributing
Feel free to fork this repository, create a new branch, and submit a pull request for any improvements.

---
**Developed by Malaika Ali** 🚀

