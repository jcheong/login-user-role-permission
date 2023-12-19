import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import ProtectedRoute from './components/protectedRoutes';
import Home from './pages/home';
import Login from  './pages/login';
import Settings from './pages/settings';
import Clients from './pages/clients';
import Users from './pages/users';
import Roles from './pages/roles';
import { useState } from 'react';

const App = () => {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <Routes>        
        <Route path="/" element={<Home />}>        
          <Route path="/clients" element={<Clients />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/users" element={<Users />} />
          <Route path="/roles" element={<Roles />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;