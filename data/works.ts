import { slaReviews, fdmReviews, modelingReviews, getReviewsForWork, Review } from './reviews';

export interface Work {
  id: number;
  image: string;
  title: string;
  reviews: Review[];
}

const makeWorks = (dir: string, label: string, pool: Review[]): Work[] =>
  Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    image: `/works/${dir}/work_${i + 1}.jpg`,
    title: `${label} ${i + 1}`,
    reviews: getReviewsForWork(pool, i + 1),
  }));

export const slaWorks = makeWorks('sla', 'SLA работа', slaReviews);
export const fdmWorks = makeWorks('fdm', 'FDM работа', fdmReviews);
export const modelingWorks = makeWorks('modeling', 'Проект', modelingReviews);
