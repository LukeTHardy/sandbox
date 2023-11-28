import { Link } from "react-router-dom";
import "./NavBar.css";

export const NavBar = () => {
  return (
    <div className="navbar">
      <Link to="/sliders" className="text-2xl mb-4">
        Sliders
      </Link>
      <Link to="/gardenbuilder" className="text-2xl mb-4">
        Garden Builder
      </Link>
      <Link to="/binpacking" className="text-2xl mb-4">
        Bin Packing
      </Link>
    </div>
  );
};
