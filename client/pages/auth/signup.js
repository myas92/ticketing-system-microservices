import { useState } from "react";
export default () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmitHandler = (event) => {
    event.preventDefault(0);
    console.log(email, password);
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <h1>Sign Up</h1>
      <div className="mb-3">
        <label className="form-label">
          Email Address
        </label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="form-control"
          id="email"
        />
      </div>
      <div className="mb-3">
        <label className="form-label">
          Password
        </label>
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
