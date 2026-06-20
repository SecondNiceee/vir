export default function QDHomePage() {
  return (
    <div className="bg-white min-h-screen flex flex-col">

      {/* Status bar */}
      <div className="bg-orange-500 px-5 pt-3 pb-2 flex items-center justify-between">
        <span className="text-[11px] font-semibold text-white">9:41</span>
        <div className="flex items-center gap-1.5">
          <svg className="w-[15px] h-[11px] text-white" viewBox="0 0 17 12" fill="currentColor">
            <rect x="0" y="7" width="3" height="5" rx="0.5"/>
            <rect x="4.5" y="4.5" width="3" height="7.5" rx="0.5"/>
            <rect x="9" y="2" width="3" height="10" rx="0.5"/>
            <rect x="13.5" y="0" width="3" height="12" rx="0.5"/>
          </svg>
          <div className="w-6 h-3 rounded-[3px] border border-white/70 p-[1.5px]">
            <div className="h-full rounded-[1.5px] bg-white" style={{width: "80%"}}></div>
          </div>
        </div>
      </div>

      {/* Hero header */}
      <div className="bg-orange-500 px-5 pt-1 pb-8">
        <div className="flex items-start justify-between mb-4">
          <div>
            <p className="text-orange-100 text-xs mb-0.5">Добрый день!</p>
            <h1 className="text-white text-[22px] font-bold leading-tight">Куда доставить?</h1>
          </div>
          <div className="flex items-center gap-2 mt-1">
            <button className="relative w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">
              <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
                <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
              </svg>
              <span className="absolute -top-0.5 -right-0.5 w-3.5 h-3.5 bg-red-500 rounded-full border-2 border-orange-500 flex items-center justify-center">
                <span className="text-white text-[7px] font-bold">2</span>
              </span>
            </button>
            <div className="w-9 h-9 rounded-full bg-white/30 border-2 border-white/60 flex items-center justify-center">
              <span className="text-white text-sm font-bold">М</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2 text-orange-100 text-xs">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5 flex-shrink-0">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
            <circle cx="12" cy="10" r="3"/>
          </svg>
          <span>ул. Ленина, 42, Москва</span>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3">
            <path d="M6 9l6 6 6-6"/>
          </svg>
        </div>
      </div>

      {/* Search bar */}
      <div className="px-4 -mt-5 mb-4">
        <div className="bg-white rounded-2xl shadow-lg border border-slate-100 flex items-center gap-3 px-4 py-3.5">
          <svg viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 flex-shrink-0">
            <circle cx="11" cy="11" r="8"/>
            <path d="M21 21l-4.35-4.35"/>
          </svg>
          <span className="text-slate-400 text-sm">Адрес получателя...</span>
          <div className="ml-auto w-7 h-7 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
            <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
              <path d="M22 3H2l8 9.46V19l4 2v-8.54L22 3z"/>
            </svg>
          </div>
        </div>
      </div>

      <div className="flex-1 px-4 space-y-5">

        {/* Quick categories */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-sm font-bold text-slate-900">Быстрый заказ</h2>
            <span className="text-xs text-orange-500 font-medium">Все</span>
          </div>
          <div className="grid grid-cols-4 gap-2">
            {[
              { label: "Посылка", color: "bg-orange-50", iconColor: "text-orange-500" },
              { label: "Еда", color: "bg-rose-50", iconColor: "text-rose-500" },
              { label: "Аптека", color: "bg-emerald-50", iconColor: "text-emerald-600" },
              { label: "Цветы", color: "bg-violet-50", iconColor: "text-violet-500" },
            ].map((item) => (
              <div key={item.label} className={`${item.color} rounded-2xl p-3 flex flex-col items-center gap-1.5`}>
                <div className={`w-7 h-7 rounded-full ${item.color} flex items-center justify-center ${item.iconColor}`}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                  </svg>
                </div>
                <span className="text-[10px] text-slate-700 font-semibold">{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Active order */}
        <div className="bg-gradient-to-r from-orange-500 to-amber-500 rounded-2xl p-4 text-white">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              <span className="text-xs font-semibold text-white/90 uppercase tracking-wide">Активный заказ</span>
            </div>
            <span className="text-xs bg-white/25 px-2.5 py-0.5 rounded-full font-medium">В пути</span>
          </div>
          <p className="font-bold text-base mb-0.5">Заказ #QD-4821</p>
          <p className="text-white/80 text-xs mb-3">ул. Ленина, 42 → пр. Мира, 17</p>
          <div className="flex items-center gap-3">
            <div className="flex-1 h-1.5 bg-white/30 rounded-full overflow-hidden">
              <div className="h-full bg-white rounded-full" style={{width: "60%"}}></div>
            </div>
            <span className="text-xs font-bold bg-white/25 px-2 py-0.5 rounded-full">~12 мин</span>
          </div>
        </div>

        {/* Recent addresses */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-sm font-bold text-slate-900">Недавние адреса</h2>
            <span className="text-xs text-orange-500 font-medium">Все</span>
          </div>
          <div className="space-y-2">
            {[
              { label: "Домой", addr: "пр. Мира, 17", time: "Сегодня" },
              { label: "Работа", addr: "ул. Садовая, 5", time: "Вчера" },
            ].map((item) => (
              <div key={item.addr} className="flex items-center gap-3 bg-slate-50 rounded-xl px-4 py-3 border border-slate-100">
                <div className="w-9 h-9 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center flex-shrink-0">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                  <p className="text-xs text-slate-500 truncate">{item.addr}</p>
                </div>
                <span className="text-[10px] text-slate-400">{item.time}</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 flex-shrink-0">
                  <path d="M9 18l6-6-6-6"/>
                </svg>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}
