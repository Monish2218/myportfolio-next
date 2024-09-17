"use client"
import React from 'react'
import { TypeAnimation } from 'react-type-animation'

export default function HeroH1() {
  return (
    <>
        <TypeAnimation
              sequence={[
                "Hi, I'm Monish Agrawal",
                1000,
                "A software Developer",
                1000,
                "Learning every day",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
    </>
  )
}
