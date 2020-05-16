import React, { useState, useRef, useEffect } from "react";
import Slider from "./Slider";

const Banner = () => {
    const [program] = useState([
        "Music Bank",
        "Inkigayo",
        "M Countdown",
        "Music Core",
    ]);
    const [pos, setPos] = useState(0);
    const intervalRef = useRef();

    useEffect(() => {}, []);

    const button = [];
    for (let x = 0; x < 4; x++) {
        button.push(
            <div
                className={"button" + (pos === x ? " show" : "")}
                onClick={() => {
                    clearInterval(intervalRef.current);
                    setPos(x);
                }}
            >
                <div className="tooltip">{program[x]}</div>
                <div>x</div>
            </div>
        );
    }

    return (
        <div className="banner" style={{ height: window.innerHeight }}>
            <Slider pos={pos} />
            <div className="button-con">{button}</div>
            {pos > 0 ? (
                <div
                    className="arrow left"
                    onClick={() => {
                        clearInterval(intervalRef.current);
                        setPos(pos - 1);
                    }}
                >
                    {"<"}
                </div>
            ) : (
                <></>
            )}
            {pos < 3 ? (
                <div
                    className="arrow right"
                    onClick={() => {
                        clearInterval(intervalRef.current);
                        setPos(pos + 1);
                    }}
                >
                    {">"}
                </div>
            ) : (
                <></>
            )}
        </div>
    );
};

export default Banner;
