import { QDBackHeader } from "@/components/qd-prototype/back-header"

const faqs = [
  { q: "Как отследить заказ?", a: "Откройте вкладку «Заказы» и нажмите на активный заказ — откроется карта с курьером." },
  { q: "Можно ли отменить заказ?", a: "Да, до того как курьер забрал посылку. Кнопка «Отменить» доступна на экране трекинга." },
  { q: "Что делать, если посылка повреждена?", a: "Сфотографируйте повреждение и напишите нам в чат поддержки — разберёмся в течение 24 часов." },
  { q: "Как добавить промокод?", a: "Перейдите в Профиль → Промокоды и введите код в поле." },
]

export default function QDSupportPage() {
  return (
    <div className="bg-slate-50 min-h-screen flex flex-col">
      <QDBackHeader title="Поддержка" />

      <div className="px-4 pt-4 space-y-4">

        {/* Contact channels */}
        <div className="grid grid-cols-3 gap-3">
          {[
            { label: "Чат", color: "bg-orange-500", icon: (
              <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
              </svg>
            )},
            { label: "Звонок", color: "bg-slate-800", icon: (
              <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
              </svg>
            )},
            { label: "Email", color: "bg-blue-500", icon: (
              <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
            )},
          ].map((ch) => (
            <button key={ch.label} className={`${ch.color} rounded-2xl p-4 flex flex-col items-center gap-2`}>
              {ch.icon}
              <span className="text-white text-xs font-semibold">{ch.label}</span>
            </button>
          ))}
        </div>

        {/* Wait time badge */}
        <div className="bg-green-50 border border-green-100 rounded-xl px-4 py-3 flex items-center gap-3">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse flex-shrink-0"></div>
          <div>
            <p className="text-sm font-semibold text-green-800">Поддержка онлайн</p>
            <p className="text-xs text-green-600">Среднее время ответа — 3 мин</p>
          </div>
        </div>

        {/* FAQ */}
        <div>
          <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2.5">Частые вопросы</p>
          <div className="space-y-2">
            {faqs.map((faq) => (
              <div key={faq.q} className="bg-white border border-slate-100 rounded-2xl px-4 py-4">
                <p className="text-sm font-semibold text-slate-900 mb-1.5">{faq.q}</p>
                <p className="text-xs text-slate-500 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}
