import axios from "axios";
import { useFormik } from "formik";
import { User } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router";

function Login() {
  const navigate = useNavigate();
  const [isLoading,setLoading] = useState(false)
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate: (values) => {
      const errors = {};
      if (!values.email) {
        errors.email = "Required";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
      ) {
        errors.email = "Invalid email address";
      }
      if (!values.password) {
        errors.password = "Required";
      } else if (values.password.length < 4) {
        errors.password = "Password must be at least 4 characters long";
      }
      return errors;
    },
    onSubmit: async (values) => {
      try {
        setLoading(true)
        const loginRep = await axios.post(
          `${import.meta.env.VITE_API}/doctor/login`,
          values
        );
        if (loginRep.status === 200) {
          setLoading(false)
          window.localStorage.setItem(
            import.meta.env.VITE_LOCAL_STORAGE_KEY,
            loginRep.data.token
          );
          navigate("/dashboard");
        }
        // setLoading(false)
      } catch (error) {
        // setLoading(false)
        console.error(error);
      }
    },
  });
  return (
    <>
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="flex justify-center">
            <div className="flex flex-col items-center space-y-4 pb-4">
              <div className="w-24 h-24 bg-blue-500 rounded-full flex items-center justify-center">
                <User className="w-12 h-12 text-white" />
              </div>
              <h1 className="text-2xl font-bold text-white">Dr.Dinesh</h1>
            </div>
          </div>
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Sign in to your account
              </h1>
              <form
                className="space-y-4 md:space-y-6"
                onSubmit={formik.handleSubmit}
              >
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@company.com"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                  />
                  <span className="text-sm text-red-500">
                    {formik.errors.email}
                  </span>
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                  />
                  <span className="text-sm text-red-500">
                    {formik.errors.password}
                  </span>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className={`w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 ${!isLoading ? 'bg-blue-600' : 'bg-grey-200'}`}
                >
                {
                  isLoading ? 'Please wait...' : 'Sign in'
                }
                  
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;
