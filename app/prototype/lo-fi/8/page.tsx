// Lo-fi wireframe: Результат урока

function Box({ w, h, className = "" }: { w?: string; h: string; className?: string }) {
  return <div className={`bg-slate-200 border border-slate-300 rounded ${w ?? "w-full"} ${h} ${className}`} />
}

export default function LoFi8() {
  return (
    <div className="px-5 pt-10 pb-6 flex flex-col items-center">
      {/* celebration icon */}
      <div className="w-24 h-24 rounded-full border-2 border-slate-300 bg-slate-100 flex items-center justify-center mb-4">
        <Box w="w-14" h="h-14" className="rounded-full" />
      </div>

      {/* title + subtitle */}
      <Box w="w-40" h="h-5" className="mb-2" />
      <Box w="w-52" h="h-3" className="mb-6" />

      {/* stats row */}
      <div className="flex gap-5 mb-8 w-full justify-center">
        {["XP", "Время", "Серия"].map((label) => (
          <div key={label} className="flex flex-col items-center gap-1.5 border border-slate-300 bg-slate-50 rounded-xl px-5 py-3">
            <Box w="w-10" h="h-6" />
            <Box w="w-12" h="h-2.5" />
          </div>
        ))}
      </div>

      {/* achievement badge */}
      <div className="border border-slate-300 bg-slate-50 rounded-2xl p-4 flex items-center gap-4 w-full mb-8">
        <Box w="w-12" h="h-12" className="rounded-xl shrink-0" />
        <div className="flex-1 space-y-1.5">
          <Box w="w-28" h="h-3" />
          <Box w="w-36" h="h-2.5" />
        </div>
      </div>

      {/* buttons */}
      <div className="w-full space-y-3">
        <Box h="h-12" className="rounded-2xl" />
        <Box h="h-10" className="rounded-2xl bg-slate-100" />
      </div>
    </div>
  )
}
