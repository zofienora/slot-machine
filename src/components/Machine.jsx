import React, { useState } from "react";


function Machine() {
    const EMOJIS = ["🍒", "🍋", "🍇", "🍊", "🔔", "⭐"];
    const [slots, setSlots] = useState(["❔", "❔", "❔"]);

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
                <button className="spin-button">Spin</button>
            </div>

        </>





  );
}

export default Machine;