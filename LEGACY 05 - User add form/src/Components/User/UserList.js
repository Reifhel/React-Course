import React from "react";
import Card from "../UI/Card";

import styles from "./UserList.module.css";

function UserList(props) {

  return (
    <Card className={styles.users}>
      <ul>
        {props.users.map((item) => {
          return (
            <li key={item.id}>
              {item.username} ({item.age} years old)
            </li>
          );
        })}
      </ul>
    </Card>
  );
}

export default UserList;
