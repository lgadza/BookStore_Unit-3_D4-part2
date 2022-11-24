import { Badge } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
const MyBadge = (props) => <Badge bg={props.color}>{props.text}</Badge>;
export default MyBadge;
