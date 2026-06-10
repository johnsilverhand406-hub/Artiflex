import { Printer, Scan, Cpu, Package, Truck, MapPin, Layers, Gem } from 'lucide-react';
import { Project, Service, Collection } from './types';

export const COLLECTIONS: Collection[] = [
  {
    id: 'board-games',
    title: 'Настольные игры',
    image: 'https://images.unsplash.com/photo-1611195974226-a6a9be9dd763?q=80&w=1000&auto=format&fit=crop',
    description: 'Уникальные шахматы, нарды и фигурки для D&D'
  },
  {
    id: 'maps',
    title: '3D Карты',
    image: 'https://images.unsplash.com/photo-1577083288073-40892c0860a4?q=80&w=1000&auto=format&fit=crop',
    description: 'Объемные карты городов и рельефы местности'
  },
  {
    id: 'decor',
    title: 'Интерьер',
    image: 'https://images.unsplash.com/photo-1513519245088-0e12902e35a6?q=80&w=1000&auto=format&fit=crop',
    description: 'Вазы, светильники и арт-объекты'
  }
];

export const PROJECTS: Project[] = [
  // --- Board Games Collection ---
  {
    id: 101,
    title: "Parametric Chess Set",
    category: "print",
    collectionId: "board-games",
    image: "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?q=80&w=1000&auto=format&fit=crop",
    span: "col-span-2",
    description: "Уникальный шахматный набор, сгенерированный алгоритмически. Каждая фигура имеет сложную внутреннюю структуру, напоминающую кристаллическую решетку. Напечатано из фотополимерной смолы.",
    reviews: [
      { id: 1, author: "Алексей М.", text: "Фантастическая детализация! Каждая фигура как произведение искусства. Очень легкие, но прочные.", rating: 5, date: "12 окт 2023" },
      { id: 2, author: "Марина В.", text: "Покупала мужу в подарок. Он в восторге, теперь всем гостям показывает. Спасибо за упаковку!", rating: 5, date: "05 ноя 2023" },
      { id: 3, author: "Dmitry K.", text: "Выглядит даже лучше, чем на фото. Единственное, ждать пришлось неделю, но оно того стоило.", rating: 4, date: "15 ноя 2023" }
    ]
  },
  {
    id: 102,
    title: "Fantasy Checkers",
    category: "print",
    collectionId: "board-games",
    image: "https://images.unsplash.com/photo-1605806616949-1e87b487bc2a?q=80&w=1000&auto=format&fit=crop",
    span: "col-span-1",
    description: "Стилизованные шашки с рельефным орнаментом.",
    reviews: [
      { id: 1, author: "Ольга П.", text: "Детям очень понравились монстрики на шашках. Печать качественная, без заусенцев.", rating: 5, date: "20 янв 2024" },
      { id: 2, author: "Иван С.", text: "Хороший набор для дороги, компактный.", rating: 4, date: "02 фев 2024" }
    ]
  },

  // --- Maps Collection ---
  {
    id: 201,
    title: "London City Tile",
    category: "print",
    collectionId: "maps",
    image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=1000&auto=format&fit=crop",
    span: "col-span-1",
    description: "Высокодетализированный фрагмент карты Лондона. Видны отдельные здания и перепады высот.",
    reviews: [
      { id: 1, author: "Helen R.", text: "Нашла свой дом на карте! Невероятная точность.", rating: 5, date: "10 дек 2023" },
      { id: 2, author: "Сергей", text: "Отличный сувенир. Покрасил акрилом, стало вообще супер.", rating: 5, date: "14 янв 2024" }
    ]
  },
  {
    id: 202,
    title: "Moscow Kremlin",
    category: "print",
    collectionId: "maps",
    image: "https://images.unsplash.com/photo-1513326738677-b964603b136d?q=80&w=1000&auto=format&fit=crop",
    span: "col-span-2",
    description: "Масштабная модель центра Москвы. Кремль и Красная площадь с высочайшей детализацией.",
    reviews: [
      { id: 1, author: "Владимир", text: "Брал в кабинет на стол. Смотрится солидно. Белый матовый пластик очень приятный на ощупь.", rating: 5, date: "01 сен 2023" },
      { id: 2, author: "Анна К.", text: "Детализация соборов поражает. Видны кресты и купола.", rating: 5, date: "12 сен 2023" },
      { id: 3, author: "Pavel", text: "Доставили быстро, упаковано в пупырку надежно.", rating: 4, date: "20 сен 2023" }
    ]
  },
  {
    id: 203,
    title: "Paris Relief",
    category: "print",
    collectionId: "maps",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=1000&auto=format&fit=crop",
    span: "col-span-1",
    description: "Объемная карта Парижа с выделенной Эйфелевой башней.",
    reviews: [
      { id: 1, author: "Жанна", text: "Очень эстетично. Повесила на стену в рамку.", rating: 5, date: "05 мар 2024" }
    ]
  },

  // --- Decor Collection ---
  {
    id: 301,
    title: "Moon Lamp",
    category: "print",
    collectionId: "decor",
    image: "https://images.unsplash.com/photo-1532693322450-2cb5c511067d?q=80&w=1000&auto=format&fit=crop",
    span: "col-span-1",
    description: "Литофания поверхности Луны. При включении света проявляется детальный рельеф кратеров, созданный на основе карт NASA.",
    reviews: [
      { id: 1, author: "Кирилл", text: "Магия! Днем просто шарик, а ночью настоящая луна. Ребенок спит только с ним.", rating: 5, date: "15 ноя 2023" },
      { id: 2, author: "Светлана", text: "В комплекте была подставка, очень удобно.", rating: 5, date: "20 дек 2023" }
    ]
  },
  {
    id: 302,
    title: "Twisted Vase",
    category: "print",
    collectionId: "decor",
    image: "https://images.unsplash.com/photo-1615655114865-4cc1bda5901e?q=80&w=1000&auto=format&fit=crop",
    span: "col-span-2",
    description: "Ваза сложной геометрической формы. Печать в режиме вазы (Vase Mode) для идеальной чистоты поверхности.",
    reviews: [
      { id: 1, author: "Елена", text: "Не пропускает воду! Использовала для живых цветов, все отлично.", rating: 5, date: "01 фев 2024" },
      { id: 2, author: "DesignLover", text: "Геометрия завораживает. Свет преломляется очень красиво.", rating: 5, date: "14 фев 2024" },
      { id: 3, author: "Олег", text: "Хотелось бы размер побольше, но в целом круто.", rating: 4, date: "20 фев 2024" }
    ]
  },

  // --- Modeling Projects (No Collection) ---
  {
    id: 401,
    title: "Cyber Prosthetic",
    category: "model",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000&auto=format&fit=crop",
    span: "col-span-2",
    description: "Концептуальная модель кибер-протеза руки. Проект включал в себя разработку эргономики, механических узлов и финальный рендер для презентации инвесторам.",
    reviews: [
      { id: 1, author: "TechCorp", text: "Профессиональный подход. Модель полностью готова к производству.", rating: 5, date: "10 июл 2023" },
      { id: 2, author: "Инженер А.", text: "Отличная проработка узлов сопряжения.", rating: 5, date: "15 авг 2023" }
    ]
  },
  {
    id: 402,
    title: "Industrial Engine",
    category: "model",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1000&auto=format&fit=crop",
    span: "col-span-1",
    description: "Реверс-инжиниринг детали двигателя внутреннего сгорания. Создание точной твердотельной модели по результатам 3D сканирования изношенной детали.",
    reviews: [
      { id: 1, author: "Завод №5", text: "Сэкономили кучу времени на проектировании. Спасибо!", rating: 5, date: "22 сен 2023" }
    ]
  },
  {
    id: 403,
    title: "Future Furniture",
    category: "model",
    image: "https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=1000&auto=format&fit=crop",
    span: "col-span-1",
    description: "Набор футуристичной мебели для выставочного стенда. Моделирование в Blender, подготовка чертежей для ЧПУ станков.",
    reviews: [
      { id: 1, author: "ArtSpace", text: "Креативно и быстро. Рендеры помогли утвердить проект у заказчика.", rating: 5, date: "11 окт 2023" },
      { id: 2, author: "Мария", text: "Немного дорабатывали чертежи под наш станок, но модель супер.", rating: 4, date: "15 окт 2023" }
    ]
  }
];

