interface TeamData {
    name: string;
    owner: string;
    description: string;
    category: string;
}

interface Props {
    teamData: TeamData;
    close: () => void;
    unirse: () => void;
}

export default function DescriptionTeam({
    teamData,
    close,
    unirse,
}: Props) {

    return (

        <div
            className="
                max-w-4xl
                w-[90%]
                mx-auto
                my-5
                p-6
                bg-linear-to-br
                from-white
                to-green-50
                rounded-3xl
                flex
                flex-col
                gap-5
                shadow-2xl
            "
        >

            {/* TITULO */}
            <h2
                className="
                    text-center
                    text-4xl
                    font-bold
                    text-green-900
                    border-b-2
                    border-green-200
                    pb-4
                "
            >
                Descripción del Equipo
            </h2>

            {/* EQUIPO */}
            <div
                className="
                    bg-white
                    border
                    border-gray-200
                    p-5
                    rounded-2xl
                    shadow-md
                "
            >

                <h3 className="text-green-600 text-lg font-semibold mb-2">
                    Equipo:
                </h3>

                <label className="text-gray-700 text-base break-words">
                    {teamData.name}
                </label>

            </div>

            {/* CREADO POR */}
            <div
                className="
                    bg-white
                    border
                    border-gray-200
                    p-5
                    rounded-2xl
                    shadow-md
                "
            >

                <h3 className="text-green-600 text-lg font-semibold mb-2">
                    Creado Por:
                </h3>

                <label className="text-gray-700 text-base break-words">
                    {teamData.owner}
                </label>

            </div>

            {/* DESCRIPCION */}
            <div
                className="
                    bg-white
                    border
                    border-gray-200
                    p-5
                    rounded-2xl
                    shadow-md
                    min-h-30
                "
            >

                <h3 className="text-green-600 text-lg font-semibold mb-2">
                    Descripción:
                </h3>

                <label className="text-gray-700 text-base leading-7 break-words">
                    {teamData.description}
                </label>

            </div>

            {/* CATEGORIA */}
            <div
                className="
                    bg-white
                    border
                    border-gray-200
                    p-5
                    rounded-2xl
                    shadow-md
                "
            >

                <h3 className="text-green-600 text-lg font-semibold mb-2">
                    Categoría:
                </h3>

                <label className="text-gray-700 text-base break-words">
                    {teamData.category}
                </label>

            </div>

            {/* BOTONES */}
            <div
                className="
                    flex
                    flex-col
                    md:flex-row
                    gap-4
                    mt-4
                "
            >

                {/* CERRAR */}
                <button
                    onClick={close}
                    className="
                        flex-1
                        bg-gray-400
                        hover:bg-gray-500
                        text-white
                        font-bold
                        py-4
                        rounded-2xl
                        transition
                    "
                >
                    Cerrar
                </button>

                {/* UNIRSE */}
                <button
                    onClick={unirse}
                    className="
                        flex-1
                        bg-green-700
                        hover:bg-blue-700
                        text-white
                        font-bold
                        py-4
                        rounded-2xl
                        transition
                    "
                >
                    Unirse
                </button>

            </div>

        </div>
    );
}