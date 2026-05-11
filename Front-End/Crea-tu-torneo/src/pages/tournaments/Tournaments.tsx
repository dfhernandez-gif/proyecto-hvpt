import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import authService from '../../services/authService';

interface Tournament {
  id: number;
  name: string;
  owner: string;
}

export default function Dashboard() {

  const navigate = useNavigate();

  const user = authService.currentUser();

  const [tournaments, setTournaments] = useState<Tournament[]>([]);

  const [name, setName] = useState('');

  // VOLVER AL DASHBOARD
  const goToDashboard = () => {
    navigate('/dashboard');
  };

  const createTournament = () => {
    if (!name.trim()) return;

    const newTournament: Tournament = {
      id: Date.now(),
      name,
      owner: user?.name || 'Administrador',
    };

    setTournaments([...tournaments, newTournament]);
    setName('');
  };

  const deleteTournament = (id: number) => {
    setTournaments(
      tournaments.filter(tournament => tournament.id !== id)
    );
  };

  return (
    <div className="min-h-screen bg-green-100 p-8">

      {/* BOTON VOLVER */}
      <div
        onClick={goToDashboard}
        className="
          flex
          items-center
          gap-2
          cursor-pointer
          mb-8
          hover:opacity-70
          transition
        "
      >

        <span className="material-symbols-outlined">
          arrow_back
        </span>

        <p className="font-semibold text-lg">
          Volver al Dashboard
        </p>

      </div>

      {/* TITULO */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-800">
          Bienvenido, {user?.name}
        </h1>

        <p className="text-gray-600 mt-2">
          Gestiona tus torneos y equipos.
        </p>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

        {/* CARD CREAR TORNEO */}
        <div className="bg-white rounded-3xl shadow-2xl p-8">

          <h2 className="text-3xl font-bold mb-6">
            Crear Torneo
          </h2>

          <div className="flex flex-col gap-4">

            <input
              type="text"
              placeholder="Nombre del torneo"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="
                border
                border-gray-300
                rounded-xl
                p-4
                outline-none
                focus:ring-2
                focus:ring-green-400
              "
            />

            <button
              onClick={createTournament}
              className="
                bg-green-500
                hover:bg-green-600
                text-white
                font-semibold
                py-3
                rounded-xl
                transition
              "
            >
              Crear Torneo
            </button>

          </div>
        </div>

        {/* CARD LISTADO */}
        <div className="bg-white rounded-3xl shadow-2xl p-8">

          <h2 className="text-3xl font-bold mb-6">
            Torneos Creados
          </h2>

          {tournaments.length === 0 ? (
            <p className="text-gray-500">
              No hay torneos creados.
            </p>
          ) : (
            <div className="flex flex-col gap-4">

              {tournaments.map((tournament) => (
                <div
                  key={tournament.id}
                  className="
                    border
                    border-gray-200
                    rounded-2xl
                    p-5
                    flex
                    justify-between
                    items-center
                    hover:bg-gray-50
                    transition
                  "
                >

                  <div>
                    <h3 className="text-xl font-semibold">
                      {tournament.name}
                    </h3>

                    <p className="text-gray-600">
                      Organizador: {tournament.owner}
                    </p>
                  </div>

                  <button
                    onClick={() => deleteTournament(tournament.id)}
                    className="
                      bg-red-500
                      hover:bg-red-600
                      text-white
                      px-4
                      py-2
                      rounded-xl
                      transition
                    "
                  >
                    Eliminar
                  </button>

                </div>
              ))}

            </div>
          )}

        </div>

      </div>
    </div>
  );
}