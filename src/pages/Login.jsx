import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="container">
      <form className="form">
        <h1>Login</h1>

        <input type="email" placeholder="Enter Email" />
        <input type="password" placeholder="Enter Password" />

        <button>Login</button>

        <p>
          Don't have an account? <Link to="/signup">Signup</Link>
        </p>
      </form>
    </div>
  );
}

export default Login;