import React from "react";
import style from "./footer.module.scss";

const Footer = () => {
  return (
    <div style={{textAlign: "center"}}>
    <div className={style.footerContainer}>
      <div className={style.leftContent}>
        <div className={style.atendimentoContainer}>
          <h3>ATENDIMENTO</h3>
          <p>Segunda á Sexta-feira : 08hrs ás 19hrs</p>
          <p>Sábado: 8hrs ás 16hrs</p>
        </div>
        <div className={style.contatosContainer}>
          <h3>CONTATOS</h3>
          <p>Telefone Loja física:</p>
          <p>(61) 9999-9999</p>
          <p> WhatsApp: (61) 9999-9999</p>
          <p>E-mail: atendimento@h&d.com.br</p>
        </div>
      </div>

      <div>
        <h3>SOBRE A H&D</h3>
        <p>Quem somos</p>
        <p>Loja física</p>
        <p>Politica de privacidade</p>
        <p>Troca e devoluções</p>
        <p>Formas de pagamento:</p>
        <img src="/iconesFormaPagamento.png" alt="iconesFormaPagamento" />
      </div>
    </div>

<p>Copyright   2022 - All Rights Reserved - Ana Karoline</p>
</div>
  );
};

export default Footer;
