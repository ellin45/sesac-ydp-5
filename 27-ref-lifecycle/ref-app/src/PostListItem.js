import React from 'react';

export default function PostListItem({ post }) {
  return (
    <div>
      <div>
        No. {post.id}-{post.title}
      </div>
      <div>{post.body}</div>
    </div>
  );
}
