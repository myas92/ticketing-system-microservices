import { useState } from "react";
import axios from "axios";
export default () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    const response = await axios.post("/api/users/signup", {
      email,
      password,
    });
    console.log(response);
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <h1>Sign Up</h1>
      <div className="mb-3">
        <label className="form-label">Email Address</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="form-control"
          id="email"
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Password</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          className="form-control"
          id="password"
        />
      </div>
      <button className="btn btn-primary">Sing Up</button>
    </form>
  );
};
