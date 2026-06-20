// Lo-fi wireframe: Профиль

function Box({ w, h, className = "" }: { w?: string; h: string; className?: string }) {
  return <div className={`bg-slate-200 border border-slate-300 rounded ${w ?? "w-full"} ${h} ${className}`} />
}

function Label({ text }: { text: string }) {
  return <div className="text-xs text-slate-500 font-semibold uppercase tracking-widest">{text}</div>
}

export default function LoFi4() {
  return (
    <div className="pb-4">
      {/* profile header */}
      <div className="border-b border-slate-300 bg-slate-100 px-5 pt-10 pb-6 flex flex-col items-center gap-3">
        <Box w="w-20" h="h-20" className="rounded-full" />
        <Box w="w-32" h="h-4" />
        <Box w="w-40" h="h-3" />
      </div>

      <div className="px-5 pt-5 space-y-5">
        {/* stats */}
        <div className="grid grid-cols-3 gap-3">
          {["Серия", "XP", "Курсов"].map((label) => (
            <div key={label} className="border border-slate-300 bg-slate-50 rounded-xl p-3 flex flex-col items-center gap-1.5">
              <Box w="w-12" h="h-5" />
              <Box w="w-10" h="h-2.5" />
            </div>
          ))}
        </div>

        {/* achievements */}
        <div className="space-y-2">
          <Label text="Достижения" />
          <div className="flex gap-3">
            {Array(4).fill(null).map((_, i) => (
              <Box key={i} w="w-14" h="h-14" className="rounded-xl shrink-0" />
            ))}
            <div className="w-14 h-14 rounded-xl border border-slate-300 bg-slate-100 flex items-center justify-center">
              <Box w="w-8" h="h-3" />
            </div>
          </div>
        </div>

        {/* my courses */}
        <div className="space-y-2">
          <Label text="Мои курсы" />
          <div className="space-y-2">
            {[65, 30].map((progress, i) => (
              <div key={i} className="flex items-center gap-3 border border-slate-300 bg-slate-50 rounded-xl p-3">
                <Box w="w-10" h="h-10" className="rounded-xl shrink-0" />
                <div className="flex-1 space-y-1.5">
                  <Box w="w-36" h="h-3" />
                  <div className="h-1.5 bg-slate-200 border border-slate-300 rounded-full overflow-hidden">
                    <div className="h-full bg-slate-400 rounded-full" style={{ width: `${progress}%` }} />
                  </div>
                </div>
                <Box w="w-8" h="h-2.5" className="shrink-0" />
              </div>
            ))}
          </div>
        </div>

        {/* menu items */}
        <div className="space-y-2">
          {["Настройки", "Уведомления", "Помощь"].map((item) => (
            <div key={item} className="flex items-center gap-4 border border-slate-300 bg-slate-50 rounded-xl px-4 py-3.5">
              <Box w="w-28" h="h-3" className="flex-1" />
              <Box w="w-4" h="h-4" className="shrink-0" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
