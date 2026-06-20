import { BackHeader } from "@/components/prototype/back-header"

export default function SettingsPage() {
  return (
    <div className="bg-white min-h-full">
      <BackHeader title="Настройки" backHref="/prototype/profile" />

      <div className="px-5 pt-5 pb-4 space-y-6">
        <div>
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-3">Аккаунт</p>
          <div className="bg-slate-50 rounded-2xl overflow-hidden divide-y divide-slate-100">
            {[
              { label: "Имя и фамилия", value: "Алексей Иванов" },
              { label: "Email", value: "alex@mail.ru" },
              { label: "Изменить пароль", value: "" },
            ].map(({ label, value }) => (
              <div key={label} className="flex items-center gap-4 px-4 py-3.5">
                <div className="flex-1">
                  <p className="text-sm font-medium text-slate-800">{label}</p>
                  {value && <p className="text-xs text-slate-400 mt-0.5">{value}</p>}
                </div>
                <svg className="w-4 h-4 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            ))}
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-3">Приложение</p>
          <div className="bg-slate-50 rounded-2xl overflow-hidden divide-y divide-slate-100">
            <div className="flex items-center gap-4 px-4 py-3.5">
              <p className="text-sm font-medium text-slate-800 flex-1">Тёмная тема</p>
              <div className="w-11 h-6 bg-slate-200 rounded-full relative">
                <div className="absolute left-0.5 top-0.5 w-5 h-5 bg-white rounded-full shadow-sm" />
              </div>
            </div>
            <div className="flex items-center gap-4 px-4 py-3.5">
              <p className="text-sm font-medium text-slate-800 flex-1">Язык</p>
              <span className="text-sm text-slate-400">Русский</span>
              <svg className="w-4 h-4 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
            <div className="flex items-center gap-4 px-4 py-3.5">
              <div className="flex-1">
                <p className="text-sm font-medium text-slate-800">Дневная цель</p>
                <p className="text-xs text-slate-400 mt-0.5">20 XP в день</p>
              </div>
              <svg className="w-4 h-4 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-3">Конфиденциальность</p>
          <div className="bg-slate-50 rounded-2xl overflow-hidden divide-y divide-slate-100">
            <div className="flex items-center gap-4 px-4 py-3.5">
              <p className="text-sm font-medium text-slate-800 flex-1">Аналитика использования</p>
              <div className="w-11 h-6 bg-teal-500 rounded-full relative">
                <div className="absolute right-0.5 top-0.5 w-5 h-5 bg-white rounded-full shadow-sm" />
              </div>
            </div>
            <div className="flex items-center gap-4 px-4 py-3.5">
              <p className="text-sm font-medium text-red-500 flex-1">Удалить аккаунт</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
