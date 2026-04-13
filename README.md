# Lavish Bites

A modern, elegant food ordering web application with a pastel lavender theme.

## Features

- Splash screen with smooth animations
- User authentication (login/signup)
- Home page with food categories
- Category pages with product listings
- Shopping cart functionality
- Order placement with payment options
- Responsive design
- Toast notifications

## Tech Stack

- **Frontend:** React.js, React Router, Axios, React Toastify
- **Backend:** Node.js, Express.js, MongoDB, JWT
- **Styling:** CSS with pastel lavender theme

## Setup Instructions

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (running locally or cloud instance)
- npm or yarn

### Backend Setup

1. Navigate to the backend directory:
   ```
   cd backend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the backend directory with:
   ```
   MONGO_URI=mongodb://localhost:27017/lavishbites
   JWT_SECRET=your_jwt_secret_here
   ```

4. Seed the database with sample products:
   ```
   npm run seed
   ```

5. Start the backend server:
   ```
   npm run dev
   ```
   The server will run on http://localhost:5000

### Frontend Setup

1. Navigate to the frontend directory:
   ```
   cd frontend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm start
   ```
   The app will open in your browser at http://localhost:3000

## Usage

1. The app starts with a splash screen.
2. If not logged in, you'll see the login/signup page.
3. After logging in, browse categories on the home page.
4. Click on a category to view products.
5. Add items to cart and proceed to checkout.
6. Place orders with delivery details.

## API Endpoints

- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `GET /api/products` - Get all products
- `GET /api/products/:category` - Get products by category
- `GET /api/cart` - Get user cart
- `POST /api/cart/add` - Add item to cart
- `PUT /api/cart/update` - Update cart item quantity
- `DELETE /api/cart/remove/:productId` - Remove item from cart
- `POST /api/orders` - Place order
- `GET /api/orders` - Get user orders

## Database Schema

### Users
- name, email, password, phone

### Products
- name, category, type (veg/non-veg), price, image

### Orders
- userId, items, totalPrice, address, paymentMethod, status

### Cart
- userId, items (with productId and quantity)

## Contributing

Feel free to contribute to this project by submitting issues or pull requests.

## License

This project is licensed under the MIT License.