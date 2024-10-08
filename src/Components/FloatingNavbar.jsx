 import React, { useState } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";

// FloatingNav component definition
const FloatingNav = ({ navItems = [], className }) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);

  // Define the cn function
  const cn = (...inputs) => {
    return inputs.join(" ");
  };

  // Handle scroll events
  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      let direction = current - scrollYProgress.getPrevious();
      setVisible(scrollYProgress.get() >= 0.05 && direction < 0);
    }
  });

  // Sample data for navItems
  const sampleNavItems = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about-us" },
    { name: "Service", link: "/services" }
  ];

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 1, y: -100 }}
        animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        className={cn(
          "flex max-w-fit fixed top-10 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-full dark:bg-black bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] pr-2 pl-8 py-2 items-center justify-center space-x-4",
          className
        )}
      >
        {sampleNavItems.map((item, idx) => (
          <a
            key={`link=${idx}`}
            href={item.link}
            className={cn(
              "relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500"
            )}
          >
            <span className="hidden sm:block text-sm">{item.name}</span>
          </a>
        ))}
         <a href="/contact-us">


        <button className="border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-4 py-2 rounded-full">
          
          <span>Contact Us</span>
          <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px" />
        </button>
         </a>
        
         
      </motion.div>
    </AnimatePresence>
  );
};

export default FloatingNav;
