import React, { useState } from 'react'
import axios from "axios";
import { Navigate } from 'react-router';
// import styles from './login.module.css'

const index = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState(false);

  const token ="eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9naXZlbm5hbWUiOiJhZG1pbiIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL2VtYWlsYWRkcmVzcyI6ImFkbWluQGdtYWlsLmNvbSIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL21vYmlsZXBob25lIjoiMDExMjIzMzQ0NTUiLCJleHAiOjE2OTQ2NTI5NDcsImlzcyI6Imh0dHBzOi8vbG9jYWxob3N0OjcxMTkiLCJhdWQiOiJNeVNlY3VyZWRBcGlVc2VycyJ9.1kK895_8yV35auAf6m0t1SkfDlWflIXj44p2rnmzqew"
  const handleSubmit = (e) => {
    // prevent the form from refreshing the whole page
    e.preventDefault();

    // set configurations
    const configuration = {
      method: "post",
      url: "https://miracle49-001-site1.itempurl.com/api/accounts/admins/login",
      data: {
        email,
        password,
      },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    console.log(configuration.data)

    // make the API call
    axios(configuration)
      .then((result) => {
        setLogin(result.data.message);
      })
      .catch((error) => {
        error = new Error();
        console.log(error);
      });
  };


  return (
    <main className={`form-signin w-100 m-auto`}>
      <form onSubmit={(e) => handleSubmit(e)}>
        <img className="mb-4" src="../assets/brand/bootstrap-logo.svg" alt="" width="72" height="57" />
        <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

        <div className="form-floating">
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
          />
          <label htmlFor="floatingInput">Email address</label>
        </div>
        <div className="form-floating">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          <label htmlFor="floatingPassword">Password</label>
        </div>
        <button
          className="w-100 btn btn-lg btn-primary"
          type="submit"
          onClick={(e) => handleSubmit(e)}
        >
          Sign in </button>
        <p className="mt-5 mb-3 text-muted">&copy; 2017–2022</p>
      </form>
      {/* display success message */}
      {login ? (
        <p className="text-success">You Are Logged in Successfully</p>
      ) : (
        <p className="text-danger">You Are Not Logged in</p>
      )}
    </main>
  )
}

export default index
