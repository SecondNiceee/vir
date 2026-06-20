import { Icon, type IconName } from "@/components/prototype/icons"

export default function CoursesPage() {
  return (
    <div className="px-5 pt-12 pb-4 bg-white">
      <h1 className="text-2xl font-bold text-slate-900 mb-4">Курсы</h1>

      <div className="relative mb-4">
        <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <input
          type="text"
          placeholder="Поиск курсов..."
          className="w-full pl-12 pr-4 py-3 bg-slate-100 rounded-xl text-sm outline-none focus:ring-2 focus:ring-teal-400"
          readOnly
        />
      </div>

      <div className="flex gap-2 mb-6 overflow-x-auto pb-1">
        {["Все", "Программирование", "Языки", "Дизайн", "Бизнес"].map((f, i) => (
          <button
            key={f}
            className={`px-4 py-2 text-sm font-medium rounded-full whitespace-nowrap shrink-0 ${
              i === 0 ? "bg-teal-500 text-white" : "bg-slate-100 text-slate-600"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="space-y-4">
        <div className="bg-gradient-to-br from-teal-500 to-emerald-600 rounded-2xl p-5 text-white">
          <div className="flex justify-between items-start mb-3">
            <span className="text-xs bg-white/20 px-2.5 py-1 rounded-full font-medium">Популярное</span>
            <span className="w-9 h-9 bg-white/20 rounded-xl flex items-center justify-center">
              <Icon name="code" className="w-5 h-5 text-white" strokeWidth={2} />
            </span>
          </div>
          <h3 className="font-bold text-lg mb-1">Python для начинающих</h3>
          <p className="text-white/80 text-sm mb-4">24 урока · 6 часов</p>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              <svg className="w-4 h-4 text-amber-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              <span className="text-sm font-semibold">4.9</span>
            </div>
            <span className="text-sm font-semibold bg-white/20 px-3 py-1 rounded-full">Бесплатно</span>
          </div>
        </div>

        {[
          { badge: "Новинка", badgeBg: "bg-violet-100 text-violet-700", icon: "language" as IconName, iconColor: "bg-blue-50 text-blue-500", title: "Английский B2", meta: "48 уроков · 12 часов", price: "Premium", rating: "4.8" },
          { badge: "Хит", badgeBg: "bg-amber-100 text-amber-700", icon: "palette" as IconName, iconColor: "bg-rose-50 text-rose-500", title: "UI/UX дизайн", meta: "32 урока · 8 часов", price: "Premium", rating: "4.7" },
          { badge: "Новинка", badgeBg: "bg-blue-100 text-blue-700", icon: "chart" as IconName, iconColor: "bg-emerald-50 text-emerald-500", title: "Excel & Аналитика", meta: "20 уроков · 5 часов", price: "Бесплатно", rating: "4.6" },
        ].map(({ badge, badgeBg, icon, iconColor, title, meta, price, rating }) => (
          <div key={title} className="bg-white border border-slate-100 rounded-2xl p-4 shadow-sm">
            <div className="flex justify-between items-start mb-2">
              <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${badgeBg}`}>{badge}</span>
              <span className={`w-9 h-9 rounded-xl flex items-center justify-center ${iconColor}`}>
                <Icon name={icon} className="w-5 h-5" strokeWidth={2} />
              </span>
            </div>
            <h3 className="font-bold text-slate-900 mb-1">{title}</h3>
            <p className="text-slate-500 text-sm mb-3">{meta}</p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1">
                <svg className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                <span className="text-sm text-slate-600 font-medium">{rating}</span>
              </div>
              <span className={`text-sm font-semibold ${price === "Бесплатно" ? "text-teal-500" : "text-violet-500"}`}>
                {price}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
