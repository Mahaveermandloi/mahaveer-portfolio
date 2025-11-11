"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export const Hero = () => {
  const [bubbles, setBubbles] = useState([]);

  const getRandomNumber = (min, max) =>
    Math.floor(Math.random() * (max - min + 1)) + min;

  useEffect(() => {
    const numBubbles = 20;
    const newBubbles = Array(numBubbles)
      .fill(null)
      .map(() => {
        const size = getRandomNumber(40, 100);
        const x = getRandomNumber(0, window.innerWidth);
        const y = getRandomNumber(0, window.innerHeight);
        const delay = getRandomNumber(0, 2);
        return { size, x, y, delay };
      });
    setBubbles(newBubbles);
  }, []);

  return (
    <div className="fixed w-full">
      <div className="flex justify-between">
        {bubbles.map((bubble, index) => (
          <motion.div
            key={index}
            initial={{ y: bubble.y, opacity: 0 }}
            animate={{ y: "-100vh", opacity: 1 }}
            transition={{
              duration: getRandomNumber(8, 12),
              delay: bubble.delay,
              ease: "linear",
              repeat: Infinity,
              repeatType: "reverse",
            }}
            style={{
              width: bubble.size,
              height: bubble.size,
              borderRadius: "50%",
              backgroundImage: `linear-gradient(to right, #b993d6, #8ca6db)`,
              backdropFilter: "blur(5px)",
              position: "absolute",
              left: bubble.x,
              boxShadow:
                "0 0 10px rgba(255, 255, 255, 0.5), 0 0 10px rgba(255, 255, 255, 0.2)",
              mixBlendMode: "screen",
              transform: `rotate(${getRandomNumber(-15, 15)}deg)`,
              zIndex: "-1",
            }}
          />
        ))}
      </div>
    </div>
  );
};
