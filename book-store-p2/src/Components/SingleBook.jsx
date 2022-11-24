import { Component } from "react";
import Card from "react-bootstrap/Card";
import History from "..//books/history.json";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

class SingleBook extends Component {
  state = {
    selected: false,
  };

  render() {
    return (
      <Card
        key={this.props.book.asin}
        onClick={() => this.setState({ selected: !this.state.selected })}
        style={{ border: this.state.selected ? "3px solid red" : "none" }}
      >
        <Card.Img variant="top" src={this.props.book.img} />
        <Card.Body>
          <Card.Title>{this.props.book.title}</Card.Title>
          <Card.Text>{this.props.book.category}</Card.Text>
          <Button variant="primary">{this.props.book.price}</Button>
        </Card.Body>
      </Card>
    );
  }
}

export default SingleBook;
