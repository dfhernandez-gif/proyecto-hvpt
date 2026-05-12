import type { User } from '../models/User';
import type { Team } from '../models/Team';
import type { Tournament } from '../models/Tournament';

export const users: User[] = [
  { id:1, name:'Admin', email:'admin@torneo.com', password:'123456', teamIds:[1] }
];

export const teams: Team[] = [
  { id:1, name:'Guerreros FC', owner:'Admin', playerIds:[1,2] }
];

export const tournaments: Tournament[] = [
  { id:1, name:'Copa Elite', owner:'Admin', teamIds:[1] }
];

