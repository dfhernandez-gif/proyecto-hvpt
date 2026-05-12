import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import authService from '../../services/authService';
import tournamentService from '../../services/tournamentService';

interface Tournament {
  id: number;
  name: string;
  owner: string;
}

export default function Tournaments() {

  const navigate = useNavigate();

  const user = authService.currentUser();

  const [name, setName] = useState('');

  const [tournaments, setTournaments] = useState<Tournament[]>([]);

  // CARGAR TORNEOS
  useEffect(() => {

    const allTournaments =
      tournamentService.getAll();

    setTournaments(allTournaments);

  }, []);

  // VOLVER
  const goToDashboard = () => {
    navigate('/dashboard');
  };

  // CREAR
  const createTournament = () => {

    if (!name.trim()) return;

    tournamentService.create(
      name,
      user?.name || 'Administrador'
    );

    setTournaments([
      ...tournamentService.getAll()
    ]);

    setName('');
  };

  // ELIMINAR
  const deleteTournament = (id: number) => {

    tournamentService.delete(id);

    setTournaments([
      ...tournamentService.getAll()
    ]);
  };

  return (
    <div className="min-h-screen bg-green-200 p-8">

      {/* VOLVER */}
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

        <span className="material-symbols-outlined text-gray-800">
          arrow_back
        </span>

        <p className="font-semibold text-lg text-gray-800">
          Volver al Dashboard
        </p>

      </div>

      {/* TITULO */}
      <div className="mb-8 text-center">

        <h1 className="text-5xl font-bold text-black">
          Bienvenido, {user?.name}
        </h1>

        <p className="text-black mt-4 text-xl">
          Gestiona tus torneos y equipos.
        </p>

      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

        {/* CREAR */}
        <div
          className="
            bg-white
            rounded-3xl
            shadow-2xl
            p-8
          "
        >

          <h2
            className="
              text-3xl
              font-bold
              mb-6
              text-gray-800
              text-center
            "
          >
            Crear Torneo
          </h2>

          <div className="flex flex-col gap-4">

            <input
              type="text"
              placeholder="Nombre del torneo"
              value={name}
              onChange={(e) =>
                setName(e.target.value)
              }
              className="
                border
                border-gray-300
                rounded-xl
                p-4
                text-gray-800
                outline-none
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

        {/* LISTADO */}
        <div
          className="
            bg-white
            rounded-3xl
            shadow-2xl
            p-8
          "
        >

          <h2
            className="
              text-3xl
              font-bold
              mb-6
              text-gray-800
              text-center
            "
          >
            Torneos Creados
          </h2>

          {tournaments.length === 0 ? (

            <p className="text-center text-gray-500">
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
                  "
                >

                  <div>

                    <h3
                      className="
                        text-xl
                        font-semibold
                        text-black
                      "
                    >
                      {tournament.name}
                    </h3>

                    <p className="text-gray-600">
                      Organizador:
                      {' '}
                      {tournament.owner}
                    </p>

                  </div>

                  <button
                    onClick={() =>
                      deleteTournament(
                        tournament.id
                      )
                    }
                    className="
                      bg-red-500
                      hover:bg-red-600
                      text-white
                      px-4
                      py-2
                      rounded-xl
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