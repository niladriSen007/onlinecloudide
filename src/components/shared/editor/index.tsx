"use client"


import { Button } from "@/components/ui/button"
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"
import { Editor, OnMount } from "@monaco-editor/react"
import { X } from "lucide-react"
import { useRef } from "react"
import monaco from "monaco-editor"

const CodeEditor = () => {
  const editorRef = useRef<null | monaco.editor.IStandaloneCodeEditor>(null)

  const handleMountEditor: OnMount = (editor, monaco) => {
    editorRef.current = editor
  }
  return (
    <div className="h-full overflow-x-hidden p-2">
      <ResizablePanelGroup
        direction="horizontal"
      >
        <ResizablePanel
          maxSize={80}
          minSize={30}
          defaultSize={65}
          className="flex flex-col p-2 gap-3">
          <div className="flex gap-2">
            <Button variant={"secondary"} size={"sm"} className="min-w-20 justify-between">index.html <X className="size-3" /></Button>
            <Button variant={"secondary"} size={"sm"} className="min-w-20 justify-between">style.css <X className="size-3" /></Button>
          </div>
          <div className="grow w-full h-[90vh] overflow-x-hidden rounded-lg">
            <Editor defaultLanguage="typescript" theme="vs-dark" onMount={handleMountEditor} className="" />
          </div>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel defaultSize={35} className=" pt-10">
          <ResizablePanelGroup direction="vertical" className="flex flex-col gap-1">
            <ResizablePanel defaultSize={60} minSize={30} className="p-2 flex flex-col gap-2">
              <Button variant={"secondary"} size={"sm"} className="min-w-20 max-w-32 justify-between">localhost:3000 <X className="size-3" /></Button>
              <div className="w-full grow rounded-lg bg-foreground"></div>
            </ResizablePanel>
            <ResizableHandle />
            <ResizablePanel defaultSize={40} minSize={30} className="p-2 flex flex-col gap-2 ">
              <Button variant={"secondary"} size={"sm"} className="min-w-20 max-w-32 justify-between">Node<X className="size-3" /></Button>
              <div className="w-full grow rounded-lg bg-foreground text-black"></div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </ResizablePanel>

      </ResizablePanelGroup>
    </div>
  )
}
export default CodeEditor