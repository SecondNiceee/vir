export default function Figma5Page() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl font-semibold text-slate-900">ПЗ №5 — Figma-контент</h1>
              <p className="text-sm text-slate-500">Интерактивный прототип LearnUp</p>
            </div>
            <div className="flex gap-3">
              <a href="https://www.figma.com/design/ifMj7wi9kSg8EiXMrfjmYS/Untitled?node-id=0-1&t=a26HOJN8i9Mb3mqx-1" target="_blank" rel="noopener noreferrer" className="text-sm text-green-600 hover:text-green-800">Figma-проект</a>
              <a href="/pdf5" className="text-sm text-rose-600 hover:text-rose-800">PDF-слайды</a>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-8 space-y-8">

        {/* БЛОК 1: Карта экранов и сценарии */}
        <section className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="bg-slate-800 text-white px-6 py-3 flex items-center justify-between">
            <span className="font-medium">Блок 1: Карта экранов и пользовательские сценарии</span>
            <span className="text-xs bg-slate-700 px-2 py-1 rounded">User Flow</span>
          </div>
          <div className="p-6 space-y-6">
            {/* Основной сценарий */}
            <div>
              <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-4">Основной сценарий: Прохождение урока</h3>
              <div className="flex items-center gap-3 flex-wrap">
                <div className="bg-teal-100 text-teal-800 px-4 py-3 rounded-xl font-medium text-center min-w-[120px]">
                  <div className="text-xs text-teal-600 mb-1">Экран 1</div>
                  Home
                </div>
                <svg className="w-6 h-6 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/></svg>
                <div className="bg-teal-100 text-teal-800 px-4 py-3 rounded-xl font-medium text-center min-w-[120px]">
                  <div className="text-xs text-teal-600 mb-1">Tap: Продолжить</div>
                  Детали курса
                </div>
                <svg className="w-6 h-6 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/></svg>
                <div className="bg-teal-100 text-teal-800 px-4 py-3 rounded-xl font-medium text-center min-w-[120px]">
                  <div className="text-xs text-teal-600 mb-1">Tap: Продолжить</div>
                  Урок
                </div>
                <svg className="w-6 h-6 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/></svg>
                <div className="bg-emerald-100 text-emerald-800 px-4 py-3 rounded-xl font-medium text-center min-w-[120px]">
                  <div className="text-xs text-emerald-600 mb-1">Overlay</div>
                  Success
                </div>
                <svg className="w-6 h-6 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/></svg>
                <div className="bg-teal-100 text-teal-800 px-4 py-3 rounded-xl font-medium text-center min-w-[120px]">
                  <div className="text-xs text-teal-600 mb-1">Tap: Продолжить</div>
                  Home (updated)
                </div>
              </div>
            </div>

            {/* Альтернативный сценарий */}
            <div>
              <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-4">Альтернативный сценарий: Поиск курса</h3>
              <div className="flex items-center gap-3 flex-wrap">
                <div className="bg-blue-100 text-blue-800 px-4 py-3 rounded-xl font-medium text-center min-w-[120px]">
                  <div className="text-xs text-blue-600 mb-1">Tab Bar</div>
                  Home
                </div>
                <svg className="w-6 h-6 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/></svg>
                <div className="bg-blue-100 text-blue-800 px-4 py-3 rounded-xl font-medium text-center min-w-[120px]">
                  <div className="text-xs text-blue-600 mb-1">Tap: Курсы</div>
                  Каталог
                </div>
                <svg className="w-6 h-6 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/></svg>
                <div className="bg-blue-100 text-blue-800 px-4 py-3 rounded-xl font-medium text-center min-w-[120px]">
                  <div className="text-xs text-blue-600 mb-1">Tap: Карточка</div>
                  Детали курса
                </div>
                <svg className="w-6 h-6 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/></svg>
                <div className="bg-blue-100 text-blue-800 px-4 py-3 rounded-xl font-medium text-center min-w-[120px]">
                  <div className="text-xs text-blue-600 mb-1">Tap: Начать</div>
                  Урок
                </div>
              </div>
            </div>

            {/* Сценарий с ошибкой */}
            <div>
              <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-4">Сценарий ошибки</h3>
              <div className="flex items-center gap-3 flex-wrap">
                <div className="bg-slate-100 text-slate-800 px-4 py-3 rounded-xl font-medium text-center min-w-[120px]">
                  <div className="text-xs text-slate-600 mb-1">Любой экран</div>
                  Loading
                </div>
                <svg className="w-6 h-6 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/></svg>
                <div className="bg-red-100 text-red-800 px-4 py-3 rounded-xl font-medium text-center min-w-[120px]">
                  <div className="text-xs text-red-600 mb-1">Network Error</div>
                  Error State
                </div>
                <svg className="w-6 h-6 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/></svg>
                <div className="bg-slate-100 text-slate-800 px-4 py-3 rounded-xl font-medium text-center min-w-[120px]">
                  <div className="text-xs text-slate-600 mb-1">Tap: Повторить</div>
                  Retry
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* БЛОК 2: Настройка переходов */}
        <section className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="bg-slate-800 text-white px-6 py-3 flex items-center justify-between">
            <span className="font-medium">Блок 2: Настройка интерактивных переходов в Figma</span>
            <span className="text-xs bg-slate-700 px-2 py-1 rounded">Prototype</span>
          </div>
          <div className="p-6 space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Navigate to */}
              <div className="border border-slate-200 rounded-xl p-5">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6"/></svg>
                  </div>
                  <h3 className="font-semibold text-slate-900">Navigate to</h3>
                </div>
                <p className="text-sm text-slate-600 mb-3">Стандартный переход между экранами</p>
                <div className="bg-slate-50 rounded-lg p-3 space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Trigger:</span>
                    <span className="font-medium">On Tap</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Animation:</span>
                    <span className="font-medium">Push / Slide</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Duration:</span>
                    <span className="font-medium">300ms</span>
                  </div>
                </div>
                <p className="text-xs text-slate-500 mt-3">Использовать для: карточки курсов, кнопки «Продолжить», элементы навигации</p>
              </div>

              {/* Open Overlay */}
              <div className="border border-slate-200 rounded-xl p-5">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-violet-100 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"/></svg>
                  </div>
                  <h3 className="font-semibold text-slate-900">Open Overlay</h3>
                </div>
                <p className="text-sm text-slate-600 mb-3">Модальные окна поверх текущего экрана</p>
                <div className="bg-slate-50 rounded-lg p-3 space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Position:</span>
                    <span className="font-medium">Center / Bottom</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Background:</span>
                    <span className="font-medium">Dim (50%)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Close on click outside:</span>
                    <span className="font-medium">Yes</span>
                  </div>
                </div>
                <p className="text-xs text-slate-500 mt-3">Использовать для: Success/Error states, подтверждения, подсказки</p>
              </div>

              {/* Swap */}
              <div className="border border-slate-200 rounded-xl p-5">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"/></svg>
                  </div>
                  <h3 className="font-semibold text-slate-900">Swap</h3>
                </div>
                <p className="text-sm text-slate-600 mb-3">Переключение вариантов компонента</p>
                <div className="bg-slate-50 rounded-lg p-3 space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Use for:</span>
                    <span className="font-medium">Variants</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Animation:</span>
                    <span className="font-medium">Smart Animate</span>
                  </div>
                </div>
                <p className="text-xs text-slate-500 mt-3">Использовать для: выбор ответа, переключение табов, состояния кнопок</p>
              </div>

              {/* Back */}
              <div className="border border-slate-200 rounded-xl p-5">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 17l-5-5m0 0l5-5m-5 5h12"/></svg>
                  </div>
                  <h3 className="font-semibold text-slate-900">Back</h3>
                </div>
                <p className="text-sm text-slate-600 mb-3">Возврат на предыдущий экран</p>
                <div className="bg-slate-50 rounded-lg p-3 space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Animation:</span>
                    <span className="font-medium">Slide out right</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Trigger:</span>
                    <span className="font-medium">On Tap</span>
                  </div>
                </div>
                <p className="text-xs text-slate-500 mt-3">Использовать для: кнопка «Назад», свайп, закрытие модалки</p>
              </div>
            </div>
          </div>
        </section>

        {/* БЛОК 3: Карта связей */}
        <section className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="bg-slate-800 text-white px-6 py-3 flex items-center justify-between">
            <span className="font-medium">Блок 3: Полная карта связей между экранами</span>
            <span className="text-xs bg-slate-700 px-2 py-1 rounded">Flow Map</span>
          </div>
          <div className="p-6">
            <div className="bg-slate-50 rounded-xl p-6">
              {/* Визуальная карта */}
              <div className="grid grid-cols-5 gap-4 text-center">
                {/* Row 1 */}
                <div></div>
                <div></div>
                <div className="bg-amber-100 border-2 border-amber-300 rounded-xl p-3">
                  <div className="text-2xl mb-1">🏠</div>
                  <p className="font-semibold text-sm text-amber-800">Home</p>
                  <p className="text-xs text-amber-600">Start Frame</p>
                </div>
                <div></div>
                <div></div>

                {/* Row 2 - Arrows */}
                <div className="flex items-center justify-center">
                  <div className="h-8 w-0.5 bg-slate-300"></div>
                </div>
                <div></div>
                <div className="flex items-center justify-center">
                  <div className="h-8 w-0.5 bg-teal-400"></div>
                </div>
                <div></div>
                <div className="flex items-center justify-center">
                  <div className="h-8 w-0.5 bg-slate-300"></div>
                </div>

                {/* Row 3 - Sub screens */}
                <div className="bg-blue-100 border border-blue-200 rounded-xl p-3">
                  <div className="text-xl mb-1">🔍</div>
                  <p className="font-semibold text-xs text-blue-800">Поиск</p>
                </div>
                <div className="bg-violet-100 border border-violet-200 rounded-xl p-3">
                  <div className="text-xl mb-1">📚</div>
                  <p className="font-semibold text-xs text-violet-800">Каталог</p>
                </div>
                <div className="bg-teal-100 border-2 border-teal-300 rounded-xl p-3">
                  <div className="text-xl mb-1">📖</div>
                  <p className="font-semibold text-xs text-teal-800">Детали курса</p>
                </div>
                <div className="bg-slate-100 border border-slate-200 rounded-xl p-3">
                  <div className="text-xl mb-1">👤</div>
                  <p className="font-semibold text-xs text-slate-800">Профиль</p>
                </div>
                <div className="bg-slate-100 border border-slate-200 rounded-xl p-3">
                  <div className="text-xl mb-1">⚙️</div>
                  <p className="font-semibold text-xs text-slate-800">Настройки</p>
                </div>

                {/* Row 4 - Arrows */}
                <div></div>
                <div className="flex items-center justify-center">
                  <svg className="w-4 h-4 text-slate-400 rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/></svg>
                </div>
                <div className="flex items-center justify-center">
                  <div className="h-8 w-0.5 bg-teal-400"></div>
                </div>
                <div></div>
                <div></div>

                {/* Row 5 - Lesson and states */}
                <div></div>
                <div></div>
                <div className="bg-teal-500 text-white rounded-xl p-3">
                  <div className="text-xl mb-1">📝</div>
                  <p className="font-semibold text-xs">Урок</p>
                </div>
                <div></div>
                <div></div>

                {/* Row 6 - Overlays */}
                <div></div>
                <div className="bg-red-100 border border-red-200 rounded-xl p-2">
                  <div className="text-lg">❌</div>
                  <p className="font-semibold text-[10px] text-red-800">Error</p>
                </div>
                <div className="flex items-center justify-center">
                  <div className="h-6 w-0.5 bg-teal-400"></div>
                </div>
                <div className="bg-emerald-100 border border-emerald-200 rounded-xl p-2">
                  <div className="text-lg">✅</div>
                  <p className="font-semibold text-[10px] text-emerald-800">Success</p>
                </div>
                <div></div>
              </div>

              {/* Легенда */}
              <div className="flex gap-6 justify-center mt-6 pt-6 border-t border-slate-200">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-amber-100 border-2 border-amber-300 rounded"></div>
                  <span className="text-xs text-slate-600">Start Frame</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-teal-100 border-2 border-teal-300 rounded"></div>
                  <span className="text-xs text-slate-600">Main Flow</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-slate-100 border border-slate-200 rounded"></div>
                  <span className="text-xs text-slate-600">Secondary</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-0.5 bg-teal-400"></div>
                  <span className="text-xs text-slate-600">Navigate</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* БЛОК 4: ВСЕ ЭКРАНЫ ПРИЛОЖЕНИЯ */}
        <section className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="bg-teal-600 text-white px-6 py-3 flex items-center justify-between">
            <span className="font-medium">Блок 4: Все экраны приложения LearnUp</span>
            <span className="text-xs bg-teal-700 px-2 py-1 rounded">Screens</span>
          </div>
          <div className="p-6 space-y-8">
            {/* Ряд 1: Home и Каталог */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              
              {/* 1. Home Screen */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-teal-600 uppercase">1. Home</span>
                  <span className="text-xs bg-amber-100 text-amber-700 px-2 py-0.5 rounded">Start Frame</span>
                </div>
                <div className="bg-slate-100 rounded-2xl p-2">
                  <div className="bg-white rounded-xl overflow-hidden shadow-sm" style={{aspectRatio: '9/16'}}>
                    {/* Status bar */}
                    <div className="bg-slate-900 text-white px-3 py-1 flex justify-between items-center text-[10px]">
                      <span>9:41</span>
                      <div className="flex gap-1">
                        <div className="w-3 h-2 bg-white rounded-sm"></div>
                      </div>
                    </div>
                    {/* Header */}
                    <div className="p-3 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center text-white text-xs font-bold">А</div>
                        <div>
                          <p className="text-[8px] text-slate-500">Привет,</p>
                          <p className="text-[10px] font-semibold">Алексей!</p>
                        </div>
                      </div>
                      <div className="w-6 h-6 bg-slate-100 rounded-full"></div>
                    </div>
                    {/* Streak card */}
                    <div className="mx-3 bg-gradient-to-r from-amber-500 to-orange-500 rounded-lg p-2 text-white">
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-[8px] opacity-80">Серия</p>
                          <p className="text-sm font-bold">7 дней</p>
                        </div>
                        <div className="text-xl">🔥</div>
                      </div>
                    </div>
                    {/* Continue learning */}
                    <div className="p-3">
                      <p className="text-[10px] font-semibold mb-2">Продолжить обучение</p>
                      <div className="bg-slate-50 rounded-lg p-2 flex items-center gap-2">
                        <div className="w-8 h-8 bg-teal-100 rounded-lg flex items-center justify-center">
                          <div className="w-4 h-4 bg-teal-500 rounded"></div>
                        </div>
                        <div className="flex-1">
                          <p className="text-[9px] font-medium">Python</p>
                          <div className="w-full h-1 bg-slate-200 rounded-full mt-1">
                            <div className="w-1/2 h-full bg-teal-500 rounded-full"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Courses */}
                    <div className="px-3">
                      <p className="text-[10px] font-semibold mb-2">Рекомендуемые</p>
                      <div className="flex gap-2">
                        <div className="w-16 h-20 bg-gradient-to-br from-violet-400 to-purple-500 rounded-lg"></div>
                        <div className="w-16 h-20 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-lg"></div>
                      </div>
                    </div>
                    {/* Tab Bar */}
                    <div className="absolute bottom-0 left-0 right-0 bg-white border-t p-2 flex justify-around">
                      <div className="w-6 h-6 bg-teal-500 rounded"></div>
                      <div className="w-6 h-6 bg-slate-200 rounded"></div>
                      <div className="w-6 h-6 bg-slate-200 rounded"></div>
                      <div className="w-6 h-6 bg-slate-200 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 2. Catalog Screen */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-blue-600 uppercase">2. Каталог</span>
                  <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded">Tab: Курсы</span>
                </div>
                <div className="bg-slate-100 rounded-2xl p-2">
                  <div className="bg-white rounded-xl overflow-hidden shadow-sm" style={{aspectRatio: '9/16'}}>
                    <div className="bg-slate-900 text-white px-3 py-1 flex justify-between items-center text-[10px]">
                      <span>9:41</span>
                      <div className="w-3 h-2 bg-white rounded-sm"></div>
                    </div>
                    <div className="p-3">
                      <p className="text-sm font-bold mb-2">Каталог курсов</p>
                      {/* Search */}
                      <div className="bg-slate-100 rounded-lg p-2 flex items-center gap-2 mb-3">
                        <div className="w-4 h-4 bg-slate-300 rounded"></div>
                        <span className="text-[9px] text-slate-400">Поиск...</span>
                      </div>
                      {/* Categories */}
                      <div className="flex gap-2 mb-3 overflow-hidden">
                        <div className="px-2 py-1 bg-teal-500 text-white text-[8px] rounded-full whitespace-nowrap">Все</div>
                        <div className="px-2 py-1 bg-slate-100 text-[8px] rounded-full whitespace-nowrap">Программирование</div>
                        <div className="px-2 py-1 bg-slate-100 text-[8px] rounded-full whitespace-nowrap">Дизайн</div>
                      </div>
                      {/* Course cards */}
                      <div className="space-y-2">
                        <div className="bg-white border rounded-lg p-2 flex gap-2">
                          <div className="w-12 h-12 bg-gradient-to-br from-teal-400 to-emerald-500 rounded-lg flex-shrink-0"></div>
                          <div>
                            <p className="text-[9px] font-semibold">Python</p>
                            <p className="text-[8px] text-slate-500">12 уроков</p>
                            <div className="flex items-center gap-1 mt-1">
                              <span className="text-[8px] text-amber-500">★ 4.8</span>
                            </div>
                          </div>
                        </div>
                        <div className="bg-white border rounded-lg p-2 flex gap-2">
                          <div className="w-12 h-12 bg-gradient-to-br from-violet-400 to-purple-500 rounded-lg flex-shrink-0"></div>
                          <div>
                            <p className="text-[9px] font-semibold">UI/UX Design</p>
                            <p className="text-[8px] text-slate-500">8 уроков</p>
                            <div className="flex items-center gap-1 mt-1">
                              <span className="text-[8px] text-amber-500">★ 4.9</span>
                            </div>
                          </div>
                        </div>
                        <div className="bg-white border rounded-lg p-2 flex gap-2">
                          <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-lg flex-shrink-0"></div>
                          <div>
                            <p className="text-[9px] font-semibold">JavaScript</p>
                            <p className="text-[8px] text-slate-500">15 уроков</p>
                            <div className="flex items-center gap-1 mt-1">
                              <span className="text-[8px] text-amber-500">★ 4.7</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 3. Course Details */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-teal-600 uppercase">3. Детали курса</span>
                  <span className="text-xs bg-teal-100 text-teal-700 px-2 py-0.5 rounded">Navigate to</span>
                </div>
                <div className="bg-slate-100 rounded-2xl p-2">
                  <div className="bg-white rounded-xl overflow-hidden shadow-sm" style={{aspectRatio: '9/16'}}>
                    <div className="bg-slate-900 text-white px-3 py-1 flex justify-between items-center text-[10px]">
                      <span>9:41</span>
                      <div className="w-3 h-2 bg-white rounded-sm"></div>
                    </div>
                    {/* Course header */}
                    <div className="h-24 bg-gradient-to-br from-teal-400 to-emerald-500 flex items-center justify-center relative">
                      <div className="absolute top-2 left-2 w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs">←</span>
                      </div>
                      <div className="w-12 h-12 bg-white/20 rounded-xl"></div>
                    </div>
                    <div className="p-3">
                      <p className="text-sm font-bold">Python для начинающих</p>
                      <div className="flex items-center gap-2 mt-1 text-[9px] text-slate-500">
                        <span>12 уроков</span>
                        <span>•</span>
                        <span>4 часа</span>
                        <span>•</span>
                        <span className="text-amber-500">★ 4.8</span>
                      </div>
                      <p className="text-[9px] text-slate-600 mt-2">Изучите основы программирования на Python с нуля</p>
                      {/* Lessons list */}
                      <p className="text-[10px] font-semibold mt-3 mb-2">Уроки</p>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 p-2 bg-emerald-50 rounded-lg border border-emerald-200">
                          <div className="w-5 h-5 bg-emerald-500 rounded-full flex items-center justify-center">
                            <span className="text-white text-[8px]">✓</span>
                          </div>
                          <span className="text-[9px]">Введение</span>
                        </div>
                        <div className="flex items-center gap-2 p-2 bg-teal-50 rounded-lg border-2 border-teal-500">
                          <div className="w-5 h-5 bg-teal-500 rounded-full flex items-center justify-center">
                            <span className="text-white text-[8px]">▶</span>
                          </div>
                          <span className="text-[9px] font-medium">Переменные</span>
                        </div>
                        <div className="flex items-center gap-2 p-2 bg-slate-50 rounded-lg">
                          <div className="w-5 h-5 bg-slate-200 rounded-full"></div>
                          <span className="text-[9px] text-slate-500">Типы данных</span>
                        </div>
                      </div>
                      {/* CTA Button */}
                      <button className="w-full mt-3 bg-teal-500 text-white text-[10px] font-semibold py-2 rounded-lg">
                        Продолжить
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* 4. Lesson Screen */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-violet-600 uppercase">4. Урок</span>
                  <span className="text-xs bg-violet-100 text-violet-700 px-2 py-0.5 rounded">Navigate to</span>
                </div>
                <div className="bg-slate-100 rounded-2xl p-2">
                  <div className="bg-white rounded-xl overflow-hidden shadow-sm" style={{aspectRatio: '9/16'}}>
                    <div className="bg-slate-900 text-white px-3 py-1 flex justify-between items-center text-[10px]">
                      <span>9:41</span>
                      <div className="w-3 h-2 bg-white rounded-sm"></div>
                    </div>
                    {/* Header */}
                    <div className="p-3 flex items-center justify-between border-b">
                      <div className="w-6 h-6 bg-slate-100 rounded-full flex items-center justify-center">
                        <span className="text-xs">←</span>
                      </div>
                      <span className="text-[10px] font-semibold">Урок 2: Переменные</span>
                      <div className="w-6 h-6"></div>
                    </div>
                    {/* Progress */}
                    <div className="px-3 py-2">
                      <div className="flex justify-between text-[8px] text-slate-500 mb-1">
                        <span>Прогресс</span>
                        <span>3/5</span>
                      </div>
                      <div className="h-1 bg-slate-200 rounded-full">
                        <div className="w-3/5 h-full bg-teal-500 rounded-full"></div>
                      </div>
                    </div>
                    {/* Question */}
                    <div className="p-3">
                      <div className="bg-slate-50 rounded-lg p-3 mb-3">
                        <p className="text-[10px] font-medium mb-2">Какой тип данных используется для хранения текста?</p>
                      </div>
                      {/* Options */}
                      <div className="space-y-2">
                        <div className="p-2 border-2 border-slate-200 rounded-lg flex items-center gap-2">
                          <div className="w-4 h-4 border-2 border-slate-300 rounded-full"></div>
                          <span className="text-[9px]">int</span>
                        </div>
                        <div className="p-2 border-2 border-teal-500 bg-teal-50 rounded-lg flex items-center gap-2">
                          <div className="w-4 h-4 border-2 border-teal-500 rounded-full bg-teal-500 flex items-center justify-center">
                            <span className="text-white text-[8px]">✓</span>
                          </div>
                          <span className="text-[9px] text-teal-700">str</span>
                        </div>
                        <div className="p-2 border-2 border-slate-200 rounded-lg flex items-center gap-2">
                          <div className="w-4 h-4 border-2 border-slate-300 rounded-full"></div>
                          <span className="text-[9px]">bool</span>
                        </div>
                        <div className="p-2 border-2 border-slate-200 rounded-lg flex items-center gap-2">
                          <div className="w-4 h-4 border-2 border-slate-300 rounded-full"></div>
                          <span className="text-[9px]">float</span>
                        </div>
                      </div>
                      {/* Check button */}
                      <button className="w-full mt-3 bg-teal-500 text-white text-[10px] font-semibold py-2 rounded-lg">
                        Проверить
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Ряд 2: Состояния и дополнительные экраны */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              
              {/* 5. Success Overlay */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-emerald-600 uppercase">5. Success</span>
                  <span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded">Overlay</span>
                </div>
                <div className="bg-slate-100 rounded-2xl p-2">
                  <div className="bg-slate-900/50 rounded-xl overflow-hidden shadow-sm flex items-center justify-center" style={{aspectRatio: '9/16'}}>
                    <div className="bg-white rounded-2xl p-4 m-4 text-center">
                      <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-3xl">✓</span>
                      </div>
                      <p className="text-sm font-bold text-slate-900 mb-1">Правильно!</p>
                      <p className="text-[10px] text-slate-500 mb-3">+10 XP</p>
                      <button className="w-full bg-emerald-500 text-white text-[10px] font-semibold py-2 rounded-lg">
                        Продолжить
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* 6. Error Overlay */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-red-600 uppercase">6. Error</span>
                  <span className="text-xs bg-red-100 text-red-700 px-2 py-0.5 rounded">Overlay</span>
                </div>
                <div className="bg-slate-100 rounded-2xl p-2">
                  <div className="bg-slate-900/50 rounded-xl overflow-hidden shadow-sm flex items-center justify-center" style={{aspectRatio: '9/16'}}>
                    <div className="bg-white rounded-2xl p-4 m-4 text-center">
                      <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-3xl">✗</span>
                      </div>
                      <p className="text-sm font-bold text-slate-900 mb-1">Неверно</p>
                      <p className="text-[10px] text-slate-500 mb-3">Правильный ответ: str</p>
                      <button className="w-full bg-red-500 text-white text-[10px] font-semibold py-2 rounded-lg mb-2">
                        Повторить
                      </button>
                      <button className="w-full bg-slate-100 text-slate-600 text-[10px] font-semibold py-2 rounded-lg">
                        Пропустить
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* 7. Profile Screen */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-600 uppercase">7. Профиль</span>
                  <span className="text-xs bg-slate-100 text-slate-600 px-2 py-0.5 rounded">Tab: Профиль</span>
                </div>
                <div className="bg-slate-100 rounded-2xl p-2">
                  <div className="bg-white rounded-xl overflow-hidden shadow-sm" style={{aspectRatio: '9/16'}}>
                    <div className="bg-slate-900 text-white px-3 py-1 flex justify-between items-center text-[10px]">
                      <span>9:41</span>
                      <div className="w-3 h-2 bg-white rounded-sm"></div>
                    </div>
                    <div className="p-3 text-center">
                      <div className="w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center mx-auto mb-2 text-white text-xl font-bold">
                        А
                      </div>
                      <p className="text-sm font-bold">Алексей Иванов</p>
                      <p className="text-[9px] text-slate-500">alex@example.com</p>
                      {/* Stats */}
                      <div className="grid grid-cols-3 gap-2 mt-3 mb-3">
                        <div className="bg-slate-50 rounded-lg p-2">
                          <p className="text-sm font-bold text-teal-600">7</p>
                          <p className="text-[8px] text-slate-500">Дней</p>
                        </div>
                        <div className="bg-slate-50 rounded-lg p-2">
                          <p className="text-sm font-bold text-violet-600">3</p>
                          <p className="text-[8px] text-slate-500">Курса</p>
                        </div>
                        <div className="bg-slate-50 rounded-lg p-2">
                          <p className="text-sm font-bold text-amber-600">450</p>
                          <p className="text-[8px] text-slate-500">XP</p>
                        </div>
                      </div>
                      {/* Menu items */}
                      <div className="space-y-2 text-left">
                        <div className="flex items-center gap-2 p-2 bg-slate-50 rounded-lg">
                          <div className="w-6 h-6 bg-slate-200 rounded-lg"></div>
                          <span className="text-[9px]">Настройки</span>
                        </div>
                        <div className="flex items-center gap-2 p-2 bg-slate-50 rounded-lg">
                          <div className="w-6 h-6 bg-slate-200 rounded-lg"></div>
                          <span className="text-[9px]">Достижения</span>
                        </div>
                        <div className="flex items-center gap-2 p-2 bg-slate-50 rounded-lg">
                          <div className="w-6 h-6 bg-slate-200 rounded-lg"></div>
                          <span className="text-[9px]">Помощь</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 8. Progress/Stats Screen */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-amber-600 uppercase">8. Прогресс</span>
                  <span className="text-xs bg-amber-100 text-amber-700 px-2 py-0.5 rounded">Tab: Статистика</span>
                </div>
                <div className="bg-slate-100 rounded-2xl p-2">
                  <div className="bg-white rounded-xl overflow-hidden shadow-sm" style={{aspectRatio: '9/16'}}>
                    <div className="bg-slate-900 text-white px-3 py-1 flex justify-between items-center text-[10px]">
                      <span>9:41</span>
                      <div className="w-3 h-2 bg-white rounded-sm"></div>
                    </div>
                    <div className="p-3">
                      <p className="text-sm font-bold mb-3">Мой прогресс</p>
                      {/* Weekly chart placeholder */}
                      <div className="bg-slate-50 rounded-lg p-3 mb-3">
                        <p className="text-[9px] text-slate-500 mb-2">Эта неделя</p>
                        <div className="flex items-end justify-between h-12 gap-1">
                          <div className="flex-1 bg-teal-200 rounded-t" style={{height: '40%'}}></div>
                          <div className="flex-1 bg-teal-300 rounded-t" style={{height: '60%'}}></div>
                          <div className="flex-1 bg-teal-400 rounded-t" style={{height: '80%'}}></div>
                          <div className="flex-1 bg-teal-500 rounded-t" style={{height: '100%'}}></div>
                          <div className="flex-1 bg-teal-400 rounded-t" style={{height: '70%'}}></div>
                          <div className="flex-1 bg-teal-300 rounded-t" style={{height: '50%'}}></div>
                          <div className="flex-1 bg-slate-200 rounded-t" style={{height: '20%'}}></div>
                        </div>
                        <div className="flex justify-between mt-1 text-[7px] text-slate-400">
                          <span>Пн</span>
                          <span>Вт</span>
                          <span>Ср</span>
                          <span>Чт</span>
                          <span>Пт</span>
                          <span>Сб</span>
                          <span>Вс</span>
                        </div>
                      </div>
                      {/* Achievements */}
                      <p className="text-[10px] font-semibold mb-2">Достижения</p>
                      <div className="grid grid-cols-3 gap-2">
                        <div className="bg-amber-50 rounded-lg p-2 text-center">
                          <div className="text-lg mb-1">🔥</div>
                          <p className="text-[7px]">7 дней</p>
                        </div>
                        <div className="bg-emerald-50 rounded-lg p-2 text-center">
                          <div className="text-lg mb-1">📚</div>
                          <p className="text-[7px]">5 уроков</p>
                        </div>
                        <div className="bg-violet-50 rounded-lg p-2 text-center">
                          <div className="text-lg mb-1">⭐</div>
                          <p className="text-[7px]">100%</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Легенда */}
            <div className="bg-slate-50 rounded-xl p-4">
              <h4 className="text-sm font-semibold text-slate-700 mb-3">Легенда экранов</h4>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-amber-400 rounded"></div>
                  <span className="text-xs text-slate-600">Start Frame (точка входа)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-teal-500 rounded"></div>
                  <span className="text-xs text-slate-600">Main Flow (основной путь)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-violet-500 rounded"></div>
                  <span className="text-xs text-slate-600">Lesson Flow (уроки)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-emerald-500 rounded"></div>
                  <span className="text-xs text-slate-600">Success Overlay</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded"></div>
                  <span className="text-xs text-slate-600">Error Overlay</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-slate-400 rounded"></div>
                  <span className="text-xs text-slate-600">Secondary Screens</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* БЛОК 5: ПОШАГОВАЯ ИНСТРУКЦИЯ ПО ПРОТОТИПУ */}
        <section className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="bg-rose-600 text-white px-6 py-3 flex items-center justify-between">
            <span className="font-medium">Блок 5: Пошаговая инструкция по созданию прототипа в Figma</span>
            <span className="text-xs bg-rose-700 px-2 py-1 rounded">Tutorial</span>
          </div>
          <div className="p-6 space-y-6">
            
            {/* Шаг 1 */}
            <div className="border-l-4 border-teal-500 pl-4">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 bg-teal-500 text-white rounded-full flex items-center justify-center font-bold">1</div>
                <h3 className="font-semibold text-slate-900">Подготовка фреймов</h3>
              </div>
              <div className="ml-10 space-y-2 text-sm text-slate-600">
                <p>1. Создайте <code className="bg-slate-100 px-1 rounded">Frame</code> размером <strong>375 x 812</strong> (iPhone 13/14)</p>
                <p>2. Продублируйте фрейм для каждого экрана: Home, Каталог, Детали курса, Урок, Профиль, Прогресс</p>
                <p>3. Добавьте отдельные фреймы для Overlay: Success и Error</p>
                <p>4. Расположите все фреймы в ряд с отступом 100px между ними</p>
                <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 mt-2">
                  <p className="text-amber-800 text-xs"><strong>Совет:</strong> Назовите фреймы понятно: <code>Home</code>, <code>Catalog</code>, <code>Course-Details</code>, <code>Lesson</code>, <code>Success-Overlay</code></p>
                </div>
              </div>
            </div>

            {/* Шаг 2 */}
            <div className="border-l-4 border-blue-500 pl-4">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">2</div>
                <h3 className="font-semibold text-slate-900">Переход в режим Prototype</h3>
              </div>
              <div className="ml-10 space-y-2 text-sm text-slate-600">
                <p>1. В правой панели Figma переключитесь с <strong>Design</strong> на <strong>Prototype</strong></p>
                <p>2. Выберите первый экран (Home) и установите его как <strong>Starting Frame</strong>:</p>
                <p className="ml-4">→ Кликните по фрейму → в панели Prototype нажмите <code className="bg-slate-100 px-1 rounded">Set as starting frame</code></p>
                <p>3. Рядом с названием фрейма появится иконка 🏠</p>
              </div>
            </div>

            {/* Шаг 3 */}
            <div className="border-l-4 border-violet-500 pl-4">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 bg-violet-500 text-white rounded-full flex items-center justify-center font-bold">3</div>
                <h3 className="font-semibold text-slate-900">Создание связей (Navigate to)</h3>
              </div>
              <div className="ml-10 space-y-2 text-sm text-slate-600">
                <p><strong>Для перехода между экранами:</strong></p>
                <ol className="list-decimal ml-4 space-y-1">
                  <li>Выберите элемент (кнопка, карточка курса, элемент Tab Bar)</li>
                  <li>В режиме Prototype появится синий кружок справа от элемента</li>
                  <li>Перетащите синий кружок к целевому фрейму</li>
                  <li>В появившейся панели настройте:
                    <ul className="list-disc ml-4 mt-1">
                      <li><strong>Interaction:</strong> On tap</li>
                      <li><strong>Action:</strong> Navigate to</li>
                      <li><strong>Animation:</strong> Push (slide in) или Smart Animate</li>
                      <li><strong>Duration:</strong> 300ms</li>
                      <li><strong>Easing:</strong> Ease out</li>
                    </ul>
                  </li>
                </ol>
                <div className="bg-slate-100 rounded-lg p-3 mt-3">
                  <p className="text-xs font-semibold text-slate-700 mb-2">Примеры связей для LearnUp:</p>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="flex items-center gap-2">
                      <span className="text-teal-600">•</span>
                      <span>Карточка курса → Детали курса</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-teal-600">•</span>
                      <span>Кнопка «Продолжить» → Урок</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-teal-600">•</span>
                      <span>Tab Bar: Курсы → Каталог</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-teal-600">•</span>
                      <span>Tab Bar: Профиль → Профиль</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Шаг 4 */}
            <div className="border-l-4 border-emerald-500 pl-4">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 bg-emerald-500 text-white rounded-full flex items-center justify-center font-bold">4</div>
                <h3 className="font-semibold text-slate-900">Настройка Overlay (модальные окна)</h3>
              </div>
              <div className="ml-10 space-y-2 text-sm text-slate-600">
                <p><strong>Для Success/Error состояний:</strong></p>
                <ol className="list-decimal ml-4 space-y-1">
                  <li>Выберите кнопку «Проверить» на экране урока</li>
                  <li>Создайте связь к фрейму Success-Overlay</li>
                  <li>В настройках выберите:
                    <ul className="list-disc ml-4 mt-1">
                      <li><strong>Action:</strong> Open Overlay</li>
                      <li><strong>Position:</strong> Centered</li>
                      <li><strong>Background:</strong> ✓ Add background behind overlay</li>
                      <li><strong>Background color:</strong> #000000, Opacity: 50%</li>
                      <li><strong>Close when clicking outside:</strong> ✓</li>
                      <li><strong>Animation:</strong> Move in (from bottom)</li>
                    </ul>
                  </li>
                </ol>
                <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-3 mt-2">
                  <p className="text-emerald-800 text-xs"><strong>Важно:</strong> Overlay-фреймы должны быть меньше основного экрана (например, 320 x 280px)</p>
                </div>
              </div>
            </div>

            {/* Шаг 5 */}
            <div className="border-l-4 border-amber-500 pl-4">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 bg-amber-500 text-white rounded-full flex items-center justify-center font-bold">5</div>
                <h3 className="font-semibold text-slate-900">Кнопка «Назад» (Back action)</h3>
              </div>
              <div className="ml-10 space-y-2 text-sm text-slate-600">
                <p>1. Выберите иконку «←» или кнопку «Назад»</p>
                <p>2. Создайте связь и выберите:</p>
                <ul className="list-disc ml-4">
                  <li><strong>Action:</strong> Back</li>
                  <li><strong>Animation:</strong> Slide out (to right)</li>
                </ul>
                <p className="mt-2">Это автоматически вернёт на предыдущий экран без указания конкретного фрейма.</p>
              </div>
            </div>

            {/* Шаг 6 */}
            <div className="border-l-4 border-rose-500 pl-4">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 bg-rose-500 text-white rounded-full flex items-center justify-center font-bold">6</div>
                <h3 className="font-semibold text-slate-900">Интерактивные компоненты (Variants)</h3>
              </div>
              <div className="ml-10 space-y-2 text-sm text-slate-600">
                <p><strong>Для переключения состояний (выбор ответа):</strong></p>
                <ol className="list-decimal ml-4 space-y-1">
                  <li>Создайте Component Set с вариантами: <code>state=default</code>, <code>state=selected</code></li>
                  <li>На экране урока выберите вариант ответа</li>
                  <li>Добавьте взаимодействие:
                    <ul className="list-disc ml-4 mt-1">
                      <li><strong>Trigger:</strong> On tap</li>
                      <li><strong>Action:</strong> Change to</li>
                      <li><strong>State:</strong> selected</li>
                      <li><strong>Animation:</strong> Smart Animate, 200ms</li>
                    </ul>
                  </li>
                </ol>
              </div>
            </div>

            {/* Шаг 7 */}
            <div className="border-l-4 border-slate-500 pl-4">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 bg-slate-500 text-white rounded-full flex items-center justify-center font-bold">7</div>
                <h3 className="font-semibold text-slate-900">Тестирование прототипа</h3>
              </div>
              <div className="ml-10 space-y-2 text-sm text-slate-600">
                <p>1. Нажмите кнопку <strong>▶ Present</strong> в правом верхнем углу Figma</p>
                <p>2. Или используйте горячую клавишу: <code className="bg-slate-100 px-1 rounded">⌘ + ⌥ + Enter</code> (Mac) / <code className="bg-slate-100 px-1 rounded">Ctrl + Alt + Enter</code> (Windows)</p>
                <p>3. Пройдите по всем сценариям:</p>
                <ul className="list-disc ml-4">
                  <li>Home → Детали курса → Урок → Success → Home</li>
                  <li>Home → Каталог → Детали курса → Урок</li>
                  <li>Проверьте работу Tab Bar</li>
                  <li>Проверьте кнопки «Назад»</li>
                </ul>
              </div>
            </div>

            {/* Чек-лист */}
            <div className="bg-slate-50 rounded-xl p-4 mt-6">
              <h4 className="font-semibold text-slate-900 mb-3">Чек-лист готового прототипа:</h4>
              <div className="grid md:grid-cols-2 gap-3">
                {[
                  'Home установлен как Starting Frame',
                  'Tab Bar переключает между 4 вкладками',
                  'Карточки курсов ведут на Детали курса',
                  'Кнопка «Продолжить» открывает Урок',
                  'Кнопка «Проверить» показывает Overlay',
                  'Success Overlay закрывается по кнопке',
                  'Все кнопки «Назад» работают',
                  'Нет тупиковых экранов',
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="w-5 h-5 border-2 border-slate-300 rounded flex-shrink-0"></div>
                    <span className="text-sm text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* БЛОК 6: Интерактивные состояния компонентов */}
        <section className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="bg-slate-800 text-white px-6 py-3 flex items-center justify-between">
            <span className="font-medium">Блок 6: Интерактивные состояния компонентов</span>
            <span className="text-xs bg-slate-700 px-2 py-1 rounded">Variants</span>
          </div>
          <div className="p-6">
            <div className="grid md:grid-cols-3 gap-6">
              {/* Кнопки */}
              <div>
                <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-4">Кнопка Primary</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-4">
                    <button className="bg-teal-500 text-white font-semibold py-3 px-6 rounded-xl w-32">Default</button>
                    <span className="text-xs text-slate-500">state=default</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <button className="bg-teal-600 text-white font-semibold py-3 px-6 rounded-xl w-32 ring-2 ring-teal-300">Hover</button>
                    <span className="text-xs text-slate-500">state=hover</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <button className="bg-teal-700 text-white font-semibold py-3 px-6 rounded-xl w-32 scale-95">Pressed</button>
                    <span className="text-xs text-slate-500">state=pressed</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <button className="bg-slate-300 text-slate-500 font-semibold py-3 px-6 rounded-xl w-32">Disabled</button>
                    <span className="text-xs text-slate-500">state=disabled</span>
                  </div>
                </div>
              </div>

              {/* Варианты ответа */}
              <div>
                <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-4">Вариант ответа</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 rounded-xl border-2 border-slate-200">
                    <div className="w-5 h-5 rounded-full border-2 border-slate-300"></div>
                    <span className="text-sm">Default</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-xl border-2 border-teal-500 bg-teal-50">
                    <div className="w-5 h-5 rounded-full border-2 border-teal-500 bg-teal-500 flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7"/></svg>
                    </div>
                    <span className="text-sm text-teal-700">Selected</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-xl border-2 border-emerald-500 bg-emerald-50">
                    <div className="w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7"/></svg>
                    </div>
                    <span className="text-sm text-emerald-700">Correct</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-xl border-2 border-red-500 bg-red-50">
                    <div className="w-5 h-5 rounded-full bg-red-500 flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/></svg>
                    </div>
                    <span className="text-sm text-red-700">Wrong</span>
                  </div>
                </div>
              </div>

              {/* Tab Bar */}
              <div>
                <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-4">Tab Bar Item</h3>
                <div className="space-y-3">
                  <div className="flex flex-col items-center gap-1 p-3 bg-slate-50 rounded-xl">
                    <svg className="w-6 h-6 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>
                    <span className="text-xs text-slate-400">Inactive</span>
                  </div>
                  <div className="flex flex-col items-center gap-1 p-3 bg-teal-50 rounded-xl">
                    <svg className="w-6 h-6 text-teal-500" fill="currentColor" viewBox="0 0 24 24"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>
                    <span className="text-xs text-teal-600 font-medium">Active</span>
                  </div>
                </div>
                <p className="text-xs text-slate-500 mt-3">Настроить через Interactive Components или Variants</p>
              </div>
            </div>
          </div>
        </section>

        {/* БЛОК 7: Чек-лист для тестирования прототипа */}
        <section className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="bg-slate-800 text-white px-6 py-3 flex items-center justify-between">
            <span className="font-medium">Блок 7: Чек-лист для тестирования прототипа</span>
            <span className="text-xs bg-slate-700 px-2 py-1 rounded">QA</span>
          </div>
          <div className="p-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-4">Навигация</h3>
                <div className="space-y-2">
                  {[
                    'Tab Bar переключает между Home, Поиск, Курсы, Профиль',
                    'Кнопка «Назад» работает на всех вложенных экранах',
                    'Карточки курсов ведут на детальный экран',
                    'Кнопка «Продолжить» открывает текущий урок',
                    'Нет «тупиковых» экранов без возможности выйти',
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3 p-3 bg-slate-50 rounded-lg">
                      <div className="w-5 h-5 rounded border-2 border-slate-300 flex-shrink-0 mt-0.5"></div>
                      <span className="text-sm text-slate-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-4">Интерактивность</h3>
                <div className="space-y-2">
                  {[
                    'Выбор ответа меняет состояние компонента',
                    'Кнопка «Проверить» показывает результат (Overlay)',
                    'Success state закрывается и возвращает на Home',
                    'Error state предлагает «Повторить»',
                    'Фильтры в каталоге переключаются (визуально)',
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3 p-3 bg-slate-50 rounded-lg">
                      <div className="w-5 h-5 rounded border-2 border-slate-300 flex-shrink-0 mt-0.5"></div>
                      <span className="text-sm text-slate-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  )
}
