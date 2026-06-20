import { QDBackHeader } from "@/components/qd-prototype/back-header"

export default function QDPromoPage() {
  return (
    <div className="bg-slate-50 min-h-screen flex flex-col">
      <QDBackHeader title="Промокоды" />

      <div className="px-4 pt-4 space-y-4">

        {/* Input */}
        <div className="bg-white border border-slate-200 rounded-2xl px-4 py-3 flex items-center gap-3">
          <input
            className="flex-1 text-sm text-slate-900 outline-none placeholder:text-slate-400 bg-transparent"
            placeholder="Введите промокод..."
            readOnly
          />
          <button className="bg-orange-500 text-white text-xs font-bold px-4 py-2 rounded-xl">Применить</button>
        </div>

        {/* Active promo */}
        <div>
          <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2.5">Активные</p>
          <div className="bg-gradient-to-r from-orange-500 to-amber-500 rounded-2xl p-4 text-white">
            <div className="flex items-start justify-between">
              <div>
                <p className="font-black text-xl tracking-widest">QUICK20</p>
                <p className="text-white/80 text-xs mt-1">Скидка 20% на первую доставку</p>
              </div>
              <span className="bg-white/20 text-white text-xs font-bold px-2.5 py-1 rounded-full">-20%</span>
            </div>
            <div className="mt-3 pt-3 border-t border-white/20 flex items-center justify-between">
              <p className="text-xs text-white/70">Действует до 30 июня 2026</p>
              <span className="text-xs font-bold text-white">Применён</span>
            </div>
          </div>
        </div>

        {/* Used promos */}
        <div>
          <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2.5">Использованные</p>
          {[
            { code: "NEWUSER10", desc: "Скидка 10% для новых пользователей", date: "Использован 5 мая" },
            { code: "SPRING50", desc: "50 ₽ скидка на доставку", date: "Использован 20 апреля" },
          ].map((p) => (
            <div key={p.code} className="bg-white border border-slate-100 rounded-2xl p-4 mb-2">
              <div className="flex items-center justify-between mb-1">
                <p className="font-bold text-slate-400 text-base tracking-widest">{p.code}</p>
                <span className="text-[10px] text-slate-400 bg-slate-100 px-2 py-0.5 rounded-full">Использован</span>
              </div>
              <p className="text-xs text-slate-500">{p.desc}</p>
              <p className="text-[10px] text-slate-400 mt-1">{p.date}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}
