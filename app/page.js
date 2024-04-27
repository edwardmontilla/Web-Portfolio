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

export default function Home() {
  
  return (
    <>
      <section>
        <Parallax pages={3} className="text-center overflow-visible">

          <ParallaxLayer offset={0} speed={0.1}>
            <img src="/images/wave-5.svg" alt="wave 5" className="object-cover w-full mt-[-158px]" />
          </ParallaxLayer>
          
          <ParallaxLayer offset={0} speed={0.2}>
            <img src="/images/wave-4.svg" alt="wave 4" className="object-cover w-full mt-[-133px]" />
          </ParallaxLayer>

          <ParallaxLayer offset={0} speed={0.3}>
            <img src="/images/wave-3.svg" alt="wave 3" className="object-cover w-full mt-[-138px]" />
          </ParallaxLayer>

          <ParallaxLayer offset={0} speed={0.4}>
            <img src="/images/wave-2.svg" alt="wave 2" className="object-cover w-full mt-[-78px]" />
          </ParallaxLayer>

          <ParallaxLayer offset={0} speed={0.5}>
            <img src="/images/wave-1.svg" alt="wave 1" className="object-cover w-full mt-20" />
          </ParallaxLayer>


        </Parallax>
      </section>
    </>
  );
}
