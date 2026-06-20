import { Cover, PdfShell, Slide } from "@/components/pdf/slide"
import { LoFiGallery } from "@/components/pdf/prototype-screens"

const TAB_ICONS = [
  { label: "Главная", d: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" },
  { label: "Каталог", d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" },
  { label: "Курсы", d: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" },
  { label: "Прогресс", d: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" },
  { label: "Профиль", d: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" },
]

function LoFiTabBar({ active }: { active: number }) {
  return (
    <div className="mt-auto pt-1 border-t border-slate-200 bg-slate-100 rounded-b-xl">
      <div className="flex justify-around items-center px-1 py-1">
        {TAB_ICONS.map(({ label, d }, i) => (
          <div key={label} className="flex flex-col items-center gap-0.5">
            <div className={`w-5 h-5 rounded-md flex items-center justify-center ${i === active ? "bg-teal-500" : "bg-slate-200"}`}>
              <svg className={`w-3 h-3 ${i === active ? "text-white" : "text-slate-400"}`} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d={d} />
              </svg>
            </div>
            <span className={`text-[6px] leading-none ${i === active ? "text-teal-500" : "text-slate-400"}`}>{label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Pdf2Page() {
  return (
    <PdfShell pz={2} figmaContentHref="/figma2">
      <Cover
        icon={
          <svg className="w-9 h-9 sm:w-10 sm:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
          </svg>
        }
        subtitle="Lo-Fi прототипирование и навигация"
        taskLine1="Практическое задание №2"
        taskLine2="Проектирование структуры приложения и создание прототипов"
      />

      {/* Слайд 2 — Уточнение сценария */}
      <Slide title="Этап 1: Уточнение пользовательского сценария" footer="Уточнение сценария">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          <div>
            <h3 className="text-base sm:text-lg font-semibold text-slate-900 mb-3">Главная цель пользователя</h3>
            <div className="bg-teal-50 rounded-xl p-4 sm:p-5 border border-teal-100 mb-4">
              <p className="text-slate-700 text-sm sm:text-base">Эффективно учиться новым навыкам через короткие уроки с геймификацией и отслеживанием прогресса</p>
            </div>
            <h3 className="text-base sm:text-lg font-semibold text-slate-900 mb-3">Основной сценарий</h3>
            <div className="bg-emerald-50 rounded-xl p-4 border border-emerald-100">
              <ol className="space-y-1 text-sm text-slate-700">
                {["Открыть приложение", "Продолжить текущий курс", "Пройти урок (5–10 мин)", "Выполнить практику", "Получить награду"].map((s, i) => (
                  <li key={i}>{i + 1}. {s}</li>
                ))}
              </ol>
            </div>
          </div>
          <div>
            <h3 className="text-base sm:text-lg font-semibold text-slate-900 mb-3">Второстепенные сценарии</h3>
            <div className="space-y-3">
              {[
                { letter: "А", color: "blue", text: "Поиск и выбор нового курса" },
                { letter: "Б", color: "amber", text: "Просмотр статистики и достижений" },
                { letter: "В", color: "rose", text: "Настройка профиля" },
                { letter: "Г", color: "purple", text: "Онбординг при первом запуске" },
              ].map(({ letter, color, text }) => (
                <div key={letter} className="flex items-center gap-3 bg-slate-50 rounded-lg p-3">
                  <span className={`w-8 h-8 bg-${color}-100 rounded-lg flex items-center justify-center text-${color}-600 font-bold text-sm shrink-0`}>{letter}</span>
                  <span className="text-slate-700 text-sm">{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Slide>

      {/* Слайд 3 — Список экранов */}
      <Slide title="Этап 2: Формирование списка экранов" footer="Список экранов">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {[
            { color: "amber", title: "Онбординг", items: ["Splash Screen", "Welcome (×3)", "Регистрация", "Выбор интересов", "Цели обучения"] },
            { color: "violet", title: "Главная", items: ["Лента", "Продолжить", "Рекомендации", "Ежедневная цель"] },
            { color: "blue", title: "Каталог", items: ["Поиск", "Категории", "Карточка курса", "Фильтры", "Результаты"] },
            { color: "emerald", title: "Обучение", items: ["Страница курса", "Список уроков", "Урок (теория)", "Практика/Тест", "Результат"] },
            { color: "rose", title: "Прогресс", items: ["Мои курсы", "Статистика", "Достижения", "Серия дней"] },
            { color: "slate", title: "Профиль", items: ["Мой профиль", "Настройки", "Уведомления", "Подписка"] },
          ].map(({ color, title, items }) => (
            <div key={title} className={`bg-${color}-50 rounded-xl p-3 border border-${color}-100`}>
              <h4 className={`font-semibold text-${color}-800 text-sm mb-2`}>{title}</h4>
              <ul className={`space-y-1 text-xs text-${color}-700`}>
                {items.map((item) => <li key={item}>— {item}</li>)}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex justify-center gap-8 mt-5 pt-4 border-t border-slate-100">
          {[["22", "teal", "экрана"], ["6", "slate", "групп"], ["3", "emerald", "уровня"]].map(([n, c, l]) => (
            <div key={l} className="text-center">
              <span className={`text-2xl font-bold text-${c}-600`}>{n}</span>
              <span className="text-sm text-slate-500 ml-1">{l}</span>
            </div>
          ))}
        </div>
      </Slide>

      {/* Слайд 4 — Навигация */}
      <Slide title="Этап 3: Проектирование навигации" footer="Тип навигации">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          <div>
            <h3 className="text-base sm:text-lg font-semibold text-slate-900 mb-4">Выбранный тип: Tab Bar</h3>
            <div className="bg-teal-50 rounded-xl p-4 sm:p-5 border border-teal-100 mb-4">
              <p className="text-slate-700 mb-3 text-sm">Нижняя панель навигации с 5 основными разделами</p>
              <ul className="space-y-2 text-sm text-slate-600">
                {["Мгновенный доступ к разделам", "Паттерн из Duolingo, Stepic", "Видна текущая позиция", "Удобно для одной руки"].map((t) => (
                  <li key={t} className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-green-600 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="bg-[#1a2535] rounded-[2rem] p-3 shadow-xl" style={{ width: 200 }}>
              {/* notch */}
              <div className="flex justify-center mb-1">
                <div className="w-10 h-1 bg-slate-700 rounded-full" />
              </div>
              <div className="bg-[#1e2d40] rounded-[1.4rem] overflow-hidden" style={{ aspectRatio: "9/16" }}>
                {/* screen content placeholder */}
                <div className="flex-1 h-full flex flex-col">
                  <div className="flex-1 bg-[#1e2d40]" />
                  {/* Tab bar — matches prototype exactly */}
                  <div className="bg-[#1a2535] px-2 py-2">
                    <div className="flex justify-around items-center">
                      {TAB_ICONS.map(({ label, d }, i) => (
                        <div key={label} className="flex flex-col items-center gap-0.5">
                          <div className={`w-7 h-7 rounded-xl flex items-center justify-center ${i === 0 ? "bg-teal-500" : "bg-[#243447]"}`}>
                            <svg className={`w-3.5 h-3.5 ${i === 0 ? "text-white" : "text-slate-400"}`} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" d={d} />
                            </svg>
                          </div>
                          <span className={`text-[7px] leading-none ${i === 0 ? "text-teal-400" : "text-slate-500"}`}>{label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Slide>

      {/* Слайд 5 — User Flow */}
      <Slide title="Этап 4: User Flow — Основной сценарий" footer="User Flow">
        <div className="flex items-center justify-between gap-2 flex-wrap sm:flex-nowrap">
          {[
            { color: "violet", label: "Главная", sub: "Start" },
            { color: "emerald", label: "Продолжить", sub: "Tap" },
            { color: "blue", label: "Урок", sub: "Начать" },
            { color: "amber", label: "Практика", sub: "Задания" },
            { color: "rose", label: "Результат", sub: "XP" },
          ].flatMap(({ color, label, sub }, i, arr) => {
            const el = (
              <div key={label} className={`flex-1 bg-${color}-100 rounded-xl p-3 sm:p-4 text-center min-w-0`}>
                <div className={`w-10 h-10 bg-${color}-500 rounded-lg flex items-center justify-center mx-auto mb-2`}>
                  <span className="text-white text-xs font-bold">{i + 1}</span>
                </div>
                <span className={`text-xs sm:text-sm font-medium text-${color}-700 block`}>{label}</span>
                <span className={`text-[10px] text-${color}-500`}>{sub}</span>
              </div>
            )
            return i < arr.length - 1
              ? [el, <svg key={`arr-${i}`} className="w-6 h-6 text-slate-300 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>]
              : [el]
          })}
        </div>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-slate-50 rounded-xl p-4">
            <h4 className="font-semibold text-slate-900 mb-2 text-sm">Сценарий: Поиск курса</h4>
            <p className="text-xs sm:text-sm text-slate-600">Каталог &rarr; Поиск/Категории &rarr; Результаты &rarr; Карточка курса &rarr; Начать</p>
          </div>
          <div className="bg-slate-50 rounded-xl p-4">
            <h4 className="font-semibold text-slate-900 mb-2 text-sm">Сценарий: Онбординг</h4>
            <p className="text-xs sm:text-sm text-slate-600">Splash &rarr; Welcome &rarr; Регистрация &rarr; Интересы &rarr; Цели &rarr; Главная</p>
          </div>
        </div>
      </Slide>

      {/* Слайд 6 — Lo-Fi Главная и Каталог */}
      <Slide title="Этап 5: Lo-Fi прототипы — Главная и Каталог" footer="Lo-Fi Главная и Каталог">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
          {/* Главная */}
          <div className="text-center">
            <div className="bg-slate-100 rounded-2xl p-3 w-36 sm:w-40 aspect-[9/16] flex flex-col mb-2">
              <div className="flex justify-between items-center mb-2">
                <div className="w-6 h-1 bg-slate-300 rounded" />
                <div className="flex gap-0.5"><div className="w-2 h-2 bg-slate-300 rounded-full" /><div className="w-2 h-2 bg-slate-300 rounded-full" /></div>
              </div>
              <div className="flex justify-between items-center mb-3">
                <div className="space-y-0.5"><div className="w-10 h-1 bg-slate-300 rounded" /><div className="w-14 h-2 bg-slate-400 rounded" /></div>
                <div className="w-6 h-6 bg-slate-300 rounded-full" />
              </div>
              <div className="bg-slate-200 rounded-lg p-2 mb-2"><div className="flex justify-between"><div className="w-12 h-2 bg-slate-300 rounded" /><div className="w-6 h-6 bg-slate-300 rounded" /></div></div>
              <div className="w-16 h-1 bg-slate-300 rounded mb-1" />
              <div className="bg-slate-200 rounded-lg p-2 mb-2"><div className="flex gap-2"><div className="w-8 h-8 bg-slate-300 rounded" /><div className="flex-1 space-y-1"><div className="w-full h-1 bg-slate-300 rounded" /><div className="w-3/4 h-1 bg-slate-300 rounded" /><div className="w-full h-1 bg-slate-300 rounded-full" /></div></div></div>
              <div className="w-14 h-1 bg-slate-300 rounded mb-1" />
              <div className="flex gap-1 flex-1"><div className="flex-1 bg-slate-200 rounded-lg p-1"><div className="w-full h-5 bg-slate-300 rounded mb-1" /><div className="w-full h-1 bg-slate-300 rounded" /></div><div className="flex-1 bg-slate-200 rounded-lg p-1"><div className="w-full h-5 bg-slate-300 rounded mb-1" /><div className="w-full h-1 bg-slate-300 rounded" /></div></div>
              <LoFiTabBar active={0} />
            </div>
            <span className="text-sm font-medium text-slate-700">Главная</span>
          </div>
          {/* Каталог */}
          <div className="text-center">
            <div className="bg-slate-100 rounded-2xl p-3 w-36 sm:w-40 aspect-[9/16] flex flex-col mb-2">
              <div className="flex justify-between items-center mb-2">
                <div className="w-6 h-1 bg-slate-300 rounded" />
                <div className="flex gap-0.5"><div className="w-2 h-2 bg-slate-300 rounded-full" /><div className="w-2 h-2 bg-slate-300 rounded-full" /></div>
              </div>
              <div className="bg-slate-200 rounded-lg p-2 mb-2 flex items-center gap-1"><div className="w-3 h-3 bg-slate-300 rounded" /><div className="w-full h-1 bg-slate-300 rounded" /></div>
              <div className="flex gap-1 mb-2"><div className="px-2 py-1 bg-slate-400 rounded-full"><div className="w-5 h-1 bg-slate-200 rounded" /></div><div className="px-2 py-1 bg-slate-200 rounded-full"><div className="w-6 h-1 bg-slate-300 rounded" /></div><div className="px-2 py-1 bg-slate-200 rounded-full"><div className="w-5 h-1 bg-slate-300 rounded" /></div></div>
              <div className="space-y-2 flex-1">{[0, 1].map((i) => <div key={i} className="bg-slate-200 rounded-lg p-2"><div className="w-full h-10 bg-slate-300 rounded mb-1" /><div className="w-full h-1 bg-slate-300 rounded" /><div className="w-2/3 h-1 bg-slate-300 rounded mt-0.5" /></div>)}</div>
              <LoFiTabBar active={1} />
            </div>
            <span className="text-sm font-medium text-slate-700">Каталог</span>
          </div>
          {/* Описание */}
          <div className="max-w-xs">
            <h4 className="font-semibold text-slate-900 mb-3 text-sm">Ключевые элементы:</h4>
            <ul className="space-y-2 text-sm text-slate-600">
              {["Приветствие + аватар пользователя", "Карточка серии дней (streak)", "Блок «Продолжить обучение»", "Поиск с горизонтальными категориями", "Карточки курсов с обложкой", "Tab Bar внизу на всех экранах"].map((t) => (
                <li key={t} className="flex items-start gap-2"><span className="text-violet-500 mt-0.5">–</span><span>{t}</span></li>
              ))}
            </ul>
          </div>
        </div>
      </Slide>

      {/* Слайд 7 — Lo-Fi Урок и Результат */}
      <Slide title="Этап 5: Lo-Fi прототипы — Урок и Результат" footer="Lo-Fi Урок и Результат">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
          {/* Урок */}
          <div className="text-center">
            <div className="bg-slate-100 rounded-2xl p-3 w-36 sm:w-40 aspect-[9/16] flex flex-col mb-2">
              <div className="flex justify-between items-center mb-2">
                <div className="w-6 h-1 bg-slate-300 rounded" />
                <div className="flex gap-0.5"><div className="w-2 h-2 bg-slate-300 rounded-full" /><div className="w-2 h-2 bg-slate-300 rounded-full" /></div>
              </div>
              <div className="flex items-center gap-2 mb-2"><div className="w-6 h-6 bg-slate-300 rounded" /><div className="flex-1 h-1 bg-slate-300 rounded-full" /><div className="w-4 h-4 bg-slate-300 rounded" /></div>
              <div className="w-full h-14 bg-slate-200 rounded-lg flex items-center justify-center mb-3"><div className="w-7 h-7 bg-slate-300 rounded-full" /></div>
              <div className="space-y-1 mb-2"><div className="w-3/4 h-2 bg-slate-300 rounded" /><div className="w-full h-1 bg-slate-200 rounded" /><div className="w-2/3 h-1 bg-slate-200 rounded" /></div>
              <div className="bg-slate-200 rounded-lg p-2 flex-1"><div className="w-full h-1 bg-slate-300 rounded" /><div className="w-full h-1 bg-slate-300 rounded mt-0.5" /></div>
              <div className="w-full h-8 bg-slate-400 rounded-lg mt-2" />
            </div>
            <span className="text-sm font-medium text-slate-700">Экран урока</span>
          </div>
          {/* Результат */}
          <div className="text-center">
            <div className="bg-slate-100 rounded-2xl p-3 w-36 sm:w-40 aspect-[9/16] flex flex-col mb-2">
              <div className="flex justify-between items-center mb-2">
                <div className="w-6 h-1 bg-slate-300 rounded" />
                <div className="flex gap-0.5"><div className="w-2 h-2 bg-slate-300 rounded-full" /><div className="w-2 h-2 bg-slate-300 rounded-full" /></div>
              </div>
              <div className="flex-1 flex flex-col items-center justify-center">
                <div className="w-12 h-12 bg-slate-300 rounded-full mb-2" />
                <div className="w-16 h-2 bg-slate-400 rounded mb-1" />
                <div className="w-20 h-1 bg-slate-300 rounded mb-3" />
                <div className="flex gap-2 mb-3">{[0,1,2].map((i) => <div key={i} className="text-center"><div className="w-6 h-6 bg-slate-200 rounded" /><div className="w-5 h-1 bg-slate-300 rounded mt-0.5 mx-auto" /></div>)}</div>
              </div>
              <div className="space-y-1"><div className="w-full h-8 bg-slate-400 rounded-lg" /><div className="w-full h-6 bg-slate-200 rounded-lg" /></div>
            </div>
            <span className="text-sm font-medium text-slate-700">Результат урока</span>
          </div>
          {/* Описание */}
          <div className="max-w-xs">
            <h4 className="font-semibold text-slate-900 mb-3 text-sm">Ключевые элементы:</h4>
            <ul className="space-y-2 text-sm text-slate-600">
              {["Прогресс-бар в шапке урока", "Видео/медиа контент", "Блок теории с подсказками", "Иконка успеха + поздравление", "Статистика урока (XP, время)", "Достижение за серию"].map((t) => (
                <li key={t} className="flex items-start gap-2"><span className="text-blue-500 mt-0.5">–</span><span>{t}</span></li>
              ))}
            </ul>
          </div>
        </div>
      </Slide>

      {/* Слайд 8 — Lo-Fi Профиль и Прогресс */}
      <Slide title="Этап 5: Lo-Fi прототипы — Профиль и Прогресс" footer="Lo-Fi Профиль и Прогресс">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
          {/* Профиль */}
          <div className="text-center">
            <div className="bg-slate-100 rounded-2xl p-3 w-36 sm:w-40 aspect-[9/16] flex flex-col mb-2">
              <div className="flex justify-between items-center mb-2">
                <div className="w-6 h-1 bg-slate-300 rounded" />
                <div className="flex gap-0.5"><div className="w-2 h-2 bg-slate-300 rounded-full" /><div className="w-2 h-2 bg-slate-300 rounded-full" /></div>
              </div>
              <div className="text-center mb-3"><div className="w-12 h-12 bg-slate-300 rounded-full mx-auto mb-1" /><div className="w-14 h-2 bg-slate-400 rounded mx-auto" /><div className="w-10 h-1 bg-slate-300 rounded mx-auto mt-0.5" /></div>
              <div className="flex justify-around mb-3 py-2 border-y border-slate-200">{[0,1,2].map((i) => <div key={i} className="text-center"><div className="w-5 h-2 bg-slate-400 rounded mx-auto" /><div className="w-6 h-1 bg-slate-300 rounded mx-auto mt-0.5" /></div>)}</div>
              <div className="space-y-1 flex-1">{[0,1,2,3].map((i) => <div key={i} className="flex items-center gap-2 bg-slate-200 rounded p-1.5"><div className="w-4 h-4 bg-slate-300 rounded" /><div className="flex-1 h-1 bg-slate-300 rounded" /></div>)}</div>
              <LoFiTabBar active={4} />
            </div>
            <span className="text-sm font-medium text-slate-700">Профиль</span>
          </div>
          {/* Прогресс */}
          <div className="text-center">
            <div className="bg-slate-100 rounded-2xl p-3 w-36 sm:w-40 aspect-[9/16] flex flex-col mb-2">
              <div className="flex justify-between items-center mb-2">
                <div className="w-6 h-1 bg-slate-300 rounded" />
                <div className="flex gap-0.5"><div className="w-2 h-2 bg-slate-300 rounded-full" /><div className="w-2 h-2 bg-slate-300 rounded-full" /></div>
              </div>
              <div className="w-12 h-2 bg-slate-400 rounded mb-2" />
              <div className="bg-slate-200 rounded-lg p-2 mb-2"><div className="flex justify-between items-end h-10 mb-1">{[40,60,80,50,70,90,30].map((h, i) => <div key={i} className={`w-2 ${i === 5 ? "bg-slate-400" : "bg-slate-300"} rounded-t`} style={{ height: `${h}%` }} />)}</div></div>
              <div className="grid grid-cols-2 gap-1 mb-2">{[0,1].map((i) => <div key={i} className="bg-slate-200 rounded p-1 text-center"><div className="w-5 h-2 bg-slate-400 rounded mx-auto" /><div className="w-8 h-1 bg-slate-300 rounded mx-auto mt-0.5" /></div>)}</div>
              <div className="flex gap-1 flex-1">{[0,1,2,3].map((i) => <div key={i} className="w-8 h-8 bg-slate-200 rounded-lg" />)}</div>
              <LoFiTabBar active={3} />
            </div>
            <span className="text-sm font-medium text-slate-700">Прогресс</span>
          </div>
          {/* Описание */}
          <div className="max-w-xs">
            <h4 className="font-semibold text-slate-900 mb-3 text-sm">Ключевые элементы:</h4>
            <ul className="space-y-2 text-sm text-slate-600">
              {["Аватар + имя + уровень", "Общая статистика (курсы, дни, XP)", "Меню настроек списком", "График активности за неделю", "Счётчики (уроки, время)", "Галерея достижений"].map((t) => (
                <li key={t} className="flex items-start gap-2"><span className="text-slate-500 mt-0.5">–</span><span>{t}</span></li>
              ))}
            </ul>
          </div>
        </div>
      </Slide>

      {/* Слайд 9 — Анализ и корректировки */}
      <Slide title="Этап 7: Анализ и корректировки" footer="Анализ и корректировки">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-green-50 rounded-xl p-5 sm:p-6 border border-green-200">
            <h3 className="font-bold text-green-800 mb-4 flex items-center gap-2 text-sm sm:text-base">
              <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              Что работает хорошо
            </h3>
            <ul className="space-y-2 text-sm text-green-800">
              {["Tab bar — быстрый доступ ко всем разделам", "Главная сразу показывает продолжение", "Урок занимает весь экран — фокус", "Результат мотивирует через награды", "Иерархия из 3 уровней — просто"].map((t) => <li key={t}>+ {t}</li>)}
            </ul>
          </div>
          <div className="bg-amber-50 rounded-xl p-5 sm:p-6 border border-amber-200">
            <h3 className="font-bold text-amber-800 mb-4 flex items-center gap-2 text-sm sm:text-base">
              <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
              Внесённые корректировки
            </h3>
            <ul className="space-y-2 text-sm text-amber-800">
              {["Добавлен прогресс-бар в шапку урока", "Streak вынесен на главную", "Категории — горизонтальный скролл", "Кнопка «Продолжить» увеличена", "Добавлен экран результата с шерингом"].map((t) => <li key={t}>* {t}</li>)}
            </ul>
          </div>
        </div>
      </Slide>

      {/* Слайд 10 — Итоги */}
      <Slide title="Итоги и следующий этап" footer="Итоги">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {[
            { color: "violet", title: "Результаты ПЗ №2", items: ["22 экрана в 6 группах", "Tab Bar навигация", "User Flow для 3 сценариев", "8 Lo-Fi прототипов", "Интерактивные переходы", "Проведено тестирование"] },
            { color: "indigo", title: "Связь с ПЗ №1", items: ["Сценарии из анализа ЦА", "Tab Bar как у Duolingo", "Геймификация (streak, XP)", "Микроуроки 5–10 минут", "Простая навигация (Stepic)"] },
            { color: "blue", title: "ПЗ №3: UI-кит", items: ["Цветовая палитра", "Типографика", "Компоненты и состояния", "Иконки и иллюстрации", "Hi-Fi экраны", "Дизайн-система в Figma"] },
          ].map(({ color, title, items }) => (
            <div key={title} className={`bg-${color}-50 rounded-xl p-4 sm:p-5 border border-${color}-200`}>
              <h3 className={`font-bold text-${color}-800 mb-3 text-sm sm:text-base`}>{title}</h3>
              <ul className={`space-y-1 sm:space-y-2 text-xs sm:text-sm text-${color}-700`}>
                {items.map((t) => <li key={t}>— {t}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </Slide>

      {/* Прототип */}
      <Slide title="Интерактивный прототип LearnUp" footer="Все экраны приложения">
        <p className="text-sm text-slate-500 mb-6 text-pretty">
          Все экраны рабочего прототипа приложения — отрисованы целиком в рамке устройства.
        </p>
        <LoFiGallery scale={0.46} />
      </Slide>
    </PdfShell>
  )
}