export const SERVICES: Record<string, Service> = {
  fdm: {
    slug: "fdm",
    icon: Printer,
    title: "FDM Печать",
    desc: "PLA, PETG, ABS, Nylon",
    price: "от 500₽",
    description: "Печатаем на профессиональных принтерах Bambu Lab — с закрытой камерой для стабильного качества. Детали, подставки, корпуса, крепления — прочно и точно.",
    features: [
      "Прочные материалы: PLA, PETG, ABS, Nylon, TPU",
      "Детали до 256×256×256 мм — крупные заказы берём",
      "Многоцветная печать — до 4 цветов за один запуск",
      "Точная геометрия — слой от 80 мкм",
      "Закрытая камера — стабильное качество при любых условиях"
    ]
  },
  sla: {
    slug: "sla",
    icon: Gem,
    title: "SLA Печать",
    desc: "Фотополимерная смола",
    price: "от 500₽",
    description: "Печатаем на Anycubic Photon Mono M7 с экраном 14K — каждая деталь выходит с чёткими гранями и гладкой поверхностью без видимых слоёв. Идеально для миниатюр, украшений, прототипов и всего, где важна точность.",
    features: [
      "Гладкая поверхность — слои не видны",
      "Мельчайшие детали — от 0.15 мм",
      "Точность модели: ±0.01–0.05 мм",
      "Толщина слоя: от 30 мкм",
      "Объект до 223×126×230 мм"
    ]
  },
  scanning: {
    slug: "scanning",
    icon: Scan,
    title: "3D Сканирование",
    desc: "Реверс-инжиниринг",
    price: "от 1500₽",
    description: "Профессиональная оцифровка физических объектов. Мы создаем точные цифровые копии деталей для реверс-инжиниринга, контроля качества или архивации. Технология позволяет работать как с мелкими деталями сложной формы, так и с крупными объектами.",
    features: [
      "Точность сканирования до 0.05 мм",
      "Захват текстуры и цвета",
      "Экспорт в STL, OBJ, PLY",
      "Подготовка модели к печати"
    ]
  },
  modeling: {
    slug: "modeling",
    icon: Cpu,
    title: "CAD Моделирование",
    desc: "Fusion 360, Blender",
    price: "от 2000₽",
    description: "Разработка трехмерных моделей по вашим чертежам, эскизам или описанию. Наши инженеры создают параметрические модели во Fusion 360 для производства, а также художественные модели в Blender для визуализации и декора.",
    features: [
      "Твердотельное моделирование",
      "Поверхностное моделирование",
      "Оптимизация под 3D печать",
      "Подготовка чертежей"
    ]
  }
};

export const DELIVERY_STEPS = [
  {
    icon: Layers, 
    title: "Производство",
    desc: "Изготовим за 1–3 рабочих дня — зависит от сложности и объёма заказа"
  },
  {
    icon: Package,
    title: "Бережная упаковка",
    desc: "Надежная и аккуратная защита заказа. Гарантируем целостность изделия при транспортировке."
  },
  {
    icon: MapPin,
    title: "Доставка по России",
    desc: "Отправляем заказы курьером до двери или в удобный для вас пункт выдачи."
  },
  {
    icon: Truck,
    title: "Вы выбираете удобный способ",
    desc: "СДЭК, Яндекс Доставка, Почта России, 5Post."
  }
];