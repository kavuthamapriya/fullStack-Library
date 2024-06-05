import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="Home-container">
      <div className="text">
        <h1 style={{ fontSize: "80px", color: "black" }}>Welcome to Library</h1>
      </div>
      <div className="buttonContainer">
        <Link to={"/login"}>
          <Button variant="success" size="lg">
            Login
          </Button>
        </Link>

        <Link to={"/register"}>
          <Button variant="warning" size="lg">
            Register
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
