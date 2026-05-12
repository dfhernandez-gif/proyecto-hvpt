// src/App.tsx

import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

// AUTH
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';

// DASHBOARD
import Dashboard from './pages/dashboard/Dashboard';

// TEAMS
import Teams from './pages/teams/Teams';
import CreateTeam from './pages/teams/CreateTeam';
import AllTeams from './pages/teams/AllTeams';
import InfoTeam from './pages/teams/InfoTeam';
import ViewCreatedTeams from './pages/teams/ViewCreatedTeam';

// TOURNAMENTS
import Tournaments from './pages/tournaments/Tournaments';
import CreateTournament from './pages/tournaments/CreateTournament';
import AllTournament from './pages/tournaments/AllTournament';
import InfoTournament from './pages/tournaments/InfoTournament';
import ViewCreatedTournament from './pages/tournaments/ViewCreatedTournament';
import Notifications from './pages/notifications/Notifications';
import Profile from './pages/profile/Profile';
import ProtectedRoute from './components/common/ProtectedRoute';

export default function App() {

  return (

    <BrowserRouter
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >

      <Routes>

        {/* AUTH */}
        <Route
          path="/"
          element={<Login />}
        />

        <Route
          path="/register"
          element={<Register />}
        />

        {/* DASHBOARD */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        {/* ========================= */}
        {/* TEAMS */}
        {/* ========================= */}

        <Route
          path="/teams"
          element={
            <ProtectedRoute>
              <Teams />
            </ProtectedRoute>
          }
        />

        <Route
          path="/create-team"
          element={
            <ProtectedRoute>
              <CreateTeam />
            </ProtectedRoute>
          }
        />

        <Route
          path="/all-teams"
          element={
            <ProtectedRoute>
              <AllTeams />
            </ProtectedRoute>
          }
        />

        <Route
          path="/info-team"
          element={
            <ProtectedRoute>
              <InfoTeam />
            </ProtectedRoute>
          }
        />

        <Route
          path="/view-created-teams"
          element={
            <ProtectedRoute>
              <ViewCreatedTeams />
            </ProtectedRoute>
          }
        />

        {/* ========================= */}
        {/* TOURNAMENTS */}
        {/* ========================= */}

        <Route
          path="/tournaments"
          element={
            <ProtectedRoute>
              <Tournaments />
            </ProtectedRoute>
          }
        />

        <Route
          path="/create-tournament"
          element={
            <ProtectedRoute>
              <CreateTournament />
            </ProtectedRoute>
          }
        />

        <Route
          path="/all-tournaments"
          element={
            <ProtectedRoute>
              <AllTournament />
            </ProtectedRoute>
          }
        />

        <Route
          path="/info-tournament"
          element={
            <ProtectedRoute>
              <InfoTournament />
            </ProtectedRoute>
          }
        />

        <Route
          path="/view-created"
          element={
            <ProtectedRoute>
              <ViewCreatedTournament />
            </ProtectedRoute>
          }
        />

        {/* ========================= */}
        {/* NOTIFICATIONS */}
        {/* ========================= */}

        <Route
          path="/notifications"
          element={
            <ProtectedRoute>
              <Notifications />
            </ProtectedRoute>
          }
        />

        {/* ========================= */}
        {/* PROFILE */}
        {/* ========================= */}

        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />

      </Routes>

    </BrowserRouter>
  );
}