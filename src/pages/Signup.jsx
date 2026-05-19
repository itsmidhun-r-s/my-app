import { Link } from "react-router-dom";

function Signup() {
  return (
    <div className="container">
      <form className="form">
        <h1>Signup</h1>

        <input type="text" placeholder="Enter Name" />
        <input type="email" placeholder="Enter Email" />
        <input type="password" placeholder="Enter Password" />

        <button>Signup</button>

        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  );
}

export default Signup;