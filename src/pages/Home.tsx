import React, { useState, useRef, useEffect } from "react";
import Menu from "./Menu";
import Left from "../components/Home/Left";
import Right from "../components/Home/Right";
import Preview from "../components/Home/Preview";

const Home = () => {
    const [data, setData] = useState({
        date: "12-12-2018",
        artist: "GFRIEND",
        title: "Sunrise",
        program: "Inkigayo",
        itunes_url:
            "https://embed.music.apple.com/us/album/gfriend-the-2nd-album-time-for-us/1449453361?app=music",
        cover_art:
            "https://is2-ssl.mzstatic.com/image/thumb/Music124/v4/04/12/0b/04120b71-ccd0-6fa3-0897-c12e03f94af7/cover-_GFRIEND.jpg/600x600bb.jpeg",
        last_winner: {
            artist: "KARA",
            title: "Pandora",
            itunes_url:
                "https://embed.music.apple.com/us/album/gfriend-the-2nd-album-time-for-us/1449453361?app=music",
        },
        stats: {
            win: 3,
            win_all: 7,
            artist_win: 25,
            artist_win_all: 51,
        },
    });
    const [pos, setPos] = useState(0);
    const [bg, setBg] = useState(false);
    const [menu, setMenu] = useState(false);
    const [preview, setPreview] = useState(false);

    const hideMenu = () => {
        setMenu(false);
        setTimeout(() => setBg(false), 300);
    };
    const showMenu = () => {
        setBg(!bg);
        setTimeout(() => setMenu(true), 1000);
    };

    const menu_bg: JSX.Element[] = [];
    for (let x = 0; x < 4; x++) {
        menu_bg.push(<div className={"menu-bg" + (bg ? " show" : "")} />);
    }

    return (
        <div id="home">
            <Left data={data} showMenu={showMenu} />
            <Right data={data} pos={pos} setPos={(e: number) => setPos(e)} />
            {menu_bg}
            {menu ? <Menu hideMenu={hideMenu} hide={menu} /> : <></>}
            {preview ? <Preview url={data.itunes_url} /> : <></>}
        </div>
    );
};

export default Home;
