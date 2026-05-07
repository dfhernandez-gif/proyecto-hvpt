import authService from '../services/authService';

export default function Dashboard() {
  const user = authService.getCurrentUser();

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Bienvenido, {user?.name}</h1>
      <p>Gestiona tus torneos y equipos.</p>
    </div>
  );
}
