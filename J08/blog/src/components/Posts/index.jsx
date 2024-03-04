import PropTypes from 'prop-types';
import Post from '../Post';

import './Posts.scss';

function Posts({ posts, isZen }) {
  return (
    <main className="posts">
      <h1 className="posts-title">Dev Of Thrones</h1>
      <div className={isZen ? "" : "posts-list"}>
        {posts.map(({ id, ...rest }) => <Post key={id} isZen={isZen} {...rest} />)}
      </div>
    </main>
  );
}

Posts.propTypes = {
  posts: PropTypes.array,
  isZen: PropTypes.bool
}

export default Posts;