import type { CSSProperties, ReactNode } from "react"

/**
 * Renders a screen inside a phone bezel scaled down WITHOUT cropping.
 *
 * The screen is laid out at its real design width (default 390px) and scaled
 * with CSS `zoom`. Unlike `transform: scale`, `zoom` shrinks the element's
 * layout box as well, so the surrounding bezel collapses to the exact scaled
 * height of the content — the full screen is always visible, never clipped.
 */
export function PhoneFrame({
  children,
  label,
  scale = 0.62,
  designWidth = 390,
}: {
  children: ReactNode
  label?: string
  scale?: number
  designWidth?: number
}) {
  const displayWidth = designWidth * scale

  return (
    <figure className="flex flex-col items-center gap-3 m-0">
      <div className="rounded-[2.4rem] bg-slate-900 p-2.5 shadow-2xl ring-1 ring-slate-900/10">
        <div
          className="relative overflow-hidden rounded-[1.9rem] bg-white"
          style={{ width: displayWidth }}
        >
          {/* notch */}
          <div className="pointer-events-none absolute left-1/2 top-0 z-20 h-5 w-24 -translate-x-1/2 rounded-b-2xl bg-slate-900" />
          <div style={{ width: designWidth, zoom: scale } as CSSProperties}>{children}</div>
        </div>
      </div>
      {label && <figcaption className="text-sm font-medium text-slate-600">{label}</figcaption>}
    </figure>
  )
}
