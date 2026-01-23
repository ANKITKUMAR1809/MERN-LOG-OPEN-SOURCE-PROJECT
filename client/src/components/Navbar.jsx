import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="
 bg-[#141414] text-white px-6 py-4 shadow-lg   border-b
  border-transparent
  transition-all
  duration-300
  hover:bg-[#1f1f1f]
  hover:border-[#E50914]
  hover:shadow-[0_4px_20px_rgba(229,9,20,0.15)]
">
      <div className="max-w-7xl mx-auto flex items-center justify-between">

        <Link to="/" className="text-2xl font-extrabold tracking-wide text-[#E50914]">
          MERN LOG
        </Link>

           <div className="flex gap-8">
          <NavLink
            to="/login"
            className={({ isActive }) =>
              `relative text-sm md:text-base transition-all duration-300
              ${
                isActive
                  ? "text-[#E50914]"
                  : "text-gray-300 hover:text-[#E50914]"
              }`
            }
          >
            Login
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#E50914] transition-all duration-300 group-hover:w-full"></span>
          </NavLink>

          <NavLink
            to="/signup"
            className={({ isActive }) =>
              `relative text-sm md:text-base transition-all duration-300
              ${
                isActive
                  ? "text-[#E50914]"
                  : "text-gray-300 hover:text-[#E50914]"
              }`
            }
          >
            Signup
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#E50914] transition-all duration-300 group-hover:w-full"></span>
          </NavLink>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
