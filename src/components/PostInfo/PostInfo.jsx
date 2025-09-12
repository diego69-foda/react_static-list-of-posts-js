import { UserInfo } from '../UserInfo/UserInfo';
import { CommentList } from '../CommentList/CommentList';

export const PostInfo = ({ posts, comments, users }) => (
  <div className="PostInfo">
    <div className="PostInfo__header">
      <h3 className="PostInfo__title">{posts.name}</h3>

      <p>
        {' Posted by  '}

        <UserInfo users={users} />
      </p>
    </div>

    <p className="PostInfo__body">{posts.body}</p>

    <CommentList comments={comments} />
  </div>
);
