// Lo-fi wireframe: Главная

function Box({ w, h, className = "" }: { w?: string; h: string; className?: string }) {
  return <div className={`bg-slate-200 border border-slate-300 rounded ${w ?? "w-full"} ${h} ${className}`} />
}

function Label({ text, size = "sm" }: { text: string; size?: "xs" | "sm" | "base" | "lg" }) {
  const cls: Record<string, string> = { xs: "text-xs", sm: "text-sm", base: "text-base", lg: "text-lg" }
  return <div className={`${cls[size]} text-slate-500 font-medium`}>{text}</div>
}

function Row({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`flex items-center gap-3 ${className}`}>{children}</div>
}

export default function LoFi1() {
  return (
    <div className="px-5 pt-8 pb-4 space-y-5">
      {/* header */}
      <Row className="justify-between">
        <div className="space-y-1">
          <Box w="w-28" h="h-3" />
          <Box w="w-36" h="h-4" />
        </div>
        <Box w="w-10" h="h-10" className="rounded-full" />
      </Row>

      {/* streak banner */}
      <div className="border border-slate-300 rounded-xl p-4 space-y-3">
        <Row className="justify-between">
          <div className="space-y-1">
            <Box w="w-20" h="h-3" />
            <Box w="w-8" h="h-6" />
          </div>
          <Box w="w-12" h="h-12" className="rounded-xl" />
        </Row>
        <div className="flex gap-1">
          {Array(7).fill(null).map((_, i) => (
            <div key={i} className="flex-1 h-7 border border-slate-300 bg-slate-100 rounded-lg" />
          ))}
        </div>
      </div>

      {/* section: Продолжить */}
      <div className="space-y-2">
        <Label text="Продолжить" size="xs" />
        <div className="border border-slate-300 rounded-xl p-3">
          <Row>
            <Box w="w-14" h="h-14" className="rounded-xl shrink-0" />
            <div className="flex-1 space-y-1.5">
              <Box w="w-40" h="h-3" />
              <Box w="w-24" h="h-2.5" />
              <div className="h-2 bg-slate-200 border border-slate-300 rounded-full overflow-hidden">
                <div className="h-full bg-slate-400 rounded-full" style={{ width: "65%" }} />
              </div>
            </div>
            <Box w="w-5" h="h-5" className="rounded shrink-0" />
          </Row>
        </div>
      </div>

      {/* section: Дневная цель */}
      <div className="space-y-2">
        <Label text="Дневная цель" size="xs" />
        <div className="border border-slate-300 rounded-xl p-3">
          <Row>
            <Box w="w-16" h="h-16" className="rounded-full shrink-0" />
            <div className="space-y-1.5">
              <Box w="w-24" h="h-3.5" />
              <Box w="w-36" h="h-2.5" />
            </div>
          </Row>
        </div>
      </div>

      {/* section: Категории */}
      <div className="space-y-2">
        <Label text="Категории" size="xs" />
        <div className="grid grid-cols-2 gap-3">
          {Array(4).fill(null).map((_, i) => (
            <div key={i} className="border border-slate-300 bg-slate-50 rounded-xl p-4 flex flex-col items-center gap-2">
              <Box w="w-8" h="h-8" className="rounded-lg" />
              <Box w="w-20" h="h-2.5" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
