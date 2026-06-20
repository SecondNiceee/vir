import { Cover, PdfShell, Slide } from "@/components/pdf/slide"
import { PrototypeGallery } from "@/components/pdf/prototype-screens"
import { Icon } from "@/components/prototype/icons"

export default function Pdf5Page() {
  return (
    <PdfShell pz={5} figmaContentHref="/figma5">
      <Cover
        icon={
          <svg className="w-9 h-9 sm:w-10 sm:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        }
        subtitle="Интерактивный прототип и презентация"
        taskLine1="Практическое задание №5"
        taskLine2="Финальная интерактивность и защита проекта"
      />

      {/* Слайд 2 — Цели */}
      <Slide title="Цели и задачи прототипирования" footer="Цели и задачи">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          <div>
            <h3 className="text-base sm:text-lg font-semibold text-slate-900 mb-3">Цель работы</h3>
            <div className="bg-teal-50 rounded-xl p-4 sm:p-5 border border-teal-100 mb-5">
              <p className="text-slate-700 text-sm sm:text-base">
                Создать интерактивный прототип на основе Hi-Fi макетов, демонстрирующий
                логику взаимодействия и пользовательские сценарии приложения LearnUp.
              </p>
            </div>
            <h3 className="text-base sm:text-lg font-semibold text-slate-900 mb-3">Исходные материалы</h3>
            <ul className="space-y-2 text-sm text-slate-600">
              {["Hi-Fi макеты из ПЗ №4", "User Flow и сценарии из ПЗ №1–2", "UI-кит с состояниями из ПЗ №3"].map((t) => (
                <li key={t} className="flex items-start gap-2">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-teal-500 shrink-0" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-base sm:text-lg font-semibold text-slate-900 mb-3">Задачи</h3>
            <div className="space-y-3">
              {["Определить основные сценарии", "Настроить переходы между экранами", "Реализовать интерактивные состояния", "Протестировать прототип", "Подготовить презентацию"].map((t, i) => (
                <div key={t} className="flex items-center gap-3 bg-slate-50 rounded-lg p-3">
                  <div className="w-8 h-8 bg-teal-500 rounded-lg flex items-center justify-center text-white font-bold text-sm shrink-0">{i + 1}</div>
                  <span className="text-slate-700 text-sm">{t}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Slide>

      {/* Слайд 3 — Основной сценарий */}
      <Slide title="Основной сценарий: Прохождение урока" footer="Основной сценарий">
        <div className="flex items-center justify-between gap-2 flex-wrap sm:flex-nowrap">
          {[
            { color: "amber", label: "Home", sub: "Start Frame", iconName: "home" as const },
            { color: "teal", label: "Детали курса", sub: "Tap: Продолжить", iconName: "book" as const },
            { color: "teal", label: "Урок", sub: "Tap: Начать", iconName: "doc" as const },
            { color: "emerald", label: "Success", sub: "Overlay", iconName: "check" as const },
            { color: "amber", label: "Home", sub: "Updated", iconName: "home" as const },
          ].flatMap(({ color, label, sub, iconName }, i, arr) => {
            const el = (
              <div key={`${label}-${i}`} className={`bg-${color}-100 text-${color}-800 px-3 py-3 sm:px-4 sm:py-4 rounded-xl font-medium text-center flex-1 max-w-[120px] sm:max-w-[140px]`}>
                <Icon name={iconName} className={`w-7 h-7 mx-auto mb-2 text-${color}-600`} strokeWidth={2} />
                <p className="text-xs sm:text-sm font-bold">{label}</p>
                <p className={`text-[10px] text-${color}-600`}>{sub}</p>
              </div>
            )
            return i < arr.length - 1
              ? [el, <svg key={`arr-${i}`} className="w-6 h-6 text-slate-300 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>]
              : [el]
          })}
        </div>
        <div className="mt-6 bg-slate-50 rounded-xl p-4">
          <p className="text-sm text-slate-600">
            <strong>Описание:</strong> Пользователь открывает приложение, видит карточку «Продолжить обучение»,
            переходит к курсу, начинает урок, отвечает на вопросы, получает Success-экран с XP и возвращается на Home.
          </p>
        </div>
      </Slide>

      {/* Слайд 4 — Альтернативные сценарии */}
      <Slide title="Альтернативные сценарии" footer="Альтернативные сценарии">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {[
            {
              color: "blue", label: "Поиск нового курса",
              steps: ["Home", "Tab: Курсы", "Каталог", "Tap: Карточка", "Детали"],
              note: "Переход через Tab Bar в каталог, выбор курса из списка",
            },
            {
              color: "violet", label: "Просмотр профиля",
              steps: ["Home", "Tab: Профиль", "Профиль", "Настройки"],
              note: "Просмотр статистики, достижений, переход в настройки",
            },
            {
              color: "red", label: "Сценарий ошибки",
              steps: ["Любой экран", "Network Error", "Error State", "Tap: Повторить"],
              note: "Показ Error Overlay с возможностью повторить",
            },
            {
              color: "slate", label: "Возврат назад",
              steps: ["Детали курса", "Tap: Back", "Предыдущий экран"],
              note: "Кнопка «Назад» и закрытие модальных окон",
            },
          ].map(({ color, label, steps, note }) => (
            <div key={label} className={`bg-${color}-50 rounded-xl p-4 sm:p-5`}>
              <h3 className={`font-semibold text-${color}-800 mb-3 text-sm sm:text-base`}>{label}</h3>
              <div className="flex items-center gap-2 text-xs text-slate-600 flex-wrap mb-3">
                {steps.flatMap((s, i) => i < steps.length - 1
                  ? [<span key={s} className="bg-white px-2 py-1 rounded">{s}</span>, <span key={`a-${i}`}>→</span>]
                  : [<span key={s} className="bg-white px-2 py-1 rounded">{s}</span>]
                )}
              </div>
              <p className="text-xs text-slate-500">{note}</p>
            </div>
          ))}
        </div>
      </Slide>

      {/* Слайд 5 — Типы переходов */}
      <Slide title="Типы переходов в Figma" footer="Типы переходов">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { color: "teal", label: "Navigate to", desc: "Стандартный переход между экранами", meta: [["Animation:", "Push"], ["Duration:", "300ms"]],
              icon: "M13 7l5 5m0 0l-5 5m5-5H6" },
            { color: "violet", label: "Open Overlay", desc: "Модальные окна поверх экрана", meta: [["Position:", "Center"], ["Background:", "Dim 50%"]],
              icon: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" },
            { color: "amber", label: "Swap", desc: "Переключение состояний компонента", meta: [["Use:", "Variants"], ["Animate:", "Smart"]],
              icon: "M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" },
            { color: "slate", label: "Back", desc: "Возврат на предыдущий экран", meta: [["Animation:", "Slide"], ["Trigger:", "On Tap"]],
              icon: "M11 17l-5-5m0 0l5-5m-5 5h12" },
          ].map(({ color, label, desc, meta, icon }) => (
            <div key={label} className={`bg-${color}-50 rounded-xl p-4 flex flex-col`}>
              <div className={`w-11 h-11 bg-${color}-100 rounded-lg flex items-center justify-center mb-3`}>
                <svg className={`w-5 h-5 text-${color}-600`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={icon} /></svg>
              </div>
              <h3 className={`font-semibold text-${color}-800 mb-2 text-sm`}>{label}</h3>
              <p className="text-xs text-slate-600 mb-3 flex-1">{desc}</p>
              <div className="text-xs space-y-1 bg-white rounded-lg p-2">
                {meta.map(([k, v]) => <p key={k}><span className="text-slate-500">{k}</span> {v}</p>)}
              </div>
            </div>
          ))}
        </div>
      </Slide>

      {/* Слайд 6 — Интерактивные состояния */}
      <Slide title="Интерактивные состояния компонентов" footer="Интерактивные состояния">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {/* Кнопка */}
          <div>
            <h3 className="text-xs font-semibold text-slate-500 uppercase mb-3">Кнопка Primary</h3>
            <div className="space-y-2">
              {[
                { cls: "bg-teal-500 text-white", label: "Default", note: "state=default" },
                { cls: "bg-teal-600 text-white ring-2 ring-teal-300", label: "Hover", note: "state=hover" },
                { cls: "bg-teal-700 text-white scale-95", label: "Pressed", note: "state=pressed" },
                { cls: "bg-slate-300 text-slate-500", label: "Disabled", note: "state=disabled" },
              ].map(({ cls, label, note }) => (
                <div key={label} className="flex items-center gap-3">
                  <div className={`text-xs font-semibold py-2 px-4 rounded-lg w-24 text-center ${cls}`}>{label}</div>
                  <span className="text-xs text-slate-500">{note}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Вариант ответа */}
          <div>
            <h3 className="text-xs font-semibold text-slate-500 uppercase mb-3">Вариант ответа</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2 p-2 rounded-lg border border-slate-200 text-xs"><div className="w-4 h-4 rounded-full border-2 border-slate-300" /><span>Default</span></div>
              <div className="flex items-center gap-2 p-2 rounded-lg border-2 border-teal-500 bg-teal-50 text-xs">
                <div className="w-4 h-4 rounded-full bg-teal-500 flex items-center justify-center"><svg className="w-2 h-2 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 13l4 4L19 7" /></svg></div>
                <span className="text-teal-700">Selected</span>
              </div>
              <div className="flex items-center gap-2 p-2 rounded-lg border-2 border-emerald-500 bg-emerald-50 text-xs"><div className="w-4 h-4 rounded-full bg-emerald-500" /><span className="text-emerald-700">Correct</span></div>
              <div className="flex items-center gap-2 p-2 rounded-lg border-2 border-red-500 bg-red-50 text-xs"><div className="w-4 h-4 rounded-full bg-red-500" /><span className="text-red-700">Wrong</span></div>
            </div>
          </div>

          {/* Tab Bar */}
          <div>
            <h3 className="text-xs font-semibold text-slate-500 uppercase mb-3">Tab Bar</h3>
            <div className="bg-white border border-slate-200 rounded-xl p-3 flex justify-around mb-3">
              <div className="flex flex-col items-center">
                <svg className="w-5 h-5 text-teal-500" fill="currentColor" viewBox="0 0 24 24"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" /></svg>
                <span className="text-[10px] text-teal-600 font-medium">Active</span>
              </div>
              {["M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z", "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253", "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"].map((d, i) => (
                <div key={i} className="flex flex-col items-center">
                  <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={d} /></svg>
                  <span className="text-[10px] text-slate-400">Inactive</span>
                </div>
              ))}
            </div>
            <p className="text-xs text-slate-500">Interactive Components с переключением при клике</p>
          </div>
        </div>
      </Slide>

      {/* Слайд 7 — Карта экранов */}
      <Slide title="Карта связей между экранами" footer="Карта экранов">
        <div className="bg-slate-50 rounded-xl p-5 sm:p-6">
          <div className="grid grid-cols-5 gap-3 text-center text-xs">
            <div /><div />
            <div className="bg-amber-100 border-2 border-amber-300 rounded-lg p-2">
              <div className="w-6 h-6 bg-amber-400 rounded mx-auto mb-1" />
              <p className="font-bold text-amber-800">Home</p>
            </div>
            <div /><div />

            {[
              { color: "blue", label: "Поиск" },
              { color: "violet", label: "Каталог" },
              { color: "teal", label: "Детали", border: true },
              { color: "slate", label: "Профиль" },
              { color: "slate", label: "Настройки" },
            ].map(({ color, label, border }) => (
              <div key={label} className={`bg-${color}-100 ${border ? "border-2 border-teal-300" : ""} rounded-lg p-2`}>
                <div className={`w-5 h-5 bg-${color}-400 rounded mx-auto mb-1`} />
                <p className={`font-bold text-${color}-800 text-[10px] sm:text-xs`}>{label}</p>
              </div>
            ))}

            <div /><div />
            <div className="bg-teal-500 text-white rounded-lg p-2">
              <div className="w-5 h-5 bg-teal-300 rounded mx-auto mb-1" />
              <p className="font-bold text-[10px] sm:text-xs">Урок</p>
            </div>
            <div /><div />

            <div />
            <div className="bg-red-100 rounded-lg p-2">
              <div className="w-5 h-5 bg-red-400 rounded mx-auto mb-1" />
              <p className="font-bold text-red-800 text-[10px] sm:text-xs">Error</p>
            </div>
            <div />
            <div className="bg-emerald-100 rounded-lg p-2">
              <div className="w-5 h-5 bg-emerald-400 rounded mx-auto mb-1" />
              <p className="font-bold text-emerald-800 text-[10px] sm:text-xs">Success</p>
            </div>
            <div />
          </div>
        </div>
      </Slide>

      {/* Слайд 8 — Тестирование */}
      <Slide title="Тестирование прототипа" footer="Тестирование">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
          <div>
            <h3 className="text-base sm:text-lg font-semibold text-slate-900 mb-4">Чек-лист навигации</h3>
            <div className="space-y-2">
              {["Tab Bar переключает все 4 вкладки", "Кнопка «Назад» работает везде", "Карточки курсов кликабельны", "Нет «тупиков» без выхода", "Модалки закрываются"].map((t) => (
                <div key={t} className="flex items-center gap-2 bg-emerald-50 rounded-lg p-2">
                  <svg className="w-4 h-4 text-emerald-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  <span className="text-sm text-slate-700">{t}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-base sm:text-lg font-semibold text-slate-900 mb-4">Чек-лист интерактивности</h3>
            <div className="space-y-2">
              {["Выбор ответа меняет состояние", "Кнопка «Проверить» показывает результат", "Success возвращает на Home", "Error предлагает повторить", "Фильтры переключаются визуально"].map((t) => (
                <div key={t} className="flex items-center gap-2 bg-emerald-50 rounded-lg p-2">
                  <svg className="w-4 h-4 text-emerald-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  <span className="text-sm text-slate-700">{t}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Slide>

      {/* Слайд 9 — Ссылка на прототип */}
      <Slide title="Ссылка на прототип" footer="Демонстрация">
        <div className="flex flex-col items-center justify-center py-6 text-center">
          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-teal-100 rounded-2xl flex items-center justify-center mb-5">
            <svg className="w-8 h-8 sm:w-10 sm:h-10 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4">Интерактивный прототип LearnUp</h3>
          <div className="bg-slate-100 rounded-xl px-6 py-4 mb-5">
            <p className="text-slate-600 font-mono text-sm">figma.com/proto/[ваша-ссылка]</p>
          </div>
          <p className="text-slate-500 text-sm max-w-md text-pretty">
            Вставьте ссылку на прототип из Figma (Share → Copy Link → Prototype)
            или QR-код для быстрого доступа на мобильном устройстве
          </p>
        </div>
      </Slide>

      {/* Слайд 10 — Итоги */}
      <section className="bg-gradient-to-br from-teal-600 to-emerald-700 rounded-2xl shadow-xl overflow-hidden print:rounded-none print:shadow-none">
        <div className="flex flex-col items-center justify-center text-white px-6 py-10 sm:py-14 text-center">
          <h1 className="text-2xl sm:text-3xl font-bold mb-8 text-balance">Итоги проекта LearnUp</h1>
          <div className="grid grid-cols-5 gap-3 sm:gap-4 mb-8 w-full max-w-lg">
            {[["ПЗ1", "Анализ"], ["ПЗ2", "Lo-Fi"], ["ПЗ3", "UI-кит"], ["ПЗ4", "Hi-Fi"], ["ПЗ5", "Прототип"]].map(([n, l], i) => (
              <div key={n} className={`rounded-xl p-3 text-center ${i === 4 ? "bg-white/20 ring-2 ring-white/50" : "bg-white/10"}`}>
                <p className="text-xl sm:text-2xl font-bold">{n}</p>
                <p className="text-[10px] sm:text-xs text-white/70">{l}</p>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-3 gap-6 mb-8">
            {[["6", "Экранов"], ["4", "Сценария"], ["12+", "Связей"]].map(([n, l]) => (
              <div key={l} className="text-center">
                <p className="text-3xl sm:text-4xl font-bold">{n}</p>
                <p className="text-sm text-white/70">{l}</p>
              </div>
            ))}
          </div>
          <p className="text-lg sm:text-xl font-semibold">Спасибо за внимание!</p>
        </div>
      </section>

      {/* Прототип */}
      <Slide title="Интерактивный прототип LearnUp" footer="Все экраны приложения">
        <p className="text-sm text-slate-500 mb-6 text-pretty">
          Все экраны рабочего прототипа приложения — отрисованы целиком в рамке устройства.
        </p>
        <PrototypeGallery />
      </Slide>
    </PdfShell>
  )
}
