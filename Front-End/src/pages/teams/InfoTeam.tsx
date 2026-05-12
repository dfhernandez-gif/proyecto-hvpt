import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface Player {
    idPlayer: number;
    name: string;
}

interface Team {
    idTeam: number;
    name: string;
    category: string;
    status: string;
    players: Player[];
}

export default function InfoTeam() {

    const navigate = useNavigate();

    // DATOS DE EJEMPLO
    const [team, setTeam] = useState<Team>({
        idTeam: 1,
        name: 'Team Legends',
        category: 'Masculino',
        status: 'Pendiente',
        players: [
            {
                idPlayer: 1,
                name: 'Daniela',
            },
            {
                idPlayer: 2,
                name: 'Jesús',
            },
            {
                idPlayer: 3,
                name: 'Angie',
            },
        ],
    });

    // VOLVER
    const goToTeams = () => {

        navigate('/teams');
    };

    // VALIDAR SI PUEDE ACTIVARSE
    const canActivate = () => {

        return team.players.length >= 2;
    };

    // ACTIVAR EQUIPO
    const activateTeam = () => {

        if (!canActivate()) return;

        setTeam({
            ...team,
            status: 'Activo',
        });

        alert('Equipo activado correctamente');
    };

    return (

        <div className="min-h-screen bg-[#b7d8b7] p-6">

            {/* VOLVER */}
            <div
                onClick={goToTeams}
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
                    Volver a los equipos
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
                {team && (

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
                                        from-green-500
                                        to-emerald-700
                                        text-white
                                    "
                                >

                                    <span className="material-symbols-outlined text-4xl">
                                        groups
                                    </span>

                                </div>

                                {/* INFO */}
                                <div>

                                    <h3 className="text-3xl font-bold text-black">
                                        {team.name}
                                    </h3>

                                    <span
                                        className="
                                            inline-block
                                            mt-2
                                            bg-green-100
                                            text-green-700
                                            px-4
                                            py-1
                                            rounded-xl
                                            text-sm
                                            font-semibold
                                        "
                                    >
                                        {team.status}
                                    </span>

                                </div>

                            </div>

                            {/* BOTON */}
                            <button
                                disabled={!canActivate()}
                                onClick={activateTeam}
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
                                Activar Equipo
                            </button>

                        </div>

                        {/* STATS */}
                        <div className="flex gap-4 mt-8">

                            <div
                                className="
                                    flex-1
                                    bg-green-100
                                    text-green-800
                                    rounded-2xl
                                    p-6
                                    text-center
                                "
                            >

                                <h3 className="text-4xl font-bold">
                                    {team.players.length}
                                </h3>

                                <p className="mt-2 text-lg">
                                    Jugadores
                                </p>

                            </div>

                        </div>

                    </div>

                )}

                {/* JUGADORES */}
                <div
                    className="
                        bg-white
                        rounded-3xl
                        p-8
                        shadow-2xl
                    "
                >

                    <h3 className="text-3xl font-bold text-black mb-6">
                        Jugadores del Equipo
                    </h3>

                    {team.players.length > 0 ? (

                        <div
                            className="
                                flex
                                flex-wrap
                                gap-5
                            "
                        >

                            {team.players.map((player) => (

                                <div
                                    key={player.idPlayer}
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
                                            person
                                        </span>

                                    </div>

                                    {/* INFO */}
                                    <div>

                                        <p className="font-bold text-black text-lg">
                                            {player.name}
                                        </p>

                                        <small className="text-gray-500">
                                            Jugador inscrito
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
                            No hay jugadores inscritos
                        </p>

                    )}

                </div>

            </div>

        </div>
    );
}