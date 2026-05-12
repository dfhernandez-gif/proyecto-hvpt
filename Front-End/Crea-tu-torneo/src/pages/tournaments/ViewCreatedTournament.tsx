import { useState } from 'react';

interface Tournament {
    idTournament: number;
    name: string;
}

export default function ViewCreatedTournament() {

    // CAMBIAR A TRUE PARA MODO GESTION
    const [gestion] = useState(true);

    // PAGINACION
    const [currentPage, setCurrentPage] = useState(1);

    const itemsPerPage = 4;

    // TORNEOS
    const [tournaments, setTournaments] = useState<Tournament[]>([
        {
            idTournament: 1,
            name: 'Champions League',
        },
        {
            idTournament: 2,
            name: 'Copa Libertadores',
        },
        {
            idTournament: 3,
            name: 'Liga Colombiana',
        },
        {
            idTournament: 4,
            name: 'Mundial Sub-17',
        },
        {
            idTournament: 5,
            name: 'Super Cup',
        },
    ]);

    // PAGINAR
    const getPaginatedTeams = () => {

        const startIndex =
            (currentPage - 1) * itemsPerPage;

        return tournaments.slice(
            startIndex,
            startIndex + itemsPerPage
        );
    };

    // TOTAL PAGINAS
    const getTotalPages = () => {

        return Math.ceil(
            tournaments.length / itemsPerPage
        );
    };

    // AGREGAR EQUIPO
    const addTeamTournament = (
        tournament: Tournament
    ) => {

        alert(
            `Inscribirse al torneo: ${tournament.name}`
        );
    };

    // EDITAR
    const editTournament = (
        tournament: Tournament
    ) => {

        alert(
            `Editar torneo: ${tournament.name}`
        );
    };

    // ELIMINAR
    const deleteTournament = (
        idTournament: number
    ) => {

        const updated =
            tournaments.filter(
                tournament =>
                    tournament.idTournament !== idTournament
            );

        setTournaments(updated);
    };

    return (
        <div
            className="
        min-h-screen
        bg-linear-to-r
        from-[#cfd9e6]
        to-[#e2e8f0]
        p-6
      "
        >

            {/* TITULO */}
            <div
                className="
          flex
          items-center
          justify-center
          gap-3
          mb-8
        "
            >

                <span
                    className="
            material-symbols-outlined
            text-blue-600
            text-4xl
          "
                >
                    assignment
                </span>

                <h2
                    className="
            text-4xl
            font-bold
            text-black
          "
                >
                    Torneos creados
                </h2>

            </div>

            {/* LISTADO */}
            {tournaments.length > 0 ? (

                <>
                    <div className="flex flex-col gap-5">

                        {getPaginatedTeams().map((tournament) => (

                            <div
                                key={tournament.idTournament}
                                className="
                  flex
                  justify-between
                  items-center
                  bg-white
                  rounded-3xl
                  p-5
                  shadow-xl
                  transition
                  hover:-translate-y-1
                  hover:shadow-2xl
                "
                            >

                                {/* INFO */}
                                <div className="flex items-center gap-4">

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
                      from-blue-600
                      to-purple-700
                    "
                                    >

                                        <span
                                            className="
                        material-symbols-outlined
                        text-white
                        text-3xl
                      "
                                        >
                                            trophy
                                        </span>

                                    </div>

                                    {/* NOMBRE */}
                                    <h3
                                        className="
                      text-2xl
                      font-semibold
                      text-black
                    "
                                    >
                                        {tournament.name}
                                    </h3>

                                </div>

                                {/* BOTONES */}
                                <div className="flex gap-3">

                                    {!gestion && (

                                        <button
                                            onClick={() =>
                                                addTeamTournament(tournament)
                                            }
                                            className="
                        w-11
                        h-11
                        rounded-xl
                        bg-gray-100
                        hover:bg-blue-100
                        flex
                        items-center
                        justify-center
                        transition
                      "
                                        >

                                            <span
                                                className="
                          material-symbols-outlined
                          text-blue-600
                        "
                                            >
                                                recent_patient
                                            </span>

                                        </button>

                                    )}

                                    {gestion && (

                                        <>
                                            {/* EDITAR */}
                                            <button
                                                onClick={() =>
                                                    editTournament(tournament)
                                                }
                                                className="
                          w-11
                          h-11
                          rounded-xl
                          bg-gray-100
                          hover:bg-white
                          hover:shadow-[0px_0px_20px_10px_#6b21a8]
                          flex
                          items-center
                          justify-center
                          transition
                        "
                                            >

                                                <span
                                                    className="
                            material-symbols-outlined
                            text-purple-700
                          "
                                                >
                                                    stadia_controller
                                                </span>

                                            </button>

                                            {/* ELIMINAR */}
                                            <button
                                                onClick={() =>
                                                    deleteTournament(
                                                        tournament.idTournament
                                                    )
                                                }
                                                className="
                          w-11
                          h-11
                          rounded-xl
                          bg-gray-100
                          hover:bg-white
                          hover:shadow-[0px_0px_20px_10px_red]
                          flex
                          items-center
                          justify-center
                          transition
                        "
                                            >

                                                <span
                                                    className="
                            material-symbols-outlined
                            text-red-600
                          "
                                                >
                                                    delete
                                                </span>

                                            </button>
                                        </>

                                    )}

                                </div>

                            </div>

                        ))}

                    </div>

                    {/* PAGINADOR */}
                    {tournaments.length > itemsPerPage && (

                        <div
                            className="
                flex
                justify-center
                gap-4
                mt-12
              "
                        >

                            {/* ANTERIOR */}
                            <button
                                onClick={() =>
                                    setCurrentPage(currentPage - 1)
                                }
                                disabled={currentPage === 1}
                                className="
                  bg-blue-600
                  hover:bg-blue-700
                  text-white
                  px-5
                  py-3
                  rounded-xl
                  disabled:opacity-50
                "
                            >

                                <span className="material-symbols-outlined">
                                    arrow_circle_left
                                </span>

                            </button>

                            {/* SIGUIENTE */}
                            <button
                                onClick={() =>
                                    setCurrentPage(currentPage + 1)
                                }
                                disabled={
                                    currentPage === getTotalPages()
                                }
                                className="
                  bg-blue-600
                  hover:bg-blue-700
                  text-white
                  px-5
                  py-3
                  rounded-xl
                  disabled:opacity-50
                "
                            >

                                <span className="material-symbols-outlined">
                                    arrow_circle_right
                                </span>

                            </button>

                        </div>

                    )}

                </>

            ) : (

                // VACIO
                <div
                    className="
            flex
            flex-col
            items-center
            text-center
            p-10
            border-2
            border-dashed
            border-black
            rounded-2xl
            text-black
            bg-white
          "
                >

                    <span className="material-symbols-outlined text-6xl mb-4">
                        group
                    </span>

                    <div className="text-2xl font-semibold">
                        No hay torneos aún.
                        ¡Crea tu primer torneo!
                    </div>

                </div>

            )}

        </div>
    );
}