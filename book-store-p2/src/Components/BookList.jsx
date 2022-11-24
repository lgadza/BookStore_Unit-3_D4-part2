import React from "react";
import SingleBook from "./SingleBook";
import { Col, Container, Row } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";

import FormControl from "react-bootstrap/FormControl";
import Form from "react-bootstrap/Form";

class BookList extends React.Component {
  state = {
    searchQuery: "",
  };
  render() {
    return (
      <Container>
        <div class="container-fluid">
          <Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Form className="d-flex w-100">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="mr-2"
                  aria-label="Search"
                  onChange={(e) =>
                    this.setState({ searchQuery: e.target.value })
                  }
                />
              </Form>
            </Navbar.Collapse>
          </Navbar>
        </div>
        <Row>
          {this.props.books
            .filter((element) =>
              element.title.toLowerCase().includes(this.state.searchQuery)
            )
            .map((element) => (
              <Col xs={4} md={3} className="my-4">
                <SingleBook book={element} />
              </Col>
            ))}
        </Row>
      </Container>
    );
  }
}

export default BookList;
