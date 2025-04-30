import axios from '../utils/axios';
import { useState } from 'react';

function Login() {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [error, setError] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('token/', credentials);
      localStorage.setItem('access', res.data.access);
      localStorage.setItem('refresh', res.data.refresh);
      setError(null);
      alert("Logged in!");
    } catch (err) {
      const errMsg = err.response?.data || "Login failed";
      setError(errMsg);
      console.error(errMsg);
    }
  };

  return (
    <form onSubmit={handleLogin} className='registerForm'>
      <input
        placeholder="Username"
        value={credentials.username}
        onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
      />
      <input
        type="password"
        placeholder="Password"
        value={credentials.password}
        onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
      />
      <button type="submit">Login</button>
      {error && (
        <div style={{ color: 'red', marginTop: '10px' }}>
          {typeof error === 'string'
            ? error
            : Object.values(error).map((msg, i) => <div key={i}>{msg}</div>)}
        </div>
      )}
    </form>
  );
}

export default Login;
