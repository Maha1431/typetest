import { Navigate, Route, Routes } from "react-router-dom";
import { useRedux } from "./hooks/useRedux";
import { Home } from "./Pages/Home";
import { About } from "./Pages/About";
import { Auth } from "./Pages/Auth";
import { Account } from "./Pages/Account";
import { themeVisibilitySlice } from "./redux/themeVisibilitySlice";

function App() {
  const { themeSelector, themeVSelector, themeVDispatch, authSelector } = useRedux();
  const { inVisibleTheme } = themeVisibilitySlice.actions;

  return (
    <div className={`${themeSelector} App relative bg-custom-fill`} onClick={() =>
      themeVSelector && themeVDispatch(inVisibleTheme())

    }>
      {(themeVSelector) && (
        <div className="z-20 fixed w-full h-full bg-custom-fadedBlack"></div>
      )}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Auth" element={!authSelector ? <Auth />: <Navigate to={"/"}/>} />
        <Route path="/Account" element={authSelector ? <Account />: <Navigate to={"/"}/>} />
      </Routes>
    </div>
  );
}

export default App;
