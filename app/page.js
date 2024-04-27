'use client';

import "./globals.css";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Header from "@/components/Header";
import NavMenu from "@/components/NavMenu";
import Footer from "@/components/Footer";
import Headroom from "react-headroom";


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
        <Headroom>
          <Header NavMenu={<NavMenu />} />
        </Headroom>
        <Parallax pages={2} className="overflow-hidden">

          <ParallaxLayer offset={0} speed={0.1}>
            <img src="/images/wave-5.svg" alt="wave 5" className="w-full mt-[-158px]" />
          </ParallaxLayer>
          
          <ParallaxLayer offset={0} speed={0.2}>
            <img src="/images/wave-4.svg" alt="wave 4" className="w-full mt-[-120px]" />
          </ParallaxLayer>

          <ParallaxLayer offset={0} speed={0.32}>
            <img src="/images/wave-3.svg" alt="wave 3" className="w-full mt-[-108px]" />
          </ParallaxLayer>

          <ParallaxLayer offset={0} speed={0.45}>
            <img src="/images/wave-2.svg" alt="wave 2" className="w-full mt-[-45px]" />
          </ParallaxLayer>

          <ParallaxLayer offset={0} speed={0.58}>
            <img src="/images/wave-1.svg" alt="wave 1" className="w-full mt-[-45px]" />
          </ParallaxLayer>


        </Parallax>
        <Footer />
      </section>
    </>
  );
}
