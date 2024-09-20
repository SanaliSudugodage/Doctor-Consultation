import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DoctorLogin from './components/Doctor/DoctorLogin';
import DoctorSignUp from './components/Doctor/DoctorSignUp';
import PatientsPage from './components/Doctor/PatientsPage';
import MedicalHistoryPage from './components/Doctor/MedicalHistoryPage';
import DoctorProfilePage from './components/Doctor/DoctorProfilePage';
import PrescriptionForm from './components/Doctor/PrescriptionForm';
import Prescriptions from './components/Doctor/Prescriptions';
import DoctorEditPage from './components/Doctor/DoctorEditPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/DoctorLogin" element={<DoctorLogin />} />
        <Route path="/DoctorSignUp" element={<DoctorSignUp />} />
        <Route path="/DoctorProfilePage" element={<DoctorProfilePage />} />
        <Route path="/DoctorEdit" element={<DoctorEditPage />} />
        <Route path="/PatientsPage" element={<PatientsPage />} />
        <Route path="/MedicalHistoryPage" element={<MedicalHistoryPage />} />
        <Route path="/PrescriptionForm" element={<PrescriptionForm />} />
        <Route path="/Prescriptions" element={<Prescriptions />} />
      </Routes>
    </Router>
  );
}

export default App;
