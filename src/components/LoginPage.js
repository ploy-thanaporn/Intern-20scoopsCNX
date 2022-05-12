import { useNavigate } from "react-router-dom";
import "../components/LoginPage.css";

function LoginPage() {
  let navigate = useNavigate();

  function handleClick() {
    navigate("/movie-list");
  }

  return (
    <div className="container">
      <div className="content">
        <div className="box">
          <h3 className="head">Login</h3>
          <input type="text" placeholder="Username" />
        </div>
        <div className="login-submit">
          <button type="submit" className="btn-login" onClick={handleClick}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
