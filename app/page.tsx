import { CardHoverEffectDemo } from "@/components/ui/CardHoverEffectDemo";
import { SparklesPreview } from "@/components/ui/SparklesPreview";
import { VortexDemo } from "@/components/ui/VortexDemo";
import { WavyBackgroundDemo } from "@/components/ui/WavyBackgroundDemo";
import { SparklesCore } from "@/components/ui/sparkles";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen">
    <SparklesPreview />
    {/* <WavyBackgroundDemo/> */}
    <VortexDemo/>
    <CardHoverEffectDemo/>
    </div>
  );
}
