import { motion, stagger, useAnimate } from "framer-motion";
import React, { useEffect } from "react";

// const cube = {
//   animate: {
//     top: 10,
//     width: 280,
//     height: 280,
//     backgroundColor: "white",
//     transformOrigin: "center",
//     transition: {
//       duration: 1,
//       when: "afterChildren",
//       staggerChildren: 0.2,
//     },
//   },
// };

// const rect = {
//   initial: {
//     y: "100%",
//   },

//   animate: {
//     y: 0,
//     transition: {
//       duration: 0.8,
//       type: "tween",
//     },
//   },
// };

const Loader = () => {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    const startAnimation = async () => {
      await animate(
        ".rect",
        { bottom: 0 },
        { duration: 1, ease: [0.22, 1, 0.36, 1], delay: stagger(0.3) }
      );
      animate(".rect", { opacity: 0 });
      animate(
        ".square",
        { top: 15, width: 350, height: 350, backgroundColor: "black" },
        { duration: 1, ease: [0.22, 1, 0.36, 1] }
      );

      await animate(
        ".black-cover",
        { y: "-100%" },
        { duration: 1, ease: [0.22, 1, 0.36, 1] }
      );
      await animate(".second", { opacity: 1 });
      await animate(".square", { opacity: 0 });
      animate(".one", { x: -43 }, { duration: 0.8, ease: [0.22, 1, 0.36, 1] });
      animate(".two", { x: -27 }, { duration: 0.8, ease: [0.22, 1, 0.36, 1] });
      animate(
        ".three",
        { x: -233 },
        { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
      );
      await animate(
        ".for",
        { x: 160 },
        { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
      );
      animate(".for", { x: 520 }, { duration: 0.8, ease: [0.22, 1, 0.36, 1] });
      animate(
        ".three-one",
        {
          rotate: 55, // Angle de rotation en degrés
          // scale: 0.975, // Facteur d'échelle
          transformOrigin: "top left",
        },
        { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
      );

      animate(
        ".two-one",
        {
          rotate: -55, // Angle de rotation en degrés
          transformOrigin: "top right",
        },
        { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
      );

      animate(
        ".for-one",
        {
          rotate: 55, // Angle de rotation en degrés
          transformOrigin: "top left",
        },
        { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
      );
    };
    startAnimation();
  }, []);
  return (
    <div ref={scope} className="relative w-screen h-screen">
      <div className="first relative w-full h-full flex justify-center items-end">
        <div className="square absolute flex top-[50%]  w-[195px] h-[195px] z-30 overflow-hidden  ">
          <div className="rect  w-1/3 h-full absolute left-0 -bottom-full bg-white " />
          <div className="rect  w-1/3 h-full absolute left-1/3 -bottom-full bg-white " />
          <div className="rect  w-1/3 h-full absolute left-[66.666666%] -bottom-full bg-white" />
        </div>
        <div className="black-cover absolute top-0 left-0 w-full h-full bg-black" />
      </div>
      <div className="second absolute h-full w-full top-0 flex justify-center pt-[15px] opacity-0 ">
        <div className="relative min-w-[350px] h-[350px] flex bg-red-400">
          <div className="one w-1/2 h-full bg-black absolute " />
          <div className="two w-1/2 h-full bg-black absolute right-0">
            <div className="two-one absolute w-full h-full bg-black" />
          </div>
          <div className="three w-1/2 h-full bg-black absolute ">
            <div className="three-one absolute w-full h-full bg-black" />
          </div>
          <div className="for w-1/2 h-full bg-black absolute right-0">
            <div className="for-one absolute w-full h-full bg-black" />
          </div>
          <div className="absolute  bottom-0">
            <div/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
