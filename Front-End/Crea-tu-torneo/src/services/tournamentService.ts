import { tournaments } from '../data/mockData';
export default {
  getAll: () => tournaments,
  create: (name:string, owner:string) => {
    const tournament = { id:Date.now(), name, owner, teamIds:[] };
    tournaments.push(tournament);
    return tournament;
  }
};