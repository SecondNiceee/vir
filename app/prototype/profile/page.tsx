import Link from "next/link"

const menuItems = [
  { href: "/prototype/settings", label: "Настройки" },
  { href: "/prototype/notifications", label: "Уведомления" },
  { href: "/prototype/help", label: "Помощь" },
]

export default function ProfilePage() {
  return (
    <div className="bg-white">
      <div className="bg-gradient-to-b from-teal-500 to-teal-600 px-5 pt-12 pb-8 text-center">
        <div className="w-20 h-20 rounded-full bg-white/20 border-2 border-white/50 flex items-center justify-center text-white text-3xl font-bold mx-auto mb-3">
          А
        </div>
        <h1 className="text-xl font-bold text-white">Алексей Иванов</h1>
        <p className="text-teal-100 text-sm mt-0.5">Учится с марта 2024</p>
      </div>

      <div className="px-5 pt-5 pb-4">
        <div className="grid grid-cols-3 gap-3 mb-6">
          <div className="bg-amber-50 rounded-2xl p-3 text-center">
            <p className="text-xl font-bold text-amber-500">12</p>
            <p className="text-xs text-slate-500 mt-0.5">Серия</p>
          </div>
          <div className="bg-teal-50 rounded-2xl p-3 text-center">
            <p className="text-xl font-bold text-teal-600">1847</p>
            <p className="text-xs text-slate-500 mt-0.5">XP</p>
          </div>
          <div className="bg-violet-50 rounded-2xl p-3 text-center">
            <p className="text-xl font-bold text-violet-500">5</p>
            <p className="text-xs text-slate-500 mt-0.5">Курсов</p>
          </div>
        </div>

        <div className="mb-6">
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-3">Достижения</p>
          <div className="flex gap-3">
            {[
              { bg: "bg-amber-100", icon: "🏆" },
              { bg: "bg-emerald-100", icon: "⚡" },
              { bg: "bg-blue-100", icon: "🎯" },
              { bg: "bg-violet-100", icon: "🌟" },
              { bg: "bg-slate-100", icon: "+3" },
            ].map(({ bg, icon }, i) => (
              <div
                key={i}
                className={`w-14 h-14 ${bg} rounded-xl flex items-center justify-center ${
                  i === 4 ? "text-slate-400 text-sm font-bold" : "text-2xl"
                }`}
              >
                {icon}
              </div>
            ))}
          </div>
        </div>

        <div className="mb-6">
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-3">Мои курсы</p>
          <div className="space-y-3">
            {[
              { icon: "🐍", title: "Python для начинающих", progress: 65 },
              { icon: "🇬🇧", title: "Английский B2", progress: 30 },
            ].map(({ icon, title, progress }) => (
              <div key={title} className="flex items-center gap-3 p-4 bg-slate-50 rounded-2xl">
                <span className="text-2xl">{icon}</span>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-slate-900">{title}</p>
                  <div className="mt-1.5 h-1.5 bg-slate-200 rounded-full overflow-hidden">
                    <div className="h-full bg-teal-500 rounded-full" style={{ width: `${progress}%` }} />
                  </div>
                </div>
                <span className="text-xs text-slate-500 shrink-0 font-medium">{progress}%</span>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          {menuItems.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="w-full flex items-center gap-4 p-4 bg-slate-50 rounded-2xl hover:bg-slate-100 transition-colors"
            >
              <span className="text-sm font-medium text-slate-800 flex-1">{label}</span>
              <svg className="w-4 h-4 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
