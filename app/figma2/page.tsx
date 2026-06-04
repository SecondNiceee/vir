export default function Figma2Page() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl font-semibold text-slate-900">ПЗ №2 — Figma-контент</h1>
              <p className="text-sm text-slate-500">Lo-Fi прототипирование и навигация LearnUp</p>
            </div>
            <div className="flex gap-3">
              <a href="/pdf2" className="text-sm text-blue-600 hover:text-blue-800">PDF-слайды &rarr;</a>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-8 space-y-8">
        
        {/* Инструкция */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <p className="text-blue-800 text-sm">
            <strong>Как использовать:</strong> Каждый блок — отдельный фрейм для Figma. 
            Сделай скриншот или используй плагин html.to.design для конвертации.
          </p>
        </div>

        {/* БЛОК 1: Уточнение пользовательского сценария */}
        <section className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="bg-slate-800 text-white px-6 py-3 flex items-center justify-between">
            <span className="font-medium">Блок 1: Уточнение пользовательского сценария</span>
            <span className="text-xs bg-slate-700 px-2 py-1 rounded">Этап 1</span>
          </div>
          <div className="p-6 space-y-6">
            <div className="text-center pb-6 border-b border-slate-100">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-violet-500 to-indigo-600 rounded-2xl mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-slate-900">LearnUp</h2>
              <p className="text-slate-500 mt-1">Проектирование структуры и навигации</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-2">Главная цель пользователя</h3>
                  <div className="bg-violet-50 border border-violet-100 rounded-xl p-4">
                    <p className="text-slate-700 leading-relaxed">
                      Эффективно учиться новым навыкам через короткие интерактивные уроки 
                      с возможностью отслеживать прогресс и получать мотивацию через геймификацию.
                    </p>
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-2">Основной сценарий</h3>
                  <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-4">
                    <p className="text-sm text-slate-600 mb-2 font-medium">Ежедневное обучение:</p>
                    <ol className="space-y-1 text-sm text-slate-600">
                      <li>1. Открыть приложение</li>
                      <li>2. Продолжить текущий курс</li>
                      <li>3. Пройти урок (5-10 мин)</li>
                      <li>4. Выполнить практику</li>
                      <li>5. Получить награду за серию</li>
                    </ol>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-2">Второстепенные сценарии</h3>
                  <div className="space-y-3">
                    <div className="bg-slate-50 border border-slate-200 rounded-lg p-3">
                      <span className="text-xs text-slate-500 font-medium">Сценарий А</span>
                      <p className="text-sm text-slate-700 mt-1">Поиск и выбор нового курса из каталога</p>
                    </div>
                    <div className="bg-slate-50 border border-slate-200 rounded-lg p-3">
                      <span className="text-xs text-slate-500 font-medium">Сценарий Б</span>
                      <p className="text-sm text-slate-700 mt-1">Просмотр своей статистики и достижений</p>
                    </div>
                    <div className="bg-slate-50 border border-slate-200 rounded-lg p-3">
                      <span className="text-xs text-slate-500 font-medium">Сценарий В</span>
                      <p className="text-sm text-slate-700 mt-1">Настройка профиля и уведомлений</p>
                    </div>
                    <div className="bg-slate-50 border border-slate-200 rounded-lg p-3">
                      <span className="text-xs text-slate-500 font-medium">Сценарий Г</span>
                      <p className="text-sm text-slate-700 mt-1">Онбординг при первом запуске</p>
                    </div>
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
              {/* Группа: Онбординг */}
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>
                  </div>
                  <h4 className="font-semibold text-slate-900">Онбординг</h4>
                </div>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-amber-400 rounded-full"></span>
                    Splash Screen
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-amber-400 rounded-full"></span>
                    Welcome (3 слайда)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-amber-400 rounded-full"></span>
                    Регистрация / Вход
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-amber-400 rounded-full"></span>
                    Выбор интересов
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-amber-400 rounded-full"></span>
                    Цели обучения
                  </li>
                </ul>
              </div>

              {/* Группа: Главная */}
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-violet-100 rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                  </div>
                  <h4 className="font-semibold text-slate-900">Главная</h4>
                </div>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-violet-400 rounded-full"></span>
                    Главный экран (Лента)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-violet-400 rounded-full"></span>
                    Продолжить обучение
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-violet-400 rounded-full"></span>
                    Рекомендации
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-violet-400 rounded-full"></span>
                    Ежедневная цель
                  </li>
                </ul>
              </div>

              {/* Группа: Каталог */}
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                  </div>
                  <h4 className="font-semibold text-slate-900">Каталог</h4>
                </div>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                    Поиск курсов
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                    Категории
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                    Карточка курса
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                    Фильтры
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                    Результаты поиска
                  </li>
                </ul>
              </div>

              {/* Группа: Обучение */}
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                  </div>
                  <h4 className="font-semibold text-slate-900">Обучение</h4>
                </div>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></span>
                    Страница курса
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></span>
                    Список уроков
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></span>
                    Экран урока (теория)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></span>
                    Практика / Тест
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></span>
                    Результат урока
                  </li>
                </ul>
              </div>
            </div>

            {/* Вторая строка групп */}
            <div className="grid md:grid-cols-4 gap-6 mt-6 pt-6 border-t border-slate-100">
              {/* Группа: Прогресс */}
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-rose-100 rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                  </div>
                  <h4 className="font-semibold text-slate-900">Прогресс</h4>
                </div>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-rose-400 rounded-full"></span>
                    Мои курсы
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-rose-400 rounded-full"></span>
                    Статистика
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-rose-400 rounded-full"></span>
                    Достижения
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-rose-400 rounded-full"></span>
                    Серия дней
                  </li>
                </ul>
              </div>

              {/* Группа: Профиль */}
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-slate-200 rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                  </div>
                  <h4 className="font-semibold text-slate-900">Профиль</h4>
                </div>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-slate-400 rounded-full"></span>
                    Мой профиль
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-slate-400 rounded-full"></span>
                    Настройки
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-slate-400 rounded-full"></span>
                    Уведомления
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-slate-400 rounded-full"></span>
                    Подписка
                  </li>
                </ul>
              </div>

              {/* Итого */}
              <div className="md:col-span-2 bg-slate-50 rounded-xl p-4">
                <h4 className="font-semibold text-slate-900 mb-3">Итого экранов</h4>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-violet-600">22</div>
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
            {/* Тип навигации */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-3">Выбранный тип навигации</h3>
                <div className="bg-violet-50 border-2 border-violet-200 rounded-xl p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 bg-violet-600 rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">Tab Bar (нижняя панель)</h4>
                      <p className="text-sm text-slate-500">5 основных разделов</p>
                    </div>
                  </div>
                  <p className="text-sm text-slate-600">
                    Tab Bar выбран как основной паттерн навигации, так как он обеспечивает 
                    быстрый доступ к ключевым разделам одним касанием и привычен пользователям мобильных приложений.
                  </p>
                </div>
              </div>
              
              <div>
                <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-3">Обоснование выбора</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm">
                    <span className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                    </span>
                    <span className="text-slate-700">Мгновенный доступ к любому разделу без лишних шагов</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <span className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                    </span>
                    <span className="text-slate-700">Используется в аналогах: Duolingo, Coursera</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <span className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                    </span>
                    <span className="text-slate-700">Всегда видна текущая позиция пользователя</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <span className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                    </span>
                    <span className="text-slate-700">Удобен для одноручного управления</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Структура Tab Bar */}
            <div>
              <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-3">Структура Tab Bar</h3>
              <div className="bg-slate-900 rounded-2xl p-4">
                <div className="bg-slate-800 rounded-xl p-3 flex justify-around items-center">
                  <div className="text-center">
                    <div className="w-10 h-10 bg-violet-500 rounded-xl flex items-center justify-center mx-auto mb-1">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                    </div>
                    <span className="text-xs text-violet-400 font-medium">Главная</span>
                  </div>
                  <div className="text-center">
                    <div className="w-10 h-10 bg-slate-700 rounded-xl flex items-center justify-center mx-auto mb-1">
                      <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    </div>
                    <span className="text-xs text-slate-500">Каталог</span>
                  </div>
                  <div className="text-center">
                    <div className="w-10 h-10 bg-slate-700 rounded-xl flex items-center justify-center mx-auto mb-1">
                      <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                    </div>
                    <span className="text-xs text-slate-500">Мои курсы</span>
                  </div>
                  <div className="text-center">
                    <div className="w-10 h-10 bg-slate-700 rounded-xl flex items-center justify-center mx-auto mb-1">
                      <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                    </div>
                    <span className="text-xs text-slate-500">Прогресс</span>
                  </div>
                  <div className="text-center">
                    <div className="w-10 h-10 bg-slate-700 rounded-xl flex items-center justify-center mx-auto mb-1">
                      <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                    </div>
                    <span className="text-xs text-slate-500">Профиль</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* БЛОК 4: User Flow */}
        <section className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="bg-slate-800 text-white px-6 py-3 flex items-center justify-between">
            <span className="font-medium">Блок 4: User Flow — Схема переходов</span>
            <span className="text-xs bg-slate-700 px-2 py-1 rounded">Этап 4</span>
          </div>
          <div className="p-6">
            {/* Основной User Flow */}
            <div className="mb-8">
              <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-4">Основной сценарий: Ежедневное обучение</h3>
              <div className="flex items-center justify-between gap-2 overflow-x-auto pb-4">
                <div className="flex-shrink-0 bg-violet-100 rounded-xl p-4 text-center min-w-[120px]">
                  <div className="w-10 h-10 bg-violet-500 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                  </div>
                  <span className="text-xs font-medium text-violet-700">Главная</span>
                </div>
                <svg className="w-6 h-6 text-slate-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                <div className="flex-shrink-0 bg-emerald-100 rounded-xl p-4 text-center min-w-[120px]">
                  <div className="w-10 h-10 bg-emerald-500 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  </div>
                  <span className="text-xs font-medium text-emerald-700">Продолжить</span>
                </div>
                <svg className="w-6 h-6 text-slate-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                <div className="flex-shrink-0 bg-blue-100 rounded-xl p-4 text-center min-w-[120px]">
                  <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                  </div>
                  <span className="text-xs font-medium text-blue-700">Урок</span>
                </div>
                <svg className="w-6 h-6 text-slate-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                <div className="flex-shrink-0 bg-amber-100 rounded-xl p-4 text-center min-w-[120px]">
                  <div className="w-10 h-10 bg-amber-500 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" /></svg>
                  </div>
                  <span className="text-xs font-medium text-amber-700">Практика</span>
                </div>
                <svg className="w-6 h-6 text-slate-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                <div className="flex-shrink-0 bg-rose-100 rounded-xl p-4 text-center min-w-[120px]">
                  <div className="w-10 h-10 bg-rose-500 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>
                  </div>
                  <span className="text-xs font-medium text-rose-700">Результат</span>
                </div>
              </div>
            </div>

            {/* Дополнительные переходы */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-3">Сценарий: Поиск курса</h3>
                <div className="bg-slate-50 rounded-xl p-4 space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <span className="w-6 h-6 bg-blue-100 rounded flex items-center justify-center text-blue-600 font-bold text-xs">1</span>
                    <span className="text-slate-700">Каталог &rarr; Поиск/Категории</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="w-6 h-6 bg-blue-100 rounded flex items-center justify-center text-blue-600 font-bold text-xs">2</span>
                    <span className="text-slate-700">Результаты &rarr; Карточка курса</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="w-6 h-6 bg-blue-100 rounded flex items-center justify-center text-blue-600 font-bold text-xs">3</span>
                    <span className="text-slate-700">Карточка курса &rarr; Начать / Добавить</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-3">Сценарий: Онбординг</h3>
                <div className="bg-slate-50 rounded-xl p-4 space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <span className="w-6 h-6 bg-amber-100 rounded flex items-center justify-center text-amber-600 font-bold text-xs">1</span>
                    <span className="text-slate-700">Splash &rarr; Welcome слайды</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="w-6 h-6 bg-amber-100 rounded flex items-center justify-center text-amber-600 font-bold text-xs">2</span>
                    <span className="text-slate-700">Регистрация / Вход</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="w-6 h-6 bg-amber-100 rounded flex items-center justify-center text-amber-600 font-bold text-xs">3</span>
                    <span className="text-slate-700">Выбор интересов &rarr; Цели &rarr; Главная</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* БЛОК 5: Lo-Fi Прототипы */}
        <section className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="bg-slate-800 text-white px-6 py-3 flex items-center justify-between">
            <span className="font-medium">Блок 5: Lo-Fi прототипы экранов</span>
            <span className="text-xs bg-slate-700 px-2 py-1 rounded">Этап 5</span>
          </div>
          <div className="p-6">
            <div className="grid md:grid-cols-4 gap-6">
              
              {/* Главная */}
              <div className="space-y-3">
                <h4 className="font-medium text-slate-700 text-sm">Главная</h4>
                <div className="bg-slate-100 rounded-2xl p-3 aspect-[9/16] flex flex-col">
                  {/* Status bar */}
                  <div className="flex justify-between items-center mb-3">
                    <div className="w-8 h-1.5 bg-slate-300 rounded"></div>
                    <div className="flex gap-1">
                      <div className="w-3 h-3 bg-slate-300 rounded-full"></div>
                      <div className="w-3 h-3 bg-slate-300 rounded-full"></div>
                    </div>
                  </div>
                  {/* Header */}
                  <div className="flex justify-between items-center mb-4">
                    <div className="space-y-1">
                      <div className="w-16 h-2 bg-slate-300 rounded"></div>
                      <div className="w-24 h-3 bg-slate-400 rounded"></div>
                    </div>
                    <div className="w-8 h-8 bg-slate-300 rounded-full"></div>
                  </div>
                  {/* Streak card */}
                  <div className="bg-slate-200 rounded-xl p-3 mb-3">
                    <div className="flex justify-between items-center">
                      <div className="space-y-1">
                        <div className="w-20 h-2 bg-slate-300 rounded"></div>
                        <div className="w-12 h-4 bg-slate-400 rounded"></div>
                      </div>
                      <div className="w-10 h-10 bg-slate-300 rounded-lg"></div>
                    </div>
                  </div>
                  {/* Continue learning */}
                  <div className="mb-2">
                    <div className="w-28 h-2 bg-slate-300 rounded mb-2"></div>
                  </div>
                  <div className="bg-slate-200 rounded-xl p-3 mb-3">
                    <div className="flex gap-3">
                      <div className="w-12 h-12 bg-slate-300 rounded-lg"></div>
                      <div className="flex-1 space-y-1">
                        <div className="w-full h-2 bg-slate-300 rounded"></div>
                        <div className="w-3/4 h-2 bg-slate-300 rounded"></div>
                        <div className="w-full h-1.5 bg-slate-300 rounded-full mt-2"></div>
                      </div>
                    </div>
                  </div>
                  {/* Recommendations */}
                  <div className="mb-2">
                    <div className="w-24 h-2 bg-slate-300 rounded mb-2"></div>
                  </div>
                  <div className="flex gap-2 flex-1">
                    <div className="flex-1 bg-slate-200 rounded-xl p-2">
                      <div className="w-full h-8 bg-slate-300 rounded-lg mb-2"></div>
                      <div className="w-full h-1.5 bg-slate-300 rounded"></div>
                      <div className="w-2/3 h-1.5 bg-slate-300 rounded mt-1"></div>
                    </div>
                    <div className="flex-1 bg-slate-200 rounded-xl p-2">
                      <div className="w-full h-8 bg-slate-300 rounded-lg mb-2"></div>
                      <div className="w-full h-1.5 bg-slate-300 rounded"></div>
                      <div className="w-2/3 h-1.5 bg-slate-300 rounded mt-1"></div>
                    </div>
                  </div>
                  {/* Tab bar */}
                  <div className="flex justify-around mt-auto pt-3 border-t border-slate-200">
                    <div className="w-6 h-6 bg-slate-400 rounded"></div>
                    <div className="w-6 h-6 bg-slate-300 rounded"></div>
                    <div className="w-6 h-6 bg-slate-300 rounded"></div>
                    <div className="w-6 h-6 bg-slate-300 rounded"></div>
                    <div className="w-6 h-6 bg-slate-300 rounded"></div>
                  </div>
                </div>
              </div>

              {/* Каталог */}
              <div className="space-y-3">
                <h4 className="font-medium text-slate-700 text-sm">Каталог</h4>
                <div className="bg-slate-100 rounded-2xl p-3 aspect-[9/16] flex flex-col">
                  {/* Status bar */}
                  <div className="flex justify-between items-center mb-3">
                    <div className="w-8 h-1.5 bg-slate-300 rounded"></div>
                    <div className="flex gap-1">
                      <div className="w-3 h-3 bg-slate-300 rounded-full"></div>
                      <div className="w-3 h-3 bg-slate-300 rounded-full"></div>
                    </div>
                  </div>
                  {/* Search */}
                  <div className="bg-slate-200 rounded-xl p-3 mb-3 flex items-center gap-2">
                    <div className="w-4 h-4 bg-slate-300 rounded"></div>
                    <div className="w-full h-2 bg-slate-300 rounded"></div>
                  </div>
                  {/* Categories */}
                  <div className="flex gap-2 mb-3 overflow-hidden">
                    <div className="px-3 py-1.5 bg-slate-400 rounded-full">
                      <div className="w-8 h-2 bg-slate-200 rounded"></div>
                    </div>
                    <div className="px-3 py-1.5 bg-slate-200 rounded-full">
                      <div className="w-10 h-2 bg-slate-300 rounded"></div>
                    </div>
                    <div className="px-3 py-1.5 bg-slate-200 rounded-full">
                      <div className="w-8 h-2 bg-slate-300 rounded"></div>
                    </div>
                  </div>
                  {/* Course cards */}
                  <div className="space-y-3 flex-1">
                    <div className="bg-slate-200 rounded-xl p-3">
                      <div className="w-full h-16 bg-slate-300 rounded-lg mb-2"></div>
                      <div className="w-full h-2 bg-slate-300 rounded"></div>
                      <div className="w-2/3 h-2 bg-slate-300 rounded mt-1"></div>
                      <div className="flex justify-between mt-2">
                        <div className="w-12 h-2 bg-slate-300 rounded"></div>
                        <div className="w-8 h-2 bg-slate-300 rounded"></div>
                      </div>
                    </div>
                    <div className="bg-slate-200 rounded-xl p-3">
                      <div className="w-full h-16 bg-slate-300 rounded-lg mb-2"></div>
                      <div className="w-full h-2 bg-slate-300 rounded"></div>
                      <div className="w-2/3 h-2 bg-slate-300 rounded mt-1"></div>
                      <div className="flex justify-between mt-2">
                        <div className="w-12 h-2 bg-slate-300 rounded"></div>
                        <div className="w-8 h-2 bg-slate-300 rounded"></div>
                      </div>
                    </div>
                  </div>
                  {/* Tab bar */}
                  <div className="flex justify-around mt-auto pt-3 border-t border-slate-200">
                    <div className="w-6 h-6 bg-slate-300 rounded"></div>
                    <div className="w-6 h-6 bg-slate-400 rounded"></div>
                    <div className="w-6 h-6 bg-slate-300 rounded"></div>
                    <div className="w-6 h-6 bg-slate-300 rounded"></div>
                    <div className="w-6 h-6 bg-slate-300 rounded"></div>
                  </div>
                </div>
              </div>

              {/* Урок */}
              <div className="space-y-3">
                <h4 className="font-medium text-slate-700 text-sm">Экран урока</h4>
                <div className="bg-slate-100 rounded-2xl p-3 aspect-[9/16] flex flex-col">
                  {/* Status bar */}
                  <div className="flex justify-between items-center mb-3">
                    <div className="w-8 h-1.5 bg-slate-300 rounded"></div>
                    <div className="flex gap-1">
                      <div className="w-3 h-3 bg-slate-300 rounded-full"></div>
                      <div className="w-3 h-3 bg-slate-300 rounded-full"></div>
                    </div>
                  </div>
                  {/* Header with back */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 bg-slate-300 rounded-lg"></div>
                    <div className="flex-1">
                      <div className="w-full h-1.5 bg-slate-300 rounded-full">
                        <div className="w-1/3 h-1.5 bg-slate-400 rounded-full"></div>
                      </div>
                    </div>
                    <div className="w-6 h-6 bg-slate-300 rounded"></div>
                  </div>
                  {/* Lesson content */}
                  <div className="flex-1 space-y-4">
                    <div className="w-full h-32 bg-slate-200 rounded-xl flex items-center justify-center">
                      <div className="w-12 h-12 bg-slate-300 rounded-full flex items-center justify-center">
                        <div className="w-0 h-0 border-l-8 border-l-slate-400 border-y-4 border-y-transparent ml-1"></div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="w-3/4 h-3 bg-slate-300 rounded"></div>
                      <div className="w-full h-2 bg-slate-200 rounded"></div>
                      <div className="w-full h-2 bg-slate-200 rounded"></div>
                      <div className="w-2/3 h-2 bg-slate-200 rounded"></div>
                    </div>
                    <div className="bg-slate-200 rounded-xl p-3">
                      <div className="w-16 h-2 bg-slate-300 rounded mb-2"></div>
                      <div className="w-full h-2 bg-slate-300 rounded"></div>
                      <div className="w-full h-2 bg-slate-300 rounded mt-1"></div>
                    </div>
                  </div>
                  {/* Button */}
                  <div className="mt-4">
                    <div className="w-full h-12 bg-slate-400 rounded-xl"></div>
                  </div>
                </div>
              </div>

              {/* Результат */}
              <div className="space-y-3">
                <h4 className="font-medium text-slate-700 text-sm">Результат урока</h4>
                <div className="bg-slate-100 rounded-2xl p-3 aspect-[9/16] flex flex-col">
                  {/* Status bar */}
                  <div className="flex justify-between items-center mb-3">
                    <div className="w-8 h-1.5 bg-slate-300 rounded"></div>
                    <div className="flex gap-1">
                      <div className="w-3 h-3 bg-slate-300 rounded-full"></div>
                      <div className="w-3 h-3 bg-slate-300 rounded-full"></div>
                    </div>
                  </div>
                  {/* Success content */}
                  <div className="flex-1 flex flex-col items-center justify-center text-center">
                    <div className="w-20 h-20 bg-slate-300 rounded-full mb-4 flex items-center justify-center">
                      <div className="w-8 h-8 bg-slate-400 rounded"></div>
                    </div>
                    <div className="w-24 h-4 bg-slate-400 rounded mb-2"></div>
                    <div className="w-32 h-2 bg-slate-300 rounded mb-6"></div>
                    
                    {/* Stats */}
                    <div className="flex gap-4 mb-6">
                      <div className="text-center">
                        <div className="w-10 h-10 bg-slate-200 rounded-lg mb-1 mx-auto"></div>
                        <div className="w-8 h-1.5 bg-slate-300 rounded mx-auto"></div>
                      </div>
                      <div className="text-center">
                        <div className="w-10 h-10 bg-slate-200 rounded-lg mb-1 mx-auto"></div>
                        <div className="w-8 h-1.5 bg-slate-300 rounded mx-auto"></div>
                      </div>
                      <div className="text-center">
                        <div className="w-10 h-10 bg-slate-200 rounded-lg mb-1 mx-auto"></div>
                        <div className="w-8 h-1.5 bg-slate-300 rounded mx-auto"></div>
                      </div>
                    </div>

                    {/* Achievement */}
                    <div className="w-full bg-slate-200 rounded-xl p-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-slate-300 rounded-lg"></div>
                        <div className="flex-1">
                          <div className="w-20 h-2 bg-slate-300 rounded"></div>
                          <div className="w-full h-2 bg-slate-300 rounded mt-1"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Buttons */}
                  <div className="space-y-2 mt-4">
                    <div className="w-full h-12 bg-slate-400 rounded-xl"></div>
                    <div className="w-full h-10 bg-slate-200 rounded-xl"></div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* БЛОК 6: Дополнительные Lo-Fi экраны */}
        <section className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="bg-slate-800 text-white px-6 py-3 flex items-center justify-between">
            <span className="font-medium">Блок 6: Дополнительные Lo-Fi экраны</span>
            <span className="text-xs bg-slate-700 px-2 py-1 rounded">Этап 5</span>
          </div>
          <div className="p-6">
            <div className="grid md:grid-cols-4 gap-6">
              
              {/* Профиль */}
              <div className="space-y-3">
                <h4 className="font-medium text-slate-700 text-sm">Профиль</h4>
                <div className="bg-slate-100 rounded-2xl p-3 aspect-[9/16] flex flex-col">
                  <div className="flex justify-between items-center mb-3">
                    <div className="w-8 h-1.5 bg-slate-300 rounded"></div>
                    <div className="flex gap-1">
                      <div className="w-3 h-3 bg-slate-300 rounded-full"></div>
                      <div className="w-3 h-3 bg-slate-300 rounded-full"></div>
                    </div>
                  </div>
                  {/* Avatar & name */}
                  <div className="text-center mb-4">
                    <div className="w-20 h-20 bg-slate-300 rounded-full mx-auto mb-2"></div>
                    <div className="w-24 h-3 bg-slate-400 rounded mx-auto"></div>
                    <div className="w-16 h-2 bg-slate-300 rounded mx-auto mt-1"></div>
                  </div>
                  {/* Stats */}
                  <div className="flex justify-around mb-4 py-3 border-y border-slate-200">
                    <div className="text-center">
                      <div className="w-8 h-4 bg-slate-400 rounded mx-auto"></div>
                      <div className="w-10 h-1.5 bg-slate-300 rounded mx-auto mt-1"></div>
                    </div>
                    <div className="text-center">
                      <div className="w-8 h-4 bg-slate-400 rounded mx-auto"></div>
                      <div className="w-10 h-1.5 bg-slate-300 rounded mx-auto mt-1"></div>
                    </div>
                    <div className="text-center">
                      <div className="w-8 h-4 bg-slate-400 rounded mx-auto"></div>
                      <div className="w-10 h-1.5 bg-slate-300 rounded mx-auto mt-1"></div>
                    </div>
                  </div>
                  {/* Menu items */}
                  <div className="space-y-2 flex-1">
                    <div className="flex items-center gap-3 bg-slate-200 rounded-lg p-3">
                      <div className="w-6 h-6 bg-slate-300 rounded"></div>
                      <div className="w-20 h-2 bg-slate-300 rounded"></div>
                    </div>
                    <div className="flex items-center gap-3 bg-slate-200 rounded-lg p-3">
                      <div className="w-6 h-6 bg-slate-300 rounded"></div>
                      <div className="w-24 h-2 bg-slate-300 rounded"></div>
                    </div>
                    <div className="flex items-center gap-3 bg-slate-200 rounded-lg p-3">
                      <div className="w-6 h-6 bg-slate-300 rounded"></div>
                      <div className="w-16 h-2 bg-slate-300 rounded"></div>
                    </div>
                    <div className="flex items-center gap-3 bg-slate-200 rounded-lg p-3">
                      <div className="w-6 h-6 bg-slate-300 rounded"></div>
                      <div className="w-14 h-2 bg-slate-300 rounded"></div>
                    </div>
                  </div>
                  {/* Tab bar */}
                  <div className="flex justify-around mt-auto pt-3 border-t border-slate-200">
                    <div className="w-6 h-6 bg-slate-300 rounded"></div>
                    <div className="w-6 h-6 bg-slate-300 rounded"></div>
                    <div className="w-6 h-6 bg-slate-300 rounded"></div>
                    <div className="w-6 h-6 bg-slate-300 rounded"></div>
                    <div className="w-6 h-6 bg-slate-400 rounded"></div>
                  </div>
                </div>
              </div>

              {/* Онбординг */}
              <div className="space-y-3">
                <h4 className="font-medium text-slate-700 text-sm">Онбординг</h4>
                <div className="bg-slate-100 rounded-2xl p-3 aspect-[9/16] flex flex-col">
                  <div className="flex justify-between items-center mb-3">
                    <div className="w-8 h-1.5 bg-slate-300 rounded"></div>
                    <div className="flex gap-1">
                      <div className="w-3 h-3 bg-slate-300 rounded-full"></div>
                      <div className="w-3 h-3 bg-slate-300 rounded-full"></div>
                    </div>
                  </div>
                  <div className="text-right mb-4">
                    <div className="w-16 h-2 bg-slate-300 rounded ml-auto"></div>
                  </div>
                  {/* Illustration */}
                  <div className="flex-1 flex flex-col items-center justify-center">
                    <div className="w-32 h-32 bg-slate-200 rounded-2xl mb-6 flex items-center justify-center">
                      <div className="w-16 h-16 bg-slate-300 rounded-xl"></div>
                    </div>
                    <div className="w-40 h-4 bg-slate-400 rounded mb-2"></div>
                    <div className="w-48 h-2 bg-slate-300 rounded mb-1"></div>
                    <div className="w-44 h-2 bg-slate-300 rounded"></div>
                  </div>
                  {/* Dots */}
                  <div className="flex justify-center gap-2 mb-4">
                    <div className="w-2 h-2 bg-slate-400 rounded-full"></div>
                    <div className="w-2 h-2 bg-slate-300 rounded-full"></div>
                    <div className="w-2 h-2 bg-slate-300 rounded-full"></div>
                  </div>
                  {/* Button */}
                  <div className="w-full h-12 bg-slate-400 rounded-xl"></div>
                </div>
              </div>

              {/* Страница курса */}
              <div className="space-y-3">
                <h4 className="font-medium text-slate-700 text-sm">Страница курса</h4>
                <div className="bg-slate-100 rounded-2xl p-3 aspect-[9/16] flex flex-col">
                  <div className="flex justify-between items-center mb-3">
                    <div className="w-8 h-1.5 bg-slate-300 rounded"></div>
                    <div className="flex gap-1">
                      <div className="w-3 h-3 bg-slate-300 rounded-full"></div>
                      <div className="w-3 h-3 bg-slate-300 rounded-full"></div>
                    </div>
                  </div>
                  {/* Back + title */}
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 bg-slate-300 rounded-lg"></div>
                    <div className="w-24 h-3 bg-slate-400 rounded"></div>
                  </div>
                  {/* Cover */}
                  <div className="w-full h-24 bg-slate-200 rounded-xl mb-3"></div>
                  {/* Info */}
                  <div className="space-y-2 mb-3">
                    <div className="w-3/4 h-3 bg-slate-400 rounded"></div>
                    <div className="flex gap-2">
                      <div className="w-12 h-2 bg-slate-300 rounded"></div>
                      <div className="w-12 h-2 bg-slate-300 rounded"></div>
                      <div className="w-12 h-2 bg-slate-300 rounded"></div>
                    </div>
                  </div>
                  {/* Lessons list */}
                  <div className="flex-1 space-y-2">
                    <div className="w-16 h-2 bg-slate-400 rounded"></div>
                    <div className="flex items-center gap-2 bg-slate-200 rounded-lg p-2">
                      <div className="w-6 h-6 bg-slate-400 rounded-full"></div>
                      <div className="flex-1">
                        <div className="w-full h-2 bg-slate-300 rounded"></div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 bg-slate-200 rounded-lg p-2">
                      <div className="w-6 h-6 bg-slate-300 rounded-full"></div>
                      <div className="flex-1">
                        <div className="w-full h-2 bg-slate-300 rounded"></div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 bg-slate-200 rounded-lg p-2">
                      <div className="w-6 h-6 bg-slate-300 rounded-full"></div>
                      <div className="flex-1">
                        <div className="w-full h-2 bg-slate-300 rounded"></div>
                      </div>
                    </div>
                  </div>
                  {/* Button */}
                  <div className="w-full h-12 bg-slate-400 rounded-xl mt-3"></div>
                </div>
              </div>

              {/* Прогресс */}
              <div className="space-y-3">
                <h4 className="font-medium text-slate-700 text-sm">Прогресс</h4>
                <div className="bg-slate-100 rounded-2xl p-3 aspect-[9/16] flex flex-col">
                  <div className="flex justify-between items-center mb-3">
                    <div className="w-8 h-1.5 bg-slate-300 rounded"></div>
                    <div className="flex gap-1">
                      <div className="w-3 h-3 bg-slate-300 rounded-full"></div>
                      <div className="w-3 h-3 bg-slate-300 rounded-full"></div>
                    </div>
                  </div>
                  {/* Title */}
                  <div className="w-20 h-3 bg-slate-400 rounded mb-4"></div>
                  {/* Weekly chart */}
                  <div className="bg-slate-200 rounded-xl p-3 mb-3">
                    <div className="flex justify-between items-end h-16 mb-2">
                      <div className="w-4 bg-slate-300 rounded-t" style={{height: '40%'}}></div>
                      <div className="w-4 bg-slate-300 rounded-t" style={{height: '60%'}}></div>
                      <div className="w-4 bg-slate-300 rounded-t" style={{height: '80%'}}></div>
                      <div className="w-4 bg-slate-300 rounded-t" style={{height: '50%'}}></div>
                      <div className="w-4 bg-slate-300 rounded-t" style={{height: '70%'}}></div>
                      <div className="w-4 bg-slate-400 rounded-t" style={{height: '90%'}}></div>
                      <div className="w-4 bg-slate-300 rounded-t" style={{height: '30%'}}></div>
                    </div>
                    <div className="flex justify-between">
                      <div className="w-4 h-1.5 bg-slate-300 rounded"></div>
                      <div className="w-4 h-1.5 bg-slate-300 rounded"></div>
                      <div className="w-4 h-1.5 bg-slate-300 rounded"></div>
                      <div className="w-4 h-1.5 bg-slate-300 rounded"></div>
                      <div className="w-4 h-1.5 bg-slate-300 rounded"></div>
                      <div className="w-4 h-1.5 bg-slate-300 rounded"></div>
                      <div className="w-4 h-1.5 bg-slate-300 rounded"></div>
                    </div>
                  </div>
                  {/* Stats grid */}
                  <div className="grid grid-cols-2 gap-2 mb-3">
                    <div className="bg-slate-200 rounded-lg p-2 text-center">
                      <div className="w-8 h-4 bg-slate-400 rounded mx-auto"></div>
                      <div className="w-12 h-1.5 bg-slate-300 rounded mx-auto mt-1"></div>
                    </div>
                    <div className="bg-slate-200 rounded-lg p-2 text-center">
                      <div className="w-8 h-4 bg-slate-400 rounded mx-auto"></div>
                      <div className="w-12 h-1.5 bg-slate-300 rounded mx-auto mt-1"></div>
                    </div>
                  </div>
                  {/* Achievements */}
                  <div className="w-20 h-2 bg-slate-400 rounded mb-2"></div>
                  <div className="flex gap-2 flex-1">
                    <div className="w-12 h-12 bg-slate-200 rounded-xl"></div>
                    <div className="w-12 h-12 bg-slate-200 rounded-xl"></div>
                    <div className="w-12 h-12 bg-slate-200 rounded-xl"></div>
                    <div className="w-12 h-12 bg-slate-200 rounded-xl"></div>
                  </div>
                  {/* Tab bar */}
                  <div className="flex justify-around mt-auto pt-3 border-t border-slate-200">
                    <div className="w-6 h-6 bg-slate-300 rounded"></div>
                    <div className="w-6 h-6 bg-slate-300 rounded"></div>
                    <div className="w-6 h-6 bg-slate-300 rounded"></div>
                    <div className="w-6 h-6 bg-slate-400 rounded"></div>
                    <div className="w-6 h-6 bg-slate-300 rounded"></div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* БЛОК 7: Выводы и корректировки */}
        <section className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="bg-slate-800 text-white px-6 py-3 flex items-center justify-between">
            <span className="font-medium">Блок 7: Анализ и корректировки</span>
            <span className="text-xs bg-slate-700 px-2 py-1 rounded">Этап 7</span>
          </div>
          <div className="p-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-slate-900 mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  Что работает хорошо
                </h3>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500">+</span>
                    <span>Tab bar обеспечивает быстрый доступ ко всем разделам</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500">+</span>
                    <span>Главная сразу показывает продолжение обучения — минимум действий</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500">+</span>
                    <span>Урок занимает весь экран — фокус на контенте</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500">+</span>
                    <span>Результат урока мотивирует через достижения</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500">+</span>
                    <span>Иерархия из 3 уровней — просто и понятно</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                  Внесенные корректировки
                </h3>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500">*</span>
                    <span>Добавлен прогресс-бар в шапку экрана урока</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500">*</span>
                    <span>Streak вынесен на главную для мотивации</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500">*</span>
                    <span>Категории в каталоге — горизонтальный скролл вместо списка</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500">*</span>
                    <span>Кнопка «Продолжить» увеличена и акцентирована</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500">*</span>
                    <span>Добавлен экран результата с шерингом достижений</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-xl">
              <h4 className="font-semibold text-blue-900 mb-2">Следующий этап: ПЗ №3</h4>
              <p className="text-sm text-blue-800">
                На основе утвержденных Lo-Fi прототипов будет разработана дизайн-система и UI-кит, 
                включающий цветовую палитру, типографику, компоненты и их состояния.
              </p>
            </div>
          </div>
        </section>

      </main>

      <footer className="border-t border-slate-200 bg-slate-50 mt-8">
        <div className="max-w-6xl mx-auto px-6 py-4 text-center text-sm text-slate-500">
          ПЗ №2 — Lo-Fi прототипирование и навигация | LearnUp
        </div>
      </footer>
    </div>
  )
}
