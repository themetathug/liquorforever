'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import api from '@/lib/api';
import { useCartStore } from '@/store/cartStore';
import Navbar from '@/components/Navbar';
import { motion } from 'framer-motion';
import { FiShoppingCart, FiArrowRight } from 'react-icons/fi';
import { toast } from 'react-toastify';

interface Product {
  _id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  stock: number;
}

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const { addItem } = useCartStore();

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await api.get('/products');
      setProducts(response.data.products.slice(0, 8));
      setLoading(false);
    } catch (error) {
      console.error('Error fetching products:', error);
      setLoading(false);
    }
  };

  const handleAddToCart = (product: Product) => {
    addItem(product, 1);
    toast.success(`${product.name} added to cart!`);
  };

  return (
    <div className="min-h-screen bg-dark-950">
      <Navbar />

      {/* Hero Section with Texas Theme Background */}
      <section className="relative h-[85vh] flex items-center overflow-hidden">
        {/* Background Image - Texas Theme with man/friends walking */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            // Whiskey bar shelf with bottles
            backgroundImage: `url('https://images.unsplash.com/photo-1597290282695-edc43d0e7129?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-dark-950/90 via-dark-950/50 to-dark-950/30"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
              style={{ fontFamily: 'Georgia, serif' }}
            >
              FOREVER ISN'T LONG ENOUGH FOR A GOOD POUR.{' '}
              <span className="text-yellow-400">BUT IT'S A START.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed"
            >
              A tribute to LIQUOR FOREVER's legacy and the conviction that kept our finest spirits unchanged for generations. Experience the art of premium distillation.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Link
                href="/products"
                className="inline-flex items-center px-8 py-4 bg-yellow-600 hover:bg-yellow-500 text-black rounded-full text-lg font-bold transition-all transform hover:scale-105 shadow-lg"
              >
                Discover more
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Premium Collection Section */}
      <section className="py-20 bg-dark-950">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4" style={{ fontFamily: 'Georgia, serif' }}>
              PREMIUM COLLECTION
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Handpicked selection of our finest spirits, crafted with passion and tradition.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Eagle Rare */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="group relative h-[600px] rounded-2xl overflow-hidden"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 group-hover:scale-110"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1470337458703-46ad1756a187?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')`,
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-dark-950/95 via-dark-950/40 to-transparent"></div>
              </div>
              <div className="absolute inset-0 flex flex-col justify-end p-8">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-3" style={{ fontFamily: 'Georgia, serif' }}>
                  EAGLE RARE
                </h3>
                <p className="text-gray-300 mb-4 text-lg">
                  Kentucky Straight Bourbon aged 12 years. Rich, complex flavors with notes of vanilla, caramel, and oak.
                </p>
                <Link
                  href="/products?category=Whiskey"
                  className="inline-flex items-center px-6 py-3 border-2 border-yellow-500 text-yellow-400 hover:bg-yellow-500 hover:text-black rounded-full font-semibold transition-all w-fit"
                >
                  Explore
                </Link>
              </div>
            </motion.div>

            {/* Weller Antique 107 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="group relative h-[600px] rounded-2xl overflow-hidden"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 group-hover:scale-110"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')`,
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-dark-950/95 via-dark-950/40 to-transparent"></div>
              </div>
              <div className="absolute inset-0 flex flex-col justify-end p-8">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-3" style={{ fontFamily: 'Georgia, serif' }}>
                  WELLER ANTIQUE 107
                </h3>
                <p className="text-gray-300 mb-4 text-lg">
                  The Original Wheated Bourbon. Kentucky Straight Bourbon Whiskey, 53.5% ALC by VOL. 107 Proof.
                </p>
                <Link
                  href="/products?category=Whiskey"
                  className="inline-flex items-center px-6 py-3 border-2 border-yellow-500 text-yellow-400 hover:bg-yellow-500 hover:text-black rounded-full font-semibold transition-all w-fit"
                >
                  Explore
                </Link>
              </div>
            </motion.div>

            {/* Tito's Handmade Vodka */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="group relative h-[600px] rounded-2xl overflow-hidden"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 group-hover:scale-110"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1607622750671-6cd9a99eabd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')`,
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-dark-950/95 via-dark-950/40 to-transparent"></div>
              </div>
              <div className="absolute inset-0 flex flex-col justify-end p-8">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-3" style={{ fontFamily: 'Georgia, serif' }}>
                  TITO'S HANDMADE VODKA
                </h3>
                <p className="text-gray-300 mb-4 text-lg">
                  Award Winning American Vodka. Crafted in an Old Fashioned Pot Still. Austin, Texas.
                </p>
                <Link
                  href="/products?category=Vodka"
                  className="inline-flex items-center px-6 py-3 border-2 border-yellow-500 text-yellow-400 hover:bg-yellow-500 hover:text-black rounded-full font-semibold transition-all w-fit"
                >
                  Explore
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Products Section - Wild Turkey Style */}
      <section className="py-16 bg-dark-950 border-y border-dark-800">
        <div className="container mx-auto px-4">
          {/* Header Row */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-3" style={{ fontFamily: 'Georgia, serif' }}>
                OUR PRODUCTS
              </h2>
              <p className="text-gray-400 text-lg">
                Our family of top-shelf spirits from our family of master distillers.
              </p>
            </div>
            <Link
              href="/products"
              className="mt-4 md:mt-0 inline-flex items-center text-yellow-400 hover:text-yellow-300 font-semibold transition-colors group"
            >
              SEE ALL PRODUCTS
              <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Products Carousel */}
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-dark-700">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="bg-dark-950 p-8 animate-pulse border-r border-dark-800 last:border-r-0"
                >
                  <div className="bg-dark-700 h-64 mb-6"></div>
                  <div className="bg-dark-700 h-6 rounded mb-3 w-3/4 mx-auto"></div>
                  <div className="bg-dark-700 h-4 rounded w-1/2 mx-auto"></div>
                </div>
              ))}
            </div>
          ) : (
            <div className="relative">
              {/* Navigation Arrows */}
              <button 
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 bg-red-600 hover:bg-red-500 rounded-full flex items-center justify-center text-white transition-colors shadow-lg"
                onClick={() => {
                  const container = document.getElementById('product-carousel');
                  if (container) container.scrollBy({ left: -400, behavior: 'smooth' });
                }}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button 
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 bg-red-600 hover:bg-red-500 rounded-full flex items-center justify-center text-white transition-colors shadow-lg"
                onClick={() => {
                  const container = document.getElementById('product-carousel');
                  if (container) container.scrollBy({ left: 400, behavior: 'smooth' });
                }}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Product Cards */}
              <div 
                id="product-carousel"
                className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory border border-dark-800"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                {products.slice(0, 6).map((product, index) => (
                  <motion.div
                    key={product._id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex-shrink-0 w-full md:w-1/3 snap-start"
                  >
                    <div className="bg-dark-950 p-8 h-full flex flex-col items-center text-center hover:bg-dark-900 transition-colors border-r border-dark-800 last:border-r-0">
                      {/* Product Image */}
                      <div className="h-64 w-48 mb-6 relative">
                        <img
                          src={product.image.startsWith('http') ? product.image : `http://localhost:5000${product.image}`}
                          alt={product.name}
                          className="w-full h-full object-contain"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1569529465841-dfecdab7503b?w=400&h=600&fit=crop';
                          }}
                        />
                      </div>
                      
                      {/* Product Info */}
                      <h3 className="text-xl font-bold text-white mb-2 uppercase tracking-wide" style={{ fontFamily: 'Georgia, serif' }}>
                        {product.name}
                      </h3>
                      <p className="text-gray-400 text-sm mb-6">
                        {product.category} · ${product.price.toFixed(2)}
                      </p>
                      
                      {/* See Details Button */}
                      <Link
                        href={`/products?category=${product.category}`}
                        className="mt-auto px-8 py-3 border border-white text-white hover:bg-white hover:text-black transition-colors rounded-full font-semibold"
                      >
                        See details
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Dot Indicators */}
              <div className="flex justify-center gap-2 mt-8">
                {products.slice(0, 6).map((_, index) => (
                  <button
                    key={index}
                    className={`w-3 h-3 rounded-full transition-colors ${index === 0 ? 'bg-red-600' : 'bg-gray-600 hover:bg-gray-500'}`}
                    onClick={() => {
                      const container = document.getElementById('product-carousel');
                      if (container) {
                        const cardWidth = container.scrollWidth / 6;
                        container.scrollTo({ left: cardWidth * index, behavior: 'smooth' });
                      }
                    }}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>


      {/* Categories Section */}
      <section className="py-20 bg-dark-950">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-12" style={{ fontFamily: 'Georgia, serif' }}>
            SHOP BY CATEGORY
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: 'Whiskey', image: 'https://images.unsplash.com/photo-1527281400683-1aae777175f8?w=400&h=400&fit=crop' },
              { name: 'Vodka', image: 'https://images.unsplash.com/photo-1607622750671-6cd9a99eabd1?w=400&h=400&fit=crop' },
              { name: 'Wine', image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=400&h=400&fit=crop' },
              { name: 'Beer', image: 'https://images.unsplash.com/photo-1608270586620-248524c67de9?w=400&h=400&fit=crop' },
            ].map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={`/products?category=${category.name}`}
                  className="group block relative rounded-2xl overflow-hidden aspect-square"
                >
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-950/90 via-dark-950/30 to-transparent"></div>
                  <div className="absolute inset-0 flex items-end justify-center pb-6">
                    <h3 className="text-2xl font-bold text-white" style={{ fontFamily: 'Georgia, serif' }}>
                      {category.name}
                    </h3>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Texas Friends Banner */}
      <section className="relative h-[60vh] flex items-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-dark-950/80 via-dark-950/40 to-transparent"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-xl">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-4" style={{ fontFamily: 'Georgia, serif' }}>
                CRAFTED IN TEXAS
              </h2>
              <p className="text-xl text-gray-300 mb-6">
                Where good friends meet and great spirits flow. Every pour tells a story of tradition, craftsmanship, and the Texas way of life.
              </p>
              <Link
                href="/products"
                className="inline-flex items-center px-6 py-3 bg-yellow-600 hover:bg-yellow-500 text-black rounded-full font-semibold transition-all"
              >
                Explore Our Collection
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-dark-950 border-t border-dark-800">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: 'Georgia, serif' }}>
              JOIN THE LIQUOR FOREVER COMMUNITY
            </h2>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto">
              Sign up to learn more about our spirits, exclusive offers, and latest arrivals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 bg-dark-900 border border-yellow-600/30 rounded-full text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500"
              />
              <button className="px-8 py-3 bg-yellow-600 hover:bg-yellow-500 text-black rounded-full font-bold transition-all">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark-950 border-t border-yellow-600/20 text-white py-12">
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
