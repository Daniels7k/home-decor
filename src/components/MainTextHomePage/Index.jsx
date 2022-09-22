import React from "react";
import style from "./mainText.module.scss";

const MainTextHomePage = () => {
  return (
    <>
      <div className={style.mainTextContainer}>
        <h1>HOME & DECOR</h1>
        <hr />
        <p>
          VÁRIOS ITENS DE DECORAÇÃO QUE VÃO DEIXAR SEU AMBIENTE MAIS ELEGANTE
        </p>
      </div>
    </>
  );
};

export default MainTextHomePage;
