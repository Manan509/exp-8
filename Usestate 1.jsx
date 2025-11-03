import { useState } from 'react';

export default function Login() {
  const [username, setUser] = useState('');
  const [password, setPass] = useState('');
  const [error, setErr] = useState('');

  const submit = () => {
    if (!username || !password) {
      setErr('Please enter both username and password.');
      return;
    }
    setErr('');
    console.log({ username, password });
  };

  return (
    <div style={{ width: '300px', margin: '80px auto', padding: '20px', border: '1px solid #ddd', borderRadius: '8px', textAlign: 'center' }}>
      <h2>Login</h2>

      <input
        placeholder="Username"
        value={username}
        onChange={e => setUser(e.target.value)}
        style={{ width: '100%', padding: '10px', margin: '10px 0' }}
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={e => setPass(e.target.value)}
        style={{ width: '100%', padding: '10px', margin: '10px 0' }}
      />

      {error && (
        <p style={{ color: 'red', fontSize: '14px' }}>
          {error}
        </p>
      )}

      <button
        onClick={submit}
        style={{
          width: '100%',
          padding: '12px',
          background: '#007bff',
          border: 'none',
          color: 'white',
          cursor: 'pointer',
          borderRadius: '6px'
        }}
      >
        Login
      </button>
    </div>
  );
}
