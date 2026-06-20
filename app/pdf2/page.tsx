import { Cover, PdfShell, Slide } from "@/components/pdf/slide"
import { LoFiGallery } from "@/components/pdf/prototype-screens"
import { PhoneFrame } from "@/components/prototype/phone-frame"
import LoFi1 from "@/app/prototype/lo-fi/1/page"
import LoFi2 from "@/app/prototype/lo-fi/2/page"
import LoFi4 from "@/app/prototype/lo-fi/4/page"
import LoFi7 from "@/app/prototype/lo-fi/7/page"
import LoFi8 from "@/app/prototype/lo-fi/8/page"
import LoFi9 from "@/app/prototype/lo-fi/9/page"

const TAB_ICONS = [
  { label: "Главная", d: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" },
  { label: "Каталог", d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" },
  { label: "Курсы", d: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" },
  { label: "Прогресс", d: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" },
  { label: "Профиль", d: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" },
]


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
            {/* Phone shell */}
            <div className="relative bg-gradient-to-b from-[#1c2a3a] to-[#151e2a] rounded-[2.6rem] shadow-2xl ring-1 ring-white/10" style={{ width: 270 }}>
              {/* side buttons */}
              <div className="absolute -left-[3px] top-20 w-[3px] h-8 bg-slate-600 rounded-l-sm" />
              <div className="absolute -left-[3px] top-32 w-[3px] h-12 bg-slate-600 rounded-l-sm" />
              <div className="absolute -left-[3px] top-48 w-[3px] h-12 bg-slate-600 rounded-l-sm" />
              <div className="absolute -right-[3px] top-24 w-[3px] h-16 bg-slate-600 rounded-r-sm" />
              {/* inner bezel */}
              <div className="p-[10px]">
                {/* dynamic island */}
                <div className="flex justify-center pt-2 pb-2">
                  <div className="w-20 h-[18px] bg-black rounded-full" />
                </div>
                {/* screen */}
                <div className="bg-[#1e2d40] rounded-[1.9rem] overflow-hidden" style={{ aspectRatio: "9/16" }}>
                  <div className="h-full flex flex-col">
                    {/* status bar */}
                    <div className="flex justify-between items-center px-4 pt-2 pb-1">
                      <span className="text-[10px] text-slate-300 font-semibold tracking-tight">9:41</span>
                      <div className="flex items-center gap-[5px]">
                        {/* signal */}
                        <div className="flex items-end gap-[2px] h-3">
                          {[40, 60, 80, 100].map((h, i) => (
                            <div key={i} className="w-[3px] bg-slate-300 rounded-sm" style={{ height: `${h}%`, opacity: i < 3 ? 1 : 1 }} />
                          ))}
                        </div>
                        {/* wifi */}
                        <svg className="w-3 h-3 text-slate-300" fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24">
                          <path strokeLinecap="round" d="M5 12.5a9.5 9.5 0 0114 0M8.5 16a5 5 0 017 0M12 19.5h.01" />
                        </svg>
                        {/* battery */}
                        <div className="flex items-center gap-[1px]">
                          <div className="w-5 h-[10px] rounded-[2px] border border-slate-400 relative overflow-hidden p-[1px]">
                            <div className="h-full w-4/5 bg-slate-300 rounded-[1px]" />
                          </div>
                          <div className="w-[2px] h-[5px] bg-slate-400 rounded-r-sm" />
                        </div>
                      </div>
                    </div>
                    {/* screen content */}
                    <div className="flex-1 px-4 py-3 flex flex-col gap-3 overflow-hidden">
                      {/* greeting */}
                      <div className="flex justify-between items-center">
                        <div>
                          <div className="w-20 h-[6px] bg-slate-600 rounded-full mb-1" />
                          <div className="w-28 h-[9px] bg-slate-400 rounded-full" />
                        </div>
                        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-teal-500 to-teal-700 ring-2 ring-teal-400/30" />
                      </div>
                      {/* streak card */}
                      <div className="bg-[#243447] rounded-xl px-3 py-2 flex items-center gap-2">
                        <div className="w-7 h-7 rounded-lg bg-amber-500/20 flex items-center justify-center">
                          <div className="w-3.5 h-3.5 rounded-sm bg-amber-400" />
                        </div>
                        <div className="flex-1">
                          <div className="w-16 h-[5px] bg-slate-500 rounded-full mb-1" />
                          <div className="w-10 h-[7px] bg-slate-300 rounded-full" />
                        </div>
                        <div className="w-8 h-[6px] bg-teal-500/60 rounded-full" />
                      </div>
                      {/* continue block */}
                      <div>
                        <div className="w-24 h-[6px] bg-slate-500 rounded-full mb-2" />
                        <div className="bg-[#243447] rounded-xl p-2.5 flex gap-2.5">
                          <div className="w-10 h-10 rounded-lg bg-teal-500/20 shrink-0" />
                          <div className="flex-1 flex flex-col justify-center gap-1.5">
                            <div className="w-full h-[5px] bg-slate-400 rounded-full" />
                            <div className="w-3/4 h-[4px] bg-slate-600 rounded-full" />
                            <div className="w-full h-1.5 bg-slate-700 rounded-full overflow-hidden">
                              <div className="h-full w-2/3 bg-teal-500 rounded-full" />
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* course cards row */}
                      <div>
                        <div className="w-20 h-[6px] bg-slate-500 rounded-full mb-2" />
                        <div className="flex gap-2">
                          {[0, 1].map((i) => (
                            <div key={i} className="flex-1 bg-[#243447] rounded-xl p-2">
                              <div className="w-full aspect-[4/3] rounded-lg bg-slate-700/60 mb-1.5" />
                              <div className="w-full h-[4px] bg-slate-500 rounded-full mb-1" />
                              <div className="w-2/3 h-[4px] bg-slate-600 rounded-full" />
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    {/* ── Tab Bar ── */}
                    <div className="bg-[#131d2a] border-t border-white/5 px-2 pt-2.5 pb-3">
                      <div className="flex justify-around items-end">
                        {TAB_ICONS.map(({ label, d }, i) => {
                          const active = i === 0
                          return (
                            <div key={label} className="flex flex-col items-center gap-1">
                              {active ? (
                                /* active pill */
                                <div className="flex items-center gap-1.5 bg-teal-500 rounded-2xl px-3 py-1.5">
                                  <svg style={{ width: 15, height: 15 }} fill="none" stroke="white" strokeWidth={2.2} viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d={d} />
                                  </svg>
                                  <span className="text-[8px] font-bold text-white leading-none">{label}</span>
                                </div>
                              ) : (
                                /* inactive icon */
                                <div className="w-8 h-8 rounded-xl flex items-center justify-center">
                                  <svg style={{ width: 16, height: 16 }} fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24" className="text-slate-500">
                                    <path strokeLinecap="round" strokeLinejoin="round" d={d} />
                                  </svg>
                                </div>
                              )}
                              {!active && (
                                <span className="text-[7px] text-slate-600 font-medium leading-none">{label}</span>
                              )}
                            </div>
                          )
                        })}
                      </div>
                      {/* home indicator */}
                      <div className="flex justify-center mt-2">
                        <div className="w-20 h-[3px] bg-slate-600 rounded-full" />
                      </div>
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
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-14">
          <PhoneFrame label="Главная" scale={0.58}><LoFi1 /></PhoneFrame>
          <PhoneFrame label="Каталог" scale={0.58}><LoFi2 /></PhoneFrame>
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
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-14">
          <PhoneFrame label="Экран урока" scale={0.58}><LoFi7 /></PhoneFrame>
          <PhoneFrame label="Результат урока" scale={0.58}><LoFi8 /></PhoneFrame>
          <div className="max-w-xs">
            <h4 className="font-semibold text-slate-900 mb-3 text-sm">Ключевые элементы:</h4>
            <ul className="space-y-2 text-sm text-slate-600">
              {["Прог��есс-бар в шапке урока", "Видео/медиа контент", "Блок теории с подсказками", "Иконка успеха + поздравление", "Статистика урока (XP, время)", "Достижение за серию"].map((t) => (
                <li key={t} className="flex items-start gap-2"><span className="text-blue-500 mt-0.5">–</span><span>{t}</span></li>
              ))}
            </ul>
          </div>
        </div>
      </Slide>

      {/* Слайд 8 — Lo-Fi Профиль и Прогресс */}
      <Slide title="Этап 5: Lo-Fi прототипы — Профиль и Прогресс" footer="Lo-Fi Профиль и Прогресс">
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-14">
          <PhoneFrame label="Профиль" scale={0.58}><LoFi4 /></PhoneFrame>
          <PhoneFrame label="Прогресс" scale={0.58}><LoFi9 /></PhoneFrame>
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
        <LoFiGallery />
      </Slide>
    </PdfShell>
  )
}
