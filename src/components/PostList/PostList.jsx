import { PostInfo } from '../PostInfo/PostInfo';

export const PostList = ({ posts, comments, users }) => (
  <div className="PostList">
    <PostInfo posts={posts} comments={comments} users={users} />
  </div>
);
