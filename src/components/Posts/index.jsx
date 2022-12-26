import { PostCard } from '../PostCard';
import './styles.css'

export const Posts = ({ posts }) => (
  <div className="posts">
    {
      //sempre q houver map, precisa de uma key
      posts.map((post) => (
        <PostCard
          key={post.id}
          title={post.title}
          body={post.body}
          cover={post.cover}
          id={post.id}
          // post={post} // isso eu pego o objeto inteiro
        />
      ))
    }
  </div>
);
