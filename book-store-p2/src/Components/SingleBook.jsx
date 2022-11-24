import { Component } from "react";
import Card from "react-bootstrap/Card";
import History from "..//books/history.json";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import AddComment from "./AddComment";
import CommentArea from "./CommentArea";
import CommentsList from "./CommentsList";

class SingleBook extends Component {
  state = {
    selected: false,
    asin: "",
  };
  handleClick = () => {
    this.setState({
      selected: true,
      asin: this.props.book.asin,
      // asin: this.props.book.asin,
    });
    console.log(this.state);
    console.log(this.props.book.asin);
  };
  render() {
    return (
      <Card
        onClick={this.handleClick}
        style={{ border: this.state.selected ? "3px solid red" : "none" }}
        key={this.props.book.asin}
        // onClick={() => this.setState({ selected: true })}
        // style={{ border: this.state.selected ? "3px solid red" : "none" }}
      >
        <Card.Img variant="top" src={this.props.book.img} />
        <Card.Body>
          <Card.Title>{this.props.book.title}</Card.Title>
          <Card.Text>{this.props.book.category}</Card.Text>
          <Button variant="primary">{this.props.book.price}</Button>
        </Card.Body>
        {this.state.selected && <AddComment asin={this.props.book.asin} />}
        {this.state.selected && <CommentsList />}
        {/* <CommentsList /> */}
      </Card>
    );
  }
}

export default SingleBook;
