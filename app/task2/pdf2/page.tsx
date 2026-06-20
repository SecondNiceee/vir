export default function Task2Pdf2Page() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-slate-900 text-white sticky top-0 z-10 print:hidden">
        <div className="max-w-5xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl font-semibold">ПЗ №2 — PDF Презентация</h1>
              <p className="text-sm text-slate-400">10 слайдов для сдачи</p>
            </div>
            <div className="flex gap-4">
              <a href="/task2" className="text-sm text-slate-400 hover:text-white">← К списку</a>
              <a href="/task2/figma2" className="text-sm text-blue-400 hover:text-blue-300">Figma-контент</a>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-8">
        <div className="space-y-8 print:space-y-0">

          {/* Слайд 1 — Титульный */}
          <div className="bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl shadow-xl overflow-hidden print:rounded-none print:shadow-none print:break-after-page">
            <div className="flex flex-col items-center justify-center text-white p-6">
              <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h1 className="text-4xl font-bold mb-2">QuickDrop</h1>
              <p className="text-xl text-white/80 mb-8">Lo-Fi прототипирование и навигация</p>
              <div className="text-sm text-white/60 text-center">
                <p>Практическое задание №2</p>
                <p>Проектирование структуры приложения и создание прототипов</p>
              </div>
              <div className="mt-8 text-sm text-white/80 text-center">
                <p className="font-medium">Подготовил: Титов Николай</p>
                <p>ТКБО-02-23</p>
              </div>
            </div>
          </div>

          {/* Слайд 2 — Уточнение сценария */}
          <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden print:rounded-none print:shadow-none print:border-0 print:break-after-page">
            <div className="bg-slate-800 text-white px-6 py-3">
              <h2 className="text-xl font-bold">Этап 1: Уточнение пользовательского сценария</h2>
            </div>
            <div className="p-5">
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-4">Главная цель пользователя</h3>
                  <div className="bg-orange-50 rounded-xl p-5 border border-orange-100 mb-4">
                    <p className="text-slate-700">Быстро оформить доставку и спокойно отслеживать статус заказа в реальном времени без звонков и неопределённости</p>
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">Основной сценарий</h3>
                  <div className="bg-emerald-50 rounded-xl p-4 border border-emerald-100">
                    <ol className="space-y-1 text-sm text-slate-700">
                      <li>1. Открыть приложение</li>
                      <li>2. Выбрать категорию доставки</li>
                      <li>3. Указать адреса</li>
                      <li>4. Оплатить заказ</li>
                      <li>5. Следить за курьером</li>
                      <li>6. Получить и оценить</li>
                    </ol>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-4">Второстепенные сценарии</h3>
                  <div className="space-y-3">
                    {[
                      { letter: 'А', label: 'Повтор предыдущего заказа', color: 'bg-blue-100 text-blue-600' },
                      { letter: 'Б', label: 'Отправка посылки с описанием', color: 'bg-amber-100 text-amber-600' },
                      { letter: 'В', label: 'Просмотр истории заказов', color: 'bg-rose-100 text-rose-600' },
                      { letter: 'Г', label: 'Управление адресами и оплатой', color: 'bg-purple-100 text-purple-600' },
                    ].map(s => (
                      <div key={s.letter} className="flex items-center gap-3 bg-slate-50 rounded-lg p-3">
                        <span className={`w-8 h-8 ${s.color} rounded-lg flex items-center justify-center font-bold text-sm`}>{s.letter}</span>
                        <span className="text-slate-700 text-sm">{s.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Слайд 3 — Список экранов */}
          <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden print:rounded-none print:shadow-none print:border-0 print:break-after-page">
            <div className="bg-slate-800 text-white px-6 py-3">
              <h2 className="text-xl font-bold">Этап 2: Формирование списка экранов</h2>
            </div>
            <div className="p-5">
              <div className="grid grid-cols-6 gap-4">
                {[
                  { title: 'Онбординг', color: 'bg-amber-50 border-amber-100 text-amber-800', items: ['Splash Screen', 'Welcome (x3)', 'Регистрация/Вход', 'SMS-код', 'Профиль'] },
                  { title: 'Главная', color: 'bg-orange-50 border-orange-100 text-orange-800', items: ['Главный экран', 'Выбор категории', 'Акции/Промо', 'Быстрый повтор'] },
                  { title: 'Оформление', color: 'bg-blue-50 border-blue-100 text-blue-800', items: ['Ввод адресов', 'Выбор тарифа', 'Описание груза', 'Дата и время', 'Оплата'] },
                  { title: 'Трекинг', color: 'bg-emerald-50 border-emerald-100 text-emerald-800', items: ['Карта с курьером', 'Статус заказа', 'Чат с курьером', 'Детали', 'Завершение'] },
                  { title: 'История', color: 'bg-rose-50 border-rose-100 text-rose-800', items: ['Список заказов', 'Детали заказа', 'Оценка курьера', 'Повтор заказа'] },
                  { title: 'Профиль', color: 'bg-slate-100 border-slate-200 text-slate-800', items: ['Мои данные', 'Адресная книга', 'Способы оплаты', 'Уведомления'] },
                ].map(group => (
                  <div key={group.title} className={`${group.color} rounded-xl p-3 border`}>
                    <h4 className={`font-semibold text-sm mb-2 ${group.color.includes('text') ? '' : 'text-slate-800'}`}>{group.title}</h4>
                    <ul className="space-y-1 text-xs text-slate-700">
                      {group.items.map(item => <li key={item}>- {item}</li>)}
                    </ul>
                  </div>
                ))}
              </div>
              <div className="flex justify-center gap-8 mt-4 pt-4 border-t border-slate-100">
                <div className="text-center"><span className="text-2xl font-bold text-orange-600">24</span><span className="text-sm text-slate-500 ml-1">экрана</span></div>
                <div className="text-center"><span className="text-2xl font-bold text-slate-600">6</span><span className="text-sm text-slate-500 ml-1">групп</span></div>
                <div className="text-center"><span className="text-2xl font-bold text-emerald-600">3</span><span className="text-sm text-slate-500 ml-1">уровня</span></div>
              </div>
            </div>
          </div>

          {/* Слайд 4 — Тип навигации */}
          <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden print:rounded-none print:shadow-none print:border-0 print:break-after-page">
            <div className="bg-slate-800 text-white px-6 py-3">
              <h2 className="text-xl font-bold">Этап 3: Проектирование навигации</h2>
            </div>
            <div className="p-5">
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-4">Выбранный тип: Tab Bar (4 вкладки)</h3>
                  <div className="bg-orange-50 rounded-xl p-5 border border-orange-100 mb-6">
                    <ul className="space-y-2 text-sm text-slate-600">
                      {['Мгновенный доступ к разделам', 'Активный заказ всегда виден', 'Привычный паттерн доставки', 'Удобно одной рукой'].map(item => (
                        <li key={item} className="flex items-center gap-2">
                          <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <div className="bg-slate-900 rounded-3xl p-4 w-64">
                    <div className="bg-slate-800 rounded-2xl aspect-[9/16] flex flex-col justify-end p-3">
                      <div className="bg-slate-700 rounded-xl p-2 flex justify-between items-center gap-1">
                        {[
                          { icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6', label: 'Главная', active: true },
                          { icon: 'M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7', label: 'Заказы', active: false },
                          { icon: 'M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z', label: 'Избранное', active: false },
                          { icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z', label: 'Профиль', active: false },
                        ].map(tab => (
                          <div key={tab.label} className="text-center flex-1">
                            <div className={`w-9 h-9 ${tab.active ? 'bg-orange-500' : 'bg-slate-600'} rounded-lg flex items-center justify-center mx-auto mb-1`}>
                              <svg className={`w-5 h-5 ${tab.active ? 'text-white' : 'text-slate-400'}`} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d={tab.icon} />
                              </svg>
                            </div>
                            <span className={`text-[9px] block ${tab.active ? 'text-orange-400' : 'text-slate-500'}`}>{tab.label}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Слайд 5 — User Flow */}
          <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden print:rounded-none print:shadow-none print:border-0 print:break-after-page">
            <div className="bg-slate-800 text-white px-6 py-3">
              <h2 className="text-xl font-bold">Этап 4: User Flow — Основной сценарий</h2>
            </div>
            <div className="p-5">
              <div className="flex items-center justify-between gap-2 flex-wrap">
                {[
                  { label: 'Главная', color: 'bg-orange-100 text-orange-700' },
                  null,
                  { label: 'Выбор категории', color: 'bg-orange-100 text-orange-700' },
                  null,
                  { label: 'Ввод адресов', color: 'bg-blue-100 text-blue-700' },
                  null,
                  { label: 'Тариф', color: 'bg-blue-100 text-blue-700' },
                  null,
                  { label: 'Оплата', color: 'bg-amber-100 text-amber-700' },
                  null,
                  { label: 'Трекинг', color: 'bg-emerald-100 text-emerald-700' },
                  null,
                  { label: 'Получение', color: 'bg-emerald-100 text-emerald-700' },
                  null,
                  { label: 'Оценка', color: 'bg-slate-100 text-slate-700' },
                ].map((step, i) =>
                  step === null
                    ? <svg key={i} className="w-5 h-5 text-slate-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                    : <div key={i} className={`${step.color} px-3 py-2 rounded-lg text-sm font-medium text-center`}>{step.label}</div>
                )}
              </div>
            </div>
          </div>

          {/* Слайд 6 — Lo-Fi скетчи */}
          <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden print:rounded-none print:shadow-none print:border-0 print:break-after-page">
            <div className="bg-slate-800 text-white px-6 py-3">
              <h2 className="text-xl font-bold">Этап 4: Lo-Fi скетчи ключевых экранов</h2>
            </div>
            <div className="p-5">
              <div className="grid grid-cols-4 gap-6">
                {[
                  { label: 'Главный экран' },
                  { label: 'Ввод адреса' },
                  { label: 'Трекинг' },
                  { label: 'История' },
                ].map((screen, i) => (
                  <div key={i} className="space-y-2">
                    <h4 className="text-sm font-semibold text-slate-600 text-center">{screen.label}</h4>
                    <div className="bg-slate-900 rounded-2xl p-2">
                      <div className="bg-slate-100 rounded-xl aspect-[9/18] p-3 space-y-2">
                        <div className="h-3 bg-slate-300 rounded w-3/4"></div>
                        {i === 0 && <>
                          <div className="grid grid-cols-2 gap-1">
                            <div className="h-10 bg-orange-200 rounded"></div>
                            <div className="h-10 bg-blue-200 rounded"></div>
                            <div className="h-10 bg-emerald-200 rounded"></div>
                            <div className="h-10 bg-amber-200 rounded"></div>
                          </div>
                          <div className="h-8 bg-orange-300 rounded"></div>
                          <div className="h-8 bg-slate-200 rounded"></div>
                        </>}
                        {i === 1 && <>
                          <div className="h-20 bg-slate-300 rounded"></div>
                          <div className="h-6 bg-white border border-slate-300 rounded"></div>
                          <div className="h-6 bg-white border border-slate-300 rounded"></div>
                          <div className="space-y-1 mt-1">{[...Array(3)].map((_, j) => <div key={j} className="h-5 bg-slate-200 rounded"></div>)}</div>
                          <div className="h-8 bg-orange-400 rounded"></div>
                        </>}
                        {i === 2 && <>
                          <div className="h-28 bg-slate-300 rounded relative">
                            <div className="absolute top-3 left-3 w-3 h-3 bg-orange-500 rounded-full"></div>
                            <div className="absolute bottom-3 right-3 w-3 h-3 bg-blue-500 rounded-full"></div>
                          </div>
                          <div className="h-3 bg-slate-300 rounded w-2/3"></div>
                          <div className="flex gap-1">
                            <div className="flex-1 h-7 bg-slate-200 rounded"></div>
                            <div className="flex-1 h-7 bg-orange-300 rounded"></div>
                          </div>
                        </>}
                        {i === 3 && <>
                          {[...Array(4)].map((_, j) => (
                            <div key={j} className="h-10 bg-white border border-slate-200 rounded flex gap-2 p-2">
                              <div className="w-6 h-6 bg-slate-200 rounded"></div>
                              <div className="flex-1 space-y-1">
                                <div className="h-2 bg-slate-300 rounded w-3/4"></div>
                                <div className="h-2 bg-slate-200 rounded w-1/2"></div>
                              </div>
                            </div>
                          ))}
                        </>}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Слайд 7-9 — дополнительные блоки */}
          {[
            {
              title: 'Этап 5: Архитектурная схема приложения',
              content: (
                <div className="p-5">
                  <div className="flex justify-center">
                    <div className="space-y-4 w-full max-w-2xl">
                      <div className="text-center">
                        <div className="inline-block bg-orange-500 text-white px-6 py-3 rounded-xl font-semibold">Главный экран</div>
                      </div>
                      <div className="flex justify-center gap-4">
                        {['→ Оформление заказа', '→ Мои заказы', '→ Профиль'].map(item => (
                          <div key={item} className="flex-1 text-center">
                            <div className="bg-slate-100 border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-700">{item}</div>
                          </div>
                        ))}
                      </div>
                      <div className="flex justify-center gap-4">
                        {['Ввод адресов', 'Выбор тарифа', 'Оплата', 'Трекинг'].map(item => (
                          <div key={item} className="flex-1 text-center">
                            <div className="bg-blue-50 border border-blue-100 rounded-lg px-2 py-2 text-xs text-blue-700">{item}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )
            },
            {
              title: 'Этап 6: Компоненты онбординга',
              content: (
                <div className="p-5">
                  <div className="grid grid-cols-3 gap-6">
                    {[
                      { title: 'Splash Screen', desc: 'Логотип QuickDrop на оранжевом фоне', steps: ['Анимация логотипа', 'Проверка авторизации', '1.5 сек задержка'] },
                      { title: 'Welcome Slides', desc: '3 экрана с преимуществами сервиса', steps: ['Быстрая доставка', 'Живой трекинг', 'Единый сервис'] },
                      { title: 'Регистрация', desc: 'Вход через номер телефона и SMS', steps: ['Ввод номера', 'Получение кода', 'Подтверждение'] },
                    ].map(item => (
                      <div key={item.title} className="bg-slate-50 rounded-xl p-4">
                        <h4 className="font-semibold text-slate-900 mb-1">{item.title}</h4>
                        <p className="text-xs text-slate-500 mb-3">{item.desc}</p>
                        <ul className="space-y-1">
                          {item.steps.map((step, j) => (
                            <li key={j} className="flex items-center gap-2 text-xs text-slate-600">
                              <span className="w-5 h-5 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center font-bold">{j + 1}</span>
                              {step}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )
            },
          ].map((slide, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden print:rounded-none print:shadow-none print:border-0 print:break-after-page">
              <div className="bg-slate-800 text-white px-6 py-3">
                <h2 className="text-xl font-bold">{slide.title}</h2>
              </div>
              {slide.content}
            </div>
          ))}

          {/* Слайд 10 — Итог */}
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl shadow-xl overflow-hidden print:rounded-none print:shadow-none print:break-after-page">
            <div className="flex flex-col items-center justify-center text-white p-8 text-center">
              <h2 className="text-3xl font-bold mb-4">Итог ПЗ №2</h2>
              <p className="text-lg text-slate-300 mb-6 max-w-2xl">
                Уточнён пользовательский сценарий, сформирован список из 24 экранов, 
                выбрана навигация Tab Bar, построен User Flow и созданы Lo-Fi скетчи 4 ключевых экранов.
              </p>
              <div className="grid grid-cols-4 gap-6">
                {[
                  { val: '24', label: 'Экрана', color: 'text-orange-400' },
                  { val: '6', label: 'Групп', color: 'text-blue-400' },
                  { val: '4', label: 'Вкладки', color: 'text-amber-400' },
                  { val: '4', label: 'Скетча', color: 'text-emerald-400' },
                ].map(item => (
                  <div key={item.label}>
                    <div className={`text-3xl font-bold ${item.color}`}>{item.val}</div>
                    <div className="text-sm text-slate-400">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  )
}
