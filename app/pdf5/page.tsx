export default function Pdf5Page() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-slate-900 text-white sticky top-0 z-10 print:hidden">
        <div className="max-w-5xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl font-semibold">ПЗ №5 — PDF Презентация</h1>
              <p className="text-sm text-slate-400">10 слайдов для сдачи</p>
            </div>
            <div className="flex gap-3">
              <a href="https://www.figma.com/design/ifMj7wi9kSg8EiXMrfjmYS/Untitled?node-id=0-1&t=a26HOJN8i9Mb3mqx-1" target="_blank" rel="noopener noreferrer" className="text-sm text-green-400 hover:text-green-300">Figma-проект</a>
              <a href="/figma5" className="text-sm text-rose-400 hover:text-rose-300">Figma-контент</a>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-8">
        
        <div className="space-y-8 print:space-y-0">
          
          {/* Слайд 1 - Титульный */}
          <div className="bg-gradient-to-br from-rose-600 to-pink-700 rounded-2xl shadow-xl overflow-hidden aspect-video flex flex-col print:rounded-none print:shadow-none print:break-after-page">
            <div className="flex-1 flex flex-col items-center justify-center text-white p-12">
              <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h1 className="text-4xl font-bold mb-2">LearnUp</h1>
              <p className="text-xl text-white/80 mb-8">Интерактивный прототип и презентация</p>
              <div className="text-sm text-white/60">
                <p>Практическое задание №5</p>
                <p>Финальная интерактивность и защита проекта</p>
              </div>
              <div className="mt-8 text-sm text-white/80">
                <p className="font-medium">Подготовил: Титов Николай</p>
                <p>ТКБО-02-23</p>
              </div>
            </div>
            <div className="bg-black/20 px-6 py-3 text-center text-white/60 text-sm print:hidden">
              Слайд 1 из 10 — Титульный (замени на шаблон СДО)
            </div>
          </div>

          {/* Слайд 2 - Цели */}
          <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden aspect-video flex flex-col print:rounded-none print:shadow-none print:border-0 print:break-after-page">
            <div className="bg-slate-800 text-white px-8 py-4">
              <h2 className="text-2xl font-bold">Цели и задачи прототипирования</h2>
            </div>
            <div className="flex-1 p-8">
              <div className="grid grid-cols-2 gap-8 h-full">
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-4">Цель работы</h3>
                  <div className="bg-rose-50 rounded-xl p-5 mb-6">
                    <p className="text-slate-700">
                      Создать интерактивный прототип на основе Hi-Fi макетов, демонстрирующий 
                      логику взаимодействия и пользовательские сценарии приложения LearnUp.
                    </p>
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-4">Исходные материалы</h3>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-rose-500"></span>
                      Hi-Fi макеты из ПЗ №4
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-rose-500"></span>
                      User Flow и сценарии из ПЗ №1-2
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-rose-500"></span>
                      UI-кит с состояниями из ПЗ №3
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-4">Задачи</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 bg-slate-50 rounded-lg p-3">
                      <div className="w-8 h-8 bg-rose-500 rounded-lg flex items-center justify-center text-white font-bold text-sm">1</div>
                      <span className="text-slate-700">Определить основные сценарии</span>
                    </div>
                    <div className="flex items-center gap-3 bg-slate-50 rounded-lg p-3">
                      <div className="w-8 h-8 bg-rose-500 rounded-lg flex items-center justify-center text-white font-bold text-sm">2</div>
                      <span className="text-slate-700">Настроить переходы между экранами</span>
                    </div>
                    <div className="flex items-center gap-3 bg-slate-50 rounded-lg p-3">
                      <div className="w-8 h-8 bg-rose-500 rounded-lg flex items-center justify-center text-white font-bold text-sm">3</div>
                      <span className="text-slate-700">Реализовать интерактивные состояния</span>
                    </div>
                    <div className="flex items-center gap-3 bg-slate-50 rounded-lg p-3">
                      <div className="w-8 h-8 bg-rose-500 rounded-lg flex items-center justify-center text-white font-bold text-sm">4</div>
                      <span className="text-slate-700">Протестировать прототип</span>
                    </div>
                    <div className="flex items-center gap-3 bg-slate-50 rounded-lg p-3">
                      <div className="w-8 h-8 bg-rose-500 rounded-lg flex items-center justify-center text-white font-bold text-sm">5</div>
                      <span className="text-slate-700">Подготовить презентацию</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-slate-50 px-6 py-3 text-center text-slate-500 text-sm print:hidden">
              Слайд 2 из 10 — Цели и задачи
            </div>
          </div>

          {/* Слайд 3 - Основной сценарий */}
          <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden aspect-video flex flex-col print:rounded-none print:shadow-none print:border-0 print:break-after-page">
            <div className="bg-slate-800 text-white px-8 py-4">
              <h2 className="text-2xl font-bold">Основной сценарий: Прохождение урока</h2>
            </div>
            <div className="flex-1 p-8 flex flex-col justify-center">
              <div className="flex items-center justify-between gap-2">
                <div className="bg-amber-100 text-amber-800 px-4 py-4 rounded-xl font-medium text-center flex-1 max-w-[140px]">
                  <div className="text-2xl mb-2">🏠</div>
                  <p className="text-sm font-bold">Home</p>
                  <p className="text-xs text-amber-600">Start Frame</p>
                </div>
                <svg className="w-8 h-8 text-slate-300 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/></svg>
                <div className="bg-teal-100 text-teal-800 px-4 py-4 rounded-xl font-medium text-center flex-1 max-w-[140px]">
                  <div className="text-2xl mb-2">📖</div>
                  <p className="text-sm font-bold">Детали курса</p>
                  <p className="text-xs text-teal-600">Tap: Продолжить</p>
                </div>
                <svg className="w-8 h-8 text-slate-300 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/></svg>
                <div className="bg-teal-100 text-teal-800 px-4 py-4 rounded-xl font-medium text-center flex-1 max-w-[140px]">
                  <div className="text-2xl mb-2">📝</div>
                  <p className="text-sm font-bold">Урок</p>
                  <p className="text-xs text-teal-600">Tap: Начать</p>
                </div>
                <svg className="w-8 h-8 text-slate-300 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/></svg>
                <div className="bg-emerald-100 text-emerald-800 px-4 py-4 rounded-xl font-medium text-center flex-1 max-w-[140px]">
                  <div className="text-2xl mb-2">✅</div>
                  <p className="text-sm font-bold">Success</p>
                  <p className="text-xs text-emerald-600">Overlay</p>
                </div>
                <svg className="w-8 h-8 text-slate-300 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/></svg>
                <div className="bg-amber-100 text-amber-800 px-4 py-4 rounded-xl font-medium text-center flex-1 max-w-[140px]">
                  <div className="text-2xl mb-2">🏠</div>
                  <p className="text-sm font-bold">Home</p>
                  <p className="text-xs text-amber-600">Updated</p>
                </div>
              </div>
              <div className="mt-8 bg-slate-50 rounded-xl p-4">
                <p className="text-sm text-slate-600">
                  <strong>Описание:</strong> Пользователь открывает приложение, видит карточку «Продолжить обучение», 
                  переходит к курсу, начинает урок, отвечает на вопросы, получает Success-экран с XP и возвращается на Home.
                </p>
              </div>
            </div>
            <div className="bg-slate-50 px-6 py-3 text-center text-slate-500 text-sm print:hidden">
              Слайд 3 из 10 — Основной сценарий
            </div>
          </div>

          {/* Слайд 4 - Альтернативные сценарии */}
          <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden aspect-video flex flex-col print:rounded-none print:shadow-none print:border-0 print:break-after-page">
            <div className="bg-slate-800 text-white px-8 py-4">
              <h2 className="text-2xl font-bold">Альтернативные сценарии</h2>
            </div>
            <div className="flex-1 p-8">
              <div className="grid grid-cols-2 gap-6 h-full">
                {/* Поиск курса */}
                <div className="bg-blue-50 rounded-xl p-5">
                  <h3 className="font-semibold text-blue-800 mb-3 flex items-center gap-2">
                    <span className="text-xl">🔍</span> Поиск нового курса
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-slate-600 flex-wrap">
                    <span className="bg-white px-2 py-1 rounded">Home</span>
                    <span>→</span>
                    <span className="bg-white px-2 py-1 rounded">Tab: Курсы</span>
                    <span>→</span>
                    <span className="bg-white px-2 py-1 rounded">Каталог</span>
                    <span>→</span>
                    <span className="bg-white px-2 py-1 rounded">Tap: Карточка</span>
                    <span>→</span>
                    <span className="bg-white px-2 py-1 rounded">Детали</span>
                  </div>
                  <p className="text-xs text-slate-500 mt-3">Переход через Tab Bar в каталог, выбор курса из списка</p>
                </div>

                {/* Профиль */}
                <div className="bg-violet-50 rounded-xl p-5">
                  <h3 className="font-semibold text-violet-800 mb-3 flex items-center gap-2">
                    <span className="text-xl">👤</span> Просмотр профиля
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-slate-600 flex-wrap">
                    <span className="bg-white px-2 py-1 rounded">Home</span>
                    <span>→</span>
                    <span className="bg-white px-2 py-1 rounded">Tab: Профиль</span>
                    <span>→</span>
                    <span className="bg-white px-2 py-1 rounded">Профиль</span>
                    <span>→</span>
                    <span className="bg-white px-2 py-1 rounded">Настройки</span>
                  </div>
                  <p className="text-xs text-slate-500 mt-3">Просмотр статистики, достижений, переход в настройки</p>
                </div>

                {/* Ошибка */}
                <div className="bg-red-50 rounded-xl p-5">
                  <h3 className="font-semibold text-red-800 mb-3 flex items-center gap-2">
                    <span className="text-xl">❌</span> Сценарий ошибки
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-slate-600 flex-wrap">
                    <span className="bg-white px-2 py-1 rounded">Любой экран</span>
                    <span>→</span>
                    <span className="bg-white px-2 py-1 rounded">Network Error</span>
                    <span>→</span>
                    <span className="bg-white px-2 py-1 rounded">Error State</span>
                    <span>→</span>
                    <span className="bg-white px-2 py-1 rounded">Tap: Повторить</span>
                  </div>
                  <p className="text-xs text-slate-500 mt-3">Показ Error Overlay с возможностью повторить</p>
                </div>

                {/* Возврат */}
                <div className="bg-slate-100 rounded-xl p-5">
                  <h3 className="font-semibold text-slate-800 mb-3 flex items-center gap-2">
                    <span className="text-xl">↩️</span> Возврат назад
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-slate-600 flex-wrap">
                    <span className="bg-white px-2 py-1 rounded">Детали курса</span>
                    <span>→</span>
                    <span className="bg-white px-2 py-1 rounded">Tap: Back</span>
                    <span>→</span>
                    <span className="bg-white px-2 py-1 rounded">Предыдущий экран</span>
                  </div>
                  <p className="text-xs text-slate-500 mt-3">Кнопка «Назад» и закрытие модальных окон</p>
                </div>
              </div>
            </div>
            <div className="bg-slate-50 px-6 py-3 text-center text-slate-500 text-sm print:hidden">
              Слайд 4 из 10 — Альтернативные сценарии
            </div>
          </div>

          {/* Слайд 5 - Типы переходов */}
          <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden aspect-video flex flex-col print:rounded-none print:shadow-none print:border-0 print:break-after-page">
            <div className="bg-slate-800 text-white px-8 py-4">
              <h2 className="text-2xl font-bold">Типы переходов в Figma</h2>
            </div>
            <div className="flex-1 p-8">
              <div className="grid grid-cols-4 gap-4 h-full">
                <div className="bg-teal-50 rounded-xl p-4 flex flex-col">
                  <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-3">
                    <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6"/></svg>
                  </div>
                  <h3 className="font-semibold text-teal-800 mb-2">Navigate to</h3>
                  <p className="text-xs text-slate-600 mb-3 flex-1">Стандартный переход между экранами</p>
                  <div className="text-xs space-y-1 bg-white rounded-lg p-2">
                    <p><span className="text-slate-500">Animation:</span> Push</p>
                    <p><span className="text-slate-500">Duration:</span> 300ms</p>
                  </div>
                </div>

                <div className="bg-violet-50 rounded-xl p-4 flex flex-col">
                  <div className="w-12 h-12 bg-violet-100 rounded-lg flex items-center justify-center mb-3">
                    <svg className="w-6 h-6 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"/></svg>
                  </div>
                  <h3 className="font-semibold text-violet-800 mb-2">Open Overlay</h3>
                  <p className="text-xs text-slate-600 mb-3 flex-1">Модальные окна поверх экрана</p>
                  <div className="text-xs space-y-1 bg-white rounded-lg p-2">
                    <p><span className="text-slate-500">Position:</span> Center</p>
                    <p><span className="text-slate-500">Background:</span> Dim 50%</p>
                  </div>
                </div>

                <div className="bg-amber-50 rounded-xl p-4 flex flex-col">
                  <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-3">
                    <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"/></svg>
                  </div>
                  <h3 className="font-semibold text-amber-800 mb-2">Swap</h3>
                  <p className="text-xs text-slate-600 mb-3 flex-1">Переключение состояний компонента</p>
                  <div className="text-xs space-y-1 bg-white rounded-lg p-2">
                    <p><span className="text-slate-500">Use:</span> Variants</p>
                    <p><span className="text-slate-500">Animate:</span> Smart</p>
                  </div>
                </div>

                <div className="bg-slate-100 rounded-xl p-4 flex flex-col">
                  <div className="w-12 h-12 bg-slate-200 rounded-lg flex items-center justify-center mb-3">
                    <svg className="w-6 h-6 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 17l-5-5m0 0l5-5m-5 5h12"/></svg>
                  </div>
                  <h3 className="font-semibold text-slate-800 mb-2">Back</h3>
                  <p className="text-xs text-slate-600 mb-3 flex-1">Возврат на предыдущий экран</p>
                  <div className="text-xs space-y-1 bg-white rounded-lg p-2">
                    <p><span className="text-slate-500">Animation:</span> Slide</p>
                    <p><span className="text-slate-500">Trigger:</span> On Tap</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-slate-50 px-6 py-3 text-center text-slate-500 text-sm print:hidden">
              Слайд 5 из 10 — Типы переходов
            </div>
          </div>

          {/* Слайд 6 - Интерактивные состояния */}
          <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden aspect-video flex flex-col print:rounded-none print:shadow-none print:border-0 print:break-after-page">
            <div className="bg-slate-800 text-white px-8 py-4">
              <h2 className="text-2xl font-bold">��нтерактивные состояния компонентов</h2>
            </div>
            <div className="flex-1 p-8">
              <div className="grid grid-cols-3 gap-6 h-full">
                {/* Кнопка */}
                <div>
                  <h3 className="text-sm font-semibold text-slate-500 uppercase mb-3">Кнопка Primary</h3>
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <div className="bg-teal-500 text-white text-xs font-semibold py-2 px-4 rounded-lg w-24 text-center">Default</div>
                      <span className="text-xs text-slate-500">state=default</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="bg-teal-600 text-white text-xs font-semibold py-2 px-4 rounded-lg w-24 text-center ring-2 ring-teal-300">Hover</div>
                      <span className="text-xs text-slate-500">state=hover</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="bg-teal-700 text-white text-xs font-semibold py-2 px-4 rounded-lg w-24 text-center scale-95">Pressed</div>
                      <span className="text-xs text-slate-500">state=pressed</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="bg-slate-300 text-slate-500 text-xs font-semibold py-2 px-4 rounded-lg w-24 text-center">Disabled</div>
                      <span className="text-xs text-slate-500">state=disabled</span>
                    </div>
                  </div>
                </div>

                {/* Вариант ответа */}
                <div>
                  <h3 className="text-sm font-semibold text-slate-500 uppercase mb-3">Вариант ответа</h3>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 p-2 rounded-lg border border-slate-200 text-xs">
                      <div className="w-4 h-4 rounded-full border-2 border-slate-300"></div>
                      <span>Default</span>
                    </div>
                    <div className="flex items-center gap-2 p-2 rounded-lg border-2 border-teal-500 bg-teal-50 text-xs">
                      <div className="w-4 h-4 rounded-full bg-teal-500 flex items-center justify-center">
                        <svg className="w-2 h-2 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 13l4 4L19 7"/></svg>
                      </div>
                      <span className="text-teal-700">Selected</span>
                    </div>
                    <div className="flex items-center gap-2 p-2 rounded-lg border-2 border-emerald-500 bg-emerald-50 text-xs">
                      <div className="w-4 h-4 rounded-full bg-emerald-500"></div>
                      <span className="text-emerald-700">Correct</span>
                    </div>
                    <div className="flex items-center gap-2 p-2 rounded-lg border-2 border-red-500 bg-red-50 text-xs">
                      <div className="w-4 h-4 rounded-full bg-red-500"></div>
                      <span className="text-red-700">Wrong</span>
                    </div>
                  </div>
                </div>

                {/* Tab Bar */}
                <div>
                  <h3 className="text-sm font-semibold text-slate-500 uppercase mb-3">Tab Bar</h3>
                  <div className="bg-white border border-slate-200 rounded-xl p-3 flex justify-around">
                    <div className="flex flex-col items-center">
                      <svg className="w-5 h-5 text-teal-500" fill="currentColor" viewBox="0 0 24 24"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>
                      <span className="text-[10px] text-teal-600 font-medium">Active</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
                      <span className="text-[10px] text-slate-400">Inactive</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>
                      <span className="text-[10px] text-slate-400">Inactive</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>
                      <span className="text-[10px] text-slate-400">Inactive</span>
                    </div>
                  </div>
                  <p className="text-xs text-slate-500 mt-3">Interactive Components с переключением состояний при клике</p>
                </div>
              </div>
            </div>
            <div className="bg-slate-50 px-6 py-3 text-center text-slate-500 text-sm print:hidden">
              Слайд 6 из 10 — Интерактивные состояния
            </div>
          </div>

          {/* Слайд 7 - Карта экранов */}
          <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden aspect-video flex flex-col print:rounded-none print:shadow-none print:border-0 print:break-after-page">
            <div className="bg-slate-800 text-white px-8 py-4">
              <h2 className="text-2xl font-bold">Карта связей между экранами</h2>
            </div>
            <div className="flex-1 p-8 flex items-center justify-center">
              <div className="bg-slate-50 rounded-xl p-6 w-full max-w-3xl">
                <div className="grid grid-cols-5 gap-3 text-center text-xs">
                  <div></div>
                  <div></div>
                  <div className="bg-amber-100 border-2 border-amber-300 rounded-lg p-2">
                    <span className="text-lg">🏠</span>
                    <p className="font-bold text-amber-800">Home</p>
                  </div>
                  <div></div>
                  <div></div>

                  <div className="bg-blue-100 rounded-lg p-2">
                    <span className="text-lg">🔍</span>
                    <p className="font-bold text-blue-800">Поиск</p>
                  </div>
                  <div className="bg-violet-100 rounded-lg p-2">
                    <span className="text-lg">📚</span>
                    <p className="font-bold text-violet-800">Каталог</p>
                  </div>
                  <div className="bg-teal-100 border-2 border-teal-300 rounded-lg p-2">
                    <span className="text-lg">📖</span>
                    <p className="font-bold text-teal-800">Детали</p>
                  </div>
                  <div className="bg-slate-200 rounded-lg p-2">
                    <span className="text-lg">👤</span>
                    <p className="font-bold text-slate-700">Профиль</p>
                  </div>
                  <div className="bg-slate-200 rounded-lg p-2">
                    <span className="text-lg">⚙️</span>
                    <p className="font-bold text-slate-700">Настройки</p>
                  </div>

                  <div></div>
                  <div></div>
                  <div className="bg-teal-500 text-white rounded-lg p-2">
                    <span className="text-lg">📝</span>
                    <p className="font-bold">Урок</p>
                  </div>
                  <div></div>
                  <div></div>

                  <div></div>
                  <div className="bg-red-100 rounded-lg p-2">
                    <span className="text-lg">❌</span>
                    <p className="font-bold text-red-800">Error</p>
                  </div>
                  <div></div>
                  <div className="bg-emerald-100 rounded-lg p-2">
                    <span className="text-lg">✅</span>
                    <p className="font-bold text-emerald-800">Success</p>
                  </div>
                  <div></div>
                </div>
              </div>
            </div>
            <div className="bg-slate-50 px-6 py-3 text-center text-slate-500 text-sm print:hidden">
              Слайд 7 из 10 — Карта экранов
            </div>
          </div>

          {/* Слайд 8 - Тестирование */}
          <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden aspect-video flex flex-col print:rounded-none print:shadow-none print:border-0 print:break-after-page">
            <div className="bg-slate-800 text-white px-8 py-4">
              <h2 className="text-2xl font-bold">Тестирование прототипа</h2>
            </div>
            <div className="flex-1 p-8">
              <div className="grid grid-cols-2 gap-6 h-full">
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-4">Чек-лист навигации</h3>
                  <div className="space-y-2">
                    {[
                      'Tab Bar переключает все 4 вкладки',
                      'Кнопка «Назад» работает везде',
                      'Карточки курсов кликабельны',
                      'Нет «тупиков» без выхода',
                      'Модалки закрываются',
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-2 bg-emerald-50 rounded-lg p-2">
                        <svg className="w-4 h-4 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/></svg>
                        <span className="text-sm text-slate-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-4">Чек-лист интерактивности</h3>
                  <div className="space-y-2">
                    {[
                      'Выбор ответа меняет состояние',
                      'Кнопка «Проверить» показывает результат',
                      'Success возвращает на Home',
                      'Error предлагает повторить',
                      'Фильтры переключаются визуально',
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-2 bg-emerald-50 rounded-lg p-2">
                        <svg className="w-4 h-4 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/></svg>
                        <span className="text-sm text-slate-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-slate-50 px-6 py-3 text-center text-slate-500 text-sm print:hidden">
              Слайд 8 из 10 — Тестирование
            </div>
          </div>

          {/* Слайд 9 - Демонстрация */}
          <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden aspect-video flex flex-col print:rounded-none print:shadow-none print:border-0 print:break-after-page">
            <div className="bg-slate-800 text-white px-8 py-4">
              <h2 className="text-2xl font-bold">Ссылка на прототип</h2>
            </div>
            <div className="flex-1 p-8 flex flex-col items-center justify-center">
              <div className="w-20 h-20 bg-rose-100 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-10 h-10 text-rose-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Интерактивный прототип LearnUp</h3>
              <div className="bg-slate-100 rounded-xl px-6 py-4 mb-6">
                <p className="text-slate-600 font-mono text-sm">figma.com/proto/[ваша-ссылка]</p>
              </div>
              <p className="text-slate-500 text-center max-w-md">
                Вставьте ссылку на прототип из Figma (Share → Copy Link → Prototype) 
                или QR-код для быстрого доступа на мобильном устройстве
              </p>
            </div>
            <div className="bg-slate-50 px-6 py-3 text-center text-slate-500 text-sm print:hidden">
              Слайд 9 из 10 — Демонстрация
            </div>
          </div>

          {/* Слайд 10 - Итоги */}
          <div className="bg-gradient-to-br from-rose-600 to-pink-700 rounded-2xl shadow-xl overflow-hidden aspect-video flex flex-col print:rounded-none print:shadow-none print:break-after-page">
            <div className="flex-1 flex flex-col items-center justify-center text-white p-12">
              <h1 className="text-3xl font-bold mb-6 text-center">Итоги проекта LearnUp</h1>
              <div className="grid grid-cols-5 gap-4 mb-8">
                <div className="bg-white/10 rounded-xl p-3 text-center">
                  <p className="text-2xl font-bold">ПЗ1</p>
                  <p className="text-xs text-white/70">Анализ</p>
                </div>
                <div className="bg-white/10 rounded-xl p-3 text-center">
                  <p className="text-2xl font-bold">ПЗ2</p>
                  <p className="text-xs text-white/70">Lo-Fi</p>
                </div>
                <div className="bg-white/10 rounded-xl p-3 text-center">
                  <p className="text-2xl font-bold">ПЗ3</p>
                  <p className="text-xs text-white/70">UI-кит</p>
                </div>
                <div className="bg-white/10 rounded-xl p-3 text-center">
                  <p className="text-2xl font-bold">ПЗ4</p>
                  <p className="text-xs text-white/70">Hi-Fi</p>
                </div>
                <div className="bg-white/20 rounded-xl p-3 text-center ring-2 ring-white/50">
                  <p className="text-2xl font-bold">ПЗ5</p>
                  <p className="text-xs text-white/70">Прототип</p>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <p className="text-4xl font-bold">6</p>
                  <p className="text-sm text-white/70">Экранов</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold">4</p>
                  <p className="text-sm text-white/70">Сценария</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold">12+</p>
                  <p className="text-sm text-white/70">Связей</p>
                </div>
              </div>
              <p className="text-xl font-semibold">Спасибо за внимание!</p>
            </div>
            <div className="bg-black/20 px-6 py-3 text-center text-white/60 text-sm print:hidden">
              Слайд 10 из 10 — Итоги
            </div>
          </div>

        </div>
      </main>
    </div>
  )
}
