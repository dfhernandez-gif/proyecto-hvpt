import Navbar from '../../components/layout/Navbar';
import teamService from '../../services/teamService';

export default function Teams() {
  const teams = teamService.getAll();
  return (
    <>
      <Navbar />
      <div className="container">
        <h2>Equipos</h2>
        {teams.map(team => (
          <div key={team.id} className="card">
            <h3>{team.name}</h3>
            <p>Owner: {team.owner}</p>
          </div>
        ))}
      </div>
    </>
  );
}
