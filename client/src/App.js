import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import AuthHelperMethods from './components/authHelperMethods';
import withAuth from './components/withAuth';
import ProtectedRoute from './components/protectedRoutes';
import Home from './pages/home';
import Login from  './pages/login';
import Settings from './pages/settings';
import Clients from './pages/clients';
import Users from './pages/users';
import { useState } from 'react';

const App = () => {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<ProtectedRoute user={user} />}>
          <Route path="/" element={<Home />}>
            <Route path="/clients" element={<Clients />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/users" element={<Users />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;