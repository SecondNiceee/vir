export default function Figma3Page() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl font-semibold text-slate-900">ПЗ №3 — Figma-контент</h1>
              <p className="text-sm text-slate-500">Дизайн-система и UI-кит LearnUp</p>
            </div>
            <div className="flex gap-3">
              <a href="/pdf3" className="text-sm text-teal-600 hover:text-teal-800">PDF-слайды &rarr;</a>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-8 space-y-8">
        
        {/* Инструкция */}
        <div className="bg-teal-50 border border-teal-200 rounded-lg p-4">
          <p className="text-teal-800 text-sm">
            <strong>Как использовать:</strong> Каждый блок — отдельный фрейм для Figma. 
            Сделай скриншот или используй плагин html.to.design для конвертации.
          </p>
        </div>

        {/* БЛОК 1: Визуальные основы */}
        <section className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="bg-slate-800 text-white px-6 py-3 flex items-center justify-between">
            <span className="font-medium">Блок 1: Формирование визуальных основ</span>
            <span className="text-xs bg-slate-700 px-2 py-1 rounded">Этап 1</span>
          </div>
          <div className="p-6 space-y-6">
            <div className="text-center pb-6 border-b border-slate-100">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-teal-500 to-emerald-600 rounded-2xl mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-slate-900">LearnUp Design System</h2>
              <p className="text-slate-500 mt-1">Визуальный язык образовательного приложения</p>
            </div>
            
            {/* Характер бренда */}
            <div>
              <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-3">Характер бренда</h3>
              <div className="grid md:grid-cols-4 gap-4">
                <div className="bg-gradient-to-br from-teal-50 to-emerald-50 border border-teal-100 rounded-xl p-4 text-center">
                  <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-slate-900 mb-1">Дружелюбный</h4>
                  <p className="text-xs text-slate-500">Приветливый тон, понятный интерфейс</p>
                </div>
                <div className="bg-gradient-to-br from-violet-50 to-purple-50 border border-violet-100 rounded-xl p-4 text-center">
                  <div className="w-12 h-12 bg-violet-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-slate-900 mb-1">Мотивирующий</h4>
                  <p className="text-xs text-slate-500">Геймификация, награды, прогресс</p>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 rounded-xl p-4 text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-slate-900 mb-1">Надёжный</h4>
                  <p className="text-xs text-slate-500">Качественный контент, стабильность</p>
                </div>
                <div className="bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-100 rounded-xl p-4 text-center">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-slate-900 mb-1">Современный</h4>
                  <p className="text-xs text-slate-500">Актуальный дизайн, трендовый стиль</p>
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
              <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-3">Primary — Основной</h3>
              <div className="grid grid-cols-5 gap-3">
                <div className="space-y-2">
                  <div className="h-16 bg-teal-50 rounded-lg border border-slate-200"></div>
                  <div className="text-xs text-center"><span className="font-mono text-slate-600">50</span><br/>#F0FDFA</div>
                </div>
                <div className="space-y-2">
                  <div className="h-16 bg-teal-100 rounded-lg"></div>
                  <div className="text-xs text-center"><span className="font-mono text-slate-600">100</span><br/>#CCFBF1</div>
                </div>
                <div className="space-y-2">
                  <div className="h-16 bg-teal-300 rounded-lg"></div>
                  <div className="text-xs text-center"><span className="font-mono text-slate-600">300</span><br/>#5EEAD4</div>
                </div>
                <div className="space-y-2">
                  <div className="h-16 bg-teal-500 rounded-lg"></div>
                  <div className="text-xs text-center"><span className="font-mono text-slate-600">500</span><br/>#14B8A6</div>
                </div>
                <div className="space-y-2">
                  <div className="h-16 bg-teal-700 rounded-lg"></div>
                  <div className="text-xs text-center"><span className="font-mono text-slate-600">700</span><br/>#0F766E</div>
                </div>
              </div>
            </div>

            {/* Secondary */}
            <div>
              <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-3">Secondary — Акцент</h3>
              <div className="grid grid-cols-5 gap-3">
                <div className="space-y-2">
                  <div className="h-16 bg-violet-50 rounded-lg border border-slate-200"></div>
                  <div className="text-xs text-center"><span className="font-mono text-slate-600">50</span><br/>#F5F3FF</div>
                </div>
                <div className="space-y-2">
                  <div className="h-16 bg-violet-100 rounded-lg"></div>
                  <div className="text-xs text-center"><span className="font-mono text-slate-600">100</span><br/>#EDE9FE</div>
                </div>
                <div className="space-y-2">
                  <div className="h-16 bg-violet-300 rounded-lg"></div>
                  <div className="text-xs text-center"><span className="font-mono text-slate-600">300</span><br/>#C4B5FD</div>
                </div>
                <div className="space-y-2">
                  <div className="h-16 bg-violet-500 rounded-lg"></div>
                  <div className="text-xs text-center"><span className="font-mono text-slate-600">500</span><br/>#8B5CF6</div>
                </div>
                <div className="space-y-2">
                  <div className="h-16 bg-violet-700 rounded-lg"></div>
                  <div className="text-xs text-center"><span className="font-mono text-slate-600">700</span><br/>#6D28D9</div>
                </div>
              </div>
            </div>

            {/* Neutral */}
            <div>
              <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-3">Neutral — Нейтральные</h3>
              <div className="grid grid-cols-7 gap-3">
                <div className="space-y-2">
                  <div className="h-12 bg-white rounded-lg border border-slate-200"></div>
                  <div className="text-xs text-center font-mono text-slate-600">White</div>
                </div>
                <div className="space-y-2">
                  <div className="h-12 bg-slate-50 rounded-lg border border-slate-200"></div>
                  <div className="text-xs text-center font-mono text-slate-600">50</div>
                </div>
                <div className="space-y-2">
                  <div className="h-12 bg-slate-100 rounded-lg"></div>
                  <div className="text-xs text-center font-mono text-slate-600">100</div>
                </div>
                <div className="space-y-2">
                  <div className="h-12 bg-slate-300 rounded-lg"></div>
                  <div className="text-xs text-center font-mono text-slate-600">300</div>
                </div>
                <div className="space-y-2">
                  <div className="h-12 bg-slate-500 rounded-lg"></div>
                  <div className="text-xs text-center font-mono text-slate-600">500</div>
                </div>
                <div className="space-y-2">
                  <div className="h-12 bg-slate-700 rounded-lg"></div>
                  <div className="text-xs text-center font-mono text-slate-600">700</div>
                </div>
                <div className="space-y-2">
                  <div className="h-12 bg-slate-900 rounded-lg"></div>
                  <div className="text-xs text-center font-mono text-slate-600">900</div>
                </div>
              </div>
            </div>

            {/* Status */}
            <div>
              <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-3">Status — Состояния</h3>
              <div className="grid grid-cols-4 gap-4">
                <div className="flex items-center gap-3 bg-emerald-50 border border-emerald-200 rounded-lg p-3">
                  <div className="w-10 h-10 bg-emerald-500 rounded-lg"></div>
                  <div>
                    <div className="font-medium text-slate-900 text-sm">Success</div>
                    <div className="text-xs font-mono text-slate-500">#10B981</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-amber-50 border border-amber-200 rounded-lg p-3">
                  <div className="w-10 h-10 bg-amber-500 rounded-lg"></div>
                  <div>
                    <div className="font-medium text-slate-900 text-sm">Warning</div>
                    <div className="text-xs font-mono text-slate-500">#F59E0B</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-red-50 border border-red-200 rounded-lg p-3">
                  <div className="w-10 h-10 bg-red-500 rounded-lg"></div>
                  <div>
                    <div className="font-medium text-slate-900 text-sm">Error</div>
                    <div className="text-xs font-mono text-slate-500">#EF4444</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-blue-50 border border-blue-200 rounded-lg p-3">
                  <div className="w-10 h-10 bg-blue-500 rounded-lg"></div>
                  <div>
                    <div className="font-medium text-slate-900 text-sm">Info</div>
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
              {/* Шрифты */}
              <div>
                <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-4">Шрифтовые семейства</h3>
                <div className="space-y-4">
                  <div className="bg-slate-50 rounded-xl p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-semibold text-teal-600 uppercase">Primary Font</span>
                      <span className="text-xs text-slate-500">Заголовки</span>
                    </div>
                    <p className="text-2xl font-bold text-slate-900" style={{fontFamily: 'system-ui'}}>Inter / SF Pro</p>
                    <p className="text-sm text-slate-500 mt-1">Современный геометрический sans-serif</p>
                  </div>
                  <div className="bg-slate-50 rounded-xl p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-semibold text-violet-600 uppercase">Secondary Font</span>
                      <span className="text-xs text-slate-500">Основной текст</span>
                    </div>
                    <p className="text-xl text-slate-900" style={{fontFamily: 'system-ui'}}>Inter / SF Pro Text</p>
                    <p className="text-sm text-slate-500 mt-1">Высокая читаемость на экранах</p>
                  </div>
                </div>
              </div>

              {/* Масштаб */}
              <div>
                <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-4">Типографический масштаб</h3>
                <div className="space-y-3">
                  <div className="flex items-baseline gap-4 py-2 border-b border-slate-100">
                    <span className="text-xs font-mono text-slate-400 w-12">H1</span>
                    <span className="text-3xl font-bold text-slate-900">32px / Bold</span>
                  </div>
                  <div className="flex items-baseline gap-4 py-2 border-b border-slate-100">
                    <span className="text-xs font-mono text-slate-400 w-12">H2</span>
                    <span className="text-2xl font-bold text-slate-900">24px / Bold</span>
                  </div>
                  <div className="flex items-baseline gap-4 py-2 border-b border-slate-100">
                    <span className="text-xs font-mono text-slate-400 w-12">H3</span>
                    <span className="text-xl font-semibold text-slate-900">20px / Semi</span>
                  </div>
                  <div className="flex items-baseline gap-4 py-2 border-b border-slate-100">
                    <span className="text-xs font-mono text-slate-400 w-12">H4</span>
                    <span className="text-lg font-semibold text-slate-900">18px / Semi</span>
                  </div>
                  <div className="flex items-baseline gap-4 py-2 border-b border-slate-100">
                    <span className="text-xs font-mono text-slate-400 w-12">Body</span>
                    <span className="text-base text-slate-900">16px / Regular</span>
                  </div>
                  <div className="flex items-baseline gap-4 py-2 border-b border-slate-100">
                    <span className="text-xs font-mono text-slate-400 w-12">Small</span>
                    <span className="text-sm text-slate-900">14px / Regular</span>
                  </div>
                  <div className="flex items-baseline gap-4 py-2">
                    <span className="text-xs font-mono text-slate-400 w-12">Caption</span>
                    <span className="text-xs text-slate-900">12px / Regular</span>
                  </div>
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
          <div className="p-6 space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Grid */}
              <div>
                <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-4">Модульная сетка (8px)</h3>
                <div className="bg-slate-900 rounded-xl p-6 relative">
                  <div className="absolute inset-6 grid grid-cols-4 gap-2 pointer-events-none">
                    {[...Array(4)].map((_, i) => (
                      <div key={i} className="bg-teal-500/20 rounded"></div>
                    ))}
                  </div>
                  <div className="relative bg-white rounded-lg p-4 space-y-3">
                    <div className="h-3 bg-teal-500/30 rounded w-1/2"></div>
                    <div className="h-2 bg-slate-200 rounded w-3/4"></div>
                    <div className="h-2 bg-slate-200 rounded w-2/3"></div>
                    <div className="flex gap-2 pt-2">
                      <div className="h-8 bg-teal-500 rounded flex-1"></div>
                      <div className="h-8 bg-slate-200 rounded flex-1"></div>
                    </div>
                  </div>
                </div>
                <div className="mt-4 grid grid-cols-3 gap-3 text-center">
                  <div className="bg-slate-50 rounded-lg p-3">
                    <div className="text-lg font-bold text-teal-600">8px</div>
                    <div className="text-xs text-slate-500">Base Unit</div>
                  </div>
                  <div className="bg-slate-50 rounded-lg p-3">
                    <div className="text-lg font-bold text-slate-600">16px</div>
                    <div className="text-xs text-slate-500">Margins</div>
                  </div>
                  <div className="bg-slate-50 rounded-lg p-3">
                    <div className="text-lg font-bold text-slate-600">375px</div>
                    <div className="text-xs text-slate-500">Frame Width</div>
                  </div>
                </div>
              </div>

              {/* Spacing */}
              <div>
                <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-4">Система отступов</h3>
                <div className="space-y-3">
                  {[
                    { size: 4, name: 'xs', desc: 'Минимальный' },
                    { size: 8, name: 'sm', desc: 'Маленький' },
                    { size: 12, name: 'md', desc: 'Средний' },
                    { size: 16, name: 'base', desc: 'Базовый' },
                    { size: 24, name: 'lg', desc: 'Большой' },
                    { size: 32, name: 'xl', desc: 'Очень большой' },
                    { size: 48, name: '2xl', desc: 'Секция' },
                  ].map((item) => (
                    <div key={item.size} className="flex items-center gap-4">
                      <div className="w-12 text-right">
                        <span className="text-sm font-mono text-slate-600">{item.size}px</span>
                      </div>
                      <div 
                        className="bg-teal-500 rounded"
                        style={{ width: `${item.size * 2}px`, height: '16px' }}
                      ></div>
                      <div className="flex-1">
                        <span className="text-sm font-medium text-slate-700">{item.name}</span>
                        <span className="text-xs text-slate-400 ml-2">— {item.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* БЛОК 5: Кнопки */}
        <section className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="bg-slate-800 text-white px-6 py-3 flex items-center justify-between">
            <span className="font-medium">Блок 5: Компоненты — Кнопки</span>
            <span className="text-xs bg-slate-700 px-2 py-1 rounded">Buttons</span>
          </div>
          <div className="p-6 space-y-6">
            {/* Варианты кнопок */}
            <div className="grid md:grid-cols-4 gap-6">
              <div className="space-y-3">
                <h4 className="text-xs font-semibold text-slate-500 uppercase">Primary</h4>
                <button className="w-full bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 px-6 rounded-xl transition-colors">
                  Продолжить
                </button>
                <p className="text-xs text-slate-500">Основное действие</p>
              </div>
              <div className="space-y-3">
                <h4 className="text-xs font-semibold text-slate-500 uppercase">Secondary</h4>
                <button className="w-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold py-3 px-6 rounded-xl transition-colors">
                  Отмена
                </button>
                <p className="text-xs text-slate-500">Второстепенное действие</p>
              </div>
              <div className="space-y-3">
                <h4 className="text-xs font-semibold text-slate-500 uppercase">Outline</h4>
                <button className="w-full bg-white border-2 border-teal-500 text-teal-600 font-semibold py-3 px-6 rounded-xl hover:bg-teal-50 transition-colors">
                  Подробнее
                </button>
                <p className="text-xs text-slate-500">Альтернативное действие</p>
              </div>
              <div className="space-y-3">
                <h4 className="text-xs font-semibold text-slate-500 uppercase">Text</h4>
                <button className="w-full text-teal-600 font-semibold py-3 px-6 rounded-xl hover:bg-teal-50 transition-colors">
                  Пропустить
                </button>
                <p className="text-xs text-slate-500">Текстовая ссылка</p>
              </div>
            </div>

            {/* Состояния */}
            <div>
              <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-4">Состояния кнопок</h3>
              <div className="grid grid-cols-5 gap-4">
                <div className="space-y-2 text-center">
                  <button className="w-full bg-teal-500 text-white font-semibold py-3 px-4 rounded-xl">
                    Default
                  </button>
                  <span className="text-xs text-slate-500">Обычное</span>
                </div>
                <div className="space-y-2 text-center">
                  <button className="w-full bg-teal-600 text-white font-semibold py-3 px-4 rounded-xl">
                    Hover
                  </button>
                  <span className="text-xs text-slate-500">Наведение</span>
                </div>
                <div className="space-y-2 text-center">
                  <button className="w-full bg-teal-700 text-white font-semibold py-3 px-4 rounded-xl ring-4 ring-teal-200">
                    Focus
                  </button>
                  <span className="text-xs text-slate-500">Фокус</span>
                </div>
                <div className="space-y-2 text-center">
                  <button className="w-full bg-teal-800 text-white font-semibold py-3 px-4 rounded-xl scale-95">
                    Pressed
                  </button>
                  <span className="text-xs text-slate-500">Нажатие</span>
                </div>
                <div className="space-y-2 text-center">
                  <button className="w-full bg-slate-200 text-slate-400 font-semibold py-3 px-4 rounded-xl cursor-not-allowed">
                    Disabled
                  </button>
                  <span className="text-xs text-slate-500">Отключено</span>
                </div>
              </div>
            </div>

            {/* Размеры */}
            <div>
              <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-4">Размеры</h3>
              <div className="flex items-end gap-4">
                <div className="space-y-2 text-center">
                  <button className="bg-teal-500 text-white text-xs font-semibold py-2 px-3 rounded-lg">
                    Small
                  </button>
                  <div className="text-xs text-slate-500">32px</div>
                </div>
                <div className="space-y-2 text-center">
                  <button className="bg-teal-500 text-white text-sm font-semibold py-2.5 px-4 rounded-xl">
                    Medium
                  </button>
                  <div className="text-xs text-slate-500">40px</div>
                </div>
                <div className="space-y-2 text-center">
                  <button className="bg-teal-500 text-white font-semibold py-3 px-6 rounded-xl">
                    Large
                  </button>
                  <div className="text-xs text-slate-500">48px</div>
                </div>
                <div className="space-y-2 text-center">
                  <button className="bg-teal-500 text-white text-lg font-semibold py-4 px-8 rounded-xl">
                    X-Large
                  </button>
                  <div className="text-xs text-slate-500">56px</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* БЛОК 6: Формы ввода */}
        <section className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="bg-slate-800 text-white px-6 py-3 flex items-center justify-between">
            <span className="font-medium">Блок 6: Компоненты — Формы ввода</span>
            <span className="text-xs bg-slate-700 px-2 py-1 rounded">Inputs</span>
          </div>
          <div className="p-6 space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Типы полей */}
              <div className="space-y-4">
                <h4 className="text-xs font-semibold text-slate-500 uppercase">Типы полей</h4>
                
                {/* Text input */}
                <div className="space-y-1">
                  <label className="text-sm font-medium text-slate-700">Текстовое поле</label>
                  <input 
                    type="text" 
                    placeholder="Введите имя"
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all"
                  />
                </div>

                {/* Password */}
                <div className="space-y-1">
                  <label className="text-sm font-medium text-slate-700">Пароль</label>
                  <div className="relative">
                    <input 
                      type="password" 
                      placeholder="Введите пароль"
                      className="w-full px-4 py-3 border border-slate-300 rounded-xl pr-12 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none"
                    />
                    <button className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Search */}
                <div className="space-y-1">
                  <label className="text-sm font-medium text-slate-700">Поиск</label>
                  <div className="relative">
                    <svg className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <input 
                      type="search" 
                      placeholder="Поиск курсов..."
                      className="w-full px-4 py-3 pl-10 border border-slate-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Состояния */}
              <div className="space-y-4">
                <h4 className="text-xs font-semibold text-slate-500 uppercase">Состояния полей</h4>
                
                <div className="space-y-1">
                  <label className="text-sm font-medium text-slate-700">Default</label>
                  <input 
                    type="text" 
                    placeholder="Обычное поле"
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-sm font-medium text-slate-700">Focus</label>
                  <input 
                    type="text" 
                    placeholder="Поле в фокусе"
                    className="w-full px-4 py-3 border-2 border-teal-500 rounded-xl ring-4 ring-teal-100"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-sm font-medium text-red-600">Error</label>
                  <input 
                    type="text" 
                    placeholder="Ошибка"
                    className="w-full px-4 py-3 border-2 border-red-500 rounded-xl ring-4 ring-red-100"
                  />
                  <p className="text-xs text-red-500">Введите корректный email</p>
                </div>

                <div className="space-y-1">
                  <label className="text-sm font-medium text-slate-400">Disabled</label>
                  <input 
                    type="text" 
                    placeholder="Отключено"
                    disabled
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl bg-slate-50 text-slate-400 cursor-not-allowed"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* БЛОК 7: Карточки */}
        <section className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="bg-slate-800 text-white px-6 py-3 flex items-center justify-between">
            <span className="font-medium">Блок 7: Компоненты — Карточки</span>
            <span className="text-xs bg-slate-700 px-2 py-1 rounded">Cards</span>
          </div>
          <div className="p-6">
            <div className="grid md:grid-cols-3 gap-6">
              {/* Course Card */}
              <div className="space-y-3">
                <h4 className="text-xs font-semibold text-slate-500 uppercase">Course Card</h4>
                <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <div className="h-32 bg-gradient-to-br from-teal-400 to-emerald-500 flex items-center justify-center">
                    <svg className="w-12 h-12 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                  <div className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs bg-teal-100 text-teal-700 px-2 py-0.5 rounded-full">Программирование</span>
                    </div>
                    <h4 className="font-semibold text-slate-900 mb-1">Python для начинающих</h4>
                    <p className="text-sm text-slate-500 mb-3">12 уроков • 4 часа</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1">
                        <svg className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <span className="text-sm font-medium">4.8</span>
                      </div>
                      <span className="text-sm text-teal-600 font-medium">Бесплатно</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Lesson Card */}
              <div className="space-y-3">
                <h4 className="text-xs font-semibold text-slate-500 uppercase">Lesson Card</h4>
                <div className="bg-white border border-slate-200 rounded-xl p-4 hover:bg-slate-50 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-slate-900 truncate">Введение в переменные</h4>
                      <p className="text-sm text-slate-500">5 мин • Теория</p>
                    </div>
                    <svg className="w-5 h-5 text-slate-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
                <div className="bg-white border-2 border-teal-500 rounded-xl p-4 bg-teal-50/50">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-teal-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-slate-900 truncate">Типы данных</h4>
                      <p className="text-sm text-teal-600">В процессе • 3/8 мин</p>
                    </div>
                    <svg className="w-5 h-5 text-teal-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Achievement Card */}
              <div className="space-y-3">
                <h4 className="text-xs font-semibold text-slate-500 uppercase">Achievement Card</h4>
                <div className="bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200 rounded-2xl p-4 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-lg">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-slate-900 mb-1">Первые шаги</h4>
                  <p className="text-sm text-slate-500 mb-2">Завершите первый урок</p>
                  <div className="inline-flex items-center gap-1 text-xs text-amber-600 bg-amber-100 px-2 py-1 rounded-full">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Получено
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* БЛОК 8: Навигация */}
        <section className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="bg-slate-800 text-white px-6 py-3 flex items-center justify-between">
            <span className="font-medium">Блок 8: Компоненты — Навигация</span>
            <span className="text-xs bg-slate-700 px-2 py-1 rounded">Navigation</span>
          </div>
          <div className="p-6 space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Tab Bar */}
              <div className="space-y-3">
                <h4 className="text-xs font-semibold text-slate-500 uppercase">Tab Bar</h4>
                <div className="bg-slate-100 rounded-2xl p-2">
                  <div className="bg-white rounded-xl shadow-sm p-2 flex justify-around items-center">
                    <div className="flex flex-col items-center gap-1 py-2 px-4 rounded-lg bg-teal-50">
                      <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                      </svg>
                      <span className="text-xs font-medium text-teal-700">Главная</span>
                    </div>
                    <div className="flex flex-col items-center gap-1 py-2 px-4">
                      <svg className="w-6 h-6 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                      <span className="text-xs text-slate-500">Каталог</span>
                    </div>
                    <div className="flex flex-col items-center gap-1 py-2 px-4">
                      <svg className="w-6 h-6 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                      <span className="text-xs text-slate-500">Курсы</span>
                    </div>
                    <div className="flex flex-col items-center gap-1 py-2 px-4">
                      <svg className="w-6 h-6 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                      <span className="text-xs text-slate-500">Прогресс</span>
                    </div>
                    <div className="flex flex-col items-center gap-1 py-2 px-4">
                      <svg className="w-6 h-6 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      <span className="text-xs text-slate-500">Профиль</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Header */}
              <div className="space-y-3">
                <h4 className="text-xs font-semibold text-slate-500 uppercase">Header варианты</h4>
                <div className="space-y-2">
                  <div className="bg-white border border-slate-200 rounded-xl px-4 py-3 flex items-center justify-between">
                    <button className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-slate-100">
                      <svg className="w-5 h-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    <h3 className="font-semibold text-slate-900">Python для начинающих</h3>
                    <button className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-slate-100">
                      <svg className="w-5 h-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                      </svg>
                    </button>
                  </div>
                  <div className="bg-slate-900 rounded-xl px-4 py-3 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-teal-500 rounded-full flex items-center justify-center text-white font-bold">
                        А
                      </div>
                      <div>
                        <p className="text-sm text-slate-400">Привет,</p>
                        <p className="font-semibold text-white">Алексей!</p>
                      </div>
                    </div>
                    <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-slate-800">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* БЛОК 9: Обратная связь */}
        <section className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="bg-slate-800 text-white px-6 py-3 flex items-center justify-between">
            <span className="font-medium">Блок 9: Компоненты — Обратная связь</span>
            <span className="text-xs bg-slate-700 px-2 py-1 rounded">Feedback</span>
          </div>
          <div className="p-6 space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Toasts */}
              <div className="space-y-3">
                <h4 className="text-xs font-semibold text-slate-500 uppercase">Toast уведомления</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 bg-emerald-50 border border-emerald-200 rounded-xl p-4">
                    <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-emerald-800">Урок завершён!</p>
                      <p className="text-sm text-emerald-600">+50 XP добавлено</p>
                    </div>
                    <button className="text-emerald-400 hover:text-emerald-600">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                  <div className="flex items-center gap-3 bg-red-50 border border-red-200 rounded-xl p-4">
                    <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-red-800">Ошибка соединения</p>
                      <p className="text-sm text-red-600">Проверьте интернет</p>
                    </div>
                    <button className="text-red-400 hover:text-red-600">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                  <div className="flex items-center gap-3 bg-amber-50 border border-amber-200 rounded-xl p-4">
                    <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-amber-800">Серия прервана</p>
                      <p className="text-sm text-amber-600">Занимайтесь каждый день</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Empty State & Modal */}
              <div className="space-y-3">
                <h4 className="text-xs font-semibold text-slate-500 uppercase">Empty State</h4>
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-8 text-center">
                  <div className="w-16 h-16 bg-slate-200 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-slate-900 mb-2">Пока нет курсов</h4>
                  <p className="text-sm text-slate-500 mb-4">Начните обучение с первого курса</p>
                  <button className="bg-teal-500 hover:bg-teal-600 text-white font-semibold py-2 px-4 rounded-xl text-sm">
                    Выбрать курс
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* БЛОК 10: Иконки */}
        <section className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="bg-slate-800 text-white px-6 py-3 flex items-center justify-between">
            <span className="font-medium">Блок 10: Иконки</span>
            <span className="text-xs bg-slate-700 px-2 py-1 rounded">Icons</span>
          </div>
          <div className="p-6 space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Навигация */}
              <div>
                <h4 className="text-xs font-semibold text-slate-500 uppercase mb-4">Навигация</h4>
                <div className="grid grid-cols-5 gap-4">
                  {[
                    { name: 'Главная', icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /> },
                    { name: 'Поиск', icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /> },
                    { name: 'Курсы', icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /> },
                    { name: 'Статистика', icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /> },
                    { name: 'Профиль', icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /> },
                  ].map((item, i) => (
                    <div key={i} className="text-center">
                      <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center mx-auto mb-2">
                        <svg className="w-6 h-6 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">{item.icon}</svg>
                      </div>
                      <span className="text-xs text-slate-500">{item.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Действия */}
              <div>
                <h4 className="text-xs font-semibold text-slate-500 uppercase mb-4">Действия</h4>
                <div className="grid grid-cols-5 gap-4">
                  {[
                    { name: 'Назад', icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /> },
                    { name: 'Вперёд', icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /> },
                    { name: 'Закрыть', icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> },
                    { name: 'Меню', icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" /> },
                    { name: 'Настройки', icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /> },
                  ].map((item, i) => (
                    <div key={i} className="text-center">
                      <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center mx-auto mb-2">
                        <svg className="w-6 h-6 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">{item.icon}</svg>
                      </div>
                      <span className="text-xs text-slate-500">{item.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* БЛОК 11: Пример экрана */}
        <section className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="bg-slate-800 text-white px-6 py-3 flex items-center justify-between">
            <span className="font-medium">Блок 11: Пример экрана из UI-кита</span>
            <span className="text-xs bg-slate-700 px-2 py-1 rounded">Этап 5</span>
          </div>
          <div className="p-6">
            <div className="max-w-sm mx-auto">
              {/* Phone frame */}
              <div className="bg-slate-900 rounded-[3rem] p-3 shadow-2xl">
                <div className="bg-white rounded-[2.5rem] overflow-hidden">
                  {/* Status bar */}
                  <div className="bg-slate-900 text-white px-6 py-2 flex justify-between items-center text-xs">
                    <span>9:41</span>
                    <div className="flex gap-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M17.778 8.222c-4.296-4.296-11.26-4.296-15.556 0A1 1 0 01.808 6.808c5.076-5.077 13.308-5.077 18.384 0a1 1 0 01-1.414 1.414zM14.95 11.05a7 7 0 00-9.9 0 1 1 0 01-1.414-1.414 9 9 0 0112.728 0 1 1 0 01-1.414 1.414zM12.12 13.88a3 3 0 00-4.242 0 1 1 0 01-1.415-1.415 5 5 0 017.072 0 1 1 0 01-1.415 1.415zM9 16a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" /></svg>
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" /></svg>
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" /><path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd" /></svg>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-4 space-y-4">
                    {/* Header */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-teal-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                          А
                        </div>
                        <div>
                          <p className="text-xs text-slate-500">Привет,</p>
                          <p className="font-semibold text-slate-900 text-sm">Алексей!</p>
                        </div>
                      </div>
                      <button className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center">
                        <svg className="w-5 h-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                        </svg>
                      </button>
                    </div>

                    {/* Streak */}
                    <div className="bg-gradient-to-r from-amber-500 to-orange-500 rounded-xl p-4 text-white">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-amber-100 text-xs">Текущая серия</p>
                          <p className="text-2xl font-bold">7 дней</p>
                        </div>
                        <div className="text-3xl">🔥</div>
                      </div>
                    </div>

                    {/* Continue learning */}
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-3 text-sm">Продолжить обучение</h3>
                      <div className="bg-white border border-slate-200 rounded-xl p-3">
                        <div className="flex gap-3">
                          <div className="w-12 h-12 bg-gradient-to-br from-teal-400 to-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                            </svg>
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="font-medium text-slate-900 text-sm truncate">Python для начинающих</h4>
                            <p className="text-xs text-slate-500">Урок 5 из 12</p>
                            <div className="mt-2 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                              <div className="h-full bg-teal-500 rounded-full" style={{width: '40%'}}></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Tab Bar */}
                  <div className="border-t border-slate-200 px-2 py-2">
                    <div className="flex justify-around items-center">
                      <div className="flex flex-col items-center gap-1 py-1 px-3 rounded-lg bg-teal-50">
                        <svg className="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                        <span className="text-[10px] font-medium text-teal-700">Главная</span>
                      </div>
                      <div className="flex flex-col items-center gap-1 py-1 px-3">
                        <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                        <span className="text-[10px] text-slate-500">Каталог</span>
                      </div>
                      <div className="flex flex-col items-center gap-1 py-1 px-3">
                        <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                        <span className="text-[10px] text-slate-500">Курсы</span>
                      </div>
                      <div className="flex flex-col items-center gap-1 py-1 px-3">
                        <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                        <span className="text-[10px] text-slate-500">Прогресс</span>
                      </div>
                      <div className="flex flex-col items-center gap-1 py-1 px-3">
                        <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        <span className="text-[10px] text-slate-500">Профиль</span>
                      </div>
                    </div>
                  </div>

                  {/* Home indicator */}
                  <div className="flex justify-center pb-2">
                    <div className="w-32 h-1 bg-slate-900 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-center text-sm text-slate-500 mt-4">
              Экран «Главная» собран полностью из компонентов UI-кита
            </p>
          </div>
        </section>

        {/* БЛОК 12: Правила использования */}
        <section className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="bg-slate-800 text-white px-6 py-3 flex items-center justify-between">
            <span className="font-medium">Блок 12: Правила использования UI-кита</span>
            <span className="text-xs bg-slate-700 px-2 py-1 rounded">Этап 6</span>
          </div>
          <div className="p-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="font-semibold text-slate-900">Принципы дизайн-системы</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-teal-600 font-bold text-sm">1</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-slate-900 text-sm">Консистентность</h4>
                      <p className="text-xs text-slate-500">Используйте только компоненты из UI-кита, не создавайте кастомные решения</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-teal-600 font-bold text-sm">2</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-slate-900 text-sm">Модульность</h4>
                      <p className="text-xs text-slate-500">Все отступы кратны 8px, следуйте сетке</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-teal-600 font-bold text-sm">3</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-slate-900 text-sm">Доступность</h4>
                      <p className="text-xs text-slate-500">Контраст текста минимум 4.5:1, размер кнопок от 44px</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-teal-600 font-bold text-sm">4</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-slate-900 text-sm">Масштабируемость</h4>
                      <p className="text-xs text-slate-500">Компоненты легко адаптируются под разные размеры экрана</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="font-semibold text-slate-900">Структура UI-кита в Figma</h3>
                <div className="bg-slate-50 rounded-xl p-4 font-mono text-sm">
                  <div className="text-slate-600">
                    <div>📁 LearnUp UI-Kit</div>
                    <div className="ml-4">├─ 📄 Foundations</div>
                    <div className="ml-8">├─ Colors</div>
                    <div className="ml-8">├─ Typography</div>
                    <div className="ml-8">├─ Grid & Spacing</div>
                    <div className="ml-8">└─ Icons</div>
                    <div className="ml-4">├─ 📄 Components</div>
                    <div className="ml-8">├─ Buttons</div>
                    <div className="ml-8">├─ Inputs</div>
                    <div className="ml-8">├─ Cards</div>
                    <div className="ml-8">├─ Navigation</div>
                    <div className="ml-8">└─ Feedback</div>
                    <div className="ml-4">└─ 📄 Examples</div>
                    <div className="ml-8">└─ Home Screen</div>
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
