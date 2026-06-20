import type { ReactNode } from "react"

/* ---------------------------------------------------------------------------
 * Unified presentation primitives for all ПЗ PDF pages (/pdf1 … /pdf5).
 * One consistent visual language: teal/emerald brand, slate neutrals,
 * even spacing, identical headers / covers / slide cards / footers.
 * ------------------------------------------------------------------------- */

export function PdfShell({
  pz,
  figmaContentHref,
  children,
  footer,
}: {
  pz: number
  figmaContentHref: string
  children: ReactNode
  footer?: string
}) {
  return (
    <div className="min-h-screen bg-slate-100">
      <header className="bg-slate-900 text-white sticky top-0 z-20 print:hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <div>
              <h1 className="text-lg sm:text-xl font-semibold">{`ПЗ №${pz} — PDF Презентация`}</h1>
              <p className="text-sm text-slate-400">10 слайдов для сдачи</p>
            </div>
            <div className="flex gap-4">
              <a
                href="https://www.figma.com/design/drgb5K6Uy1RSZPrIkdSa2b/Untitled?node-id=0-1&t=DqGdWAbo1FMVYyst-1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-teal-300 hover:text-teal-200 transition-colors"
              >
                Figma-проект
              </a>
              <a href={figmaContentHref} className="text-sm text-emerald-300 hover:text-emerald-200 transition-colors">
                Figma-контент
              </a>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-6 sm:py-10">
        <div className="space-y-6 sm:space-y-8 print:space-y-0">{children}</div>
      </main>

      {footer && (
        <footer className="border-t border-slate-200 bg-white print:hidden">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 py-4 text-center text-sm text-slate-500">{footer}</div>
        </footer>
      )}
    </div>
  )
}

/** Unified gradient title / cover slide. */
export function Cover({
  icon,
  subtitle,
  taskLine1,
  taskLine2,
}: {
  icon: ReactNode
  subtitle: string
  taskLine1: string
  taskLine2: string
}) {
  return (
    <section className="bg-gradient-to-br from-teal-600 to-emerald-700 rounded-2xl shadow-xl overflow-hidden print:rounded-none print:shadow-none print:break-after-page">
      <div className="flex flex-col items-center justify-center text-white px-6 py-10 sm:py-14 text-center">
        <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/15 ring-1 ring-white/25 rounded-2xl flex items-center justify-center mb-5">
          {icon}
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold mb-2">LearnUp</h1>
        <p className="text-lg sm:text-xl text-white/85 mb-6 text-balance">{subtitle}</p>
        <div className="text-sm text-white/70">
          <p>{taskLine1}</p>
          <p>{taskLine2}</p>
        </div>
        <div className="mt-6 text-sm text-white/85">
          <p className="font-medium">Подготовил: Титов Николай</p>
          <p>ТКБО-02-23</p>
        </div>
        <div className="mt-5 text-xs text-white/70 max-w-lg">
          <p className="break-all">
            Figma:{" "}
            <a
              href="https://www.figma.com/design/drgb5K6Uy1RSZPrIkdSa2b/Untitled?node-id=0-1&t=DqGdWAbo1FMVYyst-1"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-white"
            >
              figma.com/design/drgb5K6Uy1RSZPrIkdSa2b
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}

/** Unified white content slide with dark title bar and optional footer label. */
export function Slide({
  title,
  footer,
  children,
  bodyClassName = "p-5 sm:p-6",
}: {
  title: string
  footer?: string
  children: ReactNode
  bodyClassName?: string
}) {
  return (
    <section className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden flex flex-col print:rounded-none print:shadow-none print:border-0 print:break-after-page">
      <div className="bg-slate-800 text-white px-5 sm:px-6 py-3">
        <h2 className="text-lg sm:text-xl font-bold text-balance">{title}</h2>
      </div>
      <div className={bodyClassName}>{children}</div>
      {footer && (
        <div className="bg-slate-50 px-6 py-3 text-center text-slate-500 text-sm print:hidden">{footer}</div>
      )}
    </section>
  )
}
