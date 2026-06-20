import Link from "next/link"

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
        
        {/* ПЗ №1 */}
        <div className="mb-8 p-6 rounded-2xl border border-border bg-card">
          <span className="mb-3 inline-block rounded-full bg-violet-100 px-4 py-1.5 text-sm font-medium text-violet-700">
            Практическая работа №1
          </span>
          <h2 className="mb-2 text-xl font-semibold text-foreground">Выбор темы и анализ аналогов</h2>
          <p className="mb-4 text-sm text-muted-foreground">
            Обоснование выбора, целевая аудитория, сценарии, сравнительный анализ
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Link
              href="/figma1"
              className="inline-flex items-center justify-center rounded-xl bg-violet-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-violet-700"
            >
              /figma1
              <span className="ml-2 text-xs font-normal opacity-80">Figma-контент</span>
            </Link>
            <Link
              href="/pdf1"
              className="inline-flex items-center justify-center rounded-xl border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
            >
              /pdf1
              <span className="ml-2 text-xs font-normal text-muted-foreground">PDF-слайды</span>
            </Link>
          </div>
        </div>

        {/* ПЗ №2 */}
        <div className="mb-8 p-6 rounded-2xl border border-border bg-card">
          <span className="mb-3 inline-block rounded-full bg-indigo-100 px-4 py-1.5 text-sm font-medium text-indigo-700">
            Практическая работа №2
          </span>
          <h2 className="mb-2 text-xl font-semibold text-foreground">Lo-Fi прототипирование и навигация</h2>
          <p className="mb-4 text-sm text-muted-foreground">
            Список экранов, тип навигации, User Flow, Lo-Fi прототипы
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Link
              href="/figma2"
              className="inline-flex items-center justify-center rounded-xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-indigo-700"
            >
              /figma2
              <span className="ml-2 text-xs font-normal opacity-80">Figma-контент</span>
            </Link>
            <Link
              href="/pdf2"
              className="inline-flex items-center justify-center rounded-xl border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
            >
              /pdf2
              <span className="ml-2 text-xs font-normal text-muted-foreground">PDF-слайды</span>
            </Link>
          </div>
        </div>

        {/* ПЗ №3 */}
        <div className="mb-8 p-6 rounded-2xl border border-border bg-card">
          <span className="mb-3 inline-block rounded-full bg-teal-100 px-4 py-1.5 text-sm font-medium text-teal-700">
            Практическая работа №3
          </span>
          <h2 className="mb-2 text-xl font-semibold text-foreground">Дизайн-система и UI-кит</h2>
          <p className="mb-4 text-sm text-muted-foreground">
            Визуальные основы, цвета, типографика, компоненты, UI-кит
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Link
              href="/figma3"
              className="inline-flex items-center justify-center rounded-xl bg-teal-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-teal-700"
            >
              /figma3
              <span className="ml-2 text-xs font-normal opacity-80">Figma-контент</span>
            </Link>
            <Link
              href="/pdf3"
              className="inline-flex items-center justify-center rounded-xl border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
            >
              /pdf3
              <span className="ml-2 text-xs font-normal text-muted-foreground">PDF-слайды</span>
            </Link>
          </div>
        </div>

        {/* ПЗ №4 */}
        <div className="mb-8 p-6 rounded-2xl border border-border bg-card">
          <span className="mb-3 inline-block rounded-full bg-emerald-100 px-4 py-1.5 text-sm font-medium text-emerald-700">
            Практическая работа №4
          </span>
          <h2 className="mb-2 text-xl font-semibold text-foreground">Визуальный дизайн и Hi-Fi макеты</h2>
          <p className="mb-4 text-sm text-muted-foreground">
            Hi-Fi экраны, визуальная иерархия, применение дизайн-системы
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Link
              href="/figma4"
              className="inline-flex items-center justify-center rounded-xl bg-emerald-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-emerald-700"
            >
              /figma4
              <span className="ml-2 text-xs font-normal opacity-80">Figma-контент</span>
            </Link>
            <Link
              href="/pdf4"
              className="inline-flex items-center justify-center rounded-xl border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
            >
              /pdf4
              <span className="ml-2 text-xs font-normal text-muted-foreground">PDF-слайды</span>
            </Link>
          </div>
        </div>

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
        <div className="mb-8 p-6 rounded-2xl border border-border bg-card">
          <span className="mb-3 inline-block rounded-full bg-rose-100 px-4 py-1.5 text-sm font-medium text-rose-700">
            Практическая работа №5
          </span>
          <h2 className="mb-2 text-xl font-semibold text-foreground">Интерактивный прототип и презентация</h2>
          <p className="mb-4 text-sm text-muted-foreground">
            Prototype-связи, сценарии, интерактивные состояния, защита проекта
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Link
              href="/figma5"
              className="inline-flex items-center justify-center rounded-xl bg-rose-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-rose-700"
            >
              /figma5
              <span className="ml-2 text-xs font-normal opacity-80">Figma-контент</span>
            </Link>
            <Link
              href="/pdf5"
              className="inline-flex items-center justify-center rounded-xl border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
            >
              /pdf5
              <span className="ml-2 text-xs font-normal text-muted-foreground">PDF-слайды</span>
            </Link>
          </div>
        </div>

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
