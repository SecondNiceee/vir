import Link from "next/link"

const orders = [
  { id: "#QD-4821", from: "ул. Ленина, 42", to: "пр. Мира, 17", date: "Сегодня, 14:22", price: "149 ₽", status: "В пути", statusColor: "bg-orange-100 text-orange-600" },
  { id: "#QD-4810", from: "ул. Садовая, 5", to: "ул. Кирова, 3", date: "Вчера, 11:05", price: "89 ₽", status: "Доставлен", statusColor: "bg-green-100 text-green-700" },
  { id: "#QD-4798", from: "пр. Мира, 17", to: "ул. Гагарина, 10", date: "15 июня, 16:48", price: "249 ₽", status: "Доставлен", statusColor: "bg-green-100 text-green-700" },
  { id: "#QD-4780", from: "ул. Ленина, 42", to: "ул. Лесная, 22", date: "12 июня, 09:30", price: "149 ₽", status: "Отменён", statusColor: "bg-red-100 text-red-600" },
  { id: "#QD-4765", from: "ул. Советская, 8", to: "пр. Ленина, 31", date: "10 июня, 17:12", price: "249 ₽", status: "Доставлен", statusColor: "bg-green-100 text-green-700" },
]

export default function QDOrdersPage() {
  return (
    <div className="bg-slate-50 min-h-screen flex flex-col">

      {/* Header */}
      <div className="bg-white px-5 pt-10 pb-4 border-b border-slate-100">
        <h1 className="text-2xl font-black text-slate-900 mb-4">Мои заказы</h1>
        <div className="flex gap-2">
          {["Все", "Активные", "Завершённые"].map((tab, i) => (
            <button key={tab} className={`px-4 py-2 rounded-full text-xs font-semibold ${i === 0 ? "bg-orange-500 text-white" : "bg-slate-100 text-slate-600"}`}>
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Active order — tracking CTA */}
      <Link href="/task2/prototype/tracking" className="mx-4 mt-4 bg-gradient-to-r from-orange-500 to-amber-500 rounded-2xl p-4 text-white flex items-center gap-3 block">
        <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
          <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
            <circle cx="12" cy="12" r="10"/>
            <polyline points="12 6 12 12 16 14"/>
          </svg>
        </div>
        <div className="flex-1">
          <p className="font-bold text-sm">Заказ #QD-4821 в пути</p>
          <p className="text-white/80 text-xs">Курьер прибудет через ~12 мин</p>
        </div>
        <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 flex-shrink-0">
          <path d="M9 18l6-6-6-6"/>
        </svg>
      </Link>

      {/* Orders list */}
      <div className="px-4 pt-4 space-y-3 pb-4">
        {orders.map((order) => (
          <div key={order.id} className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
            <div className="px-4 pt-3.5 pb-3 border-b border-slate-100">
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-bold text-slate-900">{order.id}</span>
                <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full ${order.statusColor}`}>{order.status}</span>
              </div>
              <p className="text-[10px] text-slate-400">{order.date}</p>
            </div>
            <div className="px-4 py-3 flex items-center gap-2">
              <div className="flex flex-col items-center gap-1 flex-shrink-0">
                <div className="w-2.5 h-2.5 rounded-full bg-orange-500"></div>
                <div className="w-[1.5px] h-4 bg-slate-200"></div>
                <div className="w-2.5 h-2.5 rounded-full border-2 border-slate-400"></div>
              </div>
              <div className="flex-1 flex flex-col justify-between gap-2.5">
                <p className="text-xs font-medium text-slate-700 leading-none">{order.from}</p>
                <p className="text-xs text-slate-500 leading-none">{order.to}</p>
              </div>
              <div className="text-right flex-shrink-0">
                <p className="text-sm font-bold text-slate-900">{order.price}</p>
                <button className="text-[10px] text-orange-500 font-medium mt-0.5">Повторить</button>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}
