import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserDetails from "./components/UserDetails";
import AddUser from "./components/AddUser";
import EditUser from "./components/EditUser";
import UserInfoCard from "./components/UserInfoCard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={UserDetails} exact />
        <Route path="/add" Component={AddUser} exact />
        <Route path="/edit/:id" Component={EditUser} exact />
        <Route path="/user/:id" Component={UserInfoCard} exact />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
