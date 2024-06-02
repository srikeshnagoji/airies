import React from "react";
import { Vortex } from "./vortex";

export function VortexDemo() {
  return (
    // <div className="w-[calc(100%-4rem)] mx-auto rounded-md  h-[30rem] overflow-hidden">
    <div className="w-[calc(100%)] mx-auto rounded-md  h-[30rem] overflow-hidden inset-x-0 bottom-0 p-0">
      <Vortex
        backgroundColor="black"
        className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
      >
        <h2 className="text-white text-2xl md:text-5xl font-bold text-center">
        Transforming Team Collaboration with Smart AI Tools
        </h2>
        {/* <p className="text-white text-sm md:text-2xl max-w-xl mt-6 text-center">
        AI-powered platform designed to enhance collaboration and efficiency within your teams. Whether you're searching for specific information, engaging in detailed document analysis, or getting real-time answers from your documents, our suite of tools empowers your team to work smarter. Discover how artificial intelligence can revolutionize your workflows, streamline processes, and elevate your productivity.
        </p> */}
         <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center">
      AI-powered platform designed to enhance collaboration and efficiency within your teams. Whether you're searching for specific information, engaging in detailed document analysis, or getting real-time answers from your documents, our suite of tools empowers your team to work smarter, not harder. Discover how artificial intelligence can revolutionize your workflows, streamline processes, and elevate your productivity.
      </p>
      </Vortex>
    </div>
  );
}
