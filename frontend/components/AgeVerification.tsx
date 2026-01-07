'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function AgeVerification({ children }: { children: React.ReactNode }) {
  const [isVerified, setIsVerified] = useState<boolean | null>(null);
  const [birthYear, setBirthYear] = useState('');
  const [birthMonth, setBirthMonth] = useState('');
  const [birthDay, setBirthDay] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const verified = localStorage.getItem('age_verified');
    if (verified === 'true') {
      setIsVerified(true);
    } else {
      setIsVerified(false);
    }
  }, []);

  const handleVerify = () => {
    setError('');
    
    const year = parseInt(birthYear);
    const month = parseInt(birthMonth);
    const day = parseInt(birthDay);

    if (!year || !month || !day) {
      setError('Please enter your complete date of birth.');
      return;
    }

    if (year < 1900 || year > new Date().getFullYear()) {
      setError('Please enter a valid year.');
      return;
    }

    if (month < 1 || month > 12) {
      setError('Please enter a valid month.');
      return;
    }

    if (day < 1 || day > 31) {
      setError('Please enter a valid day.');
      return;
    }

    const birthDate = new Date(year, month - 1, day);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }

    if (age >= 21) {
      localStorage.setItem('age_verified', 'true');
      setIsVerified(true);
    } else {
      setError('You must be 21 years or older to access this site.');
    }
  };

  const handleReject = () => {
    window.location.href = 'https://www.google.com';
  };

  if (isVerified === null) {
    return null;
  }

  if (isVerified) {
    return <>{children}</>;
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[9999] flex items-center justify-center bg-dark-950"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1569529465841-dfecdab7503b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/80 backdrop-blur-sm"></div>
        
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="relative z-10 text-center px-6 max-w-lg"
        >
          {/* Logo */}
          <div className="mb-8">
            <div className="text-4xl md:text-5xl font-bold text-yellow-500 italic mb-2" style={{ fontFamily: 'Georgia, serif' }}>
              LF
            </div>
            <div className="text-2xl md:text-3xl font-bold text-yellow-400 tracking-[0.3em] uppercase" style={{ fontFamily: 'Georgia, serif' }}>
              LIQUOR FOREVER
            </div>
            <div className="text-sm text-gray-400 tracking-[0.5em] mt-1">
              LIQUOR STORE
            </div>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4" style={{ fontFamily: 'Georgia, serif' }}>
            AGE VERIFICATION
          </h2>
          <p className="text-gray-300 mb-8">
            Please enter your date of birth to verify you are 21 years of age or older.
          </p>

          {/* Date Input */}
          <div className="flex gap-4 justify-center mb-6">
            <div>
              <label className="block text-xs text-gray-400 mb-2 uppercase tracking-wider">Month</label>
              <input
                type="text"
                placeholder="MM"
                maxLength={2}
                value={birthMonth}
                onChange={(e) => setBirthMonth(e.target.value.replace(/\D/g, ''))}
                className="w-20 px-4 py-3 bg-dark-800 border border-yellow-600/30 rounded-lg text-center text-white text-lg focus:outline-none focus:border-yellow-500 transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs text-gray-400 mb-2 uppercase tracking-wider">Day</label>
              <input
                type="text"
                placeholder="DD"
                maxLength={2}
                value={birthDay}
                onChange={(e) => setBirthDay(e.target.value.replace(/\D/g, ''))}
                className="w-20 px-4 py-3 bg-dark-800 border border-yellow-600/30 rounded-lg text-center text-white text-lg focus:outline-none focus:border-yellow-500 transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs text-gray-400 mb-2 uppercase tracking-wider">Year</label>
              <input
                type="text"
                placeholder="YYYY"
                maxLength={4}
                value={birthYear}
                onChange={(e) => setBirthYear(e.target.value.replace(/\D/g, ''))}
                className="w-24 px-4 py-3 bg-dark-800 border border-yellow-600/30 rounded-lg text-center text-white text-lg focus:outline-none focus:border-yellow-500 transition-colors"
              />
            </div>
          </div>

          {error && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-red-400 mb-4 text-sm"
            >
              {error}
            </motion.p>
          )}

          <div className="flex gap-4 justify-center">
            <button
              onClick={handleVerify}
              className="px-8 py-3 bg-yellow-600 hover:bg-yellow-500 text-black rounded-full font-bold transition-all transform hover:scale-105"
            >
              Enter Site
            </button>
            <button
              onClick={handleReject}
              className="px-8 py-3 border-2 border-gray-600 text-gray-400 hover:border-gray-400 hover:text-white rounded-full font-semibold transition-all"
            >
              Exit
            </button>
          </div>

          <p className="mt-8 text-xs text-gray-500 max-w-sm mx-auto">
            By entering this site, you agree to our Terms of Service and Privacy Policy. Please drink responsibly.
          </p>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
