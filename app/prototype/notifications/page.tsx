import { BackHeader } from "@/components/prototype/back-header"

const toggleItems = [
  { label: "Напоминания об уроках", sub: "Каждый день в 19:00", on: true },
  { label: "Серия дней", sub: "Не потеряй стрик", on: true },
  { label: "Достижения", sub: "Получено новое достижение", on: true },
  { label: "Новые курсы", sub: "Обновления каталога", on: false },
  { label: "Акции и скидки", sub: "Специальные предложения", on: false },
]

const recentItems = [
  { bg: "bg-orange-100", title: "Стрик 12 дней!", body: "Отличная работа! Не останавливайся.", time: "Сегодня, 09:00" },
  { bg: "bg-amber-100", title: "Новое достижение", body: "Вы получили «Неделя без пропусков»", time: "Вчера, 20:15" },
  { bg: "bg-teal-100", title: "Урок ждёт тебя", body: "Продолжи Python: Урок 8 — Циклы", time: "Вчера, 19:00" },
]

export default function NotificationsPage() {
  return (
    <div className="bg-white min-h-full">
      <BackHeader title="Уведомления" backHref="/prototype/profile" />

      <div className="px-5 pt-5 pb-4 space-y-6">
        <div>
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-3">Настройки</p>
          <div className="bg-slate-50 rounded-2xl overflow-hidden divide-y divide-slate-100">
            {toggleItems.map(({ label, sub, on }) => (
              <div key={label} className="flex items-center gap-4 px-4 py-3.5">
                <div className="flex-1">
                  <p className="text-sm font-medium text-slate-800">{label}</p>
                  <p className="text-xs text-slate-400 mt-0.5">{sub}</p>
                </div>
                <div className={`w-11 h-6 rounded-full relative ${on ? "bg-teal-500" : "bg-slate-200"}`}>
                  <div className={`absolute top-0.5 w-5 h-5 bg-white rounded-full shadow-sm ${on ? "right-0.5" : "left-0.5"}`} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-3">Последние</p>
          <div className="space-y-3">
            {recentItems.map(({ bg, title, body, time }) => (
              <div key={title} className="flex gap-4 p-4 bg-slate-50 rounded-2xl">
                <div className={`w-10 h-10 ${bg} rounded-xl flex items-center justify-center shrink-0`} />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-slate-900">{title}</p>
                  <p className="text-xs text-slate-500 mt-0.5">{body}</p>
                  <p className="text-xs text-slate-300 mt-1">{time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
