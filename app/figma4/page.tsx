export default function Figma4Page() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl font-semibold text-slate-900">ПЗ №4 — Figma-контент</h1>
              <p className="text-sm text-slate-500">Hi-Fi макеты LearnUp</p>
            </div>
            <div className="flex gap-3">
              <a href="/pdf4" className="text-sm text-emerald-600 hover:text-emerald-800">PDF-слайды &rarr;</a>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-8 space-y-8">

        {/* БЛОК 1: Главный экран */}
        <section className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="bg-slate-800 text-white px-6 py-3 flex items-center justify-between">
            <span className="font-medium">Экран 1: Главный экран (Home)</span>
            <span className="text-xs bg-slate-700 px-2 py-1 rounded">Hi-Fi</span>
          </div>
          <div className="p-6 flex justify-center">
            <div className="w-[375px] bg-slate-50 rounded-3xl overflow-hidden shadow-xl border border-slate-200">
              {/* Status Bar */}
              <div className="bg-white px-6 py-2 flex items-center justify-between text-xs text-slate-600">
                <span>9:41</span>
                <div className="flex items-center gap-1">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12.01 21.49L23.64 7c-.45-.34-4.93-4-11.64-4C5.28 3 .81 6.66.36 7l11.63 14.49.01.01.01-.01z"/></svg>
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33v15.33C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V5.33C17 4.6 16.4 4 15.67 4z"/></svg>
                </div>
              </div>
              
              {/* Content */}
              <div className="bg-white px-5 py-4">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="text-slate-500 text-sm">Привет, Алексей!</p>
                    <h1 className="text-xl font-bold text-slate-900">Продолжим учиться?</h1>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-teal-400 to-emerald-500 flex items-center justify-center text-white font-bold">
                    А
                  </div>
                </div>

                {/* Streak Card */}
                <div className="bg-gradient-to-r from-amber-400 to-orange-500 rounded-2xl p-4 mb-6 text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-white/80 text-sm">Серия дней</p>
                      <p className="text-3xl font-bold">12</p>
                    </div>
                    <div className="text-4xl">🔥</div>
                  </div>
                  <div className="flex gap-1 mt-3">
                    {['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'].map((day, i) => (
                      <div key={day} className={`flex-1 text-center py-1 rounded-lg text-xs ${i < 5 ? 'bg-white/30' : 'bg-white/10'}`}>
                        {day}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Continue Learning */}
                <div className="mb-6">
                  <h2 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-3">Продолжить</h2>
                  <div className="bg-gradient-to-br from-teal-50 to-emerald-50 border border-teal-100 rounded-2xl p-4">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 bg-teal-500 rounded-xl flex items-center justify-center">
                        <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-slate-900">Python для начинающих</h3>
                        <p className="text-sm text-slate-500">Урок 8: Циклы</p>
                        <div className="mt-2 h-2 bg-teal-100 rounded-full overflow-hidden">
                          <div className="h-full bg-teal-500 rounded-full" style={{width: '65%'}}></div>
                        </div>
                      </div>
                      <svg className="w-6 h-6 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Daily Goal */}
                <div className="mb-6">
                  <h2 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-3">Дневная цель</h2>
                  <div className="flex items-center gap-4 bg-slate-50 rounded-2xl p-4">
                    <div className="relative w-16 h-16">
                      <svg className="w-16 h-16 -rotate-90">
                        <circle cx="32" cy="32" r="28" stroke="#e2e8f0" strokeWidth="6" fill="none"/>
                        <circle cx="32" cy="32" r="28" stroke="#14b8a6" strokeWidth="6" fill="none" strokeLinecap="round" strokeDasharray="176" strokeDashoffset="53"/>
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center text-lg font-bold text-teal-600">70%</div>
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900">14 / 20 XP</p>
                      <p className="text-sm text-slate-500">Ещё 1 урок до цели!</p>
                    </div>
                  </div>
                </div>

                {/* Categories */}
                <div>
                  <h2 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-3">Категории</h2>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-violet-50 border border-violet-100 rounded-xl p-4 text-center">
                      <div className="w-10 h-10 bg-violet-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                        <span className="text-xl">💻</span>
                      </div>
                      <p className="text-sm font-medium text-slate-900">Программирование</p>
                    </div>
                    <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 text-center">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                        <span className="text-xl">🌍</span>
                      </div>
                      <p className="text-sm font-medium text-slate-900">Языки</p>
                    </div>
                    <div className="bg-amber-50 border border-amber-100 rounded-xl p-4 text-center">
                      <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                        <span className="text-xl">📊</span>
                      </div>
                      <p className="text-sm font-medium text-slate-900">Бизнес</p>
                    </div>
                    <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-4 text-center">
                      <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                        <span className="text-xl">🎨</span>
                      </div>
                      <p className="text-sm font-medium text-slate-900">Дизайн</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Navigation */}
              <div className="bg-white border-t border-slate-200 px-6 py-3 flex items-center justify-around">
                <div className="flex flex-col items-center text-teal-500">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>
                  <span className="text-xs mt-1 font-medium">Главная</span>
                </div>
                <div className="flex flex-col items-center text-slate-400">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
                  <span className="text-xs mt-1">Поиск</span>
                </div>
                <div className="flex flex-col items-center text-slate-400">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>
                  <span className="text-xs mt-1">Курсы</span>
                </div>
                <div className="flex flex-col items-center text-slate-400">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>
                  <span className="text-xs mt-1">Профиль</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* БЛОК 2: Экран урока */}
        <section className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="bg-slate-800 text-white px-6 py-3 flex items-center justify-between">
            <span className="font-medium">Экран 2: Прохождение урока</span>
            <span className="text-xs bg-slate-700 px-2 py-1 rounded">Hi-Fi</span>
          </div>
          <div className="p-6 flex justify-center">
            <div className="w-[375px] bg-white rounded-3xl overflow-hidden shadow-xl border border-slate-200">
              {/* Status Bar */}
              <div className="bg-teal-500 px-6 py-2 flex items-center justify-between text-xs text-white">
                <span>9:41</span>
                <div className="flex items-center gap-1">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12.01 21.49L23.64 7c-.45-.34-4.93-4-11.64-4C5.28 3 .81 6.66.36 7l11.63 14.49.01.01.01-.01z"/></svg>
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33v15.33C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V5.33C17 4.6 16.4 4 15.67 4z"/></svg>
                </div>
              </div>
              
              {/* Header */}
              <div className="bg-teal-500 px-5 py-4 text-white">
                <div className="flex items-center justify-between mb-4">
                  <button className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/></svg>
                  </button>
                  <div className="flex-1 mx-4">
                    <div className="h-2 bg-white/30 rounded-full overflow-hidden">
                      <div className="h-full bg-white rounded-full" style={{width: '40%'}}></div>
                    </div>
                  </div>
                  <span className="text-sm font-medium">4/10</span>
                </div>
                <h1 className="text-xl font-bold">Циклы в Python</h1>
                <p className="text-white/80 text-sm">Урок 8 • Python для начинающих</p>
              </div>

              {/* Content */}
              <div className="px-5 py-6">
                {/* Question */}
                <div className="mb-6">
                  <span className="inline-block bg-violet-100 text-violet-700 text-xs font-medium px-3 py-1 rounded-full mb-3">Вопрос</span>
                  <h2 className="text-lg font-semibold text-slate-900 mb-2">Какой цикл выполняется, пока условие истинно?</h2>
                  <p className="text-sm text-slate-500">Выберите правильный ответ</p>
                </div>

                {/* Options */}
                <div className="space-y-3 mb-6">
                  <button className="w-full text-left p-4 rounded-xl border-2 border-slate-200 hover:border-teal-300 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full border-2 border-slate-300"></div>
                      <span className="font-medium text-slate-900">for</span>
                    </div>
                  </button>
                  <button className="w-full text-left p-4 rounded-xl border-2 border-teal-500 bg-teal-50">
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full border-2 border-teal-500 bg-teal-500 flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7"/></svg>
                      </div>
                      <span className="font-medium text-teal-700">while</span>
                    </div>
                  </button>
                  <button className="w-full text-left p-4 rounded-xl border-2 border-slate-200 hover:border-teal-300 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full border-2 border-slate-300"></div>
                      <span className="font-medium text-slate-900">do-while</span>
                    </div>
                  </button>
                  <button className="w-full text-left p-4 rounded-xl border-2 border-slate-200 hover:border-teal-300 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full border-2 border-slate-300"></div>
                      <span className="font-medium text-slate-900">loop</span>
                    </div>
                  </button>
                </div>

                {/* Hint */}
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-6">
                  <div className="flex items-start gap-3">
                    <span className="text-xl">💡</span>
                    <div>
                      <p className="font-medium text-amber-800 text-sm">Подсказка</p>
                      <p className="text-amber-700 text-sm">В Python нет цикла do-while, а loop — это не ключевое слово.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Button */}
              <div className="px-5 pb-6">
                <button className="w-full bg-teal-500 text-white font-semibold py-4 rounded-xl hover:bg-teal-600 transition-colors">
                  Проверить
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* БЛОК 3: Список курсов */}
        <section className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="bg-slate-800 text-white px-6 py-3 flex items-center justify-between">
            <span className="font-medium">Экран 3: Каталог курсов</span>
            <span className="text-xs bg-slate-700 px-2 py-1 rounded">Hi-Fi</span>
          </div>
          <div className="p-6 flex justify-center">
            <div className="w-[375px] bg-slate-50 rounded-3xl overflow-hidden shadow-xl border border-slate-200">
              {/* Status Bar */}
              <div className="bg-white px-6 py-2 flex items-center justify-between text-xs text-slate-600">
                <span>9:41</span>
                <div className="flex items-center gap-1">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12.01 21.49L23.64 7c-.45-.34-4.93-4-11.64-4C5.28 3 .81 6.66.36 7l11.63 14.49.01.01.01-.01z"/></svg>
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33v15.33C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V5.33C17 4.6 16.4 4 15.67 4z"/></svg>
                </div>
              </div>
              
              {/* Content */}
              <div className="bg-white px-5 py-4">
                {/* Header */}
                <h1 className="text-2xl font-bold text-slate-900 mb-4">Курсы</h1>
                
                {/* Search */}
                <div className="relative mb-4">
                  <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
                  <input type="text" placeholder="Поиск курсов..." className="w-full pl-12 pr-4 py-3 bg-slate-100 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-teal-500" />
                </div>

                {/* Filters */}
                <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
                  <button className="px-4 py-2 bg-teal-500 text-white text-sm font-medium rounded-full whitespace-nowrap">Все</button>
                  <button className="px-4 py-2 bg-slate-100 text-slate-600 text-sm font-medium rounded-full whitespace-nowrap">Программирование</button>
                  <button className="px-4 py-2 bg-slate-100 text-slate-600 text-sm font-medium rounded-full whitespace-nowrap">Языки</button>
                  <button className="px-4 py-2 bg-slate-100 text-slate-600 text-sm font-medium rounded-full whitespace-nowrap">Дизайн</button>
                </div>

                {/* Course Cards */}
                <div className="space-y-4">
                  {/* Course 1 */}
                  <div className="bg-gradient-to-br from-teal-500 to-emerald-600 rounded-2xl p-4 text-white">
                    <div className="flex justify-between items-start mb-3">
                      <span className="text-xs bg-white/20 px-2 py-1 rounded-full">Популярное</span>
                      <span className="text-2xl">🐍</span>
                    </div>
                    <h3 className="font-bold text-lg mb-1">Python для начинающих</h3>
                    <p className="text-white/80 text-sm mb-3">24 урока • 6 часов</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1">
                        <svg className="w-4 h-4 text-amber-300" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                        <span className="text-sm">4.9</span>
                      </div>
                      <span className="text-sm font-medium">Бесплатно</span>
                    </div>
                  </div>

                  {/* Course 2 */}
                  <div className="bg-white border border-slate-200 rounded-2xl p-4">
                    <div className="flex justify-between items-start mb-3">
                      <span className="text-xs bg-violet-100 text-violet-700 px-2 py-1 rounded-full">Новинка</span>
                      <span className="text-2xl">🇬🇧</span>
                    </div>
                    <h3 className="font-bold text-lg text-slate-900 mb-1">Английский B2</h3>
                    <p className="text-slate-500 text-sm mb-3">48 уроков • 12 часов</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1">
                        <svg className="w-4 h-4 text-amber-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                        <span className="text-sm text-slate-600">4.8</span>
                      </div>
                      <span className="text-sm font-medium text-teal-600">Premium</span>
                    </div>
                  </div>

                  {/* Course 3 */}
                  <div className="bg-white border border-slate-200 rounded-2xl p-4">
                    <div className="flex justify-between items-start mb-3">
                      <span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-1 rounded-full">В процессе</span>
                      <span className="text-2xl">📱</span>
                    </div>
                    <h3 className="font-bold text-lg text-slate-900 mb-1">UI/UX дизайн</h3>
                    <p className="text-slate-500 text-sm mb-3">32 урока • 8 часов</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1">
                        <svg className="w-4 h-4 text-amber-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                        <span className="text-sm text-slate-600">4.7</span>
                      </div>
                      <span className="text-sm font-medium text-slate-600">35% пройдено</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Navigation */}
              <div className="bg-white border-t border-slate-200 px-6 py-3 flex items-center justify-around">
                <div className="flex flex-col items-center text-slate-400">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>
                  <span className="text-xs mt-1">Главная</span>
                </div>
                <div className="flex flex-col items-center text-slate-400">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
                  <span className="text-xs mt-1">Поиск</span>
                </div>
                <div className="flex flex-col items-center text-teal-500">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>
                  <span className="text-xs mt-1 font-medium">Курсы</span>
                </div>
                <div className="flex flex-col items-center text-slate-400">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>
                  <span className="text-xs mt-1">Профиль</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* БЛОК 4: Карточка курса */}
        <section className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="bg-slate-800 text-white px-6 py-3 flex items-center justify-between">
            <span className="font-medium">Экран 4: Детали курса</span>
            <span className="text-xs bg-slate-700 px-2 py-1 rounded">Hi-Fi</span>
          </div>
          <div className="p-6 flex justify-center">
            <div className="w-[375px] bg-white rounded-3xl overflow-hidden shadow-xl border border-slate-200">
              {/* Hero */}
              <div className="bg-gradient-to-br from-teal-500 to-emerald-600 px-5 py-6 text-white relative">
                <button className="absolute top-4 left-4 w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7"/></svg>
                </button>
                <button className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>
                </button>
                <div className="text-center pt-8">
                  <span className="text-5xl mb-4 block">🐍</span>
                  <h1 className="text-2xl font-bold mb-2">Python для начинающих</h1>
                  <p className="text-white/80">От нуля до первых проектов</p>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 border-b border-slate-200">
                <div className="p-4 text-center border-r border-slate-200">
                  <p className="text-2xl font-bold text-slate-900">24</p>
                  <p className="text-xs text-slate-500">урока</p>
                </div>
                <div className="p-4 text-center border-r border-slate-200">
                  <p className="text-2xl font-bold text-slate-900">6ч</p>
                  <p className="text-xs text-slate-500">контента</p>
                </div>
                <div className="p-4 text-center">
                  <p className="text-2xl font-bold text-amber-500">4.9</p>
                  <p className="text-xs text-slate-500">рейтинг</p>
                </div>
              </div>

              {/* Content */}
              <div className="px-5 py-4">
                <h2 className="font-semibold text-slate-900 mb-3">О курсе</h2>
                <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                  Научитесь программировать на Python с нуля. Курс охватывает основы синтаксиса, 
                  работу с данными, циклы, функции и объектно-ориентированное программирование.
                </p>

                <h2 className="font-semibold text-slate-900 mb-3">Программа курса</h2>
                <div className="space-y-2">
                  <div className="flex items-center gap-3 p-3 bg-emerald-50 rounded-xl">
                    <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7"/></svg>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-slate-900">1. Введение в Python</p>
                      <p className="text-xs text-slate-500">4 урока • Пройдено</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-teal-50 rounded-xl border-2 border-teal-200">
                    <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center text-white text-sm font-bold">2</div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-slate-900">2. Переменные и типы данных</p>
                      <p className="text-xs text-teal-600">В процессе</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl">
                    <div className="w-8 h-8 bg-slate-300 rounded-full flex items-center justify-center text-white text-sm font-bold">3</div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-slate-900">3. Условия и ветвления</p>
                      <p className="text-xs text-slate-500">4 урока</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl">
                    <div className="w-8 h-8 bg-slate-300 rounded-full flex items-center justify-center text-white text-sm font-bold">4</div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-slate-900">4. Циклы</p>
                      <p className="text-xs text-slate-500">4 урока</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="px-5 pb-6">
                <button className="w-full bg-teal-500 text-white font-semibold py-4 rounded-xl hover:bg-teal-600 transition-colors">
                  Продолжить обучение
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* БЛОК 5: Профиль */}
        <section className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="bg-slate-800 text-white px-6 py-3 flex items-center justify-between">
            <span className="font-medium">Экран 5: Профиль</span>
            <span className="text-xs bg-slate-700 px-2 py-1 rounded">Hi-Fi</span>
          </div>
          <div className="p-6 flex justify-center">
            <div className="w-[375px] bg-slate-50 rounded-3xl overflow-hidden shadow-xl border border-slate-200">
              {/* Status Bar */}
              <div className="bg-white px-6 py-2 flex items-center justify-between text-xs text-slate-600">
                <span>9:41</span>
                <div className="flex items-center gap-1">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12.01 21.49L23.64 7c-.45-.34-4.93-4-11.64-4C5.28 3 .81 6.66.36 7l11.63 14.49.01.01.01-.01z"/></svg>
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33v15.33C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V5.33C17 4.6 16.4 4 15.67 4z"/></svg>
                </div>
              </div>
              
              {/* Content */}
              <div className="bg-white px-5 py-4">
                {/* Profile Header */}
                <div className="text-center mb-6">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-teal-400 to-emerald-500 flex items-center justify-center text-white text-3xl font-bold mx-auto mb-4">
                    А
                  </div>
                  <h1 className="text-xl font-bold text-slate-900">Алексей Иванов</h1>
                  <p className="text-slate-500 text-sm">Учится с марта 2024</p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-3 mb-6">
                  <div className="bg-amber-50 rounded-xl p-3 text-center">
                    <p className="text-2xl font-bold text-amber-600">🔥 12</p>
                    <p className="text-xs text-slate-500">Серия</p>
                  </div>
                  <div className="bg-teal-50 rounded-xl p-3 text-center">
                    <p className="text-2xl font-bold text-teal-600">1,847</p>
                    <p className="text-xs text-slate-500">XP</p>
                  </div>
                  <div className="bg-violet-50 rounded-xl p-3 text-center">
                    <p className="text-2xl font-bold text-violet-600">5</p>
                    <p className="text-xs text-slate-500">Курсов</p>
                  </div>
                </div>

                {/* Achievements */}
                <div className="mb-6">
                  <h2 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-3">Достижения</h2>
                  <div className="flex gap-3">
                    <div className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center text-2xl">🏆</div>
                    <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center text-2xl">⚡</div>
                    <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center text-2xl">🎯</div>
                    <div className="w-14 h-14 bg-violet-100 rounded-xl flex items-center justify-center text-2xl">🌟</div>
                    <div className="w-14 h-14 bg-slate-100 rounded-xl flex items-center justify-center text-2xl text-slate-400">+3</div>
                  </div>
                </div>

                {/* Settings Menu */}
                <div className="space-y-2">
                  <button className="w-full flex items-center gap-4 p-4 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors">
                    <div className="w-10 h-10 bg-slate-200 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                    </div>
                    <span className="flex-1 text-left font-medium text-slate-900">Настройки</span>
                    <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/></svg>
                  </button>
                  <button className="w-full flex items-center gap-4 p-4 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors">
                    <div className="w-10 h-10 bg-slate-200 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/></svg>
                    </div>
                    <span className="flex-1 text-left font-medium text-slate-900">Уведомления</span>
                    <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/></svg>
                  </button>
                  <button className="w-full flex items-center gap-4 p-4 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors">
                    <div className="w-10 h-10 bg-slate-200 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                    </div>
                    <span className="flex-1 text-left font-medium text-slate-900">Помощь</span>
                    <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/></svg>
                  </button>
                </div>
              </div>

              {/* Bottom Navigation */}
              <div className="bg-white border-t border-slate-200 px-6 py-3 flex items-center justify-around">
                <div className="flex flex-col items-center text-slate-400">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>
                  <span className="text-xs mt-1">Главная</span>
                </div>
                <div className="flex flex-col items-center text-slate-400">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
                  <span className="text-xs mt-1">Поиск</span>
                </div>
                <div className="flex flex-col items-center text-slate-400">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>
                  <span className="text-xs mt-1">Курсы</span>
                </div>
                <div className="flex flex-col items-center text-teal-500">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
                  <span className="text-xs mt-1 font-medium">Профиль</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* БЛОК 6: Сервисные состояния */}
        <section className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="bg-slate-800 text-white px-6 py-3 flex items-center justify-between">
            <span className="font-medium">Экран 6: Сервисные состояния</span>
            <span className="text-xs bg-slate-700 px-2 py-1 rounded">Hi-Fi</span>
          </div>
          <div className="p-6 grid md:grid-cols-3 gap-6">
            {/* Success */}
            <div className="w-[280px] mx-auto bg-white rounded-3xl overflow-hidden shadow-lg border border-slate-200">
              <div className="px-5 py-8 text-center">
                <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/></svg>
                </div>
                <h2 className="text-xl font-bold text-slate-900 mb-2">Отлично!</h2>
                <p className="text-slate-500 text-sm mb-6">Урок успешно пройден. Вы получили 10 XP!</p>
                <button className="w-full bg-emerald-500 text-white font-semibold py-3 rounded-xl">
                  Продолжить
                </button>
              </div>
            </div>

            {/* Error */}
            <div className="w-[280px] mx-auto bg-white rounded-3xl overflow-hidden shadow-lg border border-slate-200">
              <div className="px-5 py-8 text-center">
                <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg>
                </div>
                <h2 className="text-xl font-bold text-slate-900 mb-2">Ошибка</h2>
                <p className="text-slate-500 text-sm mb-6">Не удалось загрузить данные. Проверьте соединение.</p>
                <button className="w-full bg-red-500 text-white font-semibold py-3 rounded-xl">
                  Повторить
                </button>
              </div>
            </div>

            {/* Empty */}
            <div className="w-[280px] mx-auto bg-white rounded-3xl overflow-hidden shadow-lg border border-slate-200">
              <div className="px-5 py-8 text-center">
                <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"/></svg>
                </div>
                <h2 className="text-xl font-bold text-slate-900 mb-2">Пусто</h2>
                <p className="text-slate-500 text-sm mb-6">У вас пока нет сохранённых курсов.</p>
                <button className="w-full bg-teal-500 text-white font-semibold py-3 rounded-xl">
                  Найти курсы
                </button>
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  )
}
