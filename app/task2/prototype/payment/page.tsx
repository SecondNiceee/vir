import { QDBackHeader } from "@/components/qd-prototype/back-header"

export default function QDPaymentPage() {
  return (
    <div className="bg-slate-50 min-h-screen flex flex-col">
      <QDBackHeader title="Способы оплаты" />

      <div className="px-4 pt-4 space-y-3">
        {/* Active card */}
        <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-5 text-white">
          <div className="flex items-center justify-between mb-6">
            <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">Visa</span>
            <div className="flex gap-1">
              <div className="w-7 h-7 rounded-full bg-red-500/80"></div>
              <div className="w-7 h-7 rounded-full bg-amber-400/80 -ml-3"></div>
            </div>
          </div>
          <p className="text-lg font-mono tracking-widest mb-4">•••• •••• •••• 4242</p>
          <div className="flex items-end justify-between">
            <div>
              <p className="text-[10px] text-slate-400 mb-0.5">Держатель</p>
              <p className="text-sm font-semibold">Maxim Ivanov</p>
            </div>
            <div className="text-right">
              <p className="text-[10px] text-slate-400 mb-0.5">До</p>
              <p className="text-sm font-semibold">12/27</p>
            </div>
          </div>
          <div className="mt-3 flex items-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            <span className="text-xs text-green-400">Основная карта</span>
          </div>
        </div>

        {/* Other methods */}
        {[
          { label: "Apple Pay", sub: "Привязан к iPhone", color: "text-slate-700", bg: "bg-slate-100" },
          { label: "Наличные курьеру", sub: "Оплата при получении", color: "text-green-600", bg: "bg-green-50" },
        ].map((item) => (
          <div key={item.label} className="bg-white border border-slate-100 rounded-2xl px-4 py-4 flex items-center gap-3">
            <div className={`w-10 h-10 rounded-xl ${item.bg} flex items-center justify-center flex-shrink-0 ${item.color}`}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/>
              </svg>
            </div>
            <div className="flex-1">
              <p className="text-sm font-semibold text-slate-900">{item.label}</p>
              <p className="text-xs text-slate-500">{item.sub}</p>
            </div>
            <svg viewBox="0 0 24 24" fill="none" stroke="#cbd5e1" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 flex-shrink-0">
              <path d="M9 18l6-6-6-6"/>
            </svg>
          </div>
        ))}

        <button className="w-full border-2 border-dashed border-slate-200 rounded-2xl py-4 flex items-center justify-center gap-2 text-slate-400">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
            <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
          </svg>
          <span className="text-sm font-medium">Добавить карту</span>
        </button>
      </div>
    </div>
  )
}
