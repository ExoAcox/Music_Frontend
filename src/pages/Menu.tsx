import React from "react";

const Menu = ({ hide, hideMenu }: Props) => {
    return (
        <div id="menu" className={!hide && "hide"} onClick={hideMenu}>
            Menu nih
        </div>
    );
};

interface Props {
    hide: boolean;
    hideMenu: () => void;
}

export default Menu;
