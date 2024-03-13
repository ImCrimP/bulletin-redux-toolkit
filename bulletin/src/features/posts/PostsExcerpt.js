import React from "react";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";

const PostExcerpt = ({ post }) => {
  // Check if post.body is defined before accessing its properties
  const body = post.body ? post.body.substring(0, 100) : "";

  return (
    <article>
      <h3>{post.title}</h3>
      {/* Render post.body only if it's defined */}
      {post.body && <p>{body}</p>}
      <p className="postCredit">
        <PostAuthor userId={post.userId} />
        <TimeAgo timestamp={post.date} />
      </p>
      <ReactionButtons post={post} />
    </article>
  );
};

export default PostExcerpt;
