import "./App.css";
import BookList from "./Components/BookList";
import MyBadge from "./Components/MyBadge";
import SingleBook from "./Components/SingleBook";
import "./App.css";
import WarningSign from "./Components/WarningSign";
import History from "..//src/books/history.json";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App container-fluid htmlBackgrourd ">
      <WarningSign text="Your Book is not available" variant="danger" />
      <MyBadge text="This is my Badge" color="light" />

      {/* <SingleBook book={History[0]} /> */}
      <BookList books={History} />
    </div>
  );
}

export default App;
