import Alert from "react-bootstrap/Alert";
import "bootstrap/dist/css/bootstrap.min.css";

function WarningSign(props) {
  return <Alert variant={props.variant}> {props.text}</Alert>;
}

export default WarningSign;
