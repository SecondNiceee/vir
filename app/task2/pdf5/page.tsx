export default function Task2Pdf5Page() {
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-slate-900 text-white sticky top-0 z-10 print:hidden">
        <div className="max-w-5xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl font-semibold">ПЗ №5 — PDF Презентация</h1>
              <p className="text-sm text-slate-400">QuickDrop • Интерактивный прототип • 10 слайдов</p>
            </div>
            <div className="flex gap-3">
              <a href="/task2/figma5" className="text-sm text-orange-400 hover:text-orange-300">Figma-контент</a>
              <a href="/task2" className="text-sm text-slate-400 hover:text-slate-200">← Назад</a>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-8">
        <div className="space-y-8 print:space-y-0">

          {/* Слайд 1 — Титульный */}
          <div className="bg-gradient-to-br from-slate-800 to-orange-700 rounded-2xl shadow-xl overflow-hidden print:rounded-none print:shadow-none print:break-after-page">
            <div className="flex flex-col items-center justify-center text-white p-10">
              <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h1 className="text-4xl font-bold mb-2">QuickDrop</h1>
              <p className="text-xl text-white/80 mb-8">Интерактивный прототип и финальная презентация</p>
              <div className="text-sm text-white/60 text-center">
                <p>Практическое задание №5</p>
                <p>Интерактивность, сценарии, защита проекта</p>
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
              <h2 className="text-xl font-bold">Цели и задачи прототипирования</h2>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-4">Цель работы</h3>
                  <div className="bg-orange-50 rounded-xl p-5 mb-6">
                    <p className="text-slate-700">
                      Создать интерактивный прототип QuickDrop на основе Hi-Fi макетов, 
                      демонстрирующий логику доставки и пользовательские сценарии.
                    </p>
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-4">Исходные материалы</h3>
                  <ul className="space-y-2 text-sm text-slate-600">
                    {[
                      "Hi-Fi макеты из ПЗ №4",
                      "User Flow и сценарии из ПЗ №1–2",
                      "UI-кит с состояниями из ПЗ №3",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-1 h-2 w-2 rounded-full bg-orange-500 flex-shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-4">Задачи</h3>
                  <div className="space-y-3">
                    {[
                      "Определить основные сценарии доставки",
                      "Настроить переходы между экранами",
                      "Реализовать интерактивные состояния",
                      "Добавить жесты и микроанимации",
                      "Протестировать прототип",
                    ].map((task, i) => (
                      <div key={task} className="flex items-center gap-3 bg-slate-50 rounded-lg p-3">
                        <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center text-white font-bold text-sm flex-shrink-0">{i + 1}</div>
                        <span className="text-slate-700">{task}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-slate-50 px-6 py-3 text-center text-slate-500 text-sm print:hidden">Цели и задачи</div>
          </div>

          {/* Слайд 3 — Основной сценарий */}
          <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden print:rounded-none print:shadow-none print:border-0 print:break-after-page">
            <div className="bg-slate-800 text-white px-6 py-3">
              <h2 className="text-xl font-bold">Основной сценарий: Оформление доставки</h2>
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between gap-2 mb-6">
                {[
                  { icon: "🏠", screen: "Главная", label: "Start Frame", color: "bg-amber-100 text-amber-800" },
                  null,
                  { icon: "📦", screen: "Оформление", label: "Tap: Заказать", color: "bg-orange-100 text-orange-800" },
                  null,
                  { icon: "🔍", screen: "Поиск курьера", label: "Loader", color: "bg-orange-100 text-orange-800" },
                  null,
                  { icon: "📍", screen: "Отслеживание", label: "Navigate", color: "bg-orange-100 text-orange-800" },
                  null,
                  { icon: "✅", screen: "Доставлено", label: "Overlay", color: "bg-emerald-100 text-emerald-800" },
                ].map((step, i) =>
                  step === null ? (
                    <svg key={i} className="w-8 h-8 text-slate-300 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/></svg>
                  ) : (
                    <div key={i} className={`${step.color} px-3 py-4 rounded-xl font-medium text-center flex-1 max-w-[120px]`}>
                      <div className="text-2xl mb-2">{step.icon}</div>
                      <p className="text-sm font-bold">{step.screen}</p>
                      <p className="text-xs opacity-70">{step.label}</p>
                    </div>
                  )
                )}
              </div>
              <div className="bg-slate-50 rounded-xl p-4">
                <p className="text-sm text-slate-600">
                  <strong>Описание:</strong> Пользователь открывает приложение, видит кнопку быстрого заказа, 
                  вводит адрес, выбирает тариф, подтверждает заказ, ожидает курьера на экране отслеживания, 
                  получает Success-экран с предложением оценить курьера.
                </p>
              </div>
            </div>
            <div className="bg-slate-50 px-6 py-3 text-center text-slate-500 text-sm print:hidden">Основной сценарий</div>
          </div>

          {/* Слайд 4 — Альтернативные сценарии */}
          <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden print:rounded-none print:shadow-none print:border-0 print:break-after-page">
            <div className="bg-slate-800 text-white px-6 py-3">
              <h2 className="text-xl font-bold">Альтернативные сценарии</h2>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-2 gap-6">
                {[
                  {
                    icon: "📋",
                    title: "Повтор заказа",
                    bg: "bg-blue-50",
                    color: "text-blue-800",
                    steps: ["Главная", "Мои заказы", "Tap: Повторить", "Оформление (prefill)", "Подтверждение"],
                    note: "Адреса предзаполнены из истории",
                  },
                  {
                    icon: "💬",
                    title: "Чат с курьером",
                    bg: "bg-violet-50",
                    color: "text-violet-800",
                    steps: ["Отслеживание", "Tap: Чат", "Переписка", "Уведомление", "Доставлено"],
                    note: "Inline чат без выхода из экрана отслеживания",
                  },
                  {
                    icon: "❌",
                    title: "Нет курьеров",
                    bg: "bg-red-50",
                    color: "text-red-800",
                    steps: ["Оформление", "Поиск курьера", "Error Overlay", "Tap: Повторить"],
                    note: "Показывается ETA и кнопка повтора",
                  },
                  {
                    icon: "↩️",
                    title: "Отмена заказа",
                    bg: "bg-slate-100",
                    color: "text-slate-800",
                    steps: ["Отслеживание", "Tap: Отменить", "Bottom Sheet", "Подтверждение", "Главная"],
                    note: "Только до момента, когда курьер забрал посылку",
                  },
                ].map((sc) => (
                  <div key={sc.title} className={`${sc.bg} rounded-xl p-5`}>
                    <h3 className={`font-semibold ${sc.color} mb-3 flex items-center gap-2`}>
                      <span className="text-xl">{sc.icon}</span> {sc.title}
                    </h3>
                    <div className="flex items-center gap-1.5 text-sm text-slate-600 flex-wrap mb-2">
                      {sc.steps.map((step, i) => (
                        <div key={i} className="flex items-center gap-1.5">
                          <span className="bg-white px-2 py-0.5 rounded">{step}</span>
                          {i < sc.steps.length - 1 && <span>→</span>}
                        </div>
                      ))}
                    </div>
                    <p className="text-xs text-slate-500">{sc.note}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-slate-50 px-6 py-3 text-center text-slate-500 text-sm print:hidden">Альтернативные сценарии</div>
          </div>

          {/* Слайд 5 — Типы переходов */}
          <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden print:rounded-none print:shadow-none print:border-0 print:break-after-page">
            <div className="bg-slate-800 text-white px-6 py-3">
              <h2 className="text-xl font-bold">Типы переходов в Figma</h2>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-4 gap-4">
                {[
                  {
                    title: "Navigate to",
                    bg: "bg-orange-50",
                    iconBg: "bg-orange-100",
                    iconColor: "text-orange-600",
                    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6"/></svg>,
                    desc: "Переход между основными экранами",
                    params: [["Animation", "Push"], ["Duration", "300ms"]],
                  },
                  {
                    title: "Open Overlay",
                    bg: "bg-violet-50",
                    iconBg: "bg-violet-100",
                    iconColor: "text-violet-600",
                    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"/></svg>,
                    desc: "Bottom sheet, модалки, оверлеи",
                    params: [["Position", "Bottom"], ["Dim", "50%"]],
                  },
                  {
                    title: "Swap",
                    bg: "bg-amber-50",
                    iconBg: "bg-amber-100",
                    iconColor: "text-amber-600",
                    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"/></svg>,
                    desc: "Переключение тарифов, табов",
                    params: [["Use", "Variants"], ["Animate", "Smart"]],
                  },
                  {
                    title: "Back",
                    bg: "bg-slate-100",
                    iconBg: "bg-slate-200",
                    iconColor: "text-slate-600",
                    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 17l-5-5m0 0l5-5m-5 5h12"/></svg>,
                    desc: "Назад, закрытие модалок",
                    params: [["Animation", "Slide"], ["Gesture", "Swipe"]],
                  },
                ].map((item) => (
                  <div key={item.title} className={`${item.bg} rounded-xl p-4 flex flex-col`}>
                    <div className={`w-12 h-12 ${item.iconBg} rounded-lg flex items-center justify-center mb-3 ${item.iconColor}`}>
                      {item.icon}
                    </div>
                    <h3 className="font-semibold text-slate-900 mb-2">{item.title}</h3>
                    <p className="text-xs text-slate-600 mb-3 flex-1">{item.desc}</p>
                    <div className="text-xs space-y-1 bg-white rounded-lg p-2">
                      {item.params.map(([k, v]) => (
                        <p key={k}><span className="text-slate-500">{k}:</span> <span className="font-medium">{v}</span></p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-slate-50 px-6 py-3 text-center text-slate-500 text-sm print:hidden">Типы переходов</div>
          </div>

          {/* Слайд 6 — Интерактивные состояния */}
          <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden print:rounded-none print:shadow-none print:border-0 print:break-after-page">
            <div className="bg-slate-800 text-white px-6 py-3">
              <h2 className="text-xl font-bold">Интерактивные состояния компонентов</h2>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-3 gap-6">
                {/* Кнопка */}
                <div>
                  <h3 className="text-sm font-semibold text-slate-500 uppercase mb-3">Кнопка заказа</h3>
                  <div className="space-y-2">
                    <div className="bg-orange-500 text-white text-center py-3 rounded-xl text-sm font-semibold">Default</div>
                    <div className="bg-orange-600 text-white text-center py-3 rounded-xl text-sm font-semibold opacity-90">Pressed</div>
                    <div className="bg-slate-200 text-slate-400 text-center py-3 rounded-xl text-sm font-semibold cursor-not-allowed">Disabled</div>
                    <div className="bg-orange-500 text-white text-center py-3 rounded-xl text-sm font-semibold flex items-center justify-center gap-2">
                      <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path></svg>
                      Loading
                    </div>
                  </div>
                </div>
                {/* Тариф */}
                <div>
                  <h3 className="text-sm font-semibold text-slate-500 uppercase mb-3">Карточка тарифа</h3>
                  <div className="space-y-2">
                    <div className="border-2 border-slate-200 bg-white rounded-xl px-4 py-3">
                      <p className="text-sm text-slate-600">Default</p>
                      <p className="text-xs text-slate-400">Не выбрано</p>
                    </div>
                    <div className="border-2 border-orange-500 bg-orange-50 rounded-xl px-4 py-3">
                      <p className="text-sm font-semibold text-orange-700">Selected</p>
                      <p className="text-xs text-orange-500">Стандарт • 149 ₽</p>
                    </div>
                    <div className="border-2 border-slate-100 bg-slate-50 rounded-xl px-4 py-3 opacity-50">
                      <p className="text-sm text-slate-400">Disabled</p>
                      <p className="text-xs text-slate-300">Недоступно</p>
                    </div>
                  </div>
                </div>
                {/* Статус */}
                <div>
                  <h3 className="text-sm font-semibold text-slate-500 uppercase mb-3">Статус-бейдж</h3>
                  <div className="space-y-2">
                    {[
                      { label: "В пути", bg: "bg-orange-100", color: "text-orange-700" },
                      { label: "Доставлено", bg: "bg-emerald-100", color: "text-emerald-700" },
                      { label: "Отменён", bg: "bg-red-100", color: "text-red-700" },
                      { label: "Ожидание", bg: "bg-slate-100", color: "text-slate-700" },
                      { label: "Принят", bg: "bg-blue-100", color: "text-blue-700" },
                    ].map((badge) => (
                      <div key={badge.label} className={`inline-flex px-3 py-1.5 rounded-full text-sm font-medium ${badge.bg} ${badge.color}`}>
                        {badge.label}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-slate-50 px-6 py-3 text-center text-slate-500 text-sm print:hidden">Интерактивные состояния</div>
          </div>

          {/* Слайд 7 — Жесты */}
          <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden print:rounded-none print:shadow-none print:border-0 print:break-after-page">
            <div className="bg-slate-800 text-white px-6 py-3">
              <h2 className="text-xl font-bold">Жесты и микроанимации</h2>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-2 gap-6">
                {[
                  {
                    title: "Свайп назад",
                    icon: "👆",
                    desc: "Свайп вправо от левого края экрана — возврат на предыдущий экран. Trigger: Drag → Back.",
                    bg: "bg-blue-50",
                  },
                  {
                    title: "Pull to refresh",
                    icon: "🔄",
                    desc: "Потянуть вниз на экране истории заказов — обновить список. Smart Animate с индикатором загрузки.",
                    bg: "bg-orange-50",
                  },
                  {
                    title: "Long press",
                    icon: "⏱️",
                    desc: "Удержание на карточке заказа — контекстное меню с «Повторить», «Поддержка», «Детали».",
                    bg: "bg-violet-50",
                  },
                  {
                    title: "Success анимация",
                    icon: "🎉",
                    desc: "После доставки — появление оверлея с иконкой галочки, scale 0→1, Spring animation, duration 400ms.",
                    bg: "bg-emerald-50",
                  },
                ].map((item) => (
                  <div key={item.title} className={`${item.bg} rounded-xl p-5`}>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-2xl">{item.icon}</span>
                      <h3 className="font-semibold text-slate-900">{item.title}</h3>
                    </div>
                    <p className="text-sm text-slate-600">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-slate-50 px-6 py-3 text-center text-slate-500 text-sm print:hidden">Жесты и анимации</div>
          </div>

          {/* Слайд 8 — Тестирование */}
          <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden print:rounded-none print:shadow-none print:border-0 print:break-after-page">
            <div className="bg-slate-800 text-white px-6 py-3">
              <h2 className="text-xl font-bold">Тестирование прототипа</h2>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-4">Метод тестирования</h3>
                  <div className="bg-orange-50 rounded-xl p-4 mb-4">
                    <p className="font-semibold text-orange-800 mb-1">Usability Testing</p>
                    <p className="text-sm text-slate-600">5 тестовых пользователей (студенты 18–22 года), Think-aloud метод, Figma Mirror на смартфоне</p>
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">Задачи для тестирования</h3>
                  <ol className="space-y-2 text-sm text-slate-600">
                    {[
                      "Оформить доставку по адресу",
                      "Найти активный заказ и связаться с курьером",
                      "Проверить историю и повторить заказ",
                    ].map((task, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="w-5 h-5 bg-orange-500 text-white rounded-full flex items-center justify-center text-xs flex-shrink-0 mt-0.5">{i + 1}</span>
                        {task}
                      </li>
                    ))}
                  </ol>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-4">Результаты</h3>
                  <div className="space-y-3">
                    {[
                      { metric: "Task Completion Rate", value: "93%", color: "bg-emerald-500" },
                      { metric: "Avg. Time on Task 1", value: "42 сек", color: "bg-orange-500" },
                      { metric: "System Usability Score", value: "84 / 100", color: "bg-blue-500" },
                      { metric: "Critical Errors", value: "0", color: "bg-emerald-500" },
                    ].map((item) => (
                      <div key={item.metric} className="flex items-center justify-between bg-slate-50 rounded-lg p-3">
                        <span className="text-sm text-slate-600">{item.metric}</span>
                        <span className={`text-sm font-bold text-white px-3 py-1 rounded-lg ${item.color}`}>{item.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-slate-50 px-6 py-3 text-center text-slate-500 text-sm print:hidden">Тестирование</div>
          </div>

          {/* Слайд 9 — Доработки */}
          <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden print:rounded-none print:shadow-none print:border-0 print:break-after-page">
            <div className="bg-slate-800 text-white px-6 py-3">
              <h2 className="text-xl font-bold">Итерация по результатам тестирования</h2>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {[
                  {
                    problem: "Пользователи не сразу находили кнопку «Заказать доставку»",
                    solution: "Увеличили размер CTA-кнопки, добавили иконку посылки",
                    impact: "Высокий",
                    impactColor: "bg-red-100 text-red-700",
                  },
                  {
                    problem: "Непонятно, как отменить заказ во время поиска курьера",
                    solution: "Добавили кнопку «Отменить» в loader-экран",
                    impact: "Средний",
                    impactColor: "bg-amber-100 text-amber-700",
                  },
                  {
                    problem: "Не хватало подтверждения перед оформлением",
                    solution: "Добавили Bottom Sheet с итоговым чеком перед оплатой",
                    impact: "Средний",
                    impactColor: "bg-amber-100 text-amber-700",
                  },
                  {
                    problem: "Рейтинг курьера визуально не выделялся",
                    solution: "Заменили текст на звёзды, добавили цветовую индикацию",
                    impact: "Низкий",
                    impactColor: "bg-slate-100 text-slate-700",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 bg-slate-50 rounded-xl p-4">
                    <div className="w-8 h-8 bg-orange-500 text-white rounded-lg flex items-center justify-center font-bold text-sm flex-shrink-0">{i + 1}</div>
                    <div className="flex-1 grid grid-cols-3 gap-4">
                      <div>
                        <p className="text-xs text-slate-500 mb-1">Проблема</p>
                        <p className="text-sm text-slate-800">{item.problem}</p>
                      </div>
                      <div>
                        <p className="text-xs text-slate-500 mb-1">Решение</p>
                        <p className="text-sm text-slate-800">{item.solution}</p>
                      </div>
                      <div className="flex items-start">
                        <span className={`text-xs font-medium px-2 py-1 rounded-full ${item.impactColor}`}>{item.impact}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-slate-50 px-6 py-3 text-center text-slate-500 text-sm print:hidden">Итерация</div>
          </div>

          {/* Слайд 10 — Итог */}
          <div className="bg-gradient-to-br from-orange-500 to-slate-800 rounded-2xl shadow-xl overflow-hidden print:rounded-none print:shadow-none print:break-after-page">
            <div className="p-10 text-white">
              <h2 className="text-3xl font-bold mb-6">Итоги проекта QuickDrop</h2>
              <div className="grid grid-cols-2 gap-6 mb-8">
                {[
                  { num: "5", label: "ПЗ выполнено", sub: "Исследование → Hi-Fi → Прототип" },
                  { num: "6", label: "Экранов в прототипе", sub: "Home, Order, Track, History, Profile, Errors" },
                  { num: "4", label: "Сценария", sub: "Основной + 3 альтернативных" },
                  { num: "93%", label: "Task Completion", sub: "По результатам юзабилити-теста" },
                ].map((stat) => (
                  <div key={stat.label} className="bg-white/10 rounded-xl p-4">
                    <p className="text-4xl font-bold text-white">{stat.num}</p>
                    <p className="font-semibold">{stat.label}</p>
                    <p className="text-white/60 text-sm">{stat.sub}</p>
                  </div>
                ))}
              </div>
              <div className="bg-white/10 rounded-xl p-5">
                <h3 className="font-semibold mb-2">Вывод</h3>
                <p className="text-white/80 text-sm">
                  Разработан полноценный интерактивный прототип мобильного сервиса доставки QuickDrop. 
                  Покрыты основные и альтернативные пользовательские сценарии, настроены переходы и анимации, 
                  проведено юзабилити-тестирование и внесены итерации.
                </p>
              </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  )
}
