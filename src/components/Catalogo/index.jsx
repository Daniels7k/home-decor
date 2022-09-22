import React from "react";
import style from "./catalogo.module.scss";

import { catalogoData } from "./catalogoData";

const Catalogo = () => {
  return (
    <div className={style.catalogoContainer}>
      <div className={style.header}>
        <h3>CATALÓGO</h3>
      </div>

      <div className={style.productsRender}>
        {catalogoData.map((item, i) => (
          <div className={style.productBox} key={i} >
            <div >
              <img className={style.productImage} src={item.img} alt={item.nome} />
            </div>
            <div className={style.productBottom}>
              <p className={style.productTitle}>{item.name}</p>
              <p className={style.productPrice}>R$ {item.price} (Cada)</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Catalogo;
