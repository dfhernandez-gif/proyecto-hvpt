import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/layout/Navbar';
import tournamentService from '../../services/tournamentService';

export default function Tournaments() {
  const tournaments = tournamentService.getAll();

  const navigate = useNavigate();

  const goToDashboard = () => {
    navigate('/dashboard');
  };

  return (
    <>
      <Navbar />

      <div className="bg-green-200 min-h-screen">

        {/* VOLVER */}
        <div
          onClick={goToDashboard}
          className="flex items-center gap-2 p-6 cursor-pointer hover:opacity-80"
        >
          <span className="material-symbols-outlined">
            arrow_back
          </span>

          <p className="font-semibold">
            Volver al Dashboard
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-6 pb-10">

          {/* CARD */}
          <div className="bg-white rounded-2xl p-6 shadow-xl">

            <h2 className="text-2xl font-bold mb-6">
              Torneos
            </h2>

            <div className="flex flex-col gap-4">
              {tournaments.map((t) => (
                <div
                  key={t.id}
                  className="border rounded-xl p-4 hover:bg-gray-100"
                >
                  <h3 className="text-xl font-semibold">
                    {t.name}
                  </h3>

                  <p className="text-gray-600">
                    Organizador: {t.owner}
                  </p>
                </div>
              ))}
            </div>

          </div>

          {/* SEGUNDA CARD */}
          <div className="bg-white rounded-2xl p-6 shadow-xl">
            <h2 className="text-2xl font-bold mb-4">
              Panel
            </h2>

            <p>
              Aquí puedes agregar formularios y estadísticas.
            </p>
          </div>

        </div>
      </div>
    </>
  );
}