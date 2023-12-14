import { useEffect } from "react";

export default function Home() {
  useEffect(()=>{
    document.body.onload(()=>{
        console.log(true)
    })
  },[])
  return (
    <section className="w-screen h-[calc(100vh-70px)]">
      <div id="home-container" className="flex items-center justify-center h-[100%] text-center">
       <div className="text-[6rem] t3d text-[#fff] font-bold h-[250px] mt-[-70px]" >
        Trouvez votre <div className="text-[5rem] text-[#031D40]">DREAM JOB</div></div> 
      </div>
      <div>{/* <input type="text" /> */}</div>
    </section>
  );
}
