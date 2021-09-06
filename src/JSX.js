import React from "react";

function JSX(){
    const style = {
        backgroundColor: "black",
        color : "aqua",
        fontSize: 24,
        padding: "1rem",
    };
    const name = "kimminseong";
    const age = 17;
    return (
        <>
            <div style={style}>저의 이름은 {name}입니다.</div>
            <div>저의 나이는 {age}입니다.</div>
            <div className="gray-box"></div>
        </>
    )
}

export default JSX;