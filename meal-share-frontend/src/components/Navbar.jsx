import { Link } from "react-router-dom";

const Navbar = () => { {/* creates a nav bar with links */}
  return (
    <nav>
      <Link to="/">Home</Link> | <Link to="/login">Login</Link>
    </nav>
  );
};

export default Navbar;