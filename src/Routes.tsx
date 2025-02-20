import {
  BrowserRouter as Router,
  Route,
  Routes as RouterRoutes,
} from "react-router";
import MetricsPage from "./pages/MetricsPage";
import Dashboard from "./pages/Dashboard";

function Routes() {
  return (
    <Router>
      <RouterRoutes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/metrics" element={<MetricsPage />} />
      </RouterRoutes>
    </Router>
  );
}

export default Routes;
