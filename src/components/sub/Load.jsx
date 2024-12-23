"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Load = () => {
  const [load, setLoad] = useState(false);

  useEffect(() => {
    setLoad(true);
  }, []);
  return (
    <motion.div
      initial={{ top: 0 }}
      animate={{ top: load ? "-100%" : 0 }}
      transition={{duration:.5}}
      
      className="w-full h-full fixed left-0 top-0 flex items-center justify-center bg-gradient-to-t from-yellow-50 to-red-50 z-50 "
    >
      <img src="spinner.gif" alt="spinner image" />
    </motion.div>
  );
};

export default Load;
