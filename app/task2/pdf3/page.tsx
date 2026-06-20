export default function Task2Pdf3Page() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-slate-900 text-white sticky top-0 z-10 print:hidden">
        <div className="max-w-5xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl font-semibold">ПЗ №3 — PDF Презентация</h1>
              <p className="text-sm text-slate-400">10 слайдов для сдачи</p>
            </div>
            <div className="flex gap-4">
              <a href="/task2" className="text-sm text-slate-400 hover:text-white">← К списку</a>
              <a href="/task2/figma3" className="text-sm text-orange-400 hover:text-orange-300">Figma-контент</a>
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h1 className="text-4xl font-bold mb-2">QuickDrop</h1>
              <p className="text-xl text-white/80 mb-8">Дизайн-система и UI-кит</p>
              <div className="text-sm text-white/60 text-center">
                <p>Практическое задание №3</p>
                <p>Создание визуального языка продукта</p>
              </div>
              <div className="mt-8 text-sm text-white/80 text-center">
                <p className="font-medium">Подготовил: Титов Николай</p>
                <p>ТКБО-02-23</p>
              </div>
            </div>
          </div>

          {/* Слайд 2 — Визуальные основы */}
          <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden print:rounded-none print:shadow-none print:border-0 print:break-after-page">
            <div className="bg-slate-800 text-white px-6 py-3">
              <h2 className="text-xl font-bold">Этап 1: Формирование визуальных основ</h2>
            </div>
            <div className="p-5">
              <h3 className="text-lg font-semibold text-slate-900 mb-6 text-center">Характер бренда QuickDrop</h3>
              <div className="grid grid-cols-4 gap-6">
                {[
                  { label: 'Быстрый', desc: 'Скорость как главная ценность бренда', from: 'from-orange-50', to: 'to-red-50', border: 'border-orange-100', icon: 'bg-orange-100', iconColor: 'text-orange-600', path: 'M13 10V3L4 14h7v7l9-11h-7z' },
                  { label: 'Надёжный', desc: 'Безопасность грузов, точность доставки', from: 'from-blue-50', to: 'to-indigo-50', border: 'border-blue-100', icon: 'bg-blue-100', iconColor: 'text-blue-600', path: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' },
                  { label: 'Понятный', desc: 'Простой UX, минимум действий', from: 'from-emerald-50', to: 'to-teal-50', border: 'border-emerald-100', icon: 'bg-emerald-100', iconColor: 'text-emerald-600', path: 'M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
                  { label: 'Современный', desc: 'Актуальный дизайн 2024 года', from: 'from-slate-50', to: 'to-gray-100', border: 'border-slate-200', icon: 'bg-slate-200', iconColor: 'text-slate-600', path: 'M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z' },
                ].map(item => (
                  <div key={item.label} className={`bg-gradient-to-br ${item.from} ${item.to} border ${item.border} rounded-xl p-5 text-center`}>
                    <div className={`w-14 h-14 ${item.icon} rounded-full flex items-center justify-center mx-auto mb-3`}>
                      <svg className={`w-7 h-7 ${item.iconColor}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.path} />
                      </svg>
                    </div>
                    <h4 className="font-bold text-slate-900 mb-2">{item.label}</h4>
                    <p className="text-sm text-slate-500">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Слайд 3 — Цветовая палитра */}
          <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden print:rounded-none print:shadow-none print:border-0 print:break-after-page">
            <div className="bg-slate-800 text-white px-6 py-3">
              <h2 className="text-xl font-bold">Цветовая палитра</h2>
            </div>
            <div className="p-5">
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h3 className="text-sm font-semibold text-slate-500 uppercase mb-3">Primary — Orange</h3>
                  <div className="flex gap-2 mb-6">
                    {['bg-orange-50', 'bg-orange-100', 'bg-orange-300', 'bg-orange-500', 'bg-orange-700'].map(c => (
                      <div key={c} className={`flex-1 h-16 ${c} rounded-lg ${c === 'bg-orange-50' ? 'border border-slate-200' : ''}`}></div>
                    ))}
                  </div>
                  <h3 className="text-sm font-semibold text-slate-500 uppercase mb-3">Secondary — Blue</h3>
                  <div className="flex gap-2 mb-6">
                    {['bg-blue-50', 'bg-blue-100', 'bg-blue-300', 'bg-blue-500', 'bg-blue-700'].map(c => (
                      <div key={c} className={`flex-1 h-16 ${c} rounded-lg ${c === 'bg-blue-50' ? 'border border-slate-200' : ''}`}></div>
                    ))}
                  </div>
                  <h3 className="text-sm font-semibold text-slate-500 uppercase mb-3">Neutral — Slate</h3>
                  <div className="flex gap-2">
                    {['bg-white border border-slate-200', 'bg-slate-100', 'bg-slate-300', 'bg-slate-500', 'bg-slate-700', 'bg-slate-900'].map((c, i) => (
                      <div key={i} className={`flex-1 h-12 ${c} rounded-lg`}></div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-slate-500 uppercase mb-3">Статусные цвета</h3>
                  <div className="space-y-3">
                    {[
                      { bg: 'bg-emerald-500', label: 'Доставлено', light: 'bg-emerald-50', hex: '#10B981' },
                      { bg: 'bg-orange-500', label: 'В пути', light: 'bg-orange-50', hex: '#F97316' },
                      { bg: 'bg-blue-500', label: 'Ожидание', light: 'bg-blue-50', hex: '#3B82F6' },
                      { bg: 'bg-red-500', label: 'Отменён', light: 'bg-red-50', hex: '#EF4444' },
                    ].map(s => (
                      <div key={s.label} className={`flex items-center gap-3 ${s.light} rounded-lg p-3`}>
                        <div className={`w-12 h-12 ${s.bg} rounded-lg`}></div>
                        <div>
                          <div className="font-medium text-slate-900">{s.label}</div>
                          <div className="text-sm text-slate-500 font-mono">{s.hex}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Слайд 4 — Типографика */}
          <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden print:rounded-none print:shadow-none print:border-0 print:break-after-page">
            <div className="bg-slate-800 text-white px-6 py-3">
              <h2 className="text-xl font-bold">Типографика</h2>
            </div>
            <div className="p-5">
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h3 className="text-sm font-semibold text-slate-500 uppercase mb-4">Шрифтовое семейство</h3>
                  <div className="bg-orange-50 rounded-xl p-6 mb-6">
                    <p className="text-3xl font-bold text-slate-900 mb-2">Inter / SF Pro</p>
                    <p className="text-slate-600">Геометрический sans-serif с высокой читаемостью на экранах мобильных устройств</p>
                  </div>
                  <div className="bg-slate-50 rounded-xl p-4">
                    <p className="text-sm text-slate-500 mb-2">Почему Inter?</p>
                    <ul className="space-y-1 text-sm text-slate-700">
                      <li>• Оптимизирован для UI и мелких размеров</li>
                      <li>• Полная поддержка кириллицы</li>
                      <li>• 9 вариантов насыщенности</li>
                      <li>• Читаемость в движении</li>
                    </ul>
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-slate-500 uppercase mb-4">Типографический масштаб</h3>
                  <div className="space-y-3">
                    {[
                      { tag: 'H1 / 32px', cls: 'text-3xl font-bold', sample: 'Заголовок' },
                      { tag: 'H2 / 24px', cls: 'text-2xl font-bold', sample: 'Подзаголовок' },
                      { tag: 'H3 / 20px', cls: 'text-xl font-semibold', sample: 'Секция' },
                      { tag: 'Body / 16', cls: 'text-base', sample: 'Основной текст' },
                      { tag: 'Small / 14', cls: 'text-sm', sample: 'Вспомогательный' },
                      { tag: 'Caption / 12', cls: 'text-xs', sample: 'Подписи и метки' },
                    ].map(t => (
                      <div key={t.tag} className="flex items-baseline gap-4 py-2 border-b border-slate-100">
                        <span className="text-xs font-mono text-slate-400 w-20">{t.tag}</span>
                        <span className={`${t.cls} text-slate-900`}>{t.sample}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Слайд 5 — Сетка и отступы */}
          <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden print:rounded-none print:shadow-none print:border-0 print:break-after-page">
            <div className="bg-slate-800 text-white px-6 py-3">
              <h2 className="text-xl font-bold">Сетка и система отступов</h2>
            </div>
            <div className="p-5">
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h3 className="text-sm font-semibold text-slate-500 uppercase mb-4">Модульная сетка 8px</h3>
                  <div className="bg-slate-900 rounded-xl p-6 mb-4">
                    <div className="bg-white rounded-lg p-4 space-y-3">
                      <div className="h-4 bg-orange-300 rounded w-1/2"></div>
                      <div className="h-3 bg-slate-200 rounded w-3/4"></div>
                      <div className="h-3 bg-slate-200 rounded w-2/3"></div>
                      <div className="flex gap-2 pt-2">
                        <div className="h-10 bg-orange-500 rounded flex-1"></div>
                        <div className="h-10 bg-slate-200 rounded flex-1"></div>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-3 text-center">
                    {[
                      { val: '8px', label: 'Base Unit', color: 'text-orange-600' },
                      { val: '16px', label: 'Margins', color: 'text-slate-600' },
                      { val: '375px', label: 'Frame', color: 'text-slate-600' },
                    ].map(item => (
                      <div key={item.label} className="bg-slate-50 rounded-lg p-3">
                        <div className={`text-xl font-bold ${item.color}`}>{item.val}</div>
                        <div className="text-xs text-slate-500">{item.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-slate-500 uppercase mb-4">Система отступов</h3>
                  <div className="space-y-3">
                    {[
                      { size: 4, name: 'xs' },
                      { size: 8, name: 'sm' },
                      { size: 12, name: 'md' },
                      { size: 16, name: 'base' },
                      { size: 24, name: 'lg' },
                      { size: 32, name: 'xl' },
                      { size: 48, name: '2xl' },
                    ].map(item => (
                      <div key={item.size} className="flex items-center gap-4">
                        <div className="w-14 text-right">
                          <span className="text-sm font-mono text-slate-600">{item.size}px</span>
                        </div>
                        <div className="bg-orange-500 rounded h-5" style={{ width: `${item.size * 3}px` }}></div>
                        <span className="text-sm text-slate-500">{item.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Слайд 6 — Компоненты: кнопки */}
          <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden print:rounded-none print:shadow-none print:border-0 print:break-after-page">
            <div className="bg-slate-800 text-white px-6 py-3">
              <h2 className="text-xl font-bold">Компоненты — Кнопки</h2>
            </div>
            <div className="p-5">
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h3 className="text-sm font-semibold text-slate-500 uppercase mb-4">Варианты кнопок</h3>
                  <div className="space-y-4">
                    {[
                      { cls: 'bg-orange-500 text-white', label: 'Primary', desc: 'Основное действие' },
                      { cls: 'bg-slate-100 text-slate-700', label: 'Secondary', desc: 'Второстепенное' },
                      { cls: 'border-2 border-orange-500 text-orange-500', label: 'Outline', desc: 'Нейтральное' },
                      { cls: 'bg-red-500 text-white', label: 'Danger', desc: 'Деструктивное' },
                    ].map(btn => (
                      <div key={btn.label} className="flex items-center gap-4">
                        <button className={`${btn.cls} font-semibold py-3 px-6 rounded-xl`}>{btn.label}</button>
                        <span className="text-sm text-slate-500">{btn.desc}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-slate-500 uppercase mb-4">Размеры кнопок</h3>
                  <div className="space-y-4 flex flex-col items-start">
                    <button className="bg-orange-500 text-white font-semibold py-4 px-8 rounded-xl text-lg">Large — 56px</button>
                    <button className="bg-orange-500 text-white font-semibold py-3 px-6 rounded-xl">Medium — 48px</button>
                    <button className="bg-orange-500 text-white font-semibold py-2 px-4 rounded-lg text-sm">Small — 36px</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Слайд 7 — Компоненты: поля и иконки */}
          <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden print:rounded-none print:shadow-none print:border-0 print:break-after-page">
            <div className="bg-slate-800 text-white px-6 py-3">
              <h2 className="text-xl font-bold">Компоненты — Поля ввода и иконки</h2>
            </div>
            <div className="p-5">
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h3 className="text-sm font-semibold text-slate-500 uppercase mb-4">Поля ввода адреса</h3>
                  <div className="space-y-4">
                    <div className="border-2 border-orange-500 rounded-xl px-4 py-3 flex items-center gap-2">
                      <svg className="w-4 h-4 text-orange-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /></svg>
                      <span className="text-sm text-slate-900">ул. Ленина, 12</span>
                    </div>
                    <div className="border border-slate-300 rounded-xl px-4 py-3 flex items-center gap-2">
                      <svg className="w-4 h-4 text-slate-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                      <span className="text-sm text-slate-400">Поиск адреса...</span>
                    </div>
                    <div className="border border-red-400 rounded-xl px-4 py-3 flex items-center gap-2">
                      <span className="text-sm text-slate-900 flex-1">Некорректный адрес</span>
                      <svg className="w-4 h-4 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-slate-500 uppercase mb-4">Иконографика</h3>
                  <div className="grid grid-cols-4 gap-4">
                    {[
                      { path: 'M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4', label: 'Посылка' },
                      { path: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z', label: 'Геолокация' },
                      { path: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z', label: 'Время' },
                      { path: 'M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z', label: 'Оплата' },
                      { path: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z', label: 'Курьер' },
                      { path: 'M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z', label: 'Чат' },
                      { path: 'M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z', label: 'Рейтинг' },
                      { path: 'M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9', label: 'Уведомление' },
                    ].map(icon => (
                      <div key={icon.label} className="flex flex-col items-center gap-2">
                        <div className="w-12 h-12 bg-orange-50 border border-orange-100 rounded-xl flex items-center justify-center">
                          <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={icon.path} />
                          </svg>
                        </div>
                        <span className="text-xs text-slate-500 text-center">{icon.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Слайд 8 — Карточки */}
          <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden print:rounded-none print:shadow-none print:border-0 print:break-after-page">
            <div className="bg-slate-800 text-white px-6 py-3">
              <h2 className="text-xl font-bold">Компоненты — Карточки и бейджи</h2>
            </div>
            <div className="p-5">
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h3 className="text-sm font-semibold text-slate-500 uppercase mb-4">Карточка активного заказа</h3>
                  <div className="border border-orange-200 bg-orange-50 rounded-xl p-4 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-slate-900">Заказ #QD-4821</span>
                      <span className="text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded-full font-medium">В пути</span>
                    </div>
                    <div className="text-sm text-slate-500 space-y-1">
                      <p>От: ул. Ленина, 12</p>
                      <p>До: пр. Мира, 45, кв. 8</p>
                    </div>
                    <div className="flex items-center justify-between pt-2 border-t border-orange-100">
                      <span className="text-sm text-slate-500">Прибытие через</span>
                      <span className="font-bold text-orange-600">~12 мин</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-slate-500 uppercase mb-4">Бейджи статуса</h3>
                  <div className="flex flex-wrap gap-3">
                    {[
                      { label: 'Ожидание', cls: 'bg-blue-100 text-blue-700' },
                      { label: 'Курьер в пути', cls: 'bg-orange-100 text-orange-700' },
                      { label: 'Почти у вас', cls: 'bg-amber-100 text-amber-700' },
                      { label: 'Доставлено', cls: 'bg-emerald-100 text-emerald-700' },
                      { label: 'Отменён', cls: 'bg-red-100 text-red-700' },
                    ].map(b => (
                      <span key={b.label} className={`px-3 py-1.5 ${b.cls} text-sm rounded-full font-medium`}>{b.label}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Слайд 9 — Применение */}
          <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden print:rounded-none print:shadow-none print:border-0 print:break-after-page">
            <div className="bg-slate-800 text-white px-6 py-3">
              <h2 className="text-xl font-bold">Применение дизайн-системы</h2>
            </div>
            <div className="p-5">
              <div className="grid grid-cols-3 gap-6">
                {[
                  { title: 'Консистентность', desc: 'Единые токены цветов, шрифтов и отступов используются на всех экранах без исключений', color: 'bg-orange-50 border-orange-100', icon: 'text-orange-500' },
                  { title: 'Масштабируемость', desc: 'Компоненты построены по принципу атомарного дизайна и легко расширяются', color: 'bg-blue-50 border-blue-100', icon: 'text-blue-500' },
                  { title: 'Доступность', desc: 'Все контрасты соответствуют WCAG AA, размеры касаний от 44px', color: 'bg-emerald-50 border-emerald-100', icon: 'text-emerald-500' },
                ].map(item => (
                  <div key={item.title} className={`${item.color} border rounded-xl p-5`}>
                    <h4 className={`font-bold text-lg text-slate-900 mb-3 ${item.icon}`}>{item.title}</h4>
                    <p className="text-sm text-slate-600">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Слайд 10 — Итог */}
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl shadow-xl overflow-hidden print:rounded-none print:shadow-none print:break-after-page">
            <div className="flex flex-col items-center justify-center text-white p-8 text-center">
              <h2 className="text-3xl font-bold mb-4">Итог ПЗ №3</h2>
              <p className="text-lg text-slate-300 mb-6 max-w-2xl">
                Создана полноценная дизайн-система QuickDrop: определён характер бренда, 
                цветовая палитра, типографика, сетка и набор UI-компонентов.
              </p>
              <div className="grid grid-cols-4 gap-6">
                {[
                  { val: '2', label: 'Цветовых шкалы', color: 'text-orange-400' },
                  { val: '7', label: 'Уровней типографики', color: 'text-blue-400' },
                  { val: '5', label: 'Видов кнопок', color: 'text-amber-400' },
                  { val: '8', label: 'Иконок в наборе', color: 'text-emerald-400' },
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
