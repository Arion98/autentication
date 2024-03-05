import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from "./styles/Login.module.css"

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simular a autenticação (substitua por API real)
    if (email === 'admin' && bcrypt.compareSync(password, '$2a$10$r2345678901234567890')) {
      // Redirecionar para a página inicial
      window.location.href = '/home';
    } else {
      alert('Credenciais inválidas!');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit} className={styles.containerForm}>
        
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
       
        
          <label htmlFor="password">Senha:</label>
          <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
       
        <button type="submit">Entrar</button>
      <p>Ainda não tem conta? <Link to="/register">Registre-se</Link></p>
      </form>
   </div>
  );
};

export default Login;