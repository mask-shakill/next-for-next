import React from "react";
import styles from "../module-wise-css/page.module.css";
const ModuleWiseCss = () => {
  return (
    <div>
      <h1 className={`${styles.main}  p-10`}>hello module wise css </h1>
      <div
        className={`${styles.card} text-center
      font-bold p-10 border-4`}
      >
        <h1>Card title</h1>
        <h1>Card descriptions..</h1>
        <p>Card Image</p>
      </div>
    </div>
  );
};

export default ModuleWiseCss;
