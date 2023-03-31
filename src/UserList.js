import React, { useState, useEffect } from "react";
import axios from "axios";
import "./UserList.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'

const UserList = () => {
  const [listOfUsers, setListOfUsers] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => setListOfUsers(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <h1>User List</h1>
      <ul className="list-group list-group-flush">
        {listOfUsers.map((user) => (
          <li key={user.id} className='list-group-item d-flex justify-content-start'>
            <span className="icon">
              <i className="bi bi-person"></i>
            </span>
            <span>{user.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
