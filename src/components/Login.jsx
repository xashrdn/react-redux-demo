import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login, logout } from "../features/user";

const Login = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");

  const signup = () => {
    dispatch(
      login({
        name: name,
        age: age,
        email: email,
      })
    );
  };

  const garah = () => {
    dispatch(logout());
  };

  return (
    <div>
      <button onClick={() => signup()}>Login</button>
      <input
        type="text"
        placeholder="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        placeholder="name"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="age"
        onChange={(e) => setAge(e.target.value)}
      />
      <button onClick={() => garah()}>LogOut</button>
    </div>
  );
};

export default Login;
