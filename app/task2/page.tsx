import Link from "next/link"

export default function Task2Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background px-6 py-12">
      <div className="text-center max-w-2xl w-full">
        <div className="mb-2 flex items-center justify-center gap-3">
          <div className="inline-flex items-center justify-center w-10 h-10 bg-orange-500 rounded-xl">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-foreground text-balance">
            QuickDrop
          </h1>
        </div>
        <p className="mb-2 text-muted-foreground">
          Мобильный сервис доставки — практические работы
        </p>
        <Link href="/" className="mb-8 inline-block text-sm text-muted-foreground hover:text-foreground transition-colors">
          ← Назад к главной
        </Link>

        {/* ПЗ №1 */}
        <div className="mb-6 p-6 rounded-2xl border border-border bg-card">
          <span className="mb-3 inline-block rounded-full bg-orange-100 px-4 py-1.5 text-sm font-medium text-orange-700">
            Практическая работа №1
          </span>
          <h2 className="mb-2 text-xl font-semibold text-foreground">Выбор темы и анализ аналогов</h2>
          <p className="mb-4 text-sm text-muted-foreground">
            Тема проекта, целевая аудитория, пользовательские сценарии, анализ аналогов
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Link
              href="/task2/figma1"
              className="inline-flex items-center justify-center rounded-xl bg-orange-500 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-orange-600"
            >
              /task2/figma1
              <span className="ml-2 text-xs font-normal opacity-80">Figma-контент</span>
            </Link>
            <Link
              href="/task2/pdf1"
              className="inline-flex items-center justify-center rounded-xl border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
            >
              /task2/pdf1
              <span className="ml-2 text-xs font-normal text-muted-foreground">PDF-слайды</span>
            </Link>
          </div>
        </div>

        {/* ПЗ №2 */}
        <div className="mb-6 p-6 rounded-2xl border border-border bg-card">
          <span className="mb-3 inline-block rounded-full bg-blue-100 px-4 py-1.5 text-sm font-medium text-blue-700">
            Практическая работа №2
          </span>
          <h2 className="mb-2 text-xl font-semibold text-foreground">Lo-Fi прототипирование и навигация</h2>
          <p className="mb-4 text-sm text-muted-foreground">
            Список экранов, тип навигации, User Flow, Lo-Fi прототипы
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Link
              href="/task2/figma2"
              className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
            >
              /task2/figma2
              <span className="ml-2 text-xs font-normal opacity-80">Figma-контент</span>
            </Link>
            <Link
              href="/task2/pdf2"
              className="inline-flex items-center justify-center rounded-xl border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
            >
              /task2/pdf2
              <span className="ml-2 text-xs font-normal text-muted-foreground">PDF-слайды</span>
            </Link>
          </div>
        </div>

        {/* ПЗ №3 */}
        <div className="mb-6 p-6 rounded-2xl border border-border bg-card">
          <span className="mb-3 inline-block rounded-full bg-teal-100 px-4 py-1.5 text-sm font-medium text-teal-700">
            Практическая работа №3
          </span>
          <h2 className="mb-2 text-xl font-semibold text-foreground">Дизайн-система и UI-кит</h2>
          <p className="mb-4 text-sm text-muted-foreground">
            Визуальные основы, цвета, типографика, компоненты, UI-кит
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Link
              href="/task2/figma3"
              className="inline-flex items-center justify-center rounded-xl bg-teal-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-teal-700"
            >
              /task2/figma3
              <span className="ml-2 text-xs font-normal opacity-80">Figma-контент</span>
            </Link>
            <Link
              href="/task2/pdf3"
              className="inline-flex items-center justify-center rounded-xl border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
            >
              /task2/pdf3
              <span className="ml-2 text-xs font-normal text-muted-foreground">PDF-слайды</span>
            </Link>
          </div>
        </div>

        {/* ПЗ №4 */}
        <div className="mb-6 p-6 rounded-2xl border border-border bg-card">
          <span className="mb-3 inline-block rounded-full bg-orange-100 px-4 py-1.5 text-sm font-medium text-orange-700">
            Практическая работа №4
          </span>
          <h2 className="mb-2 text-xl font-semibold text-foreground">Hi-Fi макеты интерфейса</h2>
          <p className="mb-4 text-sm text-muted-foreground">
            Визуально проработанные экраны: Home, Оформление заказа, Отслеживание, История
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Link
              href="/task2/figma4"
              className="inline-flex items-center justify-center rounded-xl bg-orange-500 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-orange-600"
            >
              /task2/figma4
              <span className="ml-2 text-xs font-normal opacity-80">Figma-контент</span>
            </Link>
            <Link
              href="/task2/pdf4"
              className="inline-flex items-center justify-center rounded-xl border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
            >
              /task2/pdf4
              <span className="ml-2 text-xs font-normal text-muted-foreground">PDF-слайды</span>
            </Link>
          </div>
        </div>

        {/* ПЗ №5 */}
        <div className="p-6 rounded-2xl border border-border bg-card">
          <span className="mb-3 inline-block rounded-full bg-slate-100 px-4 py-1.5 text-sm font-medium text-slate-700">
            Практическая работа №5
          </span>
          <h2 className="mb-2 text-xl font-semibold text-foreground">Интерактивный прототип</h2>
          <p className="mb-4 text-sm text-muted-foreground">
            Сценарии, переходы, жесты, анимации, тестирование и итерации
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Link
              href="/task2/figma5"
              className="inline-flex items-center justify-center rounded-xl bg-slate-700 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
            >
              /task2/figma5
              <span className="ml-2 text-xs font-normal opacity-80">Figma-контент</span>
            </Link>
            <Link
              href="/task2/pdf5"
              className="inline-flex items-center justify-center rounded-xl border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
            >
              /task2/pdf5
              <span className="ml-2 text-xs font-normal text-muted-foreground">PDF-слайды</span>
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
