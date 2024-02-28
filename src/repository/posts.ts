import posts from '../content';
import { Post } from '../types/Post';

export const getAllPosts = (): Post[] => {
  return Object.values(posts).sort((a, b) =>
    new Date(a.date) > new Date(b.date) ? -1 : 1
  );
};

export const getPost = (slug: string) => {
  return posts[slug];
};
