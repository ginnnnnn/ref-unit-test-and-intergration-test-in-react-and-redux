import { connect } from "react-redux";

const CommentList = ({ comments }) => {
  const renderComments = () => {
    return comments.map((comment) => <li key={comment}>{comment}</li>);
  };
  return (
    <div>
      <ul>{renderComments()}</ul>
    </div>
  );
};

const mstp = ({ comments }) => ({
  comments: comments,
});
export default connect(mstp)(CommentList);
