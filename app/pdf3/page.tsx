import { PrototypeGallery } from "@/components/pdf/prototype-screens"

export default function Pdf3Page() {
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
            <div className="flex gap-3">
              <a href="https://www.figma.com/design/drgb5K6Uy1RSZPrIkdSa2b/Untitled?node-id=0-1&t=DqGdWAbo1FMVYyst-1" target="_blank" rel="noopener noreferrer" className="text-sm text-teal-300 hover:text-teal-200">Figma-проект</a>
              <a href="/figma3" className="text-sm text-emerald-300 hover:text-emerald-200">Figma-контент</a>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-8">
        
        <div className="space-y-8 print:space-y-0">
          
          {/* Слайд 1 - Титульный */}
          <div className="bg-gradient-to-br from-teal-600 to-emerald-700 rounded-2xl shadow-xl overflow-hidden flex flex-col print:rounded-none print:shadow-none print:break-after-page">
            <div className="flex flex-col items-center justify-center text-white p-6">
              <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h1 className="text-4xl font-bold mb-2">LearnUp</h1>
              <p className="text-xl text-white/80 mb-8">Дизайн-система и UI-кит</p>
              <div className="text-sm text-white/60">
                <p>Практическое задание №3</p>
                <p>Создание визуального языка продукта</p>
              </div>
              <div className="mt-8 text-sm text-white/80">
                <p className="font-medium">Подготовил: Титов Николай</p>
                <p>ТКБО-02-23</p>
              </div>
              <div className="mt-6 text-sm text-white/70">
                <p>Figma: <a href="https://www.figma.com/design/drgb5K6Uy1RSZPrIkdSa2b/Untitled?node-id=0-1&t=DqGdWAbo1FMVYyst-1" target="_blank" rel="noopener noreferrer" className="underline hover:text-white">https://www.figma.com/design/drgb5K6Uy1RSZPrIkdSa2b/Untitled?node-id=0-1&t=DqGdWAbo1FMVYyst-1</a></p>
              </div>
            </div>
          </div>

          {/* Слайд 2 - Визуальные основы */}
          <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden flex flex-col print:rounded-none print:shadow-none print:border-0 print:break-after-page">
            <div className="bg-slate-800 text-white px-6 py-3">
              <h2 className="text-xl font-bold">Этап 1: Формирование визуальных основ</h2>
            </div>
            <div className="p-5 flex flex-col justify-center">
              <h3 className="text-lg font-semibold text-slate-900 mb-6 text-center">Характер бренда LearnUp</h3>
              <div className="grid grid-cols-4 gap-6">
                <div className="bg-gradient-to-br from-teal-50 to-emerald-50 border border-teal-100 rounded-xl p-5 text-center">
                  <div className="w-14 h-14 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-7 h-7 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-slate-900 mb-2">Дружелюбный</h4>
                  <p className="text-sm text-slate-500">Приветливый тон, понятный интерфейс</p>
                </div>
                <div className="bg-gradient-to-br from-violet-50 to-purple-50 border border-violet-100 rounded-xl p-5 text-center">
                  <div className="w-14 h-14 bg-violet-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-7 h-7 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-slate-900 mb-2">Мотивирующий</h4>
                  <p className="text-sm text-slate-500">Геймификация, награды, прогресс</p>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 rounded-xl p-5 text-center">
                  <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-slate-900 mb-2">Надёжный</h4>
                  <p className="text-sm text-slate-500">Качественный контент</p>
                </div>
                <div className="bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-100 rounded-xl p-5 text-center">
                  <div className="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-7 h-7 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-slate-900 mb-2">Современный</h4>
                  <p className="text-sm text-slate-500">Актуальный дизайн</p>
                </div>
              </div>
            </div>
            <div className="bg-slate-50 px-6 py-3 text-center text-slate-500 text-sm print:hidden">
              Визуальные основы
            </div>
          </div>

          {/* Слайд 3 - Цветовая палитра */}
          <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden flex flex-col print:rounded-none print:shadow-none print:border-0 print:break-after-page">
            <div className="bg-slate-800 text-white px-6 py-3">
              <h2 className="text-xl font-bold">Цветовая палитра</h2>
            </div>
            <div className="p-5">
              <div className="grid grid-cols-2 gap-8 h-full">
                <div>
                  <h3 className="text-sm font-semibold text-slate-500 uppercase mb-3">Primary — Teal</h3>
                  <div className="flex gap-2 mb-6">
                    <div className="flex-1 h-16 bg-teal-50 rounded-lg"></div>
                    <div className="flex-1 h-16 bg-teal-100 rounded-lg"></div>
                    <div className="flex-1 h-16 bg-teal-300 rounded-lg"></div>
                    <div className="flex-1 h-16 bg-teal-500 rounded-lg"></div>
                    <div className="flex-1 h-16 bg-teal-700 rounded-lg"></div>
                  </div>
                  <h3 className="text-sm font-semibold text-slate-500 uppercase mb-3">Secondary — Violet</h3>
                  <div className="flex gap-2 mb-6">
                    <div className="flex-1 h-16 bg-violet-50 rounded-lg"></div>
                    <div className="flex-1 h-16 bg-violet-100 rounded-lg"></div>
                    <div className="flex-1 h-16 bg-violet-300 rounded-lg"></div>
                    <div className="flex-1 h-16 bg-violet-500 rounded-lg"></div>
                    <div className="flex-1 h-16 bg-violet-700 rounded-lg"></div>
                  </div>
                  <h3 className="text-sm font-semibold text-slate-500 uppercase mb-3">Neutral — Slate</h3>
                  <div className="flex gap-2">
                    <div className="flex-1 h-12 bg-white border border-slate-200 rounded-lg"></div>
                    <div className="flex-1 h-12 bg-slate-100 rounded-lg"></div>
                    <div className="flex-1 h-12 bg-slate-300 rounded-lg"></div>
                    <div className="flex-1 h-12 bg-slate-500 rounded-lg"></div>
                    <div className="flex-1 h-12 bg-slate-700 rounded-lg"></div>
                    <div className="flex-1 h-12 bg-slate-900 rounded-lg"></div>
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-slate-500 uppercase mb-3">Status Colors</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 bg-emerald-50 rounded-lg p-3">
                      <div className="w-12 h-12 bg-emerald-500 rounded-lg"></div>
                      <div>
                        <div className="font-medium text-slate-900">Success</div>
                        <div className="text-sm text-slate-500 font-mono">#10B981</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 bg-amber-50 rounded-lg p-3">
                      <div className="w-12 h-12 bg-amber-500 rounded-lg"></div>
                      <div>
                        <div className="font-medium text-slate-900">Warning</div>
                        <div className="text-sm text-slate-500 font-mono">#F59E0B</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 bg-red-50 rounded-lg p-3">
                      <div className="w-12 h-12 bg-red-500 rounded-lg"></div>
                      <div>
                        <div className="font-medium text-slate-900">Error</div>
                        <div className="text-sm text-slate-500 font-mono">#EF4444</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 bg-blue-50 rounded-lg p-3">
                      <div className="w-12 h-12 bg-blue-500 rounded-lg"></div>
                      <div>
                        <div className="font-medium text-slate-900">Info</div>
                        <div className="text-sm text-slate-500 font-mono">#3B82F6</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-slate-50 px-6 py-3 text-center text-slate-500 text-sm print:hidden">
              Цветовая палитра
            </div>
          </div>

          {/* Слайд 4 - Типографика */}
          <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden flex flex-col print:rounded-none print:shadow-none print:border-0 print:break-after-page">
            <div className="bg-slate-800 text-white px-6 py-3">
              <h2 className="text-xl font-bold">Типографика</h2>
            </div>
            <div className="p-5">
              <div className="grid grid-cols-2 gap-8 h-full">
                <div>
                  <h3 className="text-sm font-semibold text-slate-500 uppercase mb-4">Шрифтовое семейство</h3>
                  <div className="bg-teal-50 rounded-xl p-6 mb-6">
                    <p className="text-3xl font-bold text-slate-900 mb-2">Inter / SF Pro</p>
                    <p className="text-slate-600">Современный геометрический sans-serif с высокой читаемостью на экранах</p>
                  </div>
                  <div className="bg-slate-50 rounded-xl p-4">
                    <p className="text-sm text-slate-500 mb-2">Почему Inter?</p>
                    <ul className="space-y-1 text-sm text-slate-700">
                      <li>• Оптимизирован для UI</li>
                      <li>• Бесплатный и открытый</li>
                      <li>• Отличная поддержка кириллицы</li>
                      <li>• Широкий диапазон начертаний</li>
                    </ul>
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-slate-500 uppercase mb-4">Типографический масштаб</h3>
                  <div className="space-y-3">
                    <div className="flex items-baseline gap-4 py-2 border-b border-slate-100">
                      <span className="text-xs font-mono text-slate-400 w-16">H1 / 32px</span>
                      <span className="text-3xl font-bold text-slate-900">Заголовок</span>
                    </div>
                    <div className="flex items-baseline gap-4 py-2 border-b border-slate-100">
                      <span className="text-xs font-mono text-slate-400 w-16">H2 / 24px</span>
                      <span className="text-2xl font-bold text-slate-900">Подзаголовок</span>
                    </div>
                    <div className="flex items-baseline gap-4 py-2 border-b border-slate-100">
                      <span className="text-xs font-mono text-slate-400 w-16">H3 / 20px</span>
                      <span className="text-xl font-semibold text-slate-900">Секция</span>
                    </div>
                    <div className="flex items-baseline gap-4 py-2 border-b border-slate-100">
                      <span className="text-xs font-mono text-slate-400 w-16">Body / 16</span>
                      <span className="text-base text-slate-900">Основной текст</span>
                    </div>
                    <div className="flex items-baseline gap-4 py-2 border-b border-slate-100">
                      <span className="text-xs font-mono text-slate-400 w-16">Small / 14</span>
                      <span className="text-sm text-slate-900">Вспомогательный</span>
                    </div>
                    <div className="flex items-baseline gap-4 py-2">
                      <span className="text-xs font-mono text-slate-400 w-16">Caption / 12</span>
                      <span className="text-xs text-slate-900">Подписи</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-slate-50 px-6 py-3 text-center text-slate-500 text-sm print:hidden">
              Типограф��к��
            </div>
          </div>

          {/* Слайд 5 - Сетка и отступы */}
          <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden flex flex-col print:rounded-none print:shadow-none print:border-0 print:break-after-page">
            <div className="bg-slate-800 text-white px-6 py-3">
              <h2 className="text-xl font-bold">Сетка и система отступов</h2>
            </div>
            <div className="p-5">
              <div className="grid grid-cols-2 gap-8 h-full">
                <div>
                  <h3 className="text-sm font-semibold text-slate-500 uppercase mb-4">Модульная сетка 8px</h3>
                  <div className="bg-slate-900 rounded-xl p-6 mb-4">
                    <div className="bg-white rounded-lg p-4 space-y-3">
                      <div className="h-4 bg-teal-500/30 rounded w-1/2"></div>
                      <div className="h-3 bg-slate-200 rounded w-3/4"></div>
                      <div className="h-3 bg-slate-200 rounded w-2/3"></div>
                      <div className="flex gap-2 pt-2">
                        <div className="h-10 bg-teal-500 rounded flex-1"></div>
                        <div className="h-10 bg-slate-200 rounded flex-1"></div>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-3 text-center">
                    <div className="bg-teal-50 rounded-lg p-3">
                      <div className="text-xl font-bold text-teal-600">8px</div>
                      <div className="text-xs text-slate-500">Base Unit</div>
                    </div>
                    <div className="bg-slate-50 rounded-lg p-3">
                      <div className="text-xl font-bold text-slate-600">16px</div>
                      <div className="text-xs text-slate-500">Margins</div>
                    </div>
                    <div className="bg-slate-50 rounded-lg p-3">
                      <div className="text-xl font-bold text-slate-600">375px</div>
                      <div className="text-xs text-slate-500">Frame</div>
                    </div>
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
                    ].map((item) => (
                      <div key={item.size} className="flex items-center gap-4">
                        <div className="w-14 text-right">
                          <span className="text-sm font-mono text-slate-600">{item.size}px</span>
                        </div>
                        <div 
                          className="bg-teal-500 rounded h-5"
                          style={{ width: `${item.size * 3}px` }}
                        ></div>
                        <span className="text-sm text-slate-500">{item.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-slate-50 px-6 py-3 text-center text-slate-500 text-sm print:hidden">
              Сетка и отступы
            </div>
          </div>

          {/* Слайд 6 - Кнопки */}
          <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden flex flex-col print:rounded-none print:shadow-none print:border-0 print:break-after-page">
            <div className="bg-slate-800 text-white px-6 py-3">
              <h2 className="text-xl font-bold">Этап 2-3: Компоненты — Кнопки</h2>
            </div>
            <div className="p-5">
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h3 className="text-sm font-semibold text-slate-500 uppercase mb-4">Варианты кнопок</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <button className="bg-teal-500 text-white font-semibold py-3 px-6 rounded-xl">Primary</button>
                      <span className="text-sm text-slate-500">Основное действие</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <button className="bg-slate-100 text-slate-700 font-semibold py-3 px-6 rounded-xl">Secondary</button>
                      <span className="text-sm text-slate-500">Второстепенное</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <button className="border-2 border-teal-500 text-teal-600 font-semibold py-3 px-6 rounded-xl">Outline</button>
                      <span className="text-sm text-slate-500">Альтернативное</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <button className="text-teal-600 font-semibold py-3 px-6 rounded-xl">Text</button>
                      <span className="text-sm text-slate-500">Текстовая ссылка</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-slate-500 uppercase mb-4">Состояния</h3>
                  <div className="grid grid-cols-5 gap-3">
                    <div className="text-center">
                      <button className="w-full bg-teal-500 text-white text-sm font-semibold py-2.5 px-2 rounded-lg mb-2">Btn</button>
                      <span className="text-xs text-slate-500">Default</span>
                    </div>
                    <div className="text-center">
                      <button className="w-full bg-teal-600 text-white text-sm font-semibold py-2.5 px-2 rounded-lg mb-2">Btn</button>
                      <span className="text-xs text-slate-500">Hover</span>
                    </div>
                    <div className="text-center">
                      <button className="w-full bg-teal-700 text-white text-sm font-semibold py-2.5 px-2 rounded-lg ring-4 ring-teal-200 mb-2">Btn</button>
                      <span className="text-xs text-slate-500">Focus</span>
                    </div>
                    <div className="text-center">
                      <button className="w-full bg-teal-800 text-white text-sm font-semibold py-2.5 px-2 rounded-lg scale-95 mb-2">Btn</button>
                      <span className="text-xs text-slate-500">Pressed</span>
                    </div>
                    <div className="text-center">
                      <button className="w-full bg-slate-200 text-slate-400 text-sm font-semibold py-2.5 px-2 rounded-lg mb-2">Btn</button>
                      <span className="text-xs text-slate-500">Disabled</span>
                    </div>
                  </div>
                  <h3 className="text-sm font-semibold text-slate-500 uppercase mb-3 mt-6">Размеры</h3>
                  <div className="flex items-end gap-3">
                    <div className="text-center">
                      <button className="bg-teal-500 text-white text-xs font-semibold py-2 px-3 rounded-lg">S</button>
                      <div className="text-xs text-slate-500 mt-1">32px</div>
                    </div>
                    <div className="text-center">
                      <button className="bg-teal-500 text-white text-sm font-semibold py-2.5 px-4 rounded-xl">M</button>
                      <div className="text-xs text-slate-500 mt-1">40px</div>
                    </div>
                    <div className="text-center">
                      <button className="bg-teal-500 text-white font-semibold py-3 px-6 rounded-xl">L</button>
                      <div className="text-xs text-slate-500 mt-1">48px</div>
                    </div>
                    <div className="text-center">
                      <button className="bg-teal-500 text-white text-lg font-semibold py-4 px-8 rounded-xl">XL</button>
                      <div className="text-xs text-slate-500 mt-1">56px</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-slate-50 px-6 py-3 text-center text-slate-500 text-sm print:hidden">
              Кнопки
            </div>
          </div>

          {/* Слайд 7 - Формы */}
          <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden flex flex-col print:rounded-none print:shadow-none print:border-0 print:break-after-page">
            <div className="bg-slate-800 text-white px-6 py-3">
              <h2 className="text-xl font-bold">Компоненты — Формы ввода</h2>
            </div>
            <div className="p-5">
              <div className="grid grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="text-sm font-semibold text-slate-500 uppercase">Ти��ы полей</h3>
                  <div>
                    <label className="text-sm font-medium text-slate-700 mb-1 block">Текстовое поле</label>
                    <input type="text" placeholder="Введите имя" className="w-full px-4 py-3 border border-slate-300 rounded-xl" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-slate-700 mb-1 block">Поле с иконкой</label>
                    <div className="relative">
                      <svg className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                      <input type="search" placeholder="Поиск курсов..." className="w-full px-4 py-3 pl-10 border border-slate-300 rounded-xl" />
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-sm font-semibold text-slate-500 uppercase">Состояния</h3>
                  <div>
                    <label className="text-sm font-medium text-slate-700 mb-1 block">Default</label>
                    <input type="text" placeholder="Обычное поле" className="w-full px-4 py-3 border border-slate-300 rounded-xl" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-slate-700 mb-1 block">Focus</label>
                    <input type="text" placeholder="В фокусе" className="w-full px-4 py-3 border-2 border-teal-500 rounded-xl ring-4 ring-teal-100" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-red-600 mb-1 block">Error</label>
                    <input type="text" placeholder="Ошибка" className="w-full px-4 py-3 border-2 border-red-500 rounded-xl" />
                    <p className="text-xs text-red-500 mt-1">Введите корректный email</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-slate-50 px-6 py-3 text-center text-slate-500 text-sm print:hidden">
              Формы ввода
            </div>
          </div>

          {/* Слайд 8 - Карточки */}
          <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden flex flex-col print:rounded-none print:shadow-none print:border-0 print:break-after-page">
            <div className="bg-slate-800 text-white px-6 py-3">
              <h2 className="text-xl font-bold">Компоненты — Карточки</h2>
            </div>
            <div className="p-5">
              <div className="grid grid-cols-3 gap-6 h-full">
                {/* Course Card */}
                <div className="space-y-2">
                  <h4 className="text-xs font-semibold text-slate-500 uppercase">Course Card</h4>
                  <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
                    <div className="h-24 bg-gradient-to-br from-teal-400 to-emerald-500 flex items-center justify-center">
                      <svg className="w-10 h-10 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                    </div>
                    <div className="p-4">
                      <span className="text-xs bg-teal-100 text-teal-700 px-2 py-0.5 rounded-full">Программирование</span>
                      <h4 className="font-semibold text-slate-900 mt-2 text-sm">Python для начинающих</h4>
                      <p className="text-xs text-slate-500">12 уроков • 4 часа</p>
                    </div>
                  </div>
                </div>

                {/* Lesson Card */}
                <div className="space-y-2">
                  <h4 className="text-xs font-semibold text-slate-500 uppercase">Lesson Card</h4>
                  <div className="bg-white border border-slate-200 rounded-xl p-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-slate-900 text-sm truncate">Введение в переменные</h4>
                        <p className="text-xs text-slate-500">5 мин • Теория</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white border-2 border-teal-500 rounded-xl p-3 bg-teal-50/50">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-teal-500 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                        </svg>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-slate-900 text-sm truncate">Типы данных</h4>
                        <p className="text-xs text-teal-600">В процессе</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Achievement Card */}
                <div className="space-y-2">
                  <h4 className="text-xs font-semibold text-slate-500 uppercase">Achievement Card</h4>
                  <div className="bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200 rounded-2xl p-4 text-center">
                    <div className="w-14 h-14 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-lg">
                      <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>
                    <h4 className="font-bold text-slate-900 text-sm mb-1">Первые шаги</h4>
                    <p className="text-xs text-slate-500 mb-2">Завершите первый урок</p>
                    <span className="inline-flex items-center gap-1 text-xs text-amber-600 bg-amber-100 px-2 py-1 rounded-full">
                      Получено
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-slate-50 px-6 py-3 text-center text-slate-500 text-sm print:hidden">
              Карточки
            </div>
          </div>

          {/* Слайд 9 - Пример экрана */}
          <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden flex flex-col print:rounded-none print:shadow-none print:border-0 print:break-after-page">
            <div className="bg-slate-800 text-white px-6 py-3">
              <h2 className="text-xl font-bold">Этап 5: Проверка на применимость</h2>
            </div>
            <div className="flex-1 p-8 flex gap-8">
              <div className="flex-1 flex items-center justify-center">
                {/* Phone frame */}
                <div className="bg-slate-900 rounded-[2.5rem] p-2 shadow-2xl scale-90">
                  <div className="bg-white rounded-[2rem] overflow-hidden w-56">
                    {/* Status bar */}
                    <div className="bg-slate-900 text-white px-4 py-1.5 flex justify-between items-center text-[10px]">
                      <span>9:41</span>
                      <div className="flex gap-1">
                        <div className="w-3 h-3 bg-white/60 rounded-sm"></div>
                        <div className="w-3 h-3 bg-white/60 rounded-sm"></div>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="p-3 space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center text-white font-bold text-xs">А</div>
                          <div>
                            <p className="text-[10px] text-slate-500">Привет,</p>
                            <p className="font-semibold text-slate-900 text-xs">Алексей!</p>
                          </div>
                        </div>
                        <div className="w-8 h-8 bg-slate-100 rounded-full"></div>
                      </div>

                      <div className="bg-gradient-to-r from-amber-500 to-orange-500 rounded-lg p-3 text-white">
                        <p className="text-[10px] text-amber-100">Текущая серия</p>
                        <p className="text-lg font-bold">7 дней</p>
                      </div>

                      <div>
                        <h3 className="font-semibold text-slate-900 mb-2 text-xs">Продолжить</h3>
                        <div className="bg-white border border-slate-200 rounded-lg p-2">
                          <div className="flex gap-2">
                            <div className="w-10 h-10 bg-gradient-to-br from-teal-400 to-emerald-500 rounded-lg flex-shrink-0"></div>
                            <div className="flex-1 min-w-0">
                              <h4 className="font-medium text-slate-900 text-[10px] truncate">Python</h4>
                              <div className="mt-1 h-1 bg-slate-100 rounded-full overflow-hidden">
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
                        <div className="w-6 h-6 bg-teal-100 rounded flex items-center justify-center">
                          <div className="w-3 h-3 bg-teal-600 rounded-sm"></div>
                        </div>
                        <div className="w-6 h-6 bg-slate-100 rounded"></div>
                        <div className="w-6 h-6 bg-slate-100 rounded"></div>
                        <div className="w-6 h-6 bg-slate-100 rounded"></div>
                        <div className="w-6 h-6 bg-slate-100 rounded"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1 flex flex-col justify-center">
                <h3 className="text-lg font-semibold text-slate-900 mb-4">Экран собран из UI-кита</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-teal-100 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-sm text-slate-700">Цвета соответствуют палитре</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-teal-100 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-sm text-slate-700">Типографика из масштаба</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-teal-100 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-sm text-slate-700">Отступы кратны 8px</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-teal-100 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-sm text-slate-700">Компоненты переиспользуемы</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-teal-100 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-sm text-slate-700">Стиль целостный и узнаваемый</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="bg-slate-50 px-6 py-3 text-center text-slate-500 text-sm print:hidden">
              Пример экрана
            </div>
          </div>

          {/* Слайд 10 - Итоги */}
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl shadow-xl overflow-hidden flex flex-col print:rounded-none print:shadow-none print:break-after-page">
            <div className="flex-1 p-12 flex flex-col justify-center text-white">
              <h2 className="text-3xl font-bold mb-8 text-center">Итоги и следующий этап</h2>
              
              <div className="grid grid-cols-2 gap-8 mb-8">
                <div className="bg-white/10 rounded-xl p-6">
                  <h3 className="text-lg font-semibold mb-4 text-teal-400">Что сделано в ПЗ №3</h3>
                  <ul className="space-y-2 text-slate-300 text-sm">
                    <li className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Определён характер бренда
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Разработана цветовая палитра
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Выбрана типографика и масштаб
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Создан UI-кит с компонентами
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Собран тестовый экран
                    </li>
                  </ul>
                </div>
                <div className="bg-white/10 rounded-xl p-6">
                  <h3 className="text-lg font-semibold mb-4 text-violet-400">Структура UI-кита</h3>
                  <div className="text-slate-300 text-sm font-mono">
                    <div>Foundations/</div>
                    <div className="ml-4 text-slate-400">Colors, Typography, Grid, Icons</div>
                    <div className="mt-2">Components/</div>
                    <div className="ml-4 text-slate-400">Buttons, Inputs, Cards, Nav</div>
                    <div className="mt-2">Examples/</div>
                    <div className="ml-4 text-slate-400">Home Screen</div>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center gap-2 bg-violet-500/20 border border-violet-400/30 rounded-full px-6 py-3">
                  <span className="text-violet-300">Следующий этап:</span>
                  <span className="font-semibold text-white">ПЗ №4 — Hi-Fi прототипы</span>
                  <svg className="w-5 h-5 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="bg-black/20 px-6 py-3 text-center text-white/60 text-sm">
              <p>Figma: <a href="https://www.figma.com/design/drgb5K6Uy1RSZPrIkdSa2b/Untitled?node-id=0-1&t=DqGdWAbo1FMVYyst-1" target="_blank" rel="noopener noreferrer" className="underline hover:text-white">https://www.figma.com/design/drgb5K6Uy1RSZPrIkdSa2b/Untitled?node-id=0-1&t=DqGdWAbo1FMVYyst-1</a></p>
            </div>
          </div>

          {/* Прототип — все экраны */}
          <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden flex flex-col print:rounded-none print:shadow-none print:border-0 print:break-after-page">
            <div className="bg-slate-800 text-white px-6 py-3">
              <h2 className="text-xl font-bold">Интерактивный прототип LearnUp</h2>
            </div>
            <div className="p-6">
              <p className="text-sm text-slate-500 mb-6 text-pretty">
                Все экраны рабочего прототипа приложения — отрисованы целиком в рамке устройства.
              </p>
              <PrototypeGallery scale={0.46} />
            </div>
            <div className="bg-slate-50 px-6 py-3 text-center text-slate-500 text-sm print:hidden">
              Прототип
            </div>
          </div>

        </div>
      </main>
    </div>
  )
}
