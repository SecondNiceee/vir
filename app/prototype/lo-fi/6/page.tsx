// Lo-fi wireframe: Настройки

import Link from "next/link"

function Box({ w, h, className = "" }: { w?: string; h: string; className?: string }) {
  return <div className={`bg-slate-200 border border-slate-300 rounded ${w ?? "w-full"} ${h} ${className}`} />
}

function Label({ text }: { text: string }) {
  return <div className="text-xs text-slate-500 font-semibold uppercase tracking-widest">{text}</div>
}

export default function LoFi6() {
  return (
    <div className="pb-4">
      {/* back header */}
      <div className="flex items-center gap-3 px-5 py-4 border-b border-slate-300">
        <Link href="/prototype/lo-fi/4" className="w-8 h-8 rounded-full border border-slate-300 bg-slate-100 flex items-center justify-center">
          <svg className="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </Link>
        <Box w="w-24" h="h-4" />
      </div>

      <div className="px-5 pt-5 space-y-5">
        {/* account section */}
        <div className="space-y-2">
          <Label text="Аккаунт" />
          <div className="border border-slate-300 rounded-xl overflow-hidden divide-y divide-slate-200">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center gap-4 px-4 py-3.5">
                <div className="flex-1 space-y-1">
                  <Box w="w-36" h="h-3" />
                  {i <= 2 && <Box w="w-24" h="h-2.5" />}
                </div>
                <Box w="w-4" h="h-4" className="shrink-0" />
              </div>
            ))}
          </div>
        </div>

        {/* app section */}
        <div className="space-y-2">
          <Label text="Приложение" />
          <div className="border border-slate-300 rounded-xl overflow-hidden divide-y divide-slate-200">
            {/* toggle row */}
            <div className="flex items-center gap-4 px-4 py-3.5">
              <Box w="w-28" h="h-3" className="flex-1" />
              <div className="w-11 h-6 rounded-full border border-slate-300 bg-slate-100 shrink-0 relative">
                <div className="absolute left-0.5 top-0.5 w-5 h-5 bg-slate-300 rounded-full" />
              </div>
            </div>
            {/* value rows */}
            {[1, 2].map((i) => (
              <div key={i} className="flex items-center gap-4 px-4 py-3.5">
                <div className="flex-1 space-y-1">
                  <Box w="w-20" h="h-3" />
                  {i === 2 && <Box w="w-16" h="h-2.5" />}
                </div>
                <Box w="w-14" h="h-2.5" />
                <Box w="w-4" h="h-4" className="shrink-0" />
              </div>
            ))}
          </div>
        </div>

        {/* privacy section */}
        <div className="space-y-2">
          <Label text="Конфиденциальность" />
          <div className="border border-slate-300 rounded-xl overflow-hidden divide-y divide-slate-200">
            <div className="flex items-center gap-4 px-4 py-3.5">
              <Box w="w-44" h="h-3" className="flex-1" />
              <div className="w-11 h-6 rounded-full border border-slate-300 bg-slate-400 shrink-0 relative">
                <div className="absolute right-0.5 top-0.5 w-5 h-5 bg-white rounded-full" />
              </div>
            </div>
            <div className="flex items-center gap-4 px-4 py-3.5">
              <Box w="w-28" h="h-3" className="flex-1 bg-slate-300" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
