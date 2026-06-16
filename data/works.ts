export interface Review {
  name: string;
  text: string;
  rating: number;
}

export interface Work {
  id: number;
  image: string;
  title: string;
  review?: Review | null;
}

export const slaWorks: Work[] = [
  {
    id: 1,
    image: "/works/sla/work_1.jpg",
    title: "Доктор Дум",
    review: {
      name: "Михаил",
      text: "Заказывал фигурку Доктора Дума для коллекции — результат порадовал. Плащ, броня, складки на ткани — всё проработано до мелочей и без швов. Видно, что принтер у ребят хороший. Буду заказывать ещё.",
      rating: 5
    }
  },
  {
    id: 2,
    image: "/works/sla/work_2.jpg",
    title: "Грут-подставка",
    review: {
      name: "Артём",
      text: "Давно хотел что-то интересное на стол вместо обычной подставки. У грута детализация текстуры коры, мимика — всё найс. Геймпад держится надёжно, стоит уже несколько месяцев.",
      rating: 5
    }
  },
  {
    id: 3,
    image: "/works/sla/work_3.jpg",
    title: "SLA работа 3",
    review: null
  },
  {
    id: 4,
    image: "/works/sla/work_4.jpg",
    title: "Кашпо с ацтекским лицом",
    review: {
      name: "Светлана",
      text: "Увидела подобное в интернете и захотела такое же, но под конкретный размер горшка. Ребята сделали по размерам идеально — текстура чётко передаёт образ лица. Заказывала печать и покрас под камень — смотрится шикарно.",
      rating: 5
    }
  },
  {
    id: 5,
    image: "/works/sla/work_5.jpg",
    title: "SLA работа 5",
    review: null
  },
  {
    id: 6,
    image: "/works/sla/work_6.jpg",
    title: "Дом-шишка шкатулка",
    review: {
      name: "Екатерина",
      text: "Заказывала в подарок ребёнку. Дом-шишка с открывающейся крышей, дверцей, листьями у основания — детали просто потрясающие. Крышка сидит плотно, всё напечатано аккуратно. Результат удовлетворил.",
      rating: 5
    }
  },
  {
    id: 7,
    image: "/works/sla/work_7.jpg",
    title: "SLA работа 7",
    review: null
  },
  {
    id: 8,
    image: "/works/sla/work_8.jpg",
    title: "Супергёрл",
    review: {
      name: "Дмитрий",
      text: "Заказывал фигурку для дочки — она фанат Супергёрл. Поза, лицо, плащ — всё передано очень точно и красиво. Поверхность гладкая, слоёв не видно. Дочка была в восторге. Спасибо!",
      rating: 5
    }
  },
  {
    id: 9,
    image: "/works/sla/work_9.jpg",
    title: "SLA работа 9",
    review: null
  },
  {
    id: 10,
    image: "/works/sla/work_10.jpg",
    title: "SLA работа 10",
    review: null
  },
  {
    id: 11,
    image: "/works/sla/work_11.jpg",
    title: "SLA работа 11",
    review: null
  }
];

export const fdmWorks: Work[] = [
  {
    id: 1,
    image: "/works/fdm/work_1.jpg",
    title: "Светобокс Кабан Barbershop",
    review: {
      name: "Дмитрий",
      text: "Заказывали логотип-светобокс для барбершопа — получилось именно то, что хотели. Чёткий контур, ровный белый экран с нашим логотипом на основании. Смотрится дорого, клиенты сразу спрашивают где сделали. Ребята спасибо!",
      rating: 5
    }
  },
  {
    id: 2,
    image: "/works/fdm/work_2.jpg",
    title: "FDM работа 2",
    review: null
  },
  {
    id: 3,
    image: "/works/fdm/work_3.jpg",
    title: "FDM работа 3",
    review: null
  },
  {
    id: 4,
    image: "/works/fdm/work_4.jpg",
    title: "Лампа-луна",
    review: {
      name: "Валерия",
      text: "Увидела такой светильник и захотела в подарок другу — и не пожалела. Текстура поверхности как настоящий лунный грунт, подставка из камней даёт атмосферы. В общем, подарок понравился.",
      rating: 5
    }
  },
  {
    id: 5,
    image: "/works/fdm/work_5.jpg",
    title: "3D-карта Красной площади",
    review: {
      name: "Андрей",
      text: "Заказывал карту центра Москвы для офиса — детализация невероятная. Видны здания, улицы, Кремль, Собор Василия Блаженного. Распечатали так, что всё понятно, где какое здание. То что нужно было, гуд)",
      rating: 5
    }
  },
  {
    id: 6,
    image: "/works/fdm/work_6.jpg",
    title: "FDM работа 6",
    review: null
  },
  {
    id: 7,
    image: "/works/fdm/work_7.jpg",
    title: "Органайзер-соты",
    review: {
      name: "Максим",
      text: "Давно искал что-то удобное для стола — провода, ручки, скрепки везде валялись. В итоге придумал какие нужны ячейки и размеры, и ребят попросил распечатать. От души.",
      rating: 5
    }
  },
  {
    id: 8,
    image: "/works/fdm/work_8.jpg",
    title: "FDM работа 8",
    review: null
  },
  {
    id: 9,
    image: "/works/fdm/work_9.jpg",
    title: "Подставка под телефон",
    review: {
      name: "Кристина",
      text: "Простая, лаконичная, устойчивая — именно то, что нужно. Буду заказывать другие мелочи для рабочего места.",
      rating: 5
    }
  },
  {
    id: 10,
    image: "/works/fdm/work_10.jpg",
    title: "FDM работа 10",
    review: null
  },
  {
    id: 11,
    image: "/works/fdm/work_11.jpg",
    title: "FDM работа 11",
    review: null
  }
];

export const modelingWorks: Work[] = [
  {
    id: 1,
    image: "/works/modeling/work_1.jpg",
    title: "Бюст собаки — дог",
    review: {
      name: "Любовь",
      text: "Заказала сделать бюст моего покойного дога. Передали породу безупречно. Пришлось присылать кучу фото, чтобы получилась именно моя собака, не думала что будет так сложно, но итог порадовал.",
      rating: 5
    }
  },
  {
    id: 2,
    image: "/works/modeling/work_2.jpg",
    title: "Проект 2",
    review: null
  },
  {
    id: 3,
    image: "/works/modeling/work_3.jpg",
    title: "Проект 3",
    review: null
  },
  {
    id: 4,
    image: "/works/modeling/work_4.jpg",
    title: "Проект 4",
    review: null
  },
  {
    id: 5,
    image: "/works/modeling/work_5.jpg",
    title: "Проект 5",
    review: null
  },
  {
    id: 6,
    image: "/works/modeling/work_6.jpg",
    title: "Проект 6",
    review: null
  },
  {
    id: 7,
    image: "/works/modeling/work_7.jpg",
    title: "Проект 7",
    review: null
  },
  {
    id: 8,
    image: "/works/modeling/work_8.jpg",
    title: "Проект 8",
    review: null
  },
  {
    id: 9,
    image: "/works/modeling/work_9.jpg",
    title: "Проект 9",
    review: null
  },
  {
    id: 10,
    image: "/works/modeling/work_10.jpg",
    title: "Проект 10",
    review: null
  },
  {
    id: 11,
    image: "/works/modeling/work_11.jpg",
    title: "Проект 11",
    review: null
  }
];
