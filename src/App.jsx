import { Route, Routes } from "react-router"
import HomeLayout from "./HomeLayout"

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap-icons/font/bootstrap-icons.css';

function App() {

  return (
    <>
        <Routes>
          <Route path="/" element={<HomeLayout />}/>
        </Routes>
     </>
  )
}

export default App
