import { Cover, PdfShell, Slide } from "@/components/pdf/slide"
import { LoFiGallery } from "@/components/pdf/prototype-screens"

export default function Pdf3Page() {
  return (
    <PdfShell pz={3} figmaContentHref="/figma3">
      <Cover
        icon={
          <svg className="w-9 h-9 sm:w-10 sm:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
          </svg>
        }
        subtitle="Дизайн-система и UI-кит"
        taskLine1="Практическое задание №3"
        taskLine2="Создание визуального языка продукта"
      />

      {/* Слайд 2 — Визуальные основы */}
      <Slide title="Этап 1: Формирование визуальных основ" footer="Визуальные основы">
        <h3 className="text-base sm:text-lg font-semibold text-slate-900 mb-5 text-center">Характер бренда LearnUp</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {[
            { color: "teal", label: "Дружелюбный", desc: "Приветливый тон, понятный интерфейс",
              icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /> },
            { color: "violet", label: "Мотивирующий", desc: "Геймификация, награды, прогресс",
              icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /> },
            { color: "blue", label: "Надёжный", desc: "Качественный контент",
              icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /> },
            { color: "amber", label: "Современный", desc: "Актуальный дизайн",
              icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /> },
          ].map(({ color, label, desc, icon }) => (
            <div key={label} className={`bg-${color}-50 border border-${color}-100 rounded-xl p-4 sm:p-5 text-center`}>
              <div className={`w-12 h-12 bg-${color}-100 rounded-full flex items-center justify-center mx-auto mb-3`}>
                <svg className={`w-6 h-6 text-${color}-600`} fill="none" stroke="currentColor" viewBox="0 0 24 24">{icon}</svg>
              </div>
              <h4 className="font-bold text-slate-900 mb-1 text-sm">{label}</h4>
              <p className="text-xs sm:text-sm text-slate-500">{desc}</p>
            </div>
          ))}
        </div>
      </Slide>

      {/* Слайд 3 — Цветовая палитра */}
      <Slide title="Цветовая палитра" footer="Цветовая палитра">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          <div>
            {[
              { label: "Primary — Teal", shades: ["bg-teal-50", "bg-teal-100", "bg-teal-300", "bg-teal-500", "bg-teal-700"] },
              { label: "Secondary — Violet", shades: ["bg-violet-50", "bg-violet-100", "bg-violet-300", "bg-violet-500", "bg-violet-700"] },
              { label: "Neutral — Slate", shades: ["bg-white border border-slate-200", "bg-slate-100", "bg-slate-300", "bg-slate-500", "bg-slate-700", "bg-slate-900"] },
            ].map(({ label, shades }) => (
              <div key={label} className="mb-5">
                <h3 className="text-xs font-semibold text-slate-500 uppercase mb-2">{label}</h3>
                <div className="flex gap-2">
                  {shades.map((s) => <div key={s} className={`flex-1 h-12 ${s} rounded-lg`} />)}
                </div>
              </div>
            ))}
          </div>
          <div>
            <h3 className="text-xs font-semibold text-slate-500 uppercase mb-3">Status Colors</h3>
            <div className="space-y-3">
              {[
                { bg: "bg-emerald-50", swatch: "bg-emerald-500", label: "Success", hex: "#10B981" },
                { bg: "bg-amber-50", swatch: "bg-amber-500", label: "Warning", hex: "#F59E0B" },
                { bg: "bg-red-50", swatch: "bg-red-500", label: "Error", hex: "#EF4444" },
                { bg: "bg-blue-50", swatch: "bg-blue-500", label: "Info", hex: "#3B82F6" },
              ].map(({ bg, swatch, label, hex }) => (
                <div key={label} className={`flex items-center gap-3 ${bg} rounded-lg p-3`}>
                  <div className={`w-12 h-12 ${swatch} rounded-lg`} />
                  <div>
                    <div className="font-medium text-slate-900 text-sm">{label}</div>
                    <div className="text-xs text-slate-500 font-mono">{hex}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Slide>

      {/* Слайд 4 — Типографика */}
      <Slide title="Типографика" footer="Типографика">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          <div>
            <h3 className="text-xs font-semibold text-slate-500 uppercase mb-4">Шрифтовое семейство</h3>
            <div className="bg-teal-50 rounded-xl p-5 mb-4">
              <p className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">Inter / SF Pro</p>
              <p className="text-sm text-slate-600">Современный геометрический sans-serif с высокой читаемостью на экранах</p>
            </div>
            <div className="bg-slate-50 rounded-xl p-4">
              <p className="text-sm text-slate-500 mb-2">Почему Inter?</p>
              <ul className="space-y-1 text-sm text-slate-700">
                {["Оптимизирован для UI", "Бесплатный и открытый", "Отличная поддержка кириллицы", "Широкий диапазон начертаний"].map((t) => <li key={t}>• {t}</li>)}
              </ul>
            </div>
          </div>
          <div>
            <h3 className="text-xs font-semibold text-slate-500 uppercase mb-4">Типографический масштаб</h3>
            <div className="space-y-3">
              {[
                { size: "H1 / 32px", cls: "text-3xl font-bold", label: "Заголовок" },
                { size: "H2 / 24px", cls: "text-2xl font-bold", label: "Подзаголовок" },
                { size: "H3 / 20px", cls: "text-xl font-semibold", label: "Секция" },
                { size: "Body / 16", cls: "text-base", label: "Основной текст" },
                { size: "Small / 14", cls: "text-sm", label: "Вспомогательный" },
                { size: "Caption / 12", cls: "text-xs", label: "Подписи" },
              ].map(({ size, cls, label }) => (
                <div key={size} className="flex items-baseline gap-4 py-2 border-b border-slate-100">
                  <span className="text-xs font-mono text-slate-400 w-20 shrink-0">{size}</span>
                  <span className={`${cls} text-slate-900`}>{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Slide>

      {/* Слайд 5 — Сетка и отступы */}
      <Slide title="Сетка и система отступов" footer="Сетка и отступы">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          <div>
            <h3 className="text-xs font-semibold text-slate-500 uppercase mb-4">Модульная сетка 8px</h3>
            <div className="bg-slate-900 rounded-xl p-4 sm:p-6 mb-4">
              <div className="bg-white rounded-lg p-4 space-y-3">
                <div className="h-4 bg-teal-500/30 rounded w-1/2" />
                <div className="h-3 bg-slate-200 rounded w-3/4" />
                <div className="h-3 bg-slate-200 rounded w-2/3" />
                <div className="flex gap-2 pt-2">
                  <div className="h-10 bg-teal-500 rounded flex-1" />
                  <div className="h-10 bg-slate-200 rounded flex-1" />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-3 text-center">
              {[["8px", "teal", "Base Unit"], ["16px", "slate", "Margins"], ["375px", "slate", "Frame"]].map(([v, c, l]) => (
                <div key={l} className={`bg-${c}-50 rounded-lg p-3`}>
                  <div className={`text-xl font-bold text-${c}-600`}>{v}</div>
                  <div className="text-xs text-slate-500">{l}</div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-xs font-semibold text-slate-500 uppercase mb-4">Система отступов</h3>
            <div className="space-y-3">
              {[{ size: 4, name: "xs" }, { size: 8, name: "sm" }, { size: 12, name: "md" }, { size: 16, name: "base" }, { size: 24, name: "lg" }, { size: 32, name: "xl" }, { size: 48, name: "2xl" }].map(({ size, name }) => (
                <div key={size} className="flex items-center gap-4">
                  <div className="w-16 text-right"><span className="text-sm font-mono text-slate-600">{size}px</span></div>
                  <div className="bg-teal-500 rounded h-5" style={{ width: `${size * 3}px` }} />
                  <span className="text-sm text-slate-500">{name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Slide>

      {/* Слайд 6 — Кнопки */}
      <Slide title="Этап 2–3: Компоненты — Кнопки" footer="Кнопки">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          <div>
            <h3 className="text-xs font-semibold text-slate-500 uppercase mb-4">Варианты кнопок</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <button className="bg-teal-500 text-white font-semibold py-3 px-6 rounded-xl">Primary</button>
                <span className="text-sm text-slate-500">Основное действие</span>
              </div>
              <div className="flex items-center gap-4">
                <button className="bg-slate-100 text-slate-700 font-semibold py-3 px-6 rounded-xl">Secondary</button>
                <span className="text-sm text-slate-500">Второстепенное</span>
              </div>
              <div className="flex items-center gap-4">
                <button className="border-2 border-teal-500 text-teal-600 font-semibold py-3 px-6 rounded-xl">Outline</button>
                <span className="text-sm text-slate-500">Альтернативное</span>
              </div>
              <div className="flex items-center gap-4">
                <button className="text-teal-600 font-semibold py-3 px-6 rounded-xl">Text</button>
                <span className="text-sm text-slate-500">Текстовая ссылка</span>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-xs font-semibold text-slate-500 uppercase mb-4">Состояния</h3>
            <div className="grid grid-cols-5 gap-2">
              {[
                { cls: "bg-teal-500 text-white", label: "Default" },
                { cls: "bg-teal-600 text-white", label: "Hover" },
                { cls: "bg-teal-700 text-white ring-4 ring-teal-200", label: "Focus" },
                { cls: "bg-teal-800 text-white scale-95", label: "Pressed" },
                { cls: "bg-slate-200 text-slate-400", label: "Disabled" },
              ].map(({ cls, label }) => (
                <div key={label} className="text-center">
                  <button className={`w-full text-xs font-semibold py-2.5 px-2 rounded-lg mb-2 ${cls}`}>Btn</button>
                  <span className="text-xs text-slate-500">{label}</span>
                </div>
              ))}
            </div>
            <h3 className="text-xs font-semibold text-slate-500 uppercase mb-3 mt-5">Размеры</h3>
            <div className="flex items-end gap-3">
              {[
                { cls: "text-xs py-2 px-3 rounded-lg", label: "S", size: "32px" },
                { cls: "text-sm py-2.5 px-4 rounded-xl", label: "M", size: "40px" },
                { cls: "py-3 px-6 rounded-xl", label: "L", size: "48px" },
                { cls: "text-lg py-4 px-8 rounded-xl", label: "XL", size: "56px" },
              ].map(({ cls, label, size }) => (
                <div key={size} className="text-center">
                  <button className={`bg-teal-500 text-white font-semibold ${cls}`}>{label}</button>
                  <div className="text-xs text-slate-500 mt-1">{size}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Slide>

      {/* Слайд 7 — Формы */}
      <Slide title="Компоненты — Формы ввода" footer="Формы ввода">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          <div className="space-y-4">
            <h3 className="text-xs font-semibold text-slate-500 uppercase">Типы полей</h3>
            <div>
              <label className="text-sm font-medium text-slate-700 mb-1 block">Текстовое поле</label>
              <input type="text" placeholder="Введите имя" className="w-full px-4 py-3 border border-slate-300 rounded-xl" readOnly />
            </div>
            <div>
              <label className="text-sm font-medium text-slate-700 mb-1 block">Поле с иконкой</label>
              <div className="relative">
                <svg className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                <input type="search" placeholder="Поиск курсов..." className="w-full px-4 py-3 pl-10 border border-slate-300 rounded-xl" readOnly />
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-xs font-semibold text-slate-500 uppercase">Состояния</h3>
            <div>
              <label className="text-sm font-medium text-slate-700 mb-1 block">Default</label>
              <input type="text" placeholder="Обычное поле" className="w-full px-4 py-3 border border-slate-300 rounded-xl" readOnly />
            </div>
            <div>
              <label className="text-sm font-medium text-slate-700 mb-1 block">Focus</label>
              <input type="text" placeholder="В фокусе" className="w-full px-4 py-3 border-2 border-teal-500 rounded-xl ring-4 ring-teal-100" readOnly />
            </div>
            <div>
              <label className="text-sm font-medium text-red-600 mb-1 block">Error</label>
              <input type="text" placeholder="Ошибка" className="w-full px-4 py-3 border-2 border-red-500 rounded-xl" readOnly />
              <p className="text-xs text-red-500 mt-1">Введите корректный email</p>
            </div>
          </div>
        </div>
      </Slide>

      {/* Слайд 8 — Карточки */}
      <Slide title="Компоненты — Карточки" footer="Карточки">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {/* Course Card */}
          <div className="space-y-2">
            <h4 className="text-xs font-semibold text-slate-500 uppercase">Course Card</h4>
            <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
              <div className="h-24 bg-gradient-to-br from-teal-400 to-emerald-500 flex items-center justify-center">
                <svg className="w-10 h-10 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
              </div>
              <div className="p-4">
                <span className="text-xs bg-teal-100 text-teal-700 px-2 py-0.5 rounded-full">Программирование</span>
                <h4 className="font-semibold text-slate-900 mt-2 text-sm">Python для начинающих</h4>
                <p className="text-xs text-slate-500">12 уроков • 4 часа</p>
              </div>
            </div>
          </div>

          {/* Lesson Card */}
          <div className="space-y-2">
            <h4 className="text-xs font-semibold text-slate-500 uppercase">Lesson Card</h4>
            <div className="bg-white border border-slate-200 rounded-xl p-3 mb-2">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                </div>
                <div>
                  <h4 className="font-medium text-slate-900 text-sm">Введение в переменные</h4>
                  <p className="text-xs text-slate-500">5 мин • Теория</p>
                </div>
              </div>
            </div>
            <div className="bg-teal-50 border-2 border-teal-500 rounded-xl p-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-teal-500 rounded-lg flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" /></svg>
                </div>
                <div>
                  <h4 className="font-medium text-slate-900 text-sm">Типы данных</h4>
                  <p className="text-xs text-teal-600">В процессе</p>
                </div>
              </div>
            </div>
          </div>

          {/* Achievement Card */}
          <div className="space-y-2">
            <h4 className="text-xs font-semibold text-slate-500 uppercase">Achievement Card</h4>
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200 rounded-2xl p-4 text-center">
              <div className="w-14 h-14 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-lg">
                <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <h4 className="font-bold text-slate-900 text-sm mb-1">Первые шаги</h4>
              <p className="text-xs text-slate-500 mb-2">Завершите первый урок</p>
              <span className="inline-flex items-center gap-1 text-xs text-amber-600 bg-amber-100 px-2 py-1 rounded-full">Получено</span>
            </div>
          </div>
        </div>
      </Slide>

      {/* Слайд 9 — Интерактивные состояния */}
      <Slide title="Интерактивные состояния компонентов" footer="Интерактивные состояния">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {/* Кнопка */}
          <div>
            <h3 className="text-xs font-semibold text-slate-500 uppercase mb-3">Кнопка Primary</h3>
            <div className="space-y-2">
              {[
                { cls: "bg-teal-500 text-white", label: "Default", note: "state=default" },
                { cls: "bg-teal-600 text-white ring-2 ring-teal-300", label: "Hover", note: "state=hover" },
                { cls: "bg-teal-700 text-white scale-95", label: "Pressed", note: "state=pressed" },
                { cls: "bg-slate-300 text-slate-500", label: "Disabled", note: "state=disabled" },
              ].map(({ cls, label, note }) => (
                <div key={label} className="flex items-center gap-3">
                  <div className={`text-xs font-semibold py-2 px-4 rounded-lg w-24 text-center ${cls}`}>{label}</div>
                  <span className="text-xs text-slate-500">{note}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Вариант ответа */}
          <div>
            <h3 className="text-xs font-semibold text-slate-500 uppercase mb-3">Вариант ответа</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2 p-2 rounded-lg border border-slate-200 text-xs">
                <div className="w-4 h-4 rounded-full border-2 border-slate-300" />
                <span>Default</span>
              </div>
              <div className="flex items-center gap-2 p-2 rounded-lg border-2 border-teal-500 bg-teal-50 text-xs">
                <div className="w-4 h-4 rounded-full bg-teal-500 flex items-center justify-center">
                  <svg className="w-2 h-2 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 13l4 4L19 7" /></svg>
                </div>
                <span className="text-teal-700">Selected</span>
              </div>
              <div className="flex items-center gap-2 p-2 rounded-lg border-2 border-emerald-500 bg-emerald-50 text-xs">
                <div className="w-4 h-4 rounded-full bg-emerald-500" />
                <span className="text-emerald-700">Correct</span>
              </div>
              <div className="flex items-center gap-2 p-2 rounded-lg border-2 border-red-500 bg-red-50 text-xs">
                <div className="w-4 h-4 rounded-full bg-red-500" />
                <span className="text-red-700">Wrong</span>
              </div>
            </div>
          </div>

          {/* Tab Bar */}
          <div>
            <h3 className="text-xs font-semibold text-slate-500 uppercase mb-3">Tab Bar</h3>
            <div className="bg-white border border-slate-200 rounded-xl p-3 flex justify-around mb-3">
              <div className="flex flex-col items-center">
                <svg className="w-5 h-5 text-teal-500" fill="currentColor" viewBox="0 0 24 24"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" /></svg>
                <span className="text-[10px] text-teal-600 font-medium">Active</span>
              </div>
              {["M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z", "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253", "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"].map((d, i) => (
                <div key={i} className="flex flex-col items-center">
                  <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={d} /></svg>
                  <span className="text-[10px] text-slate-400">Inactive</span>
                </div>
              ))}
            </div>
            <p className="text-xs text-slate-500">Interactive Components с переключением состояний при клике</p>
          </div>
        </div>
      </Slide>

      {/* Слайд 10 — Итоги */}
      <section className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl shadow-xl overflow-hidden print:rounded-none print:shadow-none">
        <div className="flex flex-col items-center justify-center text-white px-6 py-10 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8">Итоги и следующий этап</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8 w-full max-w-2xl">
            <div className="bg-white/10 rounded-xl p-5 text-left">
              <h3 className="text-base font-semibold mb-3 text-teal-400">Что сделано в ПЗ №3</h3>
              <ul className="space-y-2 text-slate-300 text-sm">
                {["Определён характер бренда", "Разработана цветовая палитра", "Выбрана типографика и масштаб", "Создан UI-кит с компонентами", "Собран тестовый экран"].map((t) => (
                  <li key={t} className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-teal-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white/10 rounded-xl p-5 text-left">
              <h3 className="text-base font-semibold mb-3 text-violet-400">Структура UI-кита</h3>
              <div className="text-slate-300 text-sm font-mono">
                <div>Foundations/</div>
                <div className="ml-4 text-slate-400">Colors, Typography, Grid, Icons</div>
                <div className="mt-2">Components/</div>
                <div className="ml-4 text-slate-400">Buttons, Inputs, Cards, Nav</div>
                <div className="mt-2">Examples/</div>
                <div className="ml-4 text-slate-400">Home Screen</div>
              </div>
            </div>
          </div>
          <div className="inline-flex items-center gap-2 bg-violet-500/20 border border-violet-400/30 rounded-full px-5 py-3">
            <span className="text-violet-300 text-sm">Следующий этап:</span>
            <span className="font-semibold text-white text-sm">ПЗ №4 — Hi-Fi прототипы</span>
            <svg className="w-4 h-4 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </div>
        </div>
      </section>

      {/* Прототип */}
      <Slide title="Интерактивный прототип LearnUp" footer="Все экраны приложения">
        <p className="text-sm text-slate-500 mb-6 text-pretty">
          Все экраны рабочего прототипа приложения — отрисованы целиком в рамке устройства.
        </p>
        <LoFiGallery />
      </Slide>
    </PdfShell>
  )
}
