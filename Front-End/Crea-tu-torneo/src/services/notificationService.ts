let notifications = [
  { id:1, message:'Bienvenido a Tu Torneo', read:false }
];
export default {
  getAll: () => notifications,
  markRead: (id:number) => {
    notifications = notifications.map(n => n.id===id ? {...n, read:true}:n);
  }
};
