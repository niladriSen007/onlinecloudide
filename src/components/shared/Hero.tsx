"use client"
import Image from "next/image"
import Link from "next/link"
import { Button } from "../ui/button"
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="w-full max-w-screen-md px-8 flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, }}
        animate={{ opacity: 1, }}
        transition={{ duration: 1 }}

      >
        <h1 className="text-5xl font-black text-center mt-32 leading-none">
          A Collaborative Cloud Code Editor, AI Powered, Auto-Scaling Copilot
        </h1>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, }}
        animate={{ opacity: 1, }}
        transition={{ duration: 5 }}
        className="text-muted-foreground mt-4 text-center ">
        Collaborative Cloud Code Editor is virtual box code editing
        environment with custom AI code autocompletion and real-time
        collaboration. The infrastructure runs on Docker containers and
        Kubernetes to scale automatically based on resource consumption.
      </motion.div>
      <motion.div
       initial={{ opacity: 0,  }}
       animate={{ opacity: 1,  }}
       transition={{ delay: 2,duration: 3 }}
      className="mt-4 flex space-x-4">
        <Link href={"/editor/1"}>
        <Button className="border-r-4 border-violet-800 rounded-md">Go To Editor</Button>
        </Link>
      </motion.div>
      <motion.div
       initial={{ opacity: 0,  }}
       animate={{ opacity: 1,  }}
       transition={{ duration: 3 }}
      className="w-full rounded-lg bg-neutral-800 mt-8 aspect-video" >
        <Image
          src="/demo.webp"
          alt="Video"
          width={1920}
          height={1080}
          layout="responsive"
          loading="eager"
          className="rounded-lg   object-cover"
        />
      </motion.div>
    </div>
  )
}
export default Hero