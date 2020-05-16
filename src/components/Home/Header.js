import React, { useState, useEffect } from "react";

const Header = () => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        document.addEventListener("scroll", () => {
            if (window.scrollY < 100) {
                setShow(false);
            } else {
                setShow(true);
            }
        });
    }, []);

    return (
        <div className={"header" + (show ? " show" : "")}>
            <div className="menu-con">
                <div className="menu">Home</div>
                <div className="menu">Player</div>
            </div>
        </div>
    );
};

export default Header;
