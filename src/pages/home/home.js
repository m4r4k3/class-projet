import { useEffect, useState } from "react";
import "./style.css" ;

export default function Home() {
  const [sloganStyle, setSloganStyle] = useState({
    fontFamily: "Impact, Haettenschweiler",
    transform: "translateY(100px)",
    transition:"500ms ease-out"
  });
  const [formStyle, setFormStyle] = useState({
    transform: "translateY(100vh)",
    transition:"500ms ease-out"
  });
  useEffect(() => {
    setTimeout(() => {
      setSloganStyle((e) => ({ ...e, transform: "" }));
      setFormStyle((e) => ({...e,transform: "translateY(0)"}))
    }, 500);
  }, []);
  return (
    <section className="w-screen h-[calc(100vh-70px)] overflow-hidden">
      <div
        id="home-container"
        className="flex items-center justify-center h-[100%] text-center flex-col"
      >
        <div
          className="text-[4.8rem] tracking-wider h-[250px] text-white mt-[-70px] slogan"
          style={sloganStyle}
        >
          <div>Trouvez votre </div>
          <div className="text-[3.8rem]  text-[#031D40] ">DREAM JOB</div>
        </div>
        <form className="flex flex-col h-[120px] justify-between " style={formStyle}>
          <div className="inputGrp1 [&>input]:outline-none">
            <input
              type="text"
              placeholder="Domain"
              className="pl-5 text-[20px] h-[50px] w-[350px] rounded-l-[200px] "
              autocomplete="off"
            />
            <input
              type="text"
              placeholder="Ville"
              className="pl-5 text-[20px] h-[50px] w-[150px] rounded-r-[250px] border-l  "
              autocomplete="off"
            />
          </div>
          <div className="inputGrp2 [&>input]:outline-none h-[50px] w-[500px] relative">
            <input
              type="text"
              placeholder="Votre formation"
              className=" h-[50px] w-[500px] rounded-[500px] outline-none pl-5 text-[20px]"
            />
            <button className="absolute top-[5px] right-[20px] h-[40px] w-[40px] border rounded-full grid place-content-center bg-[#35506D]">
              <i class="fa-solid fa-magnifying-glass text-white "></i>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
