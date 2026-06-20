import { QDHomeScreen, QDOrderScreen, QDTrackingScreen, QDHistoryScreen, QDProfileScreen } from "@/components/quickdrop-screens"

export default function Task2Pdf4Page() {
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-slate-900 text-white sticky top-0 z-10 print:hidden">
        <div className="max-w-5xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl font-semibold">ПЗ №4 — PDF Презентация</h1>
              <p className="text-sm text-slate-400">QuickDrop • Hi-Fi макеты • 10 слайдов</p>
            </div>
            <div className="flex gap-3">
              <a href="/task2/figma4" className="text-sm text-orange-400 hover:text-orange-300">Figma-контент</a>
              <a href="/task2" className="text-sm text-slate-400 hover:text-slate-200">← Назад</a>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-8">
        <div className="space-y-8 print:space-y-0">

          {/* Слайд 1 — Титульный */}
          <div className="bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl shadow-xl overflow-hidden print:rounded-none print:shadow-none print:break-after-page">
            <div className="flex flex-col items-center justify-center text-white p-10">
              <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h1 className="text-4xl font-bold mb-2">QuickDrop</h1>
              <p className="text-xl text-white/80 mb-8">Hi-Fi макеты мобильного приложения</p>
              <div className="text-sm text-white/60 text-center">
                <p>Практическое задание №4</p>
                <p>Визуальный дизайн и высокодетализированные макеты</p>
              </div>
              <div className="mt-8 text-sm text-white/80 text-center">
                <p className="font-medium">Подготовил: Титов Николай</p>
                <p>ТКБО-02-23</p>
              </div>
            </div>
          </div>

          {/* Слайд 2 — Цели */}
          <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden print:rounded-none print:shadow-none print:border-0 print:break-after-page">
            <div className="bg-slate-800 text-white px-6 py-3">
              <h2 className="text-xl font-bold">Цели и задачи Hi-Fi проектирования</h2>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-4">Цель работы</h3>
                  <div className="bg-orange-50 rounded-xl p-5 mb-6">
                    <p className="text-slate-700">
                      Перевести Lo-Fi прототипы и дизайн-систему QuickDrop в визуально 
                      проработанные Hi-Fi макеты, готовые к разработке.
                    </p>
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-4">Исходные материалы</h3>
                  <ul className="space-y-2 text-sm text-slate-600">
                    {[
                      "Lo-Fi прототипы из ПЗ №2",
                      "UI-кит и дизайн-система из ПЗ №3",
                      "User Flow и сценарии из ПЗ №1–2",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-1 h-2 w-2 rounded-full bg-orange-500 flex-shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-4">Ключевые экраны</h3>
                  <div className="space-y-3">
                    {[
                      "Главный экран (Home)",
                      "Оформление заказа",
                      "Отслеживание курьера",
                      "История заказов",
                      "Профиль пользователя",
                      "Сервисные состояния",
                    ].map((name, i) => (
                      <div key={name} className="flex items-center gap-3 bg-slate-50 rounded-lg p-3">
                        <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center text-white font-bold text-sm flex-shrink-0">{i + 1}</div>
                        <span className="text-slate-700">{name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-slate-50 px-6 py-3 text-center text-slate-500 text-sm print:hidden">Цели и задачи</div>
          </div>

          {/* Слайд 3 — Главный экран */}
          <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden print:rounded-none print:shadow-none print:border-0 print:break-after-page">
            <div className="bg-slate-800 text-white px-6 py-3">
              <h2 className="text-xl font-bold">Главный экран (Home)</h2>
            </div>
            <div className="p-6 flex gap-6 items-start">
              <div className="flex-shrink-0 origin-top-left" style={{ transform: "scale(0.52)", width: 390 * 0.52, height: 780 * 0.52, overflow: "hidden" }}>
                <QDHomeScreen />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-slate-900 mb-4">Ключевые элементы</h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { title: "Поиск адреса", bg: "bg-orange-50", color: "text-orange-800", desc: "Строка поиска с автодополнением и историей" },
                    { title: "Быстрый заказ", bg: "bg-blue-50", color: "text-blue-800", desc: "4 категории: посылка, еда, аптека, цветы" },
                    { title: "Активный заказ", bg: "bg-amber-50", color: "text-amber-800", desc: "Карточка с прогресс-баром и временем доставки" },
                    { title: "Недавние адреса", bg: "bg-slate-50", color: "text-slate-800", desc: "Быстрый доступ к часто используемым адресам" },
                  ].map((el) => (
                    <div key={el.title} className={`${el.bg} rounded-lg p-4`}>
                      <h4 className={`font-semibold ${el.color} mb-2`}>{el.title}</h4>
                      <p className="text-sm text-slate-600">{el.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="bg-slate-50 px-6 py-3 text-center text-slate-500 text-sm print:hidden">Главный экран</div>
          </div>

          {/* Слайд 4 — Оформление заказа */}
          <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden print:rounded-none print:shadow-none print:border-0 print:break-after-page">
            <div className="bg-slate-800 text-white px-6 py-3">
              <h2 className="text-xl font-bold">Экран оформления заказа</h2>
            </div>
            <div className="p-6 flex gap-6 items-start">
              <div className="flex-shrink-0 origin-top-left" style={{ transform: "scale(0.52)", width: 390 * 0.52, height: 820 * 0.52, overflow: "hidden" }}>
                <QDOrderScreen />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-slate-900 mb-4">Структура экрана</h3>
                <div className="space-y-4">
                  {[
                    { num: "1", color: "bg-orange-500", title: "Интерактивная карта", desc: "Выбор точки на карте, автоматическое определение адреса" },
                    { num: "2", color: "bg-orange-500", title: "Поля адресов", desc: "Откуда / Куда с валидацией и автодополнением" },
                    { num: "3", color: "bg-orange-500", title: "Выбор тарифа", desc: "Стандарт (30–45 мин) и Экспресс (15–20 мин)" },
                    { num: "4", color: "bg-amber-500", title: "CTA кнопка", desc: "Фиксированная внизу, активируется при заполнении формы" },
                  ].map((item) => (
                    <div key={item.num} className="flex items-start gap-4">
                      <div className={`w-8 h-8 ${item.color} rounded-lg flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}>{item.num}</div>
                      <div>
                        <h4 className="font-semibold text-slate-900">{item.title}</h4>
                        <p className="text-sm text-slate-600">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="bg-slate-50 px-6 py-3 text-center text-slate-500 text-sm print:hidden">Оформление заказа</div>
          </div>

          {/* Слайд 5 — Отслеживание */}
          <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden print:rounded-none print:shadow-none print:border-0 print:break-after-page">
            <div className="bg-slate-800 text-white px-6 py-3">
              <h2 className="text-xl font-bold">Экран отслеживания курьера</h2>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h3 className="text-sm font-semibold text-slate-500 uppercase mb-3">Компоненты экрана</h3>
                  <div className="space-y-3">
                    {[
                      { name: "Карта с маршрутом", desc: "Анимированный маркер курьера, маршрутная линия" },
                      { name: "Инфо о курьере", desc: "Фото, имя, рейтинг, кнопки звонка и чата" },
                      { name: "Статус-шаги", desc: "Принят �� Забрал → В пути → Доставлено" },
                      { name: "Время прибытия", desc: "Динамический таймер обратного отсчёта" },
                    ].map((item) => (
                      <div key={item.name} className="bg-slate-50 rounded-lg p-3">
                        <h4 className="font-semibold text-slate-800 text-sm mb-1">{item.name}</h4>
                        <p className="text-xs text-slate-600">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-slate-500 uppercase mb-3">Статусы заказа</h3>
                  <div className="space-y-3">
                    {[
                      { label: "Заказ принят", color: "bg-orange-500", done: true },
                      { label: "Курьер забрал посылку", color: "bg-orange-500", done: true },
                      { label: "Курьер в пути", color: "bg-orange-500", active: true },
                      { label: "Доставлено", color: "bg-slate-300", done: false },
                    ].map((step, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${step.done ? 'bg-orange-500' : step.active ? 'border-2 border-orange-500' : 'border-2 border-slate-200'}`}>
                          {step.done && <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7"/></svg>}
                          {step.active && <div className="w-2 h-2 rounded-full bg-orange-500"></div>}
                        </div>
                        <span className={`text-sm ${step.active ? 'font-semibold text-slate-900' : step.done ? 'text-slate-600' : 'text-slate-400'}`}>{step.label}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 bg-orange-50 border border-orange-100 rounded-xl p-4">
                    <p className="text-sm font-semibold text-orange-800">Реальное время</p>
                    <p className="text-xs text-slate-600 mt-1">Данные обновляются каждые 15 сек через WebSocket</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-slate-50 px-6 py-3 text-center text-slate-500 text-sm print:hidden">Отслеживание курьера</div>
          </div>

          {/* Слайд 6 — История заказов */}
          <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden print:rounded-none print:shadow-none print:border-0 print:break-after-page">
            <div className="bg-slate-800 text-white px-6 py-3">
              <h2 className="text-xl font-bold">История заказов</h2>
            </div>
            <div className="p-6 flex gap-6 items-start">
              <div className="flex-shrink-0 origin-top-left" style={{ transform: "scale(0.52)", width: 390 * 0.52, height: 780 * 0.52, overflow: "hidden" }}>
                <QDHistoryScreen />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-slate-900 mb-4">Особенности экрана</h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { title: "Фильтры", bg: "bg-orange-50", color: "text-orange-800", desc: "Все / В пути / Доставлено — горизонтальный scroll chips" },
                    { title: "Карточки заказов", bg: "bg-blue-50", color: "text-blue-800", desc: "Номер, маршрут, дата, цена, статус с цветовой индикацией" },
                    { title: "Повторить заказ", bg: "bg-slate-50", color: "text-slate-800", desc: "Кнопка быстрого повторения из истории" },
                    { title: "Детали заказа", bg: "bg-amber-50", color: "text-amber-800", desc: "Тап на карточку — полные детали и оценка курьера" },
                  ].map((el) => (
                    <div key={el.title} className={`${el.bg} rounded-lg p-4`}>
                      <h4 className={`font-semibold ${el.color} mb-2`}>{el.title}</h4>
                      <p className="text-sm text-slate-600">{el.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="bg-slate-50 px-6 py-3 text-center text-slate-500 text-sm print:hidden">История заказов</div>
          </div>

          {/* Слайд 7 — Дизайн-система */}
          <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden print:rounded-none print:shadow-none print:border-0 print:break-after-page">
            <div className="bg-slate-800 text-white px-6 py-3">
              <h2 className="text-xl font-bold">Дизайн-система QuickDrop</h2>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-3 gap-6">
                <div>
                  <h3 className="text-sm font-semibold text-slate-500 uppercase mb-3">Цвета</h3>
                  <div className="space-y-2">
                    {[
                      { color: "bg-orange-500", label: "Primary", hex: "#F97316" },
                      { color: "bg-slate-900", label: "Dark", hex: "#0F172A" },
                      { color: "bg-slate-100", label: "Background", hex: "#F1F5F9" },
                      { color: "bg-emerald-500", label: "Success", hex: "#10B981" },
                      { color: "bg-red-500", label: "Error", hex: "#EF4444" },
                    ].map((c) => (
                      <div key={c.label} className="flex items-center gap-3">
                        <div className={`w-8 h-8 ${c.color} rounded-lg flex-shrink-0`}></div>
                        <div>
                          <p className="text-xs font-medium text-slate-800">{c.label}</p>
                          <p className="text-xs text-slate-500">{c.hex}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-slate-500 uppercase mb-3">Типографика</h3>
                  <div className="space-y-3">
                    <div>
                      <p className="text-2xl font-bold text-slate-900">Aa</p>
                      <p className="text-xs text-slate-500">Inter • Bold • 24px</p>
                    </div>
                    <div>
                      <p className="text-lg font-semibold text-slate-900">Заголовок</p>
                      <p className="text-xs text-slate-500">Inter • SemiBold • 18px</p>
                    </div>
                    <div>
                      <p className="text-sm text-slate-700">Основной текст</p>
                      <p className="text-xs text-slate-500">Inter • Regular • 14px</p>
                    </div>
                    <div>
                      <p className="text-xs text-slate-500">Подпись</p>
                      <p className="text-xs text-slate-400">Inter • Regular • 12px</p>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-slate-500 uppercase mb-3">Компоненты</h3>
                  <div className="space-y-3">
                    <button className="w-full bg-orange-500 text-white font-semibold py-3 rounded-xl text-sm">Primary Button</button>
                    <button className="w-full bg-white border-2 border-orange-500 text-orange-600 font-semibold py-3 rounded-xl text-sm">Secondary</button>
                    <div className="flex items-center gap-2 bg-slate-100 rounded-xl px-3 py-2">
                      <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
                      <span className="text-sm text-slate-400">Search field</span>
                    </div>
                    <div className="flex gap-1">
                      {["Все","В пути","Готово"].map((t, i) => (
                        <span key={t} className={`px-3 py-1 rounded-full text-xs font-medium ${i === 0 ? 'bg-orange-500 text-white' : 'bg-slate-100 text-slate-600'}`}>{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-slate-50 px-6 py-3 text-center text-slate-500 text-sm print:hidden">Дизайн-система</div>
          </div>

          {/* Слайд 8 — Сервисные состояния */}
          <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden print:rounded-none print:shadow-none print:border-0 print:break-after-page">
            <div className="bg-slate-800 text-white px-6 py-3">
              <h2 className="text-xl font-bold">Сервисные состояния (Edge Cases)</h2>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-3 gap-6">
                {[
                  {
                    title: "Нет курьеров",
                    bg: "bg-red-50 border-red-200",
                    iconBg: "bg-red-100",
                    icon: "❌",
                    items: ["Понятное объяснение причины", "Время ожидания (ETA)", "Кнопка «Повторить поиск»"],
                  },
                  {
                    title: "Заказ доставлен",
                    bg: "bg-emerald-50 border-emerald-200",
                    iconBg: "bg-emerald-100",
                    icon: "✅",
                    items: ["Анимация успеха", "Итоговая сумма и маршрут", "Оценка курьера (1–5 звёзд)"],
                  },
                  {
                    title: "Нет интернета",
                    bg: "bg-slate-50 border-slate-200",
                    iconBg: "bg-slate-100",
                    icon: "📶",
                    items: ["Offline-баннер сверху", "Кэшированные данные", "Автоповтор при восстановлении"],
                  },
                ].map((state) => (
                  <div key={state.title} className={`border rounded-xl p-5 ${state.bg}`}>
                    <div className={`w-12 h-12 ${state.iconBg} rounded-xl flex items-center justify-center text-2xl mb-3`}>{state.icon}</div>
                    <h3 className="font-semibold text-slate-900 mb-3">{state.title}</h3>
                    <ul className="space-y-1">
                      {state.items.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-slate-600">
                          <span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-400 flex-shrink-0"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-slate-50 px-6 py-3 text-center text-slate-500 text-sm print:hidden">Сервисные состояния</div>
          </div>

          {/* Слайд 9 — Accessibility */}
          <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden print:rounded-none print:shadow-none print:border-0 print:break-after-page">
            <div className="bg-slate-800 text-white px-6 py-3">
              <h2 className="text-xl font-bold">Доступность и UX-принципы</h2>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-2 gap-6">
                {[
                  { title: "Контрастность", icon: "🎨", desc: "Все текстовые элементы соответствуют WCAG AA (≥4.5:1). Оранжевый #F97316 на белом — 3.1:1, используется только для крупных элементов." },
                  { title: "Размер тач-зон", icon: "👆", desc: "Минимальный размер интерактивных элементов — 44×44 pt (рекомендация Apple HIG). Кнопки и иконки — 48×48 pt." },
                  { title: "Обратная связь", icon: "📳", desc: "Haptic feedback при подтверждении заказа и изменении статуса. Все действия имеют визуальный отклик ≤100 мс." },
                  { title: "Понятность", icon: "💡", desc: "Статусы заказа — цвет + иконка + текст. Нет информации только через цвет (Color-blind safe). Все иконки подписаны." },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-4 bg-slate-50 rounded-xl p-5">
                    <span className="text-2xl">{item.icon}</span>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">{item.title}</h3>
                      <p className="text-sm text-slate-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-slate-50 px-6 py-3 text-center text-slate-500 text-sm print:hidden">Доступность</div>
          </div>

          {/* Слайд 10 — Итог */}
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl shadow-xl overflow-hidden print:rounded-none print:shadow-none print:break-after-page">
            <div className="p-10 text-white">
              <h2 className="text-3xl font-bold mb-6">Итоги ПЗ №4</h2>
              <div className="grid grid-cols-2 gap-6 mb-8">
                {[
                  { num: "4", label: "Hi-Fi экрана", sub: "Home, Order, Track, History" },
                  { num: "3", label: "Тарифа доставки", sub: "Стандарт, Экспресс, Срочный" },
                  { num: "5", label: "Компонентов UI", sub: "Button, Input, Card, Badge, Nav" },
                  { num: "3", label: "Edge Cases", sub: "Ошибка, Успех, Offline" },
                ].map((stat) => (
                  <div key={stat.label} className="bg-white/10 rounded-xl p-4">
                    <p className="text-4xl font-bold text-orange-400">{stat.num}</p>
                    <p className="font-semibold">{stat.label}</p>
                    <p className="text-white/60 text-sm">{stat.sub}</p>
                  </div>
                ))}
              </div>
              <div className="bg-white/10 rounded-xl p-5">
                <h3 className="font-semibold mb-2">Следующий этап — ПЗ №5</h3>
                <p className="text-white/70 text-sm">Создание интерактивного прототипа в Figma с настройкой переходов, жестов и анимаций между всеми экранами QuickDrop.</p>
              </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  )
}
