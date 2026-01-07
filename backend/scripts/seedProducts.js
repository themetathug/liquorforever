const mongoose = require('mongoose');
const Product = require('../models/Product');
require('dotenv').config();

const sampleProducts = [
  {
    name: 'Eagle Rare 10 Year',
    description: 'Award-winning Kentucky Straight Bourbon Whiskey. Bold, dry, and delicate with notes of toffee, hints of orange peel, herbs, honey, leather and oak.',
    price: 39.99,
    category: 'Whiskey',
    stock: 50,
    image: 'https://images.unsplash.com/photo-1574610758891-5b809b6e6e2c?w=600&h=800&fit=crop'
  },
  {
    name: 'Weller Antique 107',
    description: 'The Original Wheated Bourbon. Full-flavored with subtle notes of vanilla and caramel, 107 proof Kentucky Straight Bourbon Whiskey.',
    price: 49.99,
    category: 'Whiskey',
    stock: 30,
    image: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=600&h=800&fit=crop'
  },
  {
    name: "Tito's Handmade Vodka",
    description: "Award Winning American Vodka. Crafted in an Old Fashioned Pot Still in Austin, Texas. Gluten-free and certified Kosher.",
    price: 24.99,
    category: 'Vodka',
    stock: 100,
    image: 'https://images.unsplash.com/photo-1607622750671-6cd9a99eabd1?w=600&h=800&fit=crop'
  },
  {
    name: 'Wild Turkey 101',
    description: 'Real Kentucky Straight Bourbon Whiskey. Bold, spicy character with notes of vanilla and caramel. 101 proof.',
    price: 29.99,
    category: 'Whiskey',
    stock: 75,
    image: 'https://images.unsplash.com/photo-1527281400683-1aae777175f8?w=600&h=800&fit=crop'
  },
  {
    name: 'Buffalo Trace',
    description: 'Kentucky Straight Bourbon Whiskey. Complex and elegant, with notes of vanilla, mint and molasses.',
    price: 34.99,
    category: 'Whiskey',
    stock: 40,
    image: 'https://images.unsplash.com/photo-1569529465841-dfecdab7503b?w=600&h=800&fit=crop'
  },
  {
    name: 'Grey Goose',
    description: 'Premium French Vodka. Crafted from the finest French ingredients with an exceptionally smooth taste.',
    price: 34.99,
    category: 'Vodka',
    stock: 60,
    image: 'https://images.unsplash.com/photo-1607622750671-6cd9a99eabd1?w=600&h=800&fit=crop&q=80'
  },
  {
    name: 'Johnnie Walker Black Label',
    description: 'Iconic blended Scotch whisky. Complex blend of 40 whiskies aged for a minimum of 12 years.',
    price: 44.99,
    category: 'Whiskey',
    stock: 45,
    image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=600&h=800&fit=crop'
  },
  {
    name: 'Maker\'s Mark',
    description: 'Kentucky Straight Bourbon. Full-flavored with a smooth, creamy finish. Handcrafted small batch bourbon.',
    price: 32.99,
    category: 'Whiskey',
    stock: 55,
    image: 'https://images.unsplash.com/photo-1527281400683-1aae777175f8?w=600&h=800&fit=crop&q=80'
  },
  {
    name: 'Opus One',
    description: 'Napa Valley Red Wine. A harmonious blend of Cabernet Sauvignon, Merlot, and more. Elegant and complex.',
    price: 399.99,
    category: 'Wine',
    stock: 15,
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=600&h=800&fit=crop'
  },
  {
    name: 'Caymus Cabernet Sauvignon',
    description: 'Napa Valley Cabernet Sauvignon. Rich dark cocoa, cassis, and ripe black cherry flavors.',
    price: 89.99,
    category: 'Wine',
    stock: 25,
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=600&h=800&fit=crop&q=80'
  },
  {
    name: 'Hennessy VS',
    description: 'Cognac VS. Bold and fragrant. Notes of fresh grapes and oak with a hint of vanilla.',
    price: 39.99,
    category: 'Other',
    stock: 70,
    image: 'https://images.unsplash.com/photo-1569529465841-dfecdab7503b?w=600&h=800&fit=crop&q=80'
  },
  {
    name: 'Don Julio 1942',
    description: 'Premium Añejo Tequila. Warm oak, vanilla and roasted agave notes with a rich and smooth finish.',
    price: 159.99,
    category: 'Tequila',
    stock: 20,
    image: 'https://images.unsplash.com/photo-1607622750671-6cd9a99eabd1?w=600&h=800&fit=crop&q=80'
  },
  {
    name: 'Patron Silver',
    description: 'Premium Silver Tequila. Fresh agave with hints of citrus. Smooth and silky with a light finish.',
    price: 49.99,
    category: 'Tequila',
    stock: 65,
    image: 'https://images.unsplash.com/photo-1607622750671-6cd9a99eabd1?w=600&h=800&fit=crop&q=80'
  },
  {
    name: 'Tanqueray',
    description: 'London Dry Gin. Four times distilled with four classic botanicals. Crisp and refreshing.',
    price: 24.99,
    category: 'Gin',
    stock: 80,
    image: 'https://images.unsplash.com/photo-1607622750671-6cd9a99eabd1?w=600&h=800&fit=crop&q=80'
  },
  {
    name: 'Hendrick\'s Gin',
    description: 'Premium Scottish Gin. Infused with cucumber and rose petals for a wonderfully refreshing spirit.',
    price: 34.99,
    category: 'Gin',
    stock: 50,
    image: 'https://images.unsplash.com/photo-1607622750671-6cd9a99eabd1?w=600&h=800&fit=crop&q=80'
  },
  {
    name: 'Captain Morgan Spiced Rum',
    description: 'Original Spiced Rum. Smooth with a blend of Caribbean rum and spice.',
    price: 19.99,
    category: 'Rum',
    stock: 90,
    image: 'https://images.unsplash.com/photo-1569529465841-dfecdab7503b?w=600&h=800&fit=crop&q=80'
  },
  {
    name: 'Stella Artois',
    description: 'Premium Belgian Lager. Crisp and refreshing with a slight hop bitterness. 12-pack bottles.',
    price: 18.99,
    category: 'Beer',
    stock: 120,
    image: 'https://images.unsplash.com/photo-1608270586620-248524c67de9?w=600&h=800&fit=crop'
  },
  {
    name: 'Guinness Draught',
    description: 'Irish Dry Stout. Beautifully black with a creamy head and a velvety smooth taste. 12-pack cans.',
    price: 16.99,
    category: 'Beer',
    stock: 100,
    image: 'https://images.unsplash.com/photo-1608270586620-248524c67de9?w=600&h=800&fit=crop&q=80'
  },
  {
    name: 'Veuve Clicquot Yellow Label',
    description: 'Champagne Brut. Fine bubbles, fresh fruit aromas, and a balanced, silky palate.',
    price: 59.99,
    category: 'Champagne',
    stock: 35,
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=600&h=800&fit=crop&q=80'
  },
  {
    name: 'Dom Pérignon Vintage',
    description: 'Vintage Champagne. Intense, vibrant, and tactile with an incredibly harmonious ensemble.',
    price: 249.99,
    category: 'Champagne',
    stock: 10,
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=600&h=800&fit=crop&q=80'
  }
];

async function seedProducts() {
  try {
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/liquor-store');
    console.log('MongoDB Connected');

    // Clear existing products
    await Product.deleteMany({});
    console.log('Cleared existing products');

    // Insert sample products
    await Product.insertMany(sampleProducts);
    console.log('Sample products added successfully!');
    console.log(`Added ${sampleProducts.length} products`);

    process.exit(0);
  } catch (error) {
    console.error('Error seeding products:', error);
    process.exit(1);
  }
}

seedProducts();

