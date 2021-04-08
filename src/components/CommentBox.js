import { useDispatch } from "react-redux";
import { useState } from "react";
import * as actions from "actions";

const CommentBox = () => {
  const [comment, setComment] = useState("");
  const dispatch = useDispatch();
  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (comment.trim().length <= 0) {
      return;
    }
    dispatch(actions.saveComment(comment));
    // saveComment(comment);
    setComment("");
  };
  const handleOnFetchComments = () => {
    dispatch(actions.fetchCommentAsync());
  };
  return (
    <form onSubmit={handleOnSubmit}>
      <h4>Add a Comment</h4>
      <textarea value={comment} onChange={(e) => setComment(e.target.value)} />
      <div>
        <button>Submit Comment</button>
        <button
          className="fetch-comments-button"
          type="button"
          onClick={handleOnFetchComments}
        >
          fetch Comment
        </button>
      </div>
    </form>
  );
};
export default CommentBox;
// export default connect(null, actions)(CommentBox);
