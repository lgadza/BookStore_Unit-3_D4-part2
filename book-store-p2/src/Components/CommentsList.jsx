import { Component } from "react";
import { ListGroup, Alert, Spinner } from "react-bootstrap/";

class CommentsList extends Component {
  state = {
    comments: [],
    isLoading: true,
    isError: false,
  };

  fetchComments = async () => {
    try {
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/${this.props.asin}`,
        {
          headers: {
            "Content-Type": "application/json",

            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzZjZjQwZmQ0YmUzZDAwMTU4NDVmZWQiLCJpYXQiOjE2NjkyOTM2ODUsImV4cCI6MTY3MDUwMzI4NX0.TTbKjw-SlQVmCOzDWf2shzTU3HSj5wFRCcGzsSc1ea0",
          },
          // method: bookId ? "Put" : "Post",
          // body: JSON.stringify(newProduct),
        }
      );
      if (response.ok) {
        const books = await response.json();
        console.log(books);
        this.setState({
          comments: books,
          isLoading: false,
        });
      } else {
        console.log("error in fetching");
      }

      // return books;
    } catch (error) {
      console.log(error);
    }
  };
  componentDidMount() {
    this.fetchComments();
  }
  //     console
  render() {
    return (
      // console.log(books)
      <div>
        <h2>All Comments</h2>
        {this.state.isLoading && (
          <Spinner
            animation="border"
            role="status"
            className="custom-spinner-color"
          >
            <span className="sr-only">Loading...</span>
          </Spinner>
        )}
        {this.state.comments.map((c) => (
          <ListGroup.Item key={c._id}>
            {" "}
            Comments:
            {c.comment} by {c.author} and rated the book at {c.rate}
          </ListGroup.Item>
        ))}
        {this.state.isError && (
          <Alert variant="danger">Whoopsie, something went wrong! :(</Alert>
        )}
      </div>
    );
  }
}

export default CommentsList;
