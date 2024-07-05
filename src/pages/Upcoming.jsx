import React from "react";

const Upcoming = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Upcoming</h1>
      <div className="space-y-4">
        {/* Placeholder for tasks */}
        <div className="border p-4 rounded-lg shadow-sm">
          <input type="checkbox" className="mr-2" />
          <span className="font-medium">Task 1</span>
          <span className="text-sm text-gray-500 ml-2">Due: Next Week</span>
        </div>
        <div className="border p-4 rounded-lg shadow-sm">
          <input type="checkbox" className="mr-2" />
          <span className="font-medium">Task 2</span>
          <span className="text-sm text-gray-500 ml-2">Due: Next Month</span>
        </div>
      </div>
      <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg">
        Add Task
      </button>
    </div>
  );
};

export default Upcoming;