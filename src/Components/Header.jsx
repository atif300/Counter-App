import React from 'react';
import { useSelector } from 'react-redux';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const { counter } = useSelector((state) => state.counterReducer);

  const getColor = () => {
    if (counter > 10) return 'text-green-500';
    if (counter < 5) return 'text-red-500';
    return 'text-blue-500';
  };

  return (
    <div className="flex justify-center mt-10">
      <div className="w-full max-w-md bg-white shadow-xl rounded-lg p-6 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Counter
        </h1>
        <AnimatePresence mode="wait">
          <motion.p
            key={counter}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            className={`text-6xl font-extrabold mb-6 ${getColor()}`}
          >
            {counter}
          </motion.p>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Header;