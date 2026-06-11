import { slaReviews, fdmReviews, modelingReviews, getReviewsForWork, Review } from './reviews';

export interface Work {
  id: number;
  image: string;
  title: string;
  reviews: Review[];
}

// 11 works per category: 1–10 carry reviews, the 11th (shared photo) has none.
const makeWorks = (dir: string, label: string, pool: Review[]): Work[] =>
  Array.from({ length: 11 }, (_, i) => {
    const id = i + 1;
    return {
      id,
      image: `/works/${dir}/work_${id}.jpg`,
      title: `${label} ${id}`,
      reviews: id <= 10 ? getReviewsForWork(pool, id) : [],
    };
  });

export const slaWorks = makeWorks('sla', 'SLA работа', slaReviews);
export const fdmWorks = makeWorks('fdm', 'FDM работа', fdmReviews);
export const modelingWorks = makeWorks('modeling', 'Проект', modelingReviews);
