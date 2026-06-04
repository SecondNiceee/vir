import Link from "next/link"

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background px-6">
      <div className="text-center">
        <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
          Практическая работа №1
        </span>
        <h1 className="mb-4 text-balance text-4xl font-bold tracking-tight text-foreground">
          LearnUp
        </h1>
        <p className="mb-8 max-w-md text-muted-foreground">
          Мобильное образовательное приложение — выбор темы и анализ аналогов
        </p>
        
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Link
            href="/figma1"
            className="inline-flex items-center justify-center rounded-xl bg-primary px-8 py-4 text-lg font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            /figma1
            <span className="ml-2 text-sm font-normal opacity-80">Figma-контент</span>
          </Link>
          <Link
            href="/pdf1"
            className="inline-flex items-center justify-center rounded-xl border border-border bg-card px-8 py-4 text-lg font-semibold text-foreground transition-colors hover:bg-muted"
          >
            /pdf1
            <span className="ml-2 text-sm font-normal text-muted-foreground">PDF-слайды</span>
          </Link>
        </div>
      </div>
    </main>
  )
}
