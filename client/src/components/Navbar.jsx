import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-[#141414] text-white px-6 py-4 border-b border-transparent transition-all duration-300 hover:bg-[#1f1f1f] hover:border-[#E50914]">
      <div className="max-w-7xl mx-auto flex justify-between items-center">

        <h1 className="text-2xl font-extrabold text-[#E50914]">
          MERN LOG
        </h1>

        <div className="flex gap-8 text-gray-300">
          <NavLink
            to="/login"
            className="hover:text-[#E50914] transition"
          >
            Login
          </NavLink>

          <NavLink
            to="/signup"
            className="hover:text-[#E50914] transition"
          >
            Signup
          </NavLink>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
