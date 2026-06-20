import Link from "next/link"

interface BackHeaderProps {
  title: string
  backHref?: string
}

export function QDBackHeader({ title, backHref = "/task2/prototype/profile" }: BackHeaderProps) {
  return (
    <div className="flex items-center gap-3 px-4 py-4 border-b border-slate-100 bg-white">
      <Link
        href={backHref}
        className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center flex-shrink-0"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-slate-700">
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </Link>
      <h1 className="text-base font-bold text-slate-900">{title}</h1>
    </div>
  )
}
