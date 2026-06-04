export default function Pdf2Page() {
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
            <div className="flex gap-3">
              <a href="https://www.figma.com/design/ifMj7wi9kSg8EiXMrfjmYS/Untitled?node-id=0-1&t=a26HOJN8i9Mb3mqx-1" target="_blank" rel="noopener noreferrer" className="text-sm text-green-400 hover:text-green-300">Figma-проект</a>
              <a href="/figma2" className="text-sm text-blue-400 hover:text-blue-300">Figma-контент</a>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-8">
        
        <div className="space-y-8 print:space-y-0">
          
          {/* Слайд 1 - Титульный */}
          <div className="bg-gradient-to-br from-violet-600 to-indigo-700 rounded-2xl shadow-xl overflow-hidden aspect-video flex flex-col print:rounded-none print:shadow-none print:break-after-page">
            <div className="flex-1 flex flex-col items-center justify-center text-white p-12">
              <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
              <h1 className="text-4xl font-bold mb-2">LearnUp</h1>
              <p className="text-xl text-white/80 mb-8">Lo-Fi прототипирование и навигация</p>
              <div className="text-sm text-white/60">
                <p>Практическое задание №2</p>
                <p>Проектирование структуры приложения и создание прототипов</p>
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

          {/* Слайд 2 - Уточнение сценария */}
          <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden aspect-video flex flex-col print:rounded-none print:shadow-none print:border-0 print:break-after-page">
            <div className="bg-slate-800 text-white px-8 py-4">
              <h2 className="text-2xl font-bold">Этап 1: Уточнение пользовательского сценария</h2>
            </div>
            <div className="flex-1 p-8 flex flex-col justify-center">
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-4">Главная цель пользователя</h3>
                  <div className="bg-violet-50 rounded-xl p-5 border border-violet-100 mb-4">
                    <p className="text-slate-700">Эффективно учиться новым навыкам через короткие уроки с геймификацией и отслеживанием прогресса</p>
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">Основной сценарий</h3>
                  <div className="bg-emerald-50 rounded-xl p-4 border border-emerald-100">
                    <ol className="space-y-1 text-sm text-slate-700">
                      <li>1. Открыть приложение</li>
                      <li>2. Продолжить текущий курс</li>
                      <li>3. Пройти урок (5-10 мин)</li>
                      <li>4. Выполнить практику</li>
                      <li>5. Получить награду</li>
                    </ol>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-4">Второстепенные сценарии</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 bg-slate-50 rounded-lg p-3">
                      <span className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 font-bold text-sm">А</span>
                      <span className="text-slate-700 text-sm">Поиск и выбор нового курса</span>
                    </div>
                    <div className="flex items-center gap-3 bg-slate-50 rounded-lg p-3">
                      <span className="w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center text-amber-600 font-bold text-sm">Б</span>
                      <span className="text-slate-700 text-sm">Просмотр статистики и достижений</span>
                    </div>
                    <div className="flex items-center gap-3 bg-slate-50 rounded-lg p-3">
                      <span className="w-8 h-8 bg-rose-100 rounded-lg flex items-center justify-center text-rose-600 font-bold text-sm">В</span>
                      <span className="text-slate-700 text-sm">Настройка профиля</span>
                    </div>
                    <div className="flex items-center gap-3 bg-slate-50 rounded-lg p-3">
                      <span className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 font-bold text-sm">Г</span>
                      <span className="text-slate-700 text-sm">Онбординг при первом запуске</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-slate-50 px-6 py-3 text-center text-slate-500 text-sm print:hidden">
              Слайд 2 из 10 — Уточнение сценария
            </div>
          </div>

          {/* Слайд 3 - Список экранов */}
          <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden aspect-video flex flex-col print:rounded-none print:shadow-none print:border-0 print:break-after-page">
            <div className="bg-slate-800 text-white px-8 py-4">
              <h2 className="text-2xl font-bold">Этап 2: Формирование списка экранов</h2>
            </div>
            <div className="flex-1 p-8">
              <div className="grid grid-cols-6 gap-4 h-full">
                <div className="bg-amber-50 rounded-xl p-3 border border-amber-100">
                  <h4 className="font-semibold text-amber-800 text-sm mb-2">Онбординг</h4>
                  <ul className="space-y-1 text-xs text-amber-700">
                    <li>- Splash Screen</li>
                    <li>- Welcome (x3)</li>
                    <li>- Регистрация</li>
                    <li>- Выбор интересов</li>
                    <li>- Цели обучения</li>
                  </ul>
                </div>
                <div className="bg-violet-50 rounded-xl p-3 border border-violet-100">
                  <h4 className="font-semibold text-violet-800 text-sm mb-2">Главная</h4>
                  <ul className="space-y-1 text-xs text-violet-700">
                    <li>- Лента</li>
                    <li>- Продолжить</li>
                    <li>- Рекомендации</li>
                    <li>- Ежедневная цель</li>
                  </ul>
                </div>
                <div className="bg-blue-50 rounded-xl p-3 border border-blue-100">
                  <h4 className="font-semibold text-blue-800 text-sm mb-2">Каталог</h4>
                  <ul className="space-y-1 text-xs text-blue-700">
                    <li>- Поиск</li>
                    <li>- Категории</li>
                    <li>- Карточка курса</li>
                    <li>- Фильтры</li>
                    <li>- Результаты</li>
                  </ul>
                </div>
                <div className="bg-emerald-50 rounded-xl p-3 border border-emerald-100">
                  <h4 className="font-semibold text-emerald-800 text-sm mb-2">Обучение</h4>
                  <ul className="space-y-1 text-xs text-emerald-700">
                    <li>- Страница курса</li>
                    <li>- Список уроков</li>
                    <li>- Урок (теория)</li>
                    <li>- Практика/Тест</li>
                    <li>- Результат</li>
                  </ul>
                </div>
                <div className="bg-rose-50 rounded-xl p-3 border border-rose-100">
                  <h4 className="font-semibold text-rose-800 text-sm mb-2">Прогресс</h4>
                  <ul className="space-y-1 text-xs text-rose-700">
                    <li>- Мои курсы</li>
                    <li>- Статистика</li>
                    <li>- Достижения</li>
                    <li>- Серия дней</li>
                  </ul>
                </div>
                <div className="bg-slate-100 rounded-xl p-3 border border-slate-200">
                  <h4 className="font-semibold text-slate-800 text-sm mb-2">Профиль</h4>
                  <ul className="space-y-1 text-xs text-slate-700">
                    <li>- Мой профиль</li>
                    <li>- Настройки</li>
                    <li>- Уведомления</li>
                    <li>- Подписка</li>
                  </ul>
                </div>
              </div>
              <div className="flex justify-center gap-8 mt-4 pt-4 border-t border-slate-100">
                <div className="text-center">
                  <span className="text-2xl font-bold text-violet-600">22</span>
                  <span className="text-sm text-slate-500 ml-1">экрана</span>
                </div>
                <div className="text-center">
                  <span className="text-2xl font-bold text-slate-600">6</span>
                  <span className="text-sm text-slate-500 ml-1">групп</span>
                </div>
                <div className="text-center">
                  <span className="text-2xl font-bold text-emerald-600">3</span>
                  <span className="text-sm text-slate-500 ml-1">уровня</span>
                </div>
              </div>
            </div>
            <div className="bg-slate-50 px-6 py-3 text-center text-slate-500 text-sm print:hidden">
              Слайд 3 из 10 — Список экранов
            </div>
          </div>

          {/* Слайд 4 - Тип навигации */}
          <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden aspect-video flex flex-col print:rounded-none print:shadow-none print:border-0 print:break-after-page">
            <div className="bg-slate-800 text-white px-8 py-4">
              <h2 className="text-2xl font-bold">Этап 3: Проектирование навигации</h2>
            </div>
            <div className="flex-1 p-8">
              <div className="grid grid-cols-2 gap-8 h-full">
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-4">Выбранный тип: Tab Bar</h3>
                  <div className="bg-violet-50 rounded-xl p-5 border border-violet-100 mb-6">
                    <p className="text-slate-700 mb-3">Нижняя панель навигации с 5 основными разделами</p>
                    <ul className="space-y-2 text-sm text-slate-600">
                      <li className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                        <span>Мгновенный доступ к разделам</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                        <span>Паттерн из Duolingo, Stepic</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                        <span>Видна текущая позиция</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                        <span>Удобно для одной руки</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <div className="bg-slate-900 rounded-3xl p-4 w-64">
                    <div className="bg-slate-800 rounded-2xl aspect-[9/16] flex flex-col justify-end p-3">
                      <div className="bg-slate-700 rounded-xl p-3 flex justify-around items-center">
                        <div className="text-center">
                          <div className="w-8 h-8 bg-violet-500 rounded-lg flex items-center justify-center mx-auto mb-1">
                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                          </div>
                          <span className="text-[10px] text-violet-400">Главная</span>
                        </div>
                        <div className="text-center">
                          <div className="w-8 h-8 bg-slate-600 rounded-lg flex items-center justify-center mx-auto mb-1">
                            <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                          </div>
                          <span className="text-[10px] text-slate-500">Каталог</span>
                        </div>
                        <div className="text-center">
                          <div className="w-8 h-8 bg-slate-600 rounded-lg flex items-center justify-center mx-auto mb-1">
                            <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                          </div>
                          <span className="text-[10px] text-slate-500">Курсы</span>
                        </div>
                        <div className="text-center">
                          <div className="w-8 h-8 bg-slate-600 rounded-lg flex items-center justify-center mx-auto mb-1">
                            <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                          </div>
                          <span className="text-[10px] text-slate-500">Прогресс</span>
                        </div>
                        <div className="text-center">
                          <div className="w-8 h-8 bg-slate-600 rounded-lg flex items-center justify-center mx-auto mb-1">
                            <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                          </div>
                          <span className="text-[10px] text-slate-500">Профиль</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-slate-50 px-6 py-3 text-center text-slate-500 text-sm print:hidden">
              Слайд 4 из 10 — Тип навигации
            </div>
          </div>

          {/* Слайд 5 - User Flow */}
          <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden aspect-video flex flex-col print:rounded-none print:shadow-none print:border-0 print:break-after-page">
            <div className="bg-slate-800 text-white px-8 py-4">
              <h2 className="text-2xl font-bold">Этап 4: User Flow — Основной сценарий</h2>
            </div>
            <div className="flex-1 p-8 flex items-center">
              <div className="w-full">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex-1 bg-violet-100 rounded-xl p-4 text-center">
                    <div className="w-12 h-12 bg-violet-500 rounded-lg flex items-center justify-center mx-auto mb-2">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                    </div>
                    <span className="text-sm font-medium text-violet-700">Главная</span>
                  </div>
                  <svg className="w-8 h-8 text-slate-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  <div className="flex-1 bg-emerald-100 rounded-xl p-4 text-center">
                    <div className="w-12 h-12 bg-emerald-500 rounded-lg flex items-center justify-center mx-auto mb-2">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    </div>
                    <span className="text-sm font-medium text-emerald-700">Продолжить</span>
                  </div>
                  <svg className="w-8 h-8 text-slate-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  <div className="flex-1 bg-blue-100 rounded-xl p-4 text-center">
                    <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mx-auto mb-2">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                    </div>
                    <span className="text-sm font-medium text-blue-700">Урок</span>
                  </div>
                  <svg className="w-8 h-8 text-slate-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  <div className="flex-1 bg-amber-100 rounded-xl p-4 text-center">
                    <div className="w-12 h-12 bg-amber-500 rounded-lg flex items-center justify-center mx-auto mb-2">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" /></svg>
                    </div>
                    <span className="text-sm font-medium text-amber-700">Практика</span>
                  </div>
                  <svg className="w-8 h-8 text-slate-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  <div className="flex-1 bg-rose-100 rounded-xl p-4 text-center">
                    <div className="w-12 h-12 bg-rose-500 rounded-lg flex items-center justify-center mx-auto mb-2">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>
                    </div>
                    <span className="text-sm font-medium text-rose-700">Результат</span>
                  </div>
                </div>
                <div className="mt-8 grid grid-cols-2 gap-6">
                  <div className="bg-slate-50 rounded-xl p-4">
                    <h4 className="font-semibold text-slate-900 mb-2">Сценарий: Поиск курса</h4>
                    <p className="text-sm text-slate-600">Каталог &rarr; Поиск/Категории &rarr; Результаты &rarr; Карточка курса &rarr; Начать</p>
                  </div>
                  <div className="bg-slate-50 rounded-xl p-4">
                    <h4 className="font-semibold text-slate-900 mb-2">Сценарий: Онбординг</h4>
                    <p className="text-sm text-slate-600">Splash &rarr; Welcome &rarr; Регистрация &rarr; Интересы &rarr; Цели &rarr; Главная</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-slate-50 px-6 py-3 text-center text-slate-500 text-sm print:hidden">
              Слайд 5 из 10 — User Flow
            </div>
          </div>

          {/* Слайд 6 - Lo-Fi Главная и Каталог */}
          <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden aspect-video flex flex-col print:rounded-none print:shadow-none print:border-0 print:break-after-page">
            <div className="bg-slate-800 text-white px-8 py-4">
              <h2 className="text-2xl font-bold">Этап 5: Lo-Fi прототипы — Главная и Каталог</h2>
            </div>
            <div className="flex-1 p-8 flex items-center justify-center gap-12">
              {/* Главная */}
              <div className="text-center">
                <div className="bg-slate-100 rounded-2xl p-3 w-40 aspect-[9/16] flex flex-col mb-2">
                  <div className="flex justify-between items-center mb-2">
                    <div className="w-6 h-1 bg-slate-300 rounded"></div>
                    <div className="flex gap-0.5"><div className="w-2 h-2 bg-slate-300 rounded-full"></div><div className="w-2 h-2 bg-slate-300 rounded-full"></div></div>
                  </div>
                  <div className="flex justify-between items-center mb-3">
                    <div className="space-y-0.5"><div className="w-10 h-1 bg-slate-300 rounded"></div><div className="w-14 h-2 bg-slate-400 rounded"></div></div>
                    <div className="w-6 h-6 bg-slate-300 rounded-full"></div>
                  </div>
                  <div className="bg-slate-200 rounded-lg p-2 mb-2"><div className="flex justify-between"><div className="w-12 h-2 bg-slate-300 rounded"></div><div className="w-6 h-6 bg-slate-300 rounded"></div></div></div>
                  <div className="w-16 h-1 bg-slate-300 rounded mb-1"></div>
                  <div className="bg-slate-200 rounded-lg p-2 mb-2"><div className="flex gap-2"><div className="w-8 h-8 bg-slate-300 rounded"></div><div className="flex-1 space-y-1"><div className="w-full h-1 bg-slate-300 rounded"></div><div className="w-3/4 h-1 bg-slate-300 rounded"></div><div className="w-full h-1 bg-slate-300 rounded-full"></div></div></div></div>
                  <div className="w-14 h-1 bg-slate-300 rounded mb-1"></div>
                  <div className="flex gap-1 flex-1"><div className="flex-1 bg-slate-200 rounded-lg p-1"><div className="w-full h-5 bg-slate-300 rounded mb-1"></div><div className="w-full h-1 bg-slate-300 rounded"></div></div><div className="flex-1 bg-slate-200 rounded-lg p-1"><div className="w-full h-5 bg-slate-300 rounded mb-1"></div><div className="w-full h-1 bg-slate-300 rounded"></div></div></div>
                  <div className="flex justify-around mt-auto pt-2 border-t border-slate-200"><div className="w-4 h-4 bg-slate-400 rounded"></div><div className="w-4 h-4 bg-slate-300 rounded"></div><div className="w-4 h-4 bg-slate-300 rounded"></div><div className="w-4 h-4 bg-slate-300 rounded"></div><div className="w-4 h-4 bg-slate-300 rounded"></div></div>
                </div>
                <span className="text-sm font-medium text-slate-700">Главная</span>
              </div>
              {/* Каталог */}
              <div className="text-center">
                <div className="bg-slate-100 rounded-2xl p-3 w-40 aspect-[9/16] flex flex-col mb-2">
                  <div className="flex justify-between items-center mb-2">
                    <div className="w-6 h-1 bg-slate-300 rounded"></div>
                    <div className="flex gap-0.5"><div className="w-2 h-2 bg-slate-300 rounded-full"></div><div className="w-2 h-2 bg-slate-300 rounded-full"></div></div>
                  </div>
                  <div className="bg-slate-200 rounded-lg p-2 mb-2 flex items-center gap-1"><div className="w-3 h-3 bg-slate-300 rounded"></div><div className="w-full h-1 bg-slate-300 rounded"></div></div>
                  <div className="flex gap-1 mb-2"><div className="px-2 py-1 bg-slate-400 rounded-full"><div className="w-5 h-1 bg-slate-200 rounded"></div></div><div className="px-2 py-1 bg-slate-200 rounded-full"><div className="w-6 h-1 bg-slate-300 rounded"></div></div><div className="px-2 py-1 bg-slate-200 rounded-full"><div className="w-5 h-1 bg-slate-300 rounded"></div></div></div>
                  <div className="space-y-2 flex-1"><div className="bg-slate-200 rounded-lg p-2"><div className="w-full h-10 bg-slate-300 rounded mb-1"></div><div className="w-full h-1 bg-slate-300 rounded"></div><div className="w-2/3 h-1 bg-slate-300 rounded mt-0.5"></div></div><div className="bg-slate-200 rounded-lg p-2"><div className="w-full h-10 bg-slate-300 rounded mb-1"></div><div className="w-full h-1 bg-slate-300 rounded"></div><div className="w-2/3 h-1 bg-slate-300 rounded mt-0.5"></div></div></div>
                  <div className="flex justify-around mt-auto pt-2 border-t border-slate-200"><div className="w-4 h-4 bg-slate-300 rounded"></div><div className="w-4 h-4 bg-slate-400 rounded"></div><div className="w-4 h-4 bg-slate-300 rounded"></div><div className="w-4 h-4 bg-slate-300 rounded"></div><div className="w-4 h-4 bg-slate-300 rounded"></div></div>
                </div>
                <span className="text-sm font-medium text-slate-700">Каталог</span>
              </div>
              {/* Описание */}
              <div className="max-w-xs">
                <h4 className="font-semibold text-slate-900 mb-3">Ключевые элементы:</h4>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-start gap-2">
                    <span className="text-violet-500 mt-0.5">*</span>
                    <span>Приветствие + аватар пользователя</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-violet-500 mt-0.5">*</span>
                    <span>Карточка серии дней (streak)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-violet-500 mt-0.5">*</span>
                    <span>Блок «Продолжить обучение��</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-violet-500 mt-0.5">*</span>
                    <span>Поиск с горизонтальными категориями</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-violet-500 mt-0.5">*</span>
                    <span>Карточки курсов с обложкой</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-violet-500 mt-0.5">*</span>
                    <span>Tab Bar внизу на всех экранах</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="bg-slate-50 px-6 py-3 text-center text-slate-500 text-sm print:hidden">
              Слайд 6 из 10 — Lo-Fi Главная и Каталог
            </div>
          </div>

          {/* Слайд 7 - Lo-Fi Урок и Результат */}
          <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden aspect-video flex flex-col print:rounded-none print:shadow-none print:border-0 print:break-after-page">
            <div className="bg-slate-800 text-white px-8 py-4">
              <h2 className="text-2xl font-bold">Этап 5: Lo-Fi прототипы — Урок и Результат</h2>
            </div>
            <div className="flex-1 p-8 flex items-center justify-center gap-12">
              {/* Урок */}
              <div className="text-center">
                <div className="bg-slate-100 rounded-2xl p-3 w-40 aspect-[9/16] flex flex-col mb-2">
                  <div className="flex justify-between items-center mb-2">
                    <div className="w-6 h-1 bg-slate-300 rounded"></div>
                    <div className="flex gap-0.5"><div className="w-2 h-2 bg-slate-300 rounded-full"></div><div className="w-2 h-2 bg-slate-300 rounded-full"></div></div>
                  </div>
                  <div className="flex items-center gap-2 mb-2"><div className="w-6 h-6 bg-slate-300 rounded"></div><div className="flex-1 h-1 bg-slate-300 rounded-full"><div className="w-1/3 h-1 bg-slate-400 rounded-full"></div></div><div className="w-4 h-4 bg-slate-300 rounded"></div></div>
                  <div className="w-full h-16 bg-slate-200 rounded-lg flex items-center justify-center mb-3"><div className="w-8 h-8 bg-slate-300 rounded-full flex items-center justify-center"><div className="w-0 h-0 border-l-4 border-l-slate-400 border-y-2 border-y-transparent ml-0.5"></div></div></div>
                  <div className="space-y-1 mb-2"><div className="w-3/4 h-2 bg-slate-300 rounded"></div><div className="w-full h-1 bg-slate-200 rounded"></div><div className="w-full h-1 bg-slate-200 rounded"></div><div className="w-2/3 h-1 bg-slate-200 rounded"></div></div>
                  <div className="bg-slate-200 rounded-lg p-2 flex-1"><div className="w-10 h-1 bg-slate-300 rounded mb-1"></div><div className="w-full h-1 bg-slate-300 rounded"></div><div className="w-full h-1 bg-slate-300 rounded mt-0.5"></div></div>
                  <div className="w-full h-8 bg-slate-400 rounded-lg mt-2"></div>
                </div>
                <span className="text-sm font-medium text-slate-700">Экран урока</span>
              </div>
              {/* Результат */}
              <div className="text-center">
                <div className="bg-slate-100 rounded-2xl p-3 w-40 aspect-[9/16] flex flex-col mb-2">
                  <div className="flex justify-between items-center mb-2">
                    <div className="w-6 h-1 bg-slate-300 rounded"></div>
                    <div className="flex gap-0.5"><div className="w-2 h-2 bg-slate-300 rounded-full"></div><div className="w-2 h-2 bg-slate-300 rounded-full"></div></div>
                  </div>
                  <div className="flex-1 flex flex-col items-center justify-center">
                    <div className="w-12 h-12 bg-slate-300 rounded-full mb-2 flex items-center justify-center"><div className="w-5 h-5 bg-slate-400 rounded"></div></div>
                    <div className="w-16 h-2 bg-slate-400 rounded mb-1"></div>
                    <div className="w-20 h-1 bg-slate-300 rounded mb-3"></div>
                    <div className="flex gap-2 mb-3"><div className="text-center"><div className="w-6 h-6 bg-slate-200 rounded"></div><div className="w-5 h-1 bg-slate-300 rounded mt-0.5 mx-auto"></div></div><div className="text-center"><div className="w-6 h-6 bg-slate-200 rounded"></div><div className="w-5 h-1 bg-slate-300 rounded mt-0.5 mx-auto"></div></div><div className="text-center"><div className="w-6 h-6 bg-slate-200 rounded"></div><div className="w-5 h-1 bg-slate-300 rounded mt-0.5 mx-auto"></div></div></div>
                    <div className="w-full bg-slate-200 rounded-lg p-2"><div className="flex items-center gap-2"><div className="w-6 h-6 bg-slate-300 rounded"></div><div className="flex-1"><div className="w-12 h-1 bg-slate-300 rounded"></div><div className="w-full h-1 bg-slate-300 rounded mt-0.5"></div></div></div></div>
                  </div>
                  <div className="space-y-1"><div className="w-full h-8 bg-slate-400 rounded-lg"></div><div className="w-full h-6 bg-slate-200 rounded-lg"></div></div>
                </div>
                <span className="text-sm font-medium text-slate-700">Результат урока</span>
              </div>
              {/* Описание */}
              <div className="max-w-xs">
                <h4 className="font-semibold text-slate-900 mb-3">Ключевые элементы:</h4>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-0.5">*</span>
                    <span>Прогресс-бар в шапке урока</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-0.5">*</span>
                    <span>Видео/медиа контент</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-0.5">*</span>
                    <span>Блок теории с подсказками</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-rose-500 mt-0.5">*</span>
                    <span>Иконка успеха + поздравление</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-rose-500 mt-0.5">*</span>
                    <span>Статистика урока (XP, время)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-rose-500 mt-0.5">*</span>
                    <span>Достижение за серию</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="bg-slate-50 px-6 py-3 text-center text-slate-500 text-sm print:hidden">
              Слайд 7 из 10 — Lo-Fi Урок и Результат
            </div>
          </div>

          {/* Слайд 8 - Lo-Fi Профиль и Прогресс */}
          <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden aspect-video flex flex-col print:rounded-none print:shadow-none print:border-0 print:break-after-page">
            <div className="bg-slate-800 text-white px-8 py-4">
              <h2 className="text-2xl font-bold">Этап 5: Lo-Fi прототипы — Профиль и Прогресс</h2>
            </div>
            <div className="flex-1 p-8 flex items-center justify-center gap-12">
              {/* Профиль */}
              <div className="text-center">
                <div className="bg-slate-100 rounded-2xl p-3 w-40 aspect-[9/16] flex flex-col mb-2">
                  <div className="flex justify-between items-center mb-2">
                    <div className="w-6 h-1 bg-slate-300 rounded"></div>
                    <div className="flex gap-0.5"><div className="w-2 h-2 bg-slate-300 rounded-full"></div><div className="w-2 h-2 bg-slate-300 rounded-full"></div></div>
                  </div>
                  <div className="text-center mb-3"><div className="w-12 h-12 bg-slate-300 rounded-full mx-auto mb-1"></div><div className="w-14 h-2 bg-slate-400 rounded mx-auto"></div><div className="w-10 h-1 bg-slate-300 rounded mx-auto mt-0.5"></div></div>
                  <div className="flex justify-around mb-3 py-2 border-y border-slate-200"><div className="text-center"><div className="w-5 h-2 bg-slate-400 rounded mx-auto"></div><div className="w-6 h-1 bg-slate-300 rounded mx-auto mt-0.5"></div></div><div className="text-center"><div className="w-5 h-2 bg-slate-400 rounded mx-auto"></div><div className="w-6 h-1 bg-slate-300 rounded mx-auto mt-0.5"></div></div><div className="text-center"><div className="w-5 h-2 bg-slate-400 rounded mx-auto"></div><div className="w-6 h-1 bg-slate-300 rounded mx-auto mt-0.5"></div></div></div>
                  <div className="space-y-1 flex-1"><div className="flex items-center gap-2 bg-slate-200 rounded p-2"><div className="w-4 h-4 bg-slate-300 rounded"></div><div className="w-12 h-1 bg-slate-300 rounded"></div></div><div className="flex items-center gap-2 bg-slate-200 rounded p-2"><div className="w-4 h-4 bg-slate-300 rounded"></div><div className="w-14 h-1 bg-slate-300 rounded"></div></div><div className="flex items-center gap-2 bg-slate-200 rounded p-2"><div className="w-4 h-4 bg-slate-300 rounded"></div><div className="w-10 h-1 bg-slate-300 rounded"></div></div><div className="flex items-center gap-2 bg-slate-200 rounded p-2"><div className="w-4 h-4 bg-slate-300 rounded"></div><div className="w-8 h-1 bg-slate-300 rounded"></div></div></div>
                  <div className="flex justify-around mt-auto pt-2 border-t border-slate-200"><div className="w-4 h-4 bg-slate-300 rounded"></div><div className="w-4 h-4 bg-slate-300 rounded"></div><div className="w-4 h-4 bg-slate-300 rounded"></div><div className="w-4 h-4 bg-slate-300 rounded"></div><div className="w-4 h-4 bg-slate-400 rounded"></div></div>
                </div>
                <span className="text-sm font-medium text-slate-700">Профиль</span>
              </div>
              {/* Прогресс */}
              <div className="text-center">
                <div className="bg-slate-100 rounded-2xl p-3 w-40 aspect-[9/16] flex flex-col mb-2">
                  <div className="flex justify-between items-center mb-2">
                    <div className="w-6 h-1 bg-slate-300 rounded"></div>
                    <div className="flex gap-0.5"><div className="w-2 h-2 bg-slate-300 rounded-full"></div><div className="w-2 h-2 bg-slate-300 rounded-full"></div></div>
                  </div>
                  <div className="w-12 h-2 bg-slate-400 rounded mb-2"></div>
                  <div className="bg-slate-200 rounded-lg p-2 mb-2"><div className="flex justify-between items-end h-10 mb-1"><div className="w-2 bg-slate-300 rounded-t" style={{height: '40%'}}></div><div className="w-2 bg-slate-300 rounded-t" style={{height: '60%'}}></div><div className="w-2 bg-slate-300 rounded-t" style={{height: '80%'}}></div><div className="w-2 bg-slate-300 rounded-t" style={{height: '50%'}}></div><div className="w-2 bg-slate-300 rounded-t" style={{height: '70%'}}></div><div className="w-2 bg-slate-400 rounded-t" style={{height: '90%'}}></div><div className="w-2 bg-slate-300 rounded-t" style={{height: '30%'}}></div></div></div>
                  <div className="grid grid-cols-2 gap-1 mb-2"><div className="bg-slate-200 rounded p-1 text-center"><div className="w-5 h-2 bg-slate-400 rounded mx-auto"></div><div className="w-8 h-1 bg-slate-300 rounded mx-auto mt-0.5"></div></div><div className="bg-slate-200 rounded p-1 text-center"><div className="w-5 h-2 bg-slate-400 rounded mx-auto"></div><div className="w-8 h-1 bg-slate-300 rounded mx-auto mt-0.5"></div></div></div>
                  <div className="w-12 h-1 bg-slate-400 rounded mb-1"></div>
                  <div className="flex gap-1 flex-1"><div className="w-8 h-8 bg-slate-200 rounded-lg"></div><div className="w-8 h-8 bg-slate-200 rounded-lg"></div><div className="w-8 h-8 bg-slate-200 rounded-lg"></div><div className="w-8 h-8 bg-slate-200 rounded-lg"></div></div>
                  <div className="flex justify-around mt-auto pt-2 border-t border-slate-200"><div className="w-4 h-4 bg-slate-300 rounded"></div><div className="w-4 h-4 bg-slate-300 rounded"></div><div className="w-4 h-4 bg-slate-300 rounded"></div><div className="w-4 h-4 bg-slate-400 rounded"></div><div className="w-4 h-4 bg-slate-300 rounded"></div></div>
                </div>
                <span className="text-sm font-medium text-slate-700">Прогресс</span>
              </div>
              {/* Описание */}
              <div className="max-w-xs">
                <h4 className="font-semibold text-slate-900 mb-3">Ключевые элементы:</h4>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-start gap-2">
                    <span className="text-slate-500 mt-0.5">*</span>
                    <span>Аватар + имя + уровень</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-slate-500 mt-0.5">*</span>
                    <span>Общая статистика (курсы, дни, XP)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-slate-500 mt-0.5">*</span>
                    <span>Меню настроек списком</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-rose-500 mt-0.5">*</span>
                    <span>График активности за неделю</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-rose-500 mt-0.5">*</span>
                    <span>Счетчики (уроки, время)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-rose-500 mt-0.5">*</span>
                    <span>Галерея достижений</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="bg-slate-50 px-6 py-3 text-center text-slate-500 text-sm print:hidden">
              Слайд 8 из 10 — Lo-Fi Профиль и Прогресс
            </div>
          </div>

          {/* Слайд 9 - Анализ и корректировки */}
          <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden aspect-video flex flex-col print:rounded-none print:shadow-none print:border-0 print:break-after-page">
            <div className="bg-slate-800 text-white px-8 py-4">
              <h2 className="text-2xl font-bold">Этап 7: Анализ и корректировки</h2>
            </div>
            <div className="flex-1 p-8">
              <div className="grid grid-cols-2 gap-8 h-full">
                <div className="bg-green-50 rounded-xl p-6 border border-green-200">
                  <h3 className="font-bold text-green-800 mb-4 flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    Что работает хорошо
                  </h3>
                  <ul className="space-y-2 text-sm text-green-800">
                    <li>+ Tab bar — быстрый доступ ко всем разделам</li>
                    <li>+ Главная сразу показывает продолжение</li>
                    <li>+ Урок занимает весь экран — фокус</li>
                    <li>+ Результат мотивирует через награды</li>
                    <li>+ Иерархия из 3 уровней — просто</li>
                  </ul>
                </div>
                <div className="bg-amber-50 rounded-xl p-6 border border-amber-200">
                  <h3 className="font-bold text-amber-800 mb-4 flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                    Внесенные корректировки
                  </h3>
                  <ul className="space-y-2 text-sm text-amber-800">
                    <li>* Добавлен прогресс-бар в шапку урока</li>
                    <li>* Streak вынесен на главную</li>
                    <li>* Категории — горизонтальный скролл</li>
                    <li>* Кнопка «Продолжить» увеличена</li>
                    <li>* Добавлен экран результата с шерингом</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="bg-slate-50 px-6 py-3 text-center text-slate-500 text-sm print:hidden">
              Слайд 9 из 10 — Анализ и корректировки
            </div>
          </div>

          {/* Слайд 10 - Итоги и следующий этап */}
          <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden aspect-video flex flex-col print:rounded-none print:shadow-none print:border-0">
            <div className="bg-slate-800 text-white px-8 py-4">
              <h2 className="text-2xl font-bold">Итоги и следующий этап</h2>
            </div>
            <div className="flex-1 p-8">
              <div className="grid grid-cols-3 gap-6 h-full">
                <div className="bg-violet-50 rounded-xl p-5 border border-violet-200">
                  <h3 className="font-bold text-violet-800 mb-4">Результаты ПЗ №2</h3>
                  <ul className="space-y-2 text-sm text-violet-700">
                    <li>- 22 экрана в 6 группах</li>
                    <li>- Tab Bar навигация</li>
                    <li>- User Flow для 3 сценариев</li>
                    <li>- 8 Lo-Fi прототипов</li>
                    <li>- Интерактивные переходы</li>
                    <li>- Проведено тестирование</li>
                  </ul>
                </div>
                <div className="bg-indigo-50 rounded-xl p-5 border border-indigo-200">
                  <h3 className="font-bold text-indigo-800 mb-4">Связь с ПЗ №1</h3>
                  <ul className="space-y-2 text-sm text-indigo-700">
                    <li>- Сценарии из анализа ЦА</li>
                    <li>- Tab Bar как у Duolingo</li>
                    <li>- Геймификация (streak, XP)</li>
                    <li>- Микроуроки 5-10 минут</li>
                    <li>- Простая навигация (Stepic)</li>
                  </ul>
                </div>
                <div className="bg-blue-50 rounded-xl p-5 border border-blue-200">
                  <h3 className="font-bold text-blue-800 mb-4">ПЗ №3: UI-кит</h3>
                  <ul className="space-y-2 text-sm text-blue-700">
                    <li>- Цветовая палитра</li>
                    <li>- Типографика</li>
                    <li>- Компоненты и состояния</li>
                    <li>- Иконки и иллюстрации</li>
                    <li>- Hi-Fi экраны</li>
                    <li>- Дизайн-система в Figma</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="bg-slate-50 px-6 py-3 text-center text-slate-500 text-sm print:hidden">
              Слайд 10 из 10 — Итоги и следующий этап
            </div>
          </div>

        </div>
      </main>

      <footer className="border-t border-slate-200 bg-slate-50 mt-8 print:hidden">
        <div className="max-w-5xl mx-auto px-6 py-4 text-center text-sm text-slate-500">
          ПЗ №2 — Lo-Fi прототипирование и навигация | LearnUp | Не забудь добавить титульный лист по шаблону СДО
        </div>
      </footer>
    </div>
  )
}
