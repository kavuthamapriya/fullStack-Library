import React from 'react';
import BookTable from './BookTable';
import UserTable from './userTable';
import UserBookTable from './userBook';
import './AdminDashboard.css'

const UserBookData: React.FC = () => {
return (<>
  <div className='userDashboard'>
    <div className='navbar'>
      <h1>Welcome Dashboard</h1>
      <button onClick={() => localStorage.removeItem('token')} className='backButton'>Logout</button>
      </div>
      <div className='UserDatacontainer'>
      <UserTable/>
      <BookTable/>

      </div>
      <UserBookTable/>
      </div>
    </>
  );
};

export default UserBookData;
