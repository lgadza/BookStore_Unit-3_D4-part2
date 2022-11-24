import { Form, ListGroup, Button } from "react-bootstrap/";
function AddComment(props) {
  return (
    <div className="comments-form pd-4">
      <Form>
        <Form.Group>
          <Form.Label>What is your take on this book?</Form.Label>
          <Form.Control
            className="imputs"
            placeholder="Write here"
            as="textarea"
            rows={3}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Rate The Book</Form.Label>
          <Form.Control
            className="imputs"
            type="number"
            min="1"
            max="5"
            placeholder="3"
          />
        </Form.Group>
      </Form>
      <ListGroup className="pb-4 ">
        <ListGroup.Item className="imputs">Asin: {props.asin}</ListGroup.Item>
      </ListGroup>
      <div className="pb-4">
        <Button className="px-4" as="input" type="submit" value="Post" />
      </div>
    </div>
  );
}

export default AddComment;
