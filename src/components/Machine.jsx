import React, { useState } from "react";


function Machine() {
    const EMOJIS = ["🍒", "🍋", "🍇", "🍊", "🔔", "⭐"];
    const [slots, setSlots] = useState(["❔"]);

    const spin = () => {
    const newSlots = Array.from({ length: 1 }, () => {
    const index = Math.floor(Math.random() * EMOJIS.length);
    return EMOJIS[index];
    });
    setSlots(newSlots);
    };

    return (
        <>
            <div className="container">
                <div className="slot-container">
                    <p className="fruit">{slots}</p>
                </div>
                <div className="slot-container">
                    <p className="fruit">{slots}</p>
                </div>
                <div className="slot-container">
                    <p className="fruit">{slots}</p>
                </div>
            </div>

            <div className="container">
                <button className="spin-button" onClick={spin} >Spin</button>
            </div>

        </>





  );
}

export default Machine;