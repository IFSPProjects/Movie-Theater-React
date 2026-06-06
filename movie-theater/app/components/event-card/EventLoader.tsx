import React, { useEffect, useState } from "react";
import { EventCard } from "./EventCard";

type EventLoaderProps = {
    qnt: number;
}

type EventCardProps = {
    title: string;
    date: string;
    location: string;
    image: string;
    price: string;
    link: string;
};

let cards: Array<EventCardProps>;

function setData (data: string) {
    const model = JSON.parse(data);
    const listObj = model.map((obj: {
        title: string;
        date: string;
        location: string;
        image: string;
        price: string;
        link: string;
    }) => (<EventCard key={obj.title} {...obj}/>))
    cards = listObj;
}

export function EventLoader({
    qnt
}: EventLoaderProps) {

    const [rendered, setRendered] = useState([])

    useEffect(() => {
    fetch("/api/data/events.json")
    .then(response => {
        if (response.ok) {
            return response.json()
        }
        throw response;
    })
    .then(data => {
         setRendered(data.slice(0, qnt));
    })
    .catch(error => {
        console.error("Error fetching data");
    })
})
    return (
        <> {rendered.map((obj: {
        title: string;
        date: string;
        location: string;
        image: string;
        price: string;
        link: string;
    }) => (<EventCard key={obj.title} {...obj}/>))} </>
    );
}