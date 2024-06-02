"use client";
import React from "react";
import { WavyBackground } from "./wavy-background";

export function WavyBackgroundDemo() {
  return (
    <WavyBackground className="max-w-4xl mx-auto pt-0 pb-40">
      <p className="text-2xl md:text-4xl lg:text-5xl text-white font-bold inter-var text-center">
      Transforming Team Collaboration with Smart AI Tools
      </p>
      <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center">
      AI-powered platform designed to enhance collaboration and efficiency within your teams. Whether you're searching for specific information, engaging in detailed document analysis, or getting real-time answers from your documents, our suite of tools empowers your team to work smarter, not harder. Discover how artificial intelligence can revolutionize your workflows, streamline processes, and elevate your productivity.
      </p>
    </WavyBackground>
  );
}
