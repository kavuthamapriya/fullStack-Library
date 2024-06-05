// import React from 'react';
// import BookTable from './BookTable';
// import UserTable from './userTable';
// import UserBookTable from './userBook';
// import './AdminDashboard.css'

// const UserBookData: React.FC = () => {
// return (<>
//   <div className='userDashboard'>
//     <div className='navbar'>
//       <h1>Welcome Dashboard</h1>
//       <button onClick={() => localStorage.removeItem('token')} className='backButton'>Logout</button>
//       </div>
//       <div className='UserDatacontainer'>
//       <UserTable/>
//       <BookTable/>

//       </div>
//       <UserBookTable/>
//       </div>
//     </>
//   );
// };

// export default UserBookData;

// import React, { useState } from 'react';
// import { useNavigate } from "react-router-dom";

// import BookTable from './BookTable';
// import UserTable from './userTable';
// import UserBookTable from './BookTable';
// import './AdminDashboard.css';

// function AdminDashboard() {

//   const navigate = useNavigate();

//   const logout = () => {
//     localStorage.removeItem('Atoken');
//     navigate('/');
//   };

// const UserBookData: React.FC = () => {
//   const [view, setView] = useState<'users' | 'books' | 'userBooks'>('users');

//   return (
//     <>
//       <div className='userDashboard'>
//         <div className='navbar'>
//           <h1>Welcome Dashboard</h1>
//           <button onClick={() => localStorage.removeItem('token')} className='backButton' onClick={logout}>Logout</button>
//           <button onClick={() => setView('users')} className='navButton'>View Users</button>
//           <button onClick={() => setView('books')} className='navButton'>Borrow Books</button>
//           <button onClick={() => setView('userBooks')} className='navButton'>User List</button>
//         </div>
//         <div className='UserDatacontainer'>
//           {view === 'users' && <UserTable />}
//           {view === 'books' && <BookTable />}
//           {view === 'userBooks' && <UserBookTable />}
//         </div>
//       </div>
//     </>
//   );
// };

// export default AdminDashboard;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BookTable from "./BookTable";
import UserTable from "./userTable";
import UserBookTable from "./userBook";
import "./AdminDashboard.css";

const AdminDashboard: React.FC = () => {
  const navigate = useNavigate();
  const [view, setView] = useState<"users" | "books" | "userBooks">("users");

  const logout = () => {
    localStorage.removeItem("Atoken");
    navigate("/");
  };

  return (
    <div className="userDashboard">
      <div className="navbar">
        <h1>Welcome Dashboard</h1>
        <button onClick={logout} className="backButton">
          Logout
        </button>
        <button onClick={() => setView("users")} className="navButton">
          View Users
        </button>
        <button onClick={() => setView("books")} className="navButton">
          Book Lists
        </button>
        <button onClick={() => setView("userBooks")} className="navButton">
          Borrow Books
        </button>
      </div>
      <div className="UserDatacontainer">
        {view === "users" && <UserTable />}
        {view === "books" && <BookTable />}
        {view === "userBooks" && <UserBookTable />}
      </div>
    </div>
  );
};

export default AdminDashboard;
