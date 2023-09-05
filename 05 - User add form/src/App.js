import React, { useState, Fragment } from "react";

import AddUser from "./Components/User/AddUser";
import UserList from "./Components/User/UserList";

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (username, age) => {

    setUsersList((prevState) => {
      return [...prevState, { username: username, age: age, id: Math.random().toString() }];
    });

  };

  return (
    <Fragment>
      <AddUser onAddUser={addUserHandler} />
      <UserList users={usersList} />
    </Fragment>
  );
}

export default App;
