import ListGroup from "react-bootstrap/ListGroup";
import AddComment from "./AddComment";
import CommentsList from "./CommentsList";
class CommentArea {
  render() {
    return (
      <div>
        <AddComment />
        <CommentsList />
      </div>
    );
  }
}

export default CommentArea;
