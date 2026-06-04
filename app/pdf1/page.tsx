export default function Pdf1Page() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-slate-900 text-white sticky top-0 z-10 print:hidden">
        <div className="max-w-5xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl font-semibold">ПЗ №1 — PDF Презентация</h1>
              <p className="text-sm text-slate-400">10 слайдов для сдачи</p>
            </div>
            <div className="flex gap-3">
              <a href="/figma1" className="text-sm text-blue-400 hover:text-blue-300">Figma-контент →</a>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-8">
        
        {/* Инструкция */}
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-8 print:hidden">
          <p className="text-amber-800 text-sm">
            <strong>Как использовать:</strong> Каждый слайд оформлен в формате 16:9. 
            Используй Ctrl+P для печати в PDF или сделай скриншоты. Не забудь заменить первый слайд на титульный по шаблону СДО.
          </p>
        </div>

        <div className="space-y-8 print:space-y-0">
          
          {/* Слайд 1 */}
          <div className="bg-gradient-to-br from-violet-600 to-indigo-700 rounded-2xl shadow-xl overflow-hidden aspect-video flex flex-col print:rounded-none print:shadow-none print:break-after-page">
            <div className="flex-1 flex flex-col items-center justify-center text-white p-12">
              <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h1 className="text-4xl font-bold mb-2">LearnUp</h1>
              <p className="text-xl text-white/80 mb-8">Образовательное мобильное приложение</p>
              <div className="text-sm text-white/60">
                <p>Практическое задание №1</p>
                <p>Выбор и аналитическое исследование темы мобильного интерфейса</p>
              </div>
            </div>
            <div className="bg-black/20 px-6 py-3 text-center text-white/60 text-sm print:hidden">
              Слайд 1 из 10 — Титульный (замени на шаблон СДО)
            </div>
          </div>

          {/* Слайд 2 */}
          <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden aspect-video flex flex-col print:rounded-none print:shadow-none print:border-0 print:break-after-page">
            <div className="bg-slate-800 text-white px-8 py-4">
              <h2 className="text-2xl font-bold">Этап 1: Выбор темы</h2>
            </div>
            <div className="flex-1 p-8 flex flex-col justify-center">
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-4">Тема проекта</h3>
                  <div className="bg-violet-50 rounded-xl p-6 border border-violet-100">
                    <p className="text-2xl font-bold text-violet-700 mb-2">LearnUp</p>
                    <p className="text-slate-600">Мобильное приложение для самообразования с персонализированными курсами и геймификацией</p>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-4">Обоснование выбора</h3>
                  <ul className="space-y-3 text-slate-700">
                    <li className="flex items-start gap-2">
                      <span className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                      </span>
                      <span>Рынок EdTech растёт на 15% ежегодно</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                      </span>
                      <span>Сложный UX: геймификация, прогресс, персонализация</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                      </span>
                      <span>Множество качественных аналогов для анализа</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="bg-slate-50 px-6 py-3 text-center text-slate-500 text-sm print:hidden">
              Слайд 2 из 10 — Выбор темы
            </div>
          </div>

          {/* Слайд 3 */}
          <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden aspect-video flex flex-col print:rounded-none print:shadow-none print:border-0 print:break-after-page">
            <div className="bg-slate-800 text-white px-8 py-4">
              <h2 className="text-2xl font-bold">Этап 2: Целевая аудитория</h2>
            </div>
            <div className="flex-1 p-8">
              <div className="grid grid-cols-4 gap-4 h-full">
                <div className="bg-violet-50 rounded-xl p-4 border border-violet-100 flex flex-col">
                  <div className="w-12 h-12 bg-violet-200 rounded-full flex items-center justify-center mb-3">
                    <svg className="w-6 h-6 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                  </div>
                  <h4 className="font-semibold text-slate-900 text-sm">Студент</h4>
                  <p className="text-xs text-slate-500 mb-2">18-24 года</p>
                  <p className="text-xs text-slate-600 flex-1">Дополнить образование практическими навыками</p>
                  <p className="text-xs text-violet-600 mt-2">Высокая цифр. грамотность</p>
                </div>
                <div className="bg-emerald-50 rounded-xl p-4 border border-emerald-100 flex flex-col">
                  <div className="w-12 h-12 bg-emerald-200 rounded-full flex items-center justify-center mb-3">
                    <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  </div>
                  <h4 className="font-semibold text-slate-900 text-sm">Специалист</h4>
                  <p className="text-xs text-slate-500 mb-2">25-35 лет</p>
                  <p className="text-xs text-slate-600 flex-1">Повысить квалификацию для карьерного роста</p>
                  <p className="text-xs text-emerald-600 mt-2">Высокая цифр. грамотность</p>
                </div>
                <div className="bg-amber-50 rounded-xl p-4 border border-amber-100 flex flex-col">
                  <div className="w-12 h-12 bg-amber-200 rounded-full flex items-center justify-center mb-3">
                    <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                  </div>
                  <h4 className="font-semibold text-slate-900 text-sm">Родитель</h4>
                  <p className="text-xs text-slate-500 mb-2">35-45 лет</p>
                  <p className="text-xs text-slate-600 flex-1">Освоить новую профессию для смены карьеры</p>
                  <p className="text-xs text-amber-600 mt-2">Средняя цифр. грамотность</p>
                </div>
                <div className="bg-rose-50 rounded-xl p-4 border border-rose-100 flex flex-col">
                  <div className="w-12 h-12 bg-rose-200 rounded-full flex items-center justify-center mb-3">
                    <svg className="w-6 h-6 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                  </div>
                  <h4 className="font-semibold text-slate-900 text-sm">Пенсионер</h4>
                  <p className="text-xs text-slate-500 mb-2">55-65 лет</p>
                  <p className="text-xs text-slate-600 flex-1">Изучить хобби: фото, языки, рисование</p>
                  <p className="text-xs text-rose-600 mt-2">Базовая цифр. грамотность</p>
                </div>
              </div>
            </div>
            <div className="bg-slate-50 px-6 py-3 text-center text-slate-500 text-sm print:hidden">
              Слайд 3 из 10 — Целевая аудитория
            </div>
          </div>

          {/* Слайд 4 */}
          <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden aspect-video flex flex-col print:rounded-none print:shadow-none print:border-0 print:break-after-page">
            <div className="bg-slate-800 text-white px-8 py-4">
              <h2 className="text-2xl font-bold">Этап 2: Пользовательские сценарии</h2>
            </div>
            <div className="flex-1 p-8">
              <div className="grid grid-cols-2 gap-6 h-full">
                <div className="bg-slate-50 rounded-xl p-5 border border-slate-200">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-8 h-8 bg-violet-100 rounded-full flex items-center justify-center font-bold text-violet-700">1</span>
                    <h4 className="font-semibold text-slate-900">Первый запуск</h4>
                  </div>
                  <p className="text-sm text-slate-600">Скачивание → Опрос интересов → Персонализированная подборка → Первый урок</p>
                  <div className="mt-3 flex gap-2">
                    <span className="px-2 py-1 bg-violet-100 text-violet-700 text-xs rounded">Онбординг</span>
                    <span className="px-2 py-1 bg-violet-100 text-violet-700 text-xs rounded">Персонализация</span>
                  </div>
                </div>
                <div className="bg-slate-50 rounded-xl p-5 border border-slate-200">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center font-bold text-emerald-700">2</span>
                    <h4 className="font-semibold text-slate-900">Ежедневное обучение</h4>
                  </div>
                  <p className="text-sm text-slate-600">Push-уведомление → 10-мин урок в метро → Практика → Достижение за серию</p>
                  <div className="mt-3 flex gap-2">
                    <span className="px-2 py-1 bg-emerald-100 text-emerald-700 text-xs rounded">Микрообучение</span>
                    <span className="px-2 py-1 bg-emerald-100 text-emerald-700 text-xs rounded">Геймификация</span>
                  </div>
                </div>
                <div className="bg-slate-50 rounded-xl p-5 border border-slate-200">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center font-bold text-amber-700">3</span>
                    <h4 className="font-semibold text-slate-900">Поиск курса</h4>
                  </div>
                  <p className="text-sm text-slate-600">Каталог → Фильтры → Отзывы и программа → Добавление в избранное</p>
                  <div className="mt-3 flex gap-2">
                    <span className="px-2 py-1 bg-amber-100 text-amber-700 text-xs rounded">Каталог</span>
                    <span className="px-2 py-1 bg-amber-100 text-amber-700 text-xs rounded">Фильтрация</span>
                  </div>
                </div>
                <div className="bg-slate-50 rounded-xl p-5 border border-slate-200">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-8 h-8 bg-rose-100 rounded-full flex items-center justify-center font-bold text-rose-700">4</span>
                    <h4 className="font-semibold text-slate-900">Отслеживание прогресса</h4>
                  </div>
                  <p className="text-sm text-slate-600">Профиль → Статистика за месяц → График активности → Постановка цели</p>
                  <div className="mt-3 flex gap-2">
                    <span className="px-2 py-1 bg-rose-100 text-rose-700 text-xs rounded">Статистика</span>
                    <span className="px-2 py-1 bg-rose-100 text-rose-700 text-xs rounded">Цели</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-slate-50 px-6 py-3 text-center text-slate-500 text-sm print:hidden">
              Слайд 4 из 10 — Пользовательские сценарии
            </div>
          </div>

          {/* Слайд 5 */}
          <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden aspect-video flex flex-col print:rounded-none print:shadow-none print:border-0 print:break-after-page">
            <div className="bg-slate-800 text-white px-8 py-4">
              <h2 className="text-2xl font-bold">Этап 3: Анализ аналогов — Duolingo</h2>
            </div>
            <div className="flex-1 p-8">
              <div className="flex gap-8 h-full">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-14 h-14 bg-[#58CC02] rounded-xl flex items-center justify-center text-white font-bold text-xl">D</div>
                    <div>
                      <h3 className="font-bold text-xl text-slate-900">Duolingo</h3>
                      <p className="text-slate-500">Изучение языков</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-green-700 mb-2">Сильные стороны</h4>
                      <ul className="space-y-1 text-sm text-slate-600">
                        <li>+ Геймификация: серии, очки, лиги</li>
                        <li>+ Микроуроки по 5-15 минут</li>
                        <li>+ Яркий дизайн и маскот</li>
                        <li>+ Бесплатная базовая версия</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-red-700 mb-2">Слабые стороны</h4>
                      <ul className="space-y-1 text-sm text-slate-600">
                        <li>- Ограниченная глубина</li>
                        <li>- Навязчивые уведомления</li>
                        <li>- Много рекламы</li>
                        <li>- Мало разговорной практики</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="w-48 bg-slate-100 rounded-xl flex items-center justify-center text-slate-400 text-sm text-center p-4">
                  Место для скриншота главного экрана
                </div>
              </div>
            </div>
            <div className="bg-slate-50 px-6 py-3 text-center text-slate-500 text-sm print:hidden">
              Слайд 5 из 10 — Анализ Duolingo
            </div>
          </div>

          {/* Слайд 6 */}
          <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden aspect-video flex flex-col print:rounded-none print:shadow-none print:border-0 print:break-after-page">
            <div className="bg-slate-800 text-white px-8 py-4">
              <h2 className="text-2xl font-bold">Этап 3: Анализ аналогов — Coursera и Stepik</h2>
            </div>
            <div className="flex-1 p-8">
              <div className="grid grid-cols-2 gap-8 h-full">
                <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-[#0056D2] rounded-xl flex items-center justify-center text-white font-bold">C</div>
                    <div>
                      <h3 className="font-bold text-slate-900">Coursera</h3>
                      <p className="text-sm text-slate-500">Курсы от университетов</p>
                    </div>
                  </div>
                  <div className="space-y-3 text-sm">
                    <div>
                      <span className="text-green-700 font-medium">+</span>
                      <span className="text-slate-600 ml-2">Курсы от топ-университетов, ценные сертификаты</span>
                    </div>
                    <div>
                      <span className="text-green-700 font-medium">+</span>
                      <span className="text-slate-600 ml-2">Глубокая проработка, офлайн-режим</span>
                    </div>
                    <div>
                      <span className="text-red-700 font-medium">-</span>
                      <span className="text-slate-600 ml-2">Дорого, сложная навигация</span>
                    </div>
                    <div>
                      <span className="text-red-700 font-medium">-</span>
                      <span className="text-slate-600 ml-2">Длинные уроки не для мобильных</span>
                    </div>
                  </div>
                </div>
                <div className="bg-purple-50 rounded-xl p-6 border border-purple-100">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-[#6C5CE7] rounded-xl flex items-center justify-center text-white font-bold">S</div>
                    <div>
                      <h3 className="font-bold text-slate-900">Stepik</h3>
                      <p className="text-sm text-slate-500">Российская платформа</p>
                    </div>
                  </div>
                  <div className="space-y-3 text-sm">
                    <div>
                      <span className="text-green-700 font-medium">+</span>
                      <span className="text-slate-600 ml-2">Много бесплатных курсов на русском</span>
                    </div>
                    <div>
                      <span className="text-green-700 font-medium">+</span>
                      <span className="text-slate-600 ml-2">Задания с автопроверкой</span>
                    </div>
                    <div>
                      <span className="text-red-700 font-medium">-</span>
                      <span className="text-slate-600 ml-2">Слабая геймификация</span>
                    </div>
                    <div>
                      <span className="text-red-700 font-medium">-</span>
                      <span className="text-slate-600 ml-2">Устаревший дизайн, нет персонализации</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-slate-50 px-6 py-3 text-center text-slate-500 text-sm print:hidden">
              Слайд 6 из 10 — Анализ Coursera и Stepik
            </div>
          </div>

          {/* Слайд 7 */}
          <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden aspect-video flex flex-col print:rounded-none print:shadow-none print:border-0 print:break-after-page">
            <div className="bg-slate-800 text-white px-8 py-4">
              <h2 className="text-2xl font-bold">Этап 3: Анализ аналогов — Skillbox</h2>
            </div>
            <div className="flex-1 p-8">
              <div className="flex gap-8 h-full">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-14 h-14 bg-[#1A1A2E] rounded-xl flex items-center justify-center text-white font-bold">Sk</div>
                    <div>
                      <h3 className="font-bold text-xl text-slate-900">Skillbox</h3>
                      <p className="text-slate-500">Онлайн-университет профессий</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-green-700 mb-2">Сильные стороны</h4>
                      <ul className="space-y-1 text-sm text-slate-600">
                        <li>+ Комплексные профессии</li>
                        <li>+ Качественный видеопродакшн</li>
                        <li>+ Проверка кураторами</li>
                        <li>+ Проекты в портфолио</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-red-700 mb-2">Слабые стороны</h4>
                      <ul className="space-y-1 text-sm text-slate-600">
                        <li>- Высокая стоимость</li>
                        <li>- Мобильное приложение вторично</li>
                        <li>- Долгие курсы 6-12 мес</li>
                        <li>- Нет микрообучения</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="w-48 bg-slate-100 rounded-xl flex items-center justify-center text-slate-400 text-sm text-center p-4">
                  Место для скриншота главного экрана
                </div>
              </div>
            </div>
            <div className="bg-slate-50 px-6 py-3 text-center text-slate-500 text-sm print:hidden">
              Слайд 7 из 10 — Анализ Skillbox
            </div>
          </div>

          {/* Слайд 8 */}
          <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden aspect-video flex flex-col print:rounded-none print:shadow-none print:border-0 print:break-after-page">
            <div className="bg-slate-800 text-white px-8 py-4">
              <h2 className="text-2xl font-bold">Этап 4: Сравнительная таблица</h2>
            </div>
            <div className="flex-1 p-6 flex items-center">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-slate-200">
                    <th className="text-left py-2 px-3 font-semibold text-slate-900">Критерий</th>
                    <th className="text-center py-2 px-3 font-semibold text-[#58CC02]">Duolingo</th>
                    <th className="text-center py-2 px-3 font-semibold text-[#0056D2]">Coursera</th>
                    <th className="text-center py-2 px-3 font-semibold text-[#6C5CE7]">Stepik</th>
                    <th className="text-center py-2 px-3 font-semibold text-slate-700">Skillbox</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr>
                    <td className="py-2 px-3 text-slate-700">Геймификация</td>
                    <td className="py-2 px-3 text-center"><span className="inline-flex items-center justify-center w-7 h-7 bg-green-100 text-green-700 rounded-full font-semibold text-xs">5</span></td>
                    <td className="py-2 px-3 text-center"><span className="inline-flex items-center justify-center w-7 h-7 bg-yellow-100 text-yellow-700 rounded-full font-semibold text-xs">2</span></td>
                    <td className="py-2 px-3 text-center"><span className="inline-flex items-center justify-center w-7 h-7 bg-yellow-100 text-yellow-700 rounded-full font-semibold text-xs">2</span></td>
                    <td className="py-2 px-3 text-center"><span className="inline-flex items-center justify-center w-7 h-7 bg-yellow-100 text-yellow-700 rounded-full font-semibold text-xs">3</span></td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="py-2 px-3 text-slate-700">Микрообучение</td>
                    <td className="py-2 px-3 text-center"><span className="inline-flex items-center justify-center w-7 h-7 bg-green-100 text-green-700 rounded-full font-semibold text-xs">5</span></td>
                    <td className="py-2 px-3 text-center"><span className="inline-flex items-center justify-center w-7 h-7 bg-red-100 text-red-700 rounded-full font-semibold text-xs">1</span></td>
                    <td className="py-2 px-3 text-center"><span className="inline-flex items-center justify-center w-7 h-7 bg-yellow-100 text-yellow-700 rounded-full font-semibold text-xs">3</span></td>
                    <td className="py-2 px-3 text-center"><span className="inline-flex items-center justify-center w-7 h-7 bg-red-100 text-red-700 rounded-full font-semibold text-xs">1</span></td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 text-slate-700">Глубина контента</td>
                    <td className="py-2 px-3 text-center"><span className="inline-flex items-center justify-center w-7 h-7 bg-yellow-100 text-yellow-700 rounded-full font-semibold text-xs">2</span></td>
                    <td className="py-2 px-3 text-center"><span className="inline-flex items-center justify-center w-7 h-7 bg-green-100 text-green-700 rounded-full font-semibold text-xs">5</span></td>
                    <td className="py-2 px-3 text-center"><span className="inline-flex items-center justify-center w-7 h-7 bg-green-100 text-green-700 rounded-full font-semibold text-xs">4</span></td>
                    <td className="py-2 px-3 text-center"><span className="inline-flex items-center justify-center w-7 h-7 bg-green-100 text-green-700 rounded-full font-semibold text-xs">5</span></td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="py-2 px-3 text-slate-700">Мобильный UX</td>
                    <td className="py-2 px-3 text-center"><span className="inline-flex items-center justify-center w-7 h-7 bg-green-100 text-green-700 rounded-full font-semibold text-xs">5</span></td>
                    <td className="py-2 px-3 text-center"><span className="inline-flex items-center justify-center w-7 h-7 bg-yellow-100 text-yellow-700 rounded-full font-semibold text-xs">3</span></td>
                    <td className="py-2 px-3 text-center"><span className="inline-flex items-center justify-center w-7 h-7 bg-yellow-100 text-yellow-700 rounded-full font-semibold text-xs">3</span></td>
                    <td className="py-2 px-3 text-center"><span className="inline-flex items-center justify-center w-7 h-7 bg-yellow-100 text-yellow-700 rounded-full font-semibold text-xs">2</span></td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 text-slate-700">Персонализация</td>
                    <td className="py-2 px-3 text-center"><span className="inline-flex items-center justify-center w-7 h-7 bg-green-100 text-green-700 rounded-full font-semibold text-xs">4</span></td>
                    <td className="py-2 px-3 text-center"><span className="inline-flex items-center justify-center w-7 h-7 bg-yellow-100 text-yellow-700 rounded-full font-semibold text-xs">3</span></td>
                    <td className="py-2 px-3 text-center"><span className="inline-flex items-center justify-center w-7 h-7 bg-red-100 text-red-700 rounded-full font-semibold text-xs">1</span></td>
                    <td className="py-2 px-3 text-center"><span className="inline-flex items-center justify-center w-7 h-7 bg-yellow-100 text-yellow-700 rounded-full font-semibold text-xs">3</span></td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="py-2 px-3 text-slate-700">Визуальный дизайн</td>
                    <td className="py-2 px-3 text-center"><span className="inline-flex items-center justify-center w-7 h-7 bg-green-100 text-green-700 rounded-full font-semibold text-xs">5</span></td>
                    <td className="py-2 px-3 text-center"><span className="inline-flex items-center justify-center w-7 h-7 bg-green-100 text-green-700 rounded-full font-semibold text-xs">4</span></td>
                    <td className="py-2 px-3 text-center"><span className="inline-flex items-center justify-center w-7 h-7 bg-yellow-100 text-yellow-700 rounded-full font-semibold text-xs">2</span></td>
                    <td className="py-2 px-3 text-center"><span className="inline-flex items-center justify-center w-7 h-7 bg-green-100 text-green-700 rounded-full font-semibold text-xs">5</span></td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr className="border-t-2 border-slate-300 bg-slate-100">
                    <td className="py-2 px-3 font-bold text-slate-900">Итого</td>
                    <td className="py-2 px-3 text-center font-bold text-[#58CC02]">34/40</td>
                    <td className="py-2 px-3 text-center font-bold text-[#0056D2]">25/40</td>
                    <td className="py-2 px-3 text-center font-bold text-[#6C5CE7]">22/40</td>
                    <td className="py-2 px-3 text-center font-bold text-slate-700">23/40</td>
                  </tr>
                </tfoot>
              </table>
            </div>
            <div className="bg-slate-50 px-6 py-3 text-center text-slate-500 text-sm print:hidden">
              Слайд 8 из 10 — Сравнительная таблица
            </div>
          </div>

          {/* Слайд 9 */}
          <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden aspect-video flex flex-col print:rounded-none print:shadow-none print:border-0 print:break-after-page">
            <div className="bg-slate-800 text-white px-8 py-4">
              <h2 className="text-2xl font-bold">Этап 5: Выводы</h2>
            </div>
            <div className="flex-1 p-8">
              <div className="grid grid-cols-2 gap-6 h-full">
                <div className="bg-green-50 rounded-xl p-6 border border-green-200">
                  <h3 className="font-bold text-green-800 mb-4 flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    Удачные решения для внедрения
                  </h3>
                  <ul className="space-y-2 text-sm text-green-800">
                    <li>1. Геймификация: серии, достижения, рейтинги</li>
                    <li>2. Микроуроки 5-15 минут</li>
                    <li>3. Персонализированный онбординг</li>
                    <li>4. Задания с автопроверкой</li>
                    <li>5. Офлайн-режим</li>
                    <li>6. Визуализация прогресса</li>
                  </ul>
                </div>
                <div className="bg-red-50 rounded-xl p-6 border border-red-200">
                  <h3 className="font-bold text-red-800 mb-4 flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                    Проблемные зоны избежать
                  </h3>
                  <ul className="space-y-2 text-sm text-red-800">
                    <li>1. Навязчивые push-уведомления</li>
                    <li>2. Сложная навигация по каталогу</li>
                    <li>3. Длинные видеоуроки</li>
                    <li>4. Отсутствие социального взаимодействия</li>
                    <li>5. Агрессивная монетизация</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="bg-slate-50 px-6 py-3 text-center text-slate-500 text-sm print:hidden">
              Слайд 9 из 10 — Выводы
            </div>
          </div>

          {/* Слайд 10 */}
          <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden aspect-video flex flex-col print:rounded-none print:shadow-none print:border-0">
            <div className="bg-slate-800 text-white px-8 py-4">
              <h2 className="text-2xl font-bold">Этап 5: Проектные ориентиры LearnUp</h2>
            </div>
            <div className="flex-1 p-8">
              <div className="grid grid-cols-3 gap-6 h-full">
                <div className="bg-violet-50 rounded-xl p-5 border border-violet-200">
                  <h3 className="font-bold text-violet-800 mb-4">Основные функции</h3>
                  <ul className="space-y-2 text-sm text-violet-700">
                    <li>- Каталог курсов с фильтрацией</li>
                    <li>- Микроуроки 5-15 минут</li>
                    <li>- Интерактивные задания</li>
                    <li>- Система достижений</li>
                    <li>- Отслеживание прогресса</li>
                    <li>- Персональные рекомендации</li>
                  </ul>
                </div>
                <div className="bg-indigo-50 rounded-xl p-5 border border-indigo-200">
                  <h3 className="font-bold text-indigo-800 mb-4">Навигация</h3>
                  <ul className="space-y-2 text-sm text-indigo-700">
                    <li>- Tab bar с 4-5 разделами</li>
                    <li>- Главная с продолжением</li>
                    <li>- Быстрый доступ к курсу</li>
                    <li>- Поиск с автодополнением</li>
                    <li>- Минимум вложенности</li>
                  </ul>
                </div>
                <div className="bg-blue-50 rounded-xl p-5 border border-blue-200">
                  <h3 className="font-bold text-blue-800 mb-4">Визуальный стиль</h3>
                  <ul className="space-y-2 text-sm text-blue-700">
                    <li>- Чистый современный дизайн</li>
                    <li>- Акцентный цвет прогресса</li>
                    <li>- Иллюстрации для мотивации</li>
                    <li>- Крупная типографика</li>
                    <li>- Карточки с закруглениями</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="bg-slate-50 px-6 py-3 text-center text-slate-500 text-sm print:hidden">
              Слайд 10 из 10 — Проектные ориентиры
            </div>
          </div>

        </div>
      </main>

      <footer className="border-t border-slate-200 bg-slate-50 mt-8 print:hidden">
        <div className="max-w-5xl mx-auto px-6 py-4 text-center text-sm text-slate-500">
          ПЗ №1 — Выбор темы и аналитическое исследование | LearnUp | Не забудь добавить титульный лист по шаблону СДО
        </div>
      </footer>
    </div>
  )
}
