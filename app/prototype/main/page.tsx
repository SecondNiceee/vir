export default function MainPage() {
  return (
    <div className="px-5 pt-12 pb-4 bg-white">
      <div className="flex items-center justify-between mb-6">
        <div>
          <p className="text-slate-500 text-sm">Привет, Алексей!</p>
          <h1 className="text-xl font-bold text-slate-900">Продолжим учиться?</h1>
        </div>
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-teal-400 to-emerald-500 flex items-center justify-center text-white font-bold text-sm">
          А
        </div>
      </div>

      {/* Streak */}
      <div className="bg-gradient-to-r from-amber-400 to-orange-500 rounded-2xl p-4 mb-6 text-white">
        <div className="flex items-center justify-between mb-3">
          <div>
            <p className="text-white/80 text-sm">Серия дней</p>
            <p className="text-3xl font-bold">12</p>
          </div>
          <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center text-3xl">🔥</div>
        </div>
        <div className="flex gap-1">
          {["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"].map((day, i) => (
            <div
              key={day}
              className={`flex-1 text-center py-1.5 rounded-lg text-xs font-medium ${
                i < 5 ? "bg-white/30" : "bg-white/10 text-white/50"
              }`}
            >
              {day}
            </div>
          ))}
        </div>
      </div>

      {/* Continue */}
      <div className="mb-6">
        <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-3">Продолжить</p>
        <div className="bg-teal-50 border border-teal-100 rounded-2xl p-4">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-teal-500 rounded-xl flex items-center justify-center shrink-0">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-semibold text-slate-900 text-sm">Python для начинающих</p>
              <p className="text-xs text-slate-500 mb-2">Урок 8: Циклы</p>
              <div className="h-2 bg-teal-100 rounded-full overflow-hidden">
                <div className="h-full bg-teal-500 rounded-full" style={{ width: "65%" }} />
              </div>
            </div>
            <svg className="w-5 h-5 text-teal-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>

      {/* Daily goal */}
      <div className="mb-6">
        <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-3">Дневная цель</p>
        <div className="flex items-center gap-4 bg-slate-50 rounded-2xl p-4">
          <div className="relative w-16 h-16 shrink-0">
            <svg className="w-16 h-16 -rotate-90" viewBox="0 0 64 64">
              <circle cx="32" cy="32" r="28" stroke="#e2e8f0" strokeWidth="6" fill="none" />
              <circle cx="32" cy="32" r="28" stroke="#14b8a6" strokeWidth="6" fill="none" strokeLinecap="round" strokeDasharray="176" strokeDashoffset="53" />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center text-sm font-bold text-teal-600">70%</div>
          </div>
          <div>
            <p className="font-semibold text-slate-900">14 / 20 XP</p>
            <p className="text-sm text-slate-500">Ещё 1 урок до цели!</p>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div>
        <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-3">Категории</p>
        <div className="grid grid-cols-2 gap-3">
          {[
            { bg: "bg-violet-50 border-violet-100", label: "Программирование" },
            { bg: "bg-blue-50 border-blue-100", label: "Языки" },
            { bg: "bg-amber-50 border-amber-100", label: "Бизнес" },
            { bg: "bg-emerald-50 border-emerald-100", label: "Дизайн" },
          ].map(({ bg, label }) => (
            <div key={label} className={`${bg} border rounded-2xl p-4 text-center`}>
              <p className="text-sm font-medium text-slate-900">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
