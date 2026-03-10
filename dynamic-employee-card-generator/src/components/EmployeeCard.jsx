import React from 'react';

const EmployeeCard = ({ employee }) => {
  // Destructuring key information as requested
  const { id, name, email, phone, website, company } = employee;

  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow duration-300">
      <div className="flex justify-between items-start mb-4">
        <span className="text-xs font-bold text-blue-500 bg-blue-50 px-2 py-1 rounded">ID: {id}</span>
      </div>
      
      <h3 className="text-xl font-bold text-gray-800 mb-1">{name}</h3>
      <p className="text-sm text-gray-500 mb-4">{email}</p>
      
      <div className="space-y-2 border-t pt-4 text-sm text-gray-600">
        <p><strong>Phone:</strong> {phone}</p>
        <p><strong>Website:</strong> {website}</p>
        <p><strong>Company:</strong> {company.name}</p>
      </div>

      <div className="mt-6 no-print">
        <button 
          onClick={() => window.print()}
          className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition"
        >
          Print Card
        </button>
      </div>
    </div>
  );
};

export default EmployeeCard;