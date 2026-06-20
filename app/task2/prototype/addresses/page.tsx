import { QDBackHeader } from "@/components/qd-prototype/back-header"

const addresses = [
  { label: "Домой", addr: "пр. Мира, 17, кв. 42", type: "home", color: "text-orange-500", bg: "bg-orange-50" },
  { label: "Работа", addr: "ул. Садовая, 5, офис 301", type: "work", color: "text-blue-500", bg: "bg-blue-50" },
  { label: "Тренажёрный зал", addr: "ул. Кирова, 12", type: "other", color: "text-slate-500", bg: "bg-slate-100" },
]

export default function QDAddressesPage() {
  return (
    <div className="bg-slate-50 min-h-screen flex flex-col">
      <QDBackHeader title="Адреса доставки" />

      <div className="px-4 pt-4 space-y-3">
        {addresses.map((item) => (
          <div key={item.label} className="bg-white border border-slate-100 rounded-2xl px-4 py-4 flex items-center gap-3">
            <div className={`w-10 h-10 rounded-xl ${item.bg} flex items-center justify-center flex-shrink-0 ${item.color}`}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
              </svg>
            </div>
            <div className="flex-1">
              <p className="text-sm font-semibold text-slate-900">{item.label}</p>
              <p className="text-xs text-slate-500">{item.addr}</p>
            </div>
            <button className="text-xs text-orange-500 font-medium">Изменить</button>
          </div>
        ))}

        <button className="w-full border-2 border-dashed border-slate-200 rounded-2xl py-4 flex items-center justify-center gap-2 text-slate-400">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
            <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
          </svg>
          <span className="text-sm font-medium">Добавить адрес</span>
        </button>
      </div>
    </div>
  )
}
