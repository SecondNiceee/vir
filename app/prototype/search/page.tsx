export default function SearchPage() {
  return (
    <div className="px-5 pt-12 pb-4 bg-white">
      <h1 className="text-2xl font-bold text-slate-900 mb-4">Поиск</h1>

      <div className="relative mb-6">
        <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <input
          type="text"
          placeholder="Курсы, темы, навыки..."
          className="w-full pl-12 pr-4 py-3 bg-slate-100 rounded-xl text-sm outline-none focus:ring-2 focus:ring-teal-400"
        />
      </div>

      <div className="mb-6">
        <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-3">Популярные темы</p>
        <div className="flex flex-wrap gap-2">
          {["Python", "JavaScript", "Английский", "Дизайн", "SQL", "React", "Маркетинг", "Data Science"].map((tag) => (
            <button
              key={tag}
              className="px-4 py-2 bg-slate-100 text-slate-700 text-sm rounded-full hover:bg-teal-50 hover:text-teal-700 transition-colors"
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-3">Категории</p>
        <div className="grid grid-cols-2 gap-3">
          {[
            { label: "Программирование", count: "42 курса", bg: "bg-violet-50 border-violet-100" },
            { label: "Языки", count: "28 курсов", bg: "bg-blue-50 border-blue-100" },
            { label: "Дизайн", count: "19 курсов", bg: "bg-rose-50 border-rose-100" },
            { label: "Бизнес", count: "15 курсов", bg: "bg-amber-50 border-amber-100" },
          ].map(({ label, count, bg }) => (
            <div key={label} className={`${bg} border rounded-2xl p-4`}>
              <p className="text-sm font-semibold text-slate-900">{label}</p>
              <p className="text-xs text-slate-500 mt-0.5">{count}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-3">Рекомендуем</p>
        <div className="space-y-3">
          {[
            { emoji: "🐍", title: "Python для начинающих", sub: "24 урока · Бесплатно", color: "bg-teal-500" },
            { emoji: "🇬🇧", title: "Английский B2", sub: "48 уроков · Premium", color: "bg-blue-500" },
            { emoji: "🎨", title: "UI/UX дизайн", sub: "32 урока · Premium", color: "bg-violet-500" },
          ].map(({ emoji, title, sub, color }) => (
            <div key={title} className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl">
              <div className={`w-12 h-12 ${color} rounded-xl flex items-center justify-center text-2xl shrink-0`}>
                {emoji}
              </div>
              <div>
                <p className="font-semibold text-slate-900 text-sm">{title}</p>
                <p className="text-xs text-slate-500 mt-0.5">{sub}</p>
              </div>
              <svg className="w-5 h-5 text-slate-300 ml-auto shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
