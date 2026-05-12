import { useNavigate } from 'react-router-dom';

export default function Teams() {

    const navigate = useNavigate();

    // VOLVER
    const goToDashboard = () => {

        navigate('/dashboard');
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
                    Volver al Dashboard
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
                    Gestión de Equipos
                </h2>

            </div>

            {/* GRID */}
            <div
                className="
                    grid
                    grid-cols-1
                    md:grid-cols-2
                    gap-8
                "
            >

                {/* CREAR EQUIPO */}
                <div
                    onClick={() =>
                        navigate('/create-team')
                    }
                    className="
                        bg-white
                        rounded-3xl
                        p-8
                        shadow-2xl
                        cursor-pointer
                        transition
                        hover:-translate-y-2
                        hover:shadow-[0px_0px_16px_10px_rgba(34,197,94,0.5)]
                    "
                >

                    {/* ICONO */}
                    <div
                        className="
                            w-20
                            h-20
                            rounded-3xl
                            flex
                            items-center
                            justify-center
                            bg-linear-to-br
                            from-green-500
                            to-emerald-700
                            text-white
                            mx-auto
                            mb-6
                        "
                    >

                        <span className="material-symbols-outlined text-5xl">
                            group_add
                        </span>

                    </div>

                    {/* TITULO */}
                    <h3
                        className="
                            text-3xl
                            font-bold
                            text-center
                            text-black
                            mb-4
                        "
                    >
                        Crear Equipo
                    </h3>

                    {/* TEXTO */}
                    <p
                        className="
                            text-center
                            text-gray-600
                            text-lg
                        "
                    >
                        Registra un nuevo equipo y comienza a competir.
                    </p>

                </div>

                {/* VER EQUIPOS */}
                <div
                    onClick={() =>
                        navigate('/all-teams')
                    }
                    className="
                        bg-white
                        rounded-3xl
                        p-8
                        shadow-2xl
                        cursor-pointer
                        transition
                        hover:-translate-y-2
                        hover:shadow-[0px_0px_16px_10px_rgba(59,130,246,0.5)]
                    "
                >

                    {/* ICONO */}
                    <div
                        className="
                            w-20
                            h-20
                            rounded-3xl
                            flex
                            items-center
                            justify-center
                            bg-linear-to-br
                            from-blue-500
                            to-indigo-700
                            text-white
                            mx-auto
                            mb-6
                        "
                    >

                        <span className="material-symbols-outlined text-5xl">
                            groups
                        </span>

                    </div>

                    {/* TITULO */}
                    <h3
                        className="
                            text-3xl
                            font-bold
                            text-center
                            text-black
                            mb-4
                        "
                    >
                        Ver Equipos
                    </h3>

                    {/* TEXTO */}
                    <p
                        className="
                            text-center
                            text-gray-600
                            text-lg
                        "
                    >
                        Consulta todos los equipos creados y disponibles.
                    </p>

                </div>

                {/* MIS EQUIPOS */}
                <div
                    onClick={() =>
                        navigate('/view-created-teams')
                    }
                    className="
                        bg-white
                        rounded-3xl
                        p-8
                        shadow-2xl
                        cursor-pointer
                        transition
                        hover:-translate-y-2
                        hover:shadow-[0px_0px_16px_10px_rgba(168,85,247,0.5)]
                    "
                >

                    {/* ICONO */}
                    <div
                        className="
                            w-20
                            h-20
                            rounded-3xl
                            flex
                            items-center
                            justify-center
                            bg-linear-to-br
                            from-purple-500
                            to-fuchsia-700
                            text-white
                            mx-auto
                            mb-6
                        "
                    >

                        <span className="material-symbols-outlined text-5xl">
                            shield
                        </span>

                    </div>

                    {/* TITULO */}
                    <h3
                        className="
                            text-3xl
                            font-bold
                            text-center
                            text-black
                            mb-4
                        "
                    >
                        Mis Equipos
                    </h3>

                    {/* TEXTO */}
                    <p
                        className="
                            text-center
                            text-gray-600
                            text-lg
                        "
                    >
                        Administra los equipos que has creado.
                    </p>

                </div>

                {/* INFORMACION */}
                <div
                    onClick={() =>
                        navigate('/info-team')
                    }
                    className="
                        bg-white
                        rounded-3xl
                        p-8
                        shadow-2xl
                        cursor-pointer
                        transition
                        hover:-translate-y-2
                        hover:shadow-[0px_0px_16px_10px_rgba(249,115,22,0.5)]
                    "
                >

                    {/* ICONO */}
                    <div
                        className="
                            w-20
                            h-20
                            rounded-3xl
                            flex
                            items-center
                            justify-center
                            bg-linear-to-br
                            from-orange-500
                            to-red-600
                            text-white
                            mx-auto
                            mb-6
                        "
                    >

                        <span className="material-symbols-outlined text-5xl">
                            info
                        </span>

                    </div>

                    {/* TITULO */}
                    <h3
                        className="
                            text-3xl
                            font-bold
                            text-center
                            text-black
                            mb-4
                        "
                    >
                        Información
                    </h3>

                    {/* TEXTO */}
                    <p
                        className="
                            text-center
                            text-gray-600
                            text-lg
                        "
                    >
                        Consulta detalles y jugadores del equipo.
                    </p>

                </div>

            </div>

        </div>
    );
}