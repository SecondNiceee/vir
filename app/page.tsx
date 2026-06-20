import Link from "next/link"

const PZ_ITEMS = [
  {
    num: 1,
    badge: "Практическая работа №1",
    badgeColor: "bg-violet-100 text-violet-700",
    figmaColor: "bg-violet-600 hover:bg-violet-700",
    title: "Выбор темы и анализ аналогов",
    desc: "Обоснование выбора, целевая аудитория, сценарии, сравнительный анализ",
  },
  {
    num: 2,
    badge: "Практическая работа №2",
    badgeColor: "bg-indigo-100 text-indigo-700",
    figmaColor: "bg-indigo-600 hover:bg-indigo-700",
    title: "Lo-Fi прототипирование и навигация",
    desc: "Список экранов, тип навигации, User Flow, Lo-Fi прототипы",
  },
  {
    num: 3,
    badge: "Практическая работа №3",
    badgeColor: "bg-teal-100 text-teal-700",
    figmaColor: "bg-teal-600 hover:bg-teal-700",
    title: "Дизайн-система и UI-кит",
    desc: "Визуальные основы, цвета, типографика, компоненты, UI-кит",
  },
  {
    num: 4,
    badge: "Практическая работа №4",
    badgeColor: "bg-emerald-100 text-emerald-700",
    figmaColor: "bg-emerald-600 hover:bg-emerald-700",
    title: "Визуальный дизайн и Hi-Fi макеты",
    desc: "Hi-Fi экраны, визуальная иерархия, применение дизайн-системы",
  },
  {
    num: 5,
    badge: "Практическая работа №5",
    badgeColor: "bg-rose-100 text-rose-700",
    figmaColor: "bg-rose-600 hover:bg-rose-700",
    title: "Интерактивный прототип и презентация",
    desc: "Prototype-связи, сценарии, интерактивные состояния, защита проекта",
  },
]

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background px-6 py-12">
      <div className="text-center max-w-2xl">
        <h1 className="mb-2 text-balance text-4xl font-bold tracking-tight text-foreground">
          LearnUp
        </h1>
        <p className="mb-8 text-muted-foreground">
          Мобильное образовательное приложение — практические работы
        </p>

        {PZ_ITEMS.slice(0, 4).map((pz) => (
          <div key={pz.num} className="mb-8 p-6 rounded-2xl border border-border bg-card">
            <span className={`mb-3 inline-block rounded-full px-4 py-1.5 text-sm font-medium ${pz.badgeColor}`}>
              {pz.badge}
            </span>
            <h2 className="mb-2 text-xl font-semibold text-foreground">{pz.title}</h2>
            <p className="mb-4 text-sm text-muted-foreground">{pz.desc}</p>
            <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Link
                href={`/figma${pz.num}`}
                className={`inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-semibold text-white transition-colors ${pz.figmaColor}`}
              >
                /figma{pz.num}
                <span className="ml-2 text-xs font-normal opacity-80">Figma-контент</span>
              </Link>
              <Link
                href={`/pdf${pz.num}`}
                className="inline-flex items-center justify-center rounded-xl border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
              >
                /pdf{pz.num}
                <span className="ml-2 text-xs font-normal text-muted-foreground">PDF-слайды</span>
              </Link>
              <a
                href={`/pdf${pz.num}?print=1`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-teal-200 bg-teal-50 px-5 py-3 text-sm font-semibold text-teal-700 transition-colors hover:bg-teal-100"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                </svg>
                Экспорт PDF
              </a>
            </div>
          </div>
        ))}

        {/* Интерактивный прототип */}
        <div className="mb-8 p-6 rounded-2xl border-2 border-teal-400 bg-teal-50">
          <span className="mb-3 inline-block rounded-full bg-teal-500 px-4 py-1.5 text-sm font-medium text-white">
            Интерактивный прототип
          </span>
          <h2 className="mb-2 text-xl font-semibold text-foreground">LearnUp — 4 экрана с навигацией</h2>
          <p className="mb-4 text-sm text-muted-foreground">
            Главная, Курсы, Поиск, Профиль — переключение через нижний таббар
          </p>
          <Link
            href="/prototype"
            className="inline-flex items-center justify-center rounded-xl bg-teal-500 px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-teal-600"
          >
            Открыть прототип →
          </Link>
        </div>

        {/* ПЗ №5 */}
        {PZ_ITEMS.slice(4).map((pz) => (
          <div key={pz.num} className="mb-8 p-6 rounded-2xl border border-border bg-card">
            <span className={`mb-3 inline-block rounded-full px-4 py-1.5 text-sm font-medium ${pz.badgeColor}`}>
              {pz.badge}
            </span>
            <h2 className="mb-2 text-xl font-semibold text-foreground">{pz.title}</h2>
            <p className="mb-4 text-sm text-muted-foreground">{pz.desc}</p>
            <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Link
                href={`/figma${pz.num}`}
                className={`inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-semibold text-white transition-colors ${pz.figmaColor}`}
              >
                /figma{pz.num}
                <span className="ml-2 text-xs font-normal opacity-80">Figma-контент</span>
              </Link>
              <Link
                href={`/pdf${pz.num}`}
                className="inline-flex items-center justify-center rounded-xl border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
              >
                /pdf{pz.num}
                <span className="ml-2 text-xs font-normal text-muted-foreground">PDF-слайды</span>
              </Link>
              <a
                href={`/pdf${pz.num}?print=1`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-teal-200 bg-teal-50 px-5 py-3 text-sm font-semibold text-teal-700 transition-colors hover:bg-teal-100"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                </svg>
                Экспорт PDF
              </a>
            </div>
          </div>
        ))}

        {/* Task 2 — QuickDrop */}
        <div className="mt-12 pt-8 border-t border-border">
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">Другая тема</p>
          <Link
            href="/task2"
            className="block p-6 rounded-2xl border border-orange-200 bg-orange-50 hover:bg-orange-100 transition-colors text-left"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="w-9 h-9 bg-orange-500 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <span className="text-lg font-bold text-slate-900">QuickDrop</span>
            </div>
            <p className="text-sm text-slate-600">Мобильный сервис доставки — ПЗ №1–3</p>
            <span className="mt-3 inline-block text-sm font-semibold text-orange-600">Открыть /task2 →</span>
          </Link>
        </div>
      </div>
    </main>
  )
}
