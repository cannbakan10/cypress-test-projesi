// src/components/Login.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [terms, setTerms] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const validate = () => {
    if (!email.includes('@')) return "Geçerli email giriniz";
    if (password.length < 6) return "Şifre en az 6 karakter olmalı";
    if (!terms) return "Şartları kabul etmelisiniz !";
    return "";
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const err = validate();
    if (err) {
      setError(err);
    } else {
      setError("");
      navigate("/success");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Email giriniz"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      /><br />
      <input
        type="password"
        placeholder="Şifre giriniz"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      /><br />
      <label>
        <input
          type="checkbox"
          checked={terms}
          onChange={(e) => setTerms(e.target.checked)}
        />
        Kullanım şartlarını kabul ediyorum
      </label><br />
      <button disabled={!terms}>Giriş Yap</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </form>
  );
}
