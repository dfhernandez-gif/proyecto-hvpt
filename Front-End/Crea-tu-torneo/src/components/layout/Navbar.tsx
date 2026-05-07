import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
  
export default function Navbar() {
  const { logout } = useAuth();
  return (
    <nav>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/teams">Equipos</Link>
      <Link to="/tournaments">Torneos</Link>
      <Link to="/notifications">Notificaciones</Link>
      <Link to="/profile">Perfil</Link>
      <button onClick={logout}>Salir</button>
    </nav>
  );
}
