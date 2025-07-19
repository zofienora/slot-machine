import React, { useState } from "react";


function Machine() {
    const EMOJIS = ["🍒", "🍇", "🍊", "⭐"];
    const [slots, setSlots] = useState(["❔"]);

    const spin = () => {
    const newSlots = Array.from({ length: 3 }, () => {
    const index = Math.floor(Math.random() * EMOJIS.length);
    return EMOJIS[index];
    });
    setSlots(newSlots);
    };

    return (
        <>
            <div className="container">
                {slots.map((emoji, index) => (
                <div className="slot-container" key={index}>
                    <p className="fruit">{emoji}</p>
                </div>
                ))}
            </div>

            <div className="container">
                <button className="spin-button" onClick={spin} >Spin</button>
            </div>
        </>
  );
}

export default Machine;