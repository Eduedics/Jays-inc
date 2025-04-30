import axios from '../utils/axios'; 
import { useState } from 'react';

function Register() {
  const [form, setForm] = useState({ username: '', email: '', password: '' });
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('api/register/', form);
      alert("Registered successfully!");
      setForm({ username: '', email: '', password: '' });
      setError(null);
    } catch (err) {
      const errMsg = err.response?.data || "Registration failed";
      setError(errMsg);
      console.error(errMsg);
    }
  };

  return (
    <form onSubmit={handleSubmit} className='registerForm'>
      <input
        value={form.username}
        placeholder="Username"
        onChange={(e) => setForm({ ...form, username: e.target.value })}
      />
      <input
        value={form.email}
        placeholder="Email"
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />
      <input
        type="password"
        value={form.password}
        placeholder="Password"
        onChange={(e) => setForm({ ...form, password: e.target.value })}
      />
      <button type="submit">Register</button>
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

export default Register;