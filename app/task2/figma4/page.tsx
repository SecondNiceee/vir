import {
  QDHomeScreen,
  QDOrderScreen,
  QDTrackingScreen,
  QDHistoryScreen,
  QDProfileScreen,
} from "@/components/quickdrop-screens"

const screens = [
  {
    title: "Экран 1 — Главный экран (Home)",
    desc: "Приветствие, быстрые категории, активный заказ, недавние адреса",
    component: <QDHomeScreen />,
  },
  {
    title: "Экран 2 — Оформление заказа",
    desc: "Карта, ввод адресов, выбор типа посылки и тарифа, кнопка оформления",
    component: <QDOrderScreen />,
  },
  {
    title: "Экран 3 — Отслеживание",
    desc: "Карта с маршрутом курьера, карточка курьера, статусы доставки",
    component: <QDTrackingScreen />,
  },
  {
    title: "Экран 4 — История заказов",
    desc: "Список заказов с фильтрами, маршрут, статус, кнопка повтора",
    component: <QDHistoryScreen />,
  },
  {
    title: "Экран 5 — Профиль",
    desc: "Данные пользователя, статистика, настройки, способы оплаты",
    component: <QDProfileScreen />,
  },
]

export default function Task2Figma4Page() {
  return (
    <div className="min-h-screen bg-slate-100">

      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-orange-500 rounded-xl flex items-center justify-center">
              <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
                <line x1="12" y1="22.08" x2="12" y2="12"/>
              </svg>
            </div>
            <div>
              <p className="text-[10px] text-slate-400 font-medium uppercase tracking-wider">QuickDrop</p>
              <h1 className="text-base font-bold text-slate-900 leading-tight">ПЗ №4 — Hi-Fi макеты</h1>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <a href="/task2/pdf4" className="text-sm font-medium text-orange-600 hover:text-orange-800 transition-colors">
              PDF-слайды →
            </a>
            <a href="/task2" className="text-sm text-slate-500 hover:text-slate-700 transition-colors">
              ← Назад
            </a>
          </div>
        </div>
      </header>

      {/* Intro */}
      <div className="max-w-7xl mx-auto px-6 pt-8 pb-4">
        <div className="bg-white rounded-2xl border border-slate-200 px-6 py-5">
          <div className="flex flex-wrap items-start gap-4 justify-between">
            <div>
              <h2 className="text-xl font-black text-slate-900 mb-1">Hi-Fi прототип — 5 экранов</h2>
              <p className="text-sm text-slate-600 max-w-xl">
                Полностью проработанные экраны сервиса доставки QuickDrop: финальная типографика, цвета, компоненты, иконки и состояния UI.
              </p>
            </div>
            <div className="flex gap-3 flex-wrap">
              <div className="text-center px-4 py-2 bg-orange-50 rounded-xl border border-orange-100">
                <p className="text-xl font-black text-orange-500">5</p>
                <p className="text-[10px] text-slate-500 font-medium">Экранов</p>
              </div>
              <div className="text-center px-4 py-2 bg-slate-50 rounded-xl border border-slate-200">
                <p className="text-xl font-black text-slate-900">390px</p>
                <p className="text-[10px] text-slate-500 font-medium">Ширина</p>
              </div>
              <div className="text-center px-4 py-2 bg-slate-50 rounded-xl border border-slate-200">
                <p className="text-xl font-black text-slate-900">iOS</p>
                <p className="text-[10px] text-slate-500 font-medium">Платформа</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Screens grid */}
      <main className="max-w-7xl mx-auto px-6 pb-16 space-y-10">
        {screens.map((screen, i) => (
          <section key={i} className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
            {/* Section header */}
            <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-lg bg-orange-500 flex items-center justify-center text-white text-xs font-black">
                  {i + 1}
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">{screen.title}</h3>
                  <p className="text-xs text-slate-500">{screen.desc}</p>
                </div>
              </div>
              <span className="text-xs bg-orange-100 text-orange-700 font-semibold px-2.5 py-1 rounded-full">Hi-Fi</span>
            </div>

            {/* Screen mockup */}
            <div className="p-8 flex justify-center bg-slate-50">
              {screen.component}
            </div>
          </section>
        ))}
      </main>
    </div>
  )
}
