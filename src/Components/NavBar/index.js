// create it using the shortcut sfc

import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <div className="flex flex-row justify-between mt-2 mx-10">
        <div>
          <h3 className="text-lg font-bold text-red-700">TODOS</h3>
        </div>
        <div className="flex flex-row gap-6">
          <Link to="/">
            <h4 className="text-md font-bold text-red-400">Home</h4>{" "}
          </Link>
          <Link to="/todos">
            <h4 className="text-md font-bold text-red-400">Todos</h4>
          </Link>
          <Link to="/form">
            <h4 className="text-md font-bold text-red-400">Form</h4>
          </Link>
          <Link to="/react-form">
            <h4 className="text-md font-bold text-red-400">React Form</h4>
          </Link>

          <Link to="/about">
            <h4 className="text-md font-bold text-red-400">About Us</h4>
          </Link>
        </div>
      </div>
    </>
  );
};

export default NavBar;
