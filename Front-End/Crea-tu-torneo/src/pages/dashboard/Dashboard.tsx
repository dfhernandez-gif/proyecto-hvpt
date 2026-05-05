import Navbar from '../../components/layout/Navbar';
import { useAuth } from '../../context/AuthContext';

export default function Dashboard() {
  const { user } = useAuth();
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="card">
          <h1>Bienvenido, {user?.name}</h1>
          <p>Administra equipos, torneos, partidos y solicitudes.</p>
        </div>
      </div>
    </>
  );
}
