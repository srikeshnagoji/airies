import { InfoCardHover } from "@/components/ui/InfoCardHover";
import { FloatingNavBar } from "@/components/ui/FloatingNavBar";
import { Sparkles } from "@/components/ui/Sparkles";
import { VortexComponent } from "@/components/ui/VortexComponent";
import { WavyBackgroundDemo } from "@/components/ui/WavyBackgroundDemo";
import Image from "next/image";
import SVGIMG from "../public/AIRBUS_White.svg";

export default function Home() {
  return (
    <div className="h-screen">
      <Image src={SVGIMG} alt={""} className="fixed -top-20 -left-10 mx-auto z-20 size-64"/>
      <FloatingNavBar/>
    <Sparkles />
    {/* <WavyBackgroundDemo/> */}
    <VortexComponent/>
    <InfoCardHover/>
    </div>
  );
}
