// Lo-fi wireframe: Уведомления

import Link from "next/link"

function Box({ w, h, className = "" }: { w?: string; h: string; className?: string }) {
  return <div className={`bg-slate-200 border border-slate-300 rounded ${w ?? "w-full"} ${h} ${className}`} />
}

function Label({ text }: { text: string }) {
  return <div className="text-xs text-slate-500 font-semibold uppercase tracking-widest">{text}</div>
}

export default function LoFi5() {
  return (
    <div className="pb-4">
      {/* back header */}
      <div className="flex items-center gap-3 px-5 py-4 border-b border-slate-300">
        <Link href="/prototype/lo-fi/4" className="w-8 h-8 rounded-full border border-slate-300 bg-slate-100 flex items-center justify-center">
          <svg className="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </Link>
        <Box w="w-28" h="h-4" />
      </div>

      <div className="px-5 pt-5 space-y-5">
        {/* toggle settings */}
        <div className="space-y-2">
          <Label text="Настройки" />
          <div className="border border-slate-300 rounded-xl overflow-hidden divide-y divide-slate-200">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="flex items-center gap-4 px-4 py-3.5">
                <div className="flex-1 space-y-1">
                  <Box w="w-40" h="h-3" />
                  <Box w="w-32" h="h-2.5" />
                </div>
                <div className="w-11 h-6 rounded-full border border-slate-300 bg-slate-100 shrink-0 relative">
                  <div className={`absolute top-0.5 w-5 h-5 bg-slate-300 rounded-full ${i <= 3 ? "right-0.5" : "left-0.5"}`} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* recent notifications */}
        <div className="space-y-2">
          <Label text="Последние" />
          <div className="space-y-2">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex gap-3 border border-slate-300 bg-slate-50 rounded-xl p-3">
                <Box w="w-10" h="h-10" className="rounded-xl shrink-0" />
                <div className="flex-1 space-y-1.5">
                  <Box w="w-32" h="h-3" />
                  <Box w="w-full" h="h-2.5" />
                  <Box w="w-24" h="h-2" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
