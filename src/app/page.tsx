import CodeEditor from "@/components/shared/editor";
import Hero from "@/components/shared/Hero";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
    <div className="flex w-screen overflow-hidden overscroll-none flex-col min-h-screen bg-background items-center justify-center bg-gradient-to-b from-black to-violet-950">
      <Hero />

    </div>
  );
}
