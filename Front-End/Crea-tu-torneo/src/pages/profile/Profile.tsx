import Navbar from '../../components/layout/Navbar';
import { useAuth } from '../../context/AuthContext';

export default function Profile() {
  const { user } = useAuth();
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="card">
          <h2>Perfil</h2>
          <p>Nombre: {user?.name}</p>
          <p>Email: {user?.email}</p>
        </div>
      </div>
    </>
  );
}
