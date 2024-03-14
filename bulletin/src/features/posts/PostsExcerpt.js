import React from "react";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";

import { Link } from "react-router-dom";

const PostExcerpt = ({ post }) => {
  // Check if post.body is defined before accessing its properties
  const body = post.body ? post.body.substring(0, 100) : "";

  return (
    <article>
      <h2>{post.title}</h2>
      {/* Render post.body only if it's defined */}
      {post.body && <p className="excerpt">{body}</p>}
      <p className="postCredit">
        <Link to={`post/${post.id}`}>View Post</Link>
        <PostAuthor userId={post.userId} />
        <TimeAgo timestamp={post.date} />
      </p>
      <ReactionButtons post={post} />
    </article>
  );
};

export default PostExcerpt;
