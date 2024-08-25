import CodeEditor from "@/components/shared/editor";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex w-screen overflow-hidden overscroll-none flex-col min-h-screen bg-background items-center justify-center bg-gradient-to-b from-black to-violet-950">
      <div className="w-full max-w-screen-md px-8 flex flex-col items-center">
        <h1 className="text-5xl font-black text-center mt-32 leading-none">
          A Collaborative Cloud Code Editor, AI Powered, Auto-Scaling Copilot
        </h1>
        <div className="text-muted-foreground mt-4 text-center ">
          Collaborative Cloud Code Editor is virtual box code editing
          environment with custom AI code autocompletion and real-time
          collaboration. The infrastructure runs on Docker containers and
          Kubernetes to scale automatically based on resource consumption.
        </div>
        <div className="mt-4 flex space-x-4">
          <Link href={"/editor/1"}>
            <Button>Go To Editor</Button>
          </Link>
        </div>
        <div className="w-full rounded-lg bg-neutral-800 mt-8 aspect-video" >
          <Image
            src="/demo.webp"
            alt="Video"
            width={1920}
            height={1080}
            layout="responsive"
            loading="eager"
            className="rounded-lg   object-cover"
          />
        </div>
      </div>

    </div>
  );
}
