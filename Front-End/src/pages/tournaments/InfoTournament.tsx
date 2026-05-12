import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface Team {
    idTeam: number;
    name: string;
}

interface Tournament {
    id: number;
    name: string;
    estado: string;
    teams: Team[];
}

export default function InfoTournament() {

    const navigate = useNavigate();

    // DATOS DE EJEMPLO
    const [tournament, setTournament] = useState<Tournament>({
        id: 1,
        name: 'Champions League',
        estado: 'Pendiente',
        teams: [
            {
                idTeam: 1,
                name: 'Real Madrid',
            },
            {
                idTeam: 2,
                name: 'Barcelona',
            },
            {
                idTeam: 3,
                name: 'Manchester City',
            },
        ],
    });

    // VOLVER
    const goToDashboard = () => {
        navigate('/tournaments');
    };

    // VALIDAR SI PUEDE INICIAR
    const canStart = () => {
        return tournament.teams.length >= 2;
    };

    // INICIAR TORNEO
    const startTournament = () => {

        if (!canStart()) return;

        setTournament({
            ...tournament,
            estado: 'En Curso',
        });

        alert('Torneo iniciado correctamente');
    };

    return (
        <div className="min-h-screen bg-[#b7d8b7] p-6">

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

                <span className="material-symbols-outlined text-black">
                    arrow_back
                </span>

                <p className="font-semibold text-lg text-black">
                    Volver a los torneos
                </p>

            </div>

            {/* CONTENEDOR */}
            <div
                className="
          bg-gray-100
          min-h-screen
          rounded-3xl
          p-6
        "
            >

                {/* CARD PRINCIPAL */}
                {tournament && (

                    <div
                        className="
              bg-white
              rounded-3xl
              p-8
              shadow-2xl
              mb-8
            "
                    >

                        {/* HEADER */}
                        <div
                            className="
                flex
                flex-col
                lg:flex-row
                justify-between
                items-start
                lg:items-center
                gap-6
              "
                        >

                            {/* TITLE */}
                            <div className="flex items-center gap-4">

                                {/* ICONO */}
                                <div
                                    className="
                    w-16
                    h-16
                    rounded-2xl
                    flex
                    items-center
                    justify-center
                    bg-linear-to-br
                    from-indigo-500
                    to-purple-600
                    text-white
                  "
                                >

                                    <span className="material-symbols-outlined text-4xl">
                                        emoji_events
                                    </span>

                                </div>

                                {/* INFO */}
                                <div>

                                    <h3 className="text-3xl font-bold text-black">
                                        {tournament.name}
                                    </h3>

                                    <span
                                        className="
                      inline-block
                      mt-2
                      bg-blue-100
                      text-blue-700
                      px-4
                      py-1
                      rounded-xl
                      text-sm
                      font-semibold
                    "
                                    >
                                        {tournament.estado}
                                    </span>

                                </div>

                            </div>

                            {/* BOTON */}
                            <button
                                disabled={!canStart()}
                                onClick={startTournament}
                                className="
                  bg-green-600
                  hover:bg-green-700
                  disabled:bg-gray-400
                  disabled:cursor-not-allowed
                  text-white
                  font-semibold
                  px-6
                  py-3
                  rounded-2xl
                  transition
                "
                            >
                                Iniciar Torneo
                            </button>

                        </div>

                        {/* STATS */}
                        <div className="flex gap-4 mt-8">

                            <div
                                className="
                  flex-1
                  bg-indigo-100
                  text-indigo-800
                  rounded-2xl
                  p-6
                  text-center
                "
                            >

                                <h3 className="text-4xl font-bold">
                                    {tournament.teams.length}
                                </h3>

                                <p className="mt-2 text-lg">
                                    Equipos
                                </p>

                            </div>

                        </div>

                    </div>

                )}

                {/* EQUIPOS */}
                <div
                    className="
            bg-white
            rounded-3xl
            p-8
            shadow-2xl
          "
                >

                    <h3 className="text-3xl font-bold text-black mb-6">
                        Equipos Inscritos
                    </h3>

                    {tournament.teams.length > 0 ? (

                        <div
                            className="
                flex
                flex-wrap
                gap-5
              "
                        >

                            {tournament.teams.map((team) => (

                                <div
                                    key={team.idTeam}
                                    className="
                    flex
                    items-center
                    gap-4
                    min-w-70
                    flex-1
                    bg-gray-50
                    border
                    border-gray-200
                    rounded-2xl
                    p-5
                  "
                                >

                                    {/* ICONO */}
                                    <div
                                        className="
                      w-14
                      h-14
                      rounded-2xl
                      flex
                      items-center
                      justify-center
                      bg-linear-to-br
                      from-green-500
                      to-blue-500
                      text-white
                    "
                                    >

                                        <span className="material-symbols-outlined text-3xl">
                                            groups
                                        </span>

                                    </div>

                                    {/* INFO */}
                                    <div>

                                        <p className="font-bold text-black text-lg">
                                            {team.name}
                                        </p>

                                        <small className="text-gray-500">
                                            Equipo inscrito
                                        </small>

                                    </div>

                                    {/* CHECK */}
                                    <div className="ml-auto text-green-500">

                                        <span className="material-symbols-outlined text-3xl">
                                            check_circle
                                        </span>

                                    </div>

                                </div>

                            ))}

                        </div>

                    ) : (

                        <p className="text-gray-500">
                            No hay equipos inscritos
                        </p>

                    )}

                </div>

            </div>
        </div>
    );
}