import { useState } from "react";
import useRequest from "../../hooks/use-request";
import Router from "next/router";
export default () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { doRequest, errors } = useRequest({
    url: "/api/users/signup",
    method: "post",
    body: {
      email,
      password,
    },
    onSuccess:()=>Router.push("/")
  });

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    await doRequest();
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
      {errors}
      <button className="btn btn-primary">Sing Up</button>
    </form>
  );
};
