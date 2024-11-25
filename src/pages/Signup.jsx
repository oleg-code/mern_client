import React from "react";

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-6">
      {/* Три формы */}
      <div className="space-y-4">
        {[...Array(3)].map((_, index) => (
          <div key={index} className="flex flex-col items-center space-y-2">
            <label
              htmlFor={`input-field-${index}`}
              className="text-sm font-medium text-gray-700"
            >
              Label
            </label>
            <input
              id={`input-field-${index}`}
              type="text"
              disabled
              className="w-64 px-4 py-2 border border-gray-300 rounded-md bg-gray-100 text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        ))}
      </div>

      {/* Кнопки с надписями */}
      <div className="flex flex-col items-center space-y-4">
        <div className="flex flex-col items-center">
          <span className="text-sm font-medium text-gray-700">Button 1 Label</span>
          <button className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
            Button 1
          </button>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-sm font-medium text-gray-700">Button 2 Label</span>
          <button className="px-6 py-2 bg-green-500 text-white rounded-md hover:bg-green-600">
            Button 2
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
