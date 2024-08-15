import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

function Logout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("Users");
    window.location.reload();
    navigate("/");
  };

  return (
    <div>
      <button
        className=" bg-red-500 text-white px-3 py-2 hover:bg-red-800 hover:text-white rounded-md duration-300 cursor-pointer"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
}

export default Logout;
