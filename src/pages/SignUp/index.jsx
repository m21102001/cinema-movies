import React, { useState } from 'react';
import styles from './signUp.module.css';
import axios from 'axios';

const index = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [Remember, setRemember] = useState(false);

  const token =
    'eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9naXZlbm5hbWUiOiJhZG1pbiIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL2VtYWlsYWRkcmVzcyI6ImFkbWluQGdtYWlsLmNvbSIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL21vYmlsZXBob25lIjoiMDExMjIzMzQ0NTUiLCJleHAiOjE2OTQ3ODg5MTEsImlzcyI6Imh0dHBzOi8vbG9jYWxob3N0OjcxMTkiLCJhdWQiOiJNeVNlY3VyZWRBcGlVc2VycyJ9.wdAbA1v4ivtvIDoNUOocQFJSiRXY2nmN0QfXGamc3Vw';
  const handleSubmit = (e) => {
    e.preventDefault();

    const configuration = {
      method: 'post',
      url: 'https://miracle49-001-site1.itempurl.com/api/accounts/admins/login',
      data: {
        EMAILORPHONE: email,
        PASSWORD: password,
        Rememberme: Remember,
      },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    console.log(configuration.data);

    fetch(configuration)
      .then((result) => {
        console.log(result.body);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className={styles.container}>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="email"
          placeholder="user name"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <label htmlFor="checkbox">
          <input type="checkbox" id="checkbox" value={Remember} />
          Remember Password
        </label>

        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default index;
