import Navbar from '../../components/layout/Navbar';
import tournamentService from '../../services/tournamentService';

export default function Tournaments() {
  const tournaments = tournamentService.getAll();
  return (
    <>
      <Navbar />
      <div className="container">
        <h2>Torneos</h2>
        {tournaments.map(t => (
          <div key={t.id} className="card">
            <h3>{t.name}</h3>
            <p>Organizador: {t.owner}</p>
          </div>
        ))}
      </div>
    </>
  );
}
