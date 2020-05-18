import React from "react";
import Back from "../../images/back.svg";

const Header = ({ hideMenu }: Props) => {
    return (
        <div className="header">
            <div onClick={hideMenu} className="back">
                <Back className="back-icon" />
                <span>Back to home</span>
            </div>
        </div>
    );
};

interface Props {
    hideMenu: () => void;
}

export default Header;
