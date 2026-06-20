export default function Task2Figma5Page() {
  return (
    <div className="min-h-screen bg-slate-50">
      <header className="bg-white border-b border-slate-200 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-slate-400 mb-0.5">QuickDrop — Сервис доставки</p>
              <h1 className="text-xl font-semibold text-slate-900">ПЗ №5 — Интерактивный прототип</h1>
            </div>
            <div className="flex gap-4">
              <a href="/task2/pdf5" className="text-sm text-orange-600 hover:text-orange-800">PDF-слайды</a>
              <a href="/task2" className="text-sm text-slate-500 hover:text-slate-700">← Назад</a>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-8 space-y-8">

        {/* Блок 1: Сценарии */}
        <section className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="bg-slate-800 text-white px-6 py-3 flex items-center justify-between">
            <span className="font-medium">Блок 1: Пользовательские сценарии</span>
            <span className="text-xs bg-slate-700 px-2 py-1 rounded">User Flow</span>
          </div>
          <div className="p-6 space-y-6">
            {/* Сценарий 1 */}
            <div>
              <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-4">Основной сценарий: Оформление доставки</h3>
              <div className="flex items-center gap-3 flex-wrap">
                {[
                  { screen: "Главная", label: "Экран 1" },
                  { screen: "Новый заказ", label: "Tap: Заказать" },
                  { screen: "Адрес", label: "Ввод адреса" },
                  { screen: "Тариф", label: "Выбор тарифа" },
                  { screen: "Подтверждение", label: "Tap: Заказать" },
                  { screen: "Отслеживание", label: "Overlay" },
                ].map((step, i, arr) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="bg-orange-100 text-orange-800 px-4 py-3 rounded-xl font-medium text-center min-w-[110px]">
                      <div className="text-xs text-orange-600 mb-1">{step.label}</div>
                      {step.screen}
                    </div>
                    {i < arr.length - 1 && (
                      <svg className="w-6 h-6 text-slate-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/></svg>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Сценарий 2 */}
            <div>
              <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-4">Альтернативный сценарий: Проверка статуса</h3>
              <div className="flex items-center gap-3 flex-wrap">
                {[
                  { screen: "Главная", label: "Экран 1" },
                  { screen: "Активный заказ", label: "Tap: Карточка" },
                  { screen: "Отслеживание", label: "Navigate" },
                  { screen: "Чат с курьером", label: "Tap: Чат" },
                ].map((step, i, arr) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="bg-blue-100 text-blue-800 px-4 py-3 rounded-xl font-medium text-center min-w-[110px]">
                      <div className="text-xs text-blue-600 mb-1">{step.label}</div>
                      {step.screen}
                    </div>
                    {i < arr.length - 1 && (
                      <svg className="w-6 h-6 text-slate-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/></svg>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Сценарий ошибки */}
            <div>
              <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-4">Сценарий ошибки: Нет курьеров</h3>
              <div className="flex items-center gap-3 flex-wrap">
                {[
                  { screen: "Оформление", label: "Экран заказа", color: "bg-slate-100 text-slate-700" },
                  { screen: "Поиск курьера", label: "Loader", color: "bg-slate-100 text-slate-700" },
                  { screen: "Нет курьеров", label: "Error State", color: "bg-red-100 text-red-800" },
                  { screen: "Повторить", label: "Tap: Retry", color: "bg-slate-100 text-slate-700" },
                ].map((step, i, arr) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className={`${step.color} px-4 py-3 rounded-xl font-medium text-center min-w-[110px]`}>
                      <div className="text-xs opacity-70 mb-1">{step.label}</div>
                      {step.screen}
                    </div>
                    {i < arr.length - 1 && (
                      <svg className="w-6 h-6 text-slate-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/></svg>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Блок 2: Типы переходов */}
        <section className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="bg-slate-800 text-white px-6 py-3 flex items-center justify-between">
            <span className="font-medium">Блок 2: Интерактивные переходы в Figma</span>
            <span className="text-xs bg-slate-700 px-2 py-1 rounded">Prototype</span>
          </div>
          <div className="p-6">
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "Navigate to",
                  icon: <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6"/></svg>,
                  bg: "bg-orange-100",
                  desc: "Переход между основными экранами",
                  params: [["Trigger", "On Tap"], ["Animation", "Push / Slide"], ["Duration", "300ms"]],
                  note: "Главная → Оформление, Оформление → Отслеживание",
                },
                {
                  title: "Open Overlay",
                  icon: <svg className="w-5 h-5 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"/></svg>,
                  bg: "bg-violet-100",
                  desc: "Модальные окна поверх текущего экрана",
                  params: [["Position", "Bottom Sheet"], ["Background", "Dim (50%)"], ["Close", "Tap outside"]],
                  note: "Подтверждение заказа, Оценка курьера, Error state",
                },
                {
                  title: "Swap",
                  icon: <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"/></svg>,
                  bg: "bg-amber-100",
                  desc: "Переключение состояний компонента",
                  params: [["Use for", "Variants"], ["Animation", "Smart Animate"], ["Easing", "Ease out"]],
                  note: "Выбор тарифа, таб-бар, кнопки действий",
                },
                {
                  title: "Back",
                  icon: <svg className="w-5 h-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 17l-5-5m0 0l5-5m-5 5h12"/></svg>,
                  bg: "bg-slate-100",
                  desc: "Возврат на предыдущий экран",
                  params: [["Animation", "Slide out right"], ["Trigger", "On Tap"], ["Gesture", "Swipe right"]],
                  note: "Кнопка назад, закрытие модалки",
                },
              ].map((item) => (
                <div key={item.title} className="border border-slate-200 rounded-xl p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`w-10 h-10 ${item.bg} rounded-lg flex items-center justify-center`}>
                      {item.icon}
                    </div>
                    <h3 className="font-semibold text-slate-900">{item.title}</h3>
                  </div>
                  <p className="text-sm text-slate-600 mb-3">{item.desc}</p>
                  <div className="bg-slate-50 rounded-lg p-3 space-y-2 text-sm mb-3">
                    {item.params.map(([k, v]) => (
                      <div key={k} className="flex justify-between">
                        <span className="text-slate-500">{k}:</span>
                        <span className="font-medium">{v}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-slate-500">{item.note}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Блок 3: Карта экранов */}
        <section className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="bg-slate-800 text-white px-6 py-3 flex items-center justify-between">
            <span className="font-medium">Блок 3: Полная карта связей экранов QuickDrop</span>
            <span className="text-xs bg-slate-700 px-2 py-1 rounded">Flow Map</span>
          </div>
          <div className="p-6">
            <div className="bg-slate-50 rounded-xl p-6">
              <div className="grid grid-cols-5 gap-4 text-center">
                {/* Row 1 */}
                <div></div>
                <div></div>
                <div className="bg-amber-100 border-2 border-amber-300 rounded-xl p-3">
                  <div className="text-2xl mb-1">🏠</div>
                  <p className="font-semibold text-sm text-amber-800">Главная</p>
                  <p className="text-xs text-amber-600">Start Frame</p>
                </div>
                <div></div>
                <div></div>

                {/* Row 2 */}
                <div className="flex items-center justify-center"><div className="h-8 w-0.5 bg-slate-300"></div></div>
                <div></div>
                <div className="flex items-center justify-center"><div className="h-8 w-0.5 bg-orange-400"></div></div>
                <div></div>
                <div className="flex items-center justify-center"><div className="h-8 w-0.5 bg-slate-300"></div></div>

                {/* Row 3 */}
                <div className="bg-blue-100 border border-blue-200 rounded-xl p-3">
                  <div className="text-xl mb-1">📋</div>
                  <p className="font-semibold text-xs text-blue-800">История</p>
                </div>
                <div className="bg-slate-100 border border-slate-200 rounded-xl p-3">
                  <div className="text-xl mb-1">💬</div>
                  <p className="font-semibold text-xs text-slate-800">Чат</p>
                </div>
                <div className="bg-orange-100 border-2 border-orange-300 rounded-xl p-3">
                  <div className="text-xl mb-1">📦</div>
                  <p className="font-semibold text-xs text-orange-800">Оформление</p>
                </div>
                <div className="bg-slate-100 border border-slate-200 rounded-xl p-3">
                  <div className="text-xl mb-1">👤</div>
                  <p className="font-semibold text-xs text-slate-800">Профиль</p>
                </div>
                <div className="bg-slate-100 border border-slate-200 rounded-xl p-3">
                  <div className="text-xl mb-1">⚙️</div>
                  <p className="font-semibold text-xs text-slate-800">Настройки</p>
                </div>

                {/* Row 4 */}
                <div></div>
                <div></div>
                <div className="flex items-center justify-center"><div className="h-8 w-0.5 bg-orange-400"></div></div>
                <div></div>
                <div></div>

                {/* Row 5 */}
                <div></div>
                <div className="bg-red-100 border border-red-200 rounded-xl p-2">
                  <div className="text-lg">❌</div>
                  <p className="font-semibold text-[10px] text-red-800">Ошибка</p>
                </div>
                <div className="bg-orange-500 text-white rounded-xl p-3">
                  <div className="text-xl mb-1">📍</div>
                  <p className="font-semibold text-xs">Отслеживание</p>
                </div>
                <div className="bg-emerald-100 border border-emerald-200 rounded-xl p-2">
                  <div className="text-lg">✅</div>
                  <p className="font-semibold text-[10px] text-emerald-800">Доставлено</p>
                </div>
                <div></div>
              </div>

              <div className="flex gap-6 justify-center mt-6 pt-6 border-t border-slate-200">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-amber-100 border-2 border-amber-300 rounded"></div>
                  <span className="text-xs text-slate-600">Start Frame</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-orange-100 border-2 border-orange-300 rounded"></div>
                  <span className="text-xs text-slate-600">Main Flow</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-slate-100 border border-slate-200 rounded"></div>
                  <span className="text-xs text-slate-600">Secondary</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-0.5 bg-orange-400"></div>
                  <span className="text-xs text-slate-600">Navigate</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Блок 4: Все экраны */}
        <section className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="bg-slate-800 text-white px-6 py-3 flex items-center justify-between">
            <span className="font-medium">Блок 4: Сводка всех экранов прототипа</span>
            <span className="text-xs bg-slate-700 px-2 py-1 rounded">Overview</span>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { num: 1, name: "Главная (Home)", desc: "Быстрый заказ, активный заказ, недавние адреса", color: "bg-orange-50 border-orange-200" },
                { num: 2, name: "Оформление заказа", desc: "Карта, адреса, выбор тарифа, кнопка заказа", color: "bg-blue-50 border-blue-200" },
                { num: 3, name: "Отслеживание", desc: "Карта с маршрутом, инфо о курьере, статус", color: "bg-orange-50 border-orange-200" },
                { num: 4, name: "История заказов", desc: "Список всех заказов с фильтрами и статусами", color: "bg-slate-50 border-slate-200" },
                { num: 5, name: "Профиль", desc: "Данные пользователя, статистика, бонусы", color: "bg-slate-50 border-slate-200" },
                { num: 6, name: "Error / Success", desc: "Оверлеи: нет курьеров, заказ доставлен, оценка", color: "bg-red-50 border-red-200" },
              ].map((screen) => (
                <div key={screen.num} className={`border rounded-xl p-4 ${screen.color}`}>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-7 h-7 bg-orange-500 rounded-lg flex items-center justify-center text-white font-bold text-xs">{screen.num}</div>
                    <h3 className="font-semibold text-sm text-slate-900">{screen.name}</h3>
                  </div>
                  <p className="text-xs text-slate-600">{screen.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>
    </div>
  )
}
