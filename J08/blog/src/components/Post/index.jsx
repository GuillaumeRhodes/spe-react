import PropTypes from 'prop-types';
import './Post.scss';

function Post({ title, category: { name }, excerpt, isZen }) {
  return (
    <article className={isZen ? "" : "post"}>
      <h2 className="post-title">{title}</h2>
      <div className="post-category">{name}</div>
      <p className="post-excerpt">
        {excerpt}
      </p>
    </article>
  );
}

Post.propTypes = {
  title: PropTypes.string,
  category: PropTypes.shape({
    name: PropTypes.string
  }),
  excerpt: PropTypes.string,
  isZen: PropTypes.bool
}

export default Post;