# Premium Liquor Store Website

A full-featured e-commerce website for a liquor store with admin panel, user authentication, shopping cart, and secure payment processing.

## Features

- 🛍️ **Product Catalog**: Browse products by category with search functionality
- 👤 **User Authentication**: Sign up and login for customers
- 🔐 **Admin Panel**: Separate admin login for inventory management
- 🛒 **Shopping Cart**: Add products to cart (works for guests and logged-in users)
- 💳 **Secure Payments**: Stripe integration for secure payment processing
- 📦 **Order Management**: Track orders and order history
- 🎨 **Modern UI**: Beautiful, responsive design with animations
- 🖼️ **Image Upload**: Admin can upload and manage product images
- 📊 **Admin Dashboard**: View sales statistics and manage inventory

## Tech Stack

### Frontend
- Next.js 14 (React)
- TypeScript
- Tailwind CSS
- Framer Motion (animations)
- Zustand (state management)
- Stripe (payments)

### Backend
- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT (authentication)
- Multer (file uploads)
- Stripe API

## Setup Instructions

### Prerequisites
- Node.js (v18 or higher)
- MongoDB (local or MongoDB Atlas)
- Stripe account (for payments)

### Installation

1. **Install dependencies for all packages:**
```bash
npm run install-all
```

2. **Set up environment variables:**

Create `backend/.env` file:
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/liquor-store
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
JWT_EXPIRE=7d
STRIPE_SECRET_KEY=sk_test_your_stripe_secret_key_here
STRIPE_PUBLISHABLE_KEY=pk_test_your_stripe_publishable_key_here
NODE_ENV=development
```

Create `frontend/.env.local` file:
```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_your_stripe_publishable_key_here
```

3. **Start MongoDB:**
   - If using local MongoDB, make sure it's running
   - Or use MongoDB Atlas connection string in `MONGODB_URI`

4. **Create an admin user:**
   - Start the backend server
   - Use the admin registration endpoint or create directly in MongoDB:
   ```javascript
   // In MongoDB shell or Compass
   db.users.insertOne({
     name: "Admin",
     email: "admin@example.com",
     password: "$2a$12$hashed_password_here", // Use bcrypt to hash
     role: "admin"
   })
   ```
   - Or use a tool like Postman to register a user, then manually update role to "admin" in database

5. **Start the development servers:**
```bash
npm run dev
```

This will start both frontend (http://localhost:3000) and backend (http://localhost:5000)

## Project Structure

```
liquor-store-website/
├── backend/
│   ├── models/          # MongoDB models
│   ├── routes/          # API routes
│   ├── middleware/      # Auth middleware
│   ├── uploads/         # Product images (created automatically)
│   └── server.js        # Express server
├── frontend/
│   ├── app/             # Next.js app directory
│   ├── components/      # React components
│   ├── lib/             # API utilities
│   └── store/           # Zustand stores
└── package.json         # Root package.json
```

## API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `POST /api/auth/admin/login` - Admin login
- `GET /api/auth/me` - Get current user

### Products
- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get single product
- `POST /api/products` - Create product (Admin only)
- `PUT /api/products/:id` - Update product (Admin only)
- `DELETE /api/products/:id` - Delete product (Admin only)

### Cart
- `GET /api/cart` - Get user cart
- `POST /api/cart` - Add item to cart
- `PUT /api/cart/:itemId` - Update cart item
- `DELETE /api/cart/:itemId` - Remove item from cart

### Orders
- `POST /api/orders` - Create order
- `GET /api/orders` - Get user orders
- `GET /api/orders/:id` - Get single order

### Payment
- `POST /api/payment/create-intent` - Create Stripe payment intent
- `POST /api/payment/confirm` - Confirm payment

### Admin
- `GET /api/admin/stats` - Get dashboard statistics
- `POST /api/admin/products` - Create product with image upload
- `PUT /api/admin/products/:id` - Update product with image upload

## Usage

### For Customers
1. Browse products on the homepage
2. Add products to cart (no login required)
3. Sign up or login to checkout
4. Complete payment with Stripe
5. View order history

### For Admins
1. Login at `/admin/login`
2. Access admin dashboard at `/admin`
3. Add/edit products with images and prices
4. View sales statistics
5. Manage inventory

## Important Notes

- **Admin Access**: Only users with `role: "admin"` can access admin routes
- **Image Uploads**: Product images are stored in `backend/uploads/` directory
- **Payment**: Uses Stripe test mode by default. Update keys for production
- **Database**: All data is stored in MongoDB
- **Guest Cart**: Cart works for non-logged-in users using localStorage

## Security Features

- Password hashing with bcrypt
- JWT token authentication
- Admin route protection
- Input validation
- File upload restrictions (images only, 5MB max)

## Production Deployment

1. Update environment variables with production values
2. Set `NODE_ENV=production`
3. Use a secure `JWT_SECRET`
4. Update Stripe keys to production keys
5. Configure MongoDB Atlas or production database
6. Build frontend: `cd frontend && npm run build`
7. Start production server: `cd backend && npm start`

## License

This project is private and proprietary.

