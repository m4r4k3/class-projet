import logoImg from "../../content/images/logo.png";
import "./style.css"
import { Link, useLocation } from "react-router-dom";

export default function Nav() {
  const path = useLocation().pathname ;
  console.log(path)
  return (
    <nav className="uppercase font-bold text-white flex justify-between items-center h-[70px] bg-[#031D40] px-20">
      <div className="flex justify-between items-center w-[150px] cursor-pointer">
        <img
          src={logoImg}
          alt="logo"
          className="w-[50px] h-[50px]"
          draggable={false}
        />
        stage.ma
      </div>
      <ul className="flex  justify-around items-center w-[50%] nav-options">
        {["home", "explore", "profile", "about-us"].map((item, ind) => (
          <Link to={item}
            className={`${
            path=== "/"+item && "active"
            } cursor-pointer select-none opacity-50 p-[10px] inline-block`}
          >
            {item}
          </Link>
        ))}
      </ul>
    </nav>
  );
}
