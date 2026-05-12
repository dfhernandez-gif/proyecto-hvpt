import { useState } from 'react';

interface TournamentFormData {
    name: string;
    description: string;
    categoryId: number;
}

interface Category {
    id: number;
    name: string;
}

export default function CreateTournament() {

    // CATEGORIAS
    const catalogoTeam: Category[] = [
        { id: 1, name: 'Masculino' },
        { id: 2, name: 'Femenino' },
        { id: 3, name: 'Mixto' },
        { id: 4, name: 'Sub-17' },
    ];

    // ESTADO FORMULARIO
    const [formData, setFormData] = useState<TournamentFormData>({
        name: '',
        description: '',
        categoryId: 1,
    });

    // VALIDACION
    const [errors, setErrors] = useState({
        name: false,
    });

    // MANEJAR INPUTS
    const handleChange = (
        e: React.ChangeEvent<
            HTMLInputElement |
            HTMLTextAreaElement |
            HTMLSelectElement
        >
    ) => {

        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: name === 'categoryId'
                ? Number(value)
                : value,
        });
    };

    // CREAR TORNEO
    const crearTorneo = (e: React.FormEvent) => {

        e.preventDefault();

        // VALIDACION
        if (!formData.name.trim()) {

            setErrors({
                name: true,
            });

            return;
        }

        setErrors({
            name: false,
        });

        // AQUI PUEDES ENVIAR AL BACKEND
        console.log('TORNEO CREADO:', formData);

        alert('Torneo creado correctamente');

        // LIMPIAR FORM
        setFormData({
            name: '',
            description: '',
            categoryId: 1,
        });
    };

    return (
        <div className="min-h-screen bg-[#b7d8b7] flex justify-center items-center p-6">

            <div
                className="
          w-full
          max-w-2xl
          bg-white
          p-10
          rounded-3xl
          shadow-2xl
        "
            >

                {/* ICONO */}
                <div className="text-center mb-4">

                    <div className="text-blue-600">

                        <span className="material-symbols-outlined text-7xl">
                            trophy
                        </span>

                    </div>

                </div>

                {/* TITULO */}
                <h2 className="text-center text-4xl font-semibold text-black mb-2">
                    Crear Nuevo Torneo
                </h2>

                <p className="text-center text-gray-600 mb-8">
                    Configura tu competencia de fútbol
                </p>

                {/* FORMULARIO */}
                <form
                    onSubmit={crearTorneo}
                    className="flex flex-col gap-5"
                >

                    {/* NOMBRE */}
                    <div>

                        <label className="block mb-2 font-medium text-black">
                            Nombre del Torneo
                        </label>

                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Ej: Copa de Campeones 2026"
                            className="
                w-full
                border
                border-gray-300
                rounded-xl
                p-4
                outline-none
                focus:border-blue-600
                text-black
              "
                        />

                        {errors.name && (
                            <small className="text-red-500 mt-1 block">
                                El nombre del torneo es obligatorio.
                            </small>
                        )}

                    </div>

                    {/* DESCRIPCION */}
                    <div>

                        <label className="block mb-2 font-medium text-black">
                            Descripción del Torneo
                        </label>

                        <textarea
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            placeholder="Ej: Torneo femenino mayores de 18 años..."
                            className="
                w-full
                border
                border-gray-300
                rounded-xl
                p-4
                outline-none
                focus:border-blue-600
                resize-none
                h-28
                text-black
              "
                        />

                    </div>

                    {/* CATEGORIA */}
                    <div>

                        <label className="block mb-2 font-medium text-black">
                            Categoría
                        </label>

                        <select
                            name="categoryId"
                            value={formData.categoryId}
                            onChange={handleChange}
                            className="
                w-full
                border
                border-gray-300
                rounded-xl
                p-4
                outline-none
                focus:border-blue-600
                text-black
              "
                        >

                            {catalogoTeam.map((tipo) => (

                                <option
                                    key={tipo.id}
                                    value={tipo.id}
                                >
                                    {tipo.name}
                                </option>

                            ))}

                        </select>

                    </div>

                    {/* BOTON */}
                    <button
                        type="submit"
                        className="
              w-full
              mt-4
              bg-blue-600
              hover:bg-blue-700
              text-white
              font-semibold
              py-4
              rounded-xl
              transition
            "
                    >
                        Crear Torneo
                    </button>

                </form>

            </div>
        </div>
    );
}