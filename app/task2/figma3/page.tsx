export default function Task2Figma3Page() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl font-semibold text-slate-900">ПЗ №3 — Figma-контент</h1>
              <p className="text-sm text-slate-500">Дизайн-система и UI-кит QuickDrop</p>
            </div>
            <div className="flex gap-3">
              <a href="/task2" className="text-sm text-slate-500 hover:text-slate-800">← К списку</a>
              <a href="/task2/pdf3" className="text-sm text-blue-600 hover:text-blue-800">PDF-слайды</a>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-8 space-y-8">

        {/* БЛОК 1: Визуальные основы */}
        <section className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="bg-slate-800 text-white px-6 py-3 flex items-center justify-between">
            <span className="font-medium">Блок 1: Формирование визуальных основ</span>
            <span className="text-xs bg-slate-700 px-2 py-1 rounded">Этап 1</span>
          </div>
          <div className="p-6 space-y-6">
            <div className="text-center pb-6 border-b border-slate-100">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-slate-900">QuickDrop Design System</h2>
              <p className="text-slate-500 mt-1">Визуальный язык сервиса доставки</p>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-3">Характер бренда</h3>
              <div className="grid md:grid-cols-4 gap-4">
                <div className="bg-gradient-to-br from-orange-50 to-red-50 border border-orange-100 rounded-xl p-4 text-center">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-slate-900 mb-1">Быстрый</h4>
                  <p className="text-xs text-slate-500">Скорость как главная ценность</p>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 rounded-xl p-4 text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-slate-900 mb-1">Надёжный</h4>
                  <p className="text-xs text-slate-500">Точность и безопасность</p>
                </div>
                <div className="bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-100 rounded-xl p-4 text-center">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-slate-900 mb-1">Понятный</h4>
                  <p className="text-xs text-slate-500">Простой и ясный UX</p>
                </div>
                <div className="bg-gradient-to-br from-slate-50 to-gray-100 border border-slate-200 rounded-xl p-4 text-center">
                  <div className="w-12 h-12 bg-slate-200 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-slate-900 mb-1">Современный</h4>
                  <p className="text-xs text-slate-500">Актуальный дизайн 2024</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* БЛОК 2: Цветовая палитра */}
        <section className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="bg-slate-800 text-white px-6 py-3 flex items-center justify-between">
            <span className="font-medium">Блок 2: Цветовая палитра</span>
            <span className="text-xs bg-slate-700 px-2 py-1 rounded">Colors</span>
          </div>
          <div className="p-6 space-y-6">
            {/* Primary */}
            <div>
              <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-3">Primary — Orange (Скорость и энергия)</h3>
              <div className="grid grid-cols-5 gap-3">
                {[
                  { bg: 'bg-orange-50', label: '50', hex: '#FFF7ED' },
                  { bg: 'bg-orange-100', label: '100', hex: '#FFEDD5' },
                  { bg: 'bg-orange-300', label: '300', hex: '#FCD34D' },
                  { bg: 'bg-orange-500', label: '500', hex: '#F97316' },
                  { bg: 'bg-orange-700', label: '700', hex: '#C2410C' },
                ].map(c => (
                  <div key={c.label} className="space-y-2">
                    <div className={`h-16 ${c.bg} rounded-lg ${c.label === '50' ? 'border border-slate-200' : ''}`}></div>
                    <div className="text-xs text-center"><span className="font-mono text-slate-600">{c.label}</span><br />{c.hex}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Secondary */}
            <div>
              <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-3">Secondary — Blue (Доверие и навигация)</h3>
              <div className="grid grid-cols-5 gap-3">
                {[
                  { bg: 'bg-blue-50', label: '50', hex: '#EFF6FF' },
                  { bg: 'bg-blue-100', label: '100', hex: '#DBEAFE' },
                  { bg: 'bg-blue-300', label: '300', hex: '#93C5FD' },
                  { bg: 'bg-blue-500', label: '500', hex: '#3B82F6' },
                  { bg: 'bg-blue-700', label: '700', hex: '#1D4ED8' },
                ].map(c => (
                  <div key={c.label} className="space-y-2">
                    <div className={`h-16 ${c.bg} rounded-lg ${c.label === '50' ? 'border border-slate-200' : ''}`}></div>
                    <div className="text-xs text-center"><span className="font-mono text-slate-600">{c.label}</span><br />{c.hex}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Neutral */}
            <div>
              <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-3">Neutral — Slate</h3>
              <div className="grid grid-cols-7 gap-3">
                {[
                  { bg: 'bg-white border border-slate-200', label: 'White' },
                  { bg: 'bg-slate-50 border border-slate-200', label: '50' },
                  { bg: 'bg-slate-100', label: '100' },
                  { bg: 'bg-slate-300', label: '300' },
                  { bg: 'bg-slate-500', label: '500' },
                  { bg: 'bg-slate-700', label: '700' },
                  { bg: 'bg-slate-900', label: '900' },
                ].map(c => (
                  <div key={c.label} className="space-y-2">
                    <div className={`h-12 ${c.bg} rounded-lg`}></div>
                    <div className="text-xs text-center font-mono text-slate-600">{c.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Status */}
            <div>
              <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-3">Status — Состояния</h3>
              <div className="grid grid-cols-4 gap-4">
                <div className="flex items-center gap-3 bg-emerald-50 border border-emerald-200 rounded-lg p-3">
                  <div className="w-10 h-10 bg-emerald-500 rounded-lg"></div>
                  <div>
                    <div className="font-medium text-slate-900 text-sm">Доставлено</div>
                    <div className="text-xs font-mono text-slate-500">#10B981</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-orange-50 border border-orange-200 rounded-lg p-3">
                  <div className="w-10 h-10 bg-orange-500 rounded-lg"></div>
                  <div>
                    <div className="font-medium text-slate-900 text-sm">В пути</div>
                    <div className="text-xs font-mono text-slate-500">#F97316</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-red-50 border border-red-200 rounded-lg p-3">
                  <div className="w-10 h-10 bg-red-500 rounded-lg"></div>
                  <div>
                    <div className="font-medium text-slate-900 text-sm">Отменён</div>
                    <div className="text-xs font-mono text-slate-500">#EF4444</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-blue-50 border border-blue-200 rounded-lg p-3">
                  <div className="w-10 h-10 bg-blue-500 rounded-lg"></div>
                  <div>
                    <div className="font-medium text-slate-900 text-sm">Ожидание</div>
                    <div className="text-xs font-mono text-slate-500">#3B82F6</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* БЛОК 3: Типографика */}
        <section className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="bg-slate-800 text-white px-6 py-3 flex items-center justify-between">
            <span className="font-medium">Блок 3: Типографика</span>
            <span className="text-xs bg-slate-700 px-2 py-1 rounded">Typography</span>
          </div>
          <div className="p-6 space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-4">Шрифтовые семейства</h3>
                <div className="space-y-4">
                  <div className="bg-slate-50 rounded-xl p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-semibold text-orange-600 uppercase">Primary Font</span>
                      <span className="text-xs text-slate-500">Заголовки</span>
                    </div>
                    <p className="text-2xl font-bold text-slate-900">Inter / SF Pro</p>
                    <p className="text-sm text-slate-500 mt-1">Геометрический sans-serif, энергичный и чёткий</p>
                  </div>
                  <div className="bg-slate-50 rounded-xl p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-semibold text-blue-600 uppercase">Secondary Font</span>
                      <span className="text-xs text-slate-500">Основной текст</span>
                    </div>
                    <p className="text-xl text-slate-900">Inter Regular</p>
                    <p className="text-sm text-slate-500 mt-1">Высокая читаемость в условиях движения</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-4">Типографический масштаб</h3>
                <div className="space-y-3">
                  {[
                    { tag: 'H1', size: '32px / Bold', cls: 'text-3xl font-bold' },
                    { tag: 'H2', size: '24px / Bold', cls: 'text-2xl font-bold' },
                    { tag: 'H3', size: '20px / Semi', cls: 'text-xl font-semibold' },
                    { tag: 'H4', size: '18px / Semi', cls: 'text-lg font-semibold' },
                    { tag: 'Body', size: '16px / Regular', cls: 'text-base' },
                    { tag: 'Small', size: '14px / Regular', cls: 'text-sm' },
                    { tag: 'Caption', size: '12px / Regular', cls: 'text-xs' },
                  ].map(t => (
                    <div key={t.tag} className="flex items-baseline gap-4 py-2 border-b border-slate-100">
                      <span className="text-xs font-mono text-slate-400 w-14">{t.tag}</span>
                      <span className={`${t.cls} text-slate-900`}>{t.size}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* БЛОК 4: Сетка и отступы */}
        <section className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="bg-slate-800 text-white px-6 py-3 flex items-center justify-between">
            <span className="font-medium">Блок 4: Сетка и отступы</span>
            <span className="text-xs bg-slate-700 px-2 py-1 rounded">Grid & Spacing</span>
          </div>
          <div className="p-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-4">Модульная сетка (8px)</h3>
                <div className="bg-slate-900 rounded-xl p-6">
                  <div className="bg-white rounded-lg p-4 space-y-3">
                    <div className="h-3 bg-orange-300 rounded w-1/2"></div>
                    <div className="h-2 bg-slate-200 rounded w-3/4"></div>
                    <div className="h-2 bg-slate-200 rounded w-2/3"></div>
                    <div className="flex gap-2 pt-2">
                      <div className="h-8 bg-orange-500 rounded flex-1"></div>
                      <div className="h-8 bg-slate-200 rounded flex-1"></div>
                    </div>
                  </div>
                </div>
                <div className="mt-4 grid grid-cols-3 gap-3 text-center">
                  <div className="bg-slate-50 rounded-lg p-3">
                    <div className="text-lg font-bold text-orange-600">8px</div>
                    <div className="text-xs text-slate-500">Base Unit</div>
                  </div>
                  <div className="bg-slate-50 rounded-lg p-3">
                    <div className="text-lg font-bold text-slate-600">16px</div>
                    <div className="text-xs text-slate-500">Margins</div>
                  </div>
                  <div className="bg-slate-50 rounded-lg p-3">
                    <div className="text-lg font-bold text-slate-600">375px</div>
                    <div className="text-xs text-slate-500">Frame</div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-4">Система отступов</h3>
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
        </section>

        {/* БЛОК 5: Компоненты */}
        <section className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="bg-slate-800 text-white px-6 py-3 flex items-center justify-between">
            <span className="font-medium">Блок 5: Компоненты UI-кита</span>
            <span className="text-xs bg-slate-700 px-2 py-1 rounded">Components</span>
          </div>
          <div className="p-6 space-y-8">
            {/* Кнопки */}
            <div>
              <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-4">Кнопки</h3>
              <div className="flex flex-wrap gap-4 items-center">
                <button className="bg-orange-500 text-white font-semibold py-3 px-6 rounded-xl">Primary</button>
                <button className="bg-slate-100 text-slate-700 font-semibold py-3 px-6 rounded-xl">Secondary</button>
                <button className="border-2 border-orange-500 text-orange-500 font-semibold py-3 px-6 rounded-xl">Outline</button>
                <button className="bg-red-500 text-white font-semibold py-3 px-6 rounded-xl">Danger</button>
                <button className="bg-slate-200 text-slate-400 font-semibold py-3 px-6 rounded-xl cursor-not-allowed" disabled>Disabled</button>
              </div>
            </div>

            {/* Карточка заказа */}
            <div>
              <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-4">Карточка заказа</h3>
              <div className="max-w-sm border border-slate-200 rounded-xl p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                      <svg className="w-4 h-4 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                      </svg>
                    </div>
                    <span className="font-semibold text-slate-900 text-sm">Заказ #QD-4821</span>
                  </div>
                  <span className="text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded-full font-medium">В пути</span>
                </div>
                <div className="text-sm text-slate-500 space-y-1">
                  <p>От: ул. Ленина, 12</p>
                  <p>До: пр. Мира, 45, кв. 8</p>
                </div>
                <div className="flex items-center justify-between pt-2 border-t border-slate-100">
                  <span className="text-sm text-slate-500">Прибытие через</span>
                  <span className="font-bold text-orange-600">~12 мин</span>
                </div>
              </div>
            </div>

            {/* Бейджи статуса */}
            <div>
              <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-4">Бейджи статуса заказа</h3>
              <div className="flex flex-wrap gap-3">
                <span className="px-3 py-1.5 bg-blue-100 text-blue-700 text-sm rounded-full font-medium">Ожидание курьера</span>
                <span className="px-3 py-1.5 bg-orange-100 text-orange-700 text-sm rounded-full font-medium">Курьер в пути</span>
                <span className="px-3 py-1.5 bg-amber-100 text-amber-700 text-sm rounded-full font-medium">Почти у вас</span>
                <span className="px-3 py-1.5 bg-emerald-100 text-emerald-700 text-sm rounded-full font-medium">Доставлено</span>
                <span className="px-3 py-1.5 bg-red-100 text-red-700 text-sm rounded-full font-medium">Отменён</span>
              </div>
            </div>

            {/* Поле ввода */}
            <div>
              <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-4">Поле ввода адреса</h3>
              <div className="max-w-sm space-y-3">
                <div className="border-2 border-orange-500 rounded-xl px-4 py-3 flex items-center gap-2">
                  <svg className="w-4 h-4 text-orange-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  </svg>
                  <span className="text-sm text-slate-900">ул. Ленина, 12</span>
                </div>
                <div className="border border-slate-200 rounded-xl px-4 py-3 flex items-center gap-2">
                  <svg className="w-4 h-4 text-slate-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  <span className="text-sm text-slate-400">Куда доставить?</span>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  )
}
