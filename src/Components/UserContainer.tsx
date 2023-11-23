import React from "react";
import { UserContainerProps } from "../Interfaces/interfaces";
import styles from "../Styling/userPage.module.css";

const UserContainer: React.FC<UserContainerProps> = ({ userData }) => {
  const imageUrl = require(`../Assets/Avatar1.svg`); // just presentational image
  return (
    <div className={styles.userComponentWrapper}>
      <div className={styles.userComponentWrapper__headerWrapper}>
        <img
          className={styles.userComponentWrapper__avatar}
          src={imageUrl.default}
          alt="avatar"
        />
        <div className={styles.userComponentWrapper__nameAndMailWrapper}>
          <div className={styles.userComponentWrapper__name}>
            {userData.name}
          </div>
          <div className={styles.userComponentWrapper__detailSubTitle}>
            {userData.email}
          </div>
        </div>
      </div>
      <div className={styles.userComponentWrapper__contentWrapper}>
        <div className={styles.userComponentWrapper__dateWrapper}>
          <div className={styles.userComponentWrapper__detailTitle}>
            {userData.birthDate}
          </div>
          <div className={styles.userComponentWrapper__detailSubTitle}>
            Birth Date
          </div>
        </div>
        <div className={styles.userComponentWrapper__addressWrapper}>
          <div className={styles.userComponentWrapper__detailTitle}>
            {userData.address}
          </div>
          <div className={styles.userComponentWrapper__detailSubTitle}>
            Address
          </div>
        </div>
        <div className={styles.userComponentWrapper__phoneWrapper}>
          <div className={styles.userComponentWrapper__detailTitle}>
            {userData.phone}
          </div>
          <div className={styles.userComponentWrapper__detailSubTitle}>
            Phone number
          </div>
        </div>
        <div className={styles.userComponentWrapper__passwordWrapper}>
          <div className={styles.userComponentWrapper__detailTitle}>
            {userData.password}
          </div>
          <div className={styles.userComponentWrapper__detailSubTitle}>
            Password
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserContainer;
