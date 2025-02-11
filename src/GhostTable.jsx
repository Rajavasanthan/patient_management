function GhostTable() {
  const rows = Array(5).fill(null);
  const columns = Array(4).fill(null);
  return (
    <div className="w-full overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        {/* Table Header */}
        <thead className="bg-gray-50">
          <tr>
            {columns.map((_, index) => (
              <th key={`header-${index}`} className="px-6 py-3">
                <div className="h-4 bg-gray-200 rounded animate-pulse w-24" />
              </th>
            ))}
          </tr>
        </thead>

        {/* Table Body */}
        <tbody className="bg-white divide-y divide-gray-200">
          {rows.map((_, rowIndex) => (
            <tr key={`row-${rowIndex}`}>
              {columns.map((_, colIndex) => (
                <td
                  key={`cell-${rowIndex}-${colIndex}`}
                  className="px-6 py-4 whitespace-nowrap"
                >
                  {/* Different widths for various columns */}
                  <div
                    className={`h-4 bg-gray-200 rounded animate-pulse ${
                      colIndex === 0
                        ? "w-32"
                        : colIndex === 1
                        ? "w-24"
                        : colIndex === 2
                        ? "w-16"
                        : "w-20"
                    }`}
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      {/* Optional loading state for pagination */}
      <div className="flex items-center justify-between px-4 py-3 bg-white border-t border-gray-200 sm:px-6">
        <div className="flex items-center space-x-4">
          <div className="h-4 w-32 bg-gray-200 rounded animate-pulse" />
          <div className="h-4 w-24 bg-gray-200 rounded animate-pulse" />
        </div>
        <div className="flex items-center space-x-2">
          <div className="h-8 w-8 bg-gray-200 rounded animate-pulse" />
          <div className="h-8 w-8 bg-gray-200 rounded animate-pulse" />
          <div className="h-8 w-8 bg-gray-200 rounded animate-pulse" />
        </div>
      </div>
    </div>
  );
}

export default GhostTable;
