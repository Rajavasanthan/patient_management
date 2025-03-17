import axios from "axios";
import { Eye } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router";

function SearchPatient() {
  const [patientList, setPatient] = useState([]);
  const [patientName, setPatientName] = useState("");
  const [patientPhoneNumber, setPatientPhoneNumber] = useState("");
  const [patientPuid, setPatientPuid] = useState("");
  const [searchDate, setSearchDate] = useState("");

  const baseUrl = `${import.meta.env.VITE_API}/patient/search_patient`;

  // Function to build URL with non-empty state variables
  const buildUrl = () => {
    const params = {
      patient_name: patientName,
      patient_phone_number: patientPhoneNumber,
      patient_puid: patientPuid,
      visit_date: searchDate,
    };

    const queryParams = Object.entries(params)
      .filter(([_, value]) => value !== "")
      .map(
        ([key, value]) =>
          `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
      )
      .join("&");

    return queryParams ? `${baseUrl}?${queryParams}` : baseUrl;
  };

  const searchPatient = async () => {
    try {
      let url = buildUrl();
      const allPateintsResp = await axios.get(url, {
        headers: {
          Authorization: window.localStorage.getItem(
            import.meta.env.VITE_LOCAL_STORAGE_KEY
          ),
        },
      });
      setPatient(allPateintsResp.data.data);
    } catch (error) {
      console.log(error);
      alert("Something went wrong");
    }
  };

  useEffect(() => {
    searchPatient();
  }, []);
  return (
    <div className="flex-1 p-8">
      {/* Search Form */}
      <div className="mb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <label className="block text-gray-600 mb-2">Name</label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) => {
                setPatientName(e.target.value);
              }}
              value={patientName}
            />
          </div>
          <div>
            <label className="block text-gray-600 mb-2">Phone Number</label>
            <input
              type="tel"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) => {
                setPatientPhoneNumber(e.target.value);
              }}
              value={patientPhoneNumber}
            />
          </div>
          <div>
            <label className="block text-gray-600 mb-2">PUID</label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) => {
                setPatientPuid(e.target.value);
              }}
              value={patientPuid}
            />
          </div>
          <div>
            <label className="block text-gray-600 mb-2">
              Search Visit Date
            </label>
            <input
              type="date"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) => {
                setSearchDate(e.target.value);
              }}
              value={searchDate}
            />
          </div>
          <div className="flex items-end">
            <button
              onClick={searchPatient}
              className="w-full bg-blue-500 text-white px-6 py-2 rounded hover:bg-gray-400 transition-colors"
            >
              Search
            </button>
          </div>
        </div>
      </div>

      {/* Results Table */}
      <div className="bg-white rounded-lg shadow">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50">
                <th className="text-left p-4 text-gray-600 font-medium">
                  Patient Name
                </th>
                <th className="text-left p-4 text-gray-600 font-medium">
                  Email
                </th>
                <th className="text-left p-4 text-gray-600 font-medium">
                  Phone Number
                </th>
                <th className="text-left p-4 text-gray-600 font-medium">
                  Gender
                </th>
               
                <th className="text-left p-4 text-gray-600 font-medium">
                  Next Visit
                </th>
                <th className="text-left p-4 text-gray-600 font-medium">
                  View
                </th>
              </tr>
            </thead>
            <tbody>
              {patientList.map((patient, index) => (
                <tr
                  key={index}
                  className="border-t border-gray-100 hover:bg-gray-50"
                >
                  <td className="p-4 text-gray-800">
                    {patient.patient_id?.patient_name
                      ? patient.patient_id?.patient_name
                      : patient.patient_name}
                  </td>
                  <td className="p-4 text-gray-800">
                    {patient.patient_id?.patient_email
                      ? patient.patient_id?.patient_email
                      : patient.patient_email}
                  </td>
                  <td className="p-4 text-gray-800">
                  {patient.patient_id?.patient_phone_number
                      ? patient.patient_id?.patient_phone_number
                      : patient.patient_phone_number}
                  </td>
                  <td className="p-4 text-gray-800">
                  {patient.patient_id?.patient_gender
                      ? patient.patient_id?.patient_gender
                      : patient.patient_gender}
                  </td>
                  <td className="p-4 text-gray-800">
                  {patient.nextVisitDate
                      ? (new Date(patient.nextVisitDate).toLocaleDateString("hi-IN"))
                      : '-'}
                  </td>
                  
                  <td className="p-4 text-gray-800">
                    <Link to={`/dashboard/patient/${patient.patient_puid}`}>
                      <Eye />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default SearchPatient;
