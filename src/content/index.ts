import { Post } from '../types/Post';

const posts: { [key: string]: Post } = {
  post1: require('./post1').default,
  post2: require('./post2').default,
  formula1: require('./formula1').default,
};

export default posts;
