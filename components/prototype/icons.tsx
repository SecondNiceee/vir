import type { SVGProps } from "react"

/* ---------------------------------------------------------------------------
 * Lightweight, consistent line/solid icons used across the LearnUp prototype
 * screens and the PDF presentations. All icons inherit `currentColor` so they
 * adapt to the surrounding text color. Replaces emoji usage for a clean,
 * professional look.
 * ------------------------------------------------------------------------- */

type IconName =
  | "code"
  | "language"
  | "palette"
  | "chart"
  | "flame"
  | "trophy"
  | "bolt"
  | "target"
  | "star"
  | "home"
  | "search"
  | "user"
  | "book"
  | "settings"
  | "check"
  | "close"
  | "doc"
  | "back"

const paths: Record<IconName, ReactPaths> = {
  // Programming / Python
  code: <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />,
  // Languages / English
  language: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 12h18M12 3a15 15 0 010 18M12 3a15 15 0 000 18" />
    </>
  ),
  // Design
  palette: (
    <>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 3a9 9 0 000 18c.83 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.01-.23-.26-.39-.62-.39-1 0-.83.67-1.49 1.5-1.49H16a5 5 0 005-5c0-4.42-4.03-8-9-8z"
      />
      <circle cx="7.5" cy="11.5" r="1" fill="currentColor" stroke="none" />
      <circle cx="11.5" cy="7.5" r="1" fill="currentColor" stroke="none" />
      <circle cx="16" cy="9.5" r="1" fill="currentColor" stroke="none" />
    </>
  ),
  // Analytics / Excel
  chart: <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6m4 6V7m4 12v-9M5 21h14" />,
  // Streak
  flame: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 3c.5 3-2 4-2 7a2 2 0 104 0c0-.5-.1-1 .2-1.5C15 11 16 12.5 16 14.5A4 4 0 018 14.5c0-1.5.6-2.8 1.5-3.8C10.6 9.4 12 7.5 12 3z"
    />
  ),
  trophy: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8 21h8m-4-4v4m-5-17h10v4a5 5 0 01-10 0V4zM7 4H4v2a3 3 0 003 3m10-5h3v2a3 3 0 01-3 3"
    />
  ),
  bolt: <path strokeLinecap="round" strokeLinejoin="round" d="M13 2L4.5 13H11l-1 9 8.5-11H12l1-9z" />,
  target: (
    <>
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="12" cy="12" r="0.5" fill="currentColor" stroke="none" />
    </>
  ),
  star: <path strokeLinecap="round" strokeLinejoin="round" d="M12 3l2.6 5.3 5.9.9-4.2 4.1 1 5.8-5.3-2.8-5.3 2.8 1-5.8L3.5 9.2l5.9-.9L12 3z" />,
  home: (
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
  ),
  search: <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />,
  user: <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />,
  book: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
    />
  ),
  settings: (
    <>
      <circle cx="12" cy="12" r="3" />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 11-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 11-2.83-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 112.83-2.83l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 112.83 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"
      />
    </>
  ),
  check: <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />,
  close: <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />,
  doc: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
    />
  ),
  back: <path strokeLinecap="round" strokeLinejoin="round" d="M11 17l-5-5m0 0l5-5m-5 5h12" />,
}

type ReactPaths = React.ReactNode

export function Icon({
  name,
  className = "w-6 h-6",
  strokeWidth = 1.8,
  ...rest
}: { name: IconName; strokeWidth?: number } & SVGProps<SVGSVGElement>) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      aria-hidden="true"
      {...rest}
    >
      {paths[name]}
    </svg>
  )
}

export type { IconName }
