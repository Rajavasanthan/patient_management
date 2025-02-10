import { useFormik } from "formik"
import { useState } from "react";

function CreatePatient() {
  const [showModal, setShowModal] = useState(false);
  const [patientId, setPatientId] = useState('');

  const formik = useFormik({
    initialValues: {
      name: '', email: '', phone: '', gender: '', dob: '', 
      address: '', emergency: '', insurance: '', bloodGroup: '', 
      allergies: ''
    },
    validate: values => {
      const errors = {};
      if (!values.name) errors.name = 'Required';
      if (!values.email) {
        errors.email = 'Required';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
      }
      if (!values.phone) errors.phone = 'Required';
      if (!values.gender) errors.gender = 'Required';
      if (!values.dob) errors.dob = 'Required';
      if (!values.address) errors.address = 'Required';
      if (!values.emergency) errors.emergency = 'Required';
      if (!values.insurance) errors.insurance = 'Required';
      if (!values.bloodGroup) errors.bloodGroup = 'Required';
      return errors;
    },
    onSubmit: values => {
      console.log('Form submitted:', values);
    },
  });
  return (
    <>
    <div className="max-w-5xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Patient Registration Form</h2>
      
      <form onSubmit={formik.handleSubmit}>
        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Patient Name</label>
            <input
              type="text"
              id="name"
              {...formik.getFieldProps('name')}
              className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
            />
            {formik.touched.name && formik.errors.name && (
              <div className="text-red-500 text-sm">{formik.errors.name}</div>
            )}
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              {...formik.getFieldProps('email')}
              className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
            />
            {formik.touched.email && formik.errors.email && (
              <div className="text-red-500 text-sm">{formik.errors.email}</div>
            )}
          </div>

          <div className="space-y-2">
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
            <input
              type="tel"
              id="phone"
              {...formik.getFieldProps('phone')}
              className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
            />
            {formik.touched.phone && formik.errors.phone && (
              <div className="text-red-500 text-sm">{formik.errors.phone}</div>
            )}
          </div>

          <div className="space-y-2">
            <label htmlFor="gender" className="block text-sm font-medium text-gray-700">Gender</label>
            <select
              id="gender"
              {...formik.getFieldProps('gender')}
              className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            {formik.touched.gender && formik.errors.gender && (
              <div className="text-red-500 text-sm">{formik.errors.gender}</div>
            )}
          </div>

          <div className="space-y-2">
            <label htmlFor="dob" className="block text-sm font-medium text-gray-700">Date of Birth</label>
            <input
              type="date"
              id="dob"
              {...formik.getFieldProps('dob')}
              className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
            />
            {formik.touched.dob && formik.errors.dob && (
              <div className="text-red-500 text-sm">{formik.errors.dob}</div>
            )}
          </div>

          <div className="space-y-2">
            <label htmlFor="emergency" className="block text-sm font-medium text-gray-700">Emergency Contact</label>
            <input
              type="tel"
              id="emergency"
              {...formik.getFieldProps('emergency')}
              className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
            />
            {formik.touched.emergency && formik.errors.emergency && (
              <div className="text-red-500 text-sm">{formik.errors.emergency}</div>
            )}
          </div>

          <div className="space-y-2">
            <label htmlFor="insurance" className="block text-sm font-medium text-gray-700">Insurance Number</label>
            <input
              type="text"
              id="insurance"
              {...formik.getFieldProps('insurance')}
              className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
            />
            {formik.touched.insurance && formik.errors.insurance && (
              <div className="text-red-500 text-sm">{formik.errors.insurance}</div>
            )}
          </div>

          <div className="space-y-2">
            <label htmlFor="bloodGroup" className="block text-sm font-medium text-gray-700">Blood Group</label>
            <select
              id="bloodGroup"
              {...formik.getFieldProps('bloodGroup')}
              className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select Blood Group</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
            </select>
            {formik.touched.bloodGroup && formik.errors.bloodGroup && (
              <div className="text-red-500 text-sm">{formik.errors.bloodGroup}</div>
            )}
          </div>
        </div>

        <div className="mt-6 space-y-2">
          <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
          <textarea
            id="address"
            rows="3"
            {...formik.getFieldProps('address')}
            className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
          ></textarea>
          {formik.touched.address && formik.errors.address && (
            <div className="text-red-500 text-sm">{formik.errors.address}</div>
          )}
        </div>

        <div className="mt-6 space-y-2">
          <label htmlFor="allergies" className="block text-sm font-medium text-gray-700">Allergies</label>
          <textarea
            id="allergies"
            rows="3"
            {...formik.getFieldProps('allergies')}
            className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
            placeholder="List any allergies (if none, write 'None')"
          ></textarea>
        </div>

        <button
          type="submit"
          className="mt-6 w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Submit
        </button>
      </form>
    </div>

    {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-10 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full mx-4">
            <h3 className="text-xl font-bold mb-4">Registration Successful!</h3>
            <p className="mb-4">Your registration has been completed. Your Patient ID is:</p>
            <p className="text-lg font-semibold text-blue-600 mb-6">{patientId}</p>
            <p className="mb-6 text-sm text-gray-600">Please save this ID for future reference.</p>
            <button 
              onClick={() => setShowModal(false)}
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Close
            </button>
          </div>
        </div>
      )}
    
      

      {/* <div className="relative z-10" aria-labelledby='modal-title' role='dialog' aria-modal='true'>
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
      </div> */}
    </>
  )
}

export default CreatePatient