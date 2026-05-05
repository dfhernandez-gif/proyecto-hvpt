import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const submit = (e:any) => {
    console.log('asd');
    
    e.preventDefault();
    if(login(email,password)) navigate('/dashboard');
    else alert('Credenciales incorrectas');
  };

  return (
    <div className="container"><div className="card">
      <h2>Login</h2>
      <form onSubmit={submit}>
        <input placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} />
        <input type="password" placeholder="Contraseña" value={password} onChange={e=>setPassword(e.target.value)} />
        <button type="submit">Ingresar</button>
      </form>
      <Link to="/register">Crear cuenta</Link>
    </div></div>
  );
}
