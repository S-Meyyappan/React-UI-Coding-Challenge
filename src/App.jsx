import { Route, Routes } from "react-router"
import HomeLayout from "./HomeLayout"

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useRef } from "react";
import { Toast } from "bootstrap"; 

import Userlist from "./components/Userlist";
import AddUser from "./components/AddUser";

function App() {

  return (
    <>
        <Routes>
          <Route path="/" element={<HomeLayout />}>
            <Route path="user-list" element={<Userlist />}/>
            <Route path="add-user" element={<AddUser />}/>
          </Route>
        </Routes>
     </>
  )
}

export default App
