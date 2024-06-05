import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Viewbook from "./Components/userComponents/UserBookList";
import AdminDashboard from "./Components/AdminComponents/AdminDashboard";
import "./Components/ProtectedRoutes";
import ProtectedRoutes from "./Components/ProtectedRoutes";

const App = () => {
  return (
    <>
      <div className="container">
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <ProtectedRoutes>
                  <Home />
                </ProtectedRoutes>
              }
            />
            <Route
              path="/login"
              element={
                <ProtectedRoutes>
                  <Login />
                </ProtectedRoutes>
              }
            />
            <Route
              path="/register"
              element={
                <ProtectedRoutes>
                  <Register />
                </ProtectedRoutes>
              }
            />
            <Route
              path="/viewbook"
              element={
                <ProtectedRoutes>
                  <Viewbook />
                </ProtectedRoutes>
              }
            />
            <Route
              path="/admindashboard"
              element={
                <ProtectedRoutes>
                  <AdminDashboard />
                </ProtectedRoutes>
              }
            />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
};

export default App;
