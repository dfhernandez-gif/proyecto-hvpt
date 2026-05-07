import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import authService from '../../services/authService';

export default function Register() {
  const [name,setName]=useState('');
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const navigate = useNavigate();

  const submit=(e:any)=>{
    e.preventDefault();
    authService.register(name,email,password);
    navigate('/');
  };

  return (
    <div className="container"><div className="card">
      <h2>Registro</h2>
      <form onSubmit={submit}>
        <input placeholder="Nombre" value={name} onChange={e=>setName(e.target.value)} />
        <input placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} />
        <input type="password" placeholder="Contraseña" value={password} onChange={e=>setPassword(e.target.value)} />
        <button type="submit">Registrarse</button>
      </form>
    </div></div>
  );
}
