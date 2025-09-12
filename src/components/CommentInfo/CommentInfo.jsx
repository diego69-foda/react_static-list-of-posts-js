export const CommentInfo = ({ comments }) => (
  <div className="CommentInfo">
    <div className="CommentInfo__title">
      <strong className="CommentInfo__name">{comments.name}</strong>

      {' by '}

      <a className="CommentInfo__email" href="mailto:Telly_Lynch@karl.co.uk">
        Telly_Lynch@karl.co.uk
      </a>
    </div>

    <div className="CommentInfo__body">{comments.body}</div>
  </div>
);
