'use client';

import Navbar from '@/components/Navbar';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-dark-950">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1569529465841-dfecdab7503b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-dark-950/95 via-dark-950/70 to-dark-950/50"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6" style={{ fontFamily: 'Georgia, serif' }}>
              OUR STORY
            </h1>
            <p className="text-xl text-gray-300">
            The search for great liquor ends here forever.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-20 bg-dark-950">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-yellow-400 mb-6" style={{ fontFamily: 'Georgia, serif' }}>
                THE BEGINNING
              </h2>
              <p className="text-gray-300 text-lg mb-4 leading-relaxed">
                Liquor Forever was built on a simple premise: only the best spirits should be in the hands of individuals who truly cherish quality. What started as a passion for outstanding beverages has evolved into a dedication to sharing unforgettable drinking experiences with the rest of the globe.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Today, we curate an exclusive collection of premium spirits from renowned distilleries worldwide, ensuring every bottle meets our exacting standards.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative h-96 rounded-2xl overflow-hidden"
            >
              <img
                src="https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Our Story"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative h-96 rounded-2xl overflow-hidden order-2 md:order-1"
            >
              <img
                src="https://images.unsplash.com/photo-1527281400683-1aae777175f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Our Philosophy"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-1 md:order-2"
            >
              <h2 className="text-4xl font-bold text-yellow-400 mb-6" style={{ fontFamily: 'Georgia, serif' }}>
                OUR PHILOSOPHY
              </h2>
              <p className="text-gray-300 text-lg mb-4 leading-relaxed">
                we believe that great spirits are more than just beverages—they are expressions of craftsmanship, heritage, and the passion of those who create them. We curate our collection with the understanding that every bottle represents years of dedication, tradition, and the pursuit of excellence.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Our commitment is to bring you spirits that have been crafted with care, aged with patience, and selected with expertise. We honor the distillers' art by ensuring that each selection in our store meets the highest standards of quality and authenticity.
              </p>
            </motion.div>
          </div>

          {/* Values */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-12" style={{ fontFamily: 'Georgia, serif' }}>
              WHAT WE STAND FOR
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: 'QUALITY',
                  description: 'We source only the finest spirits from the world\'s most respected distilleries.',
                },
                {
                  title: 'AUTHENTICITY',
                  description: 'Every bottle we sell is guaranteed authentic, with full traceability.',
                },
                {
                  title: 'PASSION',
                  description: 'Our team consists of spirits enthusiasts dedicated to sharing their knowledge.',
                },
              ].map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-8 bg-dark-800 rounded-2xl border border-yellow-600/20"
                >
                  <h3 className="text-2xl font-bold text-yellow-400 mb-4" style={{ fontFamily: 'Georgia, serif' }}>
                    {value.title}
                  </h3>
                  <p className="text-gray-400">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center py-16 bg-dark-800 rounded-2xl border border-yellow-600/20"
          >
            <h2 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: 'Georgia, serif' }}>
              READY TO DISCOVER?
            </h2>
            <p className="text-gray-400 mb-8">
              Explore our curated collection of premium spirits.
            </p>
            <Link
              href="/products"
              className="inline-flex items-center px-8 py-4 bg-yellow-600 hover:bg-yellow-500 text-black rounded-full font-bold transition-all transform hover:scale-105"
            >
              Shop Now
            </Link>
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

