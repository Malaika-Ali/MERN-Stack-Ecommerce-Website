# MERN Stack E-commerce Website
[![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/docs/)
[![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://react.dev/)
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/en/docs)

## Overview
This is a fully functional **MERN stack** E-commerce website built for a fictional fashion brand. It includes user authentication, image storage, and scalable backend architecture. The project follows best practices for both frontend and backend development to ensure maintainability and scalability.

## Table of Contents
Features
Technologies Used
Backend Overview
Frontend Overview
Installation
Future Extensions

## Features
### User Features
- **Google OAuth 2.0 Login/Signup:** Users can log in or   sign up using their Google accounts.
- **Product Browsing:** Users can view all products, filter them by categories and prices, and view detailed information about a specific product.
- **Cart Management:** Users can add products to their cart and proceed to checkout.
- **Image Handling:** Cloudinary is used for storing and managing product images.
- **Responsive UI:** Built with Tailwind CSS for a responsive and customizable design.

### Admin Features (Coming Soon)
- APIs for admin functionalities (e.g., product management, user management) have already been created and will be implemented soon.

## Technologies Used
### Backend:
- **Node.js with Express.js:** For building the server and handling API requests.
- **MongoDB:** As the database to store products, users, and orders.
- **Google OAuth 2.0:** for authentication
- **JSON Web Tokens (JWT):** for user authorization
- **Cookies:** To store JWT tokens securely.
- **Cloudinary:** for storing and managing images
- **Multer:** for handling file uploads
- **Bcrypt** for secure password hashing
- **Postman** for API testing

### Frontend:
- **React.js:** for building the user interface
- **Redux Toolkit:** for state management
- **RTK Query:** for data fetching and caching
- **React Hook Form:** for form handling
- **Lazy Load Image:** for optimized image loading
- **Tailwind CSS:** for styling (without UI libraries, using customized pre-built components)

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

### Steps:
1. Clone the repository:
   ```sh
   git clone https://github.com/Malaika-Ali/MERN-Stack-Ecommerce-Website.git
   cd mern-stack-ecommerce-website
   ```
2. Run the frontend:
   ```sh
   cd frontend
   npm install
   npm run dev
   ```
3. Run the backend:
   ```sh
   cd backend
   npm install
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

Thank you for checking out this project! If you have any questions or feedback, feel free to reach out. Happy coding! 🚀
**Developed by Malaika Ali** 🚀

