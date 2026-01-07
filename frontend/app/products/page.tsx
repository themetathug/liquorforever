'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import api from '@/lib/api';
import { useCartStore } from '@/store/cartStore';
import Navbar from '@/components/Navbar';
import { motion } from 'framer-motion';
import { FiShoppingCart, FiSearch } from 'react-icons/fi';
import { toast } from 'react-toastify';
import Link from 'next/link';

interface Product {
  _id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  stock: number;
  description?: string;
}

const categories = [
  'All',
  'Whiskey',
  'Vodka',
  'Rum',
  'Gin',
  'Tequila',
  'Wine',
  'Beer',
  'Champagne',
  'Other',
];

export default function ProductsPage() {
  const searchParams = useSearchParams();
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState(
    searchParams.get('category') || 'All'
  );
  const [searchTerm, setSearchTerm] = useState('');
  const { addItem } = useCartStore();

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    filterProducts();
  }, [selectedCategory, searchTerm, products]);

  useEffect(() => {
    const category = searchParams.get('category');
    if (category) {
      setSelectedCategory(category);
    }
  }, [searchParams]);

  const fetchProducts = async () => {
    try {
      const response = await api.get('/products');
      setProducts(response.data.products);
      setFilteredProducts(response.data.products);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching products:', error);
      toast.error('Failed to fetch products.');
      setLoading(false);
    }
  };

  const filterProducts = () => {
    let filtered = products;

    if (selectedCategory !== 'All') {
      filtered = filtered.filter((p) => p.category === selectedCategory);
    }

    if (searchTerm) {
      filtered = filtered.filter(
        (p) =>
          p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          p.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredProducts(filtered);
  };

  const handleAddToCart = (product: Product) => {
    addItem(product, 1);
    toast.success(`${product.name} added to cart!`);
  };

  return (
    <div className="min-h-screen bg-dark-950 text-gray-100">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1574610758891-5b809b6e6e2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-dark-950/70 via-dark-950/50 to-dark-950"></div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-white" style={{ fontFamily: 'Georgia, serif' }}>
            {selectedCategory === 'All' ? 'OUR PRODUCTS' : selectedCategory.toUpperCase()}
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Our family of top-shelf spirits from our family of master distillers. Whether you like Bourbon or Rye, and on the rocks or in an old fashioned cocktail, there's a spirit with your name on it.
          </p>
        </motion.div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Search and Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mb-12 space-y-6"
        >
          <div className="relative max-w-xl mx-auto">
            <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-yellow-400 text-xl" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-dark-800 border border-yellow-600/30 rounded-full focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 text-white placeholder-gray-400 transition-all"
            />
          </div>

          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-2 rounded-full font-semibold transition-all text-sm uppercase tracking-wider ${
                  selectedCategory === category
                    ? 'bg-yellow-500 text-black shadow-lg shadow-yellow-500/30'
                    : 'bg-dark-800 text-gray-300 hover:bg-dark-700 border border-yellow-600/20 hover:border-yellow-600/40'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
          <p className="text-center text-gray-500 text-sm">
            Showing {filteredProducts.length} of {products.length} products
          </p>
        </motion.div>

        {/* Products Grid */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="bg-dark-800 rounded-2xl shadow-lg p-6 animate-pulse border border-yellow-600/10"
              >
                <div className="bg-dark-700 h-80 rounded-xl mb-4"></div>
                <div className="bg-dark-700 h-5 rounded mb-2 w-3/4"></div>
                <div className="bg-dark-700 h-4 rounded w-1/2"></div>
                <div className="bg-dark-700 h-6 rounded mt-4 w-1/3"></div>
              </div>
            ))}
          </div>
        ) : filteredProducts.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-400 text-xl">No products found matching your criteria.</p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchTerm('');
              }}
              className="mt-4 px-6 py-2 bg-yellow-600 text-black rounded-full font-semibold"
            >
              Clear Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product._id}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  delay: index * 0.08, 
                  duration: 0.4,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <div className="bg-gradient-to-br from-dark-800 via-dark-800 to-dark-900 rounded-2xl shadow-2xl overflow-hidden border-2 border-yellow-600/20 hover:border-yellow-600/50 transition-all duration-500 hover:shadow-yellow-500/20 h-full flex flex-col">
                  <div className="relative h-80 overflow-hidden bg-dark-700">
                    <motion.img
                      src={product.image.startsWith('http') ? product.image : `http://localhost:5000${product.image}`}
                      alt={product.name}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1569529465841-dfecdab7503b?w=400&h=600&fit=crop';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-transparent opacity-60"></div>
                    {product.stock === 0 && (
                      <div className="absolute inset-0 bg-black/70 flex items-center justify-center">
                        <span className="text-white font-bold text-lg uppercase tracking-wider">
                          Out of Stock
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-white mb-2" style={{ fontFamily: 'Georgia, serif' }}>
                        {product.name}
                      </h3>
                      <p className="text-gray-400 text-sm mb-3">{product.category}</p>
                      {product.description && (
                        <p className="text-gray-500 text-sm line-clamp-2">
                          {product.description}
                        </p>
                      )}
                    </div>
                    <div className="mt-auto">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-yellow-400 font-bold text-2xl" style={{ fontFamily: 'Georgia, serif' }}>
                          ${product.price.toFixed(2)}
                        </span>
                        {product.stock > 0 && (
                          <span className="text-green-400 text-xs font-medium px-2 py-1 bg-green-400/10 rounded-full">
                            In Stock
                          </span>
                        )}
                      </div>
                      <motion.button
                        onClick={() => handleAddToCart(product)}
                        disabled={product.stock === 0}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-500 hover:to-yellow-400 text-black py-3 px-4 rounded-full font-bold transition-all disabled:bg-gray-700 disabled:text-gray-400 disabled:cursor-not-allowed flex items-center justify-center space-x-2 shadow-lg shadow-yellow-500/20"
                      >
                        <FiShoppingCart className="text-lg" />
                        <span>{product.stock === 0 ? 'Out of Stock' : 'Add to Cart'}</span>
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="bg-dark-950 border-t border-yellow-600/20 text-white py-12 mt-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="text-center md:text-left mb-4">
                <div className="text-2xl font-bold text-yellow-500 italic" style={{ fontFamily: 'Georgia, serif' }}>LF</div>
                <div className="text-sm font-bold text-yellow-400 tracking-[0.2em]">LIQUOR FOREVER</div>
              </div>
              <p className="text-gray-400 text-sm">
                Premium spirits for the discerning connoisseur.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-yellow-400">Shop</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link href="/products" className="hover:text-yellow-400 transition-colors">All Products</Link></li>
                <li><Link href="/products?category=Whiskey" className="hover:text-yellow-400 transition-colors">Whiskey</Link></li>
                <li><Link href="/products?category=Vodka" className="hover:text-yellow-400 transition-colors">Vodka</Link></li>
                <li><Link href="/products?category=Wine" className="hover:text-yellow-400 transition-colors">Wine</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-yellow-400">Company</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link href="/about" className="hover:text-yellow-400 transition-colors">Our Story</Link></li>
                <li><Link href="/contact" className="hover:text-yellow-400 transition-colors">Contact Us</Link></li>
                <li><Link href="/privacy" className="hover:text-yellow-400 transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-yellow-400 transition-colors">Terms & Conditions</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-yellow-400">Contact</h4>
              <p className="text-gray-400 text-sm">
                Email: info@liquorforever.com<br />
                Phone: (555) 123-4567
              </p>
            </div>
          </div>
          <div className="border-t border-yellow-600/20 mt-8 pt-8 text-center text-gray-500 text-sm">
            <p>NEVER COMPROMISE. DRINK RESPONSIBLY.</p>
            <p className="mt-2">&copy; 2024 LIQUOR FOREVER. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
