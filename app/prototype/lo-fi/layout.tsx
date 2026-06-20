import Link from "next/link"

const tabs = [
  { href: "/prototype/lo-fi/1", label: "Главная" },
  { href: "/prototype/lo-fi/2", label: "Курсы" },
  { href: "/prototype/lo-fi/3", label: "Поиск" },
  { href: "/prototype/lo-fi/4", label: "Профиль" },
]

export default function LoFiLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-200 flex items-start justify-center py-8">
      <div className="relative w-full max-w-[390px] bg-white flex flex-col shadow-md border border-slate-300 rounded-none" style={{ minHeight: 700 }}>
        {/* status bar */}
        <div className="flex items-center justify-between px-5 py-2 border-b border-slate-200">
          <div className="h-2 w-8 bg-slate-300 rounded" />
          <div className="flex gap-1">
            <div className="h-2 w-4 bg-slate-300 rounded" />
            <div className="h-2 w-4 bg-slate-300 rounded" />
            <div className="h-2 w-6 bg-slate-300 rounded" />
          </div>
        </div>

        <main className="flex-1 overflow-y-auto pb-16">
          {children}
        </main>

        {/* bottom nav */}
        <div className="absolute bottom-0 left-0 right-0 border-t border-slate-300 bg-white">
          <div className="flex justify-around items-center px-4 py-2">
            {tabs.map(({ href, label }, i) => {
              const icons = [
                "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
                "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
                "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",
                "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z",
              ]
              return (
                <Link key={href} href={href} className="flex flex-col items-center gap-0.5 group">
                  <div className="w-7 h-7 rounded-lg border border-slate-300 bg-slate-100 flex items-center justify-center group-hover:border-slate-400">
                    <svg className="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d={icons[i]} />
                    </svg>
                  </div>
                  <span className="text-[9px] text-slate-500">{label}</span>
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
