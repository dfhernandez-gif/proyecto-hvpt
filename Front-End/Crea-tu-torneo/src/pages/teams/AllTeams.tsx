import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface Team {
    idTeam: number;
    name: string;
    owner: string;
    description: string;
    category: string;
}

export default function AllTeams() {

    const navigate = useNavigate();

    // DATOS DE EJEMPLO
    const [teams] = useState<Team[]>([
        {
            idTeam: 1,
            name: 'Real Madrid',
            owner: 'Daniela',
            description: 'Equipo profesional de fútbol.',
            category: 'Masculino',
        },
        {
            idTeam: 2,
            name: 'Barcelona',
            owner: 'Jesús',
            description: 'Equipo internacional.',
            category: 'Femenino',
        },
        {
            idTeam: 3,
            name: 'Team React',
            owner: 'Angie',
            description: 'Equipo universitario.',
            category: 'Mixto',
        },
        {
            idTeam: 4,
            name: 'Legends FC',
            owner: 'Ronald',
            description: 'Equipo competitivo.',
            category: 'Sub-17',
        },
        {
            idTeam: 5,
            name: 'Golden Players',
            owner: 'Stevan',
            description: 'Equipo amateur.',
            category: 'Masculino',
        },
    ]);

    // PAGINACION
    const [currentPage, setCurrentPage] = useState(1);

    const itemsPerPage = 3;

    // VOLVER
    const goToDashboard = () => {

        navigate('/teams');
    };

    // ABRIR DESCRIPCION
    const openDescription = (team: Team) => {

        alert(
            `Equipo: ${team.name}\n` +
            `Creado por: ${team.owner}\n` +
            `Categoría: ${team.category}`
        );
    };

    // PAGINACION
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
                    Volver a Equipos
                </p>

            </div>

            {/* TITULO */}
            <div
                className="
                    bg-white
                    rounded-3xl
                    p-6
                    shadow-2xl
                    mb-10
                "
            >

                <h2
                    className="
                        text-center
                        text-4xl
                        font-bold
                        text-black
                    "
                >
                    Ver Todos los Equipos
                </h2>

            </div>

            {/* SI HAY EQUIPOS */}
            {teams.length > 0 ? (

                <>
                    {/* GRID */}
                    <div
                        className="
                            grid
                            grid-cols-1
                            md:grid-cols-2
                            lg:grid-cols-3
                            gap-8
                        "
                    >

                        {getPaginatedTeams().map((team) => (

                            <div
                                key={team.idTeam}
                                className="
                                    bg-white
                                    rounded-3xl
                                    p-8
                                    shadow-2xl
                                    transition
                                    hover:-translate-y-2
                                    hover:shadow-[0px_0px_16px_20px_rgba(47,185,9,0.71)]
                                "
                            >

                                {/* TITULO CARD */}
                                <div className="flex items-center mb-6">

                                    {/* ICONO */}
                                    <div
                                        className="
                                            w-16
                                            h-16
                                            rounded-2xl
                                            flex
                                            items-center
                                            justify-center
                                            text-white
                                            bg-linear-to-r
                                            from-green-600
                                            to-emerald-700
                                        "
                                    >

                                        <span className="material-symbols-outlined text-4xl">
                                            groups
                                        </span>

                                    </div>

                                    <h3
                                        className="
                                            ml-5
                                            text-2xl
                                            font-bold
                                            text-black
                                        "
                                    >
                                        {team.name}
                                    </h3>

                                </div>

                                {/* TEXTO */}
                                <p className="text-gray-700 mb-6">
                                    Únete y participa con este equipo.
                                </p>

                                {/* BOTON */}
                                <button
                                    type="button"
                                    onClick={() => openDescription(team)}
                                    className="
                                        w-full
                                        bg-green-700
                                        hover:bg-blue-700
                                        text-white
                                        py-3
                                        rounded-xl
                                        flex
                                        items-center
                                        justify-center
                                        gap-2
                                        transition
                                    "
                                >

                                    <span className="material-symbols-outlined text-xl">
                                        person_add
                                    </span>

                                    Unirse

                                </button>

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
                        group
                    </span>

                    <div className="text-2xl font-semibold">
                        No hay equipos aún.
                    </div>

                </div>

            )}

        </div>
    );
}