import Navbar from "@/components/shared/Navbar/Navbar"
import dynamic from "next/dynamic"
const CodeEditor = dynamic(() => import("@/components/shared/editor"), { ssr: false })

const EditorPage = () => {
  return (
    <section className="bg-gradient-to-b from-black to-violet-950">
      <Navbar />
      <CodeEditor />
    </section>
  )
}
export default EditorPage