import { QDBackHeader } from "@/components/qd-prototype/back-header"

const toggles = [
  { label: "Статус заказа", sub: "Обновления о доставке в реальном времени", on: true },
  { label: "Акции и скидки", sub: "Промокоды и специальные предложения", on: true },
  { label: "Сообщения от курьера", sub: "Чат с курьером во время доставки", on: true },
  { label: "Напоминания", sub: "Незавершённые заказы и сохранённые адреса", on: false },
]

const recent = [
  { title: "Заказ #QD-4821 в пути", sub: "Курьер Дмитрий К. забрал посылку", time: "14:35" },
  { title: "Промокод QUICK20 активирован", sub: "Скидка 20% применена к заказу", time: "Вчера" },
  { title: "Заказ #QD-4810 доставлен", sub: "Оцените работу курьера", time: "Вчера" },
]

export default function QDNotificationsPage() {
  return (
    <div className="bg-slate-50 min-h-screen flex flex-col">
      <QDBackHeader title="Уведомления" />

      <div className="px-4 pt-4 space-y-4">

        {/* Toggles */}
        <div className="bg-white rounded-2xl border border-slate-100 divide-y divide-slate-100">
          {toggles.map((item) => (
            <div key={item.label} className="px-4 py-4 flex items-center gap-3">
              <div className="flex-1">
                <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                <p className="text-[10px] text-slate-500 mt-0.5">{item.sub}</p>
              </div>
              <div className={`w-11 h-6 rounded-full transition-colors flex items-center px-1 ${item.on ? "bg-orange-500" : "bg-slate-200"}`}>
                <div className={`w-4 h-4 bg-white rounded-full shadow transition-transform ${item.on ? "translate-x-5" : "translate-x-0"}`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Recent */}
        <div>
          <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2.5">Последние уведомления</p>
          <div className="space-y-2">
            {recent.map((n) => (
              <div key={n.title} className="bg-white rounded-2xl border border-slate-100 px-4 py-3.5 flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-orange-50 flex items-center justify-center flex-shrink-0">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
                    <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-slate-900">{n.title}</p>
                  <p className="text-xs text-slate-500 mt-0.5">{n.sub}</p>
                </div>
                <span className="text-[10px] text-slate-400 flex-shrink-0">{n.time}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}
