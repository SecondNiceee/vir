import Link from "next/link"

const menuItems = [
  {
    href: "/task2/prototype/addresses",
    label: "Адреса доставки",
    sub: "3 сохранённых адреса",
    iconColor: "text-orange-500",
    bgColor: "bg-orange-50",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>,
  },
  {
    href: "/task2/prototype/payment",
    label: "Способы оплаты",
    sub: "•••• 4242 — Visa",
    iconColor: "text-blue-500",
    bgColor: "bg-blue-50",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>,
  },
  {
    href: "/task2/prototype/promo",
    label: "Промокоды",
    sub: "1 активный промокод",
    iconColor: "text-green-600",
    bgColor: "bg-green-50",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><polyline points="20 12 20 22 4 22 4 12"/><rect x="2" y="7" width="20" height="5"/><line x1="12" y1="22" x2="12" y2="7"/><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"/><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/></svg>,
  },
  {
    href: "/task2/prototype/notifications",
    label: "Уведомления",
    sub: "Включены",
    iconColor: "text-violet-500",
    bgColor: "bg-violet-50",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>,
  },
  {
    href: "/task2/prototype/support",
    label: "Поддержка",
    sub: "Чат, звонок, FAQ",
    iconColor: "text-slate-500",
    bgColor: "bg-slate-50",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>,
  },
]

export default function QDProfilePage() {
  return (
    <div className="bg-slate-50 min-h-screen flex flex-col">

      {/* Hero */}
      <div className="bg-gradient-to-b from-orange-500 to-orange-400 px-5 pt-12 pb-10">
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

      {/* Menu */}
      <div className="px-4 space-y-2">
        {menuItems.map((item) => (
          <Link key={item.href} href={item.href} className="bg-white rounded-2xl border border-slate-100 px-4 py-3.5 flex items-center gap-3 block">
            <div className={`w-9 h-9 rounded-xl ${item.bgColor} flex items-center justify-center flex-shrink-0 ${item.iconColor}`}>
              {item.icon}
            </div>
            <div className="flex-1">
              <p className="text-sm font-semibold text-slate-900">{item.label}</p>
              <p className="text-[10px] text-slate-500">{item.sub}</p>
            </div>
            <svg viewBox="0 0 24 24" fill="none" stroke="#cbd5e1" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 flex-shrink-0">
              <path d="M9 18l6-6-6-6"/>
            </svg>
          </Link>
        ))}

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

      <div className="h-6"></div>
    </div>
  )
}
