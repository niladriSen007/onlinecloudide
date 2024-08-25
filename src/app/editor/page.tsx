import dynamic from "next/dynamic"
const CodeEditor = dynamic(() => import("@/components/shared/editor"), { ssr: false })

const EditorPage = () => {
  return (
    <>
      <CodeEditor />
    </>
  )
}
export default EditorPage