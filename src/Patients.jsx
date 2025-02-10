
function Patients() {
  return (
    <>
    <div className="relative overflow-x-auto">
<button className="text-white bg-blue-700 hover:bg-blue-800 m-4 focus:ring-4  focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" >Create</button>

    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Patient name
                </th>
                <th scope="col" className="px-6 py-3">
                    Email
                </th>
                <th scope="col" className="px-6 py-3">
                    Phone Number
                </th>
                <th scope="col" className="px-6 py-3">
                    Gender
                </th>
                <th scope="col" className="px-6 py-3">
                    Date of Birth
                </th>
                <th scope="col" className="px-6 py-3">
                    Address
                </th>
                <th scope="col" className="px-6 py-3">
                    Emergency Contact
                </th>
                <th scope="col" className="px-6 py-3">
                    Insurance No.
                </th>
                <th scope="col" className="px-6 py-3">
                    Blood Group
                </th>
                <th scope="col" className="px-6 py-3">
                    Allergies
                </th>
            </tr>
        </thead>
        <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Keerthana
                </th>
                <td className="px-6 py-4">
                    K.12@gmail.com
                </td>
                <td className="px-6 py-4">
                    9123456789
                </td>
                <td className="px-6 py-4">
                    Female
                </td>
                <td className="px-6 py-4">
                    12/05/1997
                </td>
                <td className="px-6 py-4">
                    house No.12, 1st street chennai
                </td>
                <td className="px-6 py-4">
                    902151151 - Dad
                </td>
                <td className="px-6 py-4">
                    B+
                </td>
                <td className="px-6 py-4">
                    shellfish
                </td>
            </tr>
        </tbody>
    </table>
</div>
    </>
  )
}

export default Patients