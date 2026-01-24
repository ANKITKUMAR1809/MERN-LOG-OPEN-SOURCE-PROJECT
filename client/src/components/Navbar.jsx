import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { 
  Home, 
  BookOpen, 
  GitPullRequest, 
  FileText, 
  LogIn, 
  UserPlus,
  Menu,
  X,
  Sparkles,
  Lightbulb,
  Bookmark,
  Search,
  User,
  LogOut
} from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  
  // Mock user state (replace with actual auth state)
  const [user, setUser] = useState(null);

  const navItems = [
    { path: "/", label: "Home", icon: <Home className="w-5 h-5" /> },
    { path: "/tutorials", label: "Tutorials", icon: <BookOpen className="w-5 h-5" /> },
    { path: "/best-resources", label: "Resources", icon: <Bookmark className="w-5 h-5" /> },
    { path: "/project-ideas", label: "Projects", icon: <Lightbulb className="w-5 h-5" /> },
    { path: "/contribution", label: "Contribute", icon: <GitPullRequest className="w-5 h-5" /> },
    { path: "/blogs", label: "Blog", icon: <FileText className="w-5 h-5" /> },
  ];

  const isActive = (path) => location.pathname === path;

  const handleLogout = () => {
    setUser(null);
    navigate("/");
    setIsOpen(false);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    // Implement search functionality
    setIsSearchOpen(false);
  };

  return (
    <nav className="bg-gray-900 border-b border-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link 
              to="/" 
              className="flex items-center space-x-2 group"
              onClick={() => setIsOpen(false)}
            >
              <div className="relative">
                <Sparkles className="h-8 w-8 text-blue-400 group-hover:text-blue-300 transition-colors" />
                <div className="absolute -inset-1 bg-blue-400/10 rounded-full blur-sm group-hover:bg-blue-400/20 transition-colors"></div>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                MERN LOG
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-all ${
                    isActive(item.path)
                      ? "bg-gray-800 text-white shadow-lg"
                      : "text-gray-400 hover:bg-gray-800 hover:text-white"
                  }`}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Right side - Search & Auth */}
          <div className="flex items-center space-x-2">
            {/* Search Button */}
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 transition-colors"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Auth Buttons - Desktop */}
            <div className="hidden md:flex items-center space-x-2">
              {user ? (
                <div className="flex items-center space-x-3">
                  <Link
                    to="/profile"
                    className="flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium bg-gray-800 text-white hover:bg-gray-700 transition-colors"
                  >
                    <User className="w-4 h-4" />
                    <span>Profile</span>
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium bg-red-900/20 text-red-400 hover:bg-red-900/30 transition-colors"
                  >
                    <LogOut className="w-4 h-4" />
                    <span>Logout</span>
                  </button>
                </div>
              ) : (
                <>
                  <Link
                    to="/login"
                    className={`flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                      isActive("/login")
                        ? "bg-blue-600 text-white"
                        : "bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white"
                    }`}
                  >
                    <LogIn className="w-4 h-4" />
                    <span>Login</span>
                  </Link>
                  <Link
                    to="/signup"
                    className={`flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                      isActive("/signup")
                        ? "bg-purple-600 text-white"
                        : "bg-blue-600 text-white hover:bg-blue-700"
                    }`}
                  >
                    <UserPlus className="w-4 h-4" />
                    <span>Sign Up</span>
                  </Link>
                </>
              )}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none"
                aria-label={isOpen ? "Close menu" : "Open menu"}
              >
                {isOpen ? (
                  <X className="block h-6 w-6" />
                ) : (
                  <Menu className="block h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Search Bar */}
        {isSearchOpen && (
          <div className="py-3 border-t border-gray-800">
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                placeholder="Search tutorials, resources, projects..."
                className="w-full px-4 py-2 pl-10 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                autoFocus
              />
              <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
            </form>
          </div>
        )}
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-900 border-t border-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`flex items-center space-x-3 px-3 py-3 rounded-md text-base font-medium transition-colors ${
                  isActive(item.path)
                    ? "bg-gray-800 text-white shadow-inner"
                    : "text-gray-400 hover:bg-gray-800 hover:text-white"
                }`}
              >
                {item.icon}
                <span>{item.label}</span>
              </Link>
            ))}
            
            {/* Divider */}
            <div className="border-t border-gray-800 my-2"></div>
            
            {/* Auth Section */}
            {user ? (
              <>
                <Link
                  to="/profile"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center space-x-3 px-3 py-3 rounded-md text-base font-medium text-gray-400 hover:bg-gray-800 hover:text-white"
                >
                  <User className="w-5 h-5" />
                  <span>Profile</span>
                </Link>
                <button
                  onClick={handleLogout}
                  className="w-full flex items-center space-x-3 px-3 py-3 rounded-md text-base font-medium text-red-400 hover:bg-red-900/20"
                >
                  <LogOut className="w-5 h-5" />
                  <span>Logout</span>
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center space-x-3 px-3 py-3 rounded-md text-base font-medium ${
                    isActive("/login")
                      ? "bg-blue-600 text-white"
                      : "text-gray-400 hover:bg-gray-800 hover:text-white"
                  }`}
                >
                  <LogIn className="w-5 h-5" />
                  <span>Login</span>
                </Link>
                <Link
                  to="/signup"
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center space-x-3 px-3 py-3 rounded-md text-base font-medium ${
                    isActive("/signup")
                      ? "bg-purple-600 text-white"
                      : "bg-blue-600 text-white hover:bg-blue-700"
                  }`}
                >
                  <UserPlus className="w-5 h-5" />
                  <span>Sign Up</span>
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;