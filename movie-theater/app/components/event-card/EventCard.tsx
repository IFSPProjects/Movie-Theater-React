import React from "react";
import "./EventCard.css"

type EventCardProps = {
    title: string;
    date: string;
    location: string;
    image: string;
    price: string;
    link: string;
};

export function EventCard({
    title,
    date,
    location,
    image,
    price,
    link,
}: EventCardProps) {
    return (
        <div className="event-card">
            <img src={image} alt={title} />

            <div className="event-content">
                <h3>{title}</h3>

                <p>{date}</p>
                <p>{location}</p>

                <div className="event-footer">
                    <span>A partir de {price}</span>

                    <button>Comprar</button>
                </div>
            </div>
        </div>
    );
}