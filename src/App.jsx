import { Route, Routes } from "react-router";
import "./App.css";
import Login from "./Login";
import Dashboard from "./Dashboard";
import DashboardLayout from "./DashboardLayout";
import Patients from "./Patients";
import CreatePatient from "./CreatePatient";
import SearchPatient from "./SearchPatient";
import PatientView from "./PatientView";
import CreateHistory from "./CreateHistory";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route path="" element={<Dashboard />} />
        <Route path="patients" element={<Patients />} />
        <Route path="create-patient" element={<CreatePatient />} />
        <Route path="search-patient" element={<SearchPatient />} />
        <Route path="patient/:id" element={<PatientView />} />
        <Route path="patient/:id/create-history" element={<CreateHistory />} />
      </Route>
    </Routes>
  );
}

export default App;
