import React, { useState } from 'react';
import axios from 'axios';
import style from './styles/Register.module.css'
import { Link, useNavigate } from 'react-router-dom';


function Register() {
  const [usuario, setUsuario] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const navigate = useNavigate(); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:3000/register', { usuario, email, senha });
      console.log(res.data);
      alert('Usuário registrado com sucesso!');
      navigate('/login');
    } catch (err) {
      console.error(err);
      alert('Erro ao registrar usuário.');
    }
  };

  return (
    <div >
      <h2>Registrar-se</h2>
        <div  >
          <form onSubmit={handleSubmit} className={style.containerForm}>
              <label htmlFor="Usuário">Usuário:</label>
              <input type="text" value={usuario} onChange={(e) => setUsuario(e.target.value)} placeholder="Ex:Maria" required />
              <label htmlFor="Email">Email:</label>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="exemplo@gmail.com" required />
              <label htmlFor="Senha">Senha:</label>
              <input type="password" value={senha} onChange={(e) => setSenha(e.target.value)} placeholder="**********" required />
              <div>
                <button type="submit" className={style.register}>Registrar</button>
                <Link to="/login"className={style.voltar} >Voltar</Link>
              </div>
          </form>
        </div>
    </div>
  );
}

export default Register;
