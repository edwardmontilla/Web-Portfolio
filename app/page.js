'use client';

import React from "react";
import "./globals.css";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";


//NOTES:
// mx-auto to center the image
// right/left-0 to align to right or left
// inset-x-0 to align to center
// you can follow up with mr/ml

// parallax speed should increase as you go down the page
// parallax last layer should be start to slow down the speed

export default function Home() {
  
  return (
    <>
      <section className="">
        <Parallax pages={2} className="text-center">

          <ParallaxLayer offset={0} speed={0.1}>
            <img src="/images/wave-5.svg" alt="wave 1" className="block  absolute inset-x-0 mx-auto" />
          </ParallaxLayer>
          
          <ParallaxLayer offset={0} speed={0.2}>
            <img src="/images/wave-4.svg" alt="wave 2" className="block  absolute inset-x-0 mx-auto" />
          </ParallaxLayer>

          <ParallaxLayer offset={0} speed={0.3}>
            <img src="/images/wave-3.svg" alt="wave 1" className="block  absolute inset-x-0 mx-auto" />
          </ParallaxLayer>

          <ParallaxLayer offset={0} speed={0.4}>
            <img src="/images/wave-2.svg" alt="wave 1" className="block  absolute inset-x-0 mx-auto" />
          </ParallaxLayer>

          <ParallaxLayer offset={0} speed={0.5}>
            <img src="/images/wave-1.svg" alt="wave 1" className="block  absolute inset-x-0 mx-auto" />
          </ParallaxLayer>


        </Parallax>
      </section>
    </>
  );
}
