interface TournamentData {
    name: string;
    owner: string;
    description: string;
    category: string;
}

interface Props {
    tournamentData: TournamentData;
    close: () => void;
    inscribirse: () => void;
}

export default function DescriptionTournament({
    tournamentData,
    close,
    inscribirse,
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
        to-blue-50
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
          text-blue-900
          border-b-2
          border-blue-200
          pb-4
        "
            >
                Descripción del Torneo
            </h2>

            {/* TORNEO */}
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

                <h3 className="text-blue-600 text-lg font-semibold mb-2">
                    Torneo:
                </h3>

                <label className="text-gray-700 text-base wrap-break-word">
                    {tournamentData.name}
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

                <h3 className="text-blue-600 text-lg font-semibold mb-2">
                    Creado Por:
                </h3>

                <label className="text-gray-700 text-base wrap-break-word">
                    {tournamentData.owner}
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

                <h3 className="text-blue-600 text-lg font-semibold mb-2">
                    Descripción:
                </h3>

                <label className="text-gray-700 text-base leading-7 wrap-break-word">
                    {tournamentData.description}
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

                <h3 className="text-blue-600 text-lg font-semibold mb-2">
                    Categoría:
                </h3>

                <label className="text-gray-700 text-base wrap-break-word">
                    {tournamentData.category}
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

                {/* INSCRIBIRSE */}
                <button
                    onClick={inscribirse}
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
                    Inscribirse
                </button>

            </div>

        </div>
    );
}