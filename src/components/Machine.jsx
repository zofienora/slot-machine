import React, { useState } from "react";


function Machine() {
    const EMOJIS = ["🍒", "🍇", "🍊", "⭐"]; 
    const [slots, setSlots] = useState(["❔"]);  // Initial state with a placeholder emoji and setSlots function to update the state later

    const spin = () => { // the spin function generates three random emojis from the EMOJIS array
    const newSlots = Array.from({ length: 3 }, () => { // array.from creates an array of length 3
    const index = Math.floor(Math.random() * EMOJIS.length); // index is the callback function that generates a random index based on the length of the EMOJIS array
    return EMOJIS[index]; // returns the emoji at the random index
    });
    setSlots(newSlots); // setSlots updates the slots state with the new array of emojis, and it updated the slots in the usestate hook
    };

    return (
        <>
            <div className="container">
                {slots.map((emoji, index) => ( // slots.map iterates over the slots array and returns a new array of JSX elements
                // each emoji is displayed in a div with the class slot-container
                // the key prop is used to uniquely identify each element in the array
                // index is the index of the current element in the array
                // emoji is the current element in the array
                // the emoji is displayed in a paragraph with the class fruit   
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