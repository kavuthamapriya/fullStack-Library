import React from 'react';
import "../styles/adminPage.css";
import UserBooklist from './UserBookList';
// import BorrowBooklist from './BorrowBooks';

const UserBookData: React.FC = () => {


  return (
    <>
      <div className='userDashboard'>
        <div className='navbar'>
          <h1>Welcome To Your Dashboard</h1>
        </div>
        <div className='UserDatacontainer'>
          <UserBooklist />
          {/* <BorrowBooklist /> */}
        </div>
        
     </div>
    </>
  );
};

export default UserBookData;
