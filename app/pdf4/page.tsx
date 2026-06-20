import { Cover, PdfShell, Slide } from "@/components/pdf/slide"
import { PhoneFrame } from "@/components/prototype/phone-frame"
import { PrototypeGallery } from "@/components/pdf/prototype-screens"
import MainScreen from "@/app/prototype/main/page"
import CoursesScreen from "@/app/prototype/courses/page"
import SearchScreen from "@/app/prototype/search/page"
import ProfileScreen from "@/app/prototype/profile/page"
import NotificationsScreen from "@/app/prototype/notifications/page"
import SettingsScreen from "@/app/prototype/settings/page"
import HelpScreen from "@/app/prototype/help/page"

export default function Pdf4Page() {
  return (
    <PdfShell pz={4} figmaContentHref="/figma4">
      <Cover
        icon={
          <svg className="w-9 h-9 sm:w-10 sm:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
            />
          </svg>
        }
        subtitle="Hi-Fi макеты интерфейса"
        taskLine1="Практическое задание №4"
        taskLine2="Визуальный дизайн и высокодетализированные макеты"
      />

      {/* Цели и задачи */}
      <Slide title="Этап 1: Цели и задачи Hi-Fi проектирования" footer="Цели и задачи">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          <div>
            <h3 className="text-lg font-semibold text-slate-900 mb-4">Цель работы</h3>
            <div className="bg-teal-50 border border-teal-100 rounded-xl p-5 mb-6">
              <p className="text-slate-700">
                Перевести Lo-Fi прототипы и дизайн-систему в визуально проработанные Hi-Fi макеты, отражающие стиль
                продукта LearnUp и принципы UX.
              </p>
            </div>
            <h3 className="text-lg font-semibold text-slate-900 mb-4">Исходные материалы</h3>
            <ul className="space-y-2 text-sm text-slate-600">
              {["Lo-Fi прототипы из ПЗ №2", "UI-кит и дизайн-система из ПЗ №3", "User Flow и сценарии из ПЗ №1-2"].map(
                (t) => (
                  <li key={t} className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-teal-500 shrink-0" />
                    {t}
                  </li>
                ),
              )}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-slate-900 mb-4">Ключевые экраны</h3>
            <div className="grid grid-cols-1 gap-2.5">
              {[
                "Главный экран (Home)",
                "Каталог курсов",
                "Поиск",
                "Профиль пользователя",
                "Уведомления и настройки",
                "Помощь и поддержка",
              ].map((label, i) => (
                <div key={label} className="flex items-center gap-3 bg-slate-50 rounded-xl p-3">
                  <div className="w-8 h-8 bg-teal-500 rounded-lg flex items-center justify-center text-white font-bold text-sm shrink-0">
                    {i + 1}
                  </div>
                  <span className="text-slate-700 text-sm">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Slide>

      {/* Галерея всех экранов из прототипа */}
      <Slide title="Галерея Hi-Fi экранов (из прототипа)" footer="Все экраны приложения">
        <p className="text-sm text-slate-500 mb-6 text-pretty">
          Реальные экраны интерактивного прототипа LearnUp, отрисованные целиком — без обрезки. Каждый макет показан в
          рамке устройства.
        </p>
        <PrototypeGallery />
      </Slide>

      {/* Главная */}
      <Slide title="Главный экран (Home)" footer="Главный экран">
        <div className="flex flex-col md:flex-row gap-6 md:items-start">
          <div className="shrink-0 mx-auto md:mx-0">
            <PhoneFrame scale={0.6}>
              <MainScreen />
            </PhoneFrame>
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-slate-900 mb-4">Ключевые элементы</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-amber-50 rounded-xl p-4">
                <h4 className="font-semibold text-amber-800 mb-1">Серия дней</h4>
                <p className="text-sm text-slate-600">Карточка streak — мотивация через геймификацию</p>
              </div>
              <div className="bg-teal-50 rounded-xl p-4">
                <h4 className="font-semibold text-teal-800 mb-1">Продолжить обучение</h4>
                <p className="text-sm text-slate-600">Быстрый доступ к курсу с прогресс-баром</p>
              </div>
              <div className="bg-blue-50 rounded-xl p-4">
                <h4 className="font-semibold text-blue-800 mb-1">Дневная цель</h4>
                <p className="text-sm text-slate-600">Круговой прогресс XP до завершения цели</p>
              </div>
              <div className="bg-violet-50 rounded-xl p-4">
                <h4 className="font-semibold text-violet-800 mb-1">Категории</h4>
                <p className="text-sm text-slate-600">Быстрая навигация по направлениям</p>
              </div>
            </div>
            <div className="mt-4 bg-slate-50 rounded-xl p-4">
              <h4 className="font-semibold text-slate-700 mb-1">Визуальная иерархия</h4>
              <p className="text-sm text-slate-600">
                Фокус внимания: Приветствие → Streak → Продолжить → Цель → Категории.
              </p>
            </div>
          </div>
        </div>
      </Slide>

      {/* Каталог */}
      <Slide title="Каталог курсов" footer="Каталог курсов">
        <div className="flex flex-col md:flex-row gap-6 md:items-start">
          <div className="shrink-0 mx-auto md:mx-0">
            <PhoneFrame scale={0.6}>
              <CoursesScreen />
            </PhoneFrame>
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-slate-900 mb-4">Компоненты экрана</h3>
            <div className="space-y-3">
              <div className="bg-slate-50 rounded-xl p-4">
                <h4 className="font-semibold text-slate-800 mb-0.5">Поиск</h4>
                <p className="text-sm text-slate-600">Поле ввода с иконкой и подсказкой</p>
              </div>
              <div className="bg-slate-50 rounded-xl p-4">
                <h4 className="font-semibold text-slate-800 mb-0.5">Фильтры</h4>
                <p className="text-sm text-slate-600">Горизонтальные чипсы: Все, Программирование, Языки, Дизайн…</p>
              </div>
              <div className="bg-slate-50 rounded-xl p-4">
                <h4 className="font-semibold text-slate-800 mb-0.5">Карточки курсов</h4>
                <p className="text-sm text-slate-600">Featured-карточка с градиентом и обычные карточки: badge, рейтинг, цена</p>
              </div>
            </div>
          </div>
        </div>
      </Slide>

      {/* Поиск */}
      <Slide title="Экран поиска" footer="Поиск">
        <div className="flex flex-col md:flex-row gap-6 md:items-start">
          <div className="shrink-0 mx-auto md:mx-0">
            <PhoneFrame scale={0.6}>
              <SearchScreen />
            </PhoneFrame>
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-slate-900 mb-4">Структура экрана</h3>
            <div className="space-y-3">
              <div className="bg-teal-50 rounded-xl p-4">
                <h4 className="font-semibold text-teal-800 mb-0.5">Строка поиска</h4>
                <p className="text-sm text-slate-600">Активное поле для запросов по курсам, темам и навыкам</p>
              </div>
              <div className="bg-slate-50 rounded-xl p-4">
                <h4 className="font-semibold text-slate-800 mb-0.5">Популярные темы</h4>
                <p className="text-sm text-slate-600">Облако тегов для быстрого старта поиска</p>
              </div>
              <div className="bg-slate-50 rounded-xl p-4">
                <h4 className="font-semibold text-slate-800 mb-0.5">Категории и рекомендации</h4>
                <p className="text-sm text-slate-600">Сетка категорий со счётчиком и список рекомендованных курсов</p>
              </div>
            </div>
          </div>
        </div>
      </Slide>

      {/* Профиль */}
      <Slide title="Экран профиля" footer="Профиль">
        <div className="flex flex-col md:flex-row gap-6 md:items-start">
          <div className="shrink-0 mx-auto md:mx-0">
            <PhoneFrame scale={0.6}>
              <ProfileScreen />
            </PhoneFrame>
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-slate-900 mb-4">Структура профиля</h3>
            <div className="space-y-3 mb-4">
              <div className="bg-gradient-to-r from-teal-100 to-emerald-100 rounded-xl p-3">
                <h4 className="font-semibold text-teal-800 mb-0.5 text-sm">Шапка с аватаром</h4>
                <p className="text-xs text-slate-600">Градиентный заголовок, имя, дата регистрации</p>
              </div>
              <div className="bg-slate-50 rounded-xl p-3">
                <h4 className="font-semibold text-slate-800 mb-0.5 text-sm">Статистика</h4>
                <p className="text-xs text-slate-600">Серия, XP, курсы — три карточки</p>
              </div>
              <div className="bg-slate-50 rounded-xl p-3">
                <h4 className="font-semibold text-slate-800 mb-0.5 text-sm">Достижения и курсы</h4>
                <p className="text-xs text-slate-600">Ряд badges и список курсов с прогрессом</p>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2">
              <div className="bg-amber-50 rounded-xl p-2 text-center">
                <p className="font-bold text-amber-600 text-sm">12</p>
                <p className="text-[10px] text-slate-500">Серия</p>
              </div>
              <div className="bg-teal-50 rounded-xl p-2 text-center">
                <p className="font-bold text-teal-600 text-sm">1 847</p>
                <p className="text-[10px] text-slate-500">XP</p>
              </div>
              <div className="bg-violet-50 rounded-xl p-2 text-center">
                <p className="font-bold text-violet-600 text-sm">5</p>
                <p className="text-[10px] text-slate-500">Курсов</p>
              </div>
            </div>
          </div>
        </div>
      </Slide>

      {/* Уведомления, Настройки, Помощь */}
      <Slide title="Уведомления, настройки и помощь" footer="Сервисные экраны">
        <p className="text-sm text-slate-500 mb-6 text-pretty">
          Дополнительные экраны из раздела профиля — переключатели, списки настроек и центр поддержки.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-4 gap-y-8 justify-items-center">
          <PhoneFrame label="Уведомления" scale={0.56}>
            <NotificationsScreen />
          </PhoneFrame>
          <PhoneFrame label="Настройки" scale={0.56}>
            <SettingsScreen />
          </PhoneFrame>
          <PhoneFrame label="Помощь" scale={0.56}>
            <HelpScreen />
          </PhoneFrame>
        </div>
      </Slide>

      {/* Сервисные состояния */}
      <Slide title="Сервисные состояния" footer="Сервисные состояния">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="bg-emerald-50 rounded-xl p-6 text-center flex flex-col items-center justify-center">
            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="font-bold text-emerald-800 mb-2">Success</h3>
            <p className="text-sm text-slate-600 mb-4">Урок пройден, XP получены</p>
            <div className="bg-emerald-500 text-white text-sm font-medium py-2 px-4 rounded-lg">Продолжить</div>
          </div>
          <div className="bg-red-50 rounded-xl p-6 text-center flex flex-col items-center justify-center">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
            </div>
            <h3 className="font-bold text-red-800 mb-2">Error</h3>
            <p className="text-sm text-slate-600 mb-4">Ошибка загрузки данных</p>
            <div className="bg-red-500 text-white text-sm font-medium py-2 px-4 rounded-lg">Повторить</div>
          </div>
          <div className="bg-slate-50 rounded-xl p-6 text-center flex flex-col items-center justify-center">
            <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                />
              </svg>
            </div>
            <h3 className="font-bold text-slate-700 mb-2">Empty State</h3>
            <p className="text-sm text-slate-600 mb-4">Нет со��ранённых курсов</p>
            <div className="bg-teal-500 text-white text-sm font-medium py-2 px-4 rounded-lg">Найти курсы</div>
          </div>
        </div>
      </Slide>

      {/* Визуальная иерархия */}
      <Slide title="Визуальная иерархия и согласованность" footer="Визуальная иерархия">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          <div>
            <h3 className="text-lg font-semibold text-slate-900 mb-4">Принципы иерархии</h3>
            <div className="space-y-4">
              {[
                { t: "Размер и контраст", d: "Крупные заголовки, жирные CTA, тонкий вспомогательный текст" },
                { t: "Цвет и акценты", d: "Teal для primary, градиенты для featured, нейтральные для secondary" },
                { t: "Пространство", d: "Группировка связанных элементов, отступы между секциями" },
              ].map(({ t, d }, i) => (
                <div key={t} className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-teal-500 rounded-lg flex items-center justify-center text-white font-bold shrink-0">
                    {i + 1}
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">{t}</h4>
                    <p className="text-sm text-slate-600">{d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-slate-900 mb-4">Согласованность экранов</h3>
            <div className="bg-slate-50 rounded-xl p-4 space-y-3">
              {[
                "Единая цветовая палитра (Teal, Emerald, Slate)",
                "Одинаковые радиусы скругления (xl, 2xl)",
                "Консистентная типографика (Inter)",
                "Общая навигация (Tab Bar)",
                "Система отступов (8px grid)",
              ].map((t) => (
                <div key={t} className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-emerald-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-slate-700">{t}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Slide>

      {/* Итоги */}
      <section className="bg-gradient-to-br from-emerald-600 to-teal-700 rounded-2xl shadow-xl overflow-hidden print:rounded-none print:shadow-none">
        <div className="flex flex-col items-center justify-center text-white px-6 py-10 text-center">
          <h2 className="text-2xl font-bold mb-6">Итоги ПЗ №4</h2>
          <div className="grid grid-cols-3 gap-4 mb-6 w-full max-w-md">
            <div className="bg-white/10 rounded-xl p-3">
              <p className="text-2xl font-bold">7</p>
              <p className="text-xs text-white/70">Hi-Fi экранов</p>
            </div>
            <div className="bg-white/10 rounded-xl p-3">
              <p className="text-2xl font-bold">3</p>
              <p className="text-xs text-white/70">Сервисных состояния</p>
            </div>
            <div className="bg-white/10 rounded-xl p-3">
              <p className="text-2xl font-bold">100%</p>
              <p className="text-xs text-white/70">UI-кит применён</p>
            </div>
          </div>
          <p className="text-white/80 text-sm mb-1">Следующий этап:</p>
          <p className="text-lg font-semibold text-balance">ПЗ №5 — Интерактивный прототип и презентация</p>
        </div>
      </section>
    </PdfShell>
  )
}
