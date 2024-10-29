"use client";

import React, { useEffect, useState } from 'react';
import { easeIn, motion } from "framer-motion";
import Link from 'next/link';

const Hero = () => {
  const strings = [
    'website developer',
    'web designer',
    'front-end designer',
    'back-end developer',
  ];

  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % strings.length;
      const fullText = strings[i];

      setText(isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1));

      if (!isDeleting && text === fullText) {
        setIsDeleting(true);
        setTypingSpeed(85);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(100);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, typingSpeed, loopNum, strings]);

  return (
    <section id="hero" className="relative text-slate-400 body-font h-screen  overflow-hidden">
     <meta name="title" content="Ayush's Portfolio | Innovative Web Developer & IT Student" />
        <meta name="description" content="Explore Ayush's portfolio, featuring modern web development, responsive design, and creative UI/UX projects. Discover high-quality code, interactive designs, and seamless digital experiences." />
        <meta name="keywords" content="portfolio website, Ayush portfolio, web developer, IT student, modern web design, responsive design, user experience, UI/UX, Next.js, Tailwind CSS, CodewithLord, coding projects, web development portfolio, frontend developer portfolio, hire web developer" />
        <meta name="author" content="Ayush" />
      {/* Background Video */}
      <video 
        className="absolute inset-0 object-cover w-full h-full" 
        autoPlay 
        loop 
        muted 
      >
        <source src="/Assets/video/istockphoto-1700675341-640_adpp_is.mp4" type="video/mp4" />
      </video>

      <div className="container md:border-2 md:border-transparent sm:backdrop:brightness-0 md:bg-slate-950 md:bg-opacity-45 md:rounded-3xl mt-10 mx-auto flex px-5 py-24 md:flex-row flex-col items-center relative z-10">
        <motion.div className="lg:flex-grow border-2 mx-auto  border-transparent bg-slate-950 rounded-lg w-auto bg-opacity-45  md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-satisfy_regular  text-zinc-200">
            Ayush - <span className='text-2xl'>{text}</span>
            <span className="cursor">|</span>
          </h1>
          <p className="mb-8 leading-relaxed text-gray-100 sm:font-bolder">
            Copper mug try-hard pitchfork pour-over freegan heirloom neutra air
            plant cold-pressed tacos poke beard tote bag. Heirloom echo park
            mlkshk tote bag selvage hot chicken authentic tumeric truffaut
            hexagon try-hard chambray.
          </p>
          <div className="flex justify-center">
            <button 
              type="button"
              className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              <Link href="#about">Read more</Link>  
            </button>
          </div>
        </motion.div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover mix-blend-screen object-center rounded"
            alt="hero"
            src="/Assets/Images/profile/DALL·E 2024-09-11 13.00.22 - Create an anime-style character based on the reference image. The character is sitting at a desk, typing on a modern laptop, surrounded by coding scre.jpg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
