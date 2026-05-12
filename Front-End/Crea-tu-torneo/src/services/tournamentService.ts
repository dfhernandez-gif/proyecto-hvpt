import { tournaments } from '../data/mockData';

export default {

  // OBTENER TODOS
  getAll: () => {
    return tournaments;
  },

  // CREAR
  create: (
    name: string,
    owner: string
  ) => {

    const tournament = {
      id: Date.now(),
      name,
      owner,
      teamIds: [],
    };

    tournaments.push(tournament);

    return tournament;
  },

  // ELIMINAR
  delete: (id: number) => {

    const index = tournaments.findIndex(
      t => t.id === id
    );

    if (index !== -1) {
      tournaments.splice(index, 1);
    }
  },
};