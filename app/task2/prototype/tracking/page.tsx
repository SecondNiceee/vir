import { QDBackHeader } from "@/components/qd-prototype/back-header"

const steps = [
  { label: "Заказ принят", sub: "14:22", done: true, active: false },
  { label: "Курьер забрал посылку", sub: "14:35", done: true, active: false },
  { label: "Курьер в пути", sub: "~12 мин", done: false, active: true },
  { label: "Доставлено", sub: "", done: false, active: false },
]

export default function QDTrackingPage() {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      <QDBackHeader title="Отслеживание заказа" backHref="/task2/prototype/orders" />

      {/* Map */}
      <div className="mx-4 mt-4 rounded-2xl overflow-hidden h-[200px] bg-[#e8ede4] relative">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(148,163,184,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.15) 1px, transparent 1px)`,
          backgroundSize: "40px 40px"
        }}></div>
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 398 200" preserveAspectRatio="xMidYMid slice">
          <line x1="0" y1="100" x2="398" y2="100" stroke="#d1d5db" strokeWidth="14" strokeLinecap="round"/>
          <line x1="199" y1="0" x2="199" y2="200" stroke="#d1d5db" strokeWidth="10" strokeLinecap="round"/>
          <path d="M70 155 C70 100 140 100 199 100 C258 100 300 55 325 35" stroke="#f97316" strokeWidth="4" strokeDasharray="10 6" fill="none" strokeLinecap="round"/>
          <circle cx="70" cy="155" r="9" fill="#f97316" stroke="white" strokeWidth="3"/>
          <circle cx="325" cy="35" r="9" fill="#0f172a" stroke="white" strokeWidth="3"/>
          <path d="M325 27 l5 8 h-10 z" fill="white"/>
          <circle cx="210" cy="98" r="14" fill="#f97316" stroke="white" strokeWidth="3"/>
          <path d="M210 92 l4 6 h-8 z" fill="white"/>
        </svg>
        <div className="absolute top-3 left-3 bg-white rounded-xl px-3 py-2 shadow-lg">
          <p className="text-[10px] text-slate-500">Прибудет через</p>
          <p className="text-lg font-black text-orange-500">12 мин</p>
        </div>
        <div className="absolute top-3 right-3 bg-white rounded-xl px-3 py-2 shadow-lg">
          <p className="text-[10px] text-slate-500">Заказ</p>
          <p className="text-xs font-bold text-slate-900">#QD-4821</p>
        </div>
      </div>

      <div className="px-4 pt-4 space-y-4">

        {/* Courier card */}
        <div className="bg-slate-50 rounded-2xl border border-slate-200 p-4">
          <div className="flex items-center gap-3">
            <div className="relative w-12 h-12 flex-shrink-0">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-slate-600 to-slate-800 flex items-center justify-center text-white font-bold text-lg">Д</div>
              <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
            </div>
            <div className="flex-1">
              <p className="font-bold text-slate-900">Дмитрий К.</p>
              <div className="flex items-center gap-1.5">
                <div className="flex gap-0.5">
                  {[1,2,3,4,5].map(i => (
                    <svg key={i} className="w-3 h-3 text-amber-400" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  ))}
                </div>
                <span className="text-xs text-slate-500 font-medium">4.9 · 348 доставок</span>
              </div>
            </div>
            <div className="flex gap-2">
              <button className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
              </button>
              <button className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Status steps */}
        <div className="bg-white rounded-2xl border border-slate-200 p-4">
          <h2 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">Статус доставки</h2>
          <div className="space-y-3">
            {steps.map((step, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="flex flex-col items-center flex-shrink-0 mt-0.5">
                  <div className={`w-5 h-5 rounded-full flex items-center justify-center ${
                    step.done ? "bg-orange-500" : step.active ? "bg-white border-2 border-orange-500" : "bg-white border-2 border-slate-200"
                  }`}>
                    {step.done && (
                      <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3">
                        <path d="M20 6L9 17l-5-5"/>
                      </svg>
                    )}
                    {step.active && <div className="w-2 h-2 bg-orange-500 rounded-full"></div>}
                  </div>
                  {i < steps.length - 1 && (
                    <div className={`w-[2px] h-5 mt-1 ${step.done ? "bg-orange-300" : "bg-slate-200"}`}></div>
                  )}
                </div>
                <div className="flex-1">
                  <p className={`text-sm font-semibold leading-tight ${step.active ? "text-slate-900" : step.done ? "text-slate-600" : "text-slate-400"}`}>
                    {step.label}
                  </p>
                  {step.sub && (
                    <p className={`text-xs mt-0.5 ${step.active ? "text-orange-500 font-medium" : "text-slate-400"}`}>{step.sub}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <button className="w-full border-2 border-slate-200 text-slate-700 font-semibold py-4 rounded-2xl text-sm">
          Отменить заказ
        </button>
      </div>
    </div>
  )
}
