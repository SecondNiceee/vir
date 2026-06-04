export function PdfContent() {
  const slides = [
    {
      number: 1,
      title: "Титульный слайд",
      content: `Практическая работа №1
Выбор темы и анализ аналогов

Тема: Мобильное образовательное приложение «LearnUp»

Выполнил: [ФИО], гр. ТКБО-01-21
Преподаватель: [ФИО преподавателя]
2025`,
      note: "Используй шаблон титульного листа из СДО"
    },
    {
      number: 2,
      title: "Тема и обоснование",
      content: `Тема проекта: LearnUp — мобильное образовательное приложение

Обоснование выбора:
• Рынок EdTech растёт на 15-20% ежегодно
• Мобильное обучение — основной тренд 2024-2025
• Проблема: приложения либо слишком узкие (Duolingo), 
  либо слишком академичные (Coursera)
• Решение: универсальная платформа с микро-уроками, 
  геймификацией и адаптивным AI

Личный интерес: опыт использования EdTech-приложений, 
понимание болей пользователей`,
      note: "Кратко и по существу"
    },
    {
      number: 3,
      title: "Целевая аудитория",
      content: `Основные сегменты:

1. Студенты (18-25 лет)
   • Дополнительное образование, подготовка к экзаменам

2. Работающие специалисты (25-40 лет)  
   • Повышение квалификации, смена профессии

3. Саморазвивающиеся (любой возраст)
   • Хобби, языки, творчество

4. Занятые люди
   • Обучение по 5-15 минут в день, в дороге

Объединяющая черта: нехватка времени, 
потребность в гибком и увлекательном обучении`,
      note: "Можно добавить иконки для каждого сегмента"
    },
    {
      number: 4,
      title: "Пользовательские сценарии",
      content: `Сценарий 1: Обучение в метро
→ Открыть приложение → Пройти микро-урок (5 мин) 
→ Получить достижение → Закрыть до завтра

Сценарий 2: Подготовка к собеседованию
→ Выбрать трек «Python» → Пройти тесты и практику 
→ Отслеживать прогресс → Получить рекомендации

Сценарий 3: Изучение языка
→ Курс английского → Голосовые упражнения 
→ Соревнование с друзьями → Премиум-контент

Сценарий 4: Офлайн в поездке
→ Скачать курс → Проходить без интернета 
→ Синхронизация при подключении`,
      note: "Визуализируй как user flow стрелками"
    },
    {
      number: 5,
      title: "Аналог 1: Duolingo",
      content: `Duolingo — приложение для изучения языков

Сильные стороны:
+ Отличная геймификация (серии, XP, лиги)
+ Микро-уроки по 5 минут
+ Бесплатная базовая версия
+ 40+ языков

Слабые стороны:
- Только языки — узкая специализация
- Навязчивые уведомления
- Ограниченная глубина материала
- Реклама в бесплатной версии`,
      note: "Добавь скриншот интерфейса Duolingo"
    },
    {
      number: 6,
      title: "Аналог 2: Coursera",
      content: `Coursera — онлайн-курсы от университетов

Сильные стороны:
+ Курсы от Stanford, Google, IBM
+ Официальные сертификаты и дипломы
+ Глубокие профессиональные программы
+ Широкий выбор тем

Слабые стороны:
- Длинные курсы (недели/месяцы)
- Дорогая подписка ($49/мес)
- Слабая мобильная адаптация
- Нет геймификации`,
      note: "Добавь скриншот интерфейса Coursera"
    },
    {
      number: 7,
      title: "Аналоги 3-4: Stepik и Skillbox",
      content: `Stepik — платформа онлайн-курсов (РФ)
+ Много бесплатных курсов, автопроверка кода, офлайн
- Устаревший дизайн, нет геймификации

Skillbox — онлайн-университет (РФ)  
+ Практика с кураторами, карьерный центр
- Очень дорого (от 100к), нет мобильного приложения

Общий вывод по российским аналогам:
Хороший контент, но слабый мобильный UX 
и отсутствие геймификации`,
      note: "Можно объединить на одном слайде"
    },
    {
      number: 8,
      title: "Сравнительная таблица",
      content: `Критерий          | Duo | Cour | Step | Skill | LearnUp
------------------|-----|------|------|-------|--------
Микро-уроки       |  +  |  -   |  ±   |   -   |   +
Геймификация      |  +  |  -   |  -   |   ±   |   +
Разнообразие тем  |  -  |  +   |  +   |   ±   |   +
Адаптивный AI     |  +  |  ±   |  -   |   +   |   +
Офлайн-режим      |  +  |  ±   |  +   |   -   |   +
Бесплатная версия |  +  |  ±   |  +   |   -   |   +
Мобильный UX      |  +  |  ±   |  ±   |   -   |   +`,
      note: "Сделай красивую таблицу в Figma с цветовой кодировкой"
    },
    {
      number: 9,
      title: "Выводы и проектные ориентиры",
      content: `Что возьмём от аналогов:
• От Duolingo: геймификация, серии, микро-уроки
• От Coursera: структурированные треки, сертификаты
• От Stepik: автопроверка, офлайн-режим
• От Skillbox: адаптивные AI-треки

Уникальность LearnUp:
• Универсальность: все темы в одном приложении
• Баланс глубины и увлекательности
• AI-адаптация под каждого пользователя
• Freemium с качественным бесплатным контентом

LearnUp = Duolingo по UX + Coursera по контенту`,
      note: "Главный итоговый слайд"
    },
    {
      number: 10,
      title: "Спасибо за внимание",
      content: `Практическая работа №1
Выбор темы и анализ аналогов

Проект: LearnUp
Мобильное образовательное приложение

Следующий этап: 
ПЗ №2 — Lo-Fi прототипирование

Вопросы?`,
      note: "Финальный слайд"
    }
  ]

  return (
    <div className="grid gap-6">
      {slides.map((slide) => (
        <div key={slide.number} className="rounded-2xl border border-border bg-card shadow-sm overflow-hidden">
          <div className="flex items-center gap-4 border-b border-border bg-muted/30 px-6 py-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
              {slide.number}
            </div>
            <div>
              <h4 className="font-bold text-foreground">Слайд {slide.number}: {slide.title}</h4>
              {slide.note && (
                <p className="text-sm text-muted-foreground">Заметка: {slide.note}</p>
              )}
            </div>
          </div>
          <div className="p-6">
            <pre className="whitespace-pre-wrap font-sans text-sm leading-relaxed text-muted-foreground">
              {slide.content}
            </pre>
          </div>
        </div>
      ))}
      
      {/* Requirements reminder */}
      <div className="rounded-2xl border-2 border-dashed border-primary/30 bg-primary/5 p-8">
        <h4 className="mb-4 text-lg font-bold text-foreground">Требования к сдаче (напоминание)</h4>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li className="flex items-start gap-2">
            <span className="mt-1 h-2 w-2 rounded-full bg-primary"></span>
            <span><strong className="text-foreground">Формат:</strong> PDF-презентация, 8-10 слайдов</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1 h-2 w-2 rounded-full bg-primary"></span>
            <span><strong className="text-foreground">Титульный лист:</strong> по шаблону из СДО</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1 h-2 w-2 rounded-full bg-primary"></span>
            <span><strong className="text-foreground">Название файла:</strong> Фамилия, гр. ТКБО-01-21, ПЗ №1</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1 h-2 w-2 rounded-full bg-primary"></span>
            <span><strong className="text-foreground">Figma-файл:</strong> сравнительная таблица, выводы, комментарии</span>
          </li>
        </ul>
      </div>
    </div>
  )
}
