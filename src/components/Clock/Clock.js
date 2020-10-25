import React, {useEffect, useState} from "react";
import {getDayOfAWeek, getTimeOfADay} from "../../utlis/dates";

export const Clock = () => {
    const [clock, setClock] = useState(() => new Date().toLocaleTimeString());

    const titleText = `It's ${getDayOfAWeek[new Date().getDay()]} ${getTimeOfADay(
        new Date().getHours()
    )}`.toUpperCase();

    useEffect(() => {
        const interval = setInterval(() => {
            setClock(new Date().toLocaleTimeString());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <h1
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
                color: "white",
                lineHeight: "1",
                padding: "0.25em",
                justifyContent: "center",
                fontSize: "24px",
            }}
        >
            {titleText}
            <span
                style={{
                    display: "flex",
                    fontSize: "12px",
                }}
            >
        {clock}
      </span>
        </h1>
    );
};
