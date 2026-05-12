import { useState } from 'react';

interface Team {
    idTeam: number;
    name: string;
}

export default function ViewCreatedTeams() {

    // CAMBIAR A TRUE PARA MODO GESTION
    const [gestion] = useState(true);

    // PAGINACION
    const [currentPage, setCurrentPage] = useState(1);

    const itemsPerPage = 4;

    // EQUIPOS
    const [teams, setTeams] = useState<Team[]>([
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
        {
            idTeam: 4,
            name: 'Team React',
        },
        {
            idTeam: 5,
            name: 'Legends FC',
        },
    ]);

    // PAGINAR
    const getPaginatedTeams = () => {

        const startIndex =
            (currentPage - 1) * itemsPerPage;

        return teams.slice(
            startIndex,
            startIndex + itemsPerPage
        );
    };

    // TOTAL PAGINAS
    const getTotalPages = () => {

        return Math.ceil(
            teams.length / itemsPerPage
        );
    };

    // UNIRSE
    const joinTeam = (
        team: Team
    ) => {

        alert(
            `Unirse al equipo: ${team.name}`
        );
    };

    // EDITAR
    const editTeam = (
        team: Team
    ) => {

        alert(
            `Editar equipo: ${team.name}`
        );
    };

    // ELIMINAR
    const deleteTeam = (
        idTeam: number
    ) => {

        const updated =
            teams.filter(
                team =>
                    team.idTeam !== idTeam
            );

        setTeams(updated);
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
                        text-green-600
                        text-4xl
                    "
                >
                    groups
                </span>

                <h2
                    className="
                        text-4xl
                        font-bold
                        text-black
                    "
                >
                    Equipos creados
                </h2>

            </div>

            {/* LISTADO */}
            {teams.length > 0 ? (

                <>
                    <div className="flex flex-col gap-5">

                        {getPaginatedTeams().map((team) => (

                            <div
                                key={team.idTeam}
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
                                            from-green-600
                                            to-emerald-700
                                        "
                                    >

                                        <span
                                            className="
                                                material-symbols-outlined
                                                text-white
                                                text-3xl
                                            "
                                        >
                                            groups
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
                                        {team.name}
                                    </h3>

                                </div>

                                {/* BOTONES */}
                                <div className="flex gap-3">

                                    {!gestion && (

                                        <button
                                            onClick={() =>
                                                joinTeam(team)
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
                                                person_add
                                            </span>

                                        </button>

                                    )}

                                    {gestion && (

                                        <>

                                            {/* EDITAR */}
                                            <button
                                                onClick={() =>
                                                    editTeam(team)
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
                                                    edit
                                                </span>

                                            </button>

                                            {/* ELIMINAR */}
                                            <button
                                                onClick={() =>
                                                    deleteTeam(
                                                        team.idTeam
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
                    {teams.length > itemsPerPage && (

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
                        groups
                    </span>

                    <div className="text-2xl font-semibold">
                        No hay equipos aún.
                        ¡Crea tu primer equipo!
                    </div>

                </div>

            )}

        </div>
    );
}