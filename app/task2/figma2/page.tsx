export default function Task2Figma2Page() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl font-semibold text-slate-900">ПЗ №2 — Figma-контент</h1>
              <p className="text-sm text-slate-500">Lo-Fi прототипирование и навигация QuickDrop</p>
            </div>
            <div className="flex gap-3">
              <a href="/task2" className="text-sm text-slate-500 hover:text-slate-800">← К списку</a>
              <a href="/task2/pdf2" className="text-sm text-blue-600 hover:text-blue-800">PDF-слайды</a>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-8 space-y-8">

        {/* БЛОК 1: Уточнение сценария */}
        <section className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="bg-slate-800 text-white px-6 py-3 flex items-center justify-between">
            <span className="font-medium">Блок 1: Уточнение пользовательского сценария</span>
            <span className="text-xs bg-slate-700 px-2 py-1 rounded">Этап 1</span>
          </div>
          <div className="p-6 space-y-6">
            <div className="text-center pb-6 border-b border-slate-100">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-slate-900">QuickDrop</h2>
              <p className="text-slate-500 mt-1">Проектирование структуры и навигации</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-2">Главная цель пользователя</h3>
                  <div className="bg-orange-50 border border-orange-100 rounded-xl p-4">
                    <p className="text-slate-700 leading-relaxed">
                      Быстро оформить доставку и спокойно отслеживать статус заказа 
                      в реальном времени без лишних звонков и неопределённости.
                    </p>
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-2">Основной сценарий</h3>
                  <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-4">
                    <p className="text-sm text-slate-600 mb-2 font-medium">Оформление и получение заказа:</p>
                    <ol className="space-y-1 text-sm text-slate-600">
                      <li>1. Открыть приложение</li>
                      <li>2. Выбрать категорию (еда / товары / посылка)</li>
                      <li>3. Указать адреса отправки и получения</li>
                      <li>4. Оплатить заказ</li>
                      <li>5. Следить за курьером на карте</li>
                      <li>6. Получить и оценить доставку</li>
                    </ol>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-2">Второстепенные сценарии</h3>
                <div className="space-y-3">
                  <div className="bg-slate-50 border border-slate-200 rounded-lg p-3">
                    <span className="text-xs text-slate-500 font-medium">Сценарий А</span>
                    <p className="text-sm text-slate-700 mt-1">Повтор предыдущего заказа</p>
                  </div>
                  <div className="bg-slate-50 border border-slate-200 rounded-lg p-3">
                    <span className="text-xs text-slate-500 font-medium">Сценарий Б</span>
                    <p className="text-sm text-slate-700 mt-1">Отправка посылки с описанием груза</p>
                  </div>
                  <div className="bg-slate-50 border border-slate-200 rounded-lg p-3">
                    <span className="text-xs text-slate-500 font-medium">Сценарий В</span>
                    <p className="text-sm text-slate-700 mt-1">Просмотр истории заказов</p>
                  </div>
                  <div className="bg-slate-50 border border-slate-200 rounded-lg p-3">
                    <span className="text-xs text-slate-500 font-medium">Сценарий Г</span>
                    <p className="text-sm text-slate-700 mt-1">Управление адресами и способами оплаты</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* БЛОК 2: Список экранов */}
        <section className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="bg-slate-800 text-white px-6 py-3 flex items-center justify-between">
            <span className="font-medium">Блок 2: Перечень экранов приложения</span>
            <span className="text-xs bg-slate-700 px-2 py-1 rounded">Этап 2</span>
          </div>
          <div className="p-6">
            <div className="grid md:grid-cols-4 gap-6">
              {/* Онбординг */}
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-slate-900">Онбординг</h4>
                </div>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-amber-400 rounded-full"></span>Splash Screen</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-amber-400 rounded-full"></span>Welcome (3 слайда)</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-amber-400 rounded-full"></span>Регистрация / Вход</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-amber-400 rounded-full"></span>Ввод номера телефона</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-amber-400 rounded-full"></span>Подтверждение SMS</li>
                </ul>
              </div>

              {/* Главная */}
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-slate-900">Главная</h4>
                </div>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-orange-400 rounded-full"></span>Главный экран</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-orange-400 rounded-full"></span>Выбор категории</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-orange-400 rounded-full"></span>Акции и промо</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-orange-400 rounded-full"></span>Быстрый повтор</li>
                </ul>
              </div>

              {/* Оформление */}
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-slate-900">Оформление</h4>
                </div>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>Ввод адресов</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>Выбор тарифа</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>Описание груза</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>Дата и время</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>Оплата</li>
                </ul>
              </div>

              {/* Трекинг */}
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-slate-900">Трекинг</h4>
                </div>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></span>Карта с курьером</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></span>Статус заказа</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></span>Чат с курьером</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></span>Детали доставки</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></span>Экран завершения</li>
                </ul>
              </div>
            </div>

            <div className="grid md:grid-cols-4 gap-6 mt-6 pt-6 border-t border-slate-100">
              {/* История */}
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-rose-100 rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-slate-900">История</h4>
                </div>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-rose-400 rounded-full"></span>Список заказов</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-rose-400 rounded-full"></span>Детали заказа</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-rose-400 rounded-full"></span>Оценка курьера</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-rose-400 rounded-full"></span>Повтор заказа</li>
                </ul>
              </div>

              {/* Профиль */}
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-slate-200 rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-slate-900">Профиль</h4>
                </div>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-slate-400 rounded-full"></span>Мои данные</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-slate-400 rounded-full"></span>Адресная книга</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-slate-400 rounded-full"></span>Способы оплаты</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-slate-400 rounded-full"></span>Уведомления</li>
                </ul>
              </div>

              {/* Итого */}
              <div className="md:col-span-2 bg-slate-50 rounded-xl p-4">
                <h4 className="font-semibold text-slate-900 mb-3">Итого экранов</h4>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-orange-600">24</div>
                    <div className="text-xs text-slate-500">Основных экранов</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-slate-600">6</div>
                    <div className="text-xs text-slate-500">Групп/разделов</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-emerald-600">3</div>
                    <div className="text-xs text-slate-500">Уровня иерархии</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* БЛОК 3: Навигация */}
        <section className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="bg-slate-800 text-white px-6 py-3 flex items-center justify-between">
            <span className="font-medium">Блок 3: Проектирование навигации</span>
            <span className="text-xs bg-slate-700 px-2 py-1 rounded">Этап 3</span>
          </div>
          <div className="p-6 space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-3">Выбранный тип навигации</h3>
                <div className="bg-orange-50 border-2 border-orange-200 rounded-xl p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">Tab Bar (нижняя панель)</h4>
                      <p className="text-sm text-slate-500">4 основных раздела</p>
                    </div>
                  </div>
                  <p className="text-sm text-slate-600">
                    Tab Bar — оптимальный выбор для сервиса доставки. Пользователь в любой момент 
                    может перейти к активному заказу, истории или профилю одним касанием.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-3">Вкладки Tab Bar</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg border border-slate-200">
                    <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-900">Главная</p>
                      <p className="text-xs text-slate-500">Новый заказ, акции, быстрый повтор</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg border border-slate-200">
                    <div className="w-8 h-8 bg-slate-300 rounded-lg flex items-center justify-center">
                      <svg className="w-4 h-4 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" /></svg>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-900">Мои заказы</p>
                      <p className="text-xs text-slate-500">Активные и завершённые</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg border border-slate-200">
                    <div className="w-8 h-8 bg-slate-300 rounded-lg flex items-center justify-center">
                      <svg className="w-4 h-4 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" /></svg>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-900">Избранное</p>
                      <p className="text-xs text-slate-500">Сохранённые адреса и маршруты</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg border border-slate-200">
                    <div className="w-8 h-8 bg-slate-300 rounded-lg flex items-center justify-center">
                      <svg className="w-4 h-4 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-900">Профиль</p>
                      <p className="text-xs text-slate-500">Данные, оплата, настройки</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* БЛОК 4: User Flow */}
        <section className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="bg-slate-800 text-white px-6 py-3 flex items-center justify-between">
            <span className="font-medium">Блок 4: User Flow — Основной сценарий</span>
            <span className="text-xs bg-slate-700 px-2 py-1 rounded">Этап 4</span>
          </div>
          <div className="p-6">
            <div className="flex items-center gap-2 flex-wrap">
              {[
                { label: 'Главная', color: 'bg-orange-100 text-orange-700' },
                { label: '→', color: 'text-slate-400 font-bold text-lg', arrow: true },
                { label: 'Выбор категории', color: 'bg-blue-100 text-blue-700' },
                { label: '→', color: 'text-slate-400 font-bold text-lg', arrow: true },
                { label: 'Ввод адресов', color: 'bg-blue-100 text-blue-700' },
                { label: '→', color: 'text-slate-400 font-bold text-lg', arrow: true },
                { label: 'Тариф и детали', color: 'bg-blue-100 text-blue-700' },
                { label: '→', color: 'text-slate-400 font-bold text-lg', arrow: true },
                { label: 'Оплата', color: 'bg-amber-100 text-amber-700' },
                { label: '→', color: 'text-slate-400 font-bold text-lg', arrow: true },
                { label: 'Трекинг на карте', color: 'bg-emerald-100 text-emerald-700' },
                { label: '→', color: 'text-slate-400 font-bold text-lg', arrow: true },
                { label: 'Получение', color: 'bg-emerald-100 text-emerald-700' },
                { label: '→', color: 'text-slate-400 font-bold text-lg', arrow: true },
                { label: 'Оценка', color: 'bg-slate-100 text-slate-700' },
              ].map((step, i) => (
                step.arrow
                  ? <span key={i} className={step.color}>{step.label}</span>
                  : <span key={i} className={`px-3 py-2 rounded-lg text-sm font-medium ${step.color}`}>{step.label}</span>
              ))}
            </div>

            <div className="mt-6 grid md:grid-cols-3 gap-4">
              <div className="bg-slate-50 rounded-xl p-4">
                <h4 className="text-sm font-semibold text-slate-700 mb-2">Точки принятия решений</h4>
                <ul className="space-y-1 text-sm text-slate-600">
                  <li>• Выбор категории доставки</li>
                  <li>• Подтверждение тарифа</li>
                  <li>• Способ оплаты</li>
                </ul>
              </div>
              <div className="bg-slate-50 rounded-xl p-4">
                <h4 className="text-sm font-semibold text-slate-700 mb-2">Критические экраны</h4>
                <ul className="space-y-1 text-sm text-slate-600">
                  <li>• Ввод адресов (карта)</li>
                  <li>• Экран оплаты</li>
                  <li>• Трекинг в реальном времени</li>
                </ul>
              </div>
              <div className="bg-slate-50 rounded-xl p-4">
                <h4 className="text-sm font-semibold text-slate-700 mb-2">Запасные пути</h4>
                <ul className="space-y-1 text-sm text-slate-600">
                  <li>• Отмена заказа</li>
                  <li>• Сообщить о проблеме</li>
                  <li>• Связаться с поддержкой</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* БЛОК 5: Lo-Fi скетчи */}
        <section className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="bg-slate-800 text-white px-6 py-3 flex items-center justify-between">
            <span className="font-medium">Блок 5: Lo-Fi скетчи ключевых экранов</span>
            <span className="text-xs bg-slate-700 px-2 py-1 rounded">Этап 4</span>
          </div>
          <div className="p-6">
            <div className="grid md:grid-cols-4 gap-6">
              {/* Главный экран */}
              <div className="space-y-2">
                <h4 className="text-sm font-semibold text-slate-600 text-center">Главный экран</h4>
                <div className="bg-slate-900 rounded-2xl p-2">
                  <div className="bg-slate-100 rounded-xl p-3 space-y-2 aspect-[9/18]">
                    <div className="h-3 bg-slate-300 rounded w-2/3"></div>
                    <div className="grid grid-cols-2 gap-1">
                      <div className="h-12 bg-orange-200 rounded-lg"></div>
                      <div className="h-12 bg-blue-200 rounded-lg"></div>
                      <div className="h-12 bg-emerald-200 rounded-lg"></div>
                      <div className="h-12 bg-amber-200 rounded-lg"></div>
                    </div>
                    <div className="h-2 bg-slate-300 rounded"></div>
                    <div className="h-8 bg-orange-300 rounded-lg"></div>
                    <div className="h-8 bg-slate-200 rounded-lg"></div>
                    <div className="mt-auto h-6 bg-slate-300 rounded-lg"></div>
                  </div>
                </div>
              </div>

              {/* Ввод адреса */}
              <div className="space-y-2">
                <h4 className="text-sm font-semibold text-slate-600 text-center">Ввод адреса</h4>
                <div className="bg-slate-900 rounded-2xl p-2">
                  <div className="bg-slate-100 rounded-xl p-3 space-y-2 aspect-[9/18]">
                    <div className="h-24 bg-slate-300 rounded-lg"></div>
                    <div className="h-7 bg-white border border-slate-300 rounded-lg"></div>
                    <div className="h-7 bg-white border border-slate-300 rounded-lg"></div>
                    <div className="h-2 bg-slate-300 rounded w-1/2"></div>
                    <div className="space-y-1">
                      {[...Array(3)].map((_, i) => (
                        <div key={i} className="h-6 bg-slate-200 rounded"></div>
                      ))}
                    </div>
                    <div className="h-8 bg-orange-400 rounded-lg mt-auto"></div>
                  </div>
                </div>
              </div>

              {/* Трекинг */}
              <div className="space-y-2">
                <h4 className="text-sm font-semibold text-slate-600 text-center">Трекинг курьера</h4>
                <div className="bg-slate-900 rounded-2xl p-2">
                  <div className="bg-slate-100 rounded-xl p-3 space-y-2 aspect-[9/18]">
                    <div className="h-32 bg-slate-300 rounded-lg relative">
                      <div className="absolute top-4 left-4 w-4 h-4 bg-orange-500 rounded-full"></div>
                      <div className="absolute bottom-4 right-4 w-4 h-4 bg-blue-500 rounded-full"></div>
                    </div>
                    <div className="h-3 bg-slate-300 rounded w-3/4"></div>
                    <div className="h-2 bg-slate-200 rounded"></div>
                    <div className="flex gap-1">
                      <div className="flex-1 h-8 bg-slate-200 rounded-lg"></div>
                      <div className="flex-1 h-8 bg-orange-300 rounded-lg"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* История */}
              <div className="space-y-2">
                <h4 className="text-sm font-semibold text-slate-600 text-center">История заказов</h4>
                <div className="bg-slate-900 rounded-2xl p-2">
                  <div className="bg-slate-100 rounded-xl p-3 space-y-2 aspect-[9/18]">
                    <div className="h-3 bg-slate-300 rounded w-1/2"></div>
                    {[...Array(4)].map((_, i) => (
                      <div key={i} className="h-12 bg-white border border-slate-200 rounded-lg p-2 flex gap-2">
                        <div className="w-8 h-8 bg-slate-200 rounded"></div>
                        <div className="flex-1 space-y-1">
                          <div className="h-2 bg-slate-300 rounded w-3/4"></div>
                          <div className="h-2 bg-slate-200 rounded w-1/2"></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  )
}
