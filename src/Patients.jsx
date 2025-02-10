import { PlusCircle } from "lucide-react";
import { Link } from "react-router";

const Patients = () => {
  const patients = [
    {
      name: "John Doe",
      email: "john.doe@email.com",
      phone: "(555) 123-4567",
      gender: "Male",
      emergencyContact: "Jane Doe (555) 987-6543",
      insuranceNumber: "INS123456789",
    },
    {
      name: "Jane Smith",
      email: "jane.smith@email.com",
      phone: "(555) 234-5678",
      gender: "Female",
      emergencyContact: "John Smith (555) 876-5432",
      insuranceNumber: "INS987654321",
    },
  ];

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
      <div className="overflow-x-auto shadow-md rounded-lg">
        <table className="min-w-full bg-white">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                Patient Name
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                Email
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                Phone Number
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                Gender
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                Emergency Contact
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                Insurance Number
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {patients.map((patient, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="px-6 py-4 text-sm text-gray-900">
                  {patient.name}
                </td>
                <td className="px-6 py-4 text-sm text-gray-900">
                  {patient.email}
                </td>
                <td className="px-6 py-4 text-sm text-gray-900">
                  {patient.phone}
                </td>
                <td className="px-6 py-4 text-sm text-gray-900">
                  {patient.gender}
                </td>
                <td className="px-6 py-4 text-sm text-gray-900">
                  {patient.emergencyContact}
                </td>
                <td className="px-6 py-4 text-sm text-gray-900">
                  {patient.insuranceNumber}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Patients;
