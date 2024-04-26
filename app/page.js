'use client';

import React from "react";
import "./globals.css";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

const images = require.context('../public/images', false, /\.(png|jpe?g|svg)$/);

export default function Home() {
  return (
    <>
      <Parallax pages={3} className="text-center bg-auto">
        <ParallaxLayer speed={0.1}>
          
          <img src={images('./sushi_bake.png')} alt="Sushi Bake" />
        </ParallaxLayer>
        
        <ParallaxLayer offset={0.3} speed={0.8}>
          <h2>Test 2</h2>
          <img src={images('./BGv3.png')} alt="Spam Musubi" className="w-200 h-200"/>
        </ParallaxLayer>
      </Parallax>
    </>
  );
}
