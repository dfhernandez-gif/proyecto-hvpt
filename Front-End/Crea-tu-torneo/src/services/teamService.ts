import { teams } from '../data/mockData';
export default {
  getAll: () => teams,
  create: (name:string, owner:string) => {
    const team = { id:Date.now(), name, owner, playerIds:[] };
    teams.push(team);
    return team;
  }
};
