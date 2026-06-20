"use client"

import { useEffect } from "react"
import { useSearchParams } from "next/navigation"

/**
 * Automatically calls window.print() when ?print=1 is in the URL.
 * Drop this inside PdfShell so every /pdfX?print=1 auto-triggers the
 * browser's Save as PDF dialog without any server-side dependency.
 */
export function PrintTrigger() {
  const params = useSearchParams()

  useEffect(() => {
    if (params.get("print") === "1") {
      // Small delay so all fonts / images fully render before the dialog opens
      const t = setTimeout(() => window.print(), 800)
      return () => clearTimeout(t)
    }
  }, [params])

  return null
}
