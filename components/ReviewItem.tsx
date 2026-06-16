import React from 'react';
import { Review } from '../data/works';

const avatarColors = [
  '#E53935', '#D81B60', '#8E24AA', '#5E35B1',
  '#1E88E5', '#00ACC1', '#00897B', '#43A047',
  '#FB8C00', '#F4511E',
];

const getAvatarColor = (name: string) =>
  avatarColors[name.charCodeAt(0) % avatarColors.length];

const Avatar: React.FC<{ name: string }> = ({ name }) => (
  <div
    style={{ backgroundColor: getAvatarColor(name) }}
    className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold shrink-0"
    aria-hidden="true"
  >
    {name[0]}
  </div>
);

const ReviewItem: React.FC<{ review: Review }> = ({ review }) => (
  <div className="flex items-start gap-3">
    <Avatar name={review.name} />
    <div>
      <p className="text-text text-sm font-semibold">{review.name}</p>
      <div className="flex gap-0.5 my-0.5 text-sm" aria-label={`Рейтинг: ${review.rating} из 5`}>
        {Array.from({ length: 5 }, (_, i) => (
          <span key={i} className={i < review.rating ? 'text-yellow-400' : 'text-faint'}>★</span>
        ))}
      </div>
      <p className="text-muted text-sm">{review.text}</p>
    </div>
  </div>
);

export default ReviewItem;
