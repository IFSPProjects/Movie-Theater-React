import React from "react";
import "./Header.css"

export function Header() {
  return (
    <header className="header">
      <div className="logo">TicketNow</div>

      <nav>
        <a href="#">Eventos</a>
        <a href="#">Shows</a>
        <a href="#">Teatro</a>
        <a href="#">Esportes</a>
      </nav>

      <button className="login-btn">Entrar</button>
    </header>
  );
}