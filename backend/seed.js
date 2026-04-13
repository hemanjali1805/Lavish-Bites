const mongoose = require('mongoose');
const Product = require('./models/Product');
require('dotenv').config();

const products = [
  // Pizzas
  { name: 'Margherita Pizza', category: 'Pizza', type: 'Veg', price: 250, image: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=300&h=200&fit=crop' },
  { name: 'Pepperoni Pizza', category: 'Pizza', type: 'Non-Veg', price: 320, image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=300&h=200&fit=crop' },
  { name: 'Veggie Supreme Pizza', category: 'Pizza', type: 'Veg', price: 280, image: 'https://images.unsplash.com/photo-1571066811602-716837d681de?w=300&h=200&fit=crop' },
  { name: 'Chicken BBQ Pizza', category: 'Pizza', type: 'Non-Veg', price: 350, image: 'https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=300&h=200&fit=crop' },
  { name: 'Paneer Tikka Pizza', category: 'Pizza', type: 'Veg', price: 270, image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=300&h=200&fit=crop' },
  { name: 'Meat Lovers Pizza', category: 'Pizza', type: 'Non-Veg', price: 400, image: 'https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?w=300&h=200&fit=crop' },
  { name: 'Hawaiian Pizza', category: 'Pizza', type: 'Non-Veg', price: 330, image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=300&h=200&fit=crop' },
  { name: 'Mushroom Pizza', category: 'Pizza', type: 'Veg', price: 240, image: 'https://images.unsplash.com/photo-1594007654729-407eedc4be65?w=300&h=200&fit=crop' },
  { name: 'Spicy Chicken Pizza', category: 'Pizza', type: 'Non-Veg', price: 380, image: 'https://images.unsplash.com/photo-1601924582970-9238bcb495d9?w=300&h=200&fit=crop' },
  { name: 'Cheese Burst Pizza', category: 'Pizza', type: 'Veg', price: 290, image: 'https://images.unsplash.com/photo-1541599468348-e96984315621?w=300&h=200&fit=crop' },

  // Burgers
  { name: 'Classic Cheeseburger', category: 'Burgers', type: 'Non-Veg', price: 220, image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=300&h=200&fit=crop' },
  { name: 'Veggie Burger', category: 'Burgers', type: 'Veg', price: 200, image: 'https://images.unsplash.com/photo-1585238342024-78d952319ca8?w=300&h=200&fit=crop' },
  { name: 'Chicken Burger', category: 'Burgers', type: 'Non-Veg', price: 240, image: 'https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?w=300&h=200&fit=crop' },
  { name: 'Bacon Burger', category: 'Burgers', type: 'Non-Veg', price: 280, image: 'https://images.unsplash.com/photo-1551782450-17144efb5723?w=300&h=200&fit=crop' },
  { name: 'Mushroom Swiss Burger', category: 'Burgers', type: 'Non-Veg', price: 260, image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=300&h=200&fit=crop' },
  { name: 'Black Bean Burger', category: 'Burgers', type: 'Veg', price: 210, image: 'https://images.unsplash.com/photo-1550317138-10000687a4d0?w=300&h=200&fit=crop' },
  { name: 'Double Patty Burger', category: 'Burgers', type: 'Non-Veg', price: 320, image: 'https://images.unsplash.com/photo-1586816001966-79b736744398?w=300&h=200&fit=crop' },
  { name: 'Spicy Jalapeno Burger', category: 'Burgers', type: 'Non-Veg', price: 250, image: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=300&h=200&fit=crop' },
  { name: 'Paneer Burger', category: 'Burgers', type: 'Veg', price: 205, image: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=300&h=200&fit=crop' },
  { name: 'Fish Burger', category: 'Burgers', type: 'Non-Veg', price: 270, image: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?w=300&h=200&fit=crop' },

  // Milkshakes
  { name: 'Vanilla Milkshake', category: 'Milkshakes', type: 'Veg', price: 120, image: 'https://images.unsplash.com/photo-1579954115545-a95591f28bfc?w=300&h=200&fit=crop' },
  { name: 'Chocolate Milkshake', category: 'Milkshakes', type: 'Veg', price: 130, image: 'https://images.unsplash.com/photo-1541658016709-82535e94bc69?w=300&h=200&fit=crop' },
  { name: 'Strawberry Milkshake', category: 'Milkshakes', type: 'Veg', price: 135, image: 'https://images.unsplash.com/photo-1553909489-cd47e9adb3cc?w=300&h=200&fit=crop' },
  { name: 'Banana Milkshake', category: 'Milkshakes', type: 'Veg', price: 115, image: 'https://images.unsplash.com/photo-1577805947697-89e18249d767?w=300&h=200&fit=crop' },
  { name: 'Oreo Milkshake', category: 'Milkshakes', type: 'Veg', price: 150, image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=300&h=200&fit=crop' },
  { name: 'Mango Milkshake', category: 'Milkshakes', type: 'Veg', price: 140, image: 'https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?w=300&h=200&fit=crop' },
  { name: 'Pistachio Milkshake', category: 'Milkshakes', type: 'Veg', price: 145, image: 'https://images.unsplash.com/photo-1553909489-ec217ac8ef3f?w=300&h=200&fit=crop' },
  { name: 'Caramel Milkshake', category: 'Milkshakes', type: 'Veg', price: 130, image: 'https://images.unsplash.com/photo-1541599468348-e96984315621?w=300&h=200&fit=crop' },
  { name: 'Blueberry Milkshake', category: 'Milkshakes', type: 'Veg', price: 155, image: 'https://images.unsplash.com/photo-1577805947697-89e18249d767?w=300&h=200&fit=crop' },
  { name: 'Coffee Milkshake', category: 'Milkshakes', type: 'Veg', price: 125, image: 'https://images.unsplash.com/photo-1553909489-cd47e9adb3cc?w=300&h=200&fit=crop' },

  // Ice Creams
  { name: 'Vanilla Ice Cream', category: 'Ice Creams', type: 'Veg', price: 100, image: 'https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?w=300&h=200&fit=crop' },
  { name: 'Chocolate Ice Cream', category: 'Ice Creams', type: 'Veg', price: 110, image: 'https://images.unsplash.com/photo-1567206563064-6f60f40a2b57?w=300&h=200&fit=crop' },
  { name: 'Strawberry Ice Cream', category: 'Ice Creams', type: 'Veg', price: 115, image: 'https://images.unsplash.com/photo-1553909489-ec217ac8ef3f?w=300&h=200&fit=crop' },
  { name: 'Mint Chocolate Chip', category: 'Ice Creams', type: 'Veg', price: 130, image: 'https://images.unsplash.com/photo-1567206563064-6f60f40a2b57?w=300&h=200&fit=crop' },
  { name: 'Cookie Dough Ice Cream', category: 'Ice Creams', type: 'Veg', price: 135, image: 'https://images.unsplash.com/photo-1553909489-cd47e9adb3cc?w=300&h=200&fit=crop' },
  { name: 'Butter Pecan Ice Cream', category: 'Ice Creams', type: 'Veg', price: 120, image: 'https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?w=300&h=200&fit=crop' },
  { name: 'Rocky Road Ice Cream', category: 'Ice Creams', type: 'Veg', price: 140, image: 'https://images.unsplash.com/photo-1567206563064-6f60f40a2b57?w=300&h=200&fit=crop' },
  { name: 'Pistachio Ice Cream', category: 'Ice Creams', type: 'Veg', price: 125, image: 'https://images.unsplash.com/photo-1553909489-ec217ac8ef3f?w=300&h=200&fit=crop' },
  { name: 'Salted Caramel Ice Cream', category: 'Ice Creams', type: 'Veg', price: 145, image: 'https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?w=300&h=200&fit=crop' },
  { name: 'Neapolitan Ice Cream', category: 'Ice Creams', type: 'Veg', price: 130, image: 'https://images.unsplash.com/photo-1567206563064-6f60f40a2b57?w=300&h=200&fit=crop' },
];

const seedDB = async () => {
  await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/lavishbites');
  await Product.deleteMany({});
  await Product.insertMany(products);
  console.log('Database seeded');
  process.exit();
};

seedDB();