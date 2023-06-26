import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import { routes } from "./Components/utils/routes";
import Home from "./Routes/Home";
import Contact from "./Routes/Contact"
import Favs from "./Routes/Favs"


function App() {
  return (
      <div className="App">
          <Routes>
            <Route path ='/' element={<Layout/>}>
              <Route path={routes.home} element={<Home/>}/>
              <Route path={routes.contact} element={<Contact/>}/>
              <Route path={routes.favourites} element={<Favs/>}/>
            </Route>
          </Routes>

      </div>
  );
}

export default App;
