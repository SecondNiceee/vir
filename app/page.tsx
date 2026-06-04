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
        <div className="p-6 rounded-2xl border border-border bg-card">
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
      </div>
    </main>
  )
}
