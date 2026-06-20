import type { ReactNode } from "react"
import { PhoneFrame } from "@/components/prototype/phone-frame"
import MainScreen from "@/app/prototype/main/page"
import CoursesScreen from "@/app/prototype/courses/page"
import SearchScreen from "@/app/prototype/search/page"
import ProfileScreen from "@/app/prototype/profile/page"
import NotificationsScreen from "@/app/prototype/notifications/page"
import SettingsScreen from "@/app/prototype/settings/page"
import HelpScreen from "@/app/prototype/help/page"
import LoFi1 from "@/app/prototype/lo-fi/1/page"
import LoFi2 from "@/app/prototype/lo-fi/2/page"
import LoFi3 from "@/app/prototype/lo-fi/3/page"
import LoFi4 from "@/app/prototype/lo-fi/4/page"
import LoFi5 from "@/app/prototype/lo-fi/5/page"
import LoFi6 from "@/app/prototype/lo-fi/6/page"

/* ---------------------------------------------------------------------------
 * Single source of truth for the LearnUp prototype screens. Every PDF page
 * imports from here so all of them embed the real, up-to-date prototype.
 * ------------------------------------------------------------------------- */

export type PrototypeScreen = { label: string; node: ReactNode }

export const prototypeScreens: PrototypeScreen[] = [
  { label: "Главная", node: <MainScreen /> },
  { label: "Курсы", node: <CoursesScreen /> },
  { label: "Поиск", node: <SearchScreen /> },
  { label: "Профиль", node: <ProfileScreen /> },
  { label: "Уведомления", node: <NotificationsScreen /> },
  { label: "Настройки", node: <SettingsScreen /> },
  { label: "Помощь", node: <HelpScreen /> },
]

export const loFiScreens: PrototypeScreen[] = [
  { label: "Главная", node: <LoFi1 /> },
  { label: "Курсы", node: <LoFi2 /> },
  { label: "Поиск", node: <LoFi3 /> },
  { label: "Профиль", node: <LoFi4 /> },
  { label: "Уведомления", node: <LoFi5 /> },
  { label: "Настройки", node: <LoFi6 /> },
]

/** Responsive grid of all lo-fi wireframe screens in phone frames. */
export function LoFiGallery({ scale = 0.46 }: { scale?: number }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-8 justify-items-center">
      {loFiScreens.map(({ label, node }) => (
        <PhoneFrame key={label} label={label} scale={scale}>
          {node}
        </PhoneFrame>
      ))}
    </div>
  )
}

/** Responsive grid of all prototype screens, each rendered in a phone frame. */
export function PrototypeGallery({ scale = 0.46 }: { scale?: number }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-8 justify-items-center">
      {prototypeScreens.map(({ label, node }) => (
        <PhoneFrame key={label} label={label} scale={scale}>
          {node}
        </PhoneFrame>
      ))}
    </div>
  )
}
