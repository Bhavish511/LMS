# LMS - Backend (Server)

This is the Node.js/Express backend for the Learning Management System. It handles data persistence, authentication, payment processing, and media management.

## 🛠️ Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB (via Mongoose)
- **Authentication**: Clerk SDK
- **Payment Gateway**: Stripe
- **Media Management**: Cloudinary
- **Webhooks**: Svix (for Clerk/Stripe integration)
- **Middlewares**: `cors`, `multer` (for file uploads)

## 📂 Architecture

The server follows a modular architecture:
- `configs/`: Database and external service configurations.
- `controllers/`: Logic for handling API requests.
- `middlewares/`: Custom middlewares for auth and error handling.
- `models/`: Mongoose schemas for MongoDB.
- `routes/`: API route definitions.

## 🚀 Getting Started

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Environment Configuration**:
   Create a `.env` file in the `server` root:
   ```env
   MONGODB_URI=your_mongodb_connection_string
   CLERK_SECRET_KEY=your_clerk_secret_key
   STRIPE_SECRET_KEY=your_stripe_secret_key
   CLOUDINARY_URL=your_cloudinary_url
   SVIX_SECRET_KEY=your_svix_webhook_secret
   ```

3. **Run Server**:
   ```bash
   # Using nodemon for development
   npm run server
   
   # Standard start
   npm start
   ```

## 📡 API Endpoints (Brief)

- `/api/courses`: Course CRUD operations.
- `/api/auth`: Authentication and user management.
- `/api/payments`: Stripe integration and checkout.
- `/api/educator`: Educator-specific actions.

---
Developed by [Bhavish](https://github.com/Bhavish511)
