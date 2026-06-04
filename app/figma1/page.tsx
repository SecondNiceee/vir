export default function Figma1Page() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl font-semibold text-slate-900">ПЗ №1 — Figma-контент</h1>
              <p className="text-sm text-slate-500">Образовательное приложение LearnUp</p>
            </div>
            <div className="flex gap-3">
              <a href="https://www.figma.com/design/ifMj7wi9kSg8EiXMrfjmYS/Untitled?node-id=0-1&t=a26HOJN8i9Mb3mqx-1" target="_blank" rel="noopener noreferrer" className="text-sm text-green-600 hover:text-green-800">Figma-проект</a>
              <a href="/pdf1" className="text-sm text-blue-600 hover:text-blue-800">PDF-слайды</a>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-8 space-y-8">

        {/* БЛОК 1: Тема проекта */}
        <section className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="bg-slate-800 text-white px-6 py-3 flex items-center justify-between">
            <span className="font-medium">Блок 1: Тема проекта и обоснование</span>
            <span className="text-xs bg-slate-700 px-2 py-1 rounded">Этап 1</span>
          </div>
          <div className="p-6 space-y-6">
            <div className="text-center pb-6 border-b border-slate-100">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-violet-500 to-indigo-600 rounded-2xl mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-slate-900">LearnUp</h2>
              <p className="text-slate-500 mt-1">Образовательное мобильное приложение</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-2">Назначение</h3>
                  <p className="text-slate-700 leading-relaxed">
                    LearnUp — мобильное приложение для самообразования, которое помогает пользователям 
                    осваивать новые навыки через структурированные курсы, интерактивные уроки и систему 
                    отслеживания прогресса. Приложение решает проблему хаотичного обучения, предоставляя 
                    персонализированные траектории развития.
                  </p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-2">Ключевая проблема</h3>
                  <p className="text-slate-700 leading-relaxed">
                    Современные пользователи хотят учиться, но сталкиваются с разрозненностью материалов, 
                    отсутствием мотивации и сложностью отслеживания прогресса.
                  </p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-2">Обоснование выбора</h3>
                  <ul className="space-y-2 text-slate-700">
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">●</span>
                      <span>Высокая актуальность — рынок EdTech растёт на 15% ежегодно</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">●</span>
                      <span>Сложный UX с геймификацией, прогрессом, персонализацией</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">●</span>
                      <span>Множество качественных аналогов для анализа паттернов</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">●</span>
                      <span>Возможность применить принципы мотивационного дизайна</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* БЛОК 2: Целевая аудитория */}
        <section className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="bg-slate-800 text-white px-6 py-3 flex items-center justify-between">
            <span className="font-medium">Блок 2: Целевая аудитория</span>
            <span className="text-xs bg-slate-700 px-2 py-1 rounded">Этап 2</span>
          </div>
          <div className="p-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Персона 1 */}
              <div className="bg-gradient-to-br from-violet-50 to-indigo-50 rounded-xl p-5 border border-violet-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-violet-200 rounded-full flex items-center justify-center text-xl">
                    <svg className="w-6 h-6 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Студент Алексей</h4>
                    <p className="text-sm text-slate-500">18-24 года</p>
                  </div>
                </div>
                <div className="space-y-3 text-sm">
                  <div><span className="font-medium text-slate-700">Род занятий:</span><span className="text-slate-600 ml-1">Студент технического вуза</span></div>
                  <div><span className="font-medium text-slate-700">Циф����овая грамотность:</span><span className="text-slate-600 ml-1">Высокая</span></div>
                  <div><span className="font-medium text-slate-700">Мотивация:</span><span className="text-slate-600 ml-1">Дополнить университетское образование практическими навыками</span></div>
                  <div><span className="font-medium text-slate-700">Контекст:</span><span className="text-slate-600 ml-1">В транспорте, между парами, вечером дома</span></div>
                </div>
              </div>

              {/* Персона 2 */}
              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-5 border border-emerald-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-emerald-200 rounded-full flex items-center justify-center text-xl">
                    <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Специалист Мария</h4>
                    <p className="text-sm text-slate-500">25-35 лет</p>
                  </div>
                </div>
                <div className="space-y-3 text-sm">
                  <div><span className="font-medium text-slate-700">Род занятий:</span><span className="text-slate-600 ml-1">Маркетолог в IT-компании</span></div>
                  <div><span className="font-medium text-slate-700">Цифровая грамотность:</span><span className="text-slate-600 ml-1">Высокая</span></div>
                  <div><span className="font-medium text-slate-700">Мотивация:</span><span className="text-slate-600 ml-1">Повысить квалификацию для карьерного роста</span></div>
                  <div><span className="font-medium text-slate-700">Контекст:</span><span className="text-slate-600 ml-1">Утром до работы, в обеденный перерыв, выходные</span></div>
                </div>
              </div>

              {/* Персона 3 */}
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-5 border border-amber-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-amber-200 rounded-full flex items-center justify-center text-xl">
                    <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Родитель Дмитрий</h4>
                    <p className="text-sm text-slate-500">35-45 лет</p>
                  </div>
                </div>
                <div className="space-y-3 text-sm">
                  <div><span className="font-medium text-slate-700">Род занятий:</span><span className="text-slate-600 ml-1">Менеджер среднего звена</span></div>
                  <div><span className="font-medium text-slate-700">Цифровая грамотность:</span><span className="text-slate-600 ml-1">Средняя</span></div>
                  <div><span className="font-medium text-slate-700">Мотивация:</span><span className="text-slate-600 ml-1">Освоить новую профессию для смены карьеры</span></div>
                  <div><span className="font-medium text-slate-700">Контекст:</span><span className="text-slate-600 ml-1">Вечером после работы, когда дети спят</span></div>
                </div>
              </div>

              {/* Персона 4 */}
              <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-xl p-5 border border-rose-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-rose-200 rounded-full flex items-center justify-center text-xl">
                    <svg className="w-6 h-6 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Пенсионер Елена</h4>
                    <p className="text-sm text-slate-500">55-65 лет</p>
                  </div>
                </div>
                <div className="space-y-3 text-sm">
                  <div><span className="font-medium text-slate-700">Род занятий:</span><span className="text-slate-600 ml-1">Недавно вышла на пенсию</span></div>
                  <div><span className="font-medium text-slate-700">Цифровая грамотность:</span><span className="text-slate-600 ml-1">Базовая</span></div>
                  <div><span className="font-medium text-slate-700">Мотивация:</span><span className="text-slate-600 ml-1">Изучить хобби: фотографию, языки, рисование</span></div>
                  <div><span className="font-medium text-slate-700">Контекст:</span><span className="text-slate-600 ml-1">Дома в течение дня, с планшета или телефона</span></div>
                </div>
              </div>
            </div>

            {/* Пользовательские цели */}
            <div className="mt-6 p-5 bg-slate-50 rounded-xl">
              <h4 className="font-semibold text-slate-900 mb-3">Основные пользовательские цели</h4>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-violet-100 rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
                  </div>
                  <span className="text-sm text-slate-700">Получить новые знания</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                  </div>
                  <span className="text-sm text-slate-700">Отслеживать прогресс</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  </div>
                  <span className="text-sm text-slate-700">Учиться в удобное время</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* БЛОК 3: Пользовательские сценарии */}
        <section className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="bg-slate-800 text-white px-6 py-3 flex items-center justify-between">
            <span className="font-medium">Блок 3: Пользовательские сценарии</span>
            <span className="text-xs bg-slate-700 px-2 py-1 rounded">Этап 2</span>
          </div>
          <div className="p-6 space-y-4">
            <div className="border border-slate-200 rounded-lg p-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 bg-violet-100 rounded-full flex items-center justify-center text-sm font-semibold text-violet-700">1</div>
                <h4 className="font-semibold text-slate-900">Первый запуск и онбординг</h4>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed">
                Алексей скачивает приложение, проходит опрос об интересах и целях обучения. 
                Система предлагает персонализированную подборку курсов. Алексей выбирает курс 
                по Python и начинает первый урок.
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded">Регистрация</span>
                <span className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded">Онбординг</span>
                <span className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded">Персонализация</span>
              </div>
            </div>

            <div className="border border-slate-200 rounded-lg p-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center text-sm font-semibold text-emerald-700">2</div>
                <h4 className="font-semibold text-slate-900">Ежедневное обучение</h4>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed">
                Мария получает push-уведомление о новом уроке. Открывает приложение в метро, 
                проходит 10-минутный урок, выполняет практическое задание. Получает достижение 
                за 7-дневную серию и делится результатом в соцсетях.
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded">Уведомления</span>
                <span className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded">Микрообучение</span>
                <span className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded">Геймификация</span>
              </div>
            </div>

            <div className="border border-slate-200 rounded-lg p-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center text-sm font-semibold text-amber-700">3</div>
                <h4 className="font-semibold text-slate-900">Поиск нового курса</h4>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed">
                Дмитрий решает освоить дизайн. Открывает каталог, фильтрует по категории и уровню 
                сложности. Читает отзывы, смотрит программу курса и превью уроков. Добавляет курс 
                в избранное для покупки позже.
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded">Каталог</span>
                <span className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded">Фильтрация</span>
                <span className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded">Избранное</span>
              </div>
            </div>

            <div className="border border-slate-200 rounded-lg p-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 bg-rose-100 rounded-full flex items-center justify-center text-sm font-semibold text-rose-700">4</div>
                <h4 className="font-semibold text-slate-900">Отслеживание прогресса</h4>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed">
                Елена заходит в профиль, смотрит статистику обучения за месяц. Видит график 
                активности, количество пройденных уроков, заработанные сертификаты. Ставит цель 
                на следующую неделю.
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded">Профиль</span>
                <span className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded">Статистика</span>
                <span className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded">Цели</span>
              </div>
            </div>
          </div>
        </section>

        {/* БЛОК 4: Анализ аналогов */}
        <section className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="bg-slate-800 text-white px-6 py-3 flex items-center justify-between">
            <span className="font-medium">Блок 4: Анализ аналогов</span>
            <span className="text-xs bg-slate-700 px-2 py-1 rounded">Этап 3</span>
          </div>
          <div className="p-6 space-y-6">
            
            {/* Duolingo */}
            <div className="border border-slate-200 rounded-xl overflow-hidden">
              <div className="bg-[#58CC02] text-white px-5 py-3 flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center font-bold">D</div>
                <div>
                  <h4 className="font-semibold">Duolingo</h4>
                  <p className="text-sm text-white/80">Изучение языков</p>
                </div>
              </div>
              <div className="p-5 grid md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-medium text-slate-900 mb-2">Сильные стороны</h5>
                  <ul className="space-y-1 text-sm text-slate-600">
                    <li>+ Отличная геймификация (серии, очки, лиги)</li>
                    <li>+ Микроуроки по 5-15 минут</li>
                    <li>+ Яркий, запоминающийся дизайн</li>
                    <li>+ Бесплатная базовая версия</li>
                    <li>+ Персонаж-маскот для эмоциональной связи</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium text-slate-900 mb-2">Слабые стороны</h5>
                  <ul className="space-y-1 text-sm text-slate-600">
                    <li>- Ограниченная глубина обучения</li>
                    <li>- Навязчивые уведомления</li>
                    <li>- Много рекламы в бесплатной версии</li>
                    <li>- Мало разговорной практики</li>
                  </ul>
                </div>
                <div className="md:col-span-2">
                  <h5 className="font-medium text-slate-900 mb-2">Ключевые экраны</h5>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-[#58CC02]/10 text-[#58CC02] text-sm rounded-full">Главная с деревом навыков</span>
                    <span className="px-3 py-1 bg-[#58CC02]/10 text-[#58CC02] text-sm rounded-full">Экран урока</span>
                    <span className="px-3 py-1 bg-[#58CC02]/10 text-[#58CC02] text-sm rounded-full">Лиги и рейтинг</span>
                    <span className="px-3 py-1 bg-[#58CC02]/10 text-[#58CC02] text-sm rounded-full">Магазин</span>
                    <span className="px-3 py-1 bg-[#58CC02]/10 text-[#58CC02] text-sm rounded-full">Профиль</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Stepic */}
            <div className="border border-slate-200 rounded-xl overflow-hidden">
              <div className="bg-[#1A1A2E] text-white px-5 py-3 flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center font-bold">S</div>
                <div>
                  <h4 className="font-semibold">Stepic</h4>
                  <p className="text-sm text-white/80">Образовательная платформа</p>
                </div>
              </div>
              <div className="p-5 grid md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-medium text-slate-900 mb-2">Сильные стороны</h5>
                  <ul className="space-y-1 text-sm text-slate-600">
                    <li>+ Много бесплатных курсов</li>
                    <li>+ Практические задания с автопроверкой</li>
                    <li>+ Курсы на русском языке</li>
                    <li>+ Интеграция с вузами</li>
                    <li>+ Понятный интерфейс</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium text-slate-900 mb-2">Слабые стороны</h5>
                  <ul className="space-y-1 text-sm text-slate-600">
                    <li>- Слабая геймификация</li>
                    <li>- Устаревший визуальный дизайн</li>
                    <li>- Нет персонализации рекомендаций</li>
                    <li>- Ограниченный мобильный функционал</li>
                  </ul>
                </div>
                <div className="md:col-span-2">
                  <h5 className="font-medium text-slate-900 mb-2">Скриншот интерфейса</h5>
                  <div className="flex gap-4">
                    <img src="/images/stepic-screenshot.png" alt="Stepic интерфейс" className="h-48 rounded-lg object-cover border border-slate-200" />
                    <div className="flex flex-wrap gap-2 content-start">
                      <span className="px-3 py-1 bg-slate-200 text-slate-700 text-sm rounded-full">Лента курсов</span>
                      <span className="px-3 py-1 bg-slate-200 text-slate-700 text-sm rounded-full">Урок с тестом</span>
                      <span className="px-3 py-1 bg-slate-200 text-slate-700 text-sm rounded-full">Прогресс курса</span>
                      <span className="px-3 py-1 bg-slate-200 text-slate-700 text-sm rounded-full">Профиль</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sololearn */}
            <div className="border border-slate-200 rounded-xl overflow-hidden">
              <div className="bg-[#149EF2] text-white px-5 py-3 flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center font-bold text-sm">SL</div>
                <div>
                  <h4 className="font-semibold">Sololearn</h4>
                  <p className="text-sm text-white/80">Мобильное обучение программированию</p>
                </div>
              </div>
              <div className="p-5 grid md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-medium text-slate-900 mb-2">Сильные стороны</h5>
                  <ul className="space-y-1 text-sm text-slate-600">
                    <li>+ Отличная геймификация с XP и уровнями</li>
                    <li>+ Микроуроки по 5-10 минут</li>
                    <li>+ Встроенный редактор кода</li>
                    <li>+ Активное сообщество</li>
                    <li>+ Бесплатный базовый контент</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium text-slate-900 mb-2">Слабые стороны</h5>
                  <ul className="space-y-1 text-sm text-slate-600">
                    <li>- Только программирование</li>
                    <li>- Много рекламы в бесплатной версии</li>
                    <li>- Поверхностные уроки</li>
                    <li>- Нет сертификатов от вузов</li>
                  </ul>
                </div>
                <div className="md:col-span-2">
                  <h5 className="font-medium text-slate-900 mb-2">Скриншот интерфейса</h5>
                  <div className="flex gap-4">
                    <img src="/images/sololearn-screenshot.png" alt="Sololearn интерфейс" className="h-48 rounded-lg object-cover border border-slate-200" />
                    <div className="flex flex-wrap gap-2 content-start">
                      <span className="px-3 py-1 bg-[#149EF2]/10 text-[#149EF2] text-sm rounded-full">Каталог курсов</span>
                      <span className="px-3 py-1 bg-[#149EF2]/10 text-[#149EF2] text-sm rounded-full">Урок с кодом</span>
                      <span className="px-3 py-1 bg-[#149EF2]/10 text-[#149EF2] text-sm rounded-full">Code Playground</span>
                      <span className="px-3 py-1 bg-[#149EF2]/10 text-[#149EF2] text-sm rounded-full">Лидерборд</span>
                      <span className="px-3 py-1 bg-[#149EF2]/10 text-[#149EF2] text-sm rounded-full">Профиль с достижениями</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Skillbox */}
            <div className="border border-slate-200 rounded-xl overflow-hidden">
              <div className="bg-slate-800 text-white px-5 py-3 flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center font-bold">SB</div>
                <div>
                  <h4 className="font-semibold">Skillbox</h4>
                  <p className="text-sm text-white/80">Онлайн-университет профессий</p>
                </div>
              </div>
              <div className="p-5 grid md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-medium text-slate-900 mb-2">Сильные ��тороны</h5>
                  <ul className="space-y-1 text-sm text-slate-600">
                    <li>+ Комплексные профессии с трудоустройством</li>
                    <li>+ В��сокое качество видеопродакшна</li>
                    <li>+ Проверка работ кураторами</li>
                    <li>+ Реальные проекты в портфолио</li>
                    <li>+ Современный дизайн</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium text-slate-900 mb-2">Слабые стороны</h5>
                  <ul className="space-y-1 text-sm text-slate-600">
                    <li>- Высокая стоимость курсов</li>
                    <li>- Мобильное приложение вторично</li>
                    <li>- Долгие курсы (6-12 месяцев)</li>
                    <li>- Нет микрообучения</li>
                  </ul>
                </div>
                <div className="md:col-span-2">
                  <h5 className="font-medium text-slate-900 mb-2">Ключевые экраны</h5>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-slate-200 text-slate-700 text-sm rounded-full">Каталог профессий</span>
                    <span className="px-3 py-1 bg-slate-200 text-slate-700 text-sm rounded-full">Страница курса</span>
                    <span className="px-3 py-1 bg-slate-200 text-slate-700 text-sm rounded-full">Видеоурок</span>
                    <span className="px-3 py-1 bg-slate-200 text-slate-700 text-sm rounded-full">Домашние задания</span>
                    <span className="px-3 py-1 bg-slate-200 text-slate-700 text-sm rounded-full">Чат с куратором</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* БЛОК 5: Сравнительная таблица */}
        <section className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="bg-slate-800 text-white px-6 py-3 flex items-center justify-between">
            <span className="font-medium">Блок 5: Сравнительная таблица аналогов</span>
            <span className="text-xs bg-slate-700 px-2 py-1 rounded">Этап 4</span>
          </div>
          <div className="p-6 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-slate-200">
                  <th className="text-left py-3 px-4 font-semibold text-slate-900">Критерий</th>
                  <th className="text-center py-3 px-4 font-semibold text-[#58CC02]">Duolingo</th>
                  <th className="text-center py-3 px-4 font-semibold text-[#1A1A2E]">Stepic</th>
                  <th className="text-center py-3 px-4 font-semibold text-[#149EF2]">Sololearn</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr>
                  <td className="py-3 px-4 font-medium text-slate-700">Геймификация</td>
                  <td className="py-3 px-4 text-center"><span className="inline-flex items-center justify-center w-8 h-8 bg-green-100 text-green-700 rounded-full font-semibold">5</span></td>
                  <td className="py-3 px-4 text-center"><span className="inline-flex items-center justify-center w-8 h-8 bg-yellow-100 text-yellow-700 rounded-full font-semibold">2</span></td>
                  <td className="py-3 px-4 text-center"><span className="inline-flex items-center justify-center w-8 h-8 bg-green-100 text-green-700 rounded-full font-semibold">4</span></td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="py-3 px-4 font-medium text-slate-700">Микрообучение</td>
                  <td className="py-3 px-4 text-center"><span className="inline-flex items-center justify-center w-8 h-8 bg-green-100 text-green-700 rounded-full font-semibold">5</span></td>
                  <td className="py-3 px-4 text-center"><span className="inline-flex items-center justify-center w-8 h-8 bg-yellow-100 text-yellow-700 rounded-full font-semibold">3</span></td>
                  <td className="py-3 px-4 text-center"><span className="inline-flex items-center justify-center w-8 h-8 bg-green-100 text-green-700 rounded-full font-semibold">5</span></td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium text-slate-700">Глубина контента</td>
                  <td className="py-3 px-4 text-center"><span className="inline-flex items-center justify-center w-8 h-8 bg-yellow-100 text-yellow-700 rounded-full font-semibold">2</span></td>
                  <td className="py-3 px-4 text-center"><span className="inline-flex items-center justify-center w-8 h-8 bg-green-100 text-green-700 rounded-full font-semibold">4</span></td>
                  <td className="py-3 px-4 text-center"><span className="inline-flex items-center justify-center w-8 h-8 bg-yellow-100 text-yellow-700 rounded-full font-semibold">2</span></td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="py-3 px-4 font-medium text-slate-700">Мобильный UX</td>
                  <td className="py-3 px-4 text-center"><span className="inline-flex items-center justify-center w-8 h-8 bg-green-100 text-green-700 rounded-full font-semibold">5</span></td>
                  <td className="py-3 px-4 text-center"><span className="inline-flex items-center justify-center w-8 h-8 bg-yellow-100 text-yellow-700 rounded-full font-semibold">3</span></td>
                  <td className="py-3 px-4 text-center"><span className="inline-flex items-center justify-center w-8 h-8 bg-green-100 text-green-700 rounded-full font-semibold">5</span></td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium text-slate-700">Персонализация</td>
                  <td className="py-3 px-4 text-center"><span className="inline-flex items-center justify-center w-8 h-8 bg-green-100 text-green-700 rounded-full font-semibold">4</span></td>
                  <td className="py-3 px-4 text-center"><span className="inline-flex items-center justify-center w-8 h-8 bg-red-100 text-red-700 rounded-full font-semibold">1</span></td>
                  <td className="py-3 px-4 text-center"><span className="inline-flex items-center justify-center w-8 h-8 bg-yellow-100 text-yellow-700 rounded-full font-semibold">3</span></td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="py-3 px-4 font-medium text-slate-700">Визуальный дизайн</td>
                  <td className="py-3 px-4 text-center"><span className="inline-flex items-center justify-center w-8 h-8 bg-green-100 text-green-700 rounded-full font-semibold">5</span></td>
                  <td className="py-3 px-4 text-center"><span className="inline-flex items-center justify-center w-8 h-8 bg-yellow-100 text-yellow-700 rounded-full font-semibold">2</span></td>
                  <td className="py-3 px-4 text-center"><span className="inline-flex items-center justify-center w-8 h-8 bg-green-100 text-green-700 rounded-full font-semibold">5</span></td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium text-slate-700">Бесплатный контент</td>
                  <td className="py-3 px-4 text-center"><span className="inline-flex items-center justify-center w-8 h-8 bg-green-100 text-green-700 rounded-full font-semibold">4</span></td>
                  <td className="py-3 px-4 text-center"><span className="inline-flex items-center justify-center w-8 h-8 bg-green-100 text-green-700 rounded-full font-semibold">5</span></td>
                  <td className="py-3 px-4 text-center"><span className="inline-flex items-center justify-center w-8 h-8 bg-green-100 text-green-700 rounded-full font-semibold">4</span></td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="py-3 px-4 font-medium text-slate-700">Офлайн-режим</td>
                  <td className="py-3 px-4 text-center"><span className="inline-flex items-center justify-center w-8 h-8 bg-green-100 text-green-700 rounded-full font-semibold">4</span></td>
                  <td className="py-3 px-4 text-center"><span className="inline-flex items-center justify-center w-8 h-8 bg-green-100 text-green-700 rounded-full font-semibold">4</span></td>
                  <td className="py-3 px-4 text-center"><span className="inline-flex items-center justify-center w-8 h-8 bg-green-100 text-green-700 rounded-full font-semibold">4</span></td>
                </tr>
              </tbody>
              <tfoot>
                <tr className="border-t-2 border-slate-200 bg-slate-100">
                  <td className="py-3 px-4 font-bold text-slate-900">Итого</td>
                  <td className="py-3 px-4 text-center font-bold text-[#58CC02]">34/40</td>
                  <td className="py-3 px-4 text-center font-bold text-[#1A1A2E]">24/40</td>
                  <td className="py-3 px-4 text-center font-bold text-[#149EF2]">32/40</td>
                </tr>
              </tfoot>
            </table>
            
            <div className="mt-4 flex items-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <span className="w-4 h-4 bg-green-100 rounded"></span>
                <span className="text-slate-600">Отлично (4-5)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-4 h-4 bg-yellow-100 rounded"></span>
                <span className="text-slate-600">Средне (2-3)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-4 h-4 bg-red-100 rounded"></span>
                <span className="text-slate-600">Слабо (1)</span>
              </div>
            </div>
          </div>
        </section>

        {/* БЛОК 6: Выводы */}
        <section className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="bg-slate-800 text-white px-6 py-3 flex items-center justify-between">
            <span className="font-medium">Блок 6: Выводы и проектные ориентиры</span>
            <span className="text-xs bg-slate-700 px-2 py-1 rounded">Этап 5</span>
          </div>
          <div className="p-6 space-y-6">
            
            <div className="bg-green-50 border border-green-200 rounded-xl p-5">
              <h4 className="font-semibold text-green-900 mb-3 flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                Наиболее удачные решения для внедрения
              </h4>
              <ul className="space-y-2 text-sm text-green-800">
                <li>1. Геймификация с серями, достижениями и рейтингами (Duolingo)</li>
                <li>2. Микроуроки по 5-15 минут для мобильного контекста (Duolingo)</li>
                <li>3. Персонализированный онбординг с опросом (Duolingo, Stepic)</li>
                <li>4. Практические задания с автопроверкой (Stepic)</li>
                <li>5. Офлайн-режим для обучения без интернета (Stepic)</li>
                <li>6. Прогресс-бар и визуализация достижений (все приложения)</li>
              </ul>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-xl p-5">
              <h4 className="font-semibold text-red-900 mb-3 flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                Проблемные зоны и типовые ошибки
              </h4>
              <ul className="space-y-2 text-sm text-red-800">
                <li>1. Навязчивые push-уведомления раздражают пользователей</li>
                <li>2. Сложная навигация по большому каталогу курсов</li>
                <li>3. Длинные видеоуроки плохо работают на мобильных</li>
                <li>4. Отсутствие социального взаимодействия снижает мотивацию</li>
                <li>5. Агрессивная монетизация отталкивает новых пользователей</li>
              </ul>
            </div>

            <div className="bg-violet-50 border border-violet-200 rounded-xl p-5">
              <h4 className="font-semibold text-violet-900 mb-3 flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" /></svg>
                Требования к проекту LearnUp
              </h4>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div>
                  <h5 className="font-medium text-violet-800 mb-2">Основные функции</h5>
                  <ul className="space-y-1 text-violet-700">
                    <li>- Каталог курсов с фильтрацией</li>
                    <li>- Микроуроки 5-15 минут</li>
                    <li>- Интерактивные задания</li>
                    <li>- Система достижений</li>
                    <li>- Отслеживание прогресса</li>
                    <li>- Персональные рекомендации</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium text-violet-800 mb-2">Принципы навигации</h5>
                  <ul className="space-y-1 text-violet-700">
                    <li>- Tab bar с 4-5 разделами</li>
                    <li>- Главная с продолжением обучения</li>
                    <li>- Быстрый доступ к текущему курсу</li>
                    <li>- Поиск с автодополнением</li>
                    <li>- Минимум уровней вложенности</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium text-violet-800 mb-2">Визуальный стиль</h5>
                  <ul className="space-y-1 text-violet-700">
                    <li>- Чистый современный дизайн</li>
                    <li>- Акцентный цвет для прогресса</li>
                    <li>- Иллюстрации для мотивации</li>
                    <li>- Крупная читаемая типографика</li>
                    <li>- Карточки с закруглениями</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

      <footer className="border-t border-slate-200 bg-white mt-8">
        <div className="max-w-6xl mx-auto px-6 py-4 text-center text-sm text-slate-500">
          ПЗ №1 — Выбор темы и аналитическое исследование | LearnUp
        </div>
      </footer>
    </div>
  )
}
