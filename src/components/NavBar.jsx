import { useNavigate, useLocation } from "react-router-dom";
import { WiAlien } from "react-icons/wi";

const NavBar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    
    const isActive = (path) => {
        return location.pathname === path;
    }

    const routeChange = (path) => {
      return () => navigate(path);
    }
    return (
        <div className="w-full flex justify-between items-center py-2">
            <div className="flex items-center">
                <button onClick={routeChange('/')} className={`flex items-center navbar-button font-bold text-xl ${isActive('/') ? 'navbar-button-selected' : ''}`}>
                    <p className="text-5xl"><WiAlien/></p> 
                    <span>Khye Jac</span>
                </button>
            </div>
            <div className="flex gap-[200px] mr-8">
                <button onClick={routeChange('/aboutMe')} className = {isActive('/aboutMe') ? "navbar-button-selected" : "navbar-button"}>
                    About Me
                </button>
                <button onClick={routeChange('/projects')} className = {isActive('/projects') ? "navbar-button-selected" : "navbar-button"}>
                    Projects
                </button>
            </div>
        </div>
    )
}

export default NavBar;