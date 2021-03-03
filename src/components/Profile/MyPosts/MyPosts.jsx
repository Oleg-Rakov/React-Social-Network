import React, { PureComponent } from 'react';
import s from './MyPosts.module.css';
import NewPostsForm from './MyPostsForm';
import Post from './Post/Post';

const MyPosts = props => {

  let postsElements = props.posts.map(post => <Post message={post.message} likesCount={post.likesCount} />)

  return (
    <div className={s.postsBlock}>
      <h3>My Posts</h3>
      <div>
        <div>
          <NewPostsForm addPost={props.addPost} />
        </div>
      </div>
      <div className={s.posts}>
        {postsElements}
      </div>
    </div>
  );
} 

export default MyPosts;