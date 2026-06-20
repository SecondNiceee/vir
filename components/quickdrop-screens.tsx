// Hi-Fi компоненты экранов QuickDrop — сервис доставки

// ─── Общие утилиты ───────────────────────────────────────────────────────────

function StatusBar({ dark = false }: { dark?: boolean }) {
  const text = dark ? "text-white" : "text-slate-700"
  const bg = dark ? "bg-orange-500" : "bg-white"
  return (
    <div className={`${bg} px-5 pt-3 pb-2 flex items-center justify-between`}>
      <span className={`text-[11px] font-semibold ${text}`}>9:41</span>
      <div className="flex items-center gap-1.5">
        {/* signal */}
        <svg className={`w-[15px] h-[11px] ${dark ? "text-white" : "text-slate-700"}`} viewBox="0 0 17 12" fill="currentColor">
          <rect x="0" y="7" width="3" height="5" rx="0.5"/>
          <rect x="4.5" y="4.5" width="3" height="7.5" rx="0.5"/>
          <rect x="9" y="2" width="3" height="10" rx="0.5"/>
          <rect x="13.5" y="0" width="3" height="12" rx="0.5"/>
        </svg>
        {/* wifi */}
        <svg className={`w-[15px] h-[11px] ${dark ? "text-white" : "text-slate-700"}`} viewBox="0 0 20 14" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
          <path d="M1 5c2.5-2.5 5.9-4 9-4s6.5 1.5 9 4"/>
          <path d="M4 8.5c1.5-1.5 3.7-2.5 6-2.5s4.5 1 6 2.5"/>
          <path d="M7.5 12c.7-.7 1.6-1 2.5-1s1.8.3 2.5 1"/>
          <circle cx="10" cy="14" r="1" fill="currentColor" stroke="none"/>
        </svg>
        {/* battery */}
        <div className={`flex items-center gap-0.5`}>
          <div className={`w-6 h-3 rounded-[3px] border ${dark ? "border-white/70" : "border-slate-500"} p-[1.5px] relative`}>
            <div className={`h-full rounded-[1.5px] ${dark ? "bg-white" : "bg-slate-700"}`} style={{width: "80%"}}></div>
          </div>
          <div className={`w-[2px] h-[5px] rounded-r-[1px] ${dark ? "bg-white/60" : "bg-slate-500"}`}></div>
        </div>
      </div>
    </div>
  )
}

function BottomNav({ active }: { active: "home" | "orders" | "chat" | "profile" }) {
  const tabs = [
    {
      id: "home",
      label: "Главная",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
        </svg>
      ),
    },
    {
      id: "orders",
      label: "Заказы",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
          <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/>
        </svg>
      ),
    },
    {
      id: "chat",
      label: "Чат",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
          <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
        </svg>
      ),
    },
    {
      id: "profile",
      label: "Профиль",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
          <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
        </svg>
      ),
    },
  ]

  return (
    <div className="bg-white border-t border-slate-100 px-2 pt-2 pb-5 flex items-center justify-around">
      {tabs.map((tab) => {
        const isActive = tab.id === active
        return (
          <div key={tab.id} className="flex flex-col items-center gap-0.5 min-w-[56px]">
            <div className={`${isActive ? "text-orange-500" : "text-slate-400"}`}>{tab.icon}</div>
            <span className={`text-[10px] font-medium ${isActive ? "text-orange-500" : "text-slate-400"}`}>{tab.label}</span>
            {isActive && <div className="w-1 h-1 rounded-full bg-orange-500 mt-0.5"></div>}
          </div>
        )
      })}
    </div>
  )
}

// ─── Экран 1: Главный экран ───────────────────────────────────────────────────

