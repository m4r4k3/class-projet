import logoImg from "../content/logo.png";
export default function Nav() {
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
        {["home", "explore", "profile", "about us"].map((item, ind) => (
          <li
            className={`${
              ind === 0 && "active"
            } cursor-pointer select-none opacity-50 p-[10px] inline-block`}
          >
            {item}
          </li>
        ))}
      </ul>
    </nav>
  );
}
