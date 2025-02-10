import { TrendingUp } from 'lucide-react';

function Dashboard() {
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
            32
          </p>
        </div>
      </div>
    </div>
  )
}

export default Dashboard