export function QDHomeScreen({ scale = 1 }: { scale?: number }) {
  return (
    <div
      className="bg-white rounded-[44px] overflow-hidden shadow-2xl border border-slate-200/80 flex flex-col"
      style={{ width: 390 * scale, fontSize: `${scale * 100}%` }}
    >
      <StatusBar dark />

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

        {/* Location row */}
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

      {/* Search bar — float over hero */}
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

      <div className="flex-1 px-4 space-y-5 overflow-hidden">

        {/* Quick categories */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-sm font-bold text-slate-900">Быстрый заказ</h2>
            <span className="text-xs text-orange-500 font-medium">Все</span>
          </div>
          <div className="grid grid-cols-4 gap-2">
            {[
              { label: "Посылка", color: "bg-orange-50", iconColor: "text-orange-500", icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
                  <line x1="12" y1="22.08" x2="12" y2="12"/>
                </svg>
              )},
              { label: "Еда", color: "bg-rose-50", iconColor: "text-rose-500", icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                  <path d="M18 8h1a4 4 0 0 1 0 8h-1"/>
                  <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/>
                  <line x1="6" y1="1" x2="6" y2="4"/>
                  <line x1="10" y1="1" x2="10" y2="4"/>
                  <line x1="14" y1="1" x2="14" y2="4"/>
                </svg>
              )},
              { label: "Аптека", color: "bg-emerald-50", iconColor: "text-emerald-600", icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                  <path d="M8 2h8l1 4H7L8 2z"/>
                  <path d="M7 6h10l-1 14H8L7 6z"/>
                  <line x1="12" y1="10" x2="12" y2="16"/>
                  <line x1="9" y1="13" x2="15" y2="13"/>
                </svg>
              )},
              { label: "Цветы", color: "bg-violet-50", iconColor: "text-violet-500", icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                  <path d="M12 22V12"/>
                  <path d="M12 12c-2-2-4-3-6-2s-3 4-1 6 4 2 6 0"/>
                  <path d="M12 12c2-2 4-3 6-2s3 4 1 6-4 2-6 0"/>
                  <path d="M12 12c0-3 1-5 3-6s5 0 5 3-2 5-5 5"/>
                  <path d="M12 12c0-3-1-5-3-6s-5 0-5 3 2 5 5 5"/>
                </svg>
              )},
            ].map((item) => (
              <div key={item.label} className={`${item.color} rounded-2xl p-3 flex flex-col items-center gap-1.5`}>
                <div className={`${item.iconColor}`}>{item.icon}</div>
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
              { icon: "🏠", label: "Домой", addr: "пр. Мира, 17", time: "Сегодня" },
              { icon: "💼", label: "Работа", addr: "ул. Садовая, 5", time: "Вчера" },
            ].map((item) => (
              <div key={item.addr} className="flex items-center gap-3 bg-slate-50 rounded-xl px-4 py-3 border border-slate-100">
                <div className="w-9 h-9 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center text-lg flex-shrink-0">
                  {item.icon}
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

      <div className="mt-4">
        <BottomNav active="home" />
      </div>
    </div>
  )
}

// ─── Экран 2: Оформление заказа ───────────────────────────────────────────────

export function QDOrderScreen({ scale = 1 }: { scale?: number }) {
  return (
    <div
      className="bg-white rounded-[44px] overflow-hidden shadow-2xl border border-slate-200/80 flex flex-col"
      style={{ width: 390 * scale, fontSize: `${scale * 100}%` }}
    >
      <StatusBar />

      {/* Top bar */}
      <div className="px-5 py-3 flex items-center gap-3">
        <button className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center flex-shrink-0">
          <svg viewBox="0 0 24 24" fill="none" stroke="#1e293b" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" className="w-4.5 h-4.5">
            <path d="M15 18l-6-6 6-6"/>
          </svg>
        </button>
        <h1 className="text-lg font-bold text-slate-900 flex-1">Новый заказ</h1>
        <button className="text-xs text-orange-500 font-semibold">Сохранить</button>
      </div>

      {/* Map */}
      <div className="mx-4 mb-4 rounded-2xl overflow-hidden h-[148px] bg-slate-100 relative">
        {/* Map grid imitation */}
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(148,163,184,0.2) 1px, transparent 1px),
            linear-gradient(90deg, rgba(148,163,184,0.2) 1px, transparent 1px)
          `,
          backgroundSize: "36px 36px"
        }}></div>
        {/* Roads */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 382 148" preserveAspectRatio="xMidYMid slice">
          <line x1="0" y1="74" x2="382" y2="74" stroke="#e2e8f0" strokeWidth="12"/>
          <line x1="191" y1="0" x2="191" y2="148" stroke="#e2e8f0" strokeWidth="12"/>
          <line x1="0" y1="110" x2="382" y2="110" stroke="#e2e8f0" strokeWidth="8"/>
          {/* route */}
          <path d="M80 110 C80 74 191 74 295 36" stroke="#f97316" strokeWidth="3.5" strokeDasharray="8 5" fill="none" strokeLinecap="round"/>
          {/* from pin */}
          <circle cx="80" cy="110" r="7" fill="#f97316" stroke="white" strokeWidth="2.5"/>
          {/* to pin */}
          <circle cx="295" cy="36" r="7" fill="#0f172a" stroke="white" strokeWidth="2.5"/>
          {/* courier */}
          <circle cx="192" cy="74" r="11" fill="#f97316" stroke="white" strokeWidth="3"/>
          <path d="M192 69 l3 5 h-6 z" fill="white"/>
        </svg>
        {/* ETA badge */}
        <div className="absolute bottom-3 right-3 bg-white rounded-xl px-3 py-1.5 shadow-md flex items-center gap-1.5">
          <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
          <span className="text-xs font-bold text-slate-900">~18 мин</span>
        </div>
        {/* Expand */}
        <button className="absolute top-3 right-3 w-7 h-7 bg-white rounded-lg shadow flex items-center justify-center">
          <svg viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
            <path d="M15 3h6m0 0v6m0-6l-7 7M9 21H3m0 0v-6m0 6l7-7"/>
          </svg>
        </button>
      </div>

      <div className="flex-1 px-4 space-y-4 overflow-hidden">

        {/* Address inputs */}
        <div className="bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden">
          {/* From */}
          <div className="flex items-center gap-3 px-4 py-3.5">
            <div className="flex flex-col items-center gap-0.5 flex-shrink-0">
              <div className="w-3 h-3 rounded-full bg-orange-500 border-2 border-white ring-1 ring-orange-300"></div>
              <div className="w-[1.5px] h-4 bg-slate-300"></div>
            </div>
            <div className="flex-1">
              <p className="text-[10px] text-slate-400 mb-0.5">Откуда забрать</p>
              <p className="text-sm font-semibold text-slate-900">ул. Ленина, 42</p>
            </div>
            <button className="text-xs text-orange-500 font-medium">Изменить</button>
          </div>
          <div className="border-t border-slate-200 mx-4"></div>
          {/* To */}
          <div className="flex items-center gap-3 px-4 py-3.5">
            <div className="w-3 h-3 rounded-full border-2 border-slate-400 flex-shrink-0 ml-0"></div>
            <div className="flex-1">
              <p className="text-[10px] text-slate-400 mb-0.5">Куда доставить</p>
              <p className="text-sm text-slate-400">Введите адрес получателя...</p>
            </div>
          </div>
        </div>

        {/* Package details */}
        <div>
          <h2 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2.5">Тип посылки</h2>
          <div className="grid grid-cols-3 gap-2">
            {[
              { label: "Документы", sub: "до 0.5 кг", active: false },
              { label: "Посылка", sub: "до 5 кг", active: true },
              { label: "Крупный", sub: "до 30 кг", active: false },
            ].map((t) => (
              <div key={t.label} className={`rounded-xl border-2 px-3 py-3 text-center ${t.active ? "border-orange-500 bg-orange-50" : "border-slate-200 bg-white"}`}>
                <p className={`text-xs font-bold mb-0.5 ${t.active ? "text-orange-700" : "text-slate-700"}`}>{t.label}</p>
                <p className="text-[10px] text-slate-500">{t.sub}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Tariffs */}
        <div>
          <h2 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2.5">Тариф</h2>
          <div className="space-y-2">
            {[
              { name: "Стандарт", desc: "30–45 мин", price: "149 ₽", active: true, tag: "" },
              { name: "Экспресс", desc: "15–20 мин", price: "249 ₽", active: false, tag: "Быстро" },
              { name: "Эконом", desc: "60–90 мин", price: "89 ₽", active: false, tag: "" },
            ].map((t) => (
              <div key={t.name} className={`flex items-center gap-3 rounded-xl border-2 px-4 py-3 ${t.active ? "border-orange-500 bg-orange-50" : "border-slate-200"}`}>
                <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${t.active ? "border-orange-500" : "border-slate-300"}`}>
                  {t.active && <div className="w-2 h-2 bg-orange-500 rounded-full"></div>}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <p className={`text-sm font-bold ${t.active ? "text-orange-700" : "text-slate-800"}`}>{t.name}</p>
                    {t.tag && <span className="text-[9px] bg-orange-100 text-orange-600 px-1.5 py-0.5 rounded-full font-semibold">{t.tag}</span>}
                  </div>
                  <p className="text-xs text-slate-500">{t.desc}</p>
                </div>
                <p className={`text-sm font-bold ${t.active ? "text-orange-600" : "text-slate-700"}`}>{t.price}</p>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* CTA */}
      <div className="px-4 pt-3 pb-5">
        <button className="w-full bg-orange-500 active:bg-orange-600 text-white font-bold py-4 rounded-2xl text-sm shadow-lg shadow-orange-200">
          Заказать доставку — 149 ₽
        </button>
      </div>
    </div>
  )
}

