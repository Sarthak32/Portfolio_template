import React, { useState, useEffect } from 'react';
import './Home.css';
import { motion, useCycle } from 'framer-motion';

const Home = () => {
  const [isAnimating, setIsAnimating] = useState(false);

  // Toggle the animation after a delay
  useEffect(() => {
    const delay = 500; // Delay in milliseconds before starting the animation

    const animationTimeout = setTimeout(() => {
      setIsAnimating(true);
    }, delay);

    return () => clearTimeout(animationTimeout);
  }, []);

  return (
    <div className='main-container'>
      <div className='head'>
        <div id='bg1'>
          <motion.div
            initial={{ y: 300, opacity: 0 }}
            animate={{ y: 0, opacity: 1 } }
            id='elem'
            transition={{ duration: 1.5,stiffness: 100, delay: 0.3,timeConstant:1.5 }}
          >
            <h1>h</h1>
          </motion.div>
          <motion.div
            initial={{ y: 300, opacity: 0 }}
            animate={{ y: 0, opacity: 1 } }
            id='elem'
            transition={{ duration: 1.5, stiffness: 100, delay: 0.42 ,timeConstant:1.5}}
          >
            <h1>e</h1>
          </motion.div>
          <motion.div
            initial={{y: 300, opacity: 0 }}
            animate={{ y: 0, opacity: 1 } }
            id='elem'
            transition={{  duration: 1.5,stiffness: 100, delay: 0.54,timeConstant:1.5 }}
          >
            <h1>l</h1>
          </motion.div>
          <motion.div
            initial={{ y: 300, opacity: 0 }}
            animate={ { y: 0, opacity: 1 }}
            id='elem'
            transition={{ duration: 1.5,stiffness: 100, delay: 0.66 ,timeConstant:1.5}}
          >
            <h1>l</h1>
          </motion.div>
          <motion.div
            initial={{ y: 300, opacity: 0 }}
            animate={{ y: 0, opacity: 1 } }
            id='elem'
            transition={{ duration: 1.5, stiffness: 100, delay: 0.78,timeConstant:1.5 }}
          >
            <h1>o</h1>
          </motion.div>
        </div>
      </div>
      <motion.div className='content' 
      initial={{ y: 20, opacity: 0.05 }}
      animate={ { y: 0, opacity: 1 }}
      transition={{duration:0.7,delay:1.6}}>
        We ARE A creative Marketing agency.
        </motion.div>
      <div className='animateimg'>
        <motion.img
          src='./anm.png'
          alt='Animated Image'
          initial={{ y: 0 }}
          animate={{ y: isAnimating ? 10 : -10 }}
          transition={{
            type: 'spring',
            damping: 2,
            stiffness: 50,
            duration: 0.5,
          }}
        />
      </div>
    </div>
  );
};

export default Home;
