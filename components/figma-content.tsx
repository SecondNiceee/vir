export function FigmaContent() {
  return (
    <div className="grid gap-8">
      {/* Block 1: Theme & Justification */}
      <div className="rounded-2xl border border-border bg-card p-8 shadow-sm">
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">1</div>
          <h4 className="text-xl font-bold text-foreground">Тема проекта и обоснование выбора</h4>
        </div>
        
        <div className="space-y-6">
          <div className="rounded-xl bg-muted/50 p-6">
            <h5 className="mb-3 font-semibold text-foreground">Название приложения</h5>
            <p className="text-2xl font-bold text-primary">LearnUp</p>
            <p className="mt-2 text-muted-foreground">Мобильное образовательное приложение для самостоятельного обучения</p>
          </div>
          
          <div className="rounded-xl bg-muted/50 p-6">
            <h5 className="mb-3 font-semibold text-foreground">Обоснование выбора темы</h5>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary"></span>
                <span><strong className="text-foreground">Актуальность:</strong> Рынок EdTech растет на 15-20% ежегодно, мобильное обучение становится основным форматом</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary"></span>
                <span><strong className="text-foreground">Проблема:</strong> Существующие приложения либо слишком общие (Stepic), либо узкоспециализированные (Duolingo — только языки)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary"></span>
                <span><strong className="text-foreground">Решение:</strong> Универсальная платформа с адаптивным обучением, микро-уроками и геймификацией для разных направлений</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary"></span>
                <span><strong className="text-foreground">Личный интерес:</strong> Опыт использования образовательных приложений, понимание болей пользователей</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Block 2: Target Audience */}
      <div className="rounded-2xl border border-border bg-card p-8 shadow-sm">
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">2</div>
          <h4 className="text-xl font-bold text-foreground">Целевая аудитория</h4>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-border bg-background p-6">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-2xl">
                <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <div>
                <h6 className="font-semibold text-foreground">Студенты</h6>
                <p className="text-sm text-muted-foreground">18-25 лет</p>
              </div>
            </div>
            <ul className="space-y-1.5 text-sm text-muted-foreground">
              <li>Дополнительное образование к вузу</li>
              <li>Подготовка к экзаменам</li>
              <li>Изучение новых навыков для карьеры</li>
            </ul>
          </div>
          
          <div className="rounded-xl border border-border bg-background p-6">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-2xl">
                <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h6 className="font-semibold text-foreground">Работающие специалисты</h6>
                <p className="text-sm text-muted-foreground">25-40 лет</p>
              </div>
            </div>
            <ul className="space-y-1.5 text-sm text-muted-foreground">
              <li>Повышение квалификации</li>
              <li>Смена профессии (рескиллинг)</li>
              <li>Обучение в свободное время</li>
            </ul>
          </div>
          
          <div className="rounded-xl border border-border bg-background p-6">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 text-2xl">
                <svg className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <div>
                <h6 className="font-semibold text-foreground">Саморазвивающиеся</h6>
                <p className="text-sm text-muted-foreground">Любой возраст</p>
              </div>
            </div>
            <ul className="space-y-1.5 text-sm text-muted-foreground">
              <li>Хобби и личные интересы</li>
              <li>Языки, творчество, наука</li>
              <li>Обучение ради удовольствия</li>
            </ul>
          </div>
          
          <div className="rounded-xl border border-border bg-background p-6">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-100 text-2xl">
                <svg className="h-6 w-6 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h6 className="font-semibold text-foreground">Занятые люди</h6>
                <p className="text-sm text-muted-foreground">Ограниченное время</p>
              </div>
            </div>
            <ul className="space-y-1.5 text-sm text-muted-foreground">
              <li>Микро-уроки по 5-15 минут</li>
              <li>Обучение в дороге</li>
              <li>Гибкий график без дедлайнов</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Block 3: User Scenarios */}
      <div className="rounded-2xl border border-border bg-card p-8 shadow-sm">
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">3</div>
          <h4 className="text-xl font-bold text-foreground">Пользовательские сценарии</h4>
        </div>
        
        <div className="space-y-4">
          <div className="rounded-xl bg-gradient-to-r from-blue-50 to-blue-100/50 p-5 dark:from-blue-950/30 dark:to-blue-900/20">
            <div className="mb-2 flex items-center gap-2">
              <span className="rounded-full bg-blue-600 px-3 py-1 text-xs font-medium text-white">Сценарий 1</span>
              <span className="font-semibold text-foreground">Быстрое обучение в метро</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Пользователь открывает приложение в метро, проходит один микро-урок (5 минут), 
              получает достижение за ежедневную серию, закрывает приложение до следующего дня.
            </p>
          </div>
          
          <div className="rounded-xl bg-gradient-to-r from-green-50 to-green-100/50 p-5 dark:from-green-950/30 dark:to-green-900/20">
            <div className="mb-2 flex items-center gap-2">
              <span className="rounded-full bg-green-600 px-3 py-1 text-xs font-medium text-white">Сценарий 2</span>
              <span className="font-semibold text-foreground">Подготовка к собеседованию</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Специалист выбирает трек «Python для собеседований», проходит тесты и практические задания, 
              отслеживает прогресс, получает рекомендации по слабым местам.
            </p>
          </div>
          
          <div className="rounded-xl bg-gradient-to-r from-purple-50 to-purple-100/50 p-5 dark:from-purple-950/30 dark:to-purple-900/20">
            <div className="mb-2 flex items-center gap-2">
              <span className="rounded-full bg-purple-600 px-3 py-1 text-xs font-medium text-white">Сценарий 3</span>
              <span className="font-semibold text-foreground">Изучение нового языка</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Студент проходит курс английского, тренирует произношение через голосовые упражнения, 
              соревнуется с друзьями в еженедельном рейтинге, разблокирует премиум-контент.
            </p>
          </div>
          
          <div className="rounded-xl bg-gradient-to-r from-orange-50 to-orange-100/50 p-5 dark:from-orange-950/30 dark:to-orange-900/20">
            <div className="mb-2 flex items-center gap-2">
              <span className="rounded-full bg-orange-600 px-3 py-1 text-xs font-medium text-white">Сценарий 4</span>
              <span className="font-semibold text-foreground">Офлайн-обучение в поездке</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Пользователь скачивает курс перед поездкой, проходит уроки без интернета, 
              прогресс синхронизируется при подключении к сети.
            </p>
          </div>
        </div>
      </div>

      {/* Block 4: Competitor Analysis */}
      <div className="rounded-2xl border border-border bg-card p-8 shadow-sm">
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">4</div>
          <h4 className="text-xl font-bold text-foreground">Анализ аналогов</h4>
        </div>
        
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Duolingo */}
          <div className="rounded-xl border border-border p-6">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#58CC02] text-xl font-bold text-white">D</div>
              <div>
                <h6 className="font-bold text-foreground">Duolingo</h6>
                <p className="text-sm text-muted-foreground">Изучение языков</p>
              </div>
            </div>
            <div className="space-y-3">
              <div>
                <p className="mb-1 text-xs font-medium uppercase text-green-600">Сильные стороны</p>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>+ Отличная геймификация (серии, XP, лиги)</li>
                  <li>+ Микро-уроки по 5 минут</li>
                  <li>+ Бесплатная базовая версия</li>
                </ul>
              </div>
              <div>
                <p className="mb-1 text-xs font-medium uppercase text-red-600">Слабые стороны</p>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>- Только языки, узкая специализация</li>
                  <li>- Навязчивые уведомления</li>
                  <li>- Ограниченная глубина материала</li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Stepic */}
          <div className="rounded-xl border border-border p-6">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#1A1A2E] text-xl font-bold text-white">S</div>
              <div>
                <h6 className="font-bold text-foreground">Stepic</h6>
                <p className="text-sm text-muted-foreground">Образовательная платформа</p>
              </div>
            </div>
            <div className="space-y-3">
              <div>
                <p className="mb-1 text-xs font-medium uppercase text-green-600">Сильные стороны</p>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>+ Много бесплатных курсов на русском</li>
                  <li>+ Автопроверка кода</li>
                  <li>+ Офлайн-режим</li>
                </ul>
              </div>
              <div>
                <p className="mb-1 text-xs font-medium uppercase text-red-600">Слабые стороны</p>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>- Устаревший дизайн</li>
                  <li>- Слабая геймификация</li>
                  <li>- Нет персонализации</li>
                </ul>
              </div>
              <div>
                <img src="/images/stepic-screenshot.png" alt="Stepic интерфейс" className="h-32 rounded-lg object-cover" />
              </div>
            </div>
          </div>
          
          {/* Sololearn */}
          <div className="rounded-xl border border-border p-6">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#149EF2] text-xl font-bold text-white">SL</div>
              <div>
                <h6 className="font-bold text-foreground">Sololearn</h6>
                <p className="text-sm text-muted-foreground">Мобильное обучение программированию</p>
              </div>
            </div>
            <div className="space-y-3">
              <div>
                <p className="mb-1 text-xs font-medium uppercase text-green-600">Сильные стороны</p>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>+ Отличная геймификация</li>
                  <li>+ Встроенный редактор кода</li>
                  <li>+ Активное сообщество</li>
                </ul>
              </div>
              <div>
                <p className="mb-1 text-xs font-medium uppercase text-red-600">Слабые стороны</p>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>- Только программирование</li>
                  <li>- Много рекламы</li>
                  <li>- Поверхностные уроки</li>
                </ul>
              </div>
              <div>
                <img src="/images/sololearn-screenshot.png" alt="Sololearn интерфейс" className="h-32 rounded-lg object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Block 5: Comparison Table */}
      <div className="rounded-2xl border border-border bg-card p-8 shadow-sm">
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">5</div>
          <h4 className="text-xl font-bold text-foreground">Сравнительная таблица характеристик</h4>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="px-4 py-3 text-left font-semibold text-foreground">Критерий</th>
                <th className="px-4 py-3 text-center font-semibold text-foreground">Duolingo</th>
                <th className="px-4 py-3 text-center font-semibold text-foreground">Stepic</th>
                <th className="px-4 py-3 text-center font-semibold text-foreground">Sololearn</th>
                <th className="bg-primary/10 px-4 py-3 text-center font-semibold text-primary">LearnUp</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              <tr>
                <td className="px-4 py-3 font-medium text-foreground">Микро-уроки (5-15 мин)</td>
                <td className="px-4 py-3 text-center text-green-600">Да</td>
                <td className="px-4 py-3 text-center text-yellow-600">Частично</td>
                <td className="px-4 py-3 text-center text-green-600">Да</td>
                <td className="bg-primary/10 px-4 py-3 text-center font-medium text-green-600">Да</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-foreground">Геймификация</td>
                <td className="px-4 py-3 text-center text-green-600">Отличная</td>
                <td className="px-4 py-3 text-center text-red-600">Нет</td>
                <td className="px-4 py-3 text-center text-green-600">Хорошая</td>
                <td className="bg-primary/10 px-4 py-3 text-center font-medium text-green-600">Продвинутая</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-foreground">Разнообразие тем</td>
                <td className="px-4 py-3 text-center text-red-600">Только языки</td>
                <td className="px-4 py-3 text-center text-green-600">Широкое</td>
                <td className="px-4 py-3 text-center text-red-600">Только код</td>
                <td className="bg-primary/10 px-4 py-3 text-center font-medium text-green-600">Широкое</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-foreground">Адаптивное обучение (AI)</td>
                <td className="px-4 py-3 text-center text-green-600">Да</td>
                <td className="px-4 py-3 text-center text-red-600">Нет</td>
                <td className="px-4 py-3 text-center text-yellow-600">Частично</td>
                <td className="bg-primary/10 px-4 py-3 text-center font-medium text-green-600">Да</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-foreground">Офлайн-режим</td>
                <td className="px-4 py-3 text-center text-green-600">Да</td>
                <td className="px-4 py-3 text-center text-green-600">Да</td>
                <td className="px-4 py-3 text-center text-green-600">Да</td>
                <td className="bg-primary/10 px-4 py-3 text-center font-medium text-green-600">Да</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-foreground">Бесплатная версия</td>
                <td className="px-4 py-3 text-center text-green-600">Да</td>
                <td className="px-4 py-3 text-center text-green-600">Да</td>
                <td className="px-4 py-3 text-center text-green-600">Да</td>
                <td className="bg-primary/10 px-4 py-3 text-center font-medium text-green-600">Да</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-foreground">Мобильный UX</td>
                <td className="px-4 py-3 text-center text-green-600">Отличный</td>
                <td className="px-4 py-3 text-center text-yellow-600">Средний</td>
                <td className="px-4 py-3 text-center text-green-600">Хороший</td>
                <td className="bg-primary/10 px-4 py-3 text-center font-medium text-green-600">Отличный</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Block 6: Conclusions */}
      <div className="rounded-2xl border border-border bg-card p-8 shadow-sm">
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">6</div>
          <h4 className="text-xl font-bold text-foreground">Выводы и проектные ориентиры</h4>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl bg-green-50 p-6 dark:bg-green-950/30">
            <h5 className="mb-4 font-semibold text-green-700 dark:text-green-400">Что возьмем от аналогов</h5>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-green-600">+</span>
                <span><strong>От Duolingo:</strong> геймификация, серии, микро-уроки, интуитивный мобильный UX</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-green-600">+</span>
                <span><strong>От Stepic:</strong> автопроверка заданий, офлайн-режим, курсы на русском</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-green-600">+</span>
                <span><strong>От Sololearn:</strong> встроенный редактор кода, активное сообщество</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-green-600">+</span>
                <span><strong>От Sololearn:</strong> встроенный редактор кода, активное сообщество</span>
              </li>
            </ul>
          </div>
          
          <div className="rounded-xl bg-blue-50 p-6 dark:bg-blue-950/30">
            <h5 className="mb-4 font-semibold text-blue-700 dark:text-blue-400">Уникальные преимущества LearnUp</h5>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-blue-600">*</span>
                <span>Универсальность: языки, программирование, дизайн, бизнес в одном приложении</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-blue-600">*</span>
                <span>Баланс: глубина Stepic + увлекательность Duolingo</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-blue-600">*</span>
                <span>Адаптивность: AI подстраивает сложность под пользователя</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-blue-600">*</span>
                <span>Доступность: freemium-модель с качественным бесплатным контентом</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-6 rounded-xl border-2 border-primary/20 bg-primary/5 p-6">
          <h5 className="mb-3 font-semibold text-foreground">Главный вывод</h5>
          <p className="text-muted-foreground">
            LearnUp займет нишу между узкоспециализированным Duolingo и образовательным Stepic, 
            предлагая <strong className="text-foreground">универсальную платформу микро-обучения</strong> с 
            современной геймификацией, адаптивными AI-треками и отличным мобильным UX — 
            всё, что нужно занятым людям для эффективного саморазвития.
          </p>
        </div>
      </div>
    </div>
  )
}
