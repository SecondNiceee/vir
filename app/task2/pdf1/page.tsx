export default function Task2Pdf1Page() {
  return (
    <div className="min-h-screen bg-slate-100">
      {/* Header */}
      <header className="bg-slate-900 text-white sticky top-0 z-10 print:hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <div>
              <h1 className="text-lg sm:text-xl font-semibold">ПЗ №1 — PDF Презентация</h1>
              <p className="text-sm text-slate-400">10 слайдов для сдачи</p>
            </div>
            <div className="flex gap-4">
              <a href="/task2" className="text-sm text-slate-400 hover:text-white">← К списку</a>
              <a href="/task2/figma1" className="text-sm text-blue-400 hover:text-blue-300">Figma-контент</a>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-10">
        <div className="space-y-6 sm:space-y-8 print:space-y-0">

          {/* Слайд 1 — Титульный */}
          <div className="bg-gradient-to-br from-orange-500 to-red-600 rounded-xl sm:rounded-2xl shadow-lg overflow-hidden print:rounded-none print:shadow-none print:break-after-page">
            <div className="flex flex-col items-center justify-center text-white p-4 sm:p-8">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-3 sm:mb-4">
                <svg className="w-8 h-8 sm:w-10 sm:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h1 className="text-2xl sm:text-3xl font-bold mb-2 text-center">QuickDrop</h1>
              <p className="text-base sm:text-lg text-white/80 mb-4 sm:mb-5 text-center">Мобильный сервис доставки</p>
              <div className="text-xs sm:text-sm text-white/60 text-center">
                <p>Практическое задание №1</p>
                <p>Выбор и аналитическое исследование темы мобильного интерфейса</p>
              </div>
              <div className="mt-4 sm:mt-5 text-xs sm:text-sm text-white/80 text-center">
                <p className="font-medium">Подготовил: Титов Николай</p>
                <p>ТКБО-02-23</p>
              </div>
            </div>
          </div>

          {/* Слайд 2 — Выбор темы */}
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg overflow-hidden print:rounded-none print:shadow-none print:border-0 print:break-after-page">
            <div className="bg-slate-800 text-white px-4 sm:px-6 py-2 sm:py-3">
              <h2 className="text-lg sm:text-xl font-bold">Этап 1: Выбор темы</h2>
            </div>
            <div className="p-4 sm:p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-slate-900 mb-3 sm:mb-4">Тема проекта</h3>
                  <div className="bg-orange-50 rounded-xl p-4 sm:p-6 border border-orange-100">
                    <p className="text-xl sm:text-2xl font-bold text-orange-600 mb-2">QuickDrop</p>
                    <p className="text-sm sm:text-base text-slate-600">Мобильный сервис быстрой доставки с живым трекингом курьера и единым интерфейсом для еды, товаров и посылок</p>
                  </div>
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-slate-900 mb-3 sm:mb-4">Обоснование выбора</h3>
                  <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-slate-700">
                    {[
                      'Рынок доставки растёт на 35% ежегодно',
                      'Сложный UX: карты, трекинг, чат, оплата',
                      'Множество аналогов для анализа паттернов',
                      'Высокая частота использования — ежедневно',
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="w-5 h-5 sm:w-6 sm:h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Слайд 3 — Целевая аудитория */}
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg overflow-hidden print:rounded-none print:shadow-none print:border-0 print:break-after-page">
            <div className="bg-slate-800 text-white px-4 sm:px-6 py-2 sm:py-3">
              <h2 className="text-lg sm:text-xl font-bold">Этап 2: Целевая аудитория</h2>
            </div>
            <div className="p-4 sm:p-5">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 w-full">
                {[
                  { name: 'Студент Артём', age: '20-25 лет', desc: 'Заказывает еду в общежитие', detail: 'Высокая цифр. грамотность', color: 'bg-orange-50 border-orange-100', textColor: 'text-orange-600', bgIcon: 'bg-orange-200', iconColor: 'text-orange-600' },
                  { name: 'Менеджер Екатерина', age: '28-38 лет', desc: 'Заказывает обед в офис', detail: 'Высокая цифр. грамотность', color: 'bg-blue-50 border-blue-100', textColor: 'text-blue-600', bgIcon: 'bg-blue-200', iconColor: 'text-blue-600' },
                  { name: 'Семьянин Игорь', age: '35-45 лет', desc: 'Доставка продуктов домой', detail: 'Средняя цифр. грамотность', color: 'bg-emerald-50 border-emerald-100', textColor: 'text-emerald-600', bgIcon: 'bg-emerald-200', iconColor: 'text-emerald-600' },
                  { name: 'Предприниматель Наталья', age: '30-45 лет', desc: 'Отправляет посылки клиентам', detail: 'Средняя цифр. грамотность', color: 'bg-amber-50 border-amber-100', textColor: 'text-amber-600', bgIcon: 'bg-amber-200', iconColor: 'text-amber-600' },
                ].map((p, i) => (
                  <div key={i} className={`${p.color} rounded-xl p-3 sm:p-4 border flex flex-col h-full`}>
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 ${p.bgIcon} rounded-full flex items-center justify-center mb-2 sm:mb-3`}>
                      <svg className={`w-5 h-5 sm:w-6 sm:h-6 ${p.iconColor}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <h4 className="font-semibold text-slate-900 text-sm">{p.name}</h4>
                    <p className="text-xs text-slate-500 mb-1 sm:mb-2">{p.age}</p>
                    <p className="text-xs text-slate-600 flex-1">{p.desc}</p>
                    <p className={`text-xs ${p.textColor} mt-2`}>{p.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Слайд 4 — Пользовательские сценарии */}
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg overflow-hidden print:rounded-none print:shadow-none print:border-0 print:break-after-page">
            <div className="bg-slate-800 text-white px-4 sm:px-6 py-2 sm:py-3">
              <h2 className="text-lg sm:text-xl font-bold">Этап 2: Пользовательские сценарии</h2>
            </div>
            <div className="p-4 sm:p-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 w-full">
                {[
                  { num: '1', label: 'Оформление доставки', color: 'bg-orange-100 text-orange-700', steps: 'Выбор категории → Адреса → Тариф → Оплата → Подтверждение', tags: ['Заказ', 'Оплата'], tagColor: 'bg-orange-100 text-orange-700' },
                  { num: '2', label: 'Отслеживание в реальном времени', color: 'bg-blue-100 text-blue-700', steps: 'Активный заказ → Карта с курьером → Уведомление → Получение', tags: ['Карта', 'Трекинг'], tagColor: 'bg-blue-100 text-blue-700' },
                  { num: '3', label: 'Отправка посылки', color: 'bg-emerald-100 text-emerald-700', steps: 'Описание груза → Адреса → Дата → Назначение курьера → Накладная', tags: ['Отправка', 'Груз'], tagColor: 'bg-emerald-100 text-emerald-700' },
                  { num: '4', label: 'Повтор заказа', color: 'bg-amber-100 text-amber-700', steps: 'История → Прошлый заказ → Повторить → Корректировка → Подтверждение', tags: ['История', 'Повтор'], tagColor: 'bg-amber-100 text-amber-700' },
                ].map((s, i) => (
                  <div key={i} className="bg-slate-50 rounded-xl p-4 sm:p-5 border border-slate-200">
                    <div className="flex items-center gap-3 mb-2 sm:mb-3">
                      <span className={`w-7 h-7 sm:w-8 sm:h-8 ${s.color} rounded-full flex items-center justify-center font-bold text-sm`}>{s.num}</span>
                      <h4 className="font-semibold text-slate-900 text-sm sm:text-base">{s.label}</h4>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600">{s.steps}</p>
                    <div className="mt-2 sm:mt-3 flex flex-wrap gap-2">
                      {s.tags.map(tag => (
                        <span key={tag} className={`px-2 py-1 ${s.tagColor} text-xs rounded`}>{tag}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Слайд 5 — Анализ Яндекс Go */}
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg overflow-hidden print:rounded-none print:shadow-none print:border-0 print:break-after-page">
            <div className="bg-slate-800 text-white px-4 sm:px-6 py-2 sm:py-3">
              <h2 className="text-lg sm:text-xl font-bold">Этап 3: Анализ аналогов — Яндекс Go</h2>
            </div>
            <div className="p-4 sm:p-5">
              <div className="flex flex-col md:flex-row gap-4 sm:gap-8">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4 sm:mb-6">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-yellow-400 rounded-xl flex items-center justify-center font-bold text-slate-900 text-xl sm:text-2xl">Я</div>
                    <div>
                      <h3 className="font-bold text-xl sm:text-2xl text-slate-900">Яндекс Go</h3>
                      <p className="text-slate-500 text-sm sm:text-base">Такси + доставка еды и товаров</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <h4 className="font-semibold text-green-700 mb-2 text-sm sm:text-base">Сильные стороны</h4>
                      <ul className="space-y-1 text-xs sm:text-sm text-slate-600">
                        <li>+ Точный трекинг на карте</li>
                        <li>+ Единая экосистема</li>
                        <li>+ Быстрое назначение</li>
                        <li>+ Широкий охват городов</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-red-700 mb-2 text-sm sm:text-base">Слабые стороны</h4>
                      <ul className="space-y-1 text-xs sm:text-sm text-slate-600">
                        <li>- Перегруженный интерфейс</li>
                        <li>- Много лишних функций</li>
                        <li>- Сложная структура меню</li>
                        <li>- Тяжёлое приложение</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Слайд 6 — Анализ СДЭК */}
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg overflow-hidden print:rounded-none print:shadow-none print:border-0 print:break-after-page">
            <div className="bg-slate-800 text-white px-4 sm:px-6 py-2 sm:py-3">
              <h2 className="text-lg sm:text-xl font-bold">Этап 3: Анализ аналогов — СДЭК</h2>
            </div>
            <div className="p-4 sm:p-5">
              <div className="flex flex-col md:flex-row gap-4 sm:gap-8">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4 sm:mb-6">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-600 rounded-xl flex items-center justify-center font-bold text-white text-sm">СДЭК</div>
                    <div>
                      <h3 className="font-bold text-xl sm:text-2xl text-slate-900">СДЭК</h3>
                      <p className="text-slate-500 text-sm sm:text-base">Курьерская служба доставки</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <h4 className="font-semibold text-green-700 mb-2 text-sm sm:text-base">Сильные стороны</h4>
                      <ul className="space-y-1 text-xs sm:text-sm text-slate-600">
                        <li>+ Широкая география</li>
                        <li>+ Гибкие тарифы</li>
                        <li>+ Подробная история посылок</li>
                        <li>+ Корпоративные решения</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-red-700 mb-2 text-sm sm:text-base">Слабые стороны</h4>
                      <ul className="space-y-1 text-xs sm:text-sm text-slate-600">
                        <li>- Устаревший дизайн</li>
                        <li>- Медленный трекинг</li>
                        <li>- Сложная форма отправки</li>
                        <li>- Нет живого чата</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Слайд 7 — Анализ Delivery Club */}
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg overflow-hidden print:rounded-none print:shadow-none print:border-0 print:break-after-page">
            <div className="bg-slate-800 text-white px-4 sm:px-6 py-2 sm:py-3">
              <h2 className="text-lg sm:text-xl font-bold">Этап 3: Анализ аналогов — Delivery Club</h2>
            </div>
            <div className="p-4 sm:p-5">
              <div className="flex flex-col md:flex-row gap-4 sm:gap-8">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4 sm:mb-6">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-red-500 rounded-xl flex items-center justify-center font-bold text-white text-sm">DC</div>
                    <div>
                      <h3 className="font-bold text-xl sm:text-2xl text-slate-900">Delivery Club</h3>
                      <p className="text-slate-500 text-sm sm:text-base">Доставка еды из ресторанов</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <h4 className="font-semibold text-green-700 mb-2 text-sm sm:text-base">Сильные стороны</h4>
                      <ul className="space-y-1 text-xs sm:text-sm text-slate-600">
                        <li>+ Удобный каталог ресторанов</li>
                        <li>+ Реальное время доставки</li>
                        <li>+ Программа лояльности</li>
                        <li>+ Понятная карточка заказа</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-red-700 mb-2 text-sm sm:text-base">Слабые стороны</h4>
                      <ul className="space-y-1 text-xs sm:text-sm text-slate-600">
                        <li>- Только доставка еды</li>
                        <li>- Высокая комиссия</li>
                        <li>- Нет доставки посылок</li>
                        <li>- Ограниченный функционал чата</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Слайд 8 — Сводная таблица аналогов */}
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg overflow-hidden print:rounded-none print:shadow-none print:border-0 print:break-after-page">
            <div className="bg-slate-800 text-white px-4 sm:px-6 py-2 sm:py-3">
              <h2 className="text-lg sm:text-xl font-bold">Сводный анализ аналогов</h2>
            </div>
            <div className="p-4 sm:p-5 overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-slate-200">
                    <th className="text-left py-2 pr-4 text-slate-500 font-medium">Критерий</th>
                    <th className="text-center py-2 px-2 text-slate-700 font-semibold">Яндекс Go</th>
                    <th className="text-center py-2 px-2 text-slate-700 font-semibold">СДЭК</th>
                    <th className="text-center py-2 px-2 text-slate-700 font-semibold">Delivery Club</th>
                    <th className="text-center py-2 px-2 text-orange-700 font-semibold">QuickDrop</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {[
                    ['Живой трекинг', '✓', '~', '✓', '✓'],
                    ['Единый сервис (все типы)', '✓', '~', '✗', '✓'],
                    ['Простой UX', '✗', '✗', '✓', '✓'],
                    ['Чат с курьером', '✓', '✗', '~', '✓'],
                    ['История и повтор', '~', '✓', '~', '✓'],
                  ].map(([crit, ...vals], i) => (
                    <tr key={i}>
                      <td className="py-2 pr-4 text-slate-600">{crit}</td>
                      {vals.map((v, j) => (
                        <td key={j} className={`text-center py-2 px-2 font-medium ${j === 3 ? 'text-orange-600' : v === '✓' ? 'text-emerald-600' : v === '✗' ? 'text-red-500' : 'text-amber-500'}`}>{v}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Слайд 9 — Выводы */}
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg overflow-hidden print:rounded-none print:shadow-none print:border-0 print:break-after-page">
            <div className="bg-slate-800 text-white px-4 sm:px-6 py-2 sm:py-3">
              <h2 className="text-lg sm:text-xl font-bold">Выводы и особенности QuickDrop</h2>
            </div>
            <div className="p-4 sm:p-6">
              <div className="grid sm:grid-cols-3 gap-4">
                {[
                  { title: 'Минимализм', desc: 'Чистый интерфейс без перегрузки. Только нужные функции на виду', color: 'bg-orange-50 border-orange-100', iconColor: 'text-orange-500' },
                  { title: 'Единый сервис', desc: 'Еда, товары и посылки в одном приложении без переключения', color: 'bg-blue-50 border-blue-100', iconColor: 'text-blue-500' },
                  { title: 'Живой трекинг', desc: 'Курьер на карте в реальном времени + точное ETA', color: 'bg-emerald-50 border-emerald-100', iconColor: 'text-emerald-500' },
                ].map((item, i) => (
                  <div key={i} className={`${item.color} border rounded-xl p-5`}>
                    <h4 className={`font-bold text-slate-900 mb-2 ${item.iconColor}`}>{item.title}</h4>
                    <p className="text-sm text-slate-600">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Слайд 10 — Заключение */}
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl sm:rounded-2xl shadow-lg overflow-hidden print:rounded-none print:shadow-none print:break-after-page">
            <div className="flex flex-col items-center justify-center text-white p-6 sm:p-10 text-center">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Итог ПЗ №1</h2>
              <p className="text-base sm:text-lg text-slate-300 mb-6 max-w-2xl">
                Определена тема проекта — сервис доставки QuickDrop. Проведён анализ целевой аудитории, 
                сформулированы пользовательские сценарии, выполнен детальный анализ трёх аналогов.
              </p>
              <div className="grid grid-cols-3 gap-6 mt-2">
                <div>
                  <div className="text-3xl font-bold text-orange-400">4</div>
                  <div className="text-sm text-slate-400">Персоны ЦА</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-400">4</div>
                  <div className="text-sm text-slate-400">Сценария</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-emerald-400">3</div>
                  <div className="text-sm text-slate-400">Аналога</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  )
}
