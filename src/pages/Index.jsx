import React from "react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="text-center">
      <h1 className="text-3xl">Welcome to Your Todo App</h1>
      <p>Get started by selecting a view:</p>
      <div className="mt-4 space-x-4">
        <Link to="/inbox" className="px-4 py-2 bg-blue-500 text-white rounded-lg">
          Inbox
        </Link>
        <Link to="/today" className="px-4 py-2 bg-blue-500 text-white rounded-lg">
          Today
        </Link>
        <Link to="/upcoming" className="px-4 py-2 bg-blue-500 text-white rounded-lg">
          Upcoming
        </Link>
      </div>
    </div>
  );
};

export default Index;