import Navbar from '../../components/layout/Navbar';
import notificationService from '../../services/notificationService';

export default function Notifications() {
  const notifications = notificationService.getAll();
  return (
    <>
      <Navbar />
      <div className="container">
        <h2>Notificaciones</h2>
        {notifications.map(n => (
          <div key={n.id} className="card">
            <p>{n.message}</p>
          </div>
        ))}
      </div>
    </>
  );
}
