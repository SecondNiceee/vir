export default function QDChatPage() {
  const messages = [
    { from: "courier", text: "Здравствуйте! Забрал вашу посылку, уже выезжаю.", time: "14:35" },
    { from: "user", text: "Отлично, спасибо! Домофон: 47#", time: "14:36" },
    { from: "courier", text: "Принял. Буду примерно через 12 минут.", time: "14:37" },
    { from: "user", text: "Хорошо, буду ждать.", time: "14:37" },
    { from: "courier", text: "Стою у подъезда, спускайтесь!", time: "14:48" },
  ]

  return (
    <div className="bg-white min-h-screen flex flex-col">

      {/* Header */}
      <div className="bg-white border-b border-slate-100 px-4 pt-10 pb-4 flex items-center gap-3">
        <div className="relative w-10 h-10 flex-shrink-0">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-slate-600 to-slate-800 flex items-center justify-center text-white font-bold">Д</div>
          <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-green-500 rounded-full border-2 border-white"></div>
        </div>
        <div className="flex-1">
          <p className="font-bold text-slate-900 text-sm">Дмитрий К.</p>
          <p className="text-xs text-green-500 font-medium">В сети · Курьер</p>
        </div>
        <button className="w-9 h-9 rounded-full bg-orange-50 flex items-center justify-center">
          <svg viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
            <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
          </svg>
        </button>
      </div>

      {/* Order badge */}
      <div className="mx-4 mt-3 bg-orange-50 border border-orange-100 rounded-xl px-4 py-2.5 flex items-center gap-2.5">
        <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse flex-shrink-0"></div>
        <div className="flex-1">
          <p className="text-xs font-bold text-orange-700">Заказ #QD-4821 — в пути</p>
          <p className="text-[10px] text-orange-500">ул. Ленина, 42 → пр. Мира, 17</p>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 px-4 py-4 space-y-3">
        <p className="text-[10px] text-slate-400 text-center">Сегодня, 14:35</p>
        {messages.map((msg, i) => (
          <div key={i} className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}>
            {msg.from === "courier" && (
              <div className="w-7 h-7 rounded-full bg-slate-700 flex items-center justify-center text-white text-xs font-bold mr-2 flex-shrink-0 self-end">Д</div>
            )}
            <div className={`max-w-[72%] rounded-2xl px-4 py-2.5 ${msg.from === "user" ? "bg-orange-500 text-white rounded-br-sm" : "bg-slate-100 text-slate-900 rounded-bl-sm"}`}>
              <p className="text-sm leading-relaxed">{msg.text}</p>
              <p className={`text-[10px] mt-1 ${msg.from === "user" ? "text-orange-100" : "text-slate-400"} text-right`}>{msg.time}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="px-4 pb-4 pt-2 border-t border-slate-100 flex items-center gap-2">
        <div className="flex-1 bg-slate-100 rounded-2xl px-4 py-3 flex items-center">
          <span className="text-slate-400 text-sm">Написать сообщение...</span>
        </div>
        <button className="w-11 h-11 bg-orange-500 rounded-2xl flex items-center justify-center flex-shrink-0">
          <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
            <line x1="22" y1="2" x2="11" y2="13"/>
            <polygon points="22 2 15 22 11 13 2 9 22 2"/>
          </svg>
        </button>
      </div>

    </div>
  )
}
