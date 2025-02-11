import { useEffect, useState } from "react";
import {
  Calendar,
  Phone,
  Mail,
  AlertCircle,
  Search,
  ChevronLeft,
  ChevronRight,
  Clock,
  Edit,
  Trash2,
  Plus,
  Save,
  X,
} from "lucide-react";
import { useParams } from "react-router";
import axios from "axios";

const PatientView = () => {
  const { puid } = useParams();
  const [patientDetails, setPatientDetails] = useState();
  const [visits, setVisits] = useState([
    // {
    //   id: 1,
    //   date: '1 Jan 2025',
    //   visit_notes: 'Initial consultation',
    //   visit_diagnosis: 'General checkup',
    //   visit_prescription: 'Vitamin D',
    //   nextVisit: '15 Jan 2025',
    //   status: 'completed'
    // }
  ]);

  const getPatientDetails = async () => {
    try {
      const PateintDetailResp = await axios.get(
        `${import.meta.env.VITE_API}/patient/${puid}`,
        {
          headers: {
            Authorization: window.localStorage.getItem(
              import.meta.env.VITE_LOCAL_STORAGE_KEY
            ),
          },
        }
      );
      setPatientDetails(PateintDetailResp.data);
    } catch (error) {
      console.log(error);
      alert("Something went wrong");
    }
  };

  const getVisitHistory = async () => {
    try {
      const PateintHistoryResp = await axios.get(
        `${import.meta.env.VITE_API}/patient/${puid}/history`,
        {
          headers: {
            Authorization: window.localStorage.getItem(
              import.meta.env.VITE_LOCAL_STORAGE_KEY
            ),
          },
        }
      );
      setVisits(PateintHistoryResp.data);
    } catch (error) {
      console.log(error);
      alert("Something went wrong");
    }
  };

  useEffect(() => {
    getPatientDetails();
    getVisitHistory();
  }, []);

  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [isCreateMode, setIsCreateMode] = useState(false);
  const [editingVisit, setEditingVisit] = useState(null);

  const [newVisit, setNewVisit] = useState({
    visit_notes: "",
    visit_diagnosis: "",
    visit_prescription: "",
    nextVisit: "",
    status: "pending",
  });

  const resetNewVisit = () => {
    setNewVisit({
      visit_notes: "",
      visit_diagnosis: "",
      visit_prescription: "",
      nextVisit: "",
      status: "pending",
    });
  };

  const handleSaveVisit = async () => {
    if (newVisit.visit_notes.trim()) {
      
      const visitToSave = {
        // id: Date.now(),
        date: new Date().toLocaleDateString("en-US", {
          day: "numeric",
          month: "short",
          year: "numeric",
        }),
        ...newVisit,
      };
      console.log(visitToSave)
      if (editingVisit) {
        await axios.put(
          `${import.meta.env.VITE_API}/patient/${visitToSave._id}/history`,
          visitToSave,
          {
            headers: {
              Authorization: window.localStorage.getItem(
                import.meta.env.VITE_LOCAL_STORAGE_KEY
              ),
            },
          }
        );

        getVisitHistory();
      } else {
        const newVisit = await axios.post(
          `${import.meta.env.VITE_API}/patient/${puid}/history`,
          visitToSave,
          {
            headers: {
              Authorization: window.localStorage.getItem(
                import.meta.env.VITE_LOCAL_STORAGE_KEY
              ),
            },
          }
        );
        visitToSave._id = newVisit.data._id
        setVisits([...visits, visitToSave]);
      }

      resetNewVisit();
      setIsCreateMode(false);
    }
  };

  const handleEditVisit = (visit) => {
    setEditingVisit(visit);
    setNewVisit(visit);
    setIsCreateMode(true);
  };

  const handleDeleteVisit = async (visitId) => {
    const resp = confirm("Are you sure do you want to delete?");
    if (resp) {
      await axios.delete(
        `${import.meta.env.VITE_API}/patient/${visitId}/history`,
        {
          headers: {
            Authorization: window.localStorage.getItem(
              import.meta.env.VITE_LOCAL_STORAGE_KEY
            ),
          },
        }
      );
      setVisits(visits.filter((visit) => visit._id !== visitId));
    }
  };

  const filteredVisits = visits.filter((visit) => {
    const matchesSearch =
      visit.visit_notes.toLowerCase().includes(searchTerm.toLowerCase()) ||
      visit.visit_diagnosis.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter =
      filterStatus === "all" || visit.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  const itemsPerPage = 5;
  const totalPages = Math.ceil(filteredVisits.length / itemsPerPage);
  const currentVisits = filteredVisits.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Patient Information Card */}
      {patientDetails ? (
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-2xl font-bold text-gray-800 mb-4">
                {patientDetails.patient_name}
              </h1>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-gray-500" />
                  <span className="text-gray-600">
                    {patientDetails.patient_phone_number}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-gray-500" />
                  <span className="text-gray-600">
                    {patientDetails.patient_email}
                  </span>
                </div>
                <p className="text-gray-600">
                  {patientDetails.patient_gender} -{" "}
                  {new Date().getFullYear() -
                    patientDetails.patient_date_of_birth.split("-")[2]}
                  y
                </p>
                <p className="text-gray-600">
                  Blood Group: {patientDetails.patient_blood_group}
                </p>
                <div className="flex items-center gap-2 text-red-600">
                  <AlertCircle className="w-4 h-4" />
                  <span>{patientDetails.patient_allergies.join(",")}</span>
                </div>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-600">
                Emergency Contact: {patientDetails.patient_emmergency_contact}
              </p>
              <p className="text-sm text-gray-600">
                Insurance Number: {patientDetails.patient_insurance_number}
              </p>
            </div>
          </div>
        </div>
      ) : null}

      {/* Visit History Section */}
      {visits ? (
        <div className="grid grid-cols-1 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-800">
                Visit History
              </h2>
              <button
                onClick={() => {
                  setIsCreateMode(true);
                  setEditingVisit(null);
                  resetNewVisit();
                }}
                className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
              >
                <Plus className="w-4 h-4" />
                New Visit
              </button>
            </div>

            {/* Search and Filter */}
            <div className="flex flex-wrap gap-4 mb-6">
              <div className="flex-1 min-w-[200px]">
                <div className="relative">
                  <Search className="w-4 h-4 absolute left-3 top-3 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search visits..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">All Status</option>
                <option value="pending">Pending</option>
                <option value="completed">Completed</option>
                <option value="cancelled">Cancelled</option>
              </select>
            </div>

            {isCreateMode ? (
              <div className="bg-gray-50 rounded-lg p-4 mb-6">
                <div className="flex justify-between mb-4">
                  <h3 className="text-lg font-semibold">
                    {editingVisit ? "Edit Visit" : "New Visit"}
                  </h3>
                  <button
                    onClick={() => {
                      setIsCreateMode(false);
                      resetNewVisit();
                    }}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Notes
                    </label>
                    <textarea
                      value={newVisit.visit_notes}
                      onChange={(e) =>
                        setNewVisit({
                          ...newVisit,
                          visit_notes: e.target.value,
                        })
                      }
                      className="w-full h-32 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter visit notes..."
                    />
                  </div>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Diagnosis
                      </label>
                      <input
                        type="text"
                        value={newVisit.visit_diagnosis}
                        onChange={(e) =>
                          setNewVisit({
                            ...newVisit,
                            visit_diagnosis: e.target.value,
                          })
                        }
                        className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Prescription
                      </label>
                      <input
                        type="text"
                        value={newVisit.visit_prescription}
                        onChange={(e) =>
                          setNewVisit({
                            ...newVisit,
                            visit_prescription: e.target.value,
                          })
                        }
                        className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Next Visit
                      </label>
                      <input
                        type="date"
                        value={newVisit.nextVisit}
                        onChange={(e) =>
                          setNewVisit({
                            ...newVisit,
                            nextVisit: e.target.value,
                          })
                        }
                        className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Status
                      </label>
                      <select
                        value={newVisit.status}
                        onChange={(e) =>
                          setNewVisit({ ...newVisit, status: e.target.value })
                        }
                        className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="pending">Pending</option>
                        <option value="completed">Completed</option>
                        <option value="cancelled">Cancelled</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="mt-4 flex justify-end gap-2">
                  <button
                    onClick={() => {
                      setIsCreateMode(false);
                      resetNewVisit();
                    }}
                    className="px-4 py-2 border rounded-lg hover:bg-gray-50"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleSaveVisit}
                    className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                  >
                    <Save className="w-4 h-4" />
                    {editingVisit ? "Edit Visit" : "Save Visit"}
                  </button>
                </div>
              </div>
            ) : null}

            {/* Visits List */}
            <div className="space-y-4">
              {currentVisits.map((visit) => (
                <div
                  key={visit.id}
                  className="border rounded-lg p-4 hover:bg-gray-50"
                >
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-gray-500" />
                      <span className="font-medium">{visit.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleEditVisit(visit)}
                        className="text-blue-600 hover:text-blue-700"
                      >
                        <Edit className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDeleteVisit(visit._id)}
                        className="text-red-600 hover:text-red-700"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-2">{visit.visit_notes}</p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                    <div>
                      <span className="text-gray-500">Diagnosis:</span>
                      <span className="ml-2">{visit.visit_diagnosis}</span>
                    </div>
                    <div>
                      <span className="text-gray-500">Prescription:</span>
                      <span className="ml-2">{visit.visit_prescription}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-gray-500" />
                      <span className="text-gray-500">Next Visit:</span>
                      <span>
                        {new Date(visit.nextVisit)
                          .getDate()
                          .toString()
                          .padStart(2, "0")}
                        -
                        {(new Date(visit.nextVisit).getMonth() + 1)
                          .toString()
                          .padStart(2, "0")}
                        -{new Date(visit.nextVisit).getFullYear()}
                      </span>
                    </div>
                  </div>
                  <div className="mt-2">
                    <span
                      className={`px-2 py-1 text-xs rounded-full ${
                        visit.status === "completed"
                          ? "bg-green-100 text-green-800"
                          : visit.status === "cancelled"
                          ? "bg-red-100 text-red-800"
                          : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {visit.status.charAt(0).toUpperCase() +
                        visit.status.slice(1)}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-between items-center mt-6">
                <p className="text-sm text-gray-600">
                  Showing {(currentPage - 1) * itemsPerPage + 1} to{" "}
                  {Math.min(currentPage * itemsPerPage, filteredVisits.length)}{" "}
                  of {filteredVisits.length} visits
                </p>
                <div className="flex gap-2">
                  <button
                    onClick={() =>
                      setCurrentPage((prev) => Math.max(1, prev - 1))
                    }
                    disabled={currentPage === 1}
                    className="p-2 border rounded-lg hover:bg-gray-50 disabled:opacity-50"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() =>
                      setCurrentPage((prev) => Math.min(totalPages, prev + 1))
                    }
                    disabled={currentPage === totalPages}
                    className="p-2 border rounded-lg hover:bg-gray-50 disabled:opacity-50"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default PatientView;