// ─── Экран 3: Отслеживание ────────────────────────────────────────────────────

export function QDTrackingScreen({ scale = 1 }: { scale?: number }) {
  const steps = [
    { label: "Заказ принят", sub: "14:22", done: true, active: false },
    { label: "Курьер забрал посылку", sub: "14:35", done: true, active: false },
    { label: "Курьер в пути", sub: "~12 мин", done: false, active: true },
    { label: "Доставлено", sub: "", done: false, active: false },
  ]

  return (
    <div
      className="bg-white rounded-[44px] overflow-hidden shadow-2xl border border-slate-200/80 flex flex-col"
      style={{ width: 390 * scale, fontSize: `${scale * 100}%` }}
    >
      <StatusBar />

      {/* Map */}
      <div className="mx-4 mb-0 rounded-2xl overflow-hidden h-[180px] bg-[#e8ede4] relative">
        {/* Map grid */}
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(148,163,184,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.15) 1px, transparent 1px)`,
          backgroundSize: "40px 40px"
        }}></div>
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 382 180" preserveAspectRatio="xMidYMid slice">
          {/* Roads */}
          <line x1="0" y1="90" x2="382" y2="90" stroke="#d1d5db" strokeWidth="14" strokeLinecap="round"/>
          <line x1="191" y1="0" x2="191" y2="180" stroke="#d1d5db" strokeWidth="10" strokeLinecap="round"/>
          <line x1="0" y1="140" x2="382" y2="140" stroke="#e2e8f0" strokeWidth="9"/>
          {/* Route dashed */}
          <path d="M70 145 C70 90 130 90 191 90 C252 90 290 50 310 30" stroke="#f97316" strokeWidth="4" strokeDasharray="10 6" fill="none" strokeLinecap="round"/>
          {/* Origin */}
          <circle cx="70" cy="145" r="9" fill="#f97316" stroke="white" strokeWidth="3"/>
          {/* Destination */}
          <circle cx="310" cy="30" r="9" fill="#0f172a" stroke="white" strokeWidth="3"/>
          <path d="M310 22 l5 8 h-10 z" fill="white"/>
          {/* Courier dot */}
          <circle cx="200" cy="89" r="14" fill="#f97316" stroke="white" strokeWidth="3"/>
          <path d="M200 83 l4 6 h-8 z" fill="white"/>
        </svg>
        {/* ETA overlay */}
        <div className="absolute top-3 left-3 bg-white rounded-xl px-3 py-2 shadow-lg">
          <p className="text-[10px] text-slate-500">Прибудет через</p>
          <p className="text-lg font-black text-orange-500">12 мин</p>
        </div>
        {/* Order badge */}
        <div className="absolute top-3 right-3 bg-white rounded-xl px-3 py-2 shadow-lg">
          <p className="text-[10px] text-slate-500">Заказ</p>
          <p className="text-xs font-bold text-slate-900">#QD-4821</p>
        </div>
      </div>

      <div className="flex-1 px-4 pt-4 space-y-4 overflow-hidden">

        {/* Courier card */}
        <div className="bg-slate-50 rounded-2xl border border-slate-200 p-4">
          <div className="flex items-center gap-3">
            <div className="relative w-12 h-12 flex-shrink-0">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-slate-600 to-slate-800 flex items-center justify-center text-white font-bold text-lg">Д</div>
              <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
            </div>
            <div className="flex-1">
              <p className="font-bold text-slate-900">Дмитрий К.</p>
              <div className="flex items-center gap-1.5">
                <div className="flex gap-0.5">
                  {[1,2,3,4,5].map(i => (
                    <svg key={i} className="w-3 h-3 text-amber-400" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  ))}
                </div>
                <span className="text-xs text-slate-500 font-medium">4.9 · 348 доставок</span>
              </div>
            </div>
            <div className="flex gap-2">
              <button className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
              </button>
              <button className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Status steps */}
        <div className="bg-white rounded-2xl border border-slate-200 p-4">
          <h2 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">Статус доставки</h2>
          <div className="space-y-3">
            {steps.map((step, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="flex flex-col items-center flex-shrink-0 mt-0.5">
                  <div className={`w-5 h-5 rounded-full flex items-center justify-center ${
                    step.done ? "bg-orange-500" : step.active ? "bg-white border-2 border-orange-500" : "bg-white border-2 border-slate-200"
                  }`}>
                    {step.done && (
                      <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3">
                        <path d="M20 6L9 17l-5-5"/>
                      </svg>
                    )}
                    {step.active && <div className="w-2 h-2 bg-orange-500 rounded-full"></div>}
                  </div>
                  {i < steps.length - 1 && (
                    <div className={`w-[2px] h-5 mt-1 ${step.done ? "bg-orange-300" : "bg-slate-200"}`}></div>
                  )}
                </div>
                <div className="flex-1">
                  <p className={`text-sm font-semibold leading-tight ${step.active ? "text-slate-900" : step.done ? "text-slate-600" : "text-slate-400"}`}>
                    {step.label}
                  </p>
                  {step.sub && (
                    <p className={`text-xs mt-0.5 ${step.active ? "text-orange-500 font-medium" : "text-slate-400"}`}>{step.sub}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      <div className="px-4 pt-3 pb-2">
        <button className="w-full border-2 border-slate-200 text-slate-700 font-semibold py-3.5 rounded-2xl text-sm">
          Отменить заказ
        </button>
      </div>

      <BottomNav active="orders" />
    </div>
  )
}

// ─── Экран 4: История заказов ─────────────────────────────────────────────────

export function QDHistoryScreen({ scale = 1 }: { scale?: number }) {
  const orders = [
    { id: "#QD-4821", from: "ул. Ленина, 42", to: "пр. Мира, 17", date: "Сегодня, 14:22", price: "149 ₽", status: "В пути", statusColor: "bg-orange-100 text-orange-600" },
    { id: "#QD-4810", from: "ул. Садовая, 5", to: "ул. Кирова, 3", date: "Вчера, 11:05", price: "89 ₽", status: "Доставлен", statusColor: "bg-green-100 text-green-700" },
    { id: "#QD-4798", from: "пр. Мира, 17", to: "ул. Гагарина, 10", date: "15 июня, 16:48", price: "249 ₽", status: "Доставлен", statusColor: "bg-green-100 text-green-700" },
    { id: "#QD-4780", from: "ул. Ленина, 42", to: "ул. Лесная, 22", date: "12 июня, 09:30", price: "149 ₽", status: "Отменён", statusColor: "bg-red-100 text-red-600" },
  ]

  return (
    <div
      className="bg-white rounded-[44px] overflow-hidden shadow-2xl border border-slate-200/80 flex flex-col"
      style={{ width: 390 * scale, fontSize: `${scale * 100}%` }}
    >
      <StatusBar />

      {/* Header */}
      <div className="px-5 pt-2 pb-4">
        <h1 className="text-2xl font-black text-slate-900 mb-4">Мои заказы</h1>
        {/* Filter tabs */}
        <div className="flex gap-2">
          {["Все", "Активные", "Завершённые"].map((tab, i) => (
            <button key={tab} className={`px-4 py-2 rounded-full text-xs font-semibold ${i === 0 ? "bg-orange-500 text-white" : "bg-slate-100 text-slate-600"}`}>
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Orders list */}
      <div className="flex-1 px-4 space-y-3 overflow-hidden">
        {orders.map((order) => (
          <div key={order.id} className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
            {/* Top */}
            <div className="px-4 pt-3.5 pb-3 border-b border-slate-100">
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-bold text-slate-900">{order.id}</span>
                <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full ${order.statusColor}`}>{order.status}</span>
              </div>
              <p className="text-[10px] text-slate-400">{order.date}</p>
            </div>
            {/* Route */}
            <div className="px-4 py-3 flex items-center gap-2">
              <div className="flex flex-col items-center gap-1 flex-shrink-0">
                <div className="w-2.5 h-2.5 rounded-full bg-orange-500"></div>
                <div className="w-[1.5px] h-4 bg-slate-200"></div>
                <div className="w-2.5 h-2.5 rounded-full border-2 border-slate-400"></div>
              </div>
              <div className="flex-1 flex flex-col justify-between gap-2.5">
                <p className="text-xs font-medium text-slate-700 leading-none">{order.from}</p>
                <p className="text-xs text-slate-500 leading-none">{order.to}</p>
              </div>
              <div className="text-right flex-shrink-0">
                <p className="text-sm font-bold text-slate-900">{order.price}</p>
                <button className="text-[10px] text-orange-500 font-medium mt-0.5">Повторить</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="h-3"></div>
      <BottomNav active="orders" />
    </div>
  )
}

