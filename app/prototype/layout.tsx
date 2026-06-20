import { BottomNav } from "@/components/prototype/bottom-nav"

export default function PrototypeLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-100 flex items-start justify-center">
      <div className="relative w-full max-w-[430px] min-h-screen bg-white flex flex-col shadow-xl">
        <main className="flex-1 overflow-y-auto pb-20">
          {children}
        </main>
        <BottomNav />
      </div>
    </div>
  )
}
