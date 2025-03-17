import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router";
import GhostTable from "./GhostTable";

const Patients = () => {

  const [allPatients, setAllPatients] = useState();
  const getAppPatients = async () => {
    try {
      const allPateintsResp = await axios.get(
        `${import.meta.env.VITE_API}/patient/list`,
        {
          headers: {
            Authorization: window.localStorage.getItem(
              import.meta.env.VITE_LOCAL_STORAGE_KEY
            ),
          },
        }
      );
      setAllPatients(allPateintsResp.data);
    } catch (error) {
      console.log(error);
      alert("Something went wrong");
    }
  };

  useEffect(() => {
    getAppPatients();
  }, []);

  return (
    <div className="px-8 py-6">
      <div className="flex justify-end mb-4">
        <Link
          to={"/dashboard/create-patient"}
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          {/* <PlusCircle className="h-4 w-4" /> */}
          Create Patient
        </Link>
      </div>
      {
        allPatients ? <div className="overflow-x-auto shadow-md rounded-lg">
        <table className="min-w-full bg-white">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                Patient Name
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                Age
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                Phone Number
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                Gender
              </th>
              {/* <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                Emergency Contact
              </th> */}
              {/* <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                Insurance Number
              </th> */}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {allPatients.map((patient, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="px-6 py-4 text-sm text-gray-900">
                  {patient.patient_name}
                </td>
                <td className="px-6 py-4 text-sm text-gray-900">
                  {patient.patient_age}
                </td>
                <td className="px-6 py-4 text-sm text-gray-900">
                  {patient.patient_phone_number}
                </td>
                <td className="px-6 py-4 text-sm text-gray-900">
                  {patient.patient_gender}
                </td>
                {/* <td className="px-6 py-4 text-sm text-gray-900">
                  {patient.patient_emmergency_contact}
                </td> */}
                {/* <td className="px-6 py-4 text-sm text-gray-900">
                  {patient.patient_insurance_number}
                </td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div> : <GhostTable/>
      }
      
      
    </div>
  );
};

export default Patients;
