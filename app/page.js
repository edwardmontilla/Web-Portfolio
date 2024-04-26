'use client';

import React from "react";
import "./globals.css";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

export default function Home() {
  return (
    <>
      <Parallax pages={3} className="text-center">
        <ParallaxLayer speed={0.1}>
          <img src="/images/sushi_bake.png" alt="Sushi Bake" className="block w-1/3 h-auto absolute left-0" />
        </ParallaxLayer>
        
        <ParallaxLayer offset={0.3} speed={0.8}>
        <img src="/images/Spam_Musubi.png" alt="Spam Musubi" className="block w-1/3 h-auto absolute right-0" />
        </ParallaxLayer>
      </Parallax>
    </>
  );
}
