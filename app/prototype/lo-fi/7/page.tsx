// Lo-fi wireframe: Экран урока

function Box({ w, h, className = "" }: { w?: string; h: string; className?: string }) {
  return <div className={`bg-slate-200 border border-slate-300 rounded ${w ?? "w-full"} ${h} ${className}`} />
}

export default function LoFi7() {
  return (
    <div className="pb-4">
      {/* top bar: back + progress + close */}
      <div className="flex items-center gap-3 px-5 pt-8 pb-4">
        <Box w="w-8" h="h-8" className="rounded-full shrink-0" />
        <div className="flex-1 h-2.5 bg-slate-200 border border-slate-300 rounded-full overflow-hidden">
          <div className="h-full bg-slate-400 rounded-full" style={{ width: "40%" }} />
        </div>
        <Box w="w-8" h="h-8" className="rounded-full shrink-0" />
      </div>

      <div className="px-5 space-y-5">
        {/* lesson title */}
        <div className="space-y-2">
          <Box w="w-16" h="h-3" />
          <Box w="w-56" h="h-5" />
        </div>

        {/* media block */}
        <div className="border border-slate-300 bg-slate-100 rounded-2xl flex items-center justify-center" style={{ height: 180 }}>
          <div className="flex flex-col items-center gap-2">
            <Box w="w-14" h="h-14" className="rounded-full" />
            <Box w="w-20" h="h-3" />
          </div>
        </div>

        {/* theory text */}
        <div className="space-y-2">
          <Box w="w-48" h="h-3.5" />
          <Box h="h-2.5" />
          <Box w="w-5/6" h="h-2.5" />
          <Box w="w-3/4" h="h-2.5" />
        </div>

        {/* hint block */}
        <div className="border border-slate-300 bg-slate-50 rounded-xl p-4 space-y-2">
          <Box w="w-20" h="h-3" />
          <Box h="h-2.5" />
          <Box w="w-4/5" h="h-2.5" />
        </div>

        {/* CTA button */}
        <Box h="h-12" className="rounded-2xl" />
      </div>
    </div>
  )
}
