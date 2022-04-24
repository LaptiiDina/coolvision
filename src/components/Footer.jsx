import React from 'react'

const Footer = ({ handleClick,  setCount }) => {
    const AllButtonAray = [1, 2, 3, 4, 5];
    return (
        <div className="block">
            <div className="block_btn">

                {AllButtonAray.map((n, index) => {

                    return <button key={index} className="btn" onClick={() => setCount(index)}>{n}</button>
                })}

            </div>
            <button onClick={handleClick}>Shuffle</button>
        </div>
    )
}

export default Footer