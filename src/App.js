import Nav from "./pages/nav/nav";
import Home from "./pages/home/home";
import Explore from "./pages/explore/explore"
import Error from "./pages/error/error";

import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <Nav />
   <Routes>
    <Route path="home" element={<Home />}></Route>
    <Route path="explore" element={<Explore />}></Route>
    <Route path="*" element={<Error />}></Route>
   </Routes>
    </>
  );
}

export default App;
