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
              <a href="/pdf5" className="text-sm text-rose-600 hover:text-rose-800">PDF-слайды &rarr;</a>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-8 space-y-8">
        
        {/* Инструкция */}
        <div className="bg-rose-50 border border-rose-200 rounded-lg p-4">
          <p className="text-rose-800 text-sm">
            <strong>Как использовать:</strong> Это руководство по настройке интерактивности в Figma. 
            Используй эти схемы для создания Prototype-связей между экранами.
          </p>
        </div>

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

        {/* БЛОК 4: Состояния компонентов */}
        <section className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="bg-slate-800 text-white px-6 py-3 flex items-center justify-between">
            <span className="font-medium">Блок 4: Интерактивные состояния компонентов</span>
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

        {/* БЛОК 5: Чек-лист */}
        <section className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="bg-slate-800 text-white px-6 py-3 flex items-center justify-between">
            <span className="font-medium">Блок 5: Чек-лист для тестирования прототипа</span>
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
