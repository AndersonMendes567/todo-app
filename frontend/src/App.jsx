
import { faTasks } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function App() {
  return (
    <div 
      className="vh-100 d-flex justify-content-center align-items-center"
    >
      <h1 className="fw-light text-center">
        <FontAwesomeIcon icon={faTasks} className="me-3" />
        To-do App
      </h1>
    </div>
  );
}

export default App;
