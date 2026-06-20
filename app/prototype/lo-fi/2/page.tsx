// Lo-fi wireframe: Курсы

function Box({ w, h, className = "" }: { w?: string; h: string; className?: string }) {
  return <div className={`bg-slate-200 border border-slate-300 rounded ${w ?? "w-full"} ${h} ${className}`} />
}

function Label({ text }: { text: string }) {
  return <div className="text-xs text-slate-500 font-semibold uppercase tracking-widest">{text}</div>
}

export default function LoFi2() {
  return (
    <div className="px-5 pt-8 pb-4 space-y-5">
      {/* header */}
      <Box w="w-20" h="h-5" />

      {/* search bar */}
      <div className="flex items-center gap-3 border border-slate-300 rounded-xl px-4 py-3 bg-slate-50">
        <Box w="w-4" h="h-4" className="shrink-0 rounded-full" />
        <Box h="h-3" />
      </div>

      {/* filter chips */}
      <div className="flex gap-2">
        {[40, 80, 48, 44, 52].map((w, i) => (
          <div key={i} className={`h-8 rounded-full border border-slate-300 shrink-0 ${i === 0 ? "bg-slate-400" : "bg-slate-100"}`} style={{ width: w }} />
        ))}
      </div>

      {/* featured card */}
      <div className="border border-slate-300 rounded-xl p-4 space-y-3 bg-slate-100">
        <div className="flex items-start justify-between">
          <Box w="w-20" h="h-5" className="rounded-full" />
          <Box w="w-9" h="h-9" className="rounded-xl shrink-0" />
        </div>
        <Box w="w-48" h="h-4" />
        <Box w="w-32" h="h-3" />
        <div className="flex items-center justify-between">
          <div className="flex gap-1">
            <Box w="w-4" h="h-4" />
            <Box w="w-6" h="h-3" />
          </div>
          <Box w="w-20" h="h-7" className="rounded-full" />
        </div>
      </div>

      {/* course list */}
      <div className="space-y-3">
        {[1, 2, 3].map((i) => (
          <div key={i} className="border border-slate-300 rounded-xl p-4 space-y-2">
            <div className="flex items-start justify-between">
              <Box w="w-16" h="h-5" className="rounded-full" />
              <Box w="w-9" h="h-9" className="rounded-xl shrink-0" />
            </div>
            <Box w="w-40" h="h-3.5" />
            <Box w="w-28" h="h-2.5" />
            <div className="flex items-center justify-between pt-1">
              <div className="flex gap-1 items-center">
                <Box w="w-3.5" h="h-3.5" />
                <Box w="w-5" h="h-2.5" />
              </div>
              <Box w="w-16" h="h-2.5" />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
