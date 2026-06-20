import { Cover, PdfShell, Slide } from "@/components/pdf/slide"
import { LoFiGallery } from "@/components/pdf/prototype-screens"

export default function Pdf1Page() {
  return (
    <PdfShell pz={1} figmaContentHref="/figma1">
      <Cover
        icon={
          <svg className="w-9 h-9 sm:w-10 sm:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        }
        subtitle="Образовательное мобильное приложение"
        taskLine1="Практическое задание №1"
        taskLine2="Выбор и аналитическое исследование темы мобильного интерфейса"
      />

      {/* Слайд 2 — Выбор темы */}
      <Slide title="Этап 1: Выбор темы" footer="Выбор темы">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          <div>
            <h3 className="text-base sm:text-lg font-semibold text-slate-900 mb-3">Тема проекта</h3>
            <div className="bg-teal-50 rounded-xl p-4 sm:p-6 border border-teal-100">
              <p className="text-xl sm:text-2xl font-bold text-teal-700 mb-2">LearnUp</p>
              <p className="text-sm sm:text-base text-slate-600">Мобильное приложение для самообразования с персонализированными курсами и геймификацией</p>
            </div>
          </div>
          <div>
            <h3 className="text-base sm:text-lg font-semibold text-slate-900 mb-3">Обоснование выбора</h3>
            <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-slate-700">
              {[
                "Рынок EdTech растёт на 15% ежегодно",
                "Сложный UX: геймификация, прогресс, персонализация",
                "Множество качественных аналогов для анализа",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
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
      </Slide>

      {/* Слайд 3 — Целевая аудитория */}
      <Slide title="Этап 2: Целевая аудитория" footer="Целевая аудитория">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 w-full">
          {[
            { color: "violet", label: "Студент", age: "18–24 года", desc: "Дополнить образование практическими навыками", note: "Высокая цифр. грамотность",
              icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /> },
            { color: "emerald", label: "Специалист", age: "25–35 лет", desc: "Повысить квалификацию для карьерного роста", note: "Высокая цифр. грамотность",
              icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /> },
            { color: "amber", label: "Родитель", age: "35–45 лет", desc: "Освоить новую профессию для смены карьеры", note: "Средняя цифр. грамотность",
              icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /> },
            { color: "rose", label: "Пенсионер", age: "55–65 лет", desc: "Изучить хобби: фото, языки, рисование", note: "Базовая цифр. грамотность",
              icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /> },
          ].map(({ color, label, age, desc, note, icon }) => (
            <div key={label} className={`bg-${color}-50 rounded-xl p-3 sm:p-4 border border-${color}-100 flex flex-col`}>
              <div className={`w-10 h-10 bg-${color}-200 rounded-full flex items-center justify-center mb-2`}>
                <svg className={`w-5 h-5 text-${color}-600`} fill="none" stroke="currentColor" viewBox="0 0 24 24">{icon}</svg>
              </div>
              <h4 className="font-semibold text-slate-900 text-sm">{label}</h4>
              <p className={`text-xs text-slate-500 mb-1`}>{age}</p>
              <p className="text-xs text-slate-600 flex-1">{desc}</p>
              <p className={`text-xs text-${color}-600 mt-2`}>{note}</p>
            </div>
          ))}
        </div>
      </Slide>

      {/* Слайд 4 — Пользовательские сценарии */}
      <Slide title="Этап 2: Пользовательские сценарии" footer="Сценарии">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
          {[
            { n: 1, color: "violet", label: "Первый запуск", text: "Скачивание → Опрос интересов → Персонализированная подборка → Первый урок", tags: ["Онбординг", "Персонализация"] },
            { n: 2, color: "emerald", label: "Ежедневное обучение", text: "Push-уведомление → 10-мин урок в метро → Практика → Достижение за серию", tags: ["Микрообучение", "Геймификация"] },
            { n: 3, color: "amber", label: "Поиск курса", text: "Каталог → Фильтры → Отзывы и программа → Добавление в избранное", tags: ["Каталог", "Фильтрация"] },
            { n: 4, color: "rose", label: "Отслеживание прогресса", text: "Профиль → Статистика за месяц → График активности → Постановка цели", tags: ["Статистика", "Цели"] },
          ].map(({ n, color, label, text, tags }) => (
            <div key={n} className="bg-slate-50 rounded-xl p-4 sm:p-5 border border-slate-200">
              <div className="flex items-center gap-3 mb-2">
                <span className={`w-7 h-7 bg-${color}-100 rounded-full flex items-center justify-center font-bold text-${color}-700 text-sm`}>{n}</span>
                <h4 className="font-semibold text-slate-900 text-sm sm:text-base">{label}</h4>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 mb-3">{text}</p>
              <div className="flex flex-wrap gap-2">
                {tags.map((t) => (
                  <span key={t} className={`px-2 py-1 bg-${color}-100 text-${color}-700 text-xs rounded`}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Slide>

      {/* Слайд 5 — Duolingo */}
      <Slide title="Этап 3: Анализ аналогов — Duolingo" footer="Duolingo">
        <div className="flex flex-col md:flex-row gap-6 md:gap-8">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-[#58CC02] rounded-xl flex items-center justify-center text-white font-bold text-xl">D</div>
              <div>
                <h3 className="font-bold text-xl text-slate-900">Duolingo</h3>
                <p className="text-slate-500 text-sm">Изучение языков</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              <div>
                <h4 className="font-semibold text-green-700 mb-2 text-sm">Сильные стороны</h4>
                <ul className="space-y-1 text-xs sm:text-sm text-slate-600">
                  <li>+ Геймификация: серии, очки, лиги</li>
                  <li>+ Микроуроки по 5–15 минут</li>
                  <li>+ Яркий дизайн и маскот</li>
                  <li>+ Бесплатная базовая версия</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-red-700 mb-2 text-sm">Слабые стороны</h4>
                <ul className="space-y-1 text-xs sm:text-sm text-slate-600">
                  <li>- Ограниченная глубина</li>
                  <li>- Навязчивые уведомления</li>
                  <li>- Много рекламы</li>
                  <li>- Мало разговорной практики</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="w-full md:w-56 lg:w-64 flex-shrink-0 bg-slate-100 rounded-xl overflow-hidden flex items-center justify-center border border-slate-200 aspect-[9/16] md:aspect-auto">
            <img src="/images/duolingo-screenshot.png" alt="Duolingo интерфейс" className="max-h-full max-w-full object-contain" />
          </div>
        </div>
      </Slide>

      {/* Слайд 6 — Stepic */}
      <Slide title="Этап 3: Анализ аналогов — Stepic" footer="Stepic">
        <div className="flex flex-col md:flex-row gap-6 md:gap-8">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-[#1A1A2E] rounded-xl flex items-center justify-center text-white font-bold text-xl">S</div>
              <div>
                <h3 className="font-bold text-xl text-slate-900">Stepic</h3>
                <p className="text-slate-500 text-sm">Образовательная платформа</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              <div>
                <h4 className="font-semibold text-green-700 mb-2 text-sm">Сильные стороны</h4>
                <ul className="space-y-1 text-xs sm:text-sm text-slate-600">
                  <li>+ Много бесплатных курсов</li>
                  <li>+ Автопроверка кода</li>
                  <li>+ Офлайн-режим</li>
                  <li>+ Курсы на русском языке</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-red-700 mb-2 text-sm">Слабые стороны</h4>
                <ul className="space-y-1 text-xs sm:text-sm text-slate-600">
                  <li>- Устаревший дизайн</li>
                  <li>- Слабая геймификация</li>
                  <li>- Нет персонализации</li>
                  <li>- Ограниченный мобильный UX</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="w-full md:w-56 lg:w-64 flex-shrink-0 bg-slate-100 rounded-xl overflow-hidden flex items-center justify-center border border-slate-200 aspect-[9/16] md:aspect-auto">
            <img src="/images/stepic-screenshot.png" alt="Stepic интерфейс" className="max-h-full max-w-full object-contain" />
          </div>
        </div>
      </Slide>

      {/* Слайд 6.1 — Sololearn */}
      <Slide title="Этап 3: Анализ аналогов — Sololearn" footer="Sololearn">
        <div className="flex flex-col md:flex-row gap-6 md:gap-8">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-[#149EF2] rounded-xl flex items-center justify-center text-white font-bold text-lg">SL</div>
              <div>
                <h3 className="font-bold text-xl text-slate-900">Sololearn</h3>
                <p className="text-slate-500 text-sm">Мобильное обучение программированию</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              <div>
                <h4 className="font-semibold text-green-700 mb-2 text-sm">Сильные стороны</h4>
                <ul className="space-y-1 text-xs sm:text-sm text-slate-600">
                  <li>+ Отличная геймификация с XP</li>
                  <li>+ Микроуроки по 5–10 минут</li>
                  <li>+ Встроенный редактор кода</li>
                  <li>+ Активное сообщество</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-red-700 mb-2 text-sm">Слабые стороны</h4>
                <ul className="space-y-1 text-xs sm:text-sm text-slate-600">
                  <li>- Только программирование</li>
                  <li>- Много рекламы</li>
                  <li>- Повер��ностные уроки</li>
                  <li>- Нет сертификатов от вузов</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="w-full md:w-56 lg:w-64 flex-shrink-0 bg-slate-100 rounded-xl overflow-hidden flex items-center justify-center border border-slate-200 aspect-[9/16] md:aspect-auto">
            <img src="/images/sololearn-screenshot.png" alt="Sololearn интерфейс" className="max-h-full max-w-full object-contain" />
          </div>
        </div>
      </Slide>

      {/* Слайд 7 — Сравнительная таблица */}
      <Slide title="Этап 3: Сравнительная таблица аналогов" footer="Сравнение">
        <div className="overflow-x-auto">
          <table className="w-full text-xs sm:text-sm">
            <thead>
              <tr className="border-b-2 border-slate-200">
                <th className="text-left py-2 px-3 font-semibold text-slate-900">Критерий</th>
                <th className="text-center py-2 px-3 font-semibold text-[#58CC02]">Duolingo</th>
                <th className="text-center py-2 px-3 font-semibold text-[#1A1A2E]">Stepic</th>
                <th className="text-center py-2 px-3 font-semibold text-[#149EF2]">Sololearn</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {[
                ["Геймификация", 5, 2, 4],
                ["Микрообучение", 5, 3, 5],
                ["Мобильный UX", 5, 3, 5],
                ["Бесплатный контент", 4, 5, 4],
              ].map(([crit, d, s, sl]) => (
                <tr key={crit as string} className="odd:bg-slate-50">
                  <td className="py-2 px-3 font-medium text-slate-700">{crit}</td>
                  {([d, s, sl] as number[]).map((v, i) => (
                    <td key={i} className="py-2 px-3 text-center">
                      <span className={`inline-flex items-center justify-center w-7 h-7 rounded-full font-semibold text-xs ${v >= 4 ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"}`}>{v}</span>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Slide>

      {/* Слайд 8 — Выводы */}
      <Slide title="Этап 5: Выводы" footer="Выводы">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
          <div className="bg-green-50 rounded-xl p-4 sm:p-6 border border-green-200">
            <h3 className="font-bold text-green-800 mb-3 flex items-center gap-2 text-sm sm:text-base">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              Удачные решения для внедрения
            </h3>
            <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-green-800">
              {["Геймификация: серии, достижения, рейтинги", "Микроуроки 5–15 минут", "Персонализированный онбординг", "Задания с автопроверкой", "Офлайн-режим", "Визуализация прогресса"].map((t) => <li key={t}>{t}</li>)}
            </ul>
          </div>
          <div className="bg-red-50 rounded-xl p-4 sm:p-6 border border-red-200">
            <h3 className="font-bold text-red-800 mb-3 flex items-center gap-2 text-sm sm:text-base">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
              Проблемные зоны — избежать
            </h3>
            <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-red-800">
              {["Навязчивые push-уведомления", "Сложная навигация по каталогу", "Длинные видеоуроки", "Отсутствие социального взаимодействия", "Агрессивная монетизация"].map((t) => <li key={t}>{t}</li>)}
            </ul>
          </div>
        </div>
      </Slide>

      {/* Слайд 9 — Проектные ориентиры */}
      <Slide title="Этап 5: Проектные ориентиры LearnUp" footer="Ориентиры">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
          <div className="bg-violet-50 rounded-xl p-4 sm:p-5 border border-violet-200">
            <h3 className="font-bold text-violet-800 mb-3 text-sm sm:text-base">Основные функции</h3>
            <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-violet-700">
              {["Каталог курсов с фильтрацией", "Микроуроки 5–15 минут", "Интерактивные задания", "Система достижений", "Отслеживание прогресса", "Персональные рекомендации"].map((t) => <li key={t}>— {t}</li>)}
            </ul>
          </div>
          <div className="bg-indigo-50 rounded-xl p-4 sm:p-5 border border-indigo-200">
            <h3 className="font-bold text-indigo-800 mb-3 text-sm sm:text-base">Навигация</h3>
            <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-indigo-700">
              {["Tab bar с 4–5 разделами", "Главная с продолжением", "Быстрый доступ к курсу", "Поиск с автодополнением", "Минимум вложенности"].map((t) => <li key={t}>— {t}</li>)}
            </ul>
          </div>
          <div className="bg-blue-50 rounded-xl p-4 sm:p-5 border border-blue-200">
            <h3 className="font-bold text-blue-800 mb-3 text-sm sm:text-base">Визуальный стиль</h3>
            <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-blue-700">
              {["Чистый современный дизайн", "Акцентный цвет прогресса", "Иллюстрации для мотивации", "Крупная типографика", "Карточки с закруглениями"].map((t) => <li key={t}>— {t}</li>)}
            </ul>
          </div>
        </div>
      </Slide>

      {/* Слайд 10 — Прототип */}
      <Slide title="Интерактивный прототип LearnUp" footer="Все экраны приложения">
        <p className="text-sm text-slate-500 mb-6 text-pretty">
          Все экраны рабочего прототипа приложения — отрисованы целиком в рамке устройства.
        </p>
        <LoFiGallery scale={0.46} />
      </Slide>
    </PdfShell>
  )
}
