import React from "react";
import { useSelector } from "react-redux";
import { User } from "../Interfaces/interfaces";
import { selectUsers } from "../Redux/user-slice";
import UserContainer from "./UserContainer";
import styles from "../Styling/userPage.module.css";

const UserListContainer: React.FC = () => {
  const users = useSelector(selectUsers);

  return (
    <div className={styles.mainWrapper}>
      {users.map((user: User) => (
        <UserContainer key={user.id} userData={user} />
      ))}
    </div>
  );
};

export default UserListContainer;
