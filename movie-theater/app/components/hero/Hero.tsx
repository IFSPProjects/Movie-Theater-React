import React from "react";
import "./Hero.css"

export function Hero() {
    return (
        <section className="hero">
            <div className="hero-content">
                <h1>Encontre os melhores eventos perto de você</h1>

                <p>
                    Compre ingressos para shows, teatros, festivais e eventos
                    esportivos.
                </p>

                <div className="search-box">
                    <input
                        type="text"
                        placeholder="Buscar eventos..."
                    />

                    <button>Pesquisar</button>
                </div>
            </div>
        </section>
    )
}