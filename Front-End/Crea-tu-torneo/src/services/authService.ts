import { users } from '../data/mockData';


class AuthService {
  login(email:string, password:string) {
    const user = users.find(u => u.email === email && u.password === 'password');
    if(user) localStorage.setItem('user', JSON.stringify(user));
    return user || null;
  }
  register(name:string, email:string, password:string) {
    const newUser = { id: Date.now(), name, email, password, teamIds:[] };
    users.push(newUser);
    return newUser;
  }
  currentUser() {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  }
  logout() { localStorage.removeItem('user'); }
}
export default new AuthService();
