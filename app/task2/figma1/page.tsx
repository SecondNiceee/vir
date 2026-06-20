export default function Task2Figma1Page() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl font-semibold text-slate-900">ПЗ №1 — Figma-контент</h1>
              <p className="text-sm text-slate-500">Сервис доставки QuickDrop</p>
            </div>
            <div className="flex gap-3">
              <a href="/task2" className="text-sm text-slate-500 hover:text-slate-800">← К списку</a>
              <a href="/task2/pdf1" className="text-sm text-blue-600 hover:text-blue-800">PDF-слайды</a>
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
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-slate-900">QuickDrop</h2>
              <p className="text-slate-500 mt-1">Мобильный сервис доставки</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-2">Назначение</h3>
                  <p className="text-slate-700 leading-relaxed">
                    QuickDrop — мобильное приложение для быстрой доставки товаров, еды и посылок. 
                    Пользователь создаёт заявку, выбирает курьера и отслеживает доставку в реальном 
                    времени на карте. Приложение решает проблему долгого ожидания и непрозрачности 
                    процесса доставки.
                  </p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-2">Ключевая проблема</h3>
                  <p className="text-slate-700 leading-relaxed">
                    Пользователи не знают, где находится курьер, когда ожидать доставку и нет возможности 
                    оперативно связаться с ним. Это порождает тревожность и недоверие к сервису.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-2">Обоснование выбора</h3>
                  <ul className="space-y-2 text-slate-700">
                    <li className="flex items-start gap-2">
                      <span className="text-orange-500 mt-1">●</span>
                      <span>Рынок доставки в России вырос на 35% за последние 2 года</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-500 mt-1">●</span>
                      <span>Сложный UX: карты, трекинг, чаты, рейтинги, оплата</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-500 mt-1">●</span>
                      <span>Множество аналогов для глубокого анализа паттернов</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-500 mt-1">●</span>
                      <span>Высокая частота использования — ежедневные сессии</span>
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
              <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-5 border border-orange-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-orange-200 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Студент Артём</h4>
                    <p className="text-sm text-slate-500">20-25 лет</p>
                  </div>
                </div>
                <div className="space-y-3 text-sm">
                  <div><span className="font-medium text-slate-700">Род занятий:</span><span className="text-slate-600 ml-1">Студент, подрабатывает</span></div>
                  <div><span className="font-medium text-slate-700">Цифровая грамотность:</span><span className="text-slate-600 ml-1">Высокая</span></div>
                  <div><span className="font-medium text-slate-700">Мотивация:</span><span className="text-slate-600 ml-1">Заказывает еду и товары не выходя из общежития</span></div>
                  <div><span className="font-medium text-slate-700">Контекст:</span><span className="text-slate-600 ml-1">Вечером, в перерывах между учёбой</span></div>
                </div>
              </div>

              {/* Персона 2 */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-5 border border-blue-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Менеджер Екатерина</h4>
                    <p className="text-sm text-slate-500">28-38 лет</p>
                  </div>
                </div>
                <div className="space-y-3 text-sm">
                  <div><span className="font-medium text-slate-700">Род занятий:</span><span className="text-slate-600 ml-1">Менеджер в IT-компании</span></div>
                  <div><span className="font-medium text-slate-700">Цифровая грамотность:</span><span className="text-slate-600 ml-1">Высокая</span></div>
                  <div><span className="font-medium text-slate-700">Мотивация:</span><span className="text-slate-600 ml-1">Экономит время — заказывает обед в офис</span></div>
                  <div><span className="font-medium text-slate-700">Контекст:</span><span className="text-slate-600 ml-1">В рабочие часы, с телефона на ходу</span></div>
                </div>
              </div>

              {/* Персона 3 */}
              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-5 border border-emerald-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-emerald-200 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Семьянин Игорь</h4>
                    <p className="text-sm text-slate-500">35-45 лет</p>
                  </div>
                </div>
                <div className="space-y-3 text-sm">
                  <div><span className="font-medium text-slate-700">Род занятий:</span><span className="text-slate-600 ml-1">Инженер, отец двух детей</span></div>
                  <div><span className="font-medium text-slate-700">Цифровая грамотность:</span><span className="text-slate-600 ml-1">Средняя</span></div>
                  <div><span className="font-medium text-slate-700">Мотивация:</span><span className="text-slate-600 ml-1">Доставка продуктов и товаров для дома</span></div>
                  <div><span className="font-medium text-slate-700">Контекст:</span><span className="text-slate-600 ml-1">Вечером и в выходные дни</span></div>
                </div>
              </div>

              {/* Персона 4 */}
              <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-xl p-5 border border-amber-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-amber-200 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Предприниматель Наталья</h4>
                    <p className="text-sm text-slate-500">30-45 лет</p>
                  </div>
                </div>
                <div className="space-y-3 text-sm">
                  <div><span className="font-medium text-slate-700">Род занятий:</span><span className="text-slate-600 ml-1">Владелец малого бизнеса</span></div>
                  <div><span className="font-medium text-slate-700">Цифровая грамотность:</span><span className="text-slate-600 ml-1">Средняя</span></div>
                  <div><span className="font-medium text-slate-700">Мотивация:</span><span className="text-slate-600 ml-1">Отправляет небольшие посылки клиентам</span></div>
                  <div><span className="font-medium text-slate-700">Контекст:</span><span className="text-slate-600 ml-1">В течение рабочего дня, с ПК или телефона</span></div>
                </div>
              </div>
            </div>

            <div className="mt-6 p-5 bg-slate-50 rounded-xl">
              <h4 className="font-semibold text-slate-900 mb-3">Основные пользовательские цели</h4>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span className="text-sm text-slate-700">Получить товар быстро</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <span className="text-sm text-slate-700">Отслеживать статус в реальном времени</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span className="text-sm text-slate-700">Быть уверенным в надёжности курьера</span>
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
                <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center text-sm font-semibold text-orange-700">1</div>
                <h4 className="font-semibold text-slate-900">Оформление доставки</h4>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed">
                Артём хочет заказать пиццу. Открывает QuickDrop, вводит адрес, выбирает ресторан, 
                добавляет блюда в корзину, указывает адрес доставки и оплачивает онлайн. 
                Получает подтверждение с ожидаемым временем.
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded">Заказ</span>
                <span className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded">Оплата</span>
                <span className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded">Подтверждение</span>
              </div>
            </div>

            <div className="border border-slate-200 rounded-lg p-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-sm font-semibold text-blue-700">2</div>
                <h4 className="font-semibold text-slate-900">Отслеживание доставки</h4>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed">
                Екатерина заказала обед в офис. Через 5 минут после оформления открывает приложение 
                и видит курьера на карте. Следит за перемещением, получает уведомление о прибытии 
                и встречает курьера у входа.
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded">Карта</span>
                <span className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded">Трекинг</span>
                <span className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded">Уведомления</span>
              </div>
            </div>

            <div className="border border-slate-200 rounded-lg p-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center text-sm font-semibold text-emerald-700">3</div>
                <h4 className="font-semibold text-slate-900">Отправка посылки</h4>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed">
                Наталья хочет отправить заказ клиенту. Вводит адрес отправки и получения, 
                описывает груз, выбирает тарифный план и назначает удобное время. 
                Получает накладную в приложении.
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded">Отправка</span>
                <span className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded">Тарифы</span>
                <span className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded">Накладная</span>
              </div>
            </div>

            <div className="border border-slate-200 rounded-lg p-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center text-sm font-semibold text-amber-700">4</div>
                <h4 className="font-semibold text-slate-900">История и повтор заказа</h4>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed">
                Игорь хочет снова заказать продукты из любимого магазина. Открывает историю заказов, 
                находит прошлый заказ и повторяет его одной кнопкой. Меняет только пару позиций и подтверждает.
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded">История</span>
                <span className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded">Повтор заказа</span>
                <span className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded">Быстрый заказ</span>
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
            <div className="grid md:grid-cols-3 gap-6">
              {/* Яндекс Go */}
              <div className="border border-slate-200 rounded-xl p-5">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-yellow-400 rounded-xl flex items-center justify-center font-bold text-slate-900 text-lg">Я</div>
                  <div>
                    <h4 className="font-bold text-slate-900">Яндекс Go</h4>
                    <p className="text-xs text-slate-500">Такси + доставка</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div>
                    <p className="text-xs font-semibold text-green-700 mb-1">Сильные стороны</p>
                    <ul className="text-xs text-slate-600 space-y-1">
                      <li>+ Точный трекинг на карте</li>
                      <li>+ Интеграция с Яндекс-экосистемой</li>
                      <li>+ Быстрое назначение курьера</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-red-700 mb-1">Слабые стороны</p>
                    <ul className="text-xs text-slate-600 space-y-1">
                      <li>- Перегруженный интерфейс</li>
                      <li>- Много лишних функций</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* СДЭК */}
              <div className="border border-slate-200 rounded-xl p-5">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center font-bold text-white text-sm">СДЭ</div>
                  <div>
                    <h4 className="font-bold text-slate-900">СДЭК</h4>
                    <p className="text-xs text-slate-500">Курьерская служба</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div>
                    <p className="text-xs font-semibold text-green-700 mb-1">Сильные стороны</p>
                    <ul className="text-xs text-slate-600 space-y-1">
                      <li>+ Широкая география</li>
                      <li>+ Гибкие тарифы</li>
                      <li>+ История посылок</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-red-700 mb-1">Слабые стороны</p>
                    <ul className="text-xs text-slate-600 space-y-1">
                      <li>- Устаревший дизайн</li>
                      <li>- Медленный трекинг</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Delivery Club */}
              <div className="border border-slate-200 rounded-xl p-5">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center font-bold text-white text-sm">DC</div>
                  <div>
                    <h4 className="font-bold text-slate-900">Delivery Club</h4>
                    <p className="text-xs text-slate-500">Доставка еды</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div>
                    <p className="text-xs font-semibold text-green-700 mb-1">Сильные стороны</p>
                    <ul className="text-xs text-slate-600 space-y-1">
                      <li>+ Удобный каталог</li>
                      <li>+ Отслеживание в реальном времени</li>
                      <li>+ Программа лояльности</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-red-700 mb-1">Слабые стороны</p>
                    <ul className="text-xs text-slate-600 space-y-1">
                      <li>- Только доставка еды</li>
                      <li>- Высокая комиссия</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Выводы */}
            <div className="bg-orange-50 border border-orange-100 rounded-xl p-5">
              <h4 className="font-semibold text-slate-900 mb-3">Выводы и решения для QuickDrop</h4>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="flex items-start gap-2">
                  <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                  </div>
                  <span className="text-sm text-slate-700">Чистый минималистичный интерфейс без перегрузки</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                  </div>
                  <span className="text-sm text-slate-700">Единый сервис: еда, товары, посылки</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                  </div>
                  <span className="text-sm text-slate-700">Живой трекинг курьера с точным временем</span>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  )
}
