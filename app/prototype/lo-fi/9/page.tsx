// Lo-fi wireframe: Прогресс

function Box({ w, h, className = "" }: { w?: string; h: string; className?: string }) {
  return <div className={`bg-slate-200 border border-slate-300 rounded ${w ?? "w-full"} ${h} ${className}`} />
}

function Label({ text }: { text: string }) {
  return <div className="text-xs text-slate-500 font-semibold uppercase tracking-widest">{text}</div>
}

const TAB_ICONS = [
  { d: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" },
  { d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" },
  { d: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" },
  { d: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" },
  { d: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" },
]

export default function LoFi9() {
  return (
    <div className="px-5 pt-8 pb-4 space-y-5 flex flex-col min-h-full">
      {/* title */}
      <Box w="w-24" h="h-5" />

      {/* weekly chart */}
      <div className="space-y-2">
        <Label text="Активность" />
        <div className="border border-slate-300 bg-slate-50 rounded-xl p-4">
          <div className="flex items-end justify-between gap-1.5 h-20 mb-2">
            {[40, 60, 80, 50, 70, 90, 30].map((h, i) => (
              <div
                key={i}
                className={`flex-1 rounded-t ${i === 5 ? "bg-slate-400" : "bg-slate-300"} border border-slate-300`}
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
          <div className="flex justify-between">
            {["Пн","Вт","Ср","Чт","Пт","Сб","Вс"].map((d) => (
              <div key={d} className="flex-1 h-2 bg-slate-200 rounded" />
            ))}
          </div>
        </div>
      </div>

      {/* stats grid */}
      <div className="grid grid-cols-2 gap-3">
        {["Уроков", "Минут", "Серия", "XP"].map((label) => (
          <div key={label} className="border border-slate-300 bg-slate-50 rounded-xl p-3 space-y-1.5">
            <Box w="w-14" h="h-5" />
            <Box w="w-10" h="h-2.5" />
          </div>
        ))}
      </div>

      {/* achievements */}
      <div className="space-y-2 flex-1">
        <Label text="Достижения" />
        <div className="flex gap-3">
          {Array(4).fill(null).map((_, i) => (
            <Box key={i} w="w-14" h="h-14" className="rounded-xl shrink-0" />
          ))}
        </div>
      </div>

      {/* tab bar */}
      <div className="mt-auto pt-3 border-t border-slate-200">
        <div className="flex justify-around items-center">
          {TAB_ICONS.map(({ d }, i) => (
            <div key={i} className="flex flex-col items-center gap-1">
              <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${i === 3 ? "bg-slate-400" : "bg-slate-200 border border-slate-300"}`}>
                <svg className={`w-4 h-4 ${i === 3 ? "text-white" : "text-slate-400"}`} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d={d} />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
