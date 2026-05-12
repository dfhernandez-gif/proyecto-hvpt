import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface TeamFormData {
    name: string;
    description: string;
    categoryId: number;
}

interface Category {
    id: number;
    name: string;
}

export default function CreateTeam() {

    const navigate = useNavigate();

    // CATEGORIAS
    const catalogoTeam: Category[] = [
        { id: 1, name: 'Masculino' },
        { id: 2, name: 'Femenino' },
        { id: 3, name: 'Mixto' },
        { id: 4, name: 'Sub-17' },
    ];

    // ESTADO FORMULARIO
    const [formData, setFormData] = useState<TeamFormData>({
        name: '',
        description: '',
        categoryId: 1,
    });

    // VALIDACION
    const [errors, setErrors] = useState({
        name: false,
    });

    // VOLVER
    const goToTeams = () => {

        navigate('/teams');
    };

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

    // CREAR EQUIPO
    const crearEquipo = (e: React.FormEvent) => {

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
        console.log('EQUIPO CREADO:', formData);

        alert('Equipo creado correctamente');

        // LIMPIAR FORM
        setFormData({
            name: '',
            description: '',
            categoryId: 1,
        });
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
                    Volver a Equipos
                </p>

            </div>

            {/* CONTENEDOR */}
            <div className="flex justify-center items-center">

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

                        <div className="text-green-600">

                            <span className="material-symbols-outlined text-7xl">
                                groups
                            </span>

                        </div>

                    </div>

                    {/* TITULO */}
                    <h2 className="text-center text-4xl font-semibold text-black mb-2">
                        Crear Nuevo Equipo
                    </h2>

                    <p className="text-center text-gray-600 mb-8">
                        Configura tu nuevo equipo
                    </p>

                    {/* FORMULARIO */}
                    <form
                        onSubmit={crearEquipo}
                        className="flex flex-col gap-5"
                    >

                        {/* NOMBRE */}
                        <div>

                            <label className="block mb-2 font-medium text-black">
                                Nombre del Equipo
                            </label>

                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Ej: Team Legends"
                                className="
                                    w-full
                                    border
                                    border-gray-300
                                    rounded-xl
                                    p-4
                                    outline-none
                                    focus:border-green-600
                                    text-black
                                "
                            />

                            {errors.name && (

                                <small className="text-red-500 mt-1 block">
                                    El nombre del equipo es obligatorio.
                                </small>

                            )}

                        </div>

                        {/* DESCRIPCION */}
                        <div>

                            <label className="block mb-2 font-medium text-black">
                                Descripción del Equipo
                            </label>

                            <textarea
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                                placeholder="Ej: Equipo competitivo universitario..."
                                className="
                                    w-full
                                    border
                                    border-gray-300
                                    rounded-xl
                                    p-4
                                    outline-none
                                    focus:border-green-600
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
                                    focus:border-green-600
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
                                bg-green-600
                                hover:bg-green-700
                                text-white
                                font-semibold
                                py-4
                                rounded-xl
                                transition
                            "
                        >
                            Crear Equipo
                        </button>

                    </form>

                </div>

            </div>

        </div>
    );
}