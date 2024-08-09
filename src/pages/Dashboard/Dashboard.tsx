import { Outlet } from "react-router-dom";
import React from "react";

const Dashboard: React.FC = () => {
  return (
    <div className="flex gap-5 mx-auto px-4">
      <nav>Dasboard Navbar</nav>
      <div className="flex-grow">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
