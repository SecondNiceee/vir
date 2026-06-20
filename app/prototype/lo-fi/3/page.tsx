// Lo-fi wireframe: Поиск

function Box({ w, h, className = "" }: { w?: string; h: string; className?: string }) {
  return <div className={`bg-slate-200 border border-slate-300 rounded ${w ?? "w-full"} ${h} ${className}`} />
}

function Label({ text }: { text: string }) {
  return <div className="text-xs text-slate-500 font-semibold uppercase tracking-widest">{text}</div>
}

export default function LoFi3() {
  return (
    <div className="px-5 pt-8 pb-4 space-y-5">
      {/* header */}
      <Box w="w-16" h="h-5" />

      {/* search bar */}
      <div className="flex items-center gap-3 border border-slate-300 rounded-xl px-4 py-3 bg-slate-50">
        <Box w="w-4" h="h-4" className="shrink-0 rounded-full" />
        <Box h="h-3" />
      </div>

      {/* popular tags */}
      <div className="space-y-2">
        <Label text="Популярные темы" />
        <div className="flex flex-wrap gap-2">
          {[48, 60, 72, 44, 36, 52, 64, 80].map((w, i) => (
            <div key={i} className="h-8 rounded-full border border-slate-300 bg-slate-100" style={{ width: w }} />
          ))}
        </div>
      </div>

      {/* categories */}
      <div className="space-y-2">
        <Label text="Категории" />
        <div className="grid grid-cols-2 gap-3">
          {Array(4).fill(null).map((_, i) => (
            <div key={i} className="border border-slate-300 bg-slate-50 rounded-xl p-4 space-y-1.5">
              <Box w="w-24" h="h-3" />
              <Box w="w-16" h="h-2.5" />
            </div>
          ))}
        </div>
      </div>

      {/* recommendations */}
      <div className="space-y-2">
        <Label text="Рекомендуем" />
        <div className="space-y-2">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex items-center gap-3 border border-slate-300 bg-slate-50 rounded-xl p-3">
              <Box w="w-12" h="h-12" className="rounded-xl shrink-0" />
              <div className="flex-1 space-y-1.5">
                <Box w="w-36" h="h-3" />
                <Box w="w-24" h="h-2.5" />
              </div>
              <Box w="w-4" h="h-4" className="shrink-0" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
