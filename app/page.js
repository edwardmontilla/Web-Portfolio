import React from "react";
import "./globals.css";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";


export default function Home() {
  return (
    <>
      <Parallax>
        <ParallaxLayer offset={0} speed={0.5}>
          Test 1
        </ParallaxLayer>
        
        <ParallaxLayer offset={1} speed={0.5}>
          Test 2
        </ParallaxLayer>
      </Parallax>
    </>
  );
}
