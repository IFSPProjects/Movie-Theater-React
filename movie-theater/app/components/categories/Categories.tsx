import React from "react";
import "./Categories.css"

export function Categories() {
    return (
        <section className="categories">
            <h2>Categorias</h2>

            <div className="category-list">
                <div className="category">🎵 Shows</div>
                <div className="category">🎭 Teatro</div>
                <div className="category">⚽ Esportes</div>
                <div className="category">🎤 Stand Up</div>
            </div>
        </section>
    )
}        
