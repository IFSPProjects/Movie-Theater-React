import React from "react";
import "./Footer.css";
import { Link } from "react-router";

export const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer__container">
                <div className="footer__section">
                    <h2 className="footer__logo">TicketNow</h2>

                    <p className="footer__description">
                        Sua plataforma para comprar ingressos de shows, festivais,
                        eventos esportivos, teatros e muito mais.
                    </p>
                </div>

                <div className="footer__section">
                    <h3>Navegação</h3>

                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>

                        <li>
                            <Link to="/eventos">Eventos</Link>
                        </li>

                        <li>
                            <Link to="/login">Entrar</Link>
                        </li>

                        <li>
                            <Link to="/registro">Cadastrar-se</Link>
                        </li>
                    </ul>
                </div>

                <div className="footer__section">
                    <h3>Categorias</h3>

                    <ul>
                        <li>Shows</li>
                        <li>Festivais</li>
                        <li>Teatro</li>
                        <li>Esportes</li>
                        <li>Stand-up</li>
                    </ul>
                </div>

                <div className="footer__section">
                    <h3>Contato</h3>

                    <ul>
                        <li>contato@ticketnow.com</li>
                        <li>(11) 99999-9999</li>
                        <li>São Paulo - SP</li>
                    </ul>

                    <div className="footer__socials">
                        <a
                            href="https://facebook.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Facebook
                        </a>

                        <a
                            href="https://instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Instagram
                        </a>

                        <a
                            href="https://x.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            X
                        </a>
                    </div>
                </div>
            </div>

            <div className="footer__bottom">
                <p>
                    © {currentYear} TicketNow. Todos os direitos reservados.
                </p>
            </div>
        </footer>
    );
};