// TypingEffect.js
import React, { useEffect } from 'react';
import Typed from 'typed.js'; // Import Typed.js

const TypingEffect = () => {
  useEffect(() => {
    // Initialize Typed.js
    const typed = new Typed('.text', {
      strings: ['Full Stack Development','Backend development', 'Web Development','Problem Solving'],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: true,
    });

    // Cleanup Typed instance on unmount
    return () => {
      typed.destroy();
    };
  }, []);

  return <span className="text"></span>;
};

export default TypingEffect;