// ─── Экран 5: Профиль ─────────────────────────────────────────────────────────

export function QDProfileScreen({ scale = 1 }: { scale?: number }) {
  return (
    <div
      className="bg-slate-50 rounded-[44px] overflow-hidden shadow-2xl border border-slate-200/80 flex flex-col"
      style={{ width: 390 * scale, fontSize: `${scale * 100}%` }}
    >
      <StatusBar />

      {/* Hero */}
      <div className="bg-gradient-to-b from-orange-500 to-orange-400 px-5 pt-3 pb-10">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-2xl bg-white/30 border-2 border-white/60 flex items-center justify-center text-white font-black text-2xl flex-shrink-0">М</div>
          <div className="flex-1">
            <h1 className="text-white font-black text-xl">Максим Иванов</h1>
            <p className="text-orange-100 text-xs mt-0.5">maxim.ivanov@email.com</p>
          </div>
          <button className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">
            <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
              <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
              <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
            </svg>
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="mx-4 -mt-7 mb-5 bg-white rounded-2xl shadow-lg border border-slate-100 p-4 grid grid-cols-3 divide-x divide-slate-100">
        {[
          { val: "24", label: "Заказа" },
          { val: "4.8", label: "Рейтинг" },
          { val: "3 450 ₽", label: "Сэкономлено" },
        ].map((s) => (
          <div key={s.label} className="flex flex-col items-center px-2">
            <p className="text-lg font-black text-slate-900">{s.val}</p>
            <p className="text-[10px] text-slate-500">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Menu items */}
      <div className="flex-1 px-4 space-y-2 overflow-hidden">
        {[
          { label: "Адреса доставки", sub: "3 сохранённых адреса", color: "text-orange-500", icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
          )},
          { label: "Способы оплаты", sub: "•••• 4242 — Visa", color: "text-blue-500", icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>
          )},
          { label: "Промокоды", sub: "1 активный промокод", color: "text-green-600", icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><polyline points="20 12 20 22 4 22 4 12"/><rect x="2" y="7" width="20" height="5"/><line x1="12" y1="22" x2="12" y2="7"/><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"/><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/></svg>
          )},
          { label: "Уведомления", sub: "Включены", color: "text-violet-500", icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
          )},
          { label: "Поддержка", sub: "Чат, звонок, FAQ", color: "text-slate-500", icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
          )},
        ].map((item) => (
          <div key={item.label} className="bg-white rounded-2xl border border-slate-100 px-4 py-3.5 flex items-center gap-3">
            <div className={`w-9 h-9 rounded-xl bg-slate-50 flex items-center justify-center flex-shrink-0 ${item.color}`}>
              {item.icon}
            </div>
            <div className="flex-1">
              <p className="text-sm font-semibold text-slate-900">{item.label}</p>
              <p className="text-[10px] text-slate-500">{item.sub}</p>
            </div>
            <svg viewBox="0 0 24 24" fill="none" stroke="#cbd5e1" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 flex-shrink-0">
              <path d="M9 18l6-6-6-6"/>
            </svg>
          </div>
        ))}

        {/* Logout */}
        <button className="w-full bg-red-50 border border-red-100 rounded-2xl px-4 py-3.5 flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-red-100 flex items-center justify-center flex-shrink-0">
            <svg viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
              <polyline points="16 17 21 12 16 7"/>
              <line x1="21" y1="12" x2="9" y2="12"/>
            </svg>
          </div>
          <span className="text-sm font-semibold text-red-500">Выйти из аккаунта</span>
        </button>
      </div>

      <div className="h-2"></div>
      <BottomNav active="profile" />
    </div>
  )
}
