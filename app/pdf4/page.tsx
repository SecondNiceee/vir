import { HomeScreen, LessonScreen, CatalogScreen, CourseDetailsScreen, ProfileScreen } from "@/components/mockup-screens"

export default function Pdf4Page() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-slate-900 text-white sticky top-0 z-10 print:hidden">
        <div className="max-w-5xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl font-semibold">ПЗ №4 — PDF Презентация</h1>
              <p className="text-sm text-slate-400">10 слайдов для сдачи</p>
            </div>
            <div className="flex gap-3">
              <a href="https://www.figma.com/design/drgb5K6Uy1RSZPrIkdSa2b/Untitled?node-id=0-1&t=DqGdWAbo1FMVYyst-1" target="_blank" rel="noopener noreferrer" className="text-sm text-green-400 hover:text-green-300">Figma-проект</a>
              <a href="/figma4" className="text-sm text-emerald-400 hover:text-emerald-300">Figma-контент</a>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-8">
        
        <div className="space-y-8 print:space-y-0">
          
          {/* Слайд 1 - Титульный */}
          <div className="bg-gradient-to-br from-emerald-600 to-teal-700 rounded-2xl shadow-xl overflow-hidden flex flex-col print:rounded-none print:shadow-none print:break-after-page">
            <div className="flex flex-col items-center justify-center text-white p-6">
              <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                </svg>
              </div>
              <h1 className="text-4xl font-bold mb-2">LearnUp</h1>
              <p className="text-xl text-white/80 mb-8">Hi-Fi макеты интерфейса</p>
              <div className="text-sm text-white/60">
                <p>Практическое задание №4</p>
                <p>Визуальный дизайн и высокодетализированные макеты</p>
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

          {/* Слайд 2 - Цели и задачи */}
          <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden flex flex-col print:rounded-none print:shadow-none print:border-0 print:break-after-page">
            <div className="bg-slate-800 text-white px-6 py-3">
              <h2 className="text-xl font-bold">Этап 1: Цели и задачи Hi-Fi проектирования</h2>
            </div>
            <div className="p-5">
              <div className="grid grid-cols-2 gap-8 h-full">
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-4">Цель работы</h3>
                  <div className="bg-emerald-50 rounded-xl p-5 mb-6">
                    <p className="text-slate-700">
                      Перевести Lo-Fi прототипы и дизайн-систему в визуально проработанные Hi-Fi макеты, 
                      отражающие стиль продукта LearnUp и принципы UX.
                    </p>
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-4">Исходные материалы</h3>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-teal-500"></span>
                      Lo-Fi прототипы из ПЗ №2
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-teal-500"></span>
                      UI-кит и дизайн-система из ПЗ №3
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-teal-500"></span>
                      User Flow и сценарии из ПЗ №1-2
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-4">Ключевые экраны</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 bg-slate-50 rounded-lg p-3">
                      <div className="w-8 h-8 bg-teal-500 rounded-lg flex items-center justify-center text-white font-bold text-sm">1</div>
                      <span className="text-slate-700">Главный экран (Home)</span>
                    </div>
                    <div className="flex items-center gap-3 bg-slate-50 rounded-lg p-3">
                      <div className="w-8 h-8 bg-teal-500 rounded-lg flex items-center justify-center text-white font-bold text-sm">2</div>
                      <span className="text-slate-700">Прохождение урока</span>
                    </div>
                    <div className="flex items-center gap-3 bg-slate-50 rounded-lg p-3">
                      <div className="w-8 h-8 bg-teal-500 rounded-lg flex items-center justify-center text-white font-bold text-sm">3</div>
                      <span className="text-slate-700">Каталог курсов</span>
                    </div>
                    <div className="flex items-center gap-3 bg-slate-50 rounded-lg p-3">
                      <div className="w-8 h-8 bg-teal-500 rounded-lg flex items-center justify-center text-white font-bold text-sm">4</div>
                      <span className="text-slate-700">Детали курса</span>
                    </div>
                    <div className="flex items-center gap-3 bg-slate-50 rounded-lg p-3">
                      <div className="w-8 h-8 bg-teal-500 rounded-lg flex items-center justify-center text-white font-bold text-sm">5</div>
                      <span className="text-slate-700">Профиль пользователя</span>
                    </div>
                    <div className="flex items-center gap-3 bg-slate-50 rounded-lg p-3">
                      <div className="w-8 h-8 bg-teal-500 rounded-lg flex items-center justify-center text-white font-bold text-sm">6</div>
                      <span className="text-slate-700">Сервисные состояния</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-slate-50 px-6 py-3 text-center text-slate-500 text-sm print:hidden">
              Цели и задачи
            </div>
          </div>

          {/* Слайд 3 - Главный экран */}
          <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden flex flex-col print:rounded-none print:shadow-none print:border-0 print:break-after-page">
            <div className="bg-slate-800 text-white px-6 py-3">
              <h2 className="text-xl font-bold">Главный экран (Home)</h2>
            </div>
            <div className="p-5 flex gap-6">
              {/* Preview */}
              <div className="w-56 h-[380px] flex-shrink-0 overflow-hidden">
                <div className="transform scale-[0.45] origin-top-left">
                  <HomeScreen />
                </div>
              </div>

              {/* Description */}
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-slate-900 mb-4">Ключевые элементы</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-amber-50 rounded-lg p-4">
                    <h4 className="font-semibold text-amber-800 mb-2">Серия дней</h4>
                    <p className="text-sm text-slate-600">Карточка с визуализацией streak, мотивация через геймификацию</p>
                  </div>
                  <div className="bg-teal-50 rounded-lg p-4">
                    <h4 className="font-semibold text-teal-800 mb-2">Продолжить обучение</h4>
                    <p className="text-sm text-slate-600">Быстрый доступ к последнему курсу с прогресс-баром</p>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-4">
                    <h4 className="font-semibold text-blue-800 mb-2">Дневная цель</h4>
                    <p className="text-sm text-slate-600">Круговой прогресс XP, мотивация к завершению</p>
                  </div>
                  <div className="bg-violet-50 rounded-lg p-4">
                    <h4 className="font-semibold text-violet-800 mb-2">Категории</h4>
                    <p className="text-sm text-slate-600">Быстрая навигация по направлениям обучения</p>
                  </div>
                </div>
                <div className="mt-4 bg-slate-50 rounded-lg p-4">
                  <h4 className="font-semibold text-slate-700 mb-2">Визуальная иерархия</h4>
                  <p className="text-sm text-slate-600">
                    Фокус внимания: Приветствие → Streak → Продолжить → Цель → Категории. 
                    Градиенты и иконки выделяют важные зоны.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-slate-50 px-6 py-3 text-center text-slate-500 text-sm print:hidden">
              Главный экран
            </div>
          </div>

          {/* Слайд 4 - Экран урока */}
          <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden flex flex-col print:rounded-none print:shadow-none print:border-0 print:break-after-page">
            <div className="bg-slate-800 text-white px-6 py-3">
              <h2 className="text-xl font-bold">Экран прохождения урока</h2>
            </div>
            <div className="p-5 flex gap-6">
              {/* Preview */}
              <div className="w-56 h-[380px] flex-shrink-0 overflow-hidden">
                <div className="transform scale-[0.45] origin-top-left">
                  <LessonScreen />
                </div>
              </div>

              {/* Description */}
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-slate-900 mb-4">Структура урока</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-teal-500 rounded-lg flex items-center justify-center text-white font-bold text-sm flex-shrink-0">1</div>
                    <div>
                      <h4 className="font-semibold text-slate-900">Header с прогрессом</h4>
                      <p className="text-sm text-slate-600">Кнопка закрытия, прогресс-бар урока, счётчик шагов</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-teal-500 rounded-lg flex items-center justify-center text-white font-bold text-sm flex-shrink-0">2</div>
                    <div>
                      <h4 className="font-semibold text-slate-900">Блок вопроса</h4>
                      <p className="text-sm text-slate-600">Тип задания (badge), текст вопроса, инструкция</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-teal-500 rounded-lg flex items-center justify-center text-white font-bold text-sm flex-shrink-0">3</div>
                    <div>
                      <h4 className="font-semibold text-slate-900">Варианты ответов</h4>
                      <p className="text-sm text-slate-600">Radio-кнопки с состояниями: default, selected, correct, wrong</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-amber-500 rounded-lg flex items-center justify-center text-white font-bold text-sm flex-shrink-0">!</div>
                    <div>
                      <h4 className="font-semibold text-slate-900">Подсказка</h4>
                      <p className="text-sm text-slate-600">Опциональный блок помощи с иконкой лампочки</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-slate-50 px-6 py-3 text-center text-slate-500 text-sm print:hidden">
              Экран урока
            </div>
          </div>

          {/* Слайд 5 - Каталог курсов */}
          <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden flex flex-col print:rounded-none print:shadow-none print:border-0 print:break-after-page">
            <div className="bg-slate-800 text-white px-6 py-3">
              <h2 className="text-xl font-bold">Каталог курсов</h2>
            </div>
            <div className="p-5 flex gap-6">
              {/* Preview */}
              <div className="w-56 h-[380px] flex-shrink-0 overflow-hidden">
                <div className="transform scale-[0.45] origin-top-left">
                  <CatalogScreen />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-slate-900 mb-4">Компоненты экрана</h3>
                <div className="space-y-3">
                  <div className="bg-slate-50 rounded-lg p-4">
                    <h4 className="font-semibold text-slate-800 mb-1">Поиск</h4>
                    <p className="text-sm text-slate-600">Input field с иконкой, placeholder</p>
                  </div>
                  <div className="bg-slate-50 rounded-lg p-4">
                    <h4 className="font-semibold text-slate-800 mb-1">Фильтры</h4>
                    <p className="text-sm text-slate-600">Горизонтальный scroll chips: Все, Программирование, Языки, Дизайн</p>
                  </div>
                  <div className="bg-slate-50 rounded-lg p-4">
                    <h4 className="font-semibold text-slate-800 mb-1">Карточки курсов</h4>
                    <p className="text-sm text-slate-600">Gradient hero / white cards, badge, emoji, rating, price/status</p>
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mt-4 mb-3">Типы карточек</h3>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-gradient-to-r from-teal-500 to-emerald-600 rounded-lg p-3 text-white">
                    <span className="text-xs bg-white/20 px-2 py-0.5 rounded-full">Популярное</span>
                    <p className="font-semibold text-sm mt-1">Featured Card</p>
                  </div>
                  <div className="bg-white border border-slate-200 rounded-lg p-3">
                    <span className="text-xs bg-violet-100 text-violet-700 px-2 py-0.5 rounded-full">Новинка</span>
                    <p className="font-semibold text-slate-900 text-sm mt-1">Standard Card</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-slate-50 px-6 py-3 text-center text-slate-500 text-sm print:hidden">
              Каталог курсов
            </div>
          </div>

          {/* Слайд 6 - Детали курса */}
          <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden flex flex-col print:rounded-none print:shadow-none print:border-0 print:break-after-page">
            <div className="bg-slate-800 text-white px-6 py-3">
              <h2 className="text-xl font-bold">Экран деталей курса</h2>
            </div>
            <div className="p-5 flex gap-6">
              {/* Preview */}
              <div className="w-56 h-[380px] flex-shrink-0 overflow-hidden">
                <div className="transform scale-[0.45] origin-top-left">
                  <CourseDetailsScreen />
                </div>
              </div>
              <div className="flex-1">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <h3 className="text-sm font-semibold text-slate-500 uppercase">Hero-секция</h3>
                    <div className="bg-gradient-to-br from-teal-500 to-emerald-600 rounded-xl p-3 text-white text-center">
                      <span className="text-2xl block mb-1">🐍</span>
                      <p className="font-bold text-sm">Python</p>
                      <p className="text-xs text-white/70">Gradient header</p>
                    </div>
                    <p className="text-xs text-slate-600">Back / Like кнопки, название курса</p>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-sm font-semibold text-slate-500 uppercase">Статистика</h3>
                    <div className="grid grid-cols-3 gap-1">
                      <div className="bg-slate-50 rounded-lg p-2 text-center">
                        <p className="text-sm font-bold text-slate-900">24</p>
                        <p className="text-[10px] text-slate-500">урока</p>
                      </div>
                      <div className="bg-slate-50 rounded-lg p-2 text-center">
                        <p className="text-sm font-bold text-slate-900">6ч</p>
                        <p className="text-[10px] text-slate-500">контента</p>
                      </div>
                      <div className="bg-slate-50 rounded-lg p-2 text-center">
                        <p className="text-sm font-bold text-amber-500">4.9</p>
                        <p className="text-[10px] text-slate-500">рейтинг</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-4 space-y-3">
                  <h3 className="text-sm font-semibold text-slate-500 uppercase">Программа курса</h3>
                  <div className="flex gap-2">
                    <div className="flex items-center gap-1 bg-emerald-50 rounded-lg p-2">
                      <div className="w-4 h-4 bg-emerald-500 rounded-full flex items-center justify-center">
                        <svg className="w-2 h-2 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7"/></svg>
                      </div>
                      <span className="text-xs">Пройдено</span>
                    </div>
                    <div className="flex items-center gap-1 bg-teal-50 border-2 border-teal-300 rounded-lg p-2">
                      <div className="w-4 h-4 bg-teal-500 rounded-full text-white text-[8px] flex items-center justify-center font-bold">2</div>
                      <span className="text-xs">В процессе</span>
                    </div>
                    <div className="flex items-center gap-1 bg-slate-50 rounded-lg p-2">
                      <div className="w-4 h-4 bg-slate-300 rounded-full text-white text-[8px] flex items-center justify-center font-bold">3</div>
                      <span className="text-xs">Заблокировано</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-slate-50 px-6 py-3 text-center text-slate-500 text-sm print:hidden">
              Детали курса
            </div>
          </div>

          {/* Слайд 7 - Профиль */}
          <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden flex flex-col print:rounded-none print:shadow-none print:border-0 print:break-after-page">
            <div className="bg-slate-800 text-white px-6 py-3">
              <h2 className="text-xl font-bold">Экран профиля</h2>
            </div>
            <div className="p-5 flex gap-6">
              {/* Preview */}
              <div className="w-56 h-[380px] flex-shrink-0 overflow-hidden">
                <div className="transform scale-[0.45] origin-top-left">
                  <ProfileScreen />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-slate-900 mb-4">Структура профиля</h3>
                <div className="space-y-3 mb-4">
                  <div className="bg-gradient-to-r from-teal-100 to-emerald-100 rounded-lg p-3">
                    <h4 className="font-semibold text-teal-800 mb-1 text-sm">Аватар и имя</h4>
                    <p className="text-xs text-slate-600">Круглый аватар с gradient, имя, дата регистрации</p>
                  </div>
                  <div className="bg-slate-50 rounded-lg p-3">
                    <h4 className="font-semibold text-slate-800 mb-1 text-sm">Статистика</h4>
                    <p className="text-xs text-slate-600">3 карточки: Streak, XP, Курсы — с emoji и цветами</p>
                  </div>
                  <div className="bg-slate-50 rounded-lg p-3">
                    <h4 className="font-semibold text-slate-800 mb-1 text-sm">Достижения</h4>
                    <p className="text-xs text-slate-600">Горизонтальный ряд badges с emoji</p>
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Геймификация</h3>
                <div className="grid grid-cols-3 gap-2 mb-4">
                  <div className="bg-amber-50 rounded-xl p-2 text-center">
                    <p className="text-lg mb-0.5">🔥</p>
                    <p className="font-bold text-amber-600 text-sm">12</p>
                    <p className="text-[10px] text-slate-500">Серия</p>
                  </div>
                  <div className="bg-teal-50 rounded-xl p-2 text-center">
                    <p className="text-lg mb-0.5">⚡</p>
                    <p className="font-bold text-teal-600 text-sm">1,847</p>
                    <p className="text-[10px] text-slate-500">XP</p>
                  </div>
                  <div className="bg-violet-50 rounded-xl p-2 text-center">
                    <p className="text-lg mb-0.5">📚</p>
                    <p className="font-bold text-violet-600 text-sm">5</p>
                    <p className="text-[10px] text-slate-500">Курсов</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center text-base">🏆</div>
                  <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center text-base">⚡</div>
                  <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center text-base">🎯</div>
                  <div className="w-10 h-10 bg-violet-100 rounded-xl flex items-center justify-center text-base">🌟</div>
                </div>
              </div>
            </div>
            <div className="bg-slate-50 px-6 py-3 text-center text-slate-500 text-sm print:hidden">
              Профиль
            </div>
          </div>

          {/* Слайд 8 - Сервисные состояния */}
          <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden flex flex-col print:rounded-none print:shadow-none print:border-0 print:break-after-page">
            <div className="bg-slate-800 text-white px-6 py-3">
              <h2 className="text-xl font-bold">Сервисные состояния</h2>
            </div>
            <div className="p-5">
              <div className="grid grid-cols-3 gap-6 h-full">
                {/* Success */}
                <div className="bg-emerald-50 rounded-xl p-6 text-center flex flex-col items-center justify-center">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/></svg>
                  </div>
                  <h3 className="font-bold text-emerald-800 mb-2">Success</h3>
                  <p className="text-sm text-slate-600 mb-4">Урок пройден, XP получены</p>
                  <div className="bg-emerald-500 text-white text-sm font-medium py-2 px-4 rounded-lg">Продолжить</div>
                </div>

                {/* Error */}
                <div className="bg-red-50 rounded-xl p-6 text-center flex flex-col items-center justify-center">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg>
                  </div>
                  <h3 className="font-bold text-red-800 mb-2">Error</h3>
                  <p className="text-sm text-slate-600 mb-4">Ошибка загрузки данных</p>
                  <div className="bg-red-500 text-white text-sm font-medium py-2 px-4 rounded-lg">Повторить</div>
                </div>

                {/* Empty */}
                <div className="bg-slate-50 rounded-xl p-6 text-center flex flex-col items-center justify-center">
                  <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"/></svg>
                  </div>
                  <h3 className="font-bold text-slate-700 mb-2">Empty State</h3>
                  <p className="text-sm text-slate-600 mb-4">Нет сохранённых курсов</p>
                  <div className="bg-teal-500 text-white text-sm font-medium py-2 px-4 rounded-lg">Найти курсы</div>
                </div>
              </div>
            </div>
            <div className="bg-slate-50 px-6 py-3 text-center text-slate-500 text-sm print:hidden">
              Сервисные состояния
            </div>
          </div>

          {/* Слайд 9 - Визуальная иерархия */}
          <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden flex flex-col print:rounded-none print:shadow-none print:border-0 print:break-after-page">
            <div className="bg-slate-800 text-white px-6 py-3">
              <h2 className="text-xl font-bold">Визуальная иерархия и согласованность</h2>
            </div>
            <div className="p-5">
              <div className="grid grid-cols-2 gap-8 h-full">
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-4">Принципы иерархии</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-teal-500 rounded-lg flex items-center justify-center text-white font-bold flex-shrink-0">1</div>
                      <div>
                        <h4 className="font-semibold text-slate-900">Размер и контраст</h4>
                        <p className="text-sm text-slate-600">Крупные заголовки, жирные кнопки CTA, тонкий вспомогательный текст</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-teal-500 rounded-lg flex items-center justify-center text-white font-bold flex-shrink-0">2</div>
                      <div>
                        <h4 className="font-semibold text-slate-900">Цвет и акценты</h4>
                        <p className="text-sm text-slate-600">Teal для primary действий, градиенты для featured, нейтральные для secondary</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-teal-500 rounded-lg flex items-center justify-center text-white font-bold flex-shrink-0">3</div>
                      <div>
                        <h4 className="font-semibold text-slate-900">Пространство</h4>
                        <p className="text-sm text-slate-600">Группировка связанных элементов, отступы между секциями</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-4">Согласованность экранов</h3>
                  <div className="bg-slate-50 rounded-xl p-4 space-y-3">
                    <div className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/></svg>
                      <span className="text-sm text-slate-700">Единая цветовая палитра (Teal, Violet, Slate)</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/></svg>
                      <span className="text-sm text-slate-700">Одинаковые радиусы скругления (xl, 2xl)</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/></svg>
                      <span className="text-sm text-slate-700">Консистентная типографика (Inter)</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/></svg>
                      <span className="text-sm text-slate-700">Общая навигация (Tab Bar)</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/></svg>
                      <span className="text-sm text-slate-700">Система отступов (8px grid)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-slate-50 px-6 py-3 text-center text-slate-500 text-sm print:hidden">
              Визуальная иерархия
            </div>
          </div>

          {/* Слайд 10 - Итоги */}
          <div className="bg-gradient-to-br from-emerald-600 to-teal-700 rounded-2xl shadow-xl overflow-hidden flex flex-col print:rounded-none print:shadow-none print:break-after-page">
            <div className="flex flex-col items-center justify-center text-white p-6">
              <h1 className="text-2xl font-bold mb-4 text-center">Итоги ПЗ №4</h1>
              <div className="grid grid-cols-3 gap-4 mb-5">
                <div className="bg-white/10 rounded-xl p-3 text-center">
                  <p className="text-2xl font-bold">6</p>
                  <p className="text-xs text-white/70">Hi-Fi экранов</p>
                </div>
                <div className="bg-white/10 rounded-xl p-3 text-center">
                  <p className="text-2xl font-bold">3</p>
                  <p className="text-xs text-white/70">Сервисных состояния</p>
                </div>
                <div className="bg-white/10 rounded-xl p-3 text-center">
                  <p className="text-2xl font-bold">100%</p>
                  <p className="text-xs text-white/70">UI-кит применён</p>
                </div>
              </div>
              <div className="text-center">
                <p className="text-white/80 text-sm mb-1">Следующий этап:</p>
                <p className="text-lg font-semibold">ПЗ №5 — Интерактивный прототип и презентация</p>
              </div>
            </div>
            <div className="bg-black/20 px-6 py-3 text-center text-white/60 text-sm">
              <p>Figma: <a href="https://www.figma.com/design/drgb5K6Uy1RSZPrIkdSa2b/Untitled?node-id=0-1&t=DqGdWAbo1FMVYyst-1" target="_blank" rel="noopener noreferrer" className="underline hover:text-white">https://www.figma.com/design/drgb5K6Uy1RSZPrIkdSa2b/Untitled?node-id=0-1&t=DqGdWAbo1FMVYyst-1</a></p>
            </div>
          </div>

        </div>
      </main>
    </div>
  )
}
