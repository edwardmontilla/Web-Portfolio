'use client';

import "./globals.css";
import React, { useState, useEffect } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Header from "@/components/Header";
import NavMenu from "@/components/NavMenu";
import Footer from "@/components/Footer";
import ParallaxComp from "@/components/ParallaxComp";




//NOTES:
// mx-auto to center smaller svgs
// right/left-0 to align to right or left
// inset-x-0 to align to center
// you can follow up with mr/ml

// parallax speed should increase as you go down the page

export default function Home() {

// got rid of object-cover
// play with z index
// overflow-hidden is necessary to prevent Header from covering the scrollbar

// added Header and Footer here instead

// try float property for the svg images

  return (
    <>
      <section>
        <Header NavMenu={<NavMenu />} />
          <ParallaxComp />
        <Footer />
      </section>
    </>
  );
}