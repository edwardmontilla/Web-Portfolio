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
      <section className="bg-primary">
        <Parallax pages={2} className="text-center">
          <ParallaxLayer offset={0} speed={0.1}>
            <img src="/images/sushi_bake.png" alt="Sushi Bake" className="block w-1/2 absolute inset-x-0 mx-auto" />
          </ParallaxLayer>
          
          <ParallaxLayer offset={0} speed={0.2}>
          <img src="/images/Spam_Musubi.png" alt="Spam Musubi" className="block w-1/2" />
          </ParallaxLayer>
        </Parallax>
      </section>
    </>
  );
}
