import React from 'react';
import './PostInfo.scss';
import { Post } from '../../types/Post';
import { UserInfo } from '../UserInfo/index';
import { CommentList } from '../CommentList/index';

type Props = {
  post: Post;
};

export const PostInfo: React.FC<Props> = ({ post }) => {
  const {
    title, user, body, comments, userId,
  } = post;

  return (
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">
          {title}
        </h3>
        {
          user
          && (
            <p>
              {' Posted by  '}
              <UserInfo user={user} key={userId} />
            </p>
          )
        }
      </div>
      <p className="PostInfo__body">
        {body}
      </p>
      {
        comments.length
          ? <CommentList comments={comments} />
          : <b data-cy="NoCommentsMessage">No comments yet</b>
      }
    </div>
  );
};