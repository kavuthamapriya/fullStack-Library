import React, { useState, useEffect } from 'react';
import '../AdminComponents/UserBook.css'


interface User {
  ID: number;
  username: string;
}

interface Book {
  ID: number;
  bookname: string;
}

interface UserBook {
  ID: number;
  username: User;
  bookname: Book;
  startdate: string;
  enddate: string;
}

const UserBookTable: React.FC = () => {
  const [userBooks, setUserBooks] = useState<UserBook[]>([]);
  const [error, setError] = useState('');

  //const [isBorrowing, setIsBorrowing] = useState(false);

  useEffect(() => {
    const fetchUserBooks = async () => {
      try {
        const response = await fetch('http://localhost:9082/user/borrowed', {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        });
        const data = await response.json();
        setUserBooks(data);
      } catch (err) {
        setError('Error fetching user books');
      }
    };

    fetchUserBooks();
  }, []);



  return (
    <>
      <div className='TableContainer'>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <div className="BookHead">
          <h2>Borrowed Books</h2>
      {/*<button type="button" className="BookButton" onClick={() => setIsBorrowing(true)}>Borrow New Book</button>*/}
        </div>
        <table>
          <thead>
            <tr>
              <th>Book ID</th>
              <th>Book Name</th>
              <th>User ID</th>
              <th>Username</th>
              <th>Start Date</th>
              <th>End Date</th>
            </tr>
            <hr />
          </thead>
          <tbody>
            {userBooks.map((userBook) => (
              <React.Fragment key={userBook.ID}>
                <tr>
                  <td>{userBook.bookname.ID}</td>
                  <td>{userBook.bookname.bookname}</td>
                  <td>{userBook.username.ID}</td>
                  <td>{userBook.username.username}</td>
                  <td>{new Date(userBook.startdate).toLocaleDateString()}</td>
                  <td>{new Date(userBook.enddate).toLocaleDateString()}</td>
                </tr>
                <hr />
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default UserBookTable;
