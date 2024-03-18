import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./App.css";
import AddVideo from "./Components/AddVideo/AddVideo";
import Videos from "./Components/Videos/Videos";
import SingleVideo from "./Components/SingleVideo/SingleVideo";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/addvideo"
            element={
              <>
                <AddVideo />
              </>
            }
          />
          <Route
            path="/videos"
            element={
              <>
                <Videos />
              </>
            }
          />
          <Route
            path="/singlevideo"
            element={
              <>
                <SingleVideo />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
