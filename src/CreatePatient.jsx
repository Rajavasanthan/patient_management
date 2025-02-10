
function CreatePatient() {
  return (
    <>
    
      <form className="max-w-sm mx-auto">

        <div className=" grid grid-cols-2 gap-12 content-center max-w-sm mx-auto pt-40">
          <div className="">
            <div className="mb-5">
              <label for="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Patient
                Name</label>
              <input type="name" id="name"
                className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light" />
            </div>
            <div className="mb-5">
              <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your
                email</label>
              <input type="email" id="email"
                className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light"
                placeholder="name@flowbite.com" required />
            </div>
            <div className="mb-5">
              <label for="phone number" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone
                Number</label>
              <input type="phone number" id="phone"
                className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light" />
            </div>
            <div className="mb-5">
              <label for="Gender"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Gender</label>
              <input type="Gender" id="Gender"
                className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light" />
            </div>
            <div className="mb-5">
              <label for="DoB" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Date of
                Birth</label>
              <input type="DoB" id="DoB"
                className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light" />
            </div>
            <div className="mb-5">
              <label for="" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Address</label>
              <input type="address" id="address"
                className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light" />
            </div>
          </div>

          <div>
            <div className="mb-5">
              <label for="Emergency Contact"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Emergency Contact</label>
              <input type="Emergency Contact" id="Emergency Contact"
                className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light" />
            </div>
            <div className="mb-5">
              <label for="Insurance Number"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Insurance Number</label>
              <input type="Insurance Number" id="Insurance Number"
                className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light" />
            </div>

            <h1>Medical Information</h1>

            <div className="mb-5">
              <label for="Blood Group" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Blood
                Group</label>
              <input type="Blood Group" id="Blood Group"
                className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light" />
            </div>
            <div className="mb-5">
              <label for="Allergies"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Allergies</label>
              <input type="Allergies" id="Allergies"
                className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light" />
            </div>

            <button type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Create</button>
          </div>
        </div>
      </form>

      <div className="relative z-10" aria-labelledby='modal-title' role='dialog' aria-modal='true'>
        <div className="fixed inset-0 bg-gray-500/75 transition-opacity">
          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <div
                className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mt-3 text-center w-full sm:ml-3 sm:mt-0 sm:text-left">
                      <div className="mt-2">
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <div>
                              <h1 className="text-lg font-bold">Patient Created </h1>
                              <h1 className="text-lg font-bold">PUID</h1>
                              <h1 className="text-lg font-bold">ID.no</h1>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CreatePatient