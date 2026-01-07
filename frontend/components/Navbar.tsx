'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useAuthStore } from '@/store/authStore';
import { useCartStore } from '@/store/cartStore';
import { FiShoppingCart, FiUser, FiLogOut, FiMenu, FiX, FiGlobe } from 'react-icons/fi';
import { useState } from 'react';

export default function Navbar() {
  const pathname = usePathname();
  const { user, logout, isAdmin } = useAuthStore();
  const { getItemCount } = useCartStore();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    window.location.href = '/';
  };

  const navItems = [
    { name: 'PRODUCTS', href: '/products' },
    { name: 'WHISKEY', href: '/products?category=Whiskey' },
    { name: 'WINE', href: '/products?category=Wine' },
    { name: 'VODKA', href: '/products?category=Vodka' },
    { name: 'BEER', href: '/products?category=Beer' },
    { name: 'OUR STORY', href: '/about' },
  ];

  return (
    <nav className="bg-dark-950/95 backdrop-blur-md text-white sticky top-0 z-50 border-b border-yellow-600/10">
      <div className="container mx-auto px-4">
        {/* Top Bar */}
        <div className="flex items-center justify-between py-3 border-b border-yellow-600/10">
          {/* Logo */}
          <Link href="/" className="flex flex-col items-center magnetic">
            <div className="text-center">
              <div className="text-2xl font-bold text-yellow-500 tracking-tight italic" style={{ fontFamily: 'Georgia, serif' }}>
                LF
              </div>
              <div className="text-sm font-bold text-yellow-400 tracking-[0.2em] uppercase" style={{ fontFamily: 'Georgia, serif' }}>
                LIQUOR FOREVER
              </div>
            </div>
          </Link>

          {/* Right Actions */}
          <div className="flex items-center space-x-4">
            <Link
              href="/products"
              className="hidden md:block px-4 py-2 text-sm font-semibold text-white hover:text-yellow-400 transition-colors"
            >
              Buy now
            </Link>
            <Link
              href="/cart"
              className="relative hover:text-yellow-400 transition-colors"
            >
              <FiShoppingCart className="text-xl" />
              {getItemCount() > 0 && (
                <span className="absolute -top-2 -right-2 bg-yellow-500 text-black text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                  {getItemCount()}
                </span>
              )}
            </Link>
            <button className="text-xl hover:text-yellow-400 transition-colors">
              <FiGlobe />
            </button>
          </div>
        </div>

        {/* Main Navigation */}
        <div className="hidden md:flex items-center justify-center py-4">
          <div className="flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-semibold tracking-wider transition-colors ${
                  pathname === item.href || (item.href.includes('category') && pathname === '/products')
                    ? 'text-yellow-400'
                    : 'text-white hover:text-yellow-400'
                }`}
              >
                {item.name}
              </Link>
            ))}
            {user && isAdmin() && (
              <Link
                href="/admin"
                className="text-sm font-semibold tracking-wider text-white hover:text-yellow-400 transition-colors"
              >
                ADMIN
              </Link>
            )}
            {user ? (
              <button
                onClick={handleLogout}
                className="text-sm font-semibold tracking-wider text-white hover:text-yellow-400 transition-colors flex items-center space-x-1"
              >
                <FiLogOut />
                <span>LOGOUT</span>
              </button>
            ) : (
              <Link
                href="/login"
                className="text-sm font-semibold tracking-wider text-white hover:text-yellow-400 transition-colors flex items-center space-x-1"
              >
                <FiUser />
                <span>LOGIN</span>
              </Link>
            )}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden py-3 flex justify-end">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <FiX className="text-2xl" />
            ) : (
              <FiMenu className="text-2xl" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-4 animate-slide-up border-t border-yellow-600/10">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block text-sm font-semibold tracking-wider text-white hover:text-yellow-400"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            {user && isAdmin() && (
              <Link
                href="/admin"
                className="block text-sm font-semibold tracking-wider text-white hover:text-yellow-400"
                onClick={() => setMobileMenuOpen(false)}
              >
                ADMIN
              </Link>
            )}
            {user ? (
              <button
                onClick={() => {
                  handleLogout();
                  setMobileMenuOpen(false);
                }}
                className="block w-full text-left text-sm font-semibold tracking-wider text-white hover:text-yellow-400"
              >
                LOGOUT
              </button>
            ) : (
              <>
                <Link
                  href="/login"
                  className="block text-sm font-semibold tracking-wider text-white hover:text-yellow-400"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  LOGIN
                </Link>
                <Link
                  href="/signup"
                  className="block text-sm font-semibold tracking-wider text-white hover:text-yellow-400"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  SIGN UP
                </Link>
              </>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}
