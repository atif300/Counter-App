import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCounter, minusCounter } from '../store/slices/counterSlices';
import { motion } from 'framer-motion';

const Button = () => {
  const dispatch = useDispatch();
  const [istIsClicked, setIsClicked] = useState(false);

  const handleAdd = () => {
    setIsClicked(true);
    dispatch(addCounter());
  };

  const handleDelete = () => {
    setIsClicked(false);
    dispatch(minusCounter());
  };

  return (
    <div className="flex justify-center mt-8 space-x-6">
      <motion.button
        onClick={handleAdd}
        whileHover={{ scale: 1.1, backgroundColor: '#34d399' }}
        whileTap={{ scale: 0.9 }}
        className="px-6 py-3 bg-green-500 text-white rounded-lg shadow-lg hover:bg-green-600 focus:outline-none transition duration-200"
      >
        Add
      </motion.button>

      <motion.button
        onClick={handleDelete}
        whileHover={{ scale: 1.1, backgroundColor: 'red-400' }}
        whileTap={{ scale: 0.9 }}
        className="px-6 py-3 bg-red-700 text-white rounded-lg shadow-lg hover:bg-red-800 focus:outline-none transition duration-200"
      >
        Delete
      </motion.button>

    </div>
  );
};

export default Button;