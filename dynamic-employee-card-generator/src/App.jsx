import React, { useState } from 'react';
import { useEmployees } from './hooks/useEmployees';
import EmployeeCard from './components/EmployeeCard';

function App() {
  const { employees, loading, error } = useEmployees();
  const [searchTerm, setSearchTerm] = useState("");

  // Real-time filtering logic for Name and Email
  const filteredEmployees = employees.filter(emp => 
    emp.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    emp.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) return <div className="flex justify-center items-center h-screen font-bold">Loading Employees...</div>;
  if (error) return <div className="text-center text-red-500 mt-10">Error: {error}</div>;

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-10">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-10 no-print">
          <h1 className="text-4xl font-black text-gray-900 mb-6">Employee Directory</h1>
          
          <input 
            type="text"
            placeholder="Search by name or email..."
            className="w-full max-w-lg px-5 py-3 rounded-full border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </header>

        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEmployees.map(emp => (
            <EmployeeCard key={emp.id} employee={emp} />
          ))}
        </div>

        {filteredEmployees.length === 0 && (
          <p className="text-center text-gray-500 mt-10">No employees match your search.</p>
        )}
      </div>
    </div>
  );
}

export default App;
