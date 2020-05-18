import React from "react";
import Header from "../components/Menu/Header";
import Program from "../components/Menu/Program";

const Menu = ({ hide, hideMenu }: Props) => {
    return (
        <div id="menu" className={hide ? "hide" : ""}>
            <Header hideMenu={hideMenu} />
            <Program />
            <div>Main</div>
        </div>
    );
};

interface Props {
    hide: boolean;
    hideMenu: () => void;
}

export default Menu;
