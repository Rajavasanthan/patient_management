import axios from "axios";
import { TrendingUp } from "lucide-react";
import { useEffect, useState } from "react";
import.meta.env.VITE_API;
function Dashboard() {
  const [totalPatient, setTotalPatient] = useState(0);
  const getTotalPatient = async () => {
    try {
      const totalPatientResp = await axios.get(
        `${import.meta.env.VITE_API}/patient/total-patients`,{
          headers : {
            Authorization : window.localStorage.getItem(import.meta.env.VITE_LOCAL_STORAGE_KEY)
          }
        }
      );
      setTotalPatient(totalPatientResp.data.totalPatients);
    } catch (error) {
      console.log(error)
      alert("Something went wrong")
    }
  };
  useEffect(() => {
    getTotalPatient();
  }, []);
  return (
    <div className="p-8 space-y-6">
      <h1 className="text-2xl font-semibold text-gray-800">Dashboard</h1>
      <div className="relative p-6 bg-gradient-to-br from-white to-blue-50 border border-gray-200 rounded-xl w-48 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100 rounded-full opacity-20 -mr-16 -mt-16" />
        <div className="relative space-y-3">
          <div className="flex items-center space-x-2">
            <p className="text-gray-600 text-sm font-medium">Total Patients</p>
            <TrendingUp className="w-4 h-4 text-blue-500" />
          </div>
          <p className="text-4xl font-semibold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
            {
              totalPatient ? totalPatient : <div className="h-4 w-32 bg-gray-200 rounded animate-pulse" />
            }
          </p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
