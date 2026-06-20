import { BackHeader } from "@/components/prototype/back-header"

const faqItems = [
  "Как изменить дневную цель?",
  "Как отменить подписку Premium?",
  "Не засчитался урок — что делать?",
  "Как сохранить прогресс?",
  "Как поменять язык интерфейса?",
]

const contactItems = [
  { label: "Написать в чат поддержки", sub: "Отвечаем за 5 минут" },
  { label: "Отправить email", sub: "support@learnup.ru" },
  { label: "База знаний", sub: "learnup.ru/help" },
]

export default function HelpPage() {
  return (
    <div className="bg-white min-h-full">
      <BackHeader title="Помощь" backHref="/prototype/profile" />

      <div className="px-5 pt-5 pb-4 space-y-6">
        <div className="relative">
          <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="text"
            placeholder="Поиск по вопросам..."
            className="w-full pl-12 pr-4 py-3 bg-slate-100 rounded-xl text-sm outline-none focus:ring-2 focus:ring-teal-400"
            readOnly
          />
        </div>

        <div>
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-3">Частые вопросы</p>
          <div className="space-y-2">
            {faqItems.map((q) => (
              <div key={q} className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl">
                <svg className="w-5 h-5 text-teal-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-sm text-slate-800 flex-1">{q}</p>
                <svg className="w-4 h-4 text-slate-300 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            ))}
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-3">Связаться с нами</p>
          <div className="bg-slate-50 rounded-2xl overflow-hidden divide-y divide-slate-100">
            {contactItems.map(({ label, sub }) => (
              <div key={label} className="flex items-center gap-4 px-4 py-3.5">
                <div className="flex-1">
                  <p className="text-sm font-medium text-slate-800">{label}</p>
                  <p className="text-xs text-slate-400 mt-0.5">{sub}</p>
                </div>
                <svg className="w-4 h-4 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            ))}
          </div>
        </div>

        <p className="text-center text-xs text-slate-300">LearnUp v1.0.0</p>
      </div>
    </div>
  )
}
