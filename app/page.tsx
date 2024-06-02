import { CardHoverEffectDemo } from "@/components/ui/CardHoverEffectDemo";
import { FloatingNavDemo } from "@/components/ui/FloatingNavDemo";
import { SparklesPreview } from "@/components/ui/SparklesPreview";
import { VortexDemo } from "@/components/ui/VortexDemo";
import { WavyBackgroundDemo } from "@/components/ui/WavyBackgroundDemo";
import { SparklesCore } from "@/components/ui/sparkles";
import Image from "next/image";
import SVGIMG from "../public/AIRBUS_White.svg";

export default function Home() {
  return (
    <div className="h-screen">
      <Image src={SVGIMG} alt={""} className="fixed -top-20 -left-10 mx-auto z-20 size-64"/>
      <FloatingNavDemo/>
    <SparklesPreview />
    {/* <WavyBackgroundDemo/> */}
    <VortexDemo/>
    <CardHoverEffectDemo/>
    </div>
  );
}
