// src/App.tsx

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Dashboard from './pages/dashboard/Dashboard';
import Teams from './pages/teams/Teams';
import Tournaments from './pages/tournaments/Tournaments';
import Notifications from './pages/notifications/Notifications';
import Profile from './pages/profile/Profile';
import ProtectedRoute from './components/common/ProtectedRoute';
import CreateTournament from './pages/tournaments/CreateTournament';
import AllTournament from './pages/tournaments/AllTournament';
import InfoTournament from './pages/tournaments/InfoTournament';
import ViewCreatedTournament from './pages/tournaments/ViewCreatedTournament';

export default function App() {
  return (
    <BrowserRouter
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true
      }}
    >
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/teams"
          element={
            <ProtectedRoute>
              <Teams />
            </ProtectedRoute>
          }
        />

        <Route
          path="/tournaments"
          element={
            <ProtectedRoute>
              <Tournaments />
            </ProtectedRoute>
          }
        />

        <Route
          path="/notifications"
          element={
            <ProtectedRoute>
              <Notifications />
            </ProtectedRoute>
          }
        />

        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />


        <Route
          path="/create-tournament"
          element={<CreateTournament />}
        />

        <Route
          path="/all-tournaments"
          element={<AllTournament />}
        />

        <Route
          path="/info-tournament"
          element={<InfoTournament />}
        />

        <Route
          path="/view-created"
          element={<ViewCreatedTournament />}
        />
      </Routes>
    </BrowserRouter>
  );
}