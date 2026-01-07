# Quick Setup Guide

## Step 1: Install Dependencies
```bash
npm run install-all
```

## Step 2: Configure Environment Variables

### Backend (.env)
Create `backend/.env`:
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/liquor-store
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production-min-32-chars
JWT_EXPIRE=7d
STRIPE_SECRET_KEY=sk_test_your_stripe_secret_key_here
STRIPE_PUBLISHABLE_KEY=pk_test_your_stripe_publishable_key_here
NODE_ENV=development
```

### Frontend (.env.local)
Create `frontend/.env.local`:
```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_your_stripe_publishable_key_here
```

## Step 3: Start MongoDB
- Install MongoDB locally, OR
- Use MongoDB Atlas (free tier available)
- Update `MONGODB_URI` in backend/.env

## Step 4: Create Admin User

After starting the backend server, run:
```bash
cd backend
npm run create-admin
```

Or with custom credentials:
```bash
npm run create-admin admin@yourstore.com yourpassword "Admin Name"
```

## Step 5: Get Stripe Keys

1. Sign up at https://stripe.com
2. Go to Developers > API Keys
3. Copy your test keys (starts with `sk_test_` and `pk_test_`)
4. Add them to your .env files

## Step 6: Start the Application

```bash
npm run dev
```

This starts:
- Frontend: http://localhost:3000
- Backend: http://localhost:5000

## Step 7: Test the Application

1. **Browse as Guest**: Visit http://localhost:3000
   - Browse products
   - Add items to cart (works without login)

2. **Create User Account**: Click "Sign Up"
   - Register a new account
   - Login to checkout

3. **Admin Access**: Visit http://localhost:3000/admin/login
   - Login with admin credentials
   - Add/edit products
   - Upload product images
   - View dashboard statistics

## Troubleshooting

### MongoDB Connection Error
- Make sure MongoDB is running
- Check your MONGODB_URI is correct
- For MongoDB Atlas, whitelist your IP address

### Image Upload Not Working
- Check that `backend/uploads/` directory exists
- Ensure proper file permissions

### Stripe Payment Error
- Verify Stripe keys are correct
- Check Stripe dashboard for test mode
- Use test card: 4242 4242 4242 4242

### Port Already in Use
- Change PORT in backend/.env
- Update NEXT_PUBLIC_API_URL in frontend/.env.local

## Production Checklist

- [ ] Change JWT_SECRET to a strong random string
- [ ] Use production Stripe keys
- [ ] Set NODE_ENV=production
- [ ] Use MongoDB Atlas or production database
- [ ] Configure proper CORS settings
- [ ] Set up SSL/HTTPS
- [ ] Build frontend: `cd frontend && npm run build`
- [ ] Use process manager (PM2) for backend

