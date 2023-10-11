import React from 'react';

export default function PostListItem({ post }) {
  return (
    <>

    <div className='container'> 
      <div className='postIdTitle'>
        <span className='id'>No. {post.id}</span>
        <span className='title'>-{post.title}</span>
      </div>
      <div className='postBody'>{post.body}</div>
    </div>
    </>
  );
}