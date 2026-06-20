import Link from "next/link"

export function BackHeader({ title, backHref }: { title: string; backHref: string }) {
  return (
    <div className="flex items-center gap-3 px-5 pt-12 pb-4 border-b border-slate-100">
      <Link
        href={backHref}
        className="w-9 h-9 flex items-center justify-center rounded-xl bg-slate-100 hover:bg-slate-200 transition-colors"
      >
        <svg className="w-5 h-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </Link>
      <h1 className="text-lg font-bold text-slate-900">{title}</h1>
    </div>
  )
}